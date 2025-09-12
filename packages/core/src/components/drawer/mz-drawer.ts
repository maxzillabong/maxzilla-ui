import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-drawer')
export class MzDrawer extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host { display: contents; }
      .scrim { position: fixed; inset: 0; background: rgba(0,0,0,.3); opacity: 0; pointer-events: none; transition: opacity var(--mz-transition-normal); }
      .scrim.open { opacity: 1; pointer-events: auto; }
      .panel { position: fixed; top: 0; bottom: 0; width: 20rem; background: var(--mz-color-neutral-0); color: var(--mz-color-neutral-900); box-shadow: var(--mz-shadow-lg); transform: translateX(100%); transition: transform var(--mz-transition-normal); }
      .left { left: 0; transform: translateX(-100%); }
      .right { right: 0; }
      .panel.open.right { transform: translateX(0); }
      .panel.open.left { transform: translateX(0); }
      .inner { height: 100%; overflow: auto; padding: var(--mz-space-4); }
    `
  ]

  @property({ type: Boolean, reflect: true }) open = false
  @property({ type: String }) placement: 'left' | 'right' = 'right'
  @property({ type: Boolean }) closable = true

  connectedCallback(): void {
    super.connectedCallback()
    this._onKey = this._onKey.bind(this)
    window.addEventListener('keydown', this._onKey)
  }
  disconnectedCallback(): void {
    super.disconnectedCallback()
    window.removeEventListener('keydown', this._onKey)
  }
  firstUpdated(){ if(this.open) this._focusFirst() }
  private _onKey(e: KeyboardEvent) { if (this.open && this.closable && e.key === 'Escape') this.close() }
  private _onTrap(e: KeyboardEvent){
    if(!this.open || e.key!=='Tab') return
    const focusables = this.renderRoot.querySelectorAll<HTMLElement>('[tabindex],button,a,input,select,textarea')
    if(focusables.length===0) return
    const first = focusables[0]; const last = focusables[focusables.length-1]
    const active = this.renderRoot.activeElement as HTMLElement
    if(e.shiftKey && active===first){ e.preventDefault(); last.focus() }
    else if(!e.shiftKey && active===last){ e.preventDefault(); first.focus() }
  }
  private _focusFirst(){ const el = this.renderRoot.querySelector<HTMLElement>('[tabindex],button,a,input,select,textarea'); el?.focus() }
  private close() { this.open = false; this.dispatchEvent(new CustomEvent('drawer-close', { bubbles: true })) }

  render() {
    const side = this.placement === 'left' ? 'left' : 'right'
    return html`
      <div class="scrim ${this.open ? 'open' : ''}" @click=${() => this.closable && this.close()}></div>
      <aside class="panel ${side} ${this.open ? 'open' : ''}" role="dialog" aria-modal="true" @keydown=${this._onTrap}>
        <div class="inner" tabindex="0"><slot></slot></div>
      </aside>
    `
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-drawer': MzDrawer } }
