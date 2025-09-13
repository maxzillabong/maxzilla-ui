import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-radio-group')
export class MzRadioGroup extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        color: var(--mz-color-neutral-900);
      }
    `
  ]
  @property({ type: String }) name = ''
  @property({ type: String }) value: string | null = null

  connectedCallback(): void {
    super.connectedCallback()
    this.addEventListener('radio-select', this.onSelect as EventListener)
  }
  disconnectedCallback(): void {
    super.disconnectedCallback()
    this.removeEventListener('radio-select', this.onSelect as EventListener)
  }
  private onSelect = (e: CustomEvent<{ value: string }>) => {
    this.value = e.detail.value
    const radios = this.querySelectorAll('mz-radio') as NodeListOf<HTMLElement & { checked: boolean; value: string }>
    radios.forEach(r => (r.checked = r.value === this.value))
    this.dispatchEvent(new Event('change', { bubbles: true }))
  }
  render(){ return html`<slot></slot>` }
}

declare global { interface HTMLElementTagNameMap { 'mz-radio-group': MzRadioGroup } }

