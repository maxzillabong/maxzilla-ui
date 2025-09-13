import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-form-actions')
export class MzFormActions extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host {
        display: flex;
        gap: var(--mz-space-3); /* 0.75rem - button spacing in action bar */
        justify-content: flex-end;
        margin-top: var(--mz-space-6); /* 1.5rem - separation from form content */
        padding-top: var(--mz-space-4); /* 1rem - internal padding */
      }

      /* Full width on mobile */
      @media (max-width: 640px) {
        :host {
          justify-content: stretch;
        }

        :host ::slotted(*) {
          flex: 1;
        }
      }
    `
  ]

  render() {
    return html`<slot></slot>`
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-form-actions': MzFormActions } }

