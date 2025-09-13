import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-option')
export class MzOption extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host {
        /* Options styling handled by native select, but we can define base properties */
        font-size: var(--mz-text-base); /* was: inherited */
        line-height: var(--mz-leading-normal); /* was: default */
        font-family: var(--mz-font-sans); /* was: inherited */
        color: var(--mz-color-neutral-900); /* was: inherited */
      }
    `
  ]

  @property({ type: String }) value = ''
  @property({ type: String }) label = ''

  @property({ type: Boolean }) selected = false;

  connectedCallback() {
    super.connectedCallback();
    // Set ARIA attributes for option role
    this.setAttribute('role', 'option');
    this.setAttribute('aria-selected', this.selected.toString());
  }

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated(changedProperties);
    if (changedProperties.has('selected')) {
      this.setAttribute('aria-selected', this.selected.toString());
    }
  }

  createRenderRoot(){ return this } // light DOM for simpler select mapping
  render(){ return html`` }
}

declare global { interface HTMLElementTagNameMap { 'mz-option': MzOption } }

