import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

/**
 * @summary A spinner component for indicating loading states
 * @documentation https://maxzillaui.dev/components/spinner
 * @status stable
 * @since 1.0
 *
 * @slot - Optional content to show alongside the spinner
 *
 * @csspart base - The component's base wrapper
 * @csspart spinner - The spinner element
 * @csspart label - The spinner's label
 *
 * @cssproperty --size - Size of the spinner
 * @cssproperty --track-width - Width of the spinner track
 * @cssproperty --track-color - Color of the spinner track
 * @cssproperty --indicator-color - Color of the spinner indicator
 * @cssproperty --speed - Animation speed (duration of one rotation)
 */
@customElement('mz-spinner')
export class MzSpinner extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      --size: 1rem;
      --track-width: 2px;
      --track-color: var(--mz-color-neutral-200);
      --indicator-color: var(--mz-color-primary);
      --speed: 2s;
    }

    .spinner {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    .spinner__indicator {
      width: var(--size);
      height: var(--size);
      border: var(--track-width) solid var(--track-color);
      border-top-color: var(--indicator-color);
      border-radius: 50%;
      animation: spin var(--speed) linear infinite;
      flex-shrink: 0;
    }

    .spinner--small {
      --size: 0.875rem;
    }

    .spinner--medium {
      --size: 1rem;
    }

    .spinner--large {
      --size: 1.25rem;
    }

    .spinner--xlarge {
      --size: 1.5rem;
    }

    .spinner__label {
      color: var(--mz-color-text);
      font-size: var(--mz-font-size-small);
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .spinner__indicator {
        animation: none;
        border-top-color: var(--track-color);
        opacity: 0.5;
      }
    }
  `

  /** The size of the spinner */
  @property() size: 'small' | 'medium' | 'large' | 'xlarge' = 'medium'

  /** Text to show alongside the spinner */
  @property() label = ''

  render() {
    const classes = {
      'spinner': true,
      [`spinner--${this.size}`]: true
    }

    return html`
      <div class=${classMap(classes)} part="base">
        <div class="spinner__indicator" part="spinner" role="progressbar" aria-label="Loading"></div>
        ${this.label ? html`<div class="spinner__label" part="label">${this.label}</div>` : ''}
        <slot></slot>
      </div>
    `
  }
}