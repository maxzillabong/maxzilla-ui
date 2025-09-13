import { LitElement, css, html } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'
import { ValidatableMixin } from '../../mixins/validation.js'

@customElement('mz-checkbox')
export class MzCheckbox extends ValidatableMixin(LitElement) {
  static formAssociated = true

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

      .box {
        width: var(--mz-space-5);
        height: var(--mz-space-5);
        border: 2px solid var(--mz-color-neutral-400);
        border-radius: var(--mz-radius-md);
        display: grid;
        place-items: center;
        background: linear-gradient(135deg, var(--mz-color-neutral-0), var(--mz-color-neutral-50));
        transition: all var(--mz-transition-spring);
        box-shadow: var(--mz-shadow-xs);
        position: relative;
        pointer-events: none;
      }

      .root:not(.disabled):hover .box {
        border-color: var(--mz-color-primary-400);
        transform: scale(1.1);
        box-shadow: var(--mz-shadow-sm);
      }

      .input:checked ~ .box {
        background: linear-gradient(135deg, var(--mz-color-primary-400), var(--mz-color-primary-500));
        border-color: var(--mz-color-primary-500);
        box-shadow: var(--mz-shadow-sm), var(--mz-shadow-primary-glow);
      }

      .root:not(.disabled):hover .input:checked ~ .box {
        background: linear-gradient(135deg, var(--mz-color-primary-300), var(--mz-color-primary-400));
        box-shadow: var(--mz-shadow-md), var(--mz-shadow-primary-glow-hover);
      }

      .input:focus-visible ~ .box {
        outline: 2px solid var(--mz-color-primary-500);
        outline-offset: var(--mz-space-0-5);
      }

      .input:indeterminate ~ .box {
        background: linear-gradient(135deg, var(--mz-color-primary-200), var(--mz-color-primary-300));
        border-color: var(--mz-color-primary-400);
      }

      .tick {
        color: var(--mz-color-neutral-0);
        font-size: var(--mz-text-sm);
        line-height: var(--mz-leading-tight);
        font-weight: var(--mz-font-bold);
        opacity: 0;
        transform: scale(0) rotate(-45deg);
        transition: all var(--mz-transition-spring);
      }

      .input:checked ~ .box .tick {
        opacity: 1;
        transform: scale(1) rotate(0);
        animation: checkmark 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }

      .dash {
        width: var(--mz-space-2-5);
        height: 2px;
        background: var(--mz-color-neutral-0);
        opacity: 0;
        transform: scale(0);
        transition: all var(--mz-transition-spring);
      }

      .input:indeterminate ~ .box .dash {
        opacity: 1;
        transform: scale(1);
        animation: checkmark 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }

      @keyframes checkmark {
        0% {
          transform: scale(0) rotate(-45deg);
          opacity: 0;
        }
        50% {
          transform: scale(1.2) rotate(5deg);
        }
        100% {
          transform: scale(1) rotate(0);
          opacity: 1;
        }
      }

      .label {
        user-select: none;
      }

      .error-message {
        color: var(--mz-color-error);
        font-size: var(--mz-text-xs);
        margin-top: var(--mz-space-1);
        position: absolute;
        top: 100%;
        left: 0;
      }
    `
  ]

  @property({ type: Boolean, reflect: true }) checked = false
  @property({ type: Boolean, reflect: true }) disabled = false
  @property({ type: Boolean, reflect: true }) indeterminate = false
  @property({ type: String }) label = ''
  @property({ type: String }) name = ''
  @property({ type: String }) value = 'on'
  @property({ type: Boolean }) required = false
  @property({ type: String, attribute: 'aria-label' }) ariaLabel = ''
  @property({ type: String, attribute: 'aria-describedby' }) ariaDescribedBy = ''

  @query('input') private _input!: HTMLInputElement

  private _internals?: ElementInternals

  constructor() {
    super()
    if ('attachInternals' in this) {
      this._internals = (this as any).attachInternals()
    }
  }

  connectedCallback() {
    super.connectedCallback()
    this._updateFormValue()
  }

  private _updateFormValue() {
    if (this._internals) {
      const value = this.checked ? this.value : null
      this._internals.setFormValue(value)

      // Update validity
      if (this.required && !this.checked) {
        this._internals.setValidity(
          { valueMissing: true },
          'Please check this box if you want to proceed.'
        )
      } else {
        this._internals.setValidity({})
      }
    }
  }

  private handleChange(e: Event) {
    const input = e.target as HTMLInputElement
    this.checked = input.checked
    this.indeterminate = false
    this._updateFormValue()

    // Validate
    if (this.touched) {
      this.validate()
    }

    // Dispatch change event
    this.dispatchEvent(new Event('change', {
      bubbles: true,
      composed: true
    }))

    // Dispatch custom event with detail
    this.dispatchEvent(new CustomEvent('mz-change', {
      detail: { checked: this.checked, value: this.value },
      bubbles: true,
      composed: true
    }))
  }

  private handleBlur() {
    this.touched = true
    this.validate()

    this.dispatchEvent(new Event('blur', {
      bubbles: true,
      composed: true
    }))
  }

  updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties)

    if (changedProperties.has('checked') || changedProperties.has('indeterminate')) {
      if (this._input) {
        this._input.checked = this.checked
        this._input.indeterminate = this.indeterminate
      }
      this._updateFormValue()
    }
  }

  // Form associated lifecycle callbacks
  formAssociatedCallback(form: HTMLFormElement) {
    // Called when associated with a form
  }

  formDisabledCallback(disabled: boolean) {
    this.disabled = disabled
  }

  formResetCallback() {
    this.checked = false
    this.indeterminate = false
    this.touched = false
    this.errors = []
  }

  formStateRestoreCallback(state: string) {
    this.checked = state === this.value
  }

  // Public API
  click() {
    this._input?.click()
  }

  focus() {
    this._input?.focus()
  }

  blur() {
    this._input?.blur()
  }

  render() {
    const showError = this.touched && this.errors.length > 0

    return html`
      <label class="root ${this.disabled ? 'disabled' : ''}">
        <input
          type="checkbox"
          class="input"
          .checked=${this.checked}
          .indeterminate=${this.indeterminate}
          ?disabled=${this.disabled}
          ?required=${this.required}
          name=${this.name}
          value=${this.value}
          aria-label=${this.ariaLabel || this.label}
          aria-describedby=${this.ariaDescribedBy}
          aria-invalid=${showError ? 'true' : 'false'}
          @change=${this.handleChange}
          @blur=${this.handleBlur}
        />
        <div class="box">
          ${this.indeterminate
            ? html`<span class="dash"></span>`
            : html`<span class="tick">✓</span>`
          }
        </div>
        ${this.label ? html`<span class="label">${this.label}</span>` : html`<slot></slot>`}
      </label>
      ${showError ? html`
        <span class="error-message" role="alert">
          ${this.errors[0]}
        </span>
      ` : ''}
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mz-checkbox': MzCheckbox
  }
}