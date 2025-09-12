import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import './index.js'

const meta: Meta = { title: 'Feedback/Alert' }
export default meta
type Story = StoryObj

export const Variants: Story = {
  render: () => html`
    <div style="display:grid;gap:.5rem">
      <mz-alert variant="success">Saved successfully</mz-alert>
      <mz-alert variant="info">Info message</mz-alert>
      <mz-alert variant="warning">Be careful</mz-alert>
      <mz-alert variant="error" dismissible>Error occurred</mz-alert>
    </div>
  `,
}

