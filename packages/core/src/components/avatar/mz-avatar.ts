import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { baseStyles } from '../../styles/base.js';
import type { Size } from '../../types.js';

@customElement('mz-avatar')
export class MzAvatar extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host {
        display: inline-block;
        --avatar-size: var(--mz-space-12); /* 3rem */
        --avatar-font-size: var(--mz-text-sm);
        --avatar-border-radius: var(--mz-radius-full);
        --avatar-border-width: 3px; /* keeping original 3px as it doesn't map cleanly to spacing tokens */
        --avatar-border-color: var(--mz-color-neutral-0);
      }

      .avatar {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: var(--avatar-size);
        height: var(--avatar-size);
        border-radius: var(--avatar-border-radius);
        overflow: hidden;
        background: linear-gradient(135deg, var(--mz-color-primary-200), var(--mz-color-primary-400));
        color: var(--mz-color-neutral-0);
        font-size: var(--avatar-font-size);
        font-weight: var(--mz-font-semibold); /* 600 */
        letter-spacing: var(--mz-tracking-wide); /* 0.025em */
        user-select: none;
        transition: var(--mz-transition-normal);
        border: var(--avatar-border-width) solid var(--avatar-border-color);
        box-shadow: var(--mz-shadow-md);
      }

      .avatar--interactive {
        cursor: pointer;
      }

      .avatar--interactive:hover {
        transform: scale(1.1) translateY(calc(-1 * var(--mz-space-2))); /* -2px -> -0.5rem */
        box-shadow: var(--mz-shadow-lg), 0 0 var(--mz-space-5) rgba(6, 182, 212, 0.2); /* 20px -> 1.25rem */
      }

      .avatar--interactive:active {
        transform: scale(1.05);
      }

      .avatar-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: inherit;
      }

      .avatar-fallback {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        text-transform: uppercase;
      }

      /* Size variants */
      :host([size='xs']) {
        --avatar-size: var(--mz-space-8); /* 2rem */
        --avatar-font-size: 0.625rem; /* no direct token match */
        --avatar-border-width: var(--mz-space-0-5); /* 2px -> 0.125rem is closest */
      }

      :host([size='sm']) {
        --avatar-size: var(--mz-space-10); /* 2.5rem */
        --avatar-font-size: var(--mz-text-xs);
        --avatar-border-width: var(--mz-space-0-5); /* 2px -> 0.125rem is closest */
      }

      :host([size='lg']) {
        --avatar-size: var(--mz-space-14); /* 3.5rem */
        --avatar-font-size: var(--mz-text-base);
        --avatar-border-width: 3px; /* keeping original 3px */
      }

      :host([size='xl']) {
        --avatar-size: 4.5rem; /* no exact token match, keeping original */
        --avatar-font-size: var(--mz-text-lg);
        --avatar-border-width: var(--mz-space-1); /* 4px -> 0.25rem */
      }

      /* Shape variants */
      :host([shape='square']) {
        --avatar-border-radius: var(--mz-radius-lg);
      }

      :host([shape='rounded']) {
        --avatar-border-radius: var(--mz-radius-2xl);
      }

      /* Status indicator */
      .avatar-status {
        position: absolute;
        bottom: var(--mz-space-0-5); /* 2px -> 0.125rem */
        right: var(--mz-space-0-5); /* 2px -> 0.125rem */
        width: 28%;
        height: 28%;
        border-radius: 50%;
        border: 3px solid var(--mz-color-neutral-0); /* keeping original 3px */
        background: var(--mz-color-neutral-400);
        box-shadow: var(--mz-shadow-sm);
      }

      .avatar-status--online {
        background: var(--mz-color-success);
        box-shadow: 0 0 0 var(--mz-space-0-5) rgba(34, 197, 94, 0.2), var(--mz-shadow-sm); /* 2px -> 0.125rem */
        animation: pulse-green 2s infinite;
      }

      .avatar-status--offline {
        background: var(--mz-color-neutral-400);
      }

      .avatar-status--busy {
        background: var(--mz-color-error);
        box-shadow: 0 0 0 var(--mz-space-0-5) rgba(239, 68, 68, 0.2), var(--mz-shadow-sm); /* 2px -> 0.125rem */
      }

      .avatar-status--away {
        background: var(--mz-color-warning);
        box-shadow: 0 0 0 var(--mz-space-0-5) rgba(251, 191, 36, 0.2), var(--mz-shadow-sm); /* 2px -> 0.125rem */
      }

      @keyframes pulse-green {
        0%, 100% {
          box-shadow: 0 0 0 var(--mz-space-0-5) rgba(34, 197, 94, 0.2), var(--mz-shadow-sm); /* 2px -> 0.125rem */
        }
        50% {
          box-shadow: 0 0 0 var(--mz-space-1) rgba(34, 197, 94, 0.1), var(--mz-shadow-sm); /* 4px -> 0.25rem */
        }
      }
    `,
  ];

  @property({ type: String }) src = '';
  @property({ type: String }) alt = '';
  @property({ type: String }) initials = '';
  @property({ type: String, reflect: true }) size: Size = 'md';
  @property({ type: String, reflect: true }) shape: 'circle' | 'square' | 'rounded' = 'circle';
  @property({ type: String, reflect: true }) status: 'online' | 'offline' | 'busy' | 'away' | '' = '';
  @property({ type: Boolean, reflect: true }) interactive = false;

  @state() private imageError = false;

  private handleImageError = () => {
    this.imageError = true;
  };

  private handleImageLoad = () => {
    this.imageError = false;
  };

  private handleClick = (event: MouseEvent) => {
    if (!this.interactive) return;

    this.dispatchEvent(
      new CustomEvent('mz-avatar-click', {
        detail: { originalEvent: event },
        bubbles: true,
        composed: true,
      })
    );
  };

  private getInitials(): string {
    if (this.initials) return this.initials.slice(0, 2);
    if (this.alt) {
      return this.alt
        .split(' ')
        .map(word => word[0])
        .join('')
        .slice(0, 2);
    }
    return '?';
  }

  render() {
    const classes = {
      avatar: true,
      'avatar--interactive': this.interactive,
    };

    const statusClasses = {
      'avatar-status': true,
      [`avatar-status--${this.status}`]: !!this.status,
    };

    const showImage = this.src && !this.imageError;

    return html`
      <div class=${classMap(classes)} @click=${this.handleClick}>
        ${showImage
          ? html`
              <img
                class="avatar-image"
                src=${this.src}
                alt=${this.alt}
                @error=${this.handleImageError}
                @load=${this.handleImageLoad}
              />
            `
          : html`
              <div class="avatar-fallback">
                <slot>${this.getInitials()}</slot>
              </div>
            `}
        
        ${this.status
          ? html`<div class=${classMap(statusClasses)}></div>`
          : ''}
      </div>
    `;
  }
}