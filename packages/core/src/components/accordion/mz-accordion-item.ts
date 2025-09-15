import { LitElement, html, css } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-accordion-item')
export class MzAccordionItem extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host { display: block; color: var(--mz-color-neutral-900); }
      .item { border-bottom: var(--mz-space-px) solid var(--mz-color-neutral-200); } /* 1px */
      .header {
        display: flex; align-items: center; justify-content: space-between;
        width: 100%; background: transparent; border: var(--mz-space-0); cursor: pointer; /* 0 */
        padding: var(--mz-space-4); font-weight: var(--mz-font-semibold); text-align: left; color: inherit; /* 600 */
      }
      .header:hover { background: var(--mz-color-neutral-50); }
      .chevron { transition: transform var(--mz-transition-normal); color: currentColor; }
      .chevron.open { transform: rotate(90deg); }
      .panel { overflow: hidden; transition: height var(--mz-transition-normal); }
      .panel-inner { padding: var(--mz-space-0) var(--mz-space-4) var(--mz-space-4); } /* 0 var(--mz-space-4) var(--mz-space-4) */
    `
  ]

  @property({ type: String }) header: string = ''
  @property({ type: Boolean, reflect: true }) open = false

  @state() private _height = 0
  @state() private _panelId = ''
  @state() private _buttonId = ''

  connectedCallback(): void {
    super.connectedCallback()
    // Generate stable IDs for aria mapping
    const uid = Math.random().toString(36).slice(2, 8)
    this._panelId = this._panelId || `mz-acc-panel-${uid}`
    this._buttonId = this._buttonId || `mz-acc-btn-${uid}`
    this.updateComplete.then(() => this._measure())
  }

  private _measure() {
    const slot = this.renderRoot.querySelector('.panel-inner') as HTMLElement | null
    if (slot) {
      this._height = slot.scrollHeight
    }
  }

  private toggle(event?: Event) {
    const wasOpen = this.open

    // Dispatch show/hide event (can be cancelled)
    const eventType = !wasOpen ? 'mz-show' : 'mz-hide'
    const showHideEvent = this.dispatchEvent(new CustomEvent(eventType, {
      detail: {
        originalEvent: event
      },
      bubbles: true,
      composed: true,
      cancelable: true
    }))

    if (!showHideEvent) return // Event was cancelled

    this.open = !this.open

    // Dispatch standard change event
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }))

    // Dispatch custom accordion-toggle for parent
    this.dispatchEvent(new CustomEvent('accordion-toggle', {
      detail: { open: this.open },
      bubbles: true
    }))

    // Dispatch custom change event with detail
    this.dispatchEvent(new CustomEvent('mz-change', {
      detail: {
        open: this.open,
        wasOpen,
        header: this.header,
        originalEvent: event
      },
      bubbles: true,
      composed: true
    }))

    // Dispatch after-show/after-hide event after animation
    setTimeout(() => {
      const afterEventType = this.open ? 'mz-after-show' : 'mz-after-hide'
      this.dispatchEvent(new CustomEvent(afterEventType, {
        detail: {
          originalEvent: event
        },
        bubbles: true,
        composed: true
      }))
    }, 300) // Match transition duration
  }

  private onHeaderKeydown(e: KeyboardEvent) {
    const keys = ['ArrowDown', 'ArrowUp', 'Home', 'End', 'Enter', ' ']
    if (!keys.includes(e.key)) return
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      this.toggle(e)
      return
    }
    e.preventDefault()
    this.dispatchEvent(new CustomEvent('accordion-key', { detail: { key: e.key }, bubbles: true, composed: true }))
  }

  public focusHeader() {
    const btn = this.renderRoot.querySelector('.header') as HTMLButtonElement | null
    btn?.focus()
  }

  render() {
    const panelStyle = `height: ${this.open ? `${this._height}px` : '0px'}`
    return html`
      <div class="item">
        <button
          id=${this._buttonId}
          class="header"
          type="button"
          @click=${(e: MouseEvent) => this.toggle(e)}
          @keydown=${this.onHeaderKeydown}
          aria-expanded=${this.open}
          aria-controls=${this._panelId}
          aria-label=${this.header}
        >
          <span>${this.header}</span>
          <span class=${classMap({ chevron: true, open: this.open })}>▶</span>
        </button>
        <div
          id=${this._panelId}
          class="panel"
          style=${panelStyle}
          role="region"
          aria-labelledby=${this._buttonId}
        >
          <div class="panel-inner"><slot></slot></div>
        </div>
      </div>
    `
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-accordion-item': MzAccordionItem } }
