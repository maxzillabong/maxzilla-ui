import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-breadcrumb')
export class MzBreadcrumb extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        font-size: var(--mz-text-sm); /* was: 14px */
        line-height: var(--mz-leading-normal); /* was: 1.5 */
      }
      ol {
        list-style: none;
        display: flex;
        align-items: center;
        gap: var(--mz-space-2); /* was: 8px */
        padding: var(--mz-space-0); /* was: 0 */
        margin: var(--mz-space-0); /* was: 0 */
        color: var(--mz-color-neutral-600);
        font-weight: var(--mz-font-normal); /* was: 400 */
      }
      ::slotted(mz-breadcrumb-item:not(:first-child))::before {
        content: '/';
        color: var(--mz-color-neutral-400);
        margin: var(--mz-space-0) var(--mz-space-1); /* was: 0 4px */
        font-size: var(--mz-text-sm); /* was: inherit */
        font-weight: var(--mz-font-normal); /* was: 400 */
      }
    `
  ]
  render() { return html`<nav aria-label="Breadcrumb"><ol><slot></slot></ol></nav>` }
}

declare global { interface HTMLElementTagNameMap { 'mz-breadcrumb': MzBreadcrumb } }

