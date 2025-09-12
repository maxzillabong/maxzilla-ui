import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-sidebar')
export class MzSidebar extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host{display:block;background:var(--mz-color-neutral-0);color:var(--mz-color-neutral-900);border-right:1px solid var(--mz-color-neutral-200);}
      .inner{display:flex;flex-direction:column;gap:var(--mz-space-2);padding:var(--mz-space-4);min-width:14rem}
      .header{font-weight:700;margin-bottom:var(--mz-space-2)}
      ::slotted(a){color:inherit;text-decoration:none;padding:.25rem .5rem;border-radius:.375rem}
      ::slotted(a:hover){background:var(--mz-color-neutral-100)}
    `
  ]
  render(){
    return html`<aside class="inner"><div class="header"><slot name="header"></slot></div><slot name="menu"></slot></aside>`
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-sidebar': MzSidebar } }

