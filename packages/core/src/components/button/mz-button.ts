import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
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
        --button-height: var(--mz-space-11); /* 2.75rem */
        --button-padding-x: var(--mz-space-5); /* 1.25rem */
        --button-padding-y: var(--mz-space-2-5); /* 0.625rem */
        --button-font-size: var(--mz-text-sm);
        --button-border-radius: var(--mz-radius-xl);
        --button-transition: all var(--mz-transition-normal);
      }

      .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--mz-space-2);
        height: var(--button-height);
        padding: var(--button-padding-y) var(--button-padding-x);
        font-family: inherit;
        font-size: var(--button-font-size);
        font-weight: var(--mz-font-semibold);
        letter-spacing: var(--mz-tracking-wide);
        line-height: 1;
        text-decoration: none;
        border: 2px solid transparent;
        border-radius: var(--button-border-radius);
        cursor: pointer;
        transition: var(--button-transition);
        position: relative;
        overflow: hidden;
        user-select: none;
        white-space: nowrap;
        backdrop-filter: blur(10px);
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
        --button-height: var(--mz-space-8); /* 2rem */
        --button-padding-x: var(--mz-space-3); /* 0.75rem */
        --button-padding-y: var(--mz-space-1-5); /* 0.375rem */
        --button-font-size: var(--mz-text-xs);
        --button-border-radius: var(--mz-radius-lg);
      }

      :host([size='sm']) {
        --button-height: var(--mz-space-9); /* 2.25rem */
        --button-padding-x: var(--mz-space-4); /* 1rem */
        --button-padding-y: var(--mz-space-2); /* 0.5rem */
        --button-font-size: var(--mz-text-sm);
      }

      :host([size='lg']) {
        --button-height: var(--mz-space-13); /* 3.25rem */
        --button-padding-x: var(--mz-space-7); /* 1.75rem */
        --button-padding-y: var(--mz-space-3-5); /* 0.875rem */
        --button-font-size: var(--mz-text-base);
        --button-border-radius: var(--mz-radius-2xl);
      }

      :host([size='xl']) {
        --button-height: var(--mz-space-15); /* 3.75rem */
        --button-padding-x: var(--mz-space-9); /* 2.25rem */
        --button-padding-y: var(--mz-space-4-5); /* 1.125rem */
        --button-font-size: var(--mz-text-lg);
        --button-border-radius: var(--mz-radius-2xl);
      }

      /* Primary variant */
      .button--primary {
        background: linear-gradient(135deg, var(--mz-color-primary-500), var(--mz-color-primary-600));
        color: var(--mz-color-neutral-0);
        border-color: transparent;
        box-shadow: var(--mz-shadow-md), inset 0 var(--mz-space-px) 0 rgba(255, 255, 255, 0.1);
      }

      .button--primary:hover {
        background: linear-gradient(135deg, var(--mz-color-primary-400), var(--mz-color-primary-500));
        transform: translateY(-2px) scale(1.02);
        box-shadow: var(--mz-shadow-lg), var(--mz-shadow-primary-glow);
      }

      .button--primary:active {
        transform: translateY(0) scale(1);
        box-shadow: var(--mz-shadow-sm), var(--mz-shadow-inner);
      }

      /* Secondary variant */
      .button--secondary {
        background: linear-gradient(135deg, var(--mz-color-neutral-100), var(--mz-color-neutral-200));
        color: var(--mz-color-neutral-800);
        border-color: var(--mz-color-neutral-300);
        box-shadow: var(--mz-shadow-sm);
      }

      .button--secondary:hover {
        background: linear-gradient(135deg, var(--mz-color-neutral-50), var(--mz-color-neutral-100));
        border-color: var(--mz-color-neutral-400);
        transform: translateY(-2px) scale(1.02);
        box-shadow: var(--mz-shadow-md);
      }

      .button--secondary:active {
        transform: translateY(0) scale(1);
        box-shadow: var(--mz-shadow-xs), var(--mz-shadow-inner);
      }

      /* Outline variant */
      .button--outline {
        background: rgba(255, 255, 255, 0.05);
        color: var(--mz-color-primary-600);
        border-color: var(--mz-color-primary-400);
        box-shadow: var(--mz-shadow-inner);
      }

      .button--outline:hover {
        background: linear-gradient(135deg, var(--mz-color-primary-50), var(--mz-color-primary-100));
        border-color: var(--mz-color-primary-500);
        transform: translateY(-2px) scale(1.02);
        box-shadow: var(--mz-shadow-sm), 0 0 20px var(--mz-color-primary-200);
      }

      .button--outline:active {
        transform: translateY(0) scale(1);
        box-shadow: var(--mz-shadow-inner);
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
        background: var(--mz-color-error-600);
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
        width: var(--mz-space-4);
        height: var(--mz-space-4);
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
        margin-right: var(--mz-space-2);
      }

      ::slotted([slot='end']) {
        margin-left: var(--mz-space-2);
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


  private handlePointerDown = () => {
    // Add visual feedback if needed
  };

  private handlePointerUp = () => {
    // Remove visual feedback if needed
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