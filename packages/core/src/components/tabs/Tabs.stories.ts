import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import './index.js'

const meta: Meta = { title: 'Display/Tabs' }
export default meta
type Story = StoryObj

export const Basic: Story = { render: () => html`<mz-tabs><mz-tab label="One">First</mz-tab><mz-tab label="Two">Second</mz-tab></mz-tabs>` }

