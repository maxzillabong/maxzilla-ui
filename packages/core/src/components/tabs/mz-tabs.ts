import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-tabs')
export class MzTabs extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        color: var(--mz-color-neutral-900);
      }

      .tabs-container {
        position: relative;
      }

      .list {
        display: flex;
        gap: var(--mz-space-1);
        border-bottom: 1px solid var(--mz-color-neutral-200);
        position: relative;
      }

      .btn {
        position: relative;
        padding: var(--mz-space-3) var(--mz-space-4);
        cursor: pointer;
        background: transparent;
        border: 0;
        color: var(--mz-color-neutral-600);
        font-size: var(--mz-text-sm);
        line-height: var(--mz-leading-normal);
        letter-spacing: var(--mz-tracking-normal);
        font-weight: var(--mz-font-medium);
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        white-space: nowrap;
      }

      .btn[aria-selected="true"] {
        color: var(--mz-color-primary-600);
        font-weight: var(--mz-font-semibold);
      }

      .btn:hover:not([aria-selected="true"]) {
        color: var(--mz-color-neutral-900);
      }

      .btn:focus-visible {
        outline: 2px solid var(--mz-color-primary-500);
        outline-offset: var(--mz-space-0-5);
        border-radius: var(--mz-radius-md);
      }

      /* Animated underline */
      .underline {
        position: absolute;
        bottom: -1px;
        height: 2px;
        background: linear-gradient(
          90deg,
          transparent 0%,
          rgba(59, 130, 246, 0.1) 10%,
          rgba(59, 130, 246, 0.5) 25%,
          rgba(59, 130, 246, 1) 50%,
          rgba(59, 130, 246, 0.5) 75%,
          rgba(59, 130, 246, 0.1) 90%,
          transparent 100%
        );
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        opacity: 1;
        transform-origin: center;
      }

      /* Hover underline effect */
      .btn::after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(
          90deg,
          transparent 0%,
          rgba(156, 163, 175, 0.2) 25%,
          rgba(156, 163, 175, 0.3) 50%,
          rgba(156, 163, 175, 0.2) 75%,
          transparent 100%
        );
        opacity: 0;
        transform: scaleX(0);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        transform-origin: center;
      }

      .btn:hover:not([aria-selected="true"])::after {
        opacity: 1;
        transform: scaleX(1);
      }

      .panels {
        padding: var(--mz-space-4) 0;
      }

      /* Dark mode adjustments */
      :host([theme="dark"]) .list {
        border-color: var(--mz-color-neutral-800);
      }

      :host([theme="dark"]) .btn {
        color: var(--mz-color-neutral-400);
      }

      :host([theme="dark"]) .btn[aria-selected="true"] {
        color: var(--mz-color-primary-400);
      }

      :host([theme="dark"]) .btn:hover:not([aria-selected="true"]) {
        color: var(--mz-color-neutral-100);
      }

      :host([theme="dark"]) .underline {
        background: linear-gradient(
          90deg,
          transparent 0%,
          rgba(96, 165, 250, 0.1) 10%,
          rgba(96, 165, 250, 0.5) 25%,
          rgba(96, 165, 250, 1) 50%,
          rgba(96, 165, 250, 0.5) 75%,
          rgba(96, 165, 250, 0.1) 90%,
          transparent 100%
        );
      }

      /* Animation keyframes */
      @keyframes slideUnderline {
        from {
          opacity: 0;
          transform: scaleX(0.3);
        }
        to {
          opacity: 1;
          transform: scaleX(1);
        }
      }

      .underline {
        animation: slideUnderline 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }

      /* Vertical orientation */
      :host([orientation="vertical"]) .list {
        flex-direction: column;
        border-bottom: none;
        border-right: 1px solid var(--mz-color-neutral-200);
        padding-right: var(--mz-space-4);
        gap: var(--mz-space-1);
      }

      :host([orientation="vertical"]) .btn {
        text-align: left;
        padding: var(--mz-space-2) var(--mz-space-3);
      }

      :host([orientation="vertical"]) .underline {
        top: 0;
        bottom: 0;
        left: auto;
        right: -1px;
        width: 2px;
        height: auto;
        background: linear-gradient(
          180deg,
          transparent 0%,
          rgba(59, 130, 246, 0.1) 10%,
          rgba(59, 130, 246, 0.5) 25%,
          rgba(59, 130, 246, 1) 50%,
          rgba(59, 130, 246, 0.5) 75%,
          rgba(59, 130, 246, 0.1) 90%,
          transparent 100%
        );
      }
    `
  ]

  @state() private _labels: string[] = []
  @state() private _index = 0
  @state() private _underlineStyle = ''
  @property({ type: Number }) initial = 0
  @property({ type: String }) orientation: 'horizontal' | 'vertical' = 'horizontal'

  private _uniqueId = Math.random().toString(36).substr(2, 9)

  connectedCallback() {
    super.connectedCallback()
    this.addEventListener('keydown', this._handleKeyDown)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.removeEventListener('keydown', this._handleKeyDown)
  }

  firstUpdated() {
    this._collect()
    this._index = this.initial
    this._updatePanels()
    this._updateUnderline()
  }

  updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties)
    if (changedProperties.has('_index')) {
      this._updateUnderline()
    }
  }

  private _collect() {
    const tabs = Array.from(this.querySelectorAll('mz-tab'))
    this._labels = tabs.map(t => t.getAttribute('label') || 'Tab')
  }

  private _select(i: number, event?: Event) {
    const oldIndex = this._index

    // Dispatch tab-show event (can be cancelled)
    const showEvent = this.dispatchEvent(new CustomEvent('mz-tab-show', {
      detail: {
        index: i,
        previousIndex: oldIndex,
        tab: this._labels[i],
        originalEvent: event
      },
      bubbles: true,
      composed: true,
      cancelable: true
    }))

    if (!showEvent) return // Event was cancelled

    // Hide previous tab
    if (oldIndex !== i) {
      this.dispatchEvent(new CustomEvent('mz-tab-hide', {
        detail: {
          index: oldIndex,
          tab: this._labels[oldIndex],
          originalEvent: event
        },
        bubbles: true,
        composed: true
      }))
    }

    this._index = i
    this._updatePanels()

    // Dispatch standard change event
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }))

    // Dispatch custom change event with detail
    this.dispatchEvent(new CustomEvent('mz-tab-change', {
      detail: {
        index: i,
        previousIndex: oldIndex,
        tab: this._labels[i],
        previousTab: this._labels[oldIndex],
        originalEvent: event
      },
      bubbles: true,
      composed: true
    }))

    // Focus the selected tab
    requestAnimationFrame(() => {
      const tab = this.shadowRoot?.querySelector(`#mz-tab-${this._uniqueId}-${i}`) as HTMLElement
      if (tab) tab.focus()
    })
  }

  private _updatePanels() {
    const tabs = this.querySelectorAll('mz-tab') as NodeListOf<HTMLElement & { active: boolean }>
    tabs.forEach((t, i) => {
      t.active = i === this._index
      t.setAttribute('role', 'tabpanel')
      t.setAttribute('aria-labelledby', `mz-tab-${this._uniqueId}-${i}`)
      t.setAttribute('hidden', i === this._index ? 'false' : 'true')
    })
  }

  private _updateUnderline() {
    requestAnimationFrame(() => {
      const button = this.shadowRoot?.querySelector(`#mz-tab-${this._uniqueId}-${this._index}`) as HTMLElement
      if (button) {
        const listEl = this.shadowRoot?.querySelector('.list') as HTMLElement
        if (listEl) {
          const listRect = listEl.getBoundingClientRect()
          const buttonRect = button.getBoundingClientRect()

          if (this.orientation === 'horizontal') {
            const left = buttonRect.left - listRect.left
            const width = buttonRect.width
            this._underlineStyle = `left: ${left}px; width: ${width}px;`
          } else {
            const top = buttonRect.top - listRect.top
            const height = buttonRect.height
            this._underlineStyle = `top: ${top}px; height: ${height}px;`
          }
        }
      }
    })
  }

  private _handleKeyDown = (e: KeyboardEvent) => {
    const target = e.target as HTMLElement
    if (!target.hasAttribute('role') || target.getAttribute('role') !== 'tab') return

    let newIndex = this._index
    const lastIndex = this._labels.length - 1

    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault()
        newIndex = this._index > 0 ? this._index - 1 : lastIndex
        break
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault()
        newIndex = this._index < lastIndex ? this._index + 1 : 0
        break
      case 'Home':
        e.preventDefault()
        newIndex = 0
        break
      case 'End':
        e.preventDefault()
        newIndex = lastIndex
        break
      default:
        return
    }

    if (newIndex !== this._index) {
      this._select(newIndex, e)
    }
  }

  render() {
    return html`
      <div
        class="tabs-container"
      >
        <div
          class="list"
          role="tablist"
          aria-orientation=${this.orientation}
          aria-label="Tab navigation"
        >
          ${this._labels.map((label, i) => {
            const tabId = `mz-tab-${this._uniqueId}-${i}`
            const panelId = `mz-tabpanel-${this._uniqueId}-${i}`

            return html`
              <button
                id=${tabId}
                class="btn"
                role="tab"
                aria-selected=${String(i === this._index)}
                aria-controls=${panelId}
                tabindex=${i === this._index ? '0' : '-1'}
                @click=${(e: MouseEvent) => this._select(i, e)}
              >
                ${label}
              </button>
            `
          })}
          <div class="underline" style=${this._underlineStyle}></div>
        </div>
      </div>
      <div class="panels" role="presentation">
        <slot @slotchange=${() => { this._collect(); this._updatePanels() }}></slot>
      </div>
    `
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-tabs': MzTabs } }