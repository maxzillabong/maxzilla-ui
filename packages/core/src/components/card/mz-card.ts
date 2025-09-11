import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { baseStyles } from '../../styles/base.js';
import { animationStyles } from '../../styles/animations.js';

type CardElevation = 'none' | 'sm' | 'md' | 'lg' | 'xl';
type CardVariant = 'default' | 'outlined' | 'elevated' | 'interactive';

@customElement('mz-card')
export class MzCard extends LitElement {
  static styles = [
    baseStyles,
    animationStyles,
    css`
      :host {
        display: block;
        position: relative;
        --card-background: var(--mz-color-neutral-0);
        --card-border: 1px solid var(--mz-color-neutral-200);
        --card-border-radius: var(--mz-radius-lg);
        --card-padding: var(--mz-space-6);
        --card-shadow: var(--mz-shadow-sm);
        --card-transition: all var(--mz-transition-normal);
      }

      .card {
        width: 100%;
        background: var(--card-background);
        border: var(--card-border);
        border-radius: var(--card-border-radius);
        padding: var(--card-padding);
        box-shadow: var(--card-shadow);
        transition: var(--card-transition);
        position: relative;
        overflow: hidden;
      }

      /* Elevation variants */
      :host([elevation='none']) {
        --card-shadow: none;
      }

      :host([elevation='sm']) {
        --card-shadow: var(--mz-shadow-sm);
      }

      :host([elevation='md']) {
        --card-shadow: var(--mz-shadow-md);
      }

      :host([elevation='lg']) {
        --card-shadow: var(--mz-shadow-lg);
      }

      :host([elevation='xl']) {
        --card-shadow: var(--mz-shadow-xl);
      }

      /* Card variants */
      .card--outlined {
        --card-border: 1px solid var(--mz-color-neutral-300);
        --card-shadow: none;
      }

      .card--elevated {
        --card-border: none;
        --card-shadow: var(--mz-shadow-lg);
      }

      .card--interactive {
        cursor: pointer;
        transition: all var(--mz-transition-normal);
      }

      .card--interactive:hover {
        transform: translateY(-2px);
        box-shadow: var(--mz-shadow-xl);
        border-color: var(--mz-color-primary-300);
      }

      .card--interactive::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          135deg,
          rgba(6, 182, 212, 0.1) 0%,
          transparent 50%,
          rgba(34, 197, 94, 0.1) 100%
        );
        opacity: 0;
        transition: opacity var(--mz-transition-normal);
        pointer-events: none;
      }

      .card--interactive:hover::before {
        opacity: 1;
      }

      .card--interactive:active {
        transform: translateY(-1px);
      }

      /* Hover glow effect */
      .card--interactive:hover {
        box-shadow: var(--mz-shadow-xl), 0 0 30px rgba(6, 182, 212, 0.15);
      }

      /* Header slot */
      ::slotted([slot='header']) {
        margin: calc(-1 * var(--card-padding)) calc(-1 * var(--card-padding)) var(--mz-space-4) calc(-1 * var(--card-padding));
        padding: var(--mz-space-4) var(--card-padding);
        border-bottom: 1px solid var(--mz-color-neutral-200);
        font-weight: 600;
        font-size: var(--mz-text-lg);
      }

      /* Footer slot */
      ::slotted([slot='footer']) {
        margin: var(--mz-space-4) calc(-1 * var(--card-padding)) calc(-1 * var(--card-padding)) calc(-1 * var(--card-padding));
        padding: var(--mz-space-4) var(--card-padding);
        border-top: 1px solid var(--mz-color-neutral-200);
        background: var(--mz-color-neutral-50);
      }

      /* Image slot */
      ::slotted([slot='image']) {
        margin: calc(-1 * var(--card-padding)) calc(-1 * var(--card-padding)) var(--mz-space-4) calc(-1 * var(--card-padding));
        width: calc(100% + 2 * var(--card-padding));
        border-radius: var(--card-border-radius) var(--card-border-radius) 0 0;
      }

      /* Actions slot */
      ::slotted([slot='actions']) {
        margin-top: var(--mz-space-4);
        display: flex;
        gap: var(--mz-space-2);
        align-items: center;
      }

      /* Content spacing */
      .card-content {
        display: block;
      }

      .card-content::slotted(*:first-child) {
        margin-top: 0;
      }

      .card-content::slotted(*:last-child) {
        margin-bottom: 0;
      }

      /* Loading state */
      :host([loading]) .card {
        position: relative;
        overflow: hidden;
      }

      :host([loading]) .card::before {
        content: '';
        position: absolute;
        top: 0;
        left: -200px;
        width: 200px;
        height: 100%;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.4),
          transparent
        );
        animation: mz-shimmer 2s infinite linear;
      }

      /* Disabled state */
      :host([disabled]) {
        opacity: 0.5;
        pointer-events: none;
      }

      /* Compact padding */
      :host([compact]) {
        --card-padding: var(--mz-space-4);
      }

      /* Full height */
      :host([full-height]) {
        height: 100%;
      }

      :host([full-height]) .card {
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      :host([full-height]) .card-content {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
    `,
  ];

  @property({ type: String, reflect: true }) elevation: CardElevation = 'sm';
  @property({ type: String, reflect: true }) variant: CardVariant = 'default';
  @property({ type: Boolean, reflect: true }) interactive = false;
  @property({ type: Boolean, reflect: true }) loading = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) compact = false;
  @property({ type: Boolean, reflect: true, attribute: 'full-height' }) fullHeight = false;

  private handleClick = (event: MouseEvent) => {
    if (this.disabled || this.loading || !this.interactive) {
      return;
    }

    this.dispatchEvent(
      new CustomEvent('mz-card-click', {
        detail: { originalEvent: event },
        bubbles: true,
        composed: true,
      })
    );
  };

  render() {
    const classes = {
      card: true,
      [`card--${this.variant}`]: this.variant !== 'default',
      'card--interactive': this.interactive,
    };

    return html`
      <div
        class=${classMap(classes)}
        @click=${this.handleClick}
      >
        <slot name="image"></slot>
        <slot name="header"></slot>
        <div class="card-content">
          <slot></slot>
        </div>
        <slot name="actions"></slot>
        <slot name="footer"></slot>
      </div>
    `;
  }
}