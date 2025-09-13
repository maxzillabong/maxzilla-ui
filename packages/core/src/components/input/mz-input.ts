import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { baseStyles } from '../../styles/base.js';
import { ValidatableMixin, ValidationSchemas } from '../../mixins/validation.js';
import type { Size } from '../../types.js';

@customElement('mz-input')
export class MzInput extends ValidatableMixin(LitElement) {
  static formAssociated = true;

  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        position: relative;
        --input-height: 2.75rem;
        --input-padding-x: var(--mz-space-4);
        --input-padding-y: var(--mz-space-2-5);
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
        font-weight: var(--mz-font-medium);
        letter-spacing: 0.015em;
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
        font-weight: var(--mz-font-normal);
      }

      .input:focus {
        border-color: var(--mz-color-primary-400);
        background: var(--mz-color-neutral-0);
        box-shadow: 0 0 0 var(--mz-space-1) rgba(6, 182, 212, 0.1), var(--mz-shadow-sm);
        transform: translateY(calc(-1 * var(--mz-space-px)));
      }

      .input:hover:not(:focus):not(:disabled) {
        border-color: var(--mz-color-neutral-300);
        background: rgba(255, 255, 255, 0.9);
      }

      .input:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        background: var(--mz-color-neutral-50);
      }

      /* Size variants */
      :host([size='sm']) {
        --input-height: var(--mz-space-9);
        --input-padding-x: var(--mz-space-3);
        --input-font-size: var(--mz-text-xs);
        --input-border-radius: var(--mz-radius-lg);
      }

      :host([size='lg']) {
        --input-height: 3.25rem;
        --input-padding-x: var(--mz-space-5);
        --input-font-size: var(--mz-text-base);
        --input-border-radius: var(--mz-radius-2xl);
      }

      /* Error state */
      :host([error]) .input,
      .input.has-error {
        border-color: var(--mz-color-error);
        background: color-mix(in srgb, var(--mz-color-error-50) 30%, transparent);
        box-shadow: 0 0 0 var(--mz-space-1) rgba(239, 68, 68, 0.1);
      }

      :host([error]) .input:focus,
      .input.has-error:focus {
        box-shadow: 0 0 0 var(--mz-space-1) rgba(239, 68, 68, 0.15), var(--mz-shadow-sm);
      }

      /* Success state */
      :host([success]) .input,
      .input.has-success {
        border-color: var(--mz-color-success);
        background: color-mix(in srgb, var(--mz-color-success-50) 30%, transparent);
        box-shadow: 0 0 0 var(--mz-space-1) rgba(34, 197, 94, 0.1);
      }

      :host([success]) .input:focus,
      .input.has-success:focus {
        box-shadow: 0 0 0 var(--mz-space-1) rgba(34, 197, 94, 0.15), var(--mz-shadow-sm);
      }

      /* Full width */
      :host([full-width]) {
        width: 100%;
      }

      /* Prefix and suffix slots */
      .prefix,
      .suffix {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        color: var(--mz-color-neutral-500);
        pointer-events: none;
      }

      .prefix {
        left: var(--input-padding-x);
      }

      .suffix {
        right: var(--input-padding-x);
      }

      :host([has-prefix]) .input {
        padding-left: calc(var(--input-padding-x) * 2.5);
      }

      :host([has-suffix]) .input {
        padding-right: calc(var(--input-padding-x) * 2.5);
      }

      /* Error message */
      .error-message {
        color: var(--mz-color-error);
        font-size: var(--mz-text-xs);
        margin-top: var(--mz-space-1);
        padding-left: var(--input-padding-x);
      }

      /* Helper text */
      .helper-text {
        color: var(--mz-color-neutral-600);
        font-size: var(--mz-text-xs);
        margin-top: var(--mz-space-1);
        padding-left: var(--input-padding-x);
      }

      /* Label */
      .label {
        display: block;
        margin-bottom: var(--mz-space-2);
        font-size: var(--mz-text-sm);
        font-weight: var(--mz-font-medium);
        color: var(--mz-color-neutral-700);
      }

      .label.required::after {
        content: ' *';
        color: var(--mz-color-error);
      }
    `,
  ];

  @property({ type: String }) value = '';
  @property({ type: String }) placeholder = '';
  @property({ type: String }) type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local' = 'text';
  @property({ type: String, reflect: true }) size: Size = 'md';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) error = false;
  @property({ type: Boolean, reflect: true }) success = false;
  @property({ type: String }) name = '';
  @property({ type: String }) label = '';
  @property({ type: String }) helperText = '';
  @property({ type: Boolean }) required = false;
  @property({ type: Boolean, reflect: true, attribute: 'full-width' }) fullWidth = false;
  @property({ type: String }) pattern = '';
  @property({ type: String }) autocomplete = '';
  @property({ type: Number }) min?: number;
  @property({ type: Number }) max?: number;
  @property({ type: Number }) minLength?: number;
  @property({ type: Number }) maxLength?: number;
  @property({ type: Number }) step?: number;
  @property({ type: Boolean }) readonly = false;
  @property({ type: Boolean }) autofocus = false;
  @property({ type: String, attribute: 'aria-label' }) ariaLabel = '';
  @property({ type: String, attribute: 'aria-describedby' }) ariaDescribedBy = '';
  @property({ type: Boolean, reflect: true, attribute: 'has-prefix' }) hasPrefix = false;
  @property({ type: Boolean, reflect: true, attribute: 'has-suffix' }) hasSuffix = false;
  @property({ type: String, attribute: 'validation-type' }) validationType?: 'email' | 'url' | 'phone' | 'postalCode' | 'creditCard' | 'password' | 'strongPassword' | 'username';

  @query('input') private _input!: HTMLInputElement;

  private _internals?: ElementInternals;

  constructor() {
    super();
    if ('attachInternals' in this) {
      this._internals = (this as any).attachInternals();
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.setupValidation();
    this._updateFormValue();
  }

  firstUpdated() {
    // Check for prefix/suffix slots
    const prefix = this.shadowRoot?.querySelector('slot[name="prefix"]') as HTMLSlotElement;
    const suffix = this.shadowRoot?.querySelector('slot[name="suffix"]') as HTMLSlotElement;

    if (prefix) {
      this.hasPrefix = prefix.assignedNodes().length > 0;
    }
    if (suffix) {
      this.hasSuffix = suffix.assignedNodes().length > 0;
    }

    // Handle autofocus
    if (this.autofocus) {
      this._input?.focus();
    }
  }

  private setupValidation() {
    // Set up Zod validation schema based on type or validationType
    if (this.validationType && ValidationSchemas[this.validationType]) {
      this.validationSchema = ValidationSchemas[this.validationType];
    } else if (this.type === 'email' && !this.validationSchema) {
      this.validationSchema = ValidationSchemas.email;
    } else if (this.type === 'url' && !this.validationSchema) {
      this.validationSchema = ValidationSchemas.url;
    } else if (this.type === 'tel' && !this.validationSchema) {
      this.validationSchema = ValidationSchemas.phone;
    }
  }

  private _updateFormValue() {
    if (this._internals) {
      this._internals.setFormValue(this.value);

      // Update validity
      const validationResult = this.validate();
      if (!validationResult.success && this.errors.length > 0) {
        this._internals.setValidity(
          { customError: true },
          this.errors[0]
        );
      } else if (this.required && !this.value) {
        this._internals.setValidity(
          { valueMissing: true },
          'Please fill out this field.'
        );
      } else {
        this._internals.setValidity({});
      }
    }
  }

  private handleInput = (event: InputEvent) => {
    const target = event.target as HTMLInputElement;
    this.value = target.value;

    // Validate on input if touched
    if (this.touched) {
      this.validate();
    }

    this._updateFormValue();

    // Dispatch custom event
    this.dispatchEvent(
      new CustomEvent('mz-input', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );

    // Dispatch standard input event
    this.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
  };

  private handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.value = target.value;

    // Validate on change
    this.validate();
    this._updateFormValue();

    // Dispatch custom event
    this.dispatchEvent(
      new CustomEvent('mz-change', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );

    // Dispatch standard change event
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  };

  private handleFocus = () => {
    this.dispatchEvent(new CustomEvent('mz-focus', { bubbles: true, composed: true }));
    this.dispatchEvent(new Event('focus', { bubbles: true, composed: true }));
  };

  private handleBlur = () => {
    this.touched = true;
    this.validate();
    this._updateFormValue();

    this.dispatchEvent(new CustomEvent('mz-blur', { bubbles: true, composed: true }));
    this.dispatchEvent(new Event('blur', { bubbles: true, composed: true }));
  };

  // Form associated lifecycle callbacks
  formAssociatedCallback(form: HTMLFormElement) {
    // Called when associated with a form
  }

  formDisabledCallback(disabled: boolean) {
    this.disabled = disabled;
  }

  formResetCallback() {
    this.value = '';
    this.touched = false;
    this.errors = [];
    this.error = false;
    this.success = false;
  }

  formStateRestoreCallback(state: string) {
    this.value = state;
  }

  // Public API
  focus() {
    this._input?.focus();
  }

  blur() {
    this._input?.blur();
  }

  select() {
    this._input?.select();
  }

  setSelectionRange(start: number, end: number, direction?: 'forward' | 'backward' | 'none') {
    this._input?.setSelectionRange(start, end, direction);
  }

  render() {
    const showError = this.touched && this.errors.length > 0;
    const showSuccess = this.success && !showError;

    const inputClasses = ['input'];
    if (showError) inputClasses.push('has-error');
    if (showSuccess) inputClasses.push('has-success');

    return html`
      ${this.label ? html`
        <label class="label ${this.required ? 'required' : ''}">
          ${this.label}
        </label>
      ` : ''}

      <div class="input-wrapper">
        ${this.hasPrefix ? html`
          <div class="prefix">
            <slot name="prefix"></slot>
          </div>
        ` : ''}

        <input
          class=${inputClasses.join(' ')}
          type=${this.type}
          .value=${this.value}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          name=${this.name}
          pattern=${this.pattern}
          autocomplete=${this.autocomplete}
          min=${this.min ?? nothing}
          max=${this.max ?? nothing}
          minlength=${this.minLength ?? nothing}
          maxlength=${this.maxLength ?? nothing}
          step=${this.step ?? nothing}
          aria-label=${this.ariaLabel || this.label}
          aria-describedby=${this.ariaDescribedBy}
          aria-invalid=${showError ? 'true' : 'false'}
          aria-required=${this.required ? 'true' : 'false'}
          @input=${this.handleInput}
          @change=${this.handleChange}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
        />

        ${this.hasSuffix ? html`
          <div class="suffix">
            <slot name="suffix"></slot>
          </div>
        ` : ''}
      </div>

      ${showError ? html`
        <div class="error-message" role="alert">
          ${this.errors[0]}
        </div>
      ` : this.helperText ? html`
        <div class="helper-text">
          ${this.helperText}
        </div>
      ` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mz-input': MzInput;
  }
}