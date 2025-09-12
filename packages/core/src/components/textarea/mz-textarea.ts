import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-textarea')
export class MzTextarea extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host { display: block; color: var(--mz-color-neutral-900); }
      label { display: block; font-weight: 600; margin-bottom: var(--mz-space-2); }
      textarea { width: 100%; padding: var(--mz-space-3); border: 1px solid var(--mz-color-neutral-300); border-radius: var(--mz-radius-md); background: var(--mz-color-neutral-0); color: inherit; }
      textarea:focus { outline: 2px solid var(--mz-color-primary-500); outline-offset: 2px; }
      .helper { font-size: var(--mz-text-sm); color: var(--mz-color-neutral-500); margin-top: var(--mz-space-2); }
    `
  ]

  @property({ type: String }) label = ''
  @property({ type: String }) placeholder = ''
  @property({ type: Number }) rows = 4
  @property({ type: String }) value = ''
  @property({ type: Boolean }) disabled = false
  @property({ type: String, attribute: 'helper-text' }) helperText = ''

  private onInput(e: Event) {
    const v = (e.target as HTMLTextAreaElement).value
    this.value = v
    this.dispatchEvent(new Event('input', { bubbles: true }))
    this.dispatchEvent(new Event('change', { bubbles: true }))
  }

  render() {
    return html`
      ${this.label ? html`<label>${this.label}</label>` : null}
      <textarea rows=${this.rows} placeholder=${this.placeholder} .value=${this.value} ?disabled=${this.disabled} @input=${this.onInput}></textarea>
      ${this.helperText ? html`<div class="helper">${this.helperText}</div>` : null}
    `
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-textarea': MzTextarea } }

