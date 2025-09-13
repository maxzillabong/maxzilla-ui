import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { baseStyles } from '../../styles/base.js';
import type { Size, Variant } from '../../types.js';

@customElement('mz-badge')
export class MzBadge extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host {
        display: inline-block;
        --badge-padding-x: var(--mz-space-2-5); /* 0.625rem */
        --badge-padding-y: var(--mz-space-1-5); /* 0.375rem */
        --badge-font-size: var(--mz-text-xs);
        --badge-font-weight: var(--mz-font-semibold);
        --badge-border-radius: var(--mz-radius-full);
      }

      .badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: var(--badge-padding-y) var(--badge-padding-x);
        font-size: var(--badge-font-size);
        font-weight: var(--badge-font-weight);
        line-height: 1;
        letter-spacing: var(--mz-tracking-wider);
        text-transform: uppercase;
        border-radius: var(--badge-border-radius);
        white-space: nowrap;
        transition: var(--mz-transition-normal);
        box-shadow: var(--mz-shadow-xs);
        backdrop-filter: blur(10px);
      }

      /* Size variants */
      :host([size='xs']) {
        --badge-padding-x: var(--mz-space-1); /* 0.25rem */
        --badge-padding-y: var(--mz-space-0-5); /* 0.125rem */
        --badge-font-size: 0.625rem; /* No token for this size */
      }

      :host([size='sm']) {
        --badge-padding-x: var(--mz-space-1-5); /* 0.375rem */
        --badge-padding-y: var(--mz-space-1); /* 0.25rem */
        --badge-font-size: var(--mz-text-xs);
      }

      :host([size='lg']) {
        --badge-padding-x: var(--mz-space-3); /* 0.75rem */
        --badge-padding-y: var(--mz-space-1-5); /* 0.375rem */
        --badge-font-size: var(--mz-text-sm);
      }

      /* Variant styles */
      .badge--primary {
        background: linear-gradient(135deg, var(--mz-color-primary-400), var(--mz-color-primary-500));
        color: var(--mz-color-neutral-0);
        box-shadow: 0 2px 8px rgba(6, 182, 212, 0.3);
      }

      .badge--secondary {
        background: linear-gradient(135deg, var(--mz-color-neutral-100), var(--mz-color-neutral-200));
        color: var(--mz-color-neutral-800);
        border: 1px solid var(--mz-color-neutral-300);
      }

      .badge--success {
        background: linear-gradient(135deg, var(--mz-color-success-600), var(--mz-color-success));
        color: var(--mz-color-neutral-0);
        box-shadow: 0 2px 8px rgba(34, 197, 94, 0.3);
      }

      .badge--warning {
        background: linear-gradient(135deg, var(--mz-color-warning-600), var(--mz-color-warning));
        color: var(--mz-color-neutral-0);
        box-shadow: 0 2px 8px rgba(251, 191, 36, 0.3);
      }

      .badge--destructive {
        background: linear-gradient(135deg, var(--mz-color-error-600), var(--mz-color-error));
        color: var(--mz-color-neutral-0);
        box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);
      }

      .badge--outline {
        background: rgba(255, 255, 255, 0.1);
        border: 2px solid var(--mz-color-primary-400);
        color: var(--mz-color-primary-600);
      }

      .badge--ghost {
        background: rgba(0, 0, 0, 0.05);
        color: var(--mz-color-neutral-700);
      }

      /* Dot variant */
      :host([dot]) .badge {
        width: var(--mz-space-2); /* 0.5rem */
        height: var(--mz-space-2); /* 0.5rem */
        padding: 0;
        border-radius: 50%;
      }

      :host([dot][size='sm']) .badge {
        width: var(--mz-space-1-5); /* 0.375rem */
        height: var(--mz-space-1-5); /* 0.375rem */
      }

      :host([dot][size='lg']) .badge {
        width: var(--mz-space-3); /* 0.75rem */
        height: var(--mz-space-3); /* 0.75rem */
      }
    `,
  ];

  @property({ type: String, reflect: true }) variant: Variant = 'primary';
  @property({ type: String, reflect: true }) size: Size = 'md';
  @property({ type: Boolean, reflect: true }) dot = false;

  render() {
    const classes = {
      badge: true,
      [`badge--${this.variant}`]: true,
    };

    return html`
      <span class=${classMap(classes)}>
        ${this.dot ? '' : html`<slot></slot>`}
      </span>
    `;
  }
}