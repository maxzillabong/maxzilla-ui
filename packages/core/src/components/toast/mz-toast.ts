import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-toast')
export class MzToast extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host{position:fixed;bottom:1rem;right:1rem;display:block}
      .item{background:var(--mz-color-neutral-900);color:var(--mz-color-neutral-0);padding:.75rem 1rem;border-radius:.5rem;box-shadow:var(--mz-shadow-lg);opacity:0;transform:translateY(6px);transition:opacity var(--mz-transition-normal), transform var(--mz-transition-normal)}
      .item.show{opacity:1;transform:translateY(0)}
    `
  ]
  @state() private _message = ''
  @state() private _show = false
  @property({type:Number}) duration = 2500

  public show(message: string){
    this._message = message
    this._show = true
    setTimeout(()=> this._show = false, this.duration)
  }

  render(){
    return html`<div class="item ${this._show?'show':''}">${this._message}</div>`
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-toast': MzToast } }

