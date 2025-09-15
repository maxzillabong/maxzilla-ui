import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-radio')
export class MzRadio extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host {
        display: inline-block;
        color: var(--mz-color-neutral-800);
      }

      .root {
        display: inline-flex;
        align-items: center;
        gap: var(--mz-space-3);
        cursor: pointer;
        font-weight: var(--mz-font-medium);
        transition: opacity var(--mz-transition-normal);
        position: relative;
      }

      .root.disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .input {
        position: absolute;
        opacity: 0;
        width: var(--mz-space-5);
        height: var(--mz-space-5);
        cursor: pointer;
      }

      .input:disabled {
        cursor: not-allowed;
      }

      .outer {
        width: var(--mz-space-5);
        height: var(--mz-space-5);
        border: 2px solid var(--mz-color-neutral-400);
        border-radius: var(--mz-radius-full);
        display: grid;
        place-items: center;
        background: linear-gradient(135deg, var(--mz-color-neutral-0), var(--mz-color-neutral-50));
        transition: all var(--mz-transition-spring);
        box-shadow: var(--mz-shadow-xs);
        position: relative;
        pointer-events: none;
      }

      .root:not(.disabled):hover .outer {
        border-color: var(--mz-color-primary-400);
        transform: scale(1.1);
        box-shadow: var(--mz-shadow-sm);
      }

      .input:checked ~ .outer {
        background: linear-gradient(135deg, var(--mz-color-primary-400), var(--mz-color-primary-500));
        border-color: var(--mz-color-primary-500);
        box-shadow: var(--mz-shadow-sm), var(--mz-shadow-primary-glow);
      }

      .root:not(.disabled):hover .input:checked ~ .outer {
        background: linear-gradient(135deg, var(--mz-color-primary-300), var(--mz-color-primary-400));
        box-shadow: var(--mz-shadow-md), var(--mz-shadow-primary-glow-hover);
      }

      .input:focus-visible ~ .outer {
        outline: 2px solid var(--mz-color-primary-500);
        outline-offset: var(--mz-space-0-5);
      }

      .dot {
        width: var(--mz-space-2);
        height: var(--mz-space-2);
        border-radius: var(--mz-radius-full);
        background: var(--mz-color-neutral-0);
        transform: scale(0);
        transition: all var(--mz-transition-spring);
        opacity: 0;
      }

      .input:checked ~ .outer .dot {
        transform: scale(1);
        opacity: 1;
        animation: radioCheck 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }

      @keyframes radioCheck {
        0% {
          transform: scale(0);
          opacity: 0;
        }
        50% {
          transform: scale(1.2);
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }

      .label {
        user-select: none;
      }
    `
  ]
  @property({ type: String }) value = ''
  @property({ type: String }) name = ''
  @property({ type: String }) label = ''
  @property({ type: Boolean, reflect: true }) checked = false
  @property({ type: Boolean }) disabled = false
  @property({ type: Boolean }) required = false
  @property({ type: String, attribute: 'aria-label' }) ariaLabel = ''
  @property({ type: String, attribute: 'aria-describedby' }) ariaDescribedBy = ''

  private handleChange(e: Event) {
    if (this.disabled) return
    const input = e.target as HTMLInputElement
    const previousChecked = this.checked
    this.checked = input.checked

    // Dispatch radio-select for group handling
    this.dispatchEvent(new CustomEvent('radio-select', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }))

    // Dispatch standard change event
    this.dispatchEvent(new Event('change', {
      bubbles: true,
      composed: true
    }))

    // Dispatch custom mz-change event with detail
    this.dispatchEvent(new CustomEvent('mz-change', {
      detail: {
        checked: this.checked,
        previousChecked,
        value: this.value,
        originalEvent: e
      },
      bubbles: true,
      composed: true
    }))
  }

  private handleInput(e: Event) {
    // Dispatch standard input event
    this.dispatchEvent(new Event('input', { bubbles: true, composed: true }))

    // Dispatch custom input event
    this.dispatchEvent(new CustomEvent('mz-input', {
      detail: {
        checked: this.checked,
        value: this.value,
        originalEvent: e
      },
      bubbles: true,
      composed: true
    }))
  }

  private handleFocus(e: FocusEvent) {
    // Dispatch standard focus event
    this.dispatchEvent(new Event('focus', { bubbles: true, composed: true }))

    // Dispatch custom focus event
    this.dispatchEvent(new CustomEvent('mz-focus', {
      detail: { originalEvent: e },
      bubbles: true,
      composed: true
    }))
  }

  private handleBlur(e: FocusEvent) {
    // Dispatch standard blur event
    this.dispatchEvent(new Event('blur', { bubbles: true, composed: true }))

    // Dispatch custom blur event
    this.dispatchEvent(new CustomEvent('mz-blur', {
      detail: { originalEvent: e },
      bubbles: true,
      composed: true
    }))
  }

  private handleKeyDown(e: KeyboardEvent) {
    // Dispatch custom keydown event
    this.dispatchEvent(new CustomEvent('mz-keydown', {
      detail: {
        key: e.key,
        originalEvent: e
      },
      bubbles: true,
      composed: true
    }))

    // Handle space key for selection
    if (e.key === ' ') {
      e.preventDefault()
      this.click()
    }
  }

  private handleKeyUp(e: KeyboardEvent) {
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

  // Public API
  click() {
    this.shadowRoot?.querySelector('input')?.click()
  }

  focus() {
    this.shadowRoot?.querySelector('input')?.focus()
  }

  blur() {
    this.shadowRoot?.querySelector('input')?.blur()
  }

  render() {
    return html`
      <label class="root ${this.disabled ? 'disabled' : ''}">
        <input
          type="radio"
          class="input"
          .checked=${this.checked}
          ?disabled=${this.disabled}
          ?required=${this.required}
          name=${this.name}
          value=${this.value}
          aria-label=${this.ariaLabel || this.label}
          aria-describedby=${this.ariaDescribedBy}
          @change=${this.handleChange}
          @input=${this.handleInput}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
          @keydown=${this.handleKeyDown}
          @keyup=${this.handleKeyUp}
        />
        <div class="outer">
          <div class="dot"></div>
        </div>
        ${this.label ? html`<span class="label">${this.label}</span>` : html`<slot></slot>`}
      </label>
    `
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-radio': MzRadio } }

