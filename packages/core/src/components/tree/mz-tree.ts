import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-tree')
export class MzTree extends LitElement {
  static styles = [baseStyles, css`:host{display:block}`]
  render(){ return html`<div role="tree"><slot></slot></div>` }
}

declare global { interface HTMLElementTagNameMap { 'mz-tree': MzTree } }

