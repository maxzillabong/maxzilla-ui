import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { baseStyles } from '../../styles/base.js';
import { animationStyles } from '../../styles/animations.js';
import type { Size, Variant } from '../../types.js';

@customElement('mz-button')
export class MzButton extends LitElement {
  static styles = [
    baseStyles,
    animationStyles,
    css`
      :host {
        display: inline-block;
        position: relative;
        --button-height: 2.5rem;
        --button-padding-x: 1rem;
        --button-padding-y: 0.5rem;
        --button-font-size: var(--mz-text-sm);
        --button-border-radius: var(--mz-radius-md);
        --button-transition: all var(--mz-transition-normal);
      }

      .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        height: var(--button-height);
        padding: var(--button-padding-y) var(--button-padding-x);
        font-family: inherit;
        font-size: var(--button-font-size);
        font-weight: 500;
        line-height: 1;
        text-decoration: none;
        border: 1px solid transparent;
        border-radius: var(--button-border-radius);
        cursor: pointer;
        transition: var(--button-transition);
        position: relative;
        overflow: hidden;
        user-select: none;
        white-space: nowrap;
      }

      .button:focus-visible {
        outline: 2px solid var(--mz-color-primary-500);
        outline-offset: 2px;
      }

      .button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          45deg,
          transparent 30%,
          rgba(255, 255, 255, 0.1) 50%,
          transparent 70%
        );
        transform: translateX(-100%);
        transition: transform var(--mz-transition-slow);
      }

      .button:hover::before {
        transform: translateX(100%);
      }

      /* Size variants */
      :host([size='xs']) {
        --button-height: 1.75rem;
        --button-padding-x: 0.5rem;
        --button-padding-y: 0.25rem;
        --button-font-size: var(--mz-text-xs);
      }

      :host([size='sm']) {
        --button-height: 2rem;
        --button-padding-x: 0.75rem;
        --button-padding-y: 0.375rem;
        --button-font-size: var(--mz-text-sm);
      }

      :host([size='lg']) {
        --button-height: 3rem;
        --button-padding-x: 1.5rem;
        --button-padding-y: 0.75rem;
        --button-font-size: var(--mz-text-base);
      }

      :host([size='xl']) {
        --button-height: 3.5rem;
        --button-padding-x: 2rem;
        --button-padding-y: 1rem;
        --button-font-size: var(--mz-text-lg);
      }

      /* Primary variant */
      .button--primary {
        background: var(--mz-color-primary-500);
        color: var(--mz-color-neutral-0);
        border-color: var(--mz-color-primary-500);
        box-shadow: var(--mz-shadow-sm);
      }

      .button--primary:hover {
        background: var(--mz-color-primary-600);
        border-color: var(--mz-color-primary-600);
        transform: translateY(-1px);
        box-shadow: var(--mz-shadow-md), var(--mz-shadow-glow);
      }

      .button--primary:active {
        transform: translateY(0);
        box-shadow: var(--mz-shadow-sm);
      }

      /* Secondary variant */
      .button--secondary {
        background: var(--mz-color-neutral-100);
        color: var(--mz-color-neutral-700);
        border-color: var(--mz-color-neutral-200);
      }

      .button--secondary:hover {
        background: var(--mz-color-neutral-200);
        border-color: var(--mz-color-neutral-300);
        transform: translateY(-1px);
        box-shadow: var(--mz-shadow-sm);
      }

      /* Outline variant */
      .button--outline {
        background: transparent;
        color: var(--mz-color-primary-600);
        border-color: var(--mz-color-primary-300);
      }

      .button--outline:hover {
        background: var(--mz-color-primary-50);
        border-color: var(--mz-color-primary-400);
        transform: translateY(-1px);
      }

      /* Ghost variant */
      .button--ghost {
        background: transparent;
        color: var(--mz-color-neutral-600);
        border-color: transparent;
      }

      .button--ghost:hover {
        background: var(--mz-color-neutral-100);
        color: var(--mz-color-neutral-700);
      }

      /* Destructive variant */
      .button--destructive {
        background: var(--mz-color-error);
        color: var(--mz-color-neutral-0);
        border-color: var(--mz-color-error);
      }

      .button--destructive:hover {
        background: hsl(0, 72%, 51%);
        transform: translateY(-1px);
        box-shadow: var(--mz-shadow-md);
      }

      /* Loading state */
      .button--loading {
        color: transparent;
        pointer-events: none;
      }

      .button--loading::after {
        content: '';
        position: absolute;
        width: 1rem;
        height: 1rem;
        border: 2px solid currentColor;
        border-radius: 50%;
        border-top-color: transparent;
        animation: mz-spin 1s linear infinite;
        color: inherit;
      }

      /* Disabled state */
      .button:disabled,
      .button--disabled {
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
        transform: none !important;
        box-shadow: none !important;
      }

      /* Full width */
      :host([full-width]) {
        width: 100%;
      }

      :host([full-width]) .button {
        width: 100%;
      }

      /* Icon only */
      :host([icon-only]) {
        --button-padding-x: var(--button-padding-y);
      }

      /* Slot styling */
      ::slotted(svg) {
        width: 1em;
        height: 1em;
      }

      ::slotted([slot='start']) {
        margin-right: 0.5rem;
      }

      ::slotted([slot='end']) {
        margin-left: 0.5rem;
      }
    `,
  ];

  @property({ type: String, reflect: true }) variant: Variant = 'primary';
  @property({ type: String, reflect: true }) size: Size = 'md';
  @property({ type: String }) type: 'button' | 'submit' | 'reset' = 'button';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true, attribute: 'full-width' }) fullWidth = false;
  @property({ type: Boolean, reflect: true, attribute: 'icon-only' }) iconOnly = false;
  @property({ type: Boolean }) loading = false;
  @property({ type: String }) href?: string;
  @property({ type: String }) target?: '_blank' | '_self' | '_parent' | '_top';

  @state() private pressed = false;

  private handlePointerDown = () => {
    this.pressed = true;
  };

  private handlePointerUp = () => {
    this.pressed = false;
  };

  private handleClick = (event: MouseEvent) => {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    // Dispatch custom click event
    this.dispatchEvent(
      new CustomEvent('mz-click', {
        detail: { originalEvent: event },
        bubbles: true,
        composed: true,
      })
    );
  };

  render() {
    const classes = {
      button: true,
      [`button--${this.variant}`]: true,
      'button--loading': this.loading,
      'button--disabled': this.disabled,
    };

    const content = html`
      <slot name="start"></slot>
      <slot></slot>
      <slot name="end"></slot>
    `;

    if (this.href && !this.disabled) {
      return html`
        <a
          class=${classMap(classes)}
          href=${this.href}
          target=${this.target || '_self'}
          @click=${this.handleClick}
          @pointerdown=${this.handlePointerDown}
          @pointerup=${this.handlePointerUp}
        >
          ${content}
        </a>
      `;
    }

    return html`
      <button
        class=${classMap(classes)}
        type=${this.type}
        ?disabled=${this.disabled || this.loading}
        @click=${this.handleClick}
        @pointerdown=${this.handlePointerDown}
        @pointerup=${this.handlePointerUp}
      >
        ${content}
      </button>
    `;
  }
}