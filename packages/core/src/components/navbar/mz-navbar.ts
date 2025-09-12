import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-navbar')
export class MzNavbar extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host { display: block; background: var(--mz-color-neutral-0); color: var(--mz-color-neutral-900); border-bottom: 1px solid var(--mz-color-neutral-200); }
      .inner { display: flex; align-items: center; height: 3.5rem; gap: var(--mz-space-4); padding: 0 var(--mz-space-4); }
      .brand { font-weight: 700; }
      .spacer { flex: 1; }
      ::slotted(a) { color: inherit; text-decoration: none; }
      ::slotted(a:hover) { text-decoration: underline; }
    `
  ]
  render() {
    return html`
      <nav class="inner" role="navigation" aria-label="Main">
        <div class="brand"><slot name="brand"></slot></div>
        <div class="spacer"></div>
        <div class="menu"><slot name="menu"></slot></div>
      </nav>
    `
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-navbar': MzNavbar } }

