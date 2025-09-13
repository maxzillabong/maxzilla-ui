import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-date-picker')
export class MzDatePicker extends LitElement {
  static styles = [baseStyles, css`
    :host {
      display: block;
      color: var(--mz-color-neutral-900);
    }

    input {
      width: 100%;
      padding: var(--mz-space-2); /* Original: .5rem */
      border: 1px solid var(--mz-color-neutral-300);
      border-radius: var(--mz-radius-md); /* Original: .375rem */
      background: var(--mz-color-neutral-0);
      color: inherit;
      font-size: var(--mz-text-base); /* Added for consistency */
      line-height: var(--mz-leading-normal); /* Added for consistency */
      transition: var(--mz-transition-normal); /* Added for smooth interactions */
    }

    input:focus {
      outline: 2px solid var(--mz-color-primary-500);
      outline-offset: 2px;
      border-color: var(--mz-color-primary-500);
    }

    input:hover {
      border-color: var(--mz-color-neutral-400);
    }

    .label {
      display: block;
      font-weight: var(--mz-font-semibold); /* Original: 600 */
      margin-bottom: var(--mz-space-1); /* Original: .25rem */
      font-size: var(--mz-text-sm); /* Added for consistency */
      line-height: var(--mz-leading-snug); /* Added for consistency */
      color: var(--mz-color-neutral-700); /* Added for better contrast */
    }
  `]
  @property({type:String}) label = ''
  @property({type:String}) value = ''
  private onInput(e: Event){ this.value = (e.target as HTMLInputElement).value; this.dispatchEvent(new Event('change',{bubbles:true})) }
  render(){ return html`${this.label? html`<label class="label">${this.label}</label>`: null}<input type="date" .value=${this.value} @input=${this.onInput} />` }
}

declare global { interface HTMLElementTagNameMap { 'mz-date-picker': MzDatePicker } }

