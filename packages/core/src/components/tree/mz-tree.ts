import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-tree')
export class MzTree extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        padding: var(--mz-space-2); /* 0.5rem */
        border-radius: var(--mz-radius-md);
        background-color: var(--mz-color-neutral-0);
        border: var(--mz-space-px) solid var(--mz-color-neutral-200); /* 1px */
        font-family: var(--mz-font-sans);
      }

      [role="tree"] {
        font-size: var(--mz-text-sm);
        line-height: var(--mz-leading-normal);
      }
    `
  ]
  render(){ return html`<div role="tree"><slot></slot></div>` }
}

declare global { interface HTMLElementTagNameMap { 'mz-tree': MzTree } }

