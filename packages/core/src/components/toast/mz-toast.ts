import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'
import { animationStyles } from '../../styles/animations.js'

@customElement('mz-toast')
export class MzToast extends LitElement {
  static styles = [
    baseStyles,
    animationStyles,
    css`
      :host {
        position: fixed;
        bottom: var(--mz-space-8); /* 2rem */
        right: var(--mz-space-8); /* 2rem */
        display: block;
        z-index: 9999;
        pointer-events: none;
      }

      .toast {
        display: flex;
        align-items: center;
        gap: var(--mz-space-4);
        min-width: var(--mz-space-72); /* 300px / 18rem */
        max-width: var(--mz-space-125); /* 500px = 31.25rem */
        padding: var(--mz-space-6);
        background: rgba(255, 255, 255, 0.98);
        border: var(--mz-space-px) solid var(--mz-color-neutral-200); /* 2px -> using space-px for consistency */
        border-radius: var(--mz-radius-2xl);
        box-shadow: var(--mz-shadow-2xl), 0 20px 40px rgba(0, 0, 0, 0.15);
        backdrop-filter: blur(20px) saturate(150%);
        opacity: 0;
        transform: translateX(100px);
        transition: all var(--mz-transition-spring);
        pointer-events: auto;
        position: relative;
        overflow: hidden;
      }

      .toast.show {
        opacity: 1;
        transform: translateX(0);
      }

      .toast.hide {
        opacity: 0;
        transform: translateX(100px) scale(0.9);
      }

      /* Progress bar */
      .toast::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: var(--mz-space-0-75); /* 3px = 0.1875rem */
        background: currentColor;
        opacity: 0.3;
        animation: progress var(--duration, 3s) linear;
      }

      @keyframes progress {
        from { width: 100%; }
        to { width: 0%; }
      }

      /* Icon/Avatar container */
      .toast-icon {
        flex-shrink: 0;
        width: var(--mz-space-12); /* 3rem */
        height: var(--mz-space-12); /* 3rem */
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--mz-radius-full);
        font-size: var(--mz-text-2xl);
        font-weight: var(--mz-font-bold);
        position: relative;
      }

      .toast-avatar {
        width: var(--mz-space-12); /* 3rem */
        height: var(--mz-space-12); /* 3rem */
        border-radius: var(--mz-radius-full);
        object-fit: cover;
        border: var(--mz-space-0-75) solid var(--mz-color-neutral-0); /* 3px */
        box-shadow: var(--mz-shadow-md);
      }

      /* Content area */
      .toast-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: var(--mz-space-1);
      }

      .toast-title {
        font-size: var(--mz-text-base);
        font-weight: var(--mz-font-bold);
        color: var(--mz-color-neutral-900);
        letter-spacing: var(--mz-tracking-tight);
        margin: 0;
      }

      .toast-message {
        font-size: var(--mz-text-sm);
        color: var(--mz-color-neutral-600);
        line-height: var(--mz-leading-normal);
      }

      .toast-time {
        font-size: var(--mz-text-xs);
        color: var(--mz-color-neutral-400);
        margin-top: var(--mz-space-1);
      }

      /* Actions */
      .toast-actions {
        display: flex;
        gap: var(--mz-space-2);
        margin-top: var(--mz-space-3);
      }

      .toast-action {
        padding: var(--mz-space-2) var(--mz-space-3);
        background: transparent;
        border: var(--mz-space-px) solid var(--mz-color-neutral-300); /* 1px */
        border-radius: var(--mz-radius-lg);
        font-size: var(--mz-text-xs);
        font-weight: var(--mz-font-semibold);
        color: var(--mz-color-neutral-700);
        cursor: pointer;
        transition: all var(--mz-transition-normal);
      }

      .toast-action:hover {
        background: var(--mz-color-neutral-100);
        border-color: var(--mz-color-neutral-400);
      }

      .toast-action--primary {
        background: var(--mz-color-primary-500);
        border-color: var(--mz-color-primary-500);
        color: var(--mz-color-neutral-0);
      }

      .toast-action--primary:hover {
        background: var(--mz-color-primary-600);
        border-color: var(--mz-color-primary-600);
      }

      /* Close button */
      .toast-close {
        position: absolute;
        top: var(--mz-space-3);
        right: var(--mz-space-3);
        width: var(--mz-space-6); /* 1.5rem */
        height: var(--mz-space-6); /* 1.5rem */
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--mz-color-neutral-100);
        border: none;
        border-radius: var(--mz-radius-full);
        cursor: pointer;
        color: var(--mz-color-neutral-500);
        transition: all var(--mz-transition-normal);
        font-size: var(--mz-text-sm);
      }

      .toast-close:hover {
        background: var(--mz-color-neutral-200);
        color: var(--mz-color-neutral-700);
        transform: rotate(90deg);
      }

      /* Variants */
      .toast--success {
        border-color: var(--mz-color-success);
        color: var(--mz-color-success);
      }

      .toast--success .toast-icon {
        background: linear-gradient(135deg,
          rgba(34, 197, 94, 0.2),
          rgba(34, 197, 94, 0.1)
        );
        color: var(--mz-color-success);
      }

      .toast--error {
        border-color: var(--mz-color-error);
        color: var(--mz-color-error);
      }

      .toast--error .toast-icon {
        background: linear-gradient(135deg,
          rgba(239, 68, 68, 0.2),
          rgba(239, 68, 68, 0.1)
        );
        color: var(--mz-color-error);
      }

      .toast--warning {
        border-color: var(--mz-color-warning);
        color: var(--mz-color-warning);
      }

      .toast--warning .toast-icon {
        background: linear-gradient(135deg,
          rgba(251, 191, 36, 0.2),
          rgba(251, 191, 36, 0.1)
        );
        color: var(--mz-color-warning);
      }

      .toast--info {
        border-color: var(--mz-color-primary-500);
        color: var(--mz-color-primary-500);
      }

      .toast--info .toast-icon {
        background: linear-gradient(135deg,
          rgba(6, 182, 212, 0.2),
          rgba(6, 182, 212, 0.1)
        );
        color: var(--mz-color-primary-500);
      }

      /* Dark mode */
      :host([theme='dark']) .toast {
        background: rgba(30, 30, 30, 0.98);
        border-color: var(--mz-color-neutral-700);
      }

      :host([theme='dark']) .toast-title {
        color: var(--mz-color-neutral-0);
      }

      :host([theme='dark']) .toast-message {
        color: var(--mz-color-neutral-300);
      }

      /* Custom slots */
      ::slotted([slot="icon"]) {
        width: var(--mz-space-8); /* 2rem */
        height: var(--mz-space-8); /* 2rem */
      }

      ::slotted([slot="avatar"]) {
        width: var(--mz-space-12); /* 3rem */
        height: var(--mz-space-12); /* 3rem */
        border-radius: var(--mz-radius-full);
      }
    `
  ]

