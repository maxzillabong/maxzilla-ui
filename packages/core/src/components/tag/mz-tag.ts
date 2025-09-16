import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

/**
 * @summary A tag component for labeling and categorizing content
 * @documentation https://maxzillaui.dev/components/tag
 * @status stable
 * @since 1.0
 *
 * @event mz-remove - Emitted when the remove button is clicked
 *
 * @slot - The tag's content
 * @slot prefix - Content to show before the tag text
 * @slot suffix - Content to show after the tag text
 *
 * @csspart base - The component's base wrapper
 * @csspart content - The tag content
 * @csspart prefix - The prefix slot
 * @csspart suffix - The suffix slot
 * @csspart remove-button - The remove button
 *
 * @cssproperty --border-radius - Border radius of the tag
 * @cssproperty --font-size - Font size of the tag text
 * @cssproperty --height - Height of the tag
 * @cssproperty --padding-x - Horizontal padding of the tag
 * @cssproperty --padding-y - Vertical padding of the tag
 */
@customElement('mz-tag')
export class MzTag extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      --border-radius: var(--mz-border-radius-medium);
      --font-size: var(--mz-font-size-small);
      --height: auto;
      --padding-x: 0.5rem;
      --padding-y: 0.25rem;
    }

    .tag {
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      padding: var(--padding-y) var(--padding-x);
      border-radius: var(--border-radius);
      font-size: var(--font-size);
      font-weight: var(--mz-font-weight-medium);
      line-height: 1;
      white-space: nowrap;
      transition: all 0.2s ease;
      cursor: default;
      user-select: none;
      height: var(--height);
      border: 1px solid transparent;
    }

    /* Variants */
    .tag--primary {
      background: var(--mz-color-primary-alpha-10);
      color: var(--mz-color-primary);
      border-color: var(--mz-color-primary-alpha-20);
    }

    .tag--secondary {
      background: var(--mz-color-neutral-100);
      color: var(--mz-color-neutral-700);
      border-color: var(--mz-color-neutral-200);
    }

    .tag--success {
      background: var(--mz-color-success-alpha-10);
      color: var(--mz-color-success);
      border-color: var(--mz-color-success-alpha-20);
    }

    .tag--warning {
      background: var(--mz-color-warning-alpha-10);
      color: var(--mz-color-warning);
      border-color: var(--mz-color-warning-alpha-20);
    }

    .tag--danger {
      background: var(--mz-color-danger-alpha-10);
      color: var(--mz-color-danger);
      border-color: var(--mz-color-danger-alpha-20);
    }

    .tag--info {
      background: var(--mz-color-info-alpha-10);
      color: var(--mz-color-info);
      border-color: var(--mz-color-info-alpha-20);
    }

    .tag--neutral {
      background: var(--mz-color-neutral-100);
      color: var(--mz-color-neutral-600);
      border-color: var(--mz-color-neutral-200);
    }

    /* Sizes */
    .tag--small {
      --font-size: var(--mz-font-size-x-small);
      --padding-x: 0.375rem;
      --padding-y: 0.125rem;
    }

    .tag--medium {
      --font-size: var(--mz-font-size-small);
      --padding-x: 0.5rem;
      --padding-y: 0.25rem;
    }

    .tag--large {
      --font-size: var(--mz-font-size-medium);
      --padding-x: 0.625rem;
      --padding-y: 0.375rem;
    }

    /* Removable tags */
    .tag--removable {
      padding-right: 0.25rem;
    }

    .remove-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 1rem;
      height: 1rem;
      border: none;
      background: none;
      color: inherit;
      border-radius: var(--mz-border-radius-small);
      cursor: pointer;
      transition: all 0.2s ease;
      opacity: 0.7;
      margin-left: 0.125rem;
    }

    .remove-button:hover {
      opacity: 1;
      background: rgba(0, 0, 0, 0.1);
    }

    .remove-button:focus {
      outline: none;
      opacity: 1;
      box-shadow: 0 0 0 2px var(--mz-color-primary-alpha-20);
    }

    .remove-button svg {
      width: 0.75rem;
      height: 0.75rem;
    }

    .prefix,
    .suffix {
      display: inline-flex;
      align-items: center;
    }

    .content {
      display: inline-flex;
      align-items: center;
    }

    /* Pill variant */
    .tag--pill {
      --border-radius: 1rem;
    }

    @media (prefers-reduced-motion: reduce) {
      .tag,
      .remove-button {
        transition: none;
      }
    }
  `

  /** The tag's visual variant */
  @property() variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral' = 'neutral'

  /** The tag's size */
  @property() size: 'small' | 'medium' | 'large' = 'medium'

  /** Whether the tag can be removed */
  @property({ type: Boolean }) removable = false

  /** Whether to use pill styling (rounded ends) */
  @property({ type: Boolean }) pill = false

  private handleRemove(event: Event) {
    event.stopPropagation()

    this.dispatchEvent(new CustomEvent('mz-remove', {
      detail: {},
      bubbles: true,
      composed: true
    }))
  }

  private renderRemoveButton() {
    return html`
      <button
        type="button"
        class="remove-button"
        part="remove-button"
        aria-label="Remove tag"
        @click=${this.handleRemove}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    `
  }

  render() {
    const classes = {
      'tag': true,
      [`tag--${this.variant}`]: true,
      [`tag--${this.size}`]: true,
      'tag--removable': this.removable,
      'tag--pill': this.pill
    }

    return html`
      <span class=${classMap(classes)} part="base">
        <slot name="prefix" class="prefix" part="prefix"></slot>
        <span class="content" part="content">
          <slot></slot>
        </span>
        <slot name="suffix" class="suffix" part="suffix"></slot>
        ${this.removable ? this.renderRemoveButton() : ''}
      </span>
    `
  }
}