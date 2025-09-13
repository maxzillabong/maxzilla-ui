import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-popover')
export class MzPopover extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host {
        position: relative;
        display: inline-block;
      }

      .panel {
        position: absolute;
        z-index: 20;
        background: var(--mz-color-neutral-0);
        color: var(--mz-color-neutral-900);
        border: var(--mz-space-px) solid var(--mz-color-neutral-200); /* was: 1px */
        border-radius: var(--mz-radius-lg); /* was: .5rem */
        padding: var(--mz-space-2) var(--mz-space-3); /* was: .5rem .75rem */
        box-shadow: var(--mz-shadow-lg);
        opacity: 0;
        transform: translateY(var(--mz-space-1)); /* was: 4px */
        pointer-events: none;
        transition: opacity var(--mz-transition-normal), transform var(--mz-transition-normal);
      }

      .panel.open {
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto;
      }
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
    const style = pos==='top'? 'bottom:100%;left:50%;transform:translate(-50%,var(--mz-space-1))' : pos==='bottom'? 'top:100%;left:50%;transform:translate(-50%,calc(-1 * var(--mz-space-1)))' : pos==='left'? 'right:100%;top:50%;transform:translate(var(--mz-space-1),-50%)' : 'left:100%;top:50%;transform:translate(calc(-1 * var(--mz-space-1)),-50%)'
    return html`
      <span
        @click=${this.hover ? undefined : this._toggle}
        @mouseenter=${this.hover ? this._open : undefined}
        @mouseleave=${this.hover ? this._close : undefined}
      >
        <slot name="trigger"></slot>
      </span>
      <div class="panel ${this.open?'open':''}" style=${style} role="dialog" @mouseleave=${this.hover?this._close:undefined}>
        <div style="position:absolute;width:var(--mz-space-2);height:var(--mz-space-2);background:var(--mz-color-neutral-0);transform:rotate(45deg);${pos==='top'?'top:100%;left:50%;margin-left:calc(-1 * var(--mz-space-1))':'display:none'}"></div>
        <slot></slot>
      </div>
    `
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-popover': MzPopover } }
