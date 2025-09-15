import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'
import { ValidatableMixin } from '../../mixins/validation.js';

@customElement('mz-textarea')
export class MzTextarea extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host { display: block; color: var(--mz-color-neutral-900); }
      label {
        display: block;
        font-weight: var(--mz-font-semibold); /* was: 600 */
        margin-bottom: var(--mz-space-2);
      }
      textarea {
        width: 100%;
        padding: var(--mz-space-3);
        border: var(--mz-space-px) solid var(--mz-color-neutral-300); /* border-width was: 1px */
        border-radius: var(--mz-radius-md);
        background: var(--mz-color-neutral-0);
        color: inherit;
      }
      textarea:focus {
        outline: var(--mz-space-2) solid var(--mz-color-primary-500); /* outline-width was: 2px */
        outline-offset: var(--mz-space-2); /* was: 2px */
      }
      .helper {
        font-size: var(--mz-text-sm);
        color: var(--mz-color-neutral-500);
        margin-top: var(--mz-space-2);
      }
    `
  ]

  @property({ type: String }) label = ''
  @property({ type: String }) placeholder = ''
  @property({ type: Number }) rows = 4
  @property({ type: String }) value = ''
  @property({ type: Boolean }) disabled = false
  @property({ type: String, attribute: 'helper-text' }) helperText = ''

  @property({ type: String, attribute: 'aria-label' }) ariaLabel?: string;
  @property({ type: String, attribute: 'aria-describedby' }) ariaDescribedBy?: string;
  @property({ type: Boolean, attribute: 'aria-invalid' }) ariaInvalid = false;
  @property({ type: Boolean, attribute: 'aria-required' }) ariaRequired = false;
  private onInput(e: Event) {
    const textarea = e.target as HTMLTextAreaElement
    this.value = textarea.value

    // Dispatch standard input event
    this.dispatchEvent(new Event('input', { bubbles: true, composed: true }))

    // Dispatch custom input event with detail
    this.dispatchEvent(new CustomEvent('mz-input', {
      detail: {
        value: this.value,
        originalEvent: e
      },
      bubbles: true,
      composed: true
    }))
  }

  private onChange(e: Event) {
    const textarea = e.target as HTMLTextAreaElement
    this.value = textarea.value

    // Dispatch standard change event
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }))

    // Dispatch custom change event with detail
    this.dispatchEvent(new CustomEvent('mz-change', {
      detail: {
        value: this.value,
        originalEvent: e
      },
      bubbles: true,
      composed: true
    }))
  }

  private onFocus(e: FocusEvent) {
    // Dispatch standard focus event
    this.dispatchEvent(new Event('focus', { bubbles: true, composed: true }))

    // Dispatch custom focus event
    this.dispatchEvent(new CustomEvent('mz-focus', {
      detail: { originalEvent: e },
      bubbles: true,
      composed: true
    }))
  }

  private onBlur(e: FocusEvent) {
    // Dispatch standard blur event
    this.dispatchEvent(new Event('blur', { bubbles: true, composed: true }))

    // Dispatch custom blur event
    this.dispatchEvent(new CustomEvent('mz-blur', {
      detail: { originalEvent: e },
      bubbles: true,
      composed: true
    }))
  }

  private onKeyDown(e: KeyboardEvent) {
    // Dispatch custom keydown event
    this.dispatchEvent(new CustomEvent('mz-keydown', {
      detail: {
        key: e.key,
        originalEvent: e
      },
      bubbles: true,
      composed: true
    }))

    // Special handling for Enter key (check if Shift/Ctrl/Meta is pressed)
    if (e.key === 'Enter' && !e.shiftKey) {
      this.dispatchEvent(new CustomEvent('mz-enter', {
        detail: {
          value: this.value,
          originalEvent: e
        },
        bubbles: true,
        composed: true
      }))
    }
  }

  private onKeyUp(e: KeyboardEvent) {
    // Dispatch custom keyup event
    this.dispatchEvent(new CustomEvent('mz-keyup', {
      detail: {
        key: e.key,
        originalEvent: e
      },
      bubbles: true,
      composed: true
    }))
  }

  render() {
    const helperId = this.helperText ? 'helper-text' : undefined;
    return html`
      ${this.label ? html`<label for="textarea-input">${this.label}</label>` : null}
      <textarea
        id="textarea-input"
        rows=${this.rows}
        placeholder=${this.placeholder}
        .value=${this.value}
        ?disabled=${this.disabled}
        aria-label=${this.ariaLabel || this.label || 'Text area'}
        aria-describedby=${this.ariaDescribedBy || helperId || ''}
        aria-invalid=${this.ariaInvalid}
        aria-required=${this.ariaRequired}
        aria-multiline="true"
        @input=${this.onInput}
        @change=${this.onChange}
        @focus=${this.onFocus}
        @blur=${this.onBlur}
        @keydown=${this.onKeyDown}
        @keyup=${this.onKeyUp}
      ></textarea>
      ${this.helperText ? html`<div id="helper-text" class="helper">${this.helperText}</div>` : null}
    `
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-textarea': MzTextarea } }

