import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-switch')
export class MzSwitch extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host { display: inline-block; }
      .track { width: 2.25rem; height: 1.25rem; border-radius: 9999px; background: var(--mz-color-neutral-300); position: relative; transition: background var(--mz-transition-normal); }
      .thumb { width: 1rem; height: 1rem; background: var(--mz-color-neutral-0); border-radius: 9999px; position: absolute; top: 0.125rem; left: 0.125rem; transition: transform var(--mz-transition-normal); box-shadow: var(--mz-shadow-sm); }
      .on .track { background: var(--mz-color-primary-500); }
      .on .thumb { transform: translateX(1rem); }
      .root { display: inline-flex; align-items: center; gap: var(--mz-space-2); cursor: pointer; color: var(--mz-color-neutral-900); }
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

