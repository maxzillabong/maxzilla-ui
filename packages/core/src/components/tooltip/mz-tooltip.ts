import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-tooltip')
export class MzTooltip extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host{position:relative;display:inline-block}
      .tip{position:absolute;z-index:10;background:var(--mz-color-neutral-900);color:var(--mz-color-neutral-0);font-size:var(--mz-text-xs);padding:.35rem .5rem;border-radius:.375rem;white-space:nowrap;opacity:0;transform:translateY(4px);transition:opacity var(--mz-transition-normal), transform var(--mz-transition-normal)}
      .tip::after{content:'';position:absolute;width:.5rem;height:.5rem;background:var(--mz-color-neutral-900);transform:rotate(45deg)}
      :host([data-open="true"]) .tip{opacity:1;transform:translateY(0)}
    `
  ]
  @property({type:String}) text = ''
  @property({type:String}) placement: 'top'|'bottom'|'left'|'right' = 'top'
  @state() private _open = false
  private _show(){ this._open=true }
  private _hide(){ this._open=false }
  render(){
    const pos = this.placement
    const style = pos==='top'? 'bottom:100%;left:50%;transform:translate(-50%,4px)' : pos==='bottom'? 'top:100%;left:50%;transform:translate(-50%,-4px)' : pos==='left'? 'right:100%;top:50%;transform:translate(4px,-50%)' : 'left:100%;top:50%;transform:translate(-4px,-50%)'
    return html`
      <span @mouseenter=${this._show} @mouseleave=${this._hide} @focus=${this._show} @blur=${this._hide}><slot></slot></span>
      <span class="tip" style=${style} part="content" data-open=${String(this._open)}>${this.text}</span>
    `
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-tooltip': MzTooltip } }
