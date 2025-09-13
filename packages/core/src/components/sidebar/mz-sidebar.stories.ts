import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import './mz-sidebar.js'

const meta: Meta = {
  title: 'Navigation/Sidebar',
  component: 'mz-sidebar',
  parameters: {
    layout: 'fullscreen',
  },
}
export default meta

type Story = StoryObj

export const Basic: Story = {
  render: () => html`
    <div style="display: flex; height: 400px;">
      <mz-sidebar aria-label="Main navigation">
        <div slot="header">Navigation</div>
        <div slot="menu">
          <a href="#" style="display: block; margin-bottom: 0.5rem;">Dashboard</a>
          <a href="#" style="display: block; margin-bottom: 0.5rem;">Components</a>
          <a href="#" style="display: block; margin-bottom: 0.5rem;">Documentation</a>
          <a href="#" style="display: block; margin-bottom: 0.5rem;">Settings</a>
        </div>
      </mz-sidebar>
      <div style="flex: 1; padding: 1rem; background: #f8f9fa;">
        <h2>Main Content Area</h2>
        <p>This is the main content area next to the sidebar.</p>
      </div>
    </div>
  `
}

export const WithSections: Story = {
  render: () => html`
    <div style="display: flex; height: 500px;">
      <mz-sidebar aria-label="Navigation with sections">
        <div slot="header">My App</div>
        <div slot="menu">
          <div style="font-weight: bold; margin-bottom: 0.5rem; color: #666; font-size: 0.875rem;">MAIN</div>
          <a href="#" style="display: block; margin-bottom: 0.5rem;">Dashboard</a>
          <a href="#" style="display: block; margin-bottom: 0.5rem;">Analytics</a>

          <div style="font-weight: bold; margin: 1rem 0 0.5rem 0; color: #666; font-size: 0.875rem;">COMPONENTS</div>
          <a href="#" style="display: block; margin-bottom: 0.5rem;">Button</a>
          <a href="#" style="display: block; margin-bottom: 0.5rem;">Input</a>
          <a href="#" style="display: block; margin-bottom: 0.5rem;">Modal</a>

          <div style="font-weight: bold; margin: 1rem 0 0.5rem 0; color: #666; font-size: 0.875rem;">SETTINGS</div>
          <a href="#" style="display: block; margin-bottom: 0.5rem;">Profile</a>
          <a href="#" style="display: block; margin-bottom: 0.5rem;">Preferences</a>
        </div>
      </mz-sidebar>
      <div style="flex: 1; padding: 1rem; background: #f8f9fa;">
        <h2>Content Area</h2>
        <p>Content displays alongside the organized sidebar navigation.</p>
      </div>
    </div>
  `
}