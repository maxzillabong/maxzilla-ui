import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import './mz-toast-container.js'
import '../toast/mz-toast.js'

const meta: Meta = {
  title: 'Feedback/Toast Container',
  component: 'mz-toast-container',
  parameters: {
    layout: 'fullscreen',
  },
}
export default meta

type Story = StoryObj

export const Basic: Story = {
  render: () => html`
    <div style="position: relative; height: 400px; background: #f8f9fa; padding: 2rem;">
      <h3>Toast Container Demo</h3>
      <p>Click buttons to show different toast types:</p>

      <div style="display: flex; gap: 1rem; margin: 1rem 0;">
        <button @click=${() => showToast('success', 'Success! Operation completed.')}
                style="background: #10b981; color: white; border: none; padding: 0.5rem 1rem; border-radius: 0.375rem; cursor: pointer;">
          Show Success
        </button>
        <button @click=${() => showToast('error', 'Error! Something went wrong.')}
                style="background: #ef4444; color: white; border: none; padding: 0.5rem 1rem; border-radius: 0.375rem; cursor: pointer;">
          Show Error
        </button>
        <button @click=${() => showToast('warning', 'Warning! Please check your input.')}
                style="background: #f59e0b; color: white; border: none; padding: 0.5rem 1rem; border-radius: 0.375rem; cursor: pointer;">
          Show Warning
        </button>
        <button @click=${() => showToast('info', 'Info: New updates available.')}
                style="background: #3b82f6; color: white; border: none; padding: 0.5rem 1rem; border-radius: 0.375rem; cursor: pointer;">
          Show Info
        </button>
      </div>

      <mz-toast-container duration="4000"></mz-toast-container>
    </div>
  `
}

function showToast(variant: string, message: string) {
  const container = document.querySelector('mz-toast-container');
  if (container) {
    const toast = document.createElement('mz-toast');
    toast.setAttribute('variant', variant);
    toast.setAttribute('message', message);
    container.appendChild(toast);
  }
}

export const AutoDismiss: Story = {
  render: () => html`
    <div style="position: relative; height: 300px; background: #f8f9fa; padding: 2rem;">
      <h3>Auto-dismiss Toast (2 seconds)</h3>
      <button @click=${() => {
        const container = document.querySelector('mz-toast-container');
        if (container) {
          const toast = document.createElement('mz-toast');
          toast.setAttribute('variant', 'success');
          toast.setAttribute('message', 'This toast will disappear in 2 seconds');
          container.appendChild(toast);
        }
      }} style="background: #10b981; color: white; border: none; padding: 0.5rem 1rem; border-radius: 0.375rem; cursor: pointer;">
        Show Auto-dismiss Toast
      </button>

      <mz-toast-container duration="2000"></mz-toast-container>
    </div>
  `
}