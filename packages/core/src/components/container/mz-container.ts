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
    // Container size mapping using design tokens
    // Original values: sm: 40rem, md: 48rem, lg: 64rem, xl: 80rem
    const max = this.size === 'sm'
      ? 'var(--mz-container-sm)' // 40rem
      : this.size === 'md'
      ? 'var(--mz-container-md)' // 48rem
      : this.size === 'xl'
      ? 'var(--mz-container-xl)' // 80rem
      : 'var(--mz-container-lg)' // 64rem (lg)

    const style = `max-width:${max};${this.centered ? 'margin-inline:auto;' : ''}`
    return html`<div class="container" style=${style}><slot></slot></div>`
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-container': MzContainer } }

