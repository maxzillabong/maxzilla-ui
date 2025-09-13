import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-tree-node')
export class MzTreeNode extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        color: var(--mz-color-neutral-900);
      }

      .node {
        display: flex;
        align-items: center;
        gap: var(--mz-space-1); /* 0.25rem */
        cursor: pointer;
        padding: var(--mz-space-1) var(--mz-space-2); /* 0.25rem 0.5rem */
        border-radius: var(--mz-radius-sm);
        transition: background-color var(--mz-transition-fast);
        font-size: var(--mz-text-sm);
        line-height: var(--mz-leading-tight);
      }

      .node:hover {
        background-color: var(--mz-color-neutral-100);
      }

      .node:focus-visible {
        outline: var(--mz-space-0-5) solid var(--mz-color-primary-500); /* 2px */
        outline-offset: var(--mz-space-0-5); /* 2px */
        background-color: var(--mz-color-neutral-100);
      }

      .children {
        margin-left: var(--mz-space-4); /* 1rem */
        border-left: var(--mz-space-px) dashed var(--mz-color-neutral-200); /* 1px */
        padding-left: var(--mz-space-2); /* 0.5rem */
        margin-top: var(--mz-space-1);
      }

      button {
        background: transparent;
        border: var(--mz-space-0); /* 0 */
        cursor: pointer;
        width: var(--mz-space-4); /* 1rem */
        height: var(--mz-space-4); /* 1rem */
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--mz-radius-sm);
        transition: background-color var(--mz-transition-fast);
        color: var(--mz-color-neutral-600);
        font-size: var(--mz-text-xs);
      }

      button:hover {
        background-color: var(--mz-color-neutral-200);
        color: var(--mz-color-neutral-900);
      }

      button:focus-visible {
        outline: var(--mz-space-0-5) solid var(--mz-color-primary-500); /* 2px */
        outline-offset: var(--mz-space-px); /* 1px */
      }
    `
  ]
  @property({type:String}) label = ''
  @property({type:Boolean}) expandable = false
  @state() private _open = false
  private toggle(){ if(this.expandable){ this._open=!this._open } }
  render(){
    return html`
      <div class="node" role="treeitem" aria-expanded=${this.expandable?String(this._open):undefined} @click=${this.toggle}>
        ${this.expandable? html`<button aria-label="Toggle">${this._open?'▼':'▶'}</button>`: html`<span style="width:var(--mz-space-4);display:inline-block"></span>`}
        <span>${this.label || html`<slot name="label"></slot>`}</span>
      </div>
      ${this.expandable && this._open ? html`<div class="children" role="group"><slot></slot></div>`: null}
    `
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-tree-node': MzTreeNode } }

