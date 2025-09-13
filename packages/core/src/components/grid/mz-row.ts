import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-row')
export class MzRow extends LitElement {
  static styles = [baseStyles, css`
    :host {
      display: block;
    }

    .row {
      display: grid;
      grid-template-columns: repeat(12, minmax(0, 1fr));
      gap: var(--mz-space-4); /* 1rem - Standard grid gap */
    }
  `]

  render() {
    return html`<div class="row"><slot></slot></div>`
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-row': MzRow } }

