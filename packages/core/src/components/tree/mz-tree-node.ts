import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-tree-node')
export class MzTreeNode extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host{display:block;color:var(--mz-color-neutral-900)}
      .node{display:flex;align-items:center;gap:.25rem;cursor:pointer}
      .children{margin-left:1rem;border-left:1px dashed var(--mz-color-neutral-200);padding-left:.5rem}
      button{background:transparent;border:0;cursor:pointer}
    `
  ]
  @property({type:String}) label = ''
  @property({type:Boolean}) expandable = false
  @state() private _open = false
  private toggle(){ if(this.expandable){ this._open=!this._open } }
  render(){
    return html`
      <div class="node" role="treeitem" aria-expanded=${this.expandable?String(this._open):undefined} @click=${this.toggle}>
        ${this.expandable? html`<button aria-label="Toggle">${this._open?'▼':'▶'}</button>`: html`<span style="width:1rem"></span>`}
        <span>${this.label || html`<slot name="label"></slot>`}</span>
      </div>
      ${this.expandable && this._open ? html`<div class="children" role="group"><slot></slot></div>`: null}
    `
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-tree-node': MzTreeNode } }

