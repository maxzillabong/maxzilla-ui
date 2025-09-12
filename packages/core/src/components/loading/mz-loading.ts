import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-loading')
export class MzLoading extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host{display:inline-block}
      .spinner{width:1.25rem;height:1.25rem;border:2px solid var(--mz-color-neutral-300);border-top-color:var(--mz-color-primary-500);border-radius:9999px;animation:spin 1s linear infinite}
      @keyframes spin{to{transform:rotate(360deg)}}
      .overlay{position:fixed;inset:0;background:rgba(0,0,0,.3);display:grid;place-items:center}
    `
  ]
  @property({type:Boolean}) overlay = false
  @property({type:String}) size: 'sm'|'md'|'lg' = 'md'
  render(){ const s = this.size==='sm'? '1rem' : this.size==='lg' ? '2rem' : '1.25rem'; const spinner = html`<div class="spinner" style=${`width:${s};height:${s}`}></div>`; return this.overlay? html`<div class="overlay">${spinner}</div>` : spinner }
}

declare global { interface HTMLElementTagNameMap { 'mz-loading': MzLoading } }

