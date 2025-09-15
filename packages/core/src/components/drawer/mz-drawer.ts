import { LitElement, css, html, nothing } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'
import { FocusTrap } from '../../utils/focus-trap.js'

@customElement('mz-drawer')
export class MzDrawer extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host { display: contents; }

      .scrim {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.3);
        opacity: 0;
        pointer-events: none;
        transition: opacity var(--mz-transition-normal);
        backdrop-filter: blur(4px);
      }

      .scrim.open {
        opacity: 1;
        pointer-events: auto;
      }

      .panel {
        position: fixed;
        top: 0;
        bottom: 0;
        width: var(--mz-space-80);
        background: var(--mz-color-neutral-0);
        color: var(--mz-color-neutral-900);
        box-shadow: var(--mz-shadow-lg);
        transform: translateX(100%);
        transition: transform var(--mz-transition-normal);
        z-index: 1001;
      }

      .left {
        left: 0;
        transform: translateX(-100%);
      }

      .right {
        right: 0;
      }

      .panel.open.right {
        transform: translateX(0);
      }

      .panel.open.left {
        transform: translateX(0);
      }

      .inner {
        height: 100%;
        overflow: auto;
        padding: var(--mz-space-4);
        position: relative;
      }

      .close-button {
        position: absolute;
        top: var(--mz-space-2);
        right: var(--mz-space-2);
        width: var(--mz-space-8);
        height: var(--mz-space-8);
        border: none;
        background: var(--mz-color-neutral-100);
        border-radius: var(--mz-radius-full);
        cursor: pointer;
        color: var(--mz-color-neutral-600);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: var(--mz-transition-normal);
      }

      .close-button:hover {
        background: var(--mz-color-neutral-200);
        color: var(--mz-color-neutral-800);
        transform: rotate(90deg);
      }

      .close-button:focus-visible {
        outline: 2px solid var(--mz-color-primary-500);
        outline-offset: var(--mz-space-0-5);
      }

      :host([no-close-button]) .close-button {
        display: none;
      }

      /* Size variants */
      :host([size='sm']) .panel {
        width: var(--mz-space-64);
      }

      :host([size='lg']) .panel {
        width: var(--mz-space-96);
      }

      :host([size='full']) .panel {
        width: 100%;
      }

      /* Accessibility */
      @media (prefers-reduced-motion: reduce) {
        .scrim,
        .panel {
          transition: none;
        }
      }
    `
  ]

  @property({ type: Boolean, reflect: true }) open = false
  @property({ type: String }) placement: 'left' | 'right' = 'right'
  @property({ type: Boolean }) closable = true
  @property({ type: Boolean, reflect: true, attribute: 'no-close-button' }) noCloseButton = false
  @property({ type: String, reflect: true }) size: 'sm' | 'md' | 'lg' | 'full' = 'md'
  @property({ type: String, attribute: 'aria-label' }) ariaLabel = ''
  @property({ type: String, attribute: 'aria-describedby' }) ariaDescribedBy = ''

  @query('.panel') private panel!: HTMLElement

  private focusTrap?: FocusTrap
  private boundKeyDownHandler?: (e: KeyboardEvent) => void
  private scrollPosition = 0

  connectedCallback(): void {
    super.connectedCallback()
    this.boundKeyDownHandler = this.handleKeyDown.bind(this)
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    this.cleanup()
  }

  private cleanup() {
    // Remove event listener
    if (this.boundKeyDownHandler) {
      document.removeEventListener('keydown', this.boundKeyDownHandler)
    }

    // Deactivate focus trap
    if (this.focusTrap) {
      this.focusTrap.deactivate()
      this.focusTrap = undefined
    }

    // Restore body scroll
    this.restoreBodyScroll()
  }

  private handleKeyDown(e: KeyboardEvent) {
    if (this.open && this.closable && e.key === 'Escape') {
      e.preventDefault()
      this.close('keyboard')
    }
  }

  private preventBodyScroll() {
    this.scrollPosition = window.scrollY
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.top = `-${this.scrollPosition}px`
    document.body.style.width = '100%'
  }

  private restoreBodyScroll() {
    document.body.style.overflow = ''
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.width = ''
    window.scrollTo(0, this.scrollPosition)
  }

  public show() {
    if (this.open) return

    // Dispatch mz-show event (can be cancelled)
    const showEvent = this.dispatchEvent(new CustomEvent('mz-show', {
      detail: {
        placement: this.placement,
        size: this.size
      },
      bubbles: true,
      composed: true,
      cancelable: true
    }))

    if (!showEvent) return // Event was cancelled

    this.open = true

    // Add event listener
    if (this.boundKeyDownHandler) {
      document.addEventListener('keydown', this.boundKeyDownHandler)
    }

    // Prevent body scroll
    this.preventBodyScroll()

    // Wait for render then setup focus trap
    this.updateComplete.then(() => {
      if (this.panel && !this.focusTrap) {
        this.focusTrap = new FocusTrap(this.panel)
        this.focusTrap.activate()
      }

      // Announce to screen readers
      this.announceToScreenReader('Navigation drawer opened')

      // Dispatch after-show event
      this.dispatchEvent(new CustomEvent('mz-after-show', {
        detail: {
          placement: this.placement,
          size: this.size
        },
        bubbles: true,
        composed: true
      }))
    })

    // Dispatch legacy event for backwards compatibility
    this.dispatchEvent(new CustomEvent('mz-drawer-open', {
      bubbles: true,
      composed: true
    }))
  }

  public close(source: 'overlay' | 'keyboard' | 'close-button' | 'method' = 'method') {
    if (!this.open) return

    // Dispatch mz-request-close event (can be cancelled)
    const requestCloseEvent = this.dispatchEvent(new CustomEvent('mz-request-close', {
      detail: {
        source,
        placement: this.placement,
        size: this.size
      },
      bubbles: true,
      composed: true,
      cancelable: true
    }))

    if (!requestCloseEvent) return // Event was cancelled

    // Dispatch mz-hide event (can be cancelled)
    const hideEvent = this.dispatchEvent(new CustomEvent('mz-hide', {
      detail: {
        source,
        placement: this.placement,
        size: this.size
      },
      bubbles: true,
      composed: true,
      cancelable: true
    }))

    if (!hideEvent) return // Event was cancelled

    // Dispatch legacy close event (can be cancelled)
    const closeEvent = this.dispatchEvent(new CustomEvent('mz-drawer-close', {
      bubbles: true,
      composed: true,
      cancelable: true
    }))

    if (!closeEvent) return // Event was cancelled

    this.open = false

    // Cleanup
    this.cleanup()

    // Dispatch after-hide event after animation
    setTimeout(() => {
      this.dispatchEvent(new CustomEvent('mz-after-hide', {
        detail: {
          source,
          placement: this.placement,
          size: this.size
        },
        bubbles: true,
        composed: true
      }))
    }, 300) // Match CSS transition duration

    // Dispatch legacy closed event
    this.dispatchEvent(new CustomEvent('mz-drawer-closed', {
      bubbles: true,
      composed: true
    }))

    // Announce to screen readers
    this.announceToScreenReader('Navigation drawer closed')
  }

  private announceToScreenReader(message: string) {
    const announcement = document.createElement('div')
    announcement.setAttribute('role', 'status')
    announcement.setAttribute('aria-live', 'polite')
    announcement.style.position = 'absolute'
    announcement.style.left = '-10000px'
    announcement.style.width = '1px'
    announcement.style.height = '1px'
    announcement.style.overflow = 'hidden'
    announcement.textContent = message

    document.body.appendChild(announcement)

    setTimeout(() => {
      document.body.removeChild(announcement)
    }, 1000)
  }

  protected firstUpdated() {
    // Ensure drawer starts closed on initial render
    if (this.open) {
      this.open = false;
    }
  }

  private handleScrimClick(e: MouseEvent) {
    if (this.closable) {
      // Dispatch overlay click event
      this.dispatchEvent(new CustomEvent('mz-overlay-click', {
        detail: {
          originalEvent: e
        },
        bubbles: true,
        composed: true
      }))
      this.close('overlay')
    }
  }

  private handleCloseClick(e: MouseEvent) {
    // Dispatch close button click event
    this.dispatchEvent(new CustomEvent('mz-close-button-click', {
      detail: {
        originalEvent: e
      },
      bubbles: true,
      composed: true
    }))
    this.close('close-button')
  }

  render() {
    const side = this.placement === 'left' ? 'left' : 'right'
    const drawerLabel = this.ariaLabel || 'Navigation drawer'

    return html`
      <div
        class="scrim ${this.open ? 'open' : ''}"
        @click=${(e: MouseEvent) => this.handleScrimClick(e)}
        aria-hidden="true"
      ></div>
      <aside
        class="panel ${side} ${this.open ? 'open' : ''}"
        role="dialog"
        aria-modal="true"
        aria-label=${drawerLabel}
        aria-describedby=${this.ariaDescribedBy || nothing}
        aria-hidden=${!this.open ? 'true' : 'false'}
      >
        ${!this.noCloseButton && this.closable ? html`
          <button
            class="close-button"
            aria-label="Close drawer"
            @click=${(e: MouseEvent) => this.handleCloseClick(e)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        ` : ''}
        <div class="inner">
          <slot></slot>
        </div>
      </aside>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mz-drawer': MzDrawer
  }
}