import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './mz-skeleton.js';

const meta: Meta = {
  title: 'Feedback/Skeleton',
  component: 'mz-skeleton',
  tags: ['autodocs'],
  argTypes: {
    effect: {
      control: 'select',
      options: ['sheen', 'pulse'],
      description: 'Animation effect for the skeleton',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'sheen' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `A skeleton loading component for showing content placeholders while data is being loaded. Provides visual feedback with shimmer or pulse animations.

## Features

- **Two Animation Effects**: Sheen (shimmer) and pulse effects
- **Customizable Appearance**: Control colors and border radius
- **Flexible Sizing**: Adapts to container width and custom heights
- **Accessible**: Respects prefers-reduced-motion
- **Lightweight**: Pure CSS animations

## CSS Parts

- **base**: The component's base wrapper
- **indicator**: The skeleton indicator element

## CSS Properties

- **--border-radius**: Border radius of the skeleton
- **--color**: Background color of the skeleton
- **--sheen-color**: Color of the sheen effect`
      }
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    effect: 'sheen'
  },
  render: (args) => html`
    <mz-skeleton effect=${args.effect}></mz-skeleton>
  `
};

export const Effects: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <h4 style="margin: 0 0 0.5rem 0;">Sheen Effect (Default)</h4>
        <mz-skeleton effect="sheen"></mz-skeleton>
      </div>

      <div>
        <h4 style="margin: 0 0 0.5rem 0;">Pulse Effect</h4>
        <mz-skeleton effect="pulse"></mz-skeleton>
      </div>
    </div>
  `
};

export const TextPlaceholder: Story = {
  render: () => html`
    <div style="max-width: 500px;">
      <mz-skeleton style="height: 2rem; margin-bottom: 1rem;"></mz-skeleton>
      <mz-skeleton style="height: 1rem; margin-bottom: 0.5rem;"></mz-skeleton>
      <mz-skeleton style="height: 1rem; margin-bottom: 0.5rem;"></mz-skeleton>
      <mz-skeleton style="height: 1rem; width: 80%;"></mz-skeleton>
    </div>
  `
};

export const CardSkeleton: Story = {
  render: () => html`
    <div style="
      max-width: 400px;
      padding: 1.5rem;
      border: 1px solid var(--mz-color-border);
      border-radius: 12px;
    ">
      <!-- Image placeholder -->
      <mz-skeleton style="height: 200px; margin-bottom: 1rem;"></mz-skeleton>

      <!-- Title -->
      <mz-skeleton style="height: 1.5rem; margin-bottom: 0.5rem;"></mz-skeleton>

      <!-- Description -->
      <mz-skeleton style="height: 1rem; margin-bottom: 0.5rem;"></mz-skeleton>
      <mz-skeleton style="height: 1rem; margin-bottom: 0.5rem;"></mz-skeleton>
      <mz-skeleton style="height: 1rem; width: 60%; margin-bottom: 1rem;"></mz-skeleton>

      <!-- Actions -->
      <div style="display: flex; gap: 0.5rem;">
        <mz-skeleton style="height: 2.5rem; width: 100px;"></mz-skeleton>
        <mz-skeleton style="height: 2.5rem; width: 100px;"></mz-skeleton>
      </div>
    </div>
  `
};

export const ListSkeleton: Story = {
  render: () => html`
    <div style="max-width: 600px;">
      ${[1, 2, 3, 4].map(() => html`
        <div style="
          display: flex;
          gap: 1rem;
          padding: 1rem;
          border-bottom: 1px solid var(--mz-color-border);
        ">
          <!-- Avatar -->
          <mz-skeleton style="
            width: 48px;
            height: 48px;
            border-radius: 50%;
            flex-shrink: 0;
          "></mz-skeleton>

          <!-- Content -->
          <div style="flex: 1;">
            <mz-skeleton style="height: 1.25rem; width: 150px; margin-bottom: 0.5rem;"></mz-skeleton>
            <mz-skeleton style="height: 1rem; margin-bottom: 0.25rem;"></mz-skeleton>
            <mz-skeleton style="height: 1rem; width: 80%;"></mz-skeleton>
          </div>
        </div>
      `)}
    </div>
  `
};

export const TableSkeleton: Story = {
  render: () => html`
    <div style="
      max-width: 800px;
      border: 1px solid var(--mz-color-border);
      border-radius: 8px;
      overflow: hidden;
    ">
      <!-- Header -->
      <div style="
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr;
        gap: 1rem;
        padding: 1rem;
        background: var(--mz-color-surface-secondary);
        border-bottom: 1px solid var(--mz-color-border);
      ">
        <mz-skeleton style="height: 1rem;"></mz-skeleton>
        <mz-skeleton style="height: 1rem;"></mz-skeleton>
        <mz-skeleton style="height: 1rem;"></mz-skeleton>
        <mz-skeleton style="height: 1rem;"></mz-skeleton>
      </div>

      <!-- Rows -->
      ${[1, 2, 3, 4, 5].map(() => html`
        <div style="
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 1rem;
          padding: 1rem;
          border-bottom: 1px solid var(--mz-color-border);
        ">
          <mz-skeleton style="height: 1rem;"></mz-skeleton>
          <mz-skeleton style="height: 1rem;"></mz-skeleton>
          <mz-skeleton style="height: 1rem;"></mz-skeleton>
          <mz-skeleton style="height: 1rem;"></mz-skeleton>
        </div>
      `)}
    </div>
  `
};

export const FormSkeleton: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <!-- Label -->
      <mz-skeleton style="height: 1rem; width: 100px; margin-bottom: 0.5rem;"></mz-skeleton>
      <!-- Input -->
      <mz-skeleton style="height: 2.5rem; margin-bottom: 1.5rem;"></mz-skeleton>

      <!-- Label -->
      <mz-skeleton style="height: 1rem; width: 120px; margin-bottom: 0.5rem;"></mz-skeleton>
      <!-- Input -->
      <mz-skeleton style="height: 2.5rem; margin-bottom: 1.5rem;"></mz-skeleton>

      <!-- Label -->
      <mz-skeleton style="height: 1rem; width: 80px; margin-bottom: 0.5rem;"></mz-skeleton>
      <!-- Textarea -->
      <mz-skeleton style="height: 6rem; margin-bottom: 1.5rem;"></mz-skeleton>

      <!-- Submit button -->
      <mz-skeleton style="height: 2.5rem; width: 120px;"></mz-skeleton>
    </div>
  `
};

