import { LitElement, html, css } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import '../popover/mz-popover.js'

/**
 * @summary A color picker component for selecting colors in various formats
 * @documentation https://maxzillaui.dev/components/color-picker
 * @status stable
 * @since 1.0
 *
 * @dependency mz-popover
 *
 * @event mz-change - Emitted when the color value changes
 * @event mz-input - Emitted when the color value is being changed (live updates)
 * @event mz-focus - Emitted when the color picker receives focus
 * @event mz-blur - Emitted when the color picker loses focus
 * @event mz-invalid - Emitted when the color picker is invalid
 *
 * @slot label - The color picker's label
 * @slot help-text - Text that describes how to use the color picker
 *
 * @csspart base - The component's base wrapper
 * @csspart trigger - The color picker trigger/preview
 * @csspart panel - The color picker panel
 * @csspart grid - The color selection grid
 * @csspart hue-slider - The hue slider
 * @csspart opacity-slider - The opacity slider (when enabled)
 * @csspart swatches - The predefined color swatches
 * @csspart input - The color value input field
 *
 * @cssproperty --grid-width - Width of the color selection grid
 * @cssproperty --grid-height - Height of the color selection grid
 * @cssproperty --slider-height - Height of the sliders
 * @cssproperty --trigger-size - Size of the color trigger
 */
