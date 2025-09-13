import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import './mz-tooltip.js'

const meta: Meta = { title: 'Overlays/Tooltip' }
export default meta
type Story = StoryObj

export const Basic: Story = { render: () => html`<mz-tooltip text="Hello"><button>Hover me</button></mz-tooltip>` }