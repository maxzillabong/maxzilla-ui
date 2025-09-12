import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-divider')
export class MzDivider extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host { display: block; }
      .divider { border-color: var(--mz-color-neutral-200); }
      .h { border-top: 1px solid var(--mz-color-neutral-200); width: 100%; }
      .v { border-left: 1px solid var(--mz-color-neutral-200); height: 100%; }
    `
  ]

  @property({ type: String }) orientation: 'horizontal' | 'vertical' = 'horizontal'

  render() {
    const vertical = this.orientation === 'vertical'
    return html`
      <div class="divider ${vertical ? 'v' : 'h'}" role="separator" aria-orientation=${vertical ? 'vertical' : 'horizontal'}></div>
    `
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-divider': MzDivider } }

