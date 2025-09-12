import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-breadcrumb')
export class MzBreadcrumb extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host { display: block; }
      ol { list-style: none; display: flex; align-items: center; gap: var(--mz-space-2); padding: 0; margin: 0; color: var(--mz-color-neutral-600); }
      ::slotted(mz-breadcrumb-item:not(:first-child))::before { content: '/'; color: var(--mz-color-neutral-400); margin: 0 var(--mz-space-1); }
    `
  ]
  render() { return html`<nav aria-label="Breadcrumb"><ol><slot></slot></ol></nav>` }
}

declare global { interface HTMLElementTagNameMap { 'mz-breadcrumb': MzBreadcrumb } }

