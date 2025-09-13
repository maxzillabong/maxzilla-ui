import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import './mz-navbar.js'

const meta: Meta = {
  title: 'Navigation/Navbar',
  component: 'mz-navbar',
  parameters: {
    layout: 'fullscreen',
  },
}
export default meta

type Story = StoryObj

export const Basic: Story = {
  render: () => html`
    <mz-navbar>
      <div slot="brand">
        <h2 style="margin: 0; font-size: 1.25rem; font-weight: bold;">Maxzilla UI</h2>
      </div>
      <div slot="menu">
        <a href="#" style="color: inherit; text-decoration: none; padding: 0.5rem 1rem; border-radius: 0.375rem; transition: background-color 0.2s;">Home</a>
        <a href="#" style="color: inherit; text-decoration: none; padding: 0.5rem 1rem; border-radius: 0.375rem; transition: background-color 0.2s;">Components</a>
        <a href="#" style="color: inherit; text-decoration: none; padding: 0.5rem 1rem; border-radius: 0.375rem; transition: background-color 0.2s;">Documentation</a>
        <a href="#" style="color: inherit; text-decoration: none; padding: 0.5rem 1rem; border-radius: 0.375rem; transition: background-color 0.2s;">GitHub</a>
      </div>
    </mz-navbar>
  `
}

export const WithActions: Story = {
  render: () => html`
    <mz-navbar>
      <div slot="brand">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <div style="width: 2rem; height: 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 0.375rem;"></div>
          <h2 style="margin: 0; font-size: 1.25rem; font-weight: bold;">MyApp</h2>
        </div>
      </div>
      <div slot="menu">
        <a href="#" style="color: inherit; text-decoration: none; padding: 0.5rem 1rem;">Dashboard</a>
        <a href="#" style="color: inherit; text-decoration: none; padding: 0.5rem 1rem;">Projects</a>
        <a href="#" style="color: inherit; text-decoration: none; padding: 0.5rem 1rem;">Team</a>
      </div>
      <div slot="actions">
        <button style="background: none; border: 1px solid #e5e7eb; padding: 0.5rem 1rem; border-radius: 0.375rem; cursor: pointer;">
          Sign In
        </button>
        <button style="background: #3b82f6; color: white; border: none; padding: 0.5rem 1rem; border-radius: 0.375rem; cursor: pointer;">
          Get Started
        </button>
      </div>
    </mz-navbar>
  `
}

export const Minimal: Story = {
  render: () => html`
    <mz-navbar>
      <div slot="brand">
        <h2 style="margin: 0; font-size: 1.125rem;">Brand</h2>
      </div>
      <div slot="actions">
        <button style="background: none; border: none; padding: 0.5rem; cursor: pointer; border-radius: 0.375rem;">
          ☰
        </button>
      </div>
    </mz-navbar>
  `
}