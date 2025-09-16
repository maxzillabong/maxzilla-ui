import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

/**
 * @summary A skeleton component for showing loading placeholders
 * @documentation https://maxzillaui.dev/components/skeleton
 * @status stable
 * @since 1.0
 *
 * @csspart base - The component's base wrapper
 * @csspart indicator - The skeleton indicator
 *
 * @cssproperty --border-radius - Border radius of the skeleton
 * @cssproperty --color - Color of the skeleton
 * @cssproperty --sheen-color - Color of the sheen effect
 */
@customElement('mz-skeleton')
export class MzSkeleton extends LitElement {
  static styles = css`
    :host {
      display: block;
      --border-radius: var(--mz-border-radius-medium);
      --color: var(--mz-color-neutral-200);
      --sheen-color: var(--mz-color-neutral-300);
    }

    .skeleton {
      display: flex;
      width: 100%;
      height: 1rem;
      position: relative;
    }

    .skeleton__indicator {
      flex: 1;
      background: var(--color);
      border-radius: var(--border-radius);
      position: relative;
      overflow: hidden;
    }

    .skeleton__indicator::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        var(--sheen-color),
        transparent
      );
      animation: shimmer 2s infinite;
    }

    .skeleton--pulse .skeleton__indicator::after {
      animation: pulse 2s infinite;
    }

    /* Effect variations */
    @keyframes shimmer {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.4;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .skeleton__indicator::after {
        animation: none;
      }
    }
  `

  /** The animation effect */
  @property() effect: 'sheen' | 'pulse' = 'sheen'

  render() {
    const classes = {
      'skeleton': true,
      [`skeleton--${this.effect}`]: this.effect !== 'sheen'
    }

    return html`
      <div class=${classMap(classes)} part="base">
        <div class="skeleton__indicator" part="indicator"></div>
      </div>
    `
  }
}