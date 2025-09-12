import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import './index.js'

const meta: Meta = { title: 'Data Display/Pagination' }
export default meta
type Story = StoryObj

export const Basic: Story = { render: () => html`<mz-pagination total="120" page-size="10" current="1"></mz-pagination>` }