@customElement('mz-color-picker')
export class MzColorPicker extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      --grid-width: 280px;
      --grid-height: 200px;
      --slider-height: 20px;
      --trigger-size: 2.5rem;
    }

    .color-picker {
      position: relative;
    }

    .color-picker--small {
      --trigger-size: 2rem;
    }

    .color-picker--large {
      --trigger-size: 3rem;
    }

    .trigger {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: var(--trigger-size);
      height: var(--trigger-size);
      border: 2px solid var(--mz-color-border);
      border-radius: var(--mz-border-radius-medium);
      background: var(--color-value, #ffffff);
      cursor: pointer;
      transition: all 0.2s ease;
      position: relative;
      overflow: hidden;
    }

    .trigger:hover {
      border-color: var(--mz-color-primary);
      transform: translateY(-1px);
      box-shadow: var(--mz-shadow-medium);
    }

    .trigger:focus {
      outline: none;
      border-color: var(--mz-color-primary);
      box-shadow: 0 0 0 3px var(--mz-color-primary-alpha-20);
    }

    .trigger:before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(45deg, #ddd 25%, transparent 25%),
                  linear-gradient(-45deg, #ddd 25%, transparent 25%),
                  linear-gradient(45deg, transparent 75%, #ddd 75%),
                  linear-gradient(-45deg, transparent 75%, #ddd 75%);
      background-size: 8px 8px;
      background-position: 0 0, 0 4px, 4px -4px, -4px 0px;
    }

    .color-display {
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    .panel {
      padding: 1rem;
      min-width: 320px;
    }

    .grid-container {
      position: relative;
      width: var(--grid-width);
      height: var(--grid-height);
      margin-bottom: 1rem;
      border-radius: var(--mz-border-radius-medium);
      overflow: hidden;
      cursor: crosshair;
      background: linear-gradient(to right, white, transparent),
                  linear-gradient(to top, black, transparent),
                  var(--hue-background, hsl(0, 100%, 50%));
    }

    .grid-handle {
      position: absolute;
      width: 12px;
      height: 12px;
      border: 2px solid white;
      border-radius: 50%;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3);
      pointer-events: none;
      transform: translate(-50%, -50%);
    }

    .slider {
      position: relative;
      width: 100%;
      height: var(--slider-height);
      margin-bottom: 0.5rem;
      border-radius: var(--mz-border-radius-small);
      cursor: pointer;
      overflow: hidden;
    }

    .hue-slider {
      background: linear-gradient(to right,
        hsl(0, 100%, 50%),
        hsl(60, 100%, 50%),
        hsl(120, 100%, 50%),
        hsl(180, 100%, 50%),
        hsl(240, 100%, 50%),
        hsl(300, 100%, 50%),
        hsl(360, 100%, 50%)
      );
    }

    .opacity-slider {
      background: linear-gradient(45deg, #ddd 25%, transparent 25%),
                  linear-gradient(-45deg, #ddd 25%, transparent 25%),
                  linear-gradient(45deg, transparent 75%, #ddd 75%),
                  linear-gradient(-45deg, transparent 75%, #ddd 75%);
      background-size: 8px 8px;
      background-position: 0 0, 0 4px, 4px -4px, -4px 0px;
    }

    .opacity-slider:after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(to right, transparent, var(--current-color, #000));
    }

    .slider-handle {
      position: absolute;
      top: 50%;
      width: 16px;
      height: calc(100% + 4px);
      background: white;
      border: 2px solid var(--mz-color-border);
      border-radius: var(--mz-border-radius-small);
      box-shadow: var(--mz-shadow-small);
      transform: translate(-50%, -50%);
      pointer-events: none;
    }

    .input-group {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }

    .color-input {
      flex: 1;
      padding: 0.5rem;
      border: 1px solid var(--mz-color-border);
      border-radius: var(--mz-border-radius-small);
      font-family: var(--mz-font-mono);
      font-size: var(--mz-font-size-small);
    }

    .format-select {
      padding: 0.5rem;
      border: 1px solid var(--mz-color-border);
      border-radius: var(--mz-border-radius-small);
      background: var(--mz-color-surface);
      min-width: 80px;
    }

    .swatches {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(24px, 1fr));
      gap: 0.25rem;
      margin-top: 1rem;
    }

    .swatch {
      width: 24px;
      height: 24px;
      border: 1px solid var(--mz-color-border);
      border-radius: var(--mz-border-radius-small);
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }

    .swatch:before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(45deg, #ddd 25%, transparent 25%),
                  linear-gradient(-45deg, #ddd 25%, transparent 25%),
                  linear-gradient(45deg, transparent 75%, #ddd 75%),
                  linear-gradient(-45deg, transparent 75%, #ddd 75%);
      background-size: 4px 4px;
      background-position: 0 0, 0 2px, 2px -2px, -2px 0px;
    }

    .swatch-color {
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    .swatch:hover {
      border-color: var(--mz-color-primary);
      transform: scale(1.1);
    }

    .label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: var(--mz-font-weight-semibold);
      color: var(--mz-color-text);
    }

    .help-text {
      display: block;
      margin-top: 0.5rem;
      font-size: var(--mz-font-size-small);
      color: var(--mz-color-text-secondary);
    }

    .color-picker--disabled .trigger {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .color-picker--disabled .trigger:hover {
      border-color: var(--mz-color-border);
      transform: none;
      box-shadow: none;
    }

    @media (prefers-reduced-motion: reduce) {
      .trigger {
        transition: none;
      }
    }
  `

  /** The color picker's value in the specified format */
  @property() value = '#ffffff'

  /** The color format: 'hex', 'rgb', 'hsl', or 'hsv' */
  @property() format: 'hex' | 'rgb' | 'hsl' | 'hsv' = 'hex'

  /** Whether to show the opacity slider */
  @property({ type: Boolean }) opacity = false

  /** Whether to render the color picker inline (always visible) */
  @property({ type: Boolean }) inline = false

  /** The size of the color picker trigger */
  @property() size: 'small' | 'medium' | 'large' = 'medium'

  /** A list of predefined colors */
  @property() swatches = ''

  /** The color picker's label */
  @property() label = ''

  /** The color picker's help text */
  @property({ attribute: 'help-text' }) helpText = ''

  /** Whether the color picker is disabled */
  @property({ type: Boolean, reflect: true }) disabled = false

  /** Whether the color picker is required */
  @property({ type: Boolean, reflect: true }) required = false

  /** The color picker's name (for form submission) */
  @property() name = ''

  @state() private currentColor = '#ffffff'
  @state() private hue = 0
  @state() private saturation = 100
  @state() private lightness = 50
  @state() private alpha = 1
  @state() private isOpen = false

  private parseColor(color: string) {
    // Simple color parsing - in a real implementation, you'd use a color parsing library
    if (color.startsWith('#')) {
      const hex = color.slice(1)
      const r = parseInt(hex.slice(0, 2), 16)
      const g = parseInt(hex.slice(2, 4), 16)
      const b = parseInt(hex.slice(4, 6), 16)

      // Convert RGB to HSL
      const rNorm = r / 255
      const gNorm = g / 255
      const bNorm = b / 255

      const max = Math.max(rNorm, gNorm, bNorm)
      const min = Math.min(rNorm, gNorm, bNorm)

      let h = 0
      let s = 0
      const l = (max + min) / 2

      if (max !== min) {
        const delta = max - min
        s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min)

        switch (max) {
          case rNorm: h = (gNorm - bNorm) / delta + (gNorm < bNorm ? 6 : 0); break
          case gNorm: h = (bNorm - rNorm) / delta + 2; break
          case bNorm: h = (rNorm - gNorm) / delta + 4; break
        }
        h /= 6
      }

      this.hue = h * 360
      this.saturation = s * 100
      this.lightness = l * 100
    }
  }

  private formatColor(): string {
    const h = this.hue
    const s = this.saturation / 100
    const l = this.lightness / 100
    const a = this.alpha

    switch (this.format) {
      case 'hsl':
        return this.opacity
          ? `hsla(${Math.round(h)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%, ${a})`
          : `hsl(${Math.round(h)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`

      case 'rgb': {
        // Convert HSL to RGB
        const c = (1 - Math.abs(2 * l - 1)) * s
        const x = c * (1 - Math.abs((h / 60) % 2 - 1))
        const m = l - c / 2

        let r = 0, g = 0, b = 0
        if (h >= 0 && h < 60) { r = c; g = x; b = 0 }
        else if (h >= 60 && h < 120) { r = x; g = c; b = 0 }
        else if (h >= 120 && h < 180) { r = 0; g = c; b = x }
        else if (h >= 180 && h < 240) { r = 0; g = x; b = c }
        else if (h >= 240 && h < 300) { r = x; g = 0; b = c }
        else if (h >= 300 && h < 360) { r = c; g = 0; b = x }

        const rFinal = Math.round((r + m) * 255)
        const gFinal = Math.round((g + m) * 255)
        const bFinal = Math.round((b + m) * 255)

        return this.opacity
          ? `rgba(${rFinal}, ${gFinal}, ${bFinal}, ${a})`
          : `rgb(${rFinal}, ${gFinal}, ${bFinal})`
      }

      case 'hex':
      default: {
        // Convert HSL to RGB first, then to hex
        const c = (1 - Math.abs(2 * l - 1)) * s
        const x = c * (1 - Math.abs((h / 60) % 2 - 1))
        const m = l - c / 2

        let r = 0, g = 0, b = 0
        if (h >= 0 && h < 60) { r = c; g = x; b = 0 }
        else if (h >= 60 && h < 120) { r = x; g = c; b = 0 }
        else if (h >= 120 && h < 180) { r = 0; g = c; b = x }
        else if (h >= 180 && h < 240) { r = 0; g = x; b = c }
        else if (h >= 240 && h < 300) { r = x; g = 0; b = c }
        else if (h >= 300 && h < 360) { r = c; g = 0; b = x }

        const rHex = Math.round((r + m) * 255).toString(16).padStart(2, '0')
        const gHex = Math.round((g + m) * 255).toString(16).padStart(2, '0')
        const bHex = Math.round((b + m) * 255).toString(16).padStart(2, '0')

        return `#${rHex}${gHex}${bHex}${this.opacity ? Math.round(a * 255).toString(16).padStart(2, '0') : ''}`
      }
    }
  }

  private handleTriggerClick = () => {
    if (this.disabled) return
    this.isOpen = !this.isOpen
  }

  private handleGridClick(event: MouseEvent) {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = 1 - (event.clientY - rect.top) / rect.height

    this.saturation = Math.max(0, Math.min(100, x * 100))
    this.lightness = Math.max(0, Math.min(100, y * 100))

    this.updateValue()
  }

  private handleHueSliderClick(event: MouseEvent) {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width

    this.hue = Math.max(0, Math.min(360, x * 360))
    this.updateValue()
  }

  private handleOpacitySliderClick(event: MouseEvent) {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width

    this.alpha = Math.max(0, Math.min(1, x))
    this.updateValue()
  }

  private updateValue() {
    const newValue = this.formatColor()
    const oldValue = this.value
    this.value = newValue
    this.currentColor = newValue

    this.dispatchEvent(new CustomEvent('mz-input', {
      detail: { value: newValue, oldValue }
    }))

    this.dispatchEvent(new CustomEvent('mz-change', {
      detail: { value: newValue, oldValue }
    }))
  }

  private handleSwatchClick(color: string) {
    this.parseColor(color)
    this.updateValue()
  }

  private getSwatchColors(): string[] {
    if (!this.swatches) return []
    return this.swatches.split(';').filter(color => color.trim())
  }

  firstUpdated() {
    this.parseColor(this.value)
    this.currentColor = this.value
  }

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('value')) {
      this.parseColor(this.value)
      this.currentColor = this.value
    }
  }

  render() {
    const classes = {
      'color-picker': true,
      [`color-picker--${this.size}`]: true,
      'color-picker--disabled': this.disabled
    }

    const hueBackground = `hsl(${this.hue}, 100%, 50%)`
    const currentColorForOpacity = `hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`

    const trigger = html`
      <button
        slot="trigger"
        type="button"
        class="trigger"
        style="--color-value: ${this.currentColor}"
        @click=${this.handleTriggerClick}
        ?disabled=${this.disabled}
        aria-label="Choose color"
      >
        <div class="color-display" style="background-color: ${this.currentColor}"></div>
      </button>
    `

    const panel = html`
      <div class="panel" part="panel">
        <div
          class="grid-container"
          part="grid"
          style="--hue-background: ${hueBackground}"
          @click=${this.handleGridClick}
        >
          <div
            class="grid-handle"
            style="left: ${this.saturation}%; bottom: ${this.lightness}%"
          ></div>
        </div>

        <div class="slider hue-slider" part="hue-slider" @click=${this.handleHueSliderClick}>
          <div class="slider-handle" style="left: ${(this.hue / 360) * 100}%"></div>
        </div>

        ${this.opacity ? html`
          <div
            class="slider opacity-slider"
            part="opacity-slider"
            style="--current-color: ${currentColorForOpacity}"
            @click=${this.handleOpacitySliderClick}
          >
            <div class="slider-handle" style="left: ${this.alpha * 100}%"></div>
          </div>
        ` : ''}

        <div class="input-group">
          <input
            type="text"
            class="color-input"
            part="input"
            .value=${this.value}
            @input=${(e: Event) => {
              const target = e.target as HTMLInputElement
              this.value = target.value
              this.parseColor(this.value)
              this.updateValue()
            }}
          />
          <select
            class="format-select"
            .value=${this.format}
            @change=${(e: Event) => {
              const target = e.target as HTMLSelectElement
              this.format = target.value as any
              this.updateValue()
            }}
          >
            <option value="hex">HEX</option>
            <option value="rgb">RGB</option>
            <option value="hsl">HSL</option>
            <option value="hsv">HSV</option>
          </select>
        </div>

        ${this.getSwatchColors().length > 0 ? html`
          <div class="swatches" part="swatches">
            ${this.getSwatchColors().map(color => html`
              <button
                type="button"
                class="swatch"
                @click=${() => this.handleSwatchClick(color)}
                title=${color}
              >
                <div class="swatch-color" style="background-color: ${color}"></div>
              </button>
            `)}
          </div>
        ` : ''}
      </div>
    `

    return html`
      <div class=${classMap(classes)} part="base">
        ${this.label ? html`<label class="label" part="label"><slot name="label">${this.label}</slot></label>` : ''}

        ${this.inline ? panel : html`
          <mz-popover placement="bottom-start" ?open=${this.isOpen} @mz-hide=${() => this.isOpen = false}>
            ${trigger}
            <div slot="content">${panel}</div>
          </mz-popover>
        `}

        ${this.helpText ? html`<div class="help-text" part="help-text"><slot name="help-text">${this.helpText}</slot></div>` : ''}
      </div>
    `
  }

  /** Sets focus on the color picker */
  focus() {
    const trigger = this.shadowRoot?.querySelector('.trigger') as HTMLElement
    trigger?.focus()
  }

  /** Removes focus from the color picker */
  blur() {
    const trigger = this.shadowRoot?.querySelector('.trigger') as HTMLElement
    trigger?.blur()
  }

  /** Gets the formatted color value */
  getFormattedValue() {
    return this.formatColor()
  }

  /** Checks for validity but does not show a validation message */
  checkValidity() {
    return true // Implement validation logic
  }

  /** Checks for validity and shows the browser's validation message if invalid */
  reportValidity() {
    return this.checkValidity()
  }
}