import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('mz-option')
export class MzOption extends LitElement {
  @property({ type: String }) value = ''
  @property({ type: String }) label = ''
  createRenderRoot(){ return this } // light DOM for simpler select mapping
  render(){ return html`` }
}

declare global { interface HTMLElementTagNameMap { 'mz-option': MzOption } }

