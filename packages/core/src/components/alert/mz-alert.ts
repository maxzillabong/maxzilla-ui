import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'
import { animationStyles } from '../../styles/animations.js'

@customElement('mz-alert')
export class MzAlert extends LitElement {
  static styles = [
    baseStyles,
    animationStyles,
    css`
      :host {
        display: block;
        animation: slideInRight 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }

      @keyframes slideInRight {
        from {
          transform: translateX(var(--mz-space-5));
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }

      .alert {
        display: flex;
        align-items: flex-start;
        gap: var(--mz-space-4);
        padding: var(--mz-space-6);
        border-radius: var(--mz-radius-2xl);
        border: 2px solid;
        position: relative;
        overflow: hidden;
        backdrop-filter: blur(20px);
        box-shadow: var(--mz-shadow-lg);
        transition: all var(--mz-transition-normal);
      }

      .alert:hover {
        transform: translateY(calc(-1 * var(--mz-space-0-5)));
        box-shadow: var(--mz-shadow-xl);
      }

      .alert::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: var(--mz-space-1);
        height: 100%;
        background: currentColor;
      }

      /* Icon container */
      .alert-icon {
        flex-shrink: 0;
        width: var(--mz-space-10); /* 2.5rem */
        height: var(--mz-space-10); /* 2.5rem */
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--mz-radius-full);
        font-size: var(--mz-text-xl);
        font-weight: var(--mz-font-bold);
        background: currentColor;
        position: relative;
      }

      .alert-icon::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        background: var(--mz-color-neutral-0);
        opacity: 0.9;
      }

      .alert-icon-content {
        position: relative;
        z-index: 1;
        color: currentColor;
      }

      /* Content area */
      .alert-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: var(--mz-space-2);
      }

      .alert-title {
        font-size: var(--mz-text-base);
        font-weight: var(--mz-font-bold);
        letter-spacing: var(--mz-tracking-tight);
        margin: 0;
      }

      .alert-message {
        font-size: var(--mz-text-sm);
        line-height: var(--mz-leading-relaxed);
        opacity: 0.9;
      }

      /* Close button */
      .alert-close {
        flex-shrink: 0;
        width: var(--mz-space-8); /* 2rem */
        height: var(--mz-space-8); /* 2rem */
        display: flex;
        align-items: center;
        justify-content: center;
        background: currentColor;
        border: none;
        border-radius: var(--mz-radius-full);
        cursor: pointer;
        color: inherit;
        transition: all var(--mz-transition-normal);
        position: relative;
        opacity: 0.2;
      }

      .alert-close:hover {
        opacity: 0.3;
        transform: rotate(90deg) scale(1.1);
      }

      .alert-close::after {
        content: '✕';
        position: absolute;
        color: var(--mz-color-neutral-0);
        font-size: var(--mz-text-base);
        font-weight: var(--mz-font-bold);
      }

      /* Variant styles */
      .alert--success {
        background: linear-gradient(135deg,
          rgba(34, 197, 94, 0.15),
          rgba(34, 197, 94, 0.05)
        );
        border-color: var(--mz-color-success);
        color: var(--mz-color-success-800);
      }

      .alert--success .alert-icon {
        animation: bounceIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }

      .alert--info {
        background: linear-gradient(135deg,
          rgba(6, 182, 212, 0.15),
          rgba(6, 182, 212, 0.05)
        );
        border-color: var(--mz-color-primary-500);
        color: var(--mz-color-primary-800);
      }

      .alert--warning {
        background: linear-gradient(135deg,
          rgba(251, 191, 36, 0.15),
          rgba(251, 191, 36, 0.05)
        );
        border-color: var(--mz-color-warning);
        color: var(--mz-color-warning-700);
      }

      .alert--warning .alert-icon {
        animation: pulse 2s infinite;
      }

      .alert--error {
        background: linear-gradient(135deg,
          rgba(239, 68, 68, 0.15),
          rgba(239, 68, 68, 0.05)
        );
        border-color: var(--mz-color-error);
        color: var(--mz-color-error-800);
      }

      .alert--error .alert-icon {
        animation: shake 0.5s;
      }

      @keyframes bounceIn {
        0% { transform: scale(0); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
      }

      @keyframes pulse {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.05); opacity: 0.8; }
      }

      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(calc(-1 * var(--mz-space-1-25))); } /* -5px */
        75% { transform: translateX(var(--mz-space-1-25)); } /* 5px */
      }

      /* Custom icon slot */
      ::slotted([slot="icon"]) {
        width: var(--mz-space-6); /* 1.5rem */
        height: var(--mz-space-6); /* 1.5rem */
      }

      /* Hide alert with animation */
      :host([hidden]) {
        animation: slideOutRight 0.3s forwards;
      }

      @keyframes slideOutRight {
        to {
          transform: translateX(var(--mz-space-5));
          opacity: 0;
        }
      }
    `
  ]

  @property({ type: String }) variant: 'success' | 'info' | 'warning' | 'error' = 'info'
  @property({ type: Boolean }) dismissible = false
  @property({ type: String }) title = ''

  private getIcon() {
    const icons = {
      success: '✓',
      info: 'i',
      warning: '!',
      error: '✕'
    }
    return icons[this.variant]
  }

  private close() {
    this.style.animation = 'slideOutRight 0.3s forwards'
    setTimeout(() => {
      this.style.display = 'none'
      this.dispatchEvent(new Event('close', { bubbles: true }))
    }, 300)
  }

  render() {
    return html`
      <div class="alert alert--${this.variant}">
        <div class="alert-icon">
          <div class="alert-icon-content">
            <slot name="icon">${this.getIcon()}</slot>
          </div>
        </div>
        <div class="alert-content">
          ${this.title ? html`<h4 class="alert-title">${this.title}</h4>` : ''}
          <div class="alert-message">
            <slot></slot>
          </div>
        </div>
        ${this.dismissible ? html`
          <button
            class="alert-close"
            aria-label="Close alert"
            @click=${this.close}
          ></button>
        ` : ''}
      </div>
    `
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-alert': MzAlert } }

