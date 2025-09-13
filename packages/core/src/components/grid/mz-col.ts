import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-col')
export class MzCol extends LitElement {
  static styles = [baseStyles, css`
    :host {
      display: block;
    }
  `]

  @property({ type: Number }) span = 12

  render() {
    const span = Math.max(1, Math.min(12, this.span))
    const style = `grid-column: span ${span} / span ${span}`
    return html`<div style=${style} role="gridcell"><slot></slot></div>`
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-col': MzCol } }

