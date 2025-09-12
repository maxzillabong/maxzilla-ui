import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-date-picker')
export class MzDatePicker extends LitElement {
  static styles = [baseStyles, css`:host{display:block;color:var(--mz-color-neutral-900)} input{width:100%;padding:.5rem;border:1px solid var(--mz-color-neutral-300);border-radius:.375rem;background:var(--mz-color-neutral-0);color:inherit}`]
  @property({type:String}) label = ''
  @property({type:String}) value = ''
  private onInput(e: Event){ this.value = (e.target as HTMLInputElement).value; this.dispatchEvent(new Event('change',{bubbles:true})) }
  render(){ return html`${this.label? html`<label style="display:block;font-weight:600;margin-bottom:.25rem">${this.label}</label>`: null}<input type="date" .value=${this.value} @input=${this.onInput} />` }
}

declare global { interface HTMLElementTagNameMap { 'mz-date-picker': MzDatePicker } }

