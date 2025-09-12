import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-checkbox')
export class MzCheckbox extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host { display: inline-block; color: var(--mz-color-neutral-900); }
      .root { display: inline-flex; align-items: center; gap: var(--mz-space-2); cursor: pointer; }
      .box {
        width: 1.1rem; height: 1.1rem; border: 1px solid var(--mz-color-neutral-300);
        border-radius: var(--mz-radius-sm); display: grid; place-items: center; background: var(--mz-color-neutral-0);
      }
      .box.checked { background: var(--mz-color-primary-500); border-color: var(--mz-color-primary-500); }
      .tick { color: var(--mz-color-neutral-0); font-size: 0.75rem; line-height: 1; }
      .label { user-select: none; }
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

