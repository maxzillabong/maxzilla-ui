import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import './index.js'

const meta: Meta = { title: 'Display/Tooltip' }
export default meta
type Story = StoryObj

export const Basic: Story = { render: () => html`<mz-tooltip text="Hello"><button>Hover me</button></mz-tooltip>` }

