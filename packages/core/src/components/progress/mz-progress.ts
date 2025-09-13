import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-progress')
export class MzProgress extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        color: var(--mz-color-neutral-900);
      }

      .bar {
        height: var(--mz-space-2); /* 0.5rem */
        background: var(--mz-color-neutral-200);
        border-radius: var(--mz-radius-lg); /* 0.5rem */
        overflow: hidden;
      }

      .fill {
        height: 100%;
        background: var(--mz-color-primary-500);
        transition: width var(--mz-transition-normal);
      }

      .label {
        margin-top: var(--mz-space-1); /* 0.25rem */
        font-size: var(--mz-text-sm);
      }
    `
  ]
  @property({type:Number}) value = 0
  @property({type:Number}) max = 100
  @property({type:String}) label = ''
  @property({type:Boolean, attribute:'show-value'}) showValue = false

  render() {
    const pct = Math.max(0, Math.min(100, (this.value / this.max) * 100));

    return html`
      <div class="bar" role="progressbar" aria-valuenow=${this.value} aria-valuemin="0" aria-valuemax=${this.max}>
        <div class="fill" style=${`width:${pct}%`}></div>
      </div>
      ${this.label || this.showValue
        ? html`<div class="label">
            ${this.label} ${this.showValue ? `${Math.round(pct)}%` : ''}
          </div>`
        : null}
    `;
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-progress': MzProgress } }

