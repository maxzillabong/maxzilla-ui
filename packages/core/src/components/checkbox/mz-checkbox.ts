import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-checkbox')
export class MzCheckbox extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host {
        display: inline-block;
        color: var(--mz-color-neutral-800);
      }

      .root {
        display: inline-flex;
        align-items: center;
        gap: var(--mz-space-3);
        cursor: pointer;
        font-weight: var(--mz-font-medium); /* was: 500 */
        transition: opacity var(--mz-transition-normal);
      }

      .root[aria-disabled="true"] {
        opacity: 0.5; /* Keeping hardcoded opacity - no semantic token for disabled state */
        cursor: not-allowed;
      }

      .box {
        width: var(--mz-space-5); /* was: 1.25rem */
        height: var(--mz-space-5); /* was: 1.25rem */
        border: 2px solid var(--mz-color-neutral-400); /* 2px border (no equivalent spacing token) */
        border-radius: var(--mz-radius-md);
        display: grid;
        place-items: center;
        background: linear-gradient(135deg, var(--mz-color-neutral-0), var(--mz-color-neutral-50));
        transition: all var(--mz-transition-spring);
        box-shadow: var(--mz-shadow-xs);
        position: relative;
      }

      .root:not([aria-disabled="true"]):hover .box {
        border-color: var(--mz-color-primary-400);
        transform: scale(1.1);
        box-shadow: var(--mz-shadow-sm);
      }

      .box.checked {
        background: linear-gradient(135deg, var(--mz-color-primary-400), var(--mz-color-primary-500));
        border-color: var(--mz-color-primary-500);
        box-shadow: var(--mz-shadow-sm), var(--mz-shadow-primary-glow); /* was: 0 0 15px rgba(6, 182, 212, 0.3) */
      }

      .root:not([aria-disabled="true"]):hover .box.checked {
        background: linear-gradient(135deg, var(--mz-color-primary-300), var(--mz-color-primary-400));
        box-shadow: var(--mz-shadow-md), var(--mz-shadow-primary-glow-hover); /* was: 0 0 20px rgba(6, 182, 212, 0.4) */
      }

      .tick {
        color: var(--mz-color-neutral-0);
        font-size: var(--mz-text-sm); /* was: 0.875rem */
        line-height: var(--mz-leading-tight); /* was: 1 */
        font-weight: var(--mz-font-bold); /* was: bold */
        animation: checkmark 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }

      @keyframes checkmark {
        0% {
          transform: scale(0) rotate(-45deg);
          opacity: 0;
        }
        50% {
          transform: scale(1.2) rotate(5deg);
        }
        100% {
          transform: scale(1) rotate(0);
          opacity: 1;
        }
      }

      .label {
        user-select: none;
      }

      .root:focus-visible {
        outline: 2px solid var(--mz-color-primary-500); /* 2px outline (no equivalent spacing token) */
        outline-offset: var(--mz-space-0-5); /* was: 2px */
        border-radius: var(--mz-radius-md);
      }
    `
  ]

  @property({ type: Boolean, reflect: true }) checked = false
  @property({ type: Boolean, reflect: true }) disabled = false
  @property({ type: String }) label = ''

  private toggle() {
    if (this.disabled) return
    this.checked = !this.checked
    this.dispatchEvent(new Event('change', { bubbles: true }))
  }

  private onKey(e: KeyboardEvent) {
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); this.toggle() }
  }

  render() {
    return html`
      <div class="root" role="checkbox" aria-checked=${this.checked} tabindex=${this.disabled ? -1 : 0}
        @click=${this.toggle} @keydown=${this.onKey} aria-disabled=${this.disabled}>
        <div class="box ${this.checked ? 'checked' : ''}">
          ${this.checked ? html`<span class="tick">✓</span>` : html``}
        </div>
        ${this.label ? html`<span class="label">${this.label}</span>` : html`<slot></slot>`}
      </div>
    `
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-checkbox': MzCheckbox } }

