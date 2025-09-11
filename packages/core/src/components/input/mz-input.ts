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
        --input-height: 2.5rem;
        --input-padding-x: 0.75rem;
        --input-padding-y: 0.5rem;
        --input-font-size: var(--mz-text-sm);
        --input-border-radius: var(--mz-radius-md);
        --input-border: 1px solid var(--mz-color-neutral-300);
        --input-background: var(--mz-color-neutral-0);
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
        background: var(--input-background);
        border: var(--input-border);
        border-radius: var(--input-border-radius);
        transition: var(--input-transition);
        outline: none;
      }

      .input:focus {
        border-color: var(--mz-color-primary-500);
        box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);
      }

      .input:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        background: var(--mz-color-neutral-50);
      }

      /* Size variants */
      :host([size='sm']) {
        --input-height: 2rem;
        --input-padding-x: 0.5rem;
        --input-font-size: var(--mz-text-xs);
      }

      :host([size='lg']) {
        --input-height: 3rem;
        --input-padding-x: 1rem;
        --input-font-size: var(--mz-text-base);
      }

      /* Error state */
      :host([error]) .input {
        border-color: var(--mz-color-error);
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
      }

      /* Success state */
      :host([success]) .input {
        border-color: var(--mz-color-success);
        box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
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