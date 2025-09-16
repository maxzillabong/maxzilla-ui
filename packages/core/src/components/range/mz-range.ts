import { LitElement, html, css } from 'lit'
import { customElement, property, state, query } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import '../tooltip/mz-tooltip.js'

/**
 * @summary A range slider component for selecting numeric values within a range
 * @documentation https://maxzillaui.dev/components/range
 * @status stable
 * @since 1.0
 *
 * @dependency mz-tooltip
 *
 * @event mz-change - Emitted when the range value changes and focus is lost
 * @event mz-input - Emitted when the range value is being changed (live updates)
 * @event mz-focus - Emitted when the range receives focus
 * @event mz-blur - Emitted when the range loses focus
 * @event mz-invalid - Emitted when the range is invalid
 *
 * @slot label - The range's label
 * @slot help-text - Text that describes how to use the range
 * @slot prefix - Content to show before the range
 * @slot suffix - Content to show after the range
 *
 * @csspart base - The component's base wrapper
 * @csspart input - The native range input
 * @csspart track - The range track
 * @csspart thumb - The range thumb
 * @csspart tooltip - The value tooltip
 *
 * @cssproperty --thumb-size - Size of the range thumb
 * @cssproperty --tooltip-offset - Distance between the tooltip and thumb
 * @cssproperty --track-color-active - Color of the active portion of the track
 * @cssproperty --track-color-inactive - Color of the inactive portion of the track
 * @cssproperty --track-height - Height of the track
 * @cssproperty --track-active-offset - Point of origin of the active track
 */
@customElement('mz-range')
export class MzRange extends LitElement {
  static styles = css`
    :host {
      display: block;
      --thumb-size: 20px;
      --tooltip-offset: 10px;
      --track-color-active: var(--mz-color-primary);
      --track-color-inactive: var(--mz-color-neutral-200);
      --track-height: 6px;
      --track-active-offset: 0%;
    }

    .range {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .label {
      display: block;
      font-weight: var(--mz-font-weight-semibold);
      color: var(--mz-color-text);
      margin-bottom: 0.25rem;
    }

    .input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .prefix,
    .suffix {
      color: var(--mz-color-text-secondary);
      font-size: var(--mz-font-size-small);
    }

    .input-container {
      position: relative;
      flex: 1;
      height: 32px;
      display: flex;
      align-items: center;
    }

    .input {
      position: absolute;
      width: 100%;
      height: var(--track-height);
      background: transparent;
      cursor: pointer;
      opacity: 0;
      margin: 0;
      z-index: 2;
    }

    .input:focus {
      outline: none;
    }

    .track {
      position: absolute;
      width: 100%;
      height: var(--track-height);
      background: var(--track-color-inactive);
      border-radius: calc(var(--track-height) / 2);
      overflow: hidden;
    }

    .track-active {
      position: absolute;
      height: 100%;
      background: var(--track-color-active);
      border-radius: inherit;
      transition: width 0.1s ease;
    }

    .thumb {
      position: absolute;
      width: var(--thumb-size);
      height: var(--thumb-size);
      background: var(--mz-color-surface);
      border: 2px solid var(--track-color-active);
      border-radius: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: var(--mz-shadow-small);
      z-index: 1;
    }

    .thumb:hover {
      transform: translate(-50%, -50%) scale(1.1);
      box-shadow: var(--mz-shadow-medium);
    }

    .input:focus + .track .thumb {
      box-shadow: 0 0 0 3px var(--mz-color-primary-alpha-20);
    }

    .help-text {
      font-size: var(--mz-font-size-small);
      color: var(--mz-color-text-secondary);
      margin-top: 0.25rem;
    }

    .range--disabled {
      opacity: 0.6;
      pointer-events: none;
    }

    .range--disabled .input {
      cursor: not-allowed;
    }

    .range--disabled .thumb {
      cursor: not-allowed;
    }

    .tooltip-content {
      padding: 0.25rem 0.5rem;
      background: var(--mz-color-text);
      color: var(--mz-color-surface);
      border-radius: var(--mz-border-radius-small);
      font-size: var(--mz-font-size-small);
      font-weight: var(--mz-font-weight-medium);
      white-space: nowrap;
    }

    /* Custom range input styles for better cross-browser support */
    .input::-webkit-slider-thumb {
      appearance: none;
      width: var(--thumb-size);
      height: var(--thumb-size);
      background: transparent;
      cursor: pointer;
    }

    .input::-webkit-slider-track {
      appearance: none;
      background: transparent;
      cursor: pointer;
    }

    .input::-moz-range-thumb {
      appearance: none;
      width: var(--thumb-size);
      height: var(--thumb-size);
      background: transparent;
      border: none;
      cursor: pointer;
    }

    .input::-moz-range-track {
      appearance: none;
      background: transparent;
      cursor: pointer;
    }

    @media (prefers-reduced-motion: reduce) {
      .track-active,
      .thumb {
        transition: none;
      }
    }
  `

  @query('.input') private input!: HTMLInputElement

  /** The range's current value */
  @property({ type: Number }) value = 0

  /** The range's minimum value */
  @property({ type: Number }) min = 0

  /** The range's maximum value */
  @property({ type: Number }) max = 100

  /** The range's step increment */
  @property({ type: Number }) step = 1

  /** The range's label */
  @property() label = ''

  /** The range's help text */
  @property({ attribute: 'help-text' }) helpText = ''

  /** Whether the range is disabled */
  @property({ type: Boolean, reflect: true }) disabled = false

