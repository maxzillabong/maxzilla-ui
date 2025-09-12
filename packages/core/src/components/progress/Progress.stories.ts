import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import './index.js'

const meta: Meta = { title: 'Feedback/Progress' }
export default meta
type Story = StoryObj

export const Basic: Story = { render: () => html`<mz-progress value="60" max="100" label="Upload" show-value></mz-progress>` }

