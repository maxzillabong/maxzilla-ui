import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import './index.js'

const meta: Meta = {
  title: 'Navigation/Accordion',
}
export default meta
type Story = StoryObj

export const Basic: Story = {
  render: () => html`
    <mz-accordion>
      <mz-accordion-item header="Section 1">One content</mz-accordion-item>
      <mz-accordion-item header="Section 2">Two content</mz-accordion-item>
    </mz-accordion>
  `,
}

