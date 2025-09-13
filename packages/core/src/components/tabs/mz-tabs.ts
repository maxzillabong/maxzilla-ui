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
      .list {
        display: flex;
        gap: var(--mz-space-2);
        border-bottom: var(--mz-space-px) solid var(--mz-color-neutral-200);
      }
      .btn {
        padding: var(--mz-space-2) var(--mz-space-3);
        border-radius: var(--mz-radius-lg);
        cursor: pointer;
        background: transparent;
        border: 0;
        color: inherit;
        font-size: var(--mz-text-base);
        line-height: var(--mz-leading-normal);
        letter-spacing: var(--mz-tracking-normal);
        font-weight: var(--mz-font-normal);
        transition: all var(--mz-transition-normal);
      }
      .btn[aria-selected="true"] {
        background: var(--mz-color-neutral-100);
        font-weight: var(--mz-font-semibold);
      }
      .btn:hover:not([aria-selected="true"]) {
        background: var(--mz-color-neutral-50);
      }
      .btn:focus-visible {
        outline: 2px solid var(--mz-color-primary-500);
        outline-offset: var(--mz-space-0-5);
      }
      .panels {
        padding: var(--mz-space-4) 0;
      }
    `
  ]

  @state() private _labels: string[] = []
  @state() private _index = 0
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
  }

  private _collect() {
    const tabs = Array.from(this.querySelectorAll('mz-tab'))
    this._labels = tabs.map(t => t.getAttribute('label') || 'Tab')
  }

  private _select(i: number) {
    const oldIndex = this._index
    this._index = i
    this._updatePanels()

    // Dispatch change event
    this.dispatchEvent(new CustomEvent('mz-tab-change', {
      detail: { index: i, previousIndex: oldIndex },
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
      this._select(newIndex)
    }
  }

  render() {
    return html`
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
              @click=${() => this._select(i)}
            >
              ${label}
            </button>
          `
        })}
      </div>
      <div class="panels" role="presentation">
        <slot @slotchange=${() => { this._collect(); this._updatePanels() }}></slot>
      </div>
    `
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-tabs': MzTabs } }