import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-table')
export class MzTable extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
      }

      table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
      }

      thead th {
        font-weight: var(--mz-font-semibold); /* was: 600 */
        text-align: left;
        color: var(--mz-color-neutral-700);
        padding: var(--mz-space-2) var(--mz-space-3); /* was: .5rem .75rem */
        border-bottom: var(--mz-space-px) solid var(--mz-color-neutral-200); /* was: 1px solid */
      }

      tbody td {
        padding: var(--mz-space-2) var(--mz-space-3); /* was: .5rem .75rem */
        border-bottom: var(--mz-space-px) solid var(--mz-color-neutral-100); /* was: 1px solid */
      }

      tbody tr:hover {
        background: var(--mz-color-neutral-50);
      }
    `
  ]
  render(){
    return html`
      <table role="table">
        <thead><tr><slot name="header"></slot></tr></thead>
        <tbody><slot></slot></tbody>
      </table>
    `
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-table': MzTable } }

