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
        --badge-padding-x: 0.5rem;
        --badge-padding-y: 0.25rem;
        --badge-font-size: var(--mz-text-xs);
        --badge-font-weight: 500;
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
        border-radius: var(--badge-border-radius);
        white-space: nowrap;
        transition: var(--mz-transition-normal);
      }

      /* Size variants */
      :host([size='xs']) {
        --badge-padding-x: 0.25rem;
        --badge-padding-y: 0.125rem;
        --badge-font-size: 0.625rem;
      }

      :host([size='sm']) {
        --badge-padding-x: 0.375rem;
        --badge-padding-y: 0.25rem;
        --badge-font-size: var(--mz-text-xs);
      }

      :host([size='lg']) {
        --badge-padding-x: 0.75rem;
        --badge-padding-y: 0.375rem;
        --badge-font-size: var(--mz-text-sm);
      }

      /* Variant styles */
      .badge--primary {
        background: var(--mz-color-primary-500);
        color: var(--mz-color-neutral-0);
      }

      .badge--secondary {
        background: var(--mz-color-neutral-100);
        color: var(--mz-color-neutral-700);
      }

      .badge--success {
        background: var(--mz-color-success);
        color: var(--mz-color-neutral-0);
      }

      .badge--warning {
        background: var(--mz-color-warning);
        color: var(--mz-color-neutral-0);
      }

      .badge--destructive {
        background: var(--mz-color-error);
        color: var(--mz-color-neutral-0);
      }

      .badge--outline {
        background: transparent;
        border: 1px solid var(--mz-color-neutral-300);
        color: var(--mz-color-neutral-700);
      }

      .badge--ghost {
        background: transparent;
        color: var(--mz-color-neutral-600);
      }

      /* Dot variant */
      :host([dot]) .badge {
        width: 0.5rem;
        height: 0.5rem;
        padding: 0;
        border-radius: 50%;
      }

      :host([dot][size='sm']) .badge {
        width: 0.375rem;
        height: 0.375rem;
      }

      :host([dot][size='lg']) .badge {
        width: 0.75rem;
        height: 0.75rem;
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