import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-breadcrumb-item')
export class MzBreadcrumbItem extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host { display: inline-flex; align-items: center; }
      a { color: var(--mz-color-neutral-600); text-decoration: none; }
      a:hover { text-decoration: underline; }
      span { color: var(--mz-color-neutral-800); font-weight: 600; }
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

