import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-tab')
export class MzTab extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        font-size: var(--mz-text-base);
        line-height: var(--mz-leading-normal);
        letter-spacing: var(--mz-tracking-normal);
      }
    `
  ]
  @property({type:String}) label = 'Tab'
  @property({type:Boolean, reflect:true}) active = false
  render(){ return this.active ? html`<div role="tabpanel"><slot></slot></div>` : html`` }
}

declare global { interface HTMLElementTagNameMap { 'mz-tab': MzTab } }

