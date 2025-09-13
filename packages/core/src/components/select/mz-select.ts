import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'
import { ValidatableMixin } from '../../mixins/validation.js';

@customElement('mz-select')
export class MzSelect extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        color: var(--mz-color-neutral-900);
      }

      label {
        display: block;
        font-weight: var(--mz-font-semibold); /* was: 600 */
        margin-bottom: var(--mz-space-2);
        font-size: var(--mz-text-sm); /* was: inherited */
        line-height: var(--mz-leading-snug); /* was: default */
        letter-spacing: var(--mz-tracking-normal); /* was: default */
      }

      select {
        width: 100%;
        padding: var(--mz-space-3) var(--mz-space-2); /* was: var(--mz-space-2) */
        border: var(--mz-space-px) solid var(--mz-color-neutral-300); /* was: 1px solid */
        border-radius: var(--mz-radius-md);
        background: var(--mz-color-neutral-0);
        color: inherit;
        font-size: var(--mz-text-base); /* was: inherited */
        line-height: var(--mz-leading-normal); /* was: default */
        font-family: var(--mz-font-sans); /* was: inherited */
        transition: var(--mz-transition-fast); /* was: none */
      }

      select:focus {
        outline: var(--mz-space-0-5) solid var(--mz-color-primary-500); /* was: 2px solid */
        outline-offset: var(--mz-space-0-5); /* was: 2px */
        border-color: var(--mz-color-primary-400); /* was: unchanged */
      }

      select:hover {
        border-color: var(--mz-color-neutral-400); /* was: no hover state */
      }

      select:disabled {
        background: var(--mz-color-neutral-100); /* was: no disabled state */
        color: var(--mz-color-neutral-400);
        cursor: not-allowed;
      }
    `
  ]

  @property({type:String}) label = ''
  @property({type:Boolean}) multiple = false
  @property({type:String}) value: string | null = null

  @property({ type: String, attribute: 'aria-label' }) ariaLabel?: string;
  @property({ type: String, attribute: 'aria-describedby' }) ariaDescribedBy?: string;
  @property({ type: Boolean, attribute: 'aria-expanded' }) ariaExpanded = false;
  @property({ type: String, attribute: 'aria-activedescendant' }) ariaActiveDescendant?: string;
  private _onChange(e: Event){
    const sel = e.target as HTMLSelectElement
    this.value = sel.value
    this.dispatchEvent(new Event('change', { bubbles: true }))
  }

  render(){
    const options = Array.from(this.querySelectorAll('mz-option')).map(o=>({value:o.getAttribute('value')||'',label:o.getAttribute('label')||o.textContent||''}))
    return html`
      ${this.label? html`<label for="select-input">${this.label}</label>` : null}
      <select
        id="select-input"
        role="combobox"
        aria-label=${this.ariaLabel || this.label || 'Select option'}
        aria-describedby=${this.ariaDescribedBy || ''}
        aria-expanded=${this.ariaExpanded}
        aria-activedescendant=${this.ariaActiveDescendant || ''}
        @change=${this._onChange}
        ?multiple=${this.multiple}
        .value=${this.value ?? ''}
      >
        ${options.map(o=> html`<option value=${o.value}>${o.label}</option>`) }
      </select>
    `
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-select': MzSelect } }

