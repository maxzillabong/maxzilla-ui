import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-container')
export class MzContainer extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host { display: block; }
      .container { width: 100%; }
    `
  ]

  @property({ type: String }) size: 'sm' | 'md' | 'lg' | 'xl' = 'lg'
  @property({ type: Boolean }) centered = false

  render() {
    const max = this.size === 'sm' ? '40rem' : this.size === 'md' ? '48rem' : this.size === 'xl' ? '80rem' : '64rem'
    const style = `max-width:${max};${this.centered ? 'margin-inline:auto;' : ''}`
    return html`<div class="container" style=${style}><slot></slot></div>`
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-container': MzContainer } }

