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
        --card-background: rgba(255, 255, 255, 0.95);
        --card-border: 2px solid var(--mz-color-neutral-200);
        --card-border-radius: var(--mz-radius-3xl);
        --card-padding: var(--mz-space-10); /* 2.5rem */
        --card-shadow: var(--mz-shadow-md);
        --card-transition: all var(--mz-transition-spring);
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
        backdrop-filter: blur(20px) saturate(150%);
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
        --card-border: 2px solid var(--mz-color-primary-200);
        --card-shadow: none;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(6, 182, 212, 0.02));
      }

      .card--elevated {
        --card-border: none;
        --card-shadow: var(--mz-shadow-xl), 0 20px 40px -10px rgba(6, 182, 212, 0.1);
        background: linear-gradient(135deg, var(--mz-color-neutral-0), rgba(255, 255, 255, 0.95));
      }

      .card--interactive {
        cursor: pointer;
        transition: all var(--mz-transition-normal);
      }

      .card--interactive:hover {
        transform: translateY(calc(-1 * var(--mz-space-1))) scale(1.02);
        box-shadow: var(--mz-shadow-2xl), 0 20px 60px -15px rgba(6, 182, 212, 0.25);
        border-color: var(--mz-color-primary-400);
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
        transform: translateY(calc(-1 * var(--mz-space-px)));
      }

      /* Hover glow effect - removed duplicate, already defined above */

      /* Header slot */
      ::slotted([slot='header']) {
        margin: calc(-1 * var(--card-padding)) calc(-1 * var(--card-padding)) var(--mz-space-6) calc(-1 * var(--card-padding));
        padding: var(--mz-space-6) var(--card-padding);
        border-bottom: 2px solid var(--mz-color-neutral-100);
        font-weight: var(--mz-font-bold);
        font-size: var(--mz-text-xl);
        letter-spacing: var(--mz-tracking-tight);
        background: linear-gradient(to bottom, rgba(6, 182, 212, 0.03), transparent);
      }

      /* Footer slot */
      ::slotted([slot='footer']) {
        margin: var(--mz-space-6) calc(-1 * var(--card-padding)) calc(-1 * var(--card-padding)) calc(-1 * var(--card-padding));
        padding: var(--mz-space-6) var(--card-padding);
        border-top: 2px solid var(--mz-color-neutral-100);
        background: linear-gradient(to top, rgba(6, 182, 212, 0.02), transparent);
      }

      /* Image slot */
      ::slotted([slot='image']) {
        margin: calc(-1 * var(--card-padding)) calc(-1 * var(--card-padding)) var(--mz-space-4) calc(-1 * var(--card-padding));
        width: calc(100% + 2 * var(--card-padding));
        border-radius: var(--card-border-radius) var(--card-border-radius) 0 0;
      }

      /* Actions slot */
      ::slotted([slot='actions']) {
        margin-top: var(--mz-space-6);
        display: flex;
        gap: var(--mz-space-3);
        align-items: center;
        flex-wrap: wrap;
      }

      /* Avatar slot */
      .card-avatar {
        position: absolute;
        top: var(--mz-space-6);
        right: var(--mz-space-6);
        z-index: 10;
      }

      ::slotted([slot='avatar']) {
        width: var(--mz-space-14); /* 3.5rem */
        height: var(--mz-space-14); /* 3.5rem */
        border-radius: var(--mz-radius-full);
        border: 3px solid var(--mz-color-neutral-0);
        box-shadow: var(--mz-shadow-lg);
      }

      /* Icon slot */
      .card-icon {
        margin-bottom: var(--mz-space-4);
        width: var(--mz-space-12); /* 3rem */
        height: var(--mz-space-12); /* 3rem */
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, var(--mz-color-primary-100), var(--mz-color-primary-200));
        border-radius: var(--mz-radius-xl);
        color: var(--mz-color-primary-600);
        font-size: var(--mz-text-2xl);
        font-weight: var(--mz-font-bold);
      }

      ::slotted([slot='icon']) {
        width: var(--mz-space-6); /* 1.5rem */
        height: var(--mz-space-6); /* 1.5rem */
      }

      /* Badge slot */
      .card-badge {
        position: absolute;
        top: var(--mz-space-4);
        left: var(--mz-space-4);
        z-index: 10;
      }

      /* Meta slot for additional info */
      ::slotted([slot='meta']) {
        display: flex;
        gap: var(--mz-space-4);
        margin-top: var(--mz-space-3);
        padding-top: var(--mz-space-3);
        border-top: 1px solid var(--mz-color-neutral-100);
        font-size: var(--mz-text-sm);
        color: var(--mz-color-neutral-500);
      }

      /* Tags slot */
      ::slotted([slot='tags']) {
        display: flex;
        flex-wrap: wrap;
        gap: var(--mz-space-2);
        margin-top: var(--mz-space-4);
      }

      /* Content spacing */
      .card-content {
        display: block;
        position: relative;
      }

      /* Content with avatar padding adjustment */
      :host([has-avatar]) .card-content {
        padding-right: var(--mz-space-18); /* 4.5rem */
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
        left: calc(-1 * var(--mz-space-50)); /* -200px */
        width: var(--mz-space-50); /* 200px */
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
        --card-padding: var(--mz-space-6);
        --card-border-radius: var(--mz-radius-2xl);
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
  @property({ type: Boolean, reflect: true, attribute: 'has-avatar' }) hasAvatar = false;

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
