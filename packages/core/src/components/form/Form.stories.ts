import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import './index.js'
import '../../input/index.js'
import '../../button/index.js'

const meta: Meta = { title: 'Forms/Form' }
export default meta
type Story = StoryObj

export const Basic: Story = {
  render: () => html`
    <mz-form>
      <mz-form-group>
        <mz-input label="First Name"></mz-input>
        <mz-input label="Last Name"></mz-input>
      </mz-form-group>
      <mz-form-actions>
        <mz-button variant="ghost" type="reset">Reset</mz-button>
        <mz-button variant="primary" type="submit">Submit</mz-button>
      </mz-form-actions>
    </mz-form>
  `,
}