  @state() private _show = false
  @state() private _hiding = false

  @property({ type: String }) message = ''
  @property({ type: String }) title = ''
  @property({ type: String }) variant: 'info' | 'success' | 'warning' | 'error' = 'info'
  @property({ type: Number }) duration = 3000
  @property({ type: String }) avatar = ''
  @property({ type: String }) time = 'just now'
  @property({ type: Boolean }) closable = true
  @property({ type: String, reflect: true }) theme: 'light' | 'dark' = 'light'

  private timeoutId: any

  public show(options: {
    message: string
    title?: string
    variant?: 'info' | 'success' | 'warning' | 'error'
    duration?: number
    avatar?: string
  }) {
    // Dispatch mz-show event (can be cancelled)
    const showEvent = this.dispatchEvent(new CustomEvent('mz-show', {
      detail: {
        message: options.message,
        title: options.title,
        variant: options.variant || 'info',
        duration: options.duration || 3000
      },
      bubbles: true,
      composed: true,
      cancelable: true
    }))

    if (!showEvent) return // Event was cancelled

    this.message = options.message
    this.title = options.title || ''
    this.variant = options.variant || 'info'
    this.duration = options.duration || 3000
    this.avatar = options.avatar || ''

    this._show = true
    this._hiding = false

    if (this.timeoutId) clearTimeout(this.timeoutId)

    // Dispatch after-show event after animation
    setTimeout(() => {
      this.dispatchEvent(new CustomEvent('mz-after-show', {
        detail: {
          message: this.message,
          title: this.title,
          variant: this.variant,
          duration: this.duration
        },
        bubbles: true,
        composed: true
      }))
    }, 300) // Match CSS transition duration

    this.timeoutId = setTimeout(() => {
      this.hide('timeout')
    }, this.duration)
  }

  private hide(source: 'close-button' | 'timeout' | 'method' = 'method') {
    // Dispatch mz-hide event (can be cancelled)
    const hideEvent = this.dispatchEvent(new CustomEvent('mz-hide', {
      detail: {
        source,
        message: this.message,
        title: this.title,
        variant: this.variant
      },
      bubbles: true,
      composed: true,
      cancelable: true
    }))

    if (!hideEvent) return // Event was cancelled

    this._hiding = true

    // Clear timeout if hiding manually
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
      this.timeoutId = null
    }

    setTimeout(() => {
      this._show = false
      this._hiding = false

      // Dispatch after-hide event
      this.dispatchEvent(new CustomEvent('mz-after-hide', {
        detail: {
          source,
          message: this.message,
          title: this.title,
          variant: this.variant
        },
        bubbles: true,
        composed: true
      }))
    }, 300)
  }

  // Public API
  public close() {
    this.hide('method')
  }

  private getIcon() {
    const icons = {
      success: '✓',
      error: '✕',
      warning: '!',
      info: 'i'
    }
    return icons[this.variant]
  }

  private handleActionClick(e: Event) {
    const target = e.target as HTMLElement
    if (target.tagName === 'BUTTON' || target.closest('button')) {
      // Dispatch action event
      this.dispatchEvent(new CustomEvent('mz-action', {
        detail: {
          action: target.textContent || 'unknown',
          originalEvent: e
        },
        bubbles: true,
        composed: true
      }))
    }
  }

  render() {
    if (!this._show && !this._hiding) return html``

    return html`
      <div
        class="toast toast--${this.variant} ${this._show && !this._hiding ? 'show' : 'hide'}"
        style="--duration: ${this.duration}ms"
      >
        ${this.avatar ? html`
          <img class="toast-avatar" src="${this.avatar}" alt="Avatar" />
        ` : html`
          <div class="toast-icon">
            <slot name="icon">${this.getIcon()}</slot>
          </div>
        `}

        <div class="toast-content">
          ${this.title ? html`<h4 class="toast-title">${this.title}</h4>` : ''}
          <div class="toast-message">${this.message}</div>
          <div class="toast-time">${this.time}</div>
          <slot name="actions" @click=${this.handleActionClick}></slot>
        </div>

        ${this.closable ? html`
          <button
            class="toast-close"
            @click=${() => this.hide('close-button')}
            aria-label="Close"
          >✕</button>
        ` : ''}
      </div>
    `
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-toast': MzToast } }

