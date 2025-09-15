import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-tooltip')
export class MzTooltip extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host {
        position: relative;
        display: inline-block;
      }

      .tip {
        position: absolute;
        z-index: 10;
        background: var(--mz-color-neutral-900);
        color: var(--mz-color-neutral-0);
        font-size: var(--mz-text-xs);
        font-weight: var(--mz-font-normal); /* added font weight token */
        line-height: var(--mz-leading-tight); /* added line height token */
        letter-spacing: var(--mz-tracking-normal); /* added letter spacing token */
        padding: var(--mz-space-1-5) var(--mz-space-2); /* was: .35rem .5rem */
        border-radius: var(--mz-radius-md); /* was: .375rem */
        white-space: nowrap;
        opacity: 0;
        transform: translateY(var(--mz-space-1)); /* was: 4px */
        transition: opacity var(--mz-transition-normal), transform var(--mz-transition-normal);
      }

      .tip::after {
        content: '';
        position: absolute;
        width: var(--mz-space-2); /* was: .5rem */
        height: var(--mz-space-2); /* was: .5rem */
        background: var(--mz-color-neutral-900);
        transform: rotate(45deg);
      }

      .tip[data-open="true"] {
        opacity: 1;
        transform: translateY(0);
      }
    `
  ]
  @property({type:String}) text = ''
  @property({type:String}) placement: 'top'|'bottom'|'left'|'right' = 'top'

  @property({ type: String, attribute: 'aria-describedby' }) ariaDescribedBy?: string;

  @state() private _open = false

  public show() {
    if (this._open) return;

    // Dispatch show event
    this.dispatchEvent(
      new CustomEvent('mz-show', {
        bubbles: true,
        composed: true,
      })
    );

    this._open = true;

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
    if (!this._open) return;

    // Dispatch hide event
    this.dispatchEvent(
      new CustomEvent('mz-hide', {
        bubbles: true,
        composed: true,
      })
    );

    this._open = false;

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

  private handleMouseEnter = (event: MouseEvent) => {
    this.show();

    this.dispatchEvent(
      new CustomEvent('mz-mouseenter', {
        detail: { originalEvent: event },
        bubbles: true,
        composed: true,
      })
    );
  };

  private handleMouseLeave = (event: MouseEvent) => {
    this.hide();

    this.dispatchEvent(
      new CustomEvent('mz-mouseleave', {
        detail: { originalEvent: event },
        bubbles: true,
        composed: true,
      })
    );
  };

  private handleFocus = (event: FocusEvent) => {
    this.show();

    this.dispatchEvent(
      new CustomEvent('mz-focus', {
        detail: { originalEvent: event },
        bubbles: true,
        composed: true,
      })
    );
  };

  private handleBlur = (event: FocusEvent) => {
    this.hide();

    this.dispatchEvent(
      new CustomEvent('mz-blur', {
        detail: { originalEvent: event },
        bubbles: true,
        composed: true,
      })
    );
  };
  render(){
    const pos = this.placement
    const style = pos==='top'? 'bottom:100%;left:50%;transform:translate(-50%,var(--mz-space-1))' : pos==='bottom'? 'top:100%;left:50%;transform:translate(-50%,calc(-1 * var(--mz-space-1)))' : pos==='left'? 'right:100%;top:50%;transform:translate(var(--mz-space-1),-50%)' : 'left:100%;top:50%;transform:translate(calc(-1 * var(--mz-space-1)),-50%)'
    const tooltipId = 'tooltip-' + Math.random().toString(36).substr(2, 9)

    return html`
      <span
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}
        aria-describedby=${this.ariaDescribedBy || tooltipId}
      >
        <slot></slot>
      </span>
      <span
        id=${tooltipId}
        class="tip"
        style=${style}
        part="content"
        data-open=${String(this._open)}
        role="tooltip"
        aria-hidden=${!this._open}
      >
        ${this.text}
      </span>
    `
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-tooltip': MzTooltip } }
