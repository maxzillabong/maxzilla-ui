import { LitElement, html, css } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { repeat } from 'lit/directives/repeat.js'

/**
 * @summary A rating component for displaying and collecting star ratings
 * @documentation https://maxzillaui.dev/components/rating
 * @status stable
 * @since 1.0
 *
 * @event mz-change - Emitted when the rating value changes
 * @event mz-hover - Emitted when a rating star is hovered
 *
 * @slot - The icon to use as the rating symbol (defaults to star)
 *
 * @csspart base - The component's base wrapper
 * @csspart symbol - Each rating symbol
 * @csspart symbol--active - Active rating symbols
 * @csspart symbol--inactive - Inactive rating symbols
 *
 * @cssproperty --symbol-size - Size of each rating symbol
 * @cssproperty --symbol-spacing - Space between rating symbols
 * @cssproperty --symbol-color - Color of inactive symbols
 * @cssproperty --symbol-color-active - Color of active symbols
 */
@customElement('mz-rating')
export class MzRating extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      --symbol-size: 1.25rem;
      --symbol-spacing: 0.125rem;
      --symbol-color: var(--mz-color-neutral-300);
      --symbol-color-active: var(--mz-color-warning);
    }

    .rating {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      gap: var(--symbol-spacing);
    }

    .rating--readonly {
      cursor: default;
    }

    .rating--disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .symbol {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: var(--symbol-size);
      height: var(--symbol-size);
      color: var(--symbol-color);
      transition: all 0.2s ease;
      position: relative;
      cursor: inherit;
      user-select: none;
    }

    .symbol svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
    }

    .symbol--active {
      color: var(--symbol-color-active);
    }

    .symbol--hoverable:hover {
      color: var(--symbol-color-active);
      transform: scale(1.1);
    }

    .rating:not(.rating--disabled):not(.rating--readonly) .symbol {
      cursor: pointer;
    }

    .precision-half .symbol {
      position: relative;
      overflow: hidden;
    }

    .precision-half .symbol::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background: var(--symbol-color-active);
      z-index: 1;
      opacity: 0;
      transition: opacity 0.2s ease;
    }

    .precision-half .symbol--half::before {
      opacity: 1;
    }

    .label {
      margin-right: 0.5rem;
      font-weight: var(--mz-font-weight-medium);
      color: var(--mz-color-text);
    }

    .value-display {
      margin-left: 0.5rem;
      font-size: var(--mz-font-size-small);
      color: var(--mz-color-text-secondary);
    }

    @media (prefers-reduced-motion: reduce) {
      .symbol {
        transition: none;
      }
    }
  `

  /** The current rating value */
  @property({ type: Number }) value = 0

  /** The maximum rating value */
  @property({ type: Number }) max = 5

  /** The precision of the rating (1 for whole numbers, 0.5 for half ratings, 0.1 for decimal) */
  @property({ type: Number }) precision = 1

  /** Whether the rating is readonly */
  @property({ type: Boolean }) readonly = false

  /** Whether the rating is disabled */
  @property({ type: Boolean, reflect: true }) disabled = false

  /** Whether to show the numeric value */
  @property({ type: Boolean, attribute: 'show-value' }) showValue = false

  /** The rating's label */
  @property() label = ''

  /** The rating's name (for form submission) */
  @property() name = ''

  /** Custom symbol to use instead of star */
  @property() symbol = ''

  @state() private hoverValue = 0
  @state() private isHovering = false

  private getSymbols() {
    const symbols = []
    for (let i = 1; i <= this.max; i++) {
      symbols.push(i)
    }
    return symbols
  }

  private getSymbolState(index: number) {
    const currentValue = this.isHovering ? this.hoverValue : this.value
    const isActive = currentValue >= index
    const isHalf = this.precision === 0.5 && currentValue >= index - 0.5 && currentValue < index

    return {
      active: isActive,
      half: isHalf,
      hoverable: !this.readonly && !this.disabled
    }
  }

  private handleSymbolClick(index: number) {
    if (this.readonly || this.disabled) return

    const newValue = this.precision === 0.5 && this.value === index ? index - 0.5 : index
    const roundedValue = Math.round(newValue / this.precision) * this.precision
    const oldValue = this.value

    this.value = Math.max(0, Math.min(this.max, roundedValue))

    this.dispatchEvent(new CustomEvent('mz-change', {
      detail: { value: this.value, oldValue },
      bubbles: true,
      composed: true
    }))
  }

  private handleSymbolHover(index: number) {
    if (this.readonly || this.disabled) return

    this.isHovering = true
    this.hoverValue = index

    this.dispatchEvent(new CustomEvent('mz-hover', {
      detail: { value: index },
      bubbles: true,
      composed: true
    }))
  }

  private handleMouseLeave() {
    this.isHovering = false
    this.hoverValue = 0
  }

  private handleKeyDown(event: KeyboardEvent, index: number) {
    if (this.readonly || this.disabled) return

    let newValue = this.value

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowUp':
        event.preventDefault()
        newValue = Math.min(this.max, this.value + this.precision)
        break
      case 'ArrowLeft':
      case 'ArrowDown':
        event.preventDefault()
        newValue = Math.max(0, this.value - this.precision)
        break
      case 'Home':
        event.preventDefault()
        newValue = 0
        break
      case 'End':
        event.preventDefault()
        newValue = this.max
        break
      case 'Enter':
      case ' ':
        event.preventDefault()
        this.handleSymbolClick(index)
        return
    }

    if (newValue !== this.value) {
      const oldValue = this.value
      this.value = newValue

      this.dispatchEvent(new CustomEvent('mz-change', {
        detail: { value: this.value, oldValue },
        bubbles: true,
        composed: true
      }))
    }
  }

  private renderDefaultSymbol() {
    return html`
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    `
  }

  render() {
    const classes = {
      'rating': true,
      'rating--readonly': this.readonly,
      'rating--disabled': this.disabled,
      'precision-half': this.precision === 0.5
    }

    return html`
      <div class=${classMap(classes)} part="base" @mouseleave=${this.handleMouseLeave}>
        ${this.label ? html`<span class="label">${this.label}</span>` : ''}

        ${repeat(this.getSymbols(), (index) => index, (index) => {
          const state = this.getSymbolState(index)
          const symbolClasses = {
            'symbol': true,
            'symbol--active': state.active,
            'symbol--inactive': !state.active,
            'symbol--half': state.half,
            'symbol--hoverable': state.hoverable
          }

          return html`
            <span
              class=${classMap(symbolClasses)}
              part="symbol ${state.active ? 'symbol--active' : 'symbol--inactive'}"
              tabindex=${this.readonly || this.disabled ? '-1' : '0'}
              role="button"
              aria-label="Rate ${index} out of ${this.max}"
              @click=${() => this.handleSymbolClick(index)}
              @mouseenter=${() => this.handleSymbolHover(index)}
              @keydown=${(e: KeyboardEvent) => this.handleKeyDown(e, index)}
            >
              ${this.symbol ? this.symbol : this.renderDefaultSymbol()}
            </span>
          `
        })}

        ${this.showValue ? html`
          <span class="value-display">${this.value}/${this.max}</span>
        ` : ''}
      </div>
    `
  }

  /** Sets the rating value */
  setValue(value: number) {
    const roundedValue = Math.round(value / this.precision) * this.precision
    const oldValue = this.value
    this.value = Math.max(0, Math.min(this.max, roundedValue))

    this.dispatchEvent(new CustomEvent('mz-change', {
      detail: { value: this.value, oldValue },
      bubbles: true,
      composed: true
    }))
  }

  /** Gets the current rating value */
  getValue() {
    return this.value
  }
}