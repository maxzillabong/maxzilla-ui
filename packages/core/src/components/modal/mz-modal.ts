import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { baseStyles } from '../../styles/base.js';
import { animationStyles } from '../../styles/animations.js';

@customElement('mz-modal')
export class MzModal extends LitElement {
  static styles = [
    baseStyles,
    animationStyles,
    css`
      :host {
        --modal-backdrop: rgba(0, 0, 0, 0.5);
        --modal-background: var(--mz-color-neutral-0);
        --modal-border-radius: var(--mz-radius-xl);
        --modal-shadow: var(--mz-shadow-xl);
        --modal-max-width: 32rem;
        --modal-max-height: 80vh;
        --modal-padding: var(--mz-space-6);
      }

      :host([open]) {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1000;
      }

      .modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--mz-space-4);
        opacity: 0;
        visibility: hidden;
        transition: all var(--mz-transition-slow);
      }

      .modal--open {
        opacity: 1;
        visibility: visible;
      }

      .modal-backdrop {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--modal-backdrop);
        backdrop-filter: blur(4px);
      }

      .modal-content {
        position: relative;
        max-width: var(--modal-max-width);
        max-height: var(--modal-max-height);
        width: 100%;
        background: var(--modal-background);
        border-radius: var(--modal-border-radius);
        box-shadow: var(--modal-shadow);
        overflow: hidden;
        transform: scale(0.9) translateY(20px);
        transition: all var(--mz-transition-spring);
      }

      .modal--open .modal-content {
        transform: scale(1) translateY(0);
      }

      .modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--modal-padding);
        border-bottom: 1px solid var(--mz-color-neutral-200);
      }

      .modal-title {
        font-size: var(--mz-text-lg);
        font-weight: 600;
        margin: 0;
      }

      .modal-close {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        border: none;
        background: transparent;
        border-radius: var(--mz-radius-md);
        cursor: pointer;
        color: var(--mz-color-neutral-500);
        transition: var(--mz-transition-normal);
      }

      .modal-close:hover {
        background: var(--mz-color-neutral-100);
        color: var(--mz-color-neutral-700);
      }

      .modal-close:focus-visible {
        outline: 2px solid var(--mz-color-primary-500);
        outline-offset: 2px;
      }

      .modal-body {
        padding: var(--modal-padding);
        overflow-y: auto;
        max-height: calc(var(--modal-max-height) - 8rem);
      }

      .modal-footer {
        display: flex;
        gap: var(--mz-space-3);
        justify-content: flex-end;
        padding: var(--modal-padding);
        border-top: 1px solid var(--mz-color-neutral-200);
        background: var(--mz-color-neutral-50);
      }

      /* Size variants */
      :host([size='sm']) {
        --modal-max-width: 24rem;
      }

      :host([size='lg']) {
        --modal-max-width: 48rem;
      }

      :host([size='xl']) {
        --modal-max-width: 64rem;
      }

      :host([size='full']) {
        --modal-max-width: calc(100vw - 2rem);
        --modal-max-height: calc(100vh - 2rem);
      }

      /* Animation variants */
      .modal--fade .modal-content {
        transform: none;
        opacity: 0;
      }

      .modal--fade.modal--open .modal-content {
        opacity: 1;
      }

      .modal--slide-up .modal-content {
        transform: translateY(100%);
      }

      .modal--slide-up.modal--open .modal-content {
        transform: translateY(0);
      }

      /* Disable close on backdrop */
      :host([no-close-on-backdrop]) .modal-backdrop {
        pointer-events: none;
      }

      /* Hide close button */
      :host([no-close-button]) .modal-close {
        display: none;
      }

      /* Scrollable content */
      :host([scrollable]) .modal-body {
        max-height: 60vh;
      }
    `,
  ];

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: String }) title = '';
  @property({ type: String, reflect: true }) size: 'sm' | 'md' | 'lg' | 'xl' | 'full' = 'md';
  @property({ type: String, reflect: true }) animation: 'scale' | 'fade' | 'slide-up' = 'scale';
  @property({ type: Boolean, reflect: true, attribute: 'no-close-on-backdrop' }) noCloseOnBackdrop = false;
  @property({ type: Boolean, reflect: true, attribute: 'no-close-button' }) noCloseButton = false;
  @property({ type: Boolean, reflect: true }) scrollable = false;

  @state() private isAnimating = false;

  private handleBackdropClick = (event: MouseEvent) => {
    if (event.target === event.currentTarget && !this.noCloseOnBackdrop) {
      this.close();
    }
  };

  private handleCloseClick = () => {
    this.close();
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this.open) {
      this.close();
    }
  };

  public show() {
    this.open = true;
    this.isAnimating = true;
    
    // Add event listeners
    document.addEventListener('keydown', this.handleKeyDown);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Dispatch show event
    this.dispatchEvent(
      new CustomEvent('mz-modal-show', {
        bubbles: true,
        composed: true,
      })
    );

    // Animation complete
    setTimeout(() => {
      this.isAnimating = false;
    }, 300);
  }

  public close() {
    this.isAnimating = true;
    
    // Dispatch close event (can be cancelled)
    const closeEvent = this.dispatchEvent(
      new CustomEvent('mz-modal-close', {
        bubbles: true,
        composed: true,
        cancelable: true,
      })
    );
    
    if (!closeEvent) return; // Event was cancelled

    setTimeout(() => {
      this.open = false;
      this.isAnimating = false;
      
      // Remove event listeners
      document.removeEventListener('keydown', this.handleKeyDown);
      
      // Restore body scroll
      document.body.style.overflow = '';
      
      // Dispatch closed event
      this.dispatchEvent(
        new CustomEvent('mz-modal-closed', {
          bubbles: true,
          composed: true,
        })
      );
    }, 150);
  }

  protected updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('open')) {
      if (this.open) {
        this.show();
      } else {
        this.close();
      }
    }
  }

  render() {
    if (!this.open) return html``;

    const classes = {
      modal: true,
      'modal--open': this.open && !this.isAnimating,
      [`modal--${this.animation}`]: true,
    };

    return html`
      <div
        class=${classMap(classes)}
        @click=${this.handleBackdropClick}
      >
        <div class="modal-backdrop"></div>
        <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div class="modal-header">
            <h2 id="modal-title" class="modal-title">
              <slot name="title">${this.title}</slot>
            </h2>
            <button
              class="modal-close"
              aria-label="Close modal"
              @click=${this.handleCloseClick}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>
          
          <div class="modal-body">
            <slot></slot>
          </div>
          
          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `;
  }
}