import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-tab')
export class MzTab extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host {
        display: none;
        font-size: var(--mz-text-base);
        line-height: var(--mz-leading-normal);
        letter-spacing: var(--mz-tracking-normal);
        color: var(--mz-color-neutral-900);
      }

      :host([active]) {
        display: block;
        animation: fadeIn 0.3s ease-in-out;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(4px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* Dark mode adjustments */
      :host([theme="dark"]) {
        color: var(--mz-color-neutral-100);
      }
    `
  ]
  @property({type:String}) label = 'Tab'
  @property({type:Boolean, reflect:true}) active = false
  render(){ return html`<slot></slot>` }
}

declare global { interface HTMLElementTagNameMap { 'mz-tab': MzTab } }