export const ProfileSkeleton: Story = {
  render: () => html`
    <div style="
      max-width: 300px;
      padding: 2rem;
      border: 1px solid var(--mz-color-border);
      border-radius: 12px;
      text-align: center;
    ">
      <!-- Avatar -->
      <mz-skeleton style="
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin: 0 auto 1rem;
      "></mz-skeleton>

      <!-- Name -->
      <mz-skeleton style="height: 1.5rem; width: 150px; margin: 0 auto 0.5rem;"></mz-skeleton>

      <!-- Title -->
      <mz-skeleton style="height: 1rem; width: 100px; margin: 0 auto 1.5rem;"></mz-skeleton>

      <!-- Stats -->
      <div style="display: flex; justify-content: space-around; margin-bottom: 1.5rem;">
        <div>
          <mz-skeleton style="height: 1.5rem; width: 40px; margin-bottom: 0.25rem;"></mz-skeleton>
          <mz-skeleton style="height: 0.875rem; width: 50px;"></mz-skeleton>
        </div>
        <div>
          <mz-skeleton style="height: 1.5rem; width: 40px; margin-bottom: 0.25rem;"></mz-skeleton>
          <mz-skeleton style="height: 0.875rem; width: 50px;"></mz-skeleton>
        </div>
        <div>
          <mz-skeleton style="height: 1.5rem; width: 40px; margin-bottom: 0.25rem;"></mz-skeleton>
          <mz-skeleton style="height: 0.875rem; width: 50px;"></mz-skeleton>
        </div>
      </div>

      <!-- Actions -->
      <mz-skeleton style="height: 2.5rem;"></mz-skeleton>
    </div>
  `
};

