import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './mz-spinner.js';

const meta: Meta = {
  title: 'Feedback/Spinner',
  component: 'mz-spinner',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'xlarge'],
      description: 'Size of the spinner',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' }
      }
    },
    label: {
      control: 'text',
      description: 'Text to show alongside the spinner',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `A simple and elegant loading spinner component for indicating loading states. Supports multiple sizes and optional labels.

## Features

- **Multiple Sizes**: Four predefined sizes from small to extra large
- **Optional Label**: Display text alongside the spinner
- **Smooth Animation**: CSS-based rotation animation
- **Customizable**: Easily style with CSS custom properties
- **Accessible**: Includes proper ARIA attributes
- **Reduced Motion**: Respects prefers-reduced-motion

## Slots

- **default**: Additional content to show alongside the spinner

## CSS Parts

- **base**: The component's base wrapper
- **spinner**: The spinner element
- **label**: The spinner's label

## CSS Properties

- **--size**: Size of the spinner
- **--track-width**: Width of the spinner track
- **--track-color**: Color of the spinner track
- **--indicator-color**: Color of the spinner indicator
- **--speed**: Animation speed (duration of one rotation)`
      }
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    size: 'medium'
  },
  render: (args) => html`
    <mz-spinner
      size=${args.size}
      label=${args.label}
    ></mz-spinner>
  `
};

export const WithLabel: Story = {
  args: {
    size: 'medium',
    label: 'Loading...'
  },
  render: (args) => html`
    <mz-spinner
      size=${args.size}
      label=${args.label}
    ></mz-spinner>
  `
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 2rem;">
      <mz-spinner size="small" label="Small"></mz-spinner>
      <mz-spinner size="medium" label="Medium"></mz-spinner>
      <mz-spinner size="large" label="Large"></mz-spinner>
      <mz-spinner size="xlarge" label="Extra Large"></mz-spinner>
    </div>
  `
};

export const LoadingStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div style="display: flex; align-items: center; gap: 1rem;">
        <mz-spinner size="small"></mz-spinner>
        <span>Loading user data...</span>
      </div>

      <div style="display: flex; align-items: center; gap: 1rem;">
        <mz-spinner size="medium" label="Processing payment"></mz-spinner>
      </div>

      <div style="display: flex; align-items: center; gap: 1rem;">
        <mz-spinner size="large"></mz-spinner>
        <div>
          <div>Uploading files</div>
          <div style="font-size: 0.875rem; color: var(--mz-color-text-secondary);">This may take a few moments...</div>
        </div>
      </div>
    </div>
  `
};

export const Colors: Story = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 2rem;">
      <mz-spinner
        size="medium"
        label="Primary"
        style="--indicator-color: var(--mz-color-primary);"
      ></mz-spinner>

      <mz-spinner
        size="medium"
        label="Success"
        style="--indicator-color: var(--mz-color-success);"
      ></mz-spinner>

      <mz-spinner
        size="medium"
        label="Warning"
        style="--indicator-color: var(--mz-color-warning);"
      ></mz-spinner>

      <mz-spinner
        size="medium"
        label="Danger"
        style="--indicator-color: var(--mz-color-danger);"
      ></mz-spinner>
    </div>
  `
};

export const Speeds: Story = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 2rem;">
      <mz-spinner
        size="medium"
        label="Slow (3s)"
        style="--speed: 3s;"
      ></mz-spinner>

      <mz-spinner
        size="medium"
        label="Normal (2s)"
        style="--speed: 2s;"
      ></mz-spinner>

      <mz-spinner
        size="medium"
        label="Fast (1s)"
        style="--speed: 1s;"
      ></mz-spinner>

      <mz-spinner
        size="medium"
        label="Very Fast (0.5s)"
        style="--speed: 0.5s;"
      ></mz-spinner>
    </div>
  `
};

export const CustomStyles: Story = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 2rem;">
      <mz-spinner
        size="large"
        label="Thick Track"
        style="
          --track-width: 4px;
          --indicator-color: var(--mz-color-primary);
        "
      ></mz-spinner>

      <mz-spinner
        size="large"
        label="Thin Track"
        style="
          --track-width: 1px;
          --indicator-color: var(--mz-color-success);
        "
      ></mz-spinner>

      <mz-spinner
        size="large"
        label="Custom Colors"
        style="
          --track-color: rgba(99, 102, 241, 0.2);
          --indicator-color: #6366f1;
          --track-width: 3px;
        "
      ></mz-spinner>
    </div>
  `
};

export const InlineUsage: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
      <button style="
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 1rem;
        background: var(--mz-color-primary);
        color: white;
        border: none;
        border-radius: 6px;
        cursor: not-allowed;
        opacity: 0.8;
      ">
        <mz-spinner size="small" style="--indicator-color: white; --track-color: rgba(255,255,255,0.3);"></mz-spinner>
        Saving...
      </button>

      <div style="
        padding: 1rem;
        border: 1px solid var(--mz-color-border);
        border-radius: 8px;
        text-align: center;
      ">
        <mz-spinner size="medium"></mz-spinner>
        <p style="margin-top: 1rem; color: var(--mz-color-text-secondary);">
          Loading content...
        </p>
      </div>

      <div style="
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        background: var(--mz-color-surface-secondary);
        border-radius: 8px;
      ">
        <span>Fetching data</span>
        <mz-spinner size="small"></mz-spinner>
      </div>
    </div>
  `
};

export const LoadingCard: Story = {
  render: () => html`
    <div style="
      width: 300px;
      padding: 2rem;
      border: 1px solid var(--mz-color-border);
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    ">
      <mz-spinner size="large"></mz-spinner>
      <h3 style="margin: 0;">Processing Request</h3>
      <p style="margin: 0; text-align: center; color: var(--mz-color-text-secondary); font-size: 0.875rem;">
        Please wait while we process your request. This may take a few seconds.
      </p>
    </div>
  `
};

export const FullPageLoader: Story = {
  render: () => html`
    <div style="
      position: relative;
      width: 100%;
      height: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      background: linear-gradient(135deg, var(--mz-color-surface) 0%, var(--mz-color-surface-secondary) 100%);
      border-radius: 12px;
    ">
      <mz-spinner size="xlarge" style="--indicator-color: var(--mz-color-primary);"></mz-spinner>
      <div style="text-align: center;">
        <h2 style="margin: 0 0 0.5rem 0;">Loading Application</h2>
        <p style="margin: 0; color: var(--mz-color-text-secondary);">
          Please wait while we prepare everything for you...
        </p>
      </div>
    </div>
  `
};

export const WithSlotContent: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <mz-spinner size="medium">
        <span style="margin-left: 0.5rem;">Custom slot content</span>
      </mz-spinner>

      <mz-spinner size="large">
        <div style="margin-left: 0.5rem;">
          <div>Uploading: document.pdf</div>
          <div style="font-size: 0.75rem; color: var(--mz-color-text-secondary);">45% complete</div>
        </div>
      </mz-spinner>
    </div>
  `
};