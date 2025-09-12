import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-table')
export class MzTable extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host{display:block}
      table{width:100%;border-collapse:separate;border-spacing:0}
      thead th{font-weight:600;text-align:left;color:var(--mz-color-neutral-700);padding:.5rem .75rem;border-bottom:1px solid var(--mz-color-neutral-200)}
      tbody td{padding:.5rem .75rem;border-bottom:1px solid var(--mz-color-neutral-100)}
      tbody tr:hover{background:var(--mz-color-neutral-50)}
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

