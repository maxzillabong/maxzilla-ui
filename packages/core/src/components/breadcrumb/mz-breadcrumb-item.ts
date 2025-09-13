import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-breadcrumb-item')
export class MzBreadcrumbItem extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host {
        display: inline-flex;
        align-items: center;
        font-size: var(--mz-text-sm); /* was: 14px */
        line-height: var(--mz-leading-normal); /* was: 1.5 */
      }
      a {
        color: var(--mz-color-neutral-600);
        text-decoration: none;
        font-weight: var(--mz-font-normal); /* was: 400 */
        letter-spacing: var(--mz-tracking-normal); /* was: 0 */
        transition: var(--mz-transition-fast); /* was: none */
      }
      a:hover {
        text-decoration: underline;
        color: var(--mz-color-neutral-700); /* enhanced hover state */
      }
      span {
        color: var(--mz-color-neutral-800);
        font-weight: var(--mz-font-semibold); /* was: 600 */
        letter-spacing: var(--mz-tracking-normal); /* was: 0 */
      }
    `
  ]

  @property({ type: String }) href: string | null = null
  @property({ type: Boolean }) current = false

  render() {
    if (this.href && !this.current) {
      return html`<li><a href=${this.href}><slot></slot></a></li>`
    }
    return html`<li><span aria-current="page"><slot></slot></span></li>`
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-breadcrumb-item': MzBreadcrumbItem } }