  /** Whether the range is required */
  @property({ type: Boolean, reflect: true }) required = false

  /** The range's name (for form submission) */
  @property() name = ''

  /** Tooltip placement around the thumb */
  @property() tooltip: 'top' | 'bottom' | 'none' = 'top'

  /** Custom function for formatting the tooltip value */
  @property({ attribute: false }) tooltipFormatter?: (value: number) => string

  @state() private isDragging = false
  @state() private hasFocus = false

  private getPercent() {
    return ((this.value - this.min) / (this.max - this.min)) * 100
  }

  private formatTooltipValue(value: number): string {
    if (this.tooltipFormatter) {
      return this.tooltipFormatter(value)
    }
    return value.toString()
  }

  private handleInput(event: Event) {
    const target = event.target as HTMLInputElement
    const newValue = parseFloat(target.value)
    const oldValue = this.value

    if (newValue !== oldValue) {
      this.value = newValue

      this.dispatchEvent(new CustomEvent('mz-input', {
        detail: { value: newValue, oldValue },
        bubbles: true,
        composed: true
      }))
    }
  }

  private handleChange(event: Event) {
    const target = event.target as HTMLInputElement
    const newValue = parseFloat(target.value)
    const oldValue = this.value

    if (newValue !== oldValue) {
      this.value = newValue

      this.dispatchEvent(new CustomEvent('mz-change', {
        detail: { value: newValue, oldValue },
        bubbles: true,
        composed: true
      }))
    }
  }

  private handleFocus(event: FocusEvent) {
    this.hasFocus = true
    this.dispatchEvent(new CustomEvent('mz-focus', {
      detail: { originalEvent: event },
      bubbles: true,
      composed: true
    }))
  }

  private handleBlur(event: FocusEvent) {
    this.hasFocus = false
    this.dispatchEvent(new CustomEvent('mz-blur', {
      detail: { originalEvent: event },
      bubbles: true,
      composed: true
    }))
  }

  private handleMouseDown() {
    this.isDragging = true
  }

  private handleMouseUp() {
    this.isDragging = false
  }

  connectedCallback() {
    super.connectedCallback()
    document.addEventListener('mouseup', this.handleMouseUp.bind(this))
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    document.removeEventListener('mouseup', this.handleMouseUp.bind(this))
  }

  render() {
    const classes = {
      'range': true,
      'range--disabled': this.disabled
    }

    const percent = this.getPercent()
    const showTooltip = this.tooltip !== 'none' && (this.hasFocus || this.isDragging)

    return html`
      <div class=${classMap(classes)} part="base">
        ${this.label ? html`
          <label class="label" part="label">
            <slot name="label">${this.label}</slot>
          </label>
        ` : ''}

        <div class="input-wrapper">
          <slot name="prefix" class="prefix"></slot>

          <div class="input-container">
            <input
              type="range"
              class="input"
              part="input"
              .value=${this.value.toString()}
              .min=${this.min.toString()}
              .max=${this.max.toString()}
              .step=${this.step.toString()}
              .name=${ifDefined(this.name || undefined)}
              ?disabled=${this.disabled}
              ?required=${this.required}
              @input=${this.handleInput}
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
              @mousedown=${this.handleMouseDown}
              aria-label=${ifDefined(this.label || undefined)}
            />

            <div class="track" part="track">
              <div
                class="track-active"
                style="width: ${percent}%"
              ></div>
            </div>

            <div
              class="thumb"
              part="thumb"
              style="left: ${percent}%"
            >
              ${showTooltip ? html`
                <mz-tooltip
                  placement=${this.tooltip}
                  ?open=${showTooltip}
                  distance=${this.tooltipOffset || 10}
                >
                  <div class="tooltip-content" part="tooltip">
                    ${this.formatTooltipValue(this.value)}
                  </div>
                </mz-tooltip>
              ` : ''}
            </div>
          </div>

          <slot name="suffix" class="suffix"></slot>
        </div>

        ${this.helpText ? html`
          <div class="help-text" part="help-text">
            <slot name="help-text">${this.helpText}</slot>
          </div>
        ` : ''}
      </div>
    `
  }

  /** Sets focus on the range */
  focus() {
    this.input?.focus()
  }

  /** Removes focus from the range */
  blur() {
    this.input?.blur()
  }

  /** Increments the value by the step amount */
  stepUp() {
    const newValue = Math.min(this.max, this.value + this.step)
    if (newValue !== this.value) {
      this.value = newValue
      this.dispatchEvent(new CustomEvent('mz-input', {
        detail: { value: newValue, oldValue: this.value }
      }))
      this.dispatchEvent(new CustomEvent('mz-change', {
        detail: { value: newValue, oldValue: this.value }
      }))
    }
  }

  /** Decrements the value by the step amount */
  stepDown() {
    const newValue = Math.max(this.min, this.value - this.step)
    if (newValue !== this.value) {
      this.value = newValue
      this.dispatchEvent(new CustomEvent('mz-input', {
        detail: { value: newValue, oldValue: this.value }
      }))
      this.dispatchEvent(new CustomEvent('mz-change', {
        detail: { value: newValue, oldValue: this.value }
      }))
    }
  }

  /** Checks for validity but does not show a validation message */
  checkValidity() {
    return this.input?.checkValidity() ?? true
  }

  /** Checks for validity and shows the browser's validation message if invalid */
  reportValidity() {
    return this.input?.reportValidity() ?? true
  }

  /** Sets a custom validation message */
  setCustomValidity(message: string) {
    this.input?.setCustomValidity(message)
  }
}