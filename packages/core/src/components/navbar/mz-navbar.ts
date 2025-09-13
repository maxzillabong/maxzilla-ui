import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'
import { animationStyles } from '../../styles/animations.js'

@customElement('mz-navbar')
export class MzNavbar extends LitElement {
  static styles = [
    baseStyles,
    animationStyles,
    css`
      :host {
        display: block;
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(20px) saturate(150%);
        border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        position: sticky;
        top: 0;
        z-index: 1000;
        transition: all var(--mz-transition-normal);
      }

      :host([elevated]) {
        box-shadow: var(--mz-shadow-md);
        border-bottom-color: transparent;
      }

      :host([transparent]) {
        background: transparent;
        backdrop-filter: none;
        border-bottom-color: transparent;
      }

      :host([transparent]:hover) {
        background: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(20px);
      }

      .navbar {
        display: flex;
        align-items: center;
        min-height: var(--mz-space-16); /* 4rem */
        padding: 0 var(--mz-space-8);
        gap: var(--mz-space-6);
        position: relative;
        overflow: hidden;
      }

      /* Gradient overlay for premium effect */
      .navbar::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: var(--mz-space-px); /* 1px */
        background: linear-gradient(
          90deg,
          transparent,
          rgba(6, 182, 212, 0.3),
          transparent
        );
        opacity: 0;
        transition: opacity var(--mz-transition-normal);
      }

      :host(:hover) .navbar::before {
        opacity: 1;
      }

      /* Brand section */
      .navbar-brand {
        display: flex;
        align-items: center;
        gap: var(--mz-space-3);
        font-weight: var(--mz-font-extrabold); /* 800 */
        font-size: var(--mz-text-lg);
        letter-spacing: var(--mz-tracking-tight); /* -0.025em */
        color: var(--mz-color-neutral-900);
        transition: all var(--mz-transition-normal);
      }

      .navbar-brand:hover {
        transform: scale(1.05);
      }

      /* Logo slot */
      ::slotted([slot="logo"]) {
        width: var(--mz-space-10); /* 2.5rem */
        height: var(--mz-space-10); /* 2.5rem */
        border-radius: var(--mz-radius-lg);
      }

      /* Navigation area */
      .navbar-nav {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--mz-space-2);
      }

      /* Menu items styling */
      ::slotted([slot="nav"]) {
        display: flex;
        gap: var(--mz-space-2);
      }

      ::slotted(a) {
        position: relative;
        padding: var(--mz-space-2) var(--mz-space-4);
        color: var(--mz-color-neutral-600);
        text-decoration: none;
        font-weight: var(--mz-font-medium); /* 500 */
        font-size: var(--mz-text-sm);
        border-radius: var(--mz-radius-lg);
        transition: all var(--mz-transition-normal);
      }

      ::slotted(a:hover) {
        color: var(--mz-color-neutral-900);
        background: rgba(6, 182, 212, 0.1);
        transform: translateY(-1px); /* Keep as -1px since we don't have negative space tokens */
      }

      ::slotted(a[aria-current="page"]),
      ::slotted(a.active) {
        color: var(--mz-color-primary-600);
        background: rgba(6, 182, 212, 0.1);
      }

      /* Actions area */
      .navbar-actions {
        display: flex;
        align-items: center;
        gap: var(--mz-space-3);
      }

      /* Button slots */
      ::slotted([slot="actions"]) {
        display: flex;
        gap: var(--mz-space-3);
      }

      /* User avatar slot */
      .navbar-user {
        display: flex;
        align-items: center;
        gap: var(--mz-space-3);
        padding: var(--mz-space-2) var(--mz-space-3);
        border-radius: var(--mz-radius-full);
        transition: all var(--mz-transition-normal);
        cursor: pointer;
      }

      .navbar-user:hover {
        background: var(--mz-color-neutral-100);
      }

      ::slotted([slot="avatar"]) {
        width: var(--mz-space-10); /* 2.5rem */
        height: var(--mz-space-10); /* 2.5rem */
        border-radius: var(--mz-radius-full);
        border: 2px solid var(--mz-color-neutral-200); /* Keep as 2px since we don't have a token for it */
      }

      /* Mobile menu button */
      .navbar-mobile-menu {
        display: none;
        width: var(--mz-space-10); /* 2.5rem */
        height: var(--mz-space-10); /* 2.5rem */
        align-items: center;
        justify-content: center;
        background: transparent;
        border: none;
        border-radius: var(--mz-radius-lg);
        cursor: pointer;
        color: var(--mz-color-neutral-700);
        transition: all var(--mz-transition-normal);
      }

      .navbar-mobile-menu:hover {
        background: var(--mz-color-neutral-100);
        color: var(--mz-color-neutral-900);
      }

      .navbar-mobile-menu-icon {
        display: flex;
        flex-direction: column;
        gap: var(--mz-space-1); /* 0.25rem */
      }

      .navbar-mobile-menu-icon span {
        display: block;
        width: var(--mz-space-5); /* 1.25rem */
        height: 2px; /* Keep as 2px since we don't have a token for it */
        background: currentColor;
        border-radius: var(--mz-space-px); /* 1px */
        transition: all var(--mz-transition-normal);
      }

      .navbar-mobile-menu[aria-expanded="true"] .navbar-mobile-menu-icon span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px); /* Keep as 5px since transform doesn't work well with custom properties */
      }

      .navbar-mobile-menu[aria-expanded="true"] .navbar-mobile-menu-icon span:nth-child(2) {
        opacity: 0;
      }

      .navbar-mobile-menu[aria-expanded="true"] .navbar-mobile-menu-icon span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px); /* Keep as 5px since CSS doesn't support -var() in transform */
      }

      /* Responsive */
      @media (max-width: 768px) {
        .navbar {
          padding: 0 var(--mz-space-4);
        }

        .navbar-nav {
          display: none;
        }

        .navbar-mobile-menu {
          display: flex;
        }

        .navbar-actions {
          margin-left: auto;
        }
      }

      /* Dark mode */
      :host([theme="dark"]) {
        background: rgba(30, 30, 30, 0.8);
        border-bottom-color: rgba(255, 255, 255, 0.08);
      }

      :host([theme="dark"]) .navbar-brand {
        color: var(--mz-color-neutral-0);
      }

      :host([theme="dark"]) ::slotted(a) {
        color: var(--mz-color-neutral-400);
      }

      :host([theme="dark"]) ::slotted(a:hover) {
        color: var(--mz-color-neutral-0);
        background: rgba(255, 255, 255, 0.1);
      }

      /* Compact variant */
      :host([compact]) .navbar {
        min-height: var(--mz-space-12); /* 3rem */
        padding: 0 var(--mz-space-4);
      }

      /* Full-width variant */
      :host([full-width]) .navbar {
        max-width: none;
        padding: 0 var(--mz-space-4);
      }

      /* Centered content */
      :host([centered]) .navbar {
        max-width: var(--mz-container-xl); /* 1280px = 80rem */
        margin: 0 auto;
      }
    `
  ]

