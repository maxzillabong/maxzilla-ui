import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-form-group')
export class MzFormGroup extends LitElement {
  static styles = [baseStyles, css`:host{display:grid;grid-template-columns:1fr;gap:var(--mz-space-4)}@media(min-width:768px){:host{grid-template-columns:repeat(2,minmax(0,1fr))}}`]
  render(){ return html`<slot></slot>` }
}

declare global { interface HTMLElementTagNameMap { 'mz-form-group': MzFormGroup } }

