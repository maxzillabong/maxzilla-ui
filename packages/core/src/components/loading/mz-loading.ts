import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-loading')
export class MzLoading extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host {
        display: inline-block;
      }

      .spinner {
        width: var(--mz-space-5); /* 1.25rem */
        height: var(--mz-space-5); /* 1.25rem */
        border: var(--mz-space-0-5) solid var(--mz-color-neutral-300); /* 2px */
        border-top-color: var(--mz-color-primary-500);
        border-radius: var(--mz-radius-full); /* 9999px */
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }

      .overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.3);
        display: grid;
        place-items: center;
      }
    `
  ]
  @property({type:Boolean}) overlay = false
  @property({type:String}) size: 'sm'|'md'|'lg' = 'md'

  @property({ type: String, attribute: 'aria-label' }) ariaLabel = 'Loading';

  render() {
    // Using spacing tokens for size variants
    const s = this.size === 'sm'
      ? 'var(--mz-space-4)' /* 1rem */
      : this.size === 'lg'
      ? 'var(--mz-space-8)' /* 2rem */
      : 'var(--mz-space-5)'; /* 1.25rem */

    const spinner = html`
      <div
        class="spinner"
        style=${`width:${s};height:${s}`}
        role="status"
        aria-label=${this.ariaLabel}
        aria-live="polite"
        aria-busy="true"
      ></div>
    `;

    return this.overlay
      ? html`
          <div
            class="overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Loading overlay"
          >
            ${spinner}
          </div>
        `
      : spinner;
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-loading': MzLoading } }

