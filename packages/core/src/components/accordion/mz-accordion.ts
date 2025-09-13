import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-accordion')
export class MzAccordion extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        border: var(--mz-space-px) solid var(--mz-color-neutral-200); /* 1px */
        border-radius: var(--mz-radius-lg);
        background: var(--mz-color-neutral-0);
        color: var(--mz-color-neutral-900);
      }
    `
  ]

  @property({ type: Boolean }) multiple = false
  @property({ type: String, attribute: 'aria-label' }) ariaLabel?: string;

  connectedCallback(): void {
    super.connectedCallback()
    this.addEventListener('accordion-toggle', this.onToggle as EventListener)
    this.addEventListener('accordion-key', this.onKey as EventListener)
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    this.removeEventListener('accordion-toggle', this.onToggle as EventListener)
    this.removeEventListener('accordion-key', this.onKey as EventListener)
  }

  private onToggle = (e: CustomEvent<{ open: boolean }>) => {
    if (this.multiple) return
    if (!e.detail.open) return
    const items = this.querySelectorAll('mz-accordion-item') as NodeListOf<HTMLElement & { open: boolean }>
    items.forEach((item) => { if (item !== e.target) item.open = false })
  }

  private onKey = (e: CustomEvent<{ key: string }>) => {
    const items = Array.from(this.querySelectorAll('mz-accordion-item')) as (HTMLElement & { focusHeader: () => void })[]
    if (items.length === 0) return
    const currentIndex = items.findIndex((el) => el === e.target)
    if (currentIndex === -1) return

    let nextIndex = currentIndex
    switch (e.detail.key) {
      case 'ArrowDown':
        nextIndex = (currentIndex + 1) % items.length
        break
      case 'ArrowUp':
        nextIndex = (currentIndex - 1 + items.length) % items.length
        break
      case 'Home':
        nextIndex = 0
        break
      case 'End':
        nextIndex = items.length - 1
        break
      default:
        return
    }
    items[nextIndex]?.focusHeader()
  }

  render() {
    return html`
      <div
        role="group"
        aria-label=${this.ariaLabel || 'Accordion'}
        aria-multiselectable=${this.multiple}
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-accordion': MzAccordion } }