  @property({ type: Boolean, reflect: true }) elevated = false
  @property({ type: Boolean, reflect: true }) transparent = false
  @property({ type: Boolean, reflect: true }) compact = false
  @property({ type: Boolean, reflect: true }) centered = false
  @property({ type: String, reflect: true }) theme: 'light' | 'dark' = 'light'
  @property({ type: Boolean }) mobileMenuOpen = false

  private toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen
    this.dispatchEvent(new CustomEvent('mz-menu-toggle', {
      detail: { open: this.mobileMenuOpen },
      bubbles: true,
      composed: true
    }))
  }

  render() {
    return html`
      <nav class="navbar" role="navigation" aria-label="Main">
        <div class="navbar-brand">
          <slot name="logo"></slot>
          <slot name="brand"></slot>
        </div>

        <div class="navbar-nav">
          <slot name="nav"></slot>
        </div>

        <div class="navbar-actions">
          <slot name="actions"></slot>

          <div class="navbar-user">
            <slot name="avatar"></slot>
            <slot name="user"></slot>
          </div>

          <button
            class="navbar-mobile-menu"
            @click=${this.toggleMobileMenu}
            aria-expanded="${this.mobileMenuOpen}"
            aria-label="Toggle menu"
          >
            <span class="navbar-mobile-menu-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </nav>

      <slot name="mobile-menu"></slot>
    `
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-navbar': MzNavbar } }

