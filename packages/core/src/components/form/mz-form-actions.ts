import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-form-actions')
export class MzFormActions extends LitElement {
  static styles = [baseStyles, css`:host{display:flex;gap:var(--mz-space-3);justify-content:flex-end}`]
  render(){ return html`<slot></slot>` }
}

declare global { interface HTMLElementTagNameMap { 'mz-form-actions': MzFormActions } }

