import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { baseStyles } from '../../styles/base.js';
import type { Size } from '../../types.js';

@customElement('mz-input')
export class MzInput extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        position: relative;
        --input-height: 2.75rem; /* No exact token for 2.75rem, keeping original value */
        --input-padding-x: var(--mz-space-4); /* 1rem */
        --input-padding-y: var(--mz-space-2-5); /* 0.625rem */
        --input-font-size: var(--mz-text-sm);
        --input-border-radius: var(--mz-radius-xl);
        --input-border: 2px solid var(--mz-color-neutral-200);
        --input-background: rgba(255, 255, 255, 0.8);
        --input-transition: all var(--mz-transition-normal);
      }

      .input-wrapper {
        position: relative;
        display: flex;
        align-items: center;
      }

      .input {
        width: 100%;
        height: var(--input-height);
        padding: var(--input-padding-y) var(--input-padding-x);
        font-family: inherit;
        font-size: var(--input-font-size);
        font-weight: var(--mz-font-medium); /* 500 */
        letter-spacing: 0.015em; /* No exact token for 0.015em, keeping original value */
        background: var(--input-background);
        border: var(--input-border);
        border-radius: var(--input-border-radius);
        transition: var(--input-transition);
        outline: none;
        backdrop-filter: blur(10px);
        color: var(--mz-color-neutral-800);
      }

      .input::placeholder {
        color: var(--mz-color-neutral-400);
        font-weight: var(--mz-font-normal); /* 400 */
      }

      .input:focus {
        border-color: var(--mz-color-primary-400);
        background: var(--mz-color-neutral-0);
        box-shadow: 0 0 0 var(--mz-space-1) rgba(6, 182, 212, 0.1), var(--mz-shadow-sm); /* 4px → --mz-space-1 (0.25rem) */
        transform: translateY(calc(-1 * var(--mz-space-px))); /* -1px */
      }

      .input:hover:not(:focus):not(:disabled) {
        border-color: var(--mz-color-neutral-300);
        background: rgba(255, 255, 255, 0.9);
      }

      .input:disabled {
        opacity: 0.5; /* No exact token for 0.5 opacity, keeping original value */
        cursor: not-allowed;
        background: var(--mz-color-neutral-50);
      }

      /* Size variants */
      :host([size='sm']) {
        --input-height: var(--mz-space-9); /* 2.25rem */
        --input-padding-x: var(--mz-space-3); /* 0.75rem */
        --input-font-size: var(--mz-text-xs);
        --input-border-radius: var(--mz-radius-lg);
      }

      :host([size='lg']) {
        --input-height: 3.25rem; /* No exact token for 3.25rem, keeping original value */
        --input-padding-x: var(--mz-space-5); /* 1.25rem */
        --input-font-size: var(--mz-text-base);
        --input-border-radius: var(--mz-radius-2xl);
      }

      /* Error state */
      :host([error]) .input {
        border-color: var(--mz-color-error);
        background: color-mix(in srgb, var(--mz-color-error-50) 30%, transparent); /* rgba(254, 226, 226, 0.3) → semantic color */
        box-shadow: 0 0 0 var(--mz-space-1) rgba(239, 68, 68, 0.1); /* 4px → --mz-space-1 (0.25rem) */
      }

      :host([error]) .input:focus {
        box-shadow: 0 0 0 var(--mz-space-1) rgba(239, 68, 68, 0.15), var(--mz-shadow-sm); /* 4px → --mz-space-1 (0.25rem) */
      }

      /* Success state */
      :host([success]) .input {
        border-color: var(--mz-color-success);
        background: color-mix(in srgb, var(--mz-color-success-50) 30%, transparent); /* rgba(220, 252, 231, 0.3) → semantic color */
        box-shadow: 0 0 0 var(--mz-space-1) rgba(34, 197, 94, 0.1); /* 4px → --mz-space-1 (0.25rem) */
      }

      :host([success]) .input:focus {
        box-shadow: 0 0 0 var(--mz-space-1) rgba(34, 197, 94, 0.15), var(--mz-shadow-sm); /* 4px → --mz-space-1 (0.25rem) */
      }
    `,
  ];

  @property({ type: String }) value = '';
  @property({ type: String }) placeholder = '';
  @property({ type: String }) type: 'text' | 'email' | 'password' | 'number' = 'text';
  @property({ type: String, reflect: true }) size: Size = 'md';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) error = false;
  @property({ type: Boolean, reflect: true }) success = false;


  private handleInput = (event: InputEvent) => {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    
    this.dispatchEvent(
      new CustomEvent('mz-input', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );
  };

  private handleFocus = () => {
    this.dispatchEvent(new CustomEvent('mz-focus', { bubbles: true, composed: true }));
  };

  private handleBlur = () => {
    this.dispatchEvent(new CustomEvent('mz-blur', { bubbles: true, composed: true }));
  };

  render() {
    return html`
      <div class="input-wrapper">
        <input
          class="input"
          type=${this.type}
          .value=${this.value}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          @input=${this.handleInput}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
        />
      </div>
    `;
  }
}