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
        --avatar-size: 2.5rem;
        --avatar-font-size: var(--mz-text-sm);
        --avatar-border-radius: var(--mz-radius-full);
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
        background: var(--mz-color-neutral-200);
        color: var(--mz-color-neutral-600);
        font-size: var(--avatar-font-size);
        font-weight: 500;
        user-select: none;
        transition: var(--mz-transition-normal);
      }

      .avatar--interactive {
        cursor: pointer;
      }

      .avatar--interactive:hover {
        transform: scale(1.05);
        box-shadow: var(--mz-shadow-md);
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
        --avatar-size: 1.5rem;
        --avatar-font-size: 0.625rem;
      }

      :host([size='sm']) {
        --avatar-size: 2rem;
        --avatar-font-size: var(--mz-text-xs);
      }

      :host([size='lg']) {
        --avatar-size: 3rem;
        --avatar-font-size: var(--mz-text-base);
      }

      :host([size='xl']) {
        --avatar-size: 4rem;
        --avatar-font-size: var(--mz-text-lg);
      }

      /* Shape variants */
      :host([shape='square']) {
        --avatar-border-radius: var(--mz-radius-md);
      }

      :host([shape='rounded']) {
        --avatar-border-radius: var(--mz-radius-lg);
      }

      /* Status indicator */
      .avatar-status {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 25%;
        height: 25%;
        border-radius: 50%;
        border: 2px solid var(--mz-color-neutral-0);
        background: var(--mz-color-neutral-400);
      }

      .avatar-status--online {
        background: var(--mz-color-success);
      }

      .avatar-status--offline {
        background: var(--mz-color-neutral-400);
      }

      .avatar-status--busy {
        background: var(--mz-color-error);
      }

      .avatar-status--away {
        background: var(--mz-color-warning);
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