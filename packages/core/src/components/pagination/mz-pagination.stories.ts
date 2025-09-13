import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import './mz-pagination.js'

const meta: Meta = { title: 'Navigation/Pagination' }
export default meta
type Story = StoryObj

export const Basic: Story = { render: () => html`<mz-pagination total="120" page-size="10" current="1"></mz-pagination>` }