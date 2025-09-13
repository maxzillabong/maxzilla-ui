import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-sidebar')
export class MzSidebar extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host{display:block;background:var(--mz-color-neutral-0);color:var(--mz-color-neutral-900);border-right:1px solid var(--mz-color-neutral-200);}
      .inner{display:flex;flex-direction:column;gap:var(--mz-space-2);padding:var(--mz-space-4);min-width:var(--mz-space-56)} /* 14rem -> --mz-space-56 */
      .header{font-weight:var(--mz-font-bold);margin-bottom:var(--mz-space-2)} /* 700 -> --mz-font-bold */
      ::slotted(a){color:inherit;text-decoration:none;padding:var(--mz-space-1) var(--mz-space-2);border-radius:var(--mz-radius-md)} /* .25rem .5rem -> --mz-space-1 --mz-space-2, .375rem -> --mz-radius-md */
      ::slotted(a:hover){background:var(--mz-color-neutral-100)}
    `
  ]

  @property({ type: String, attribute: 'aria-label' }) ariaLabel?: string;

  render(){
    return html`
      <aside
        class="inner"
        role="navigation"
        aria-label=${this.ariaLabel || 'Sidebar navigation'}
      >
        <div class="header">
          <slot name="header"></slot>
        </div>
        <slot name="menu"></slot>
      </aside>
    `
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-sidebar': MzSidebar } }