export const MediaSkeleton: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; max-width: 800px;">
      ${[1, 2, 3, 4].map(() => html`
        <div>
          <!-- Thumbnail -->
          <mz-skeleton style="
            height: 150px;
            margin-bottom: 0.5rem;
            border-radius: 8px;
          "></mz-skeleton>

          <!-- Title -->
          <mz-skeleton style="height: 1rem; margin-bottom: 0.5rem;"></mz-skeleton>

          <!-- Subtitle -->
          <mz-skeleton style="height: 0.875rem; width: 70%;"></mz-skeleton>
        </div>
      `)}
    </div>
  `
};

export const CustomColors: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <h4 style="margin: 0 0 0.5rem 0;">Default</h4>
        <mz-skeleton></mz-skeleton>
      </div>

      <div>
        <h4 style="margin: 0 0 0.5rem 0;">Blue Theme</h4>
        <mz-skeleton style="
          --color: #dbeafe;
          --sheen-color: #bfdbfe;
        "></mz-skeleton>
      </div>

      <div>
        <h4 style="margin: 0 0 0.5rem 0;">Green Theme</h4>
        <mz-skeleton style="
          --color: #d1fae5;
          --sheen-color: #a7f3d0;
        "></mz-skeleton>
      </div>

      <div>
        <h4 style="margin: 0 0 0.5rem 0;">Purple Theme</h4>
        <mz-skeleton style="
          --color: #e9d5ff;
          --sheen-color: #d8b4fe;
        "></mz-skeleton>
      </div>

      <div style="background: #1f2937; padding: 1rem; border-radius: 8px;">
        <h4 style="margin: 0 0 0.5rem 0; color: white;">Dark Theme</h4>
        <mz-skeleton style="
          --color: #374151;
          --sheen-color: #4b5563;
        "></mz-skeleton>
      </div>
    </div>
  `
};

export const BorderRadius: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <h4 style="margin: 0 0 0.5rem 0;">Square</h4>
        <mz-skeleton style="--border-radius: 0; height: 3rem;"></mz-skeleton>
      </div>

      <div>
        <h4 style="margin: 0 0 0.5rem 0;">Rounded (Default)</h4>
        <mz-skeleton style="height: 3rem;"></mz-skeleton>
      </div>

      <div>
        <h4 style="margin: 0 0 0.5rem 0;">More Rounded</h4>
        <mz-skeleton style="--border-radius: 12px; height: 3rem;"></mz-skeleton>
      </div>

      <div>
        <h4 style="margin: 0 0 0.5rem 0;">Pill</h4>
        <mz-skeleton style="--border-radius: 1.5rem; height: 3rem;"></mz-skeleton>
      </div>

      <div>
        <h4 style="margin: 0 0 0.5rem 0;">Circle</h4>
        <mz-skeleton style="--border-radius: 50%; width: 100px; height: 100px;"></mz-skeleton>
      </div>
    </div>
  `
};

export const ComplexLayout: Story = {
  render: () => html`
    <div style="max-width: 1000px;">
      <!-- Header -->
      <div style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        border-bottom: 1px solid var(--mz-color-border);
        margin-bottom: 2rem;
      ">
        <mz-skeleton style="height: 2rem; width: 150px;"></mz-skeleton>
        <div style="display: flex; gap: 1rem;">
          <mz-skeleton style="height: 2rem; width: 80px;"></mz-skeleton>
          <mz-skeleton style="height: 2rem; width: 80px;"></mz-skeleton>
          <mz-skeleton style="height: 2rem; width: 80px;"></mz-skeleton>
        </div>
      </div>

      <!-- Content -->
      <div style="display: grid; grid-template-columns: 250px 1fr; gap: 2rem;">
        <!-- Sidebar -->
        <div>
          <mz-skeleton style="height: 2rem; margin-bottom: 1rem;"></mz-skeleton>
          ${[1, 2, 3, 4, 5].map(() => html`
            <mz-skeleton style="height: 1.5rem; margin-bottom: 0.5rem;"></mz-skeleton>
          `)}
        </div>

        <!-- Main Content -->
        <div>
          <!-- Hero -->
          <mz-skeleton style="height: 200px; margin-bottom: 2rem;"></mz-skeleton>

          <!-- Grid -->
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
            ${[1, 2, 3, 4, 5, 6].map(() => html`
              <div style="
                padding: 1rem;
                border: 1px solid var(--mz-color-border);
                border-radius: 8px;
              ">
                <mz-skeleton style="height: 100px; margin-bottom: 0.5rem;"></mz-skeleton>
                <mz-skeleton style="height: 1rem; margin-bottom: 0.5rem;"></mz-skeleton>
                <mz-skeleton style="height: 0.875rem; width: 70%;"></mz-skeleton>
              </div>
            `)}
          </div>
        </div>
      </div>
    </div>
  `
};