import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import './mz-breadcrumb.js'
import '../breadcrumb/mz-breadcrumb-item.js'

const meta: Meta = {
  title: 'Navigation/Breadcrumb',
  component: 'mz-breadcrumb',
}
export default meta

type Story = StoryObj

export const Basic: Story = {
  render: () => html`
    <mz-breadcrumb>
      <mz-breadcrumb-item href="/">Home</mz-breadcrumb-item>
      <mz-breadcrumb-item href="/components">Components</mz-breadcrumb-item>
      <mz-breadcrumb-item current>Breadcrumb</mz-breadcrumb-item>
    </mz-breadcrumb>
  `
}

export const LongPath: Story = {
  render: () => html`
    <mz-breadcrumb>
      <mz-breadcrumb-item href="/">Home</mz-breadcrumb-item>
      <mz-breadcrumb-item href="/docs">Documentation</mz-breadcrumb-item>
      <mz-breadcrumb-item href="/docs/components">Components</mz-breadcrumb-item>
      <mz-breadcrumb-item href="/docs/components/navigation">Navigation</mz-breadcrumb-item>
      <mz-breadcrumb-item current>Breadcrumb</mz-breadcrumb-item>
    </mz-breadcrumb>
  `
}

export const WithIcons: Story = {
  render: () => html`
    <mz-breadcrumb>
      <mz-breadcrumb-item href="/">🏠 Home</mz-breadcrumb-item>
      <mz-breadcrumb-item href="/dashboard">📊 Dashboard</mz-breadcrumb-item>
      <mz-breadcrumb-item href="/dashboard/analytics">📈 Analytics</mz-breadcrumb-item>
      <mz-breadcrumb-item current>📋 Reports</mz-breadcrumb-item>
    </mz-breadcrumb>
  `
}