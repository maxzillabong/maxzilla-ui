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

  public show() {
    if (this.open) return;

    // Dispatch show event
    this.dispatchEvent(
      new CustomEvent('mz-show', {
        bubbles: true,
        composed: true,
      })
    );

    this.open = true;

    // Dispatch after-show event after animation
    setTimeout(() => {
      this.dispatchEvent(
        new CustomEvent('mz-after-show', {
          bubbles: true,
          composed: true,
        })
      );
    }, 200);
  }

  public hide() {
    if (!this.open) return;

    // Dispatch hide event
    this.dispatchEvent(
      new CustomEvent('mz-hide', {
        bubbles: true,
        composed: true,
      })
    );

    this.open = false;

    // Dispatch after-hide event after animation
    setTimeout(() => {
      this.dispatchEvent(
        new CustomEvent('mz-after-hide', {
          bubbles: true,
          composed: true,
        })
      );
    }, 200);
  }

  public toggle() {
    if (this.open) {
      this.hide();
    } else {
      this.show();
    }
  }

  private handleTriggerClick = (event: MouseEvent) => {
    if (!this.hover) {
      this.toggle();

      // Dispatch click event
      this.dispatchEvent(
        new CustomEvent('mz-trigger-click', {
          detail: { originalEvent: event },
          bubbles: true,
          composed: true,
        })
      );
    }
  };

  private handleTriggerMouseEnter = (event: MouseEvent) => {
    if (this.hover) {
      this.show();
    }

    this.dispatchEvent(
      new CustomEvent('mz-trigger-mouseenter', {
        detail: { originalEvent: event },
        bubbles: true,
        composed: true,
      })
    );
  };

  private handleTriggerMouseLeave = (event: MouseEvent) => {
    if (this.hover) {
      this.hide();
    }

    this.dispatchEvent(
      new CustomEvent('mz-trigger-mouseleave', {
        detail: { originalEvent: event },
        bubbles: true,
        composed: true,
      })
    );
  };

  private handlePanelMouseLeave = (event: MouseEvent) => {
    if (this.hover) {
      this.hide();
    }
  };

  render(){
    const pos = this.placement
    const style = pos==='top'? 'bottom:100%;left:50%;transform:translate(-50%,var(--mz-space-1))' : pos==='bottom'? 'top:100%;left:50%;transform:translate(-50%,calc(-1 * var(--mz-space-1)))' : pos==='left'? 'right:100%;top:50%;transform:translate(var(--mz-space-1),-50%)' : 'left:100%;top:50%;transform:translate(calc(-1 * var(--mz-space-1)),-50%)'
    return html`
      <span
        @click=${this.handleTriggerClick}
        @mouseenter=${this.handleTriggerMouseEnter}
        @mouseleave=${this.handleTriggerMouseLeave}
      >
        <slot name="trigger"></slot>
      </span>
      <div class="panel ${this.open?'open':''}" style=${style} role="dialog" @mouseleave=${this.handlePanelMouseLeave}>
        <div style="position:absolute;width:var(--mz-space-2);height:var(--mz-space-2);background:var(--mz-color-neutral-0);transform:rotate(45deg);${pos==='top'?'top:100%;left:50%;margin-left:calc(-1 * var(--mz-space-1))':'display:none'}"></div>
        <slot></slot>
      </div>
    `
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-popover': MzPopover } }
