import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import './mz-loading.js'

const meta: Meta = { title: 'Feedback/Loading' }
export default meta
type Story = StoryObj

export const Inline: Story = { render: () => html`<mz-loading></mz-loading>` }
export const Overlay: Story = { render: () => html`<mz-loading overlay></mz-loading>` }