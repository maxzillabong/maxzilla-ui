import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import './index.js'

const meta: Meta = { title: 'Overlays/Toast' }
export default meta
type Story = StoryObj

export const Basic: Story = {
  render: () => html`
    <mz-toast id="t"></mz-toast>
    <button @click=${() => (document.getElementById('t') as any)?.show('Saved!')}>Show toast</button>
  `
}

