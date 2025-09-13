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

  createRenderRoot(){ return this } // light DOM for simpler select mapping
  render(){ return html`` }
}

declare global { interface HTMLElementTagNameMap { 'mz-option': MzOption } }

