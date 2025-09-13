import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
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

  private onSubmit(e: Event) {
    e.preventDefault()
    this.dispatchEvent(new Event('submit', { bubbles: true }))
  }

  render() {
    return html`
      <form @submit=${this.onSubmit}>
        <slot></slot>
      </form>
    `
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-form': MzForm } }

