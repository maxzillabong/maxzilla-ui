import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { baseStyles } from '../../styles/base.js'

@customElement('mz-stack')
export class MzStack extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host { display: block; }
      .stack { display: flex; }
    `
  ]

  @property({ type: String }) direction: 'horizontal' | 'vertical' = 'vertical'
  @property({ type: String }) spacing: 'sm' | 'md' | 'lg' = 'md'
  @property({ type: String }) align: 'start' | 'center' | 'end' = 'start'
  @property({ type: String }) justify: 'start' | 'center' | 'end' | 'between' = 'start'

  render() {
    const isRow = this.direction === 'horizontal'

    // Gap spacing using design tokens
    // Original values: sm: 0.5rem, md: 1rem, lg: 1.5rem
    const gap = this.spacing === 'sm'
      ? 'var(--mz-space-2)' // 0.5rem
      : this.spacing === 'lg'
      ? 'var(--mz-space-6)' // 1.5rem
      : 'var(--mz-space-4)' // 1rem (md)

    const alignMap: Record<string, string> = { start: 'flex-start', center: 'center', end: 'flex-end' }
    const justifyMap: Record<string, string> = { start: 'flex-start', center: 'center', end: 'flex-end', between: 'space-between' }
    const style = `flex-direction:${isRow ? 'row' : 'column'};gap:${gap};align-items:${alignMap[this.align]};justify-content:${justifyMap[this.justify]}`
    return html`<div class="stack" style=${style} role="group"><slot></slot></div>`
  }
}

declare global { interface HTMLElementTagNameMap { 'mz-stack': MzStack } }

