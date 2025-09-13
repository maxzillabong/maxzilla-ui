import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-form')
export class MzForm extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        /* Form wrapper - inherits spacing from parent */
      }

      form {
        width: 100%;
      }
    `
  ]

  @property({ type: String, attribute: 'aria-label' }) ariaLabel?: string;
  @property({ type: String, attribute: 'aria-labelledby' }) ariaLabelledBy?: string;

  private onSubmit(e: Event) {
    e.preventDefault()
    this.dispatchEvent(new Event('submit', { bubbles: true }))
  }

  render() {
    return html`
      <form
        role="form"
        aria-label=${this.ariaLabel || ''}
        aria-labelledby=${this.ariaLabelledBy || ''}
        @submit=${this.onSubmit}
      >
        <slot></slot>
      </form>
    `
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-form': MzForm } }

