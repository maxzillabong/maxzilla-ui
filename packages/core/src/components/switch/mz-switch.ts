import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-switch')
export class MzSwitch extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host {
        display: inline-block;
      }

      .root {
        display: inline-flex;
        align-items: center;
        gap: var(--mz-space-3);
        cursor: pointer;
        color: var(--mz-color-neutral-800);
        font-weight: var(--mz-font-medium); /* was: 500 */
        transition: opacity var(--mz-transition-normal);
      }

      .root[aria-disabled="true"] {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .track {
        width: var(--mz-space-12); /* was: 3rem */
        height: var(--mz-space-7); /* was: 1.75rem */
        border-radius: var(--mz-radius-full);
        background: linear-gradient(135deg, var(--mz-color-neutral-200), var(--mz-color-neutral-300));
        position: relative;
        transition: all var(--mz-transition-spring);
        border: var(--mz-space-0-5) solid var(--mz-color-neutral-300); /* was: 2px solid */
        box-shadow: var(--mz-shadow-inner); /* was: inset 0 2px 4px rgba(0, 0, 0, 0.1) */
      }

      .track:hover:not(.root[aria-disabled="true"] .track) {
        border-color: var(--mz-color-neutral-400);
        box-shadow: var(--mz-shadow-inner-lg), var(--mz-shadow-sm); /* was: inset 0 2px 4px rgba(0, 0, 0, 0.15), var(--mz-shadow-sm) */
      }

      .thumb {
        width: var(--mz-space-5); /* was: 1.375rem - closest available token (1.25rem) */
        height: var(--mz-space-5); /* was: 1.375rem - closest available token (1.25rem) */
        background: linear-gradient(135deg, var(--mz-color-neutral-0), var(--mz-color-neutral-100));
        border-radius: var(--mz-radius-full);
        position: absolute;
        top: var(--mz-space-px); /* was: 0.0625rem - using closest available token */
        left: var(--mz-space-0-5); /* was: 0.125rem */
        transition: all var(--mz-transition-spring);
        box-shadow: var(--mz-shadow-md), var(--mz-shadow-primary-glow); /* was: var(--mz-shadow-md), 0 0 10px rgba(0, 0, 0, 0.1) */
      }

      .on .track {
        background: linear-gradient(135deg, var(--mz-color-primary-400), var(--mz-color-primary-500));
        border-color: var(--mz-color-primary-500);
        box-shadow: var(--mz-shadow-inner), var(--mz-shadow-primary-glow); /* was: inset 0 2px 4px rgba(0, 0, 0, 0.1), 0 0 20px rgba(6, 182, 212, 0.3) */
      }

      .on .track:hover:not(.root[aria-disabled="true"] .track) {
        background: linear-gradient(135deg, var(--mz-color-primary-300), var(--mz-color-primary-400));
        box-shadow: var(--mz-shadow-inner), var(--mz-shadow-primary-glow-hover); /* was: inset 0 2px 4px rgba(0, 0, 0, 0.1), 0 0 30px rgba(6, 182, 212, 0.4) */
      }

      .on .thumb {
        transform: translateX(var(--mz-space-5)); /* was: translateX(1.25rem) */
        background: linear-gradient(135deg, var(--mz-color-neutral-0), var(--mz-color-primary-100));
      }

      .root:focus-visible {
        outline: var(--mz-space-0-5) solid var(--mz-color-primary-500); /* was: 2px solid */
        outline-offset: var(--mz-space-0-5); /* was: 2px */
        border-radius: var(--mz-radius-lg);
      }
    `
  ]

  @property({ type: Boolean, reflect: true }) checked = false
  @property({ type: Boolean, reflect: true }) disabled = false
  @property({ type: String }) label = ''

  private toggle() { if (!this.disabled) { this.checked = !this.checked; this.dispatchEvent(new Event('change', { bubbles: true })) } }
  private onKey(e: KeyboardEvent) { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); this.toggle() } }

  render() {
    return html`
      <div class="root ${this.checked ? 'on' : ''}" role="switch" aria-checked=${this.checked} tabindex=${this.disabled ? -1 : 0}
        aria-disabled=${this.disabled} @click=${this.toggle} @keydown=${this.onKey}>
        <div class="track"><div class="thumb"></div></div>
        ${this.label ? html`<span>${this.label}</span>` : html`<slot></slot>`}
      </div>
    `
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-switch': MzSwitch } }

