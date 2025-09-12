import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-select')
export class MzSelect extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host{display:block;color:var(--mz-color-neutral-900)}
      label{display:block;font-weight:600;margin-bottom:var(--mz-space-2)}
      select{width:100%;padding:var(--mz-space-2);border:1px solid var(--mz-color-neutral-300);border-radius:var(--mz-radius-md);background:var(--mz-color-neutral-0);color:inherit}
      select:focus{outline:2px solid var(--mz-color-primary-500);outline-offset:2px}
    `
  ]

  @property({type:String}) label = ''
  @property({type:Boolean}) multiple = false
  @property({type:String}) value: string | null = null

  private _onChange(e: Event){
    const sel = e.target as HTMLSelectElement
    this.value = sel.value
    this.dispatchEvent(new Event('change', { bubbles: true }))
  }

  render(){
    const options = Array.from(this.querySelectorAll('mz-option')).map(o=>({value:o.getAttribute('value')||'',label:o.getAttribute('label')||o.textContent||''}))
    return html`
      ${this.label? html`<label>${this.label}</label>` : null}
      <select @change=${this._onChange} ?multiple=${this.multiple} .value=${this.value ?? ''}>
        ${options.map(o=> html`<option value=${o.value}>${o.label}</option>`) }
      </select>
    `
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-select': MzSelect } }

