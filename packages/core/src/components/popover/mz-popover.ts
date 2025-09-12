import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-popover')
export class MzPopover extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host{position:relative;display:inline-block}
      .panel{position:absolute; z-index:20; background:var(--mz-color-neutral-0); color:var(--mz-color-neutral-900); border:1px solid var(--mz-color-neutral-200); border-radius:.5rem; padding:.5rem .75rem; box-shadow:var(--mz-shadow-lg); opacity:0; transform:translateY(4px); pointer-events:none; transition:opacity var(--mz-transition-normal), transform var(--mz-transition-normal)}
      .panel.open{opacity:1; transform:translateY(0); pointer-events:auto}
    `
  ]
  @property({type:String}) placement: 'top'|'bottom'|'left'|'right' = 'bottom'
  @property({type:Boolean}) open = false
  @property({type:Boolean}) hover = false
  @state() private _coords = ''

  private _toggle(){ this.open = !this.open }
  private _open(){ this.open = true }
  private _close(){ this.open = false }

  render(){
    const pos = this.placement
    const style = pos==='top'? 'bottom:100%;left:50%;transform:translate(-50%,4px)' : pos==='bottom'? 'top:100%;left:50%;transform:translate(-50%,-4px)' : pos==='left'? 'right:100%;top:50%;transform:translate(4px,-50%)' : 'left:100%;top:50%;transform:translate(-4px,-50%)'
    const triggerHandlers = this.hover ? { onmouseenter: this._open, onmouseleave: this._close } : { onclick: this._toggle.bind(this) }
    return html`
      <span ...=${(triggerHandlers as any)}><slot name="trigger"></slot></span>
      <div class="panel ${this.open?'open':''}" style=${style} role="dialog" @mouseleave=${this.hover?this._close:undefined}>
        <slot></slot>
      </div>
    `
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-popover': MzPopover } }

