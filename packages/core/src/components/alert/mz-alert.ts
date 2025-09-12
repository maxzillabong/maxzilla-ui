import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-alert')
export class MzAlert extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host{display:block}
      .box{padding:.75rem 1rem;border-radius:.5rem;border:1px solid var(--mz-color-neutral-200)}
      .success{background:hsla(142,71%,45%,.1);border-color:hsl(142,71%,45%);color:hsl(142,71%,20%)}
      .info{background:hsla(200,98%,39%,.1);border-color:hsl(200,98%,39%);color:hsl(200,98%,20%)}
      .warning{background:hsla(38,92%,50%,.1);border-color:hsl(38,92%,50%);color:hsl(38,92%,25%)}
      .error{background:hsla(0,84%,60%,.1);border-color:hsl(0,84%,60%);color:hsl(0,84%,30%)}
      button{float:right;background:transparent;border:0;cursor:pointer;color:inherit}
    `
  ]
  @property({type:String}) variant: 'success'|'info'|'warning'|'error' = 'info'
  @property({type:Boolean}) dismissible = false
  private close(){ this.style.display='none'; this.dispatchEvent(new Event('close',{bubbles:true})) }
  render(){ return html`<div class="box ${this.variant}">${this.dismissible? html`<button aria-label="Close" @click=${()=>this.close()}>✕</button>`:null}<slot></slot></div>` }
}

declare global { interface HTMLElementTagNameMap { 'mz-alert': MzAlert } }

