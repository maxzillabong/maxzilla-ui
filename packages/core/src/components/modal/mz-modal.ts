import { LitElement, html, css } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { baseStyles } from '../../styles/base.js';
import { animationStyles } from '../../styles/animations.js';
import { FocusTrap } from '../../utils/focus-trap.js';

@customElement('mz-modal')
export class MzModal extends LitElement {
  static styles = [
    baseStyles,
    animationStyles,
    css`
      :host {
        --modal-backdrop: rgba(0, 0, 0, 0.6);
        --modal-background: var(--mz-color-neutral-0);
        --modal-border-radius: var(--mz-radius-3xl);
        --modal-shadow: var(--mz-shadow-2xl);
        --modal-max-width: var(--mz-space-128);
        --modal-max-height: 80vh;
        --modal-padding: var(--mz-space-8);
      }

      :host([open]) {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1000;
      }

      .modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--mz-space-4);
        opacity: 0;
        visibility: hidden;
        transition: all var(--mz-transition-slow);
      }

      .modal--open {
        opacity: 1;
        visibility: visible;
      }

      .modal-backdrop {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--modal-backdrop);
        backdrop-filter: blur(12px) saturate(150%);
        transition: all var(--mz-transition-slow);
      }

      .modal-content {
        position: relative;
        max-width: var(--modal-max-width);
        max-height: var(--modal-max-height);
        width: 100%;
        background: var(--modal-background);
        border-radius: var(--modal-border-radius);
        box-shadow: var(--modal-shadow), 0 0 80px rgba(6, 182, 212, 0.1);
        overflow: hidden;
        transform: scale(0.8) translateY(var(--mz-space-10));
        transition: all var(--mz-transition-spring);
        border: 1px solid var(--mz-color-neutral-200);
      }

      .modal--open .modal-content {
        transform: scale(1) translateY(0);
      }

      .modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--modal-padding);
        border-bottom: 2px solid var(--mz-color-neutral-100);
        background: linear-gradient(to bottom, var(--mz-color-neutral-50), transparent);
      }

      .modal-title {
        font-size: var(--mz-text-xl);
        font-weight: var(--mz-font-bold);
        letter-spacing: var(--mz-tracking-tight);
        margin: 0;
        color: var(--mz-color-neutral-900);
      }

      .modal-close {
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--mz-space-10);
        height: var(--mz-space-10);
        border: none;
        background: var(--mz-color-neutral-100);
        border-radius: var(--mz-radius-full);
        cursor: pointer;
        color: var(--mz-color-neutral-600);
        transition: var(--mz-transition-normal);
      }

      .modal-close:hover {
        background: var(--mz-color-neutral-200);
        color: var(--mz-color-neutral-800);
        transform: rotate(90deg) scale(1.1);
      }

      .modal-close:focus-visible {
        outline: 2px solid var(--mz-color-primary-500);
        outline-offset: var(--mz-space-0-5);
      }

      .modal-body {
        padding: var(--modal-padding);
        overflow-y: auto;
        max-height: calc(var(--modal-max-height) - var(--mz-space-32));
      }

      .modal-footer {
        display: flex;
        gap: var(--mz-space-3);
        justify-content: flex-end;
        padding: var(--modal-padding);
        border-top: 2px solid var(--mz-color-neutral-100);
        background: linear-gradient(to top, var(--mz-color-neutral-50), transparent);
      }

      /* Size variants */
      :host([size='sm']) {
        --modal-max-width: var(--mz-space-96);
      }

      :host([size='lg']) {
        --modal-max-width: var(--mz-space-192);
      }

      :host([size='xl']) {
        --modal-max-width: var(--mz-space-256);
      }

      :host([size='full']) {
        --modal-max-width: calc(100vw - var(--mz-space-8));
        --modal-max-height: calc(100vh - var(--mz-space-8));
      }

      /* Animation variants */
      .modal--fade .modal-content {
        transform: none;
        opacity: 0;
      }

      .modal--fade.modal--open .modal-content {
        opacity: 1;
      }

      .modal--slide-up .modal-content {
        transform: translateY(100%);
      }

      .modal--slide-up.modal--open .modal-content {
        transform: translateY(0);
      }

      /* Disable close on backdrop */
      :host([no-close-on-backdrop]) .modal-backdrop {
        pointer-events: none;
      }

      /* Hide close button */
      :host([no-close-button]) .modal-close {
        display: none;
      }

      /* Scrollable content */
      :host([scrollable]) .modal-body {
        max-height: 60vh;
      }

      /* Accessibility */
      @media (prefers-reduced-motion: reduce) {
        .modal,
        .modal-content,
        .modal-backdrop {
          transition: none;
        }
      }
    `,
  ];

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: String }) title = '';
  @property({ type: String, reflect: true }) size: 'sm' | 'md' | 'lg' | 'xl' | 'full' = 'md';
  @property({ type: String, reflect: true }) animation: 'scale' | 'fade' | 'slide-up' = 'scale';
  @property({ type: Boolean, reflect: true, attribute: 'no-close-on-backdrop' }) noCloseOnBackdrop = false;
  @property({ type: Boolean, reflect: true, attribute: 'no-close-button' }) noCloseButton = false;
  @property({ type: Boolean, reflect: true }) scrollable = false;
  @property({ type: String, attribute: 'aria-label' }) ariaLabel = '';
  @property({ type: String, attribute: 'aria-describedby' }) ariaDescribedBy = '';

  @state() private isAnimating = false;

  @query('.modal-content') private modalContent!: HTMLElement;

  private focusTrap?: FocusTrap;
  private boundKeyDownHandler?: (e: KeyboardEvent) => void;
  private scrollPosition = 0;

  connectedCallback() {
    super.connectedCallback();
    this.boundKeyDownHandler = this.handleKeyDown.bind(this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.cleanup();
  }

  private cleanup() {
    // Remove event listeners
    if (this.boundKeyDownHandler) {
      document.removeEventListener('keydown', this.boundKeyDownHandler);
    }

    // Deactivate focus trap
    if (this.focusTrap) {
      this.focusTrap.deactivate();
      this.focusTrap = undefined;
    }

    // Restore body scroll
    this.restoreBodyScroll();
  }

  private handleBackdropClick = (event: MouseEvent) => {
    if (event.target === event.currentTarget && !this.noCloseOnBackdrop) {
      this.close();
    }
  };

  private handleCloseClick = () => {
    this.close();
  };

  private handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.open && !this.noCloseOnBackdrop) {
      event.preventDefault();
      this.close();
    }
  }

  private preventBodyScroll() {
    this.scrollPosition = window.scrollY;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${this.scrollPosition}px`;
    document.body.style.width = '100%';
  }

  private restoreBodyScroll() {
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, this.scrollPosition);
  }

  public show() {
    if (this.open) return;

    this.open = true;
    this.isAnimating = true;

    // Add event listeners
    if (this.boundKeyDownHandler) {
      document.addEventListener('keydown', this.boundKeyDownHandler);
    }

    // Prevent body scroll
    this.preventBodyScroll();

    // Dispatch show event
    this.dispatchEvent(
      new CustomEvent('mz-modal-show', {
        bubbles: true,
        composed: true,
      })
    );

    // Wait for render then setup focus trap
    this.updateComplete.then(() => {
      if (this.modalContent && !this.focusTrap) {
        this.focusTrap = new FocusTrap(this.modalContent);
        this.focusTrap.activate();
      }

      // Animation complete
      setTimeout(() => {
        this.isAnimating = false;

        // Announce to screen readers
        this.announceToScreenReader('Dialog opened');
      }, 300);
    });
  }

  public close() {
    if (!this.open) return;

    this.isAnimating = true;

    // Dispatch close event (can be cancelled)
    const closeEvent = this.dispatchEvent(
      new CustomEvent('mz-modal-close', {
        bubbles: true,
        composed: true,
        cancelable: true,
      })
    );

    if (!closeEvent) return; // Event was cancelled

    // Deactivate focus trap
    if (this.focusTrap) {
      this.focusTrap.deactivate();
      this.focusTrap = undefined;
    }

    setTimeout(() => {
      this.open = false;
      this.isAnimating = false;

      // Cleanup
      this.cleanup();

      // Dispatch closed event
      this.dispatchEvent(
        new CustomEvent('mz-modal-closed', {
          bubbles: true,
          composed: true,
        })
      );

      // Announce to screen readers
      this.announceToScreenReader('Dialog closed');
    }, 150);
  }

  private announceToScreenReader(message: string) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.style.position = 'absolute';
    announcement.style.left = '-10000px';
    announcement.style.width = '1px';
    announcement.style.height = '1px';
    announcement.style.overflow = 'hidden';
    announcement.textContent = message;

    document.body.appendChild(announcement);

    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }

  protected updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('open')) {
      if (this.open) {
        this.show();
      } else if (!this.isAnimating) {
        this.close();
      }
    }
  }

  render() {
    if (!this.open) return html``;

    const classes = {
      modal: true,
      'modal--open': this.open && !this.isAnimating,
      [`modal--${this.animation}`]: true,
    };

    const modalLabel = this.ariaLabel || this.title || 'Dialog';

    return html`
      <div
        class=${classMap(classes)}
        @click=${this.handleBackdropClick}
      >
        <div class="modal-backdrop" aria-hidden="true"></div>
        <div
          class="modal-content"
          role="dialog"
          aria-modal="true"
          aria-label=${modalLabel}
          aria-labelledby=${this.title ? 'modal-title' : nothing}
          aria-describedby=${this.ariaDescribedBy || nothing}
        >
          <div class="modal-header">
            <h2 id="modal-title" class="modal-title">
              <slot name="title">${this.title}</slot>
            </h2>
            ${!this.noCloseButton ? html`
              <button
                class="modal-close"
                aria-label="Close dialog"
                @click=${this.handleCloseClick}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            ` : ''}
          </div>

          <div class="modal-body">
            <slot></slot>
          </div>

          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mz-modal': MzModal;
  }
}