import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import './index.js'

const meta: Meta = { title: 'Forms/Select' }
export default meta
type Story = StoryObj

export const Basic: Story = {
  render: () => html`
    <mz-select label="Country">
      <mz-option value="us" label="United States"></mz-option>
      <mz-option value="ca" label="Canada"></mz-option>
    </mz-select>
  `,
}

