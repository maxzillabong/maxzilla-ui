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
  @property({type:Boolean}) selected = false
  @state() private _open = false

  public expand() {
    if (!this.expandable || this._open) return;

    this._open = true;

    this.dispatchEvent(
      new CustomEvent('mz-expand', {
        detail: {
          label: this.label,
          expanded: true
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  public collapse() {
    if (!this.expandable || !this._open) return;

    this._open = false;

    this.dispatchEvent(
      new CustomEvent('mz-collapse', {
        detail: {
          label: this.label,
          expanded: false
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  public toggle() {
    if (this._open) {
      this.collapse();
    } else {
      this.expand();
    }
  }

  public select() {
    this.selected = true;

    this.dispatchEvent(
      new CustomEvent('mz-select', {
        detail: {
          label: this.label,
          selected: true
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  private handleClick = (event: MouseEvent) => {
    this.select();

    if (this.expandable) {
      this.toggle();
    }

    this.dispatchEvent(
      new CustomEvent('mz-click', {
        detail: {
          label: this.label,
          expandable: this.expandable,
          expanded: this._open,
          selected: this.selected,
          originalEvent: event
        },
        bubbles: true,
        composed: true,
      })
    );
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.handleClick(new MouseEvent('click'));
    } else if (event.key === 'ArrowRight' && this.expandable && !this._open) {
      this.expand();
    } else if (event.key === 'ArrowLeft' && this.expandable && this._open) {
      this.collapse();
    }
  };
  render(){
    return html`
      <div
        class="node"
        role="treeitem"
        tabindex="0"
        aria-expanded=${this.expandable?String(this._open):undefined}
        aria-selected=${this.selected}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        ${this.expandable? html`<button aria-label="Toggle">${this._open?'▼':'▶'}</button>`: html`<span style="width:var(--mz-space-4);display:inline-block"></span>`}
        <span>${this.label || html`<slot name="label"></slot>`}</span>
      </div>
      ${this.expandable && this._open ? html`<div class="children" role="group"><slot></slot></div>`: null}
    `
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-tree-node': MzTreeNode } }

