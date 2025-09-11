import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../src/components/badge/mz-badge.js';

const meta: Meta = {
  title: 'Components/Badge',
  component: 'mz-badge',
  parameters: {
    docs: {
      description: {
        component: 'A versatile badge component for displaying status, counts, labels, and notifications. Features multiple variants and sizes with clean, modern styling.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'destructive', 'outline', 'ghost'],
      description: 'Visual style variant of the badge',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Size of the badge',
    },
    dot: {
      control: { type: 'boolean' },
      description: 'Whether to display as a small dot indicator',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    dot: false,
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <mz-badge
      variant=${args.variant}
      size=${args.size}
      ?dot=${args.dot}
    >
      ${args.dot ? '' : 'Badge'}
    </mz-badge>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
      <mz-badge variant="primary">Primary</mz-badge>
      <mz-badge variant="secondary">Secondary</mz-badge>
      <mz-badge variant="success">Success</mz-badge>
      <mz-badge variant="warning">Warning</mz-badge>
      <mz-badge variant="destructive">Error</mz-badge>
      <mz-badge variant="outline">Outline</mz-badge>
      <mz-badge variant="ghost">Ghost</mz-badge>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Different visual variants of the badge component for various use cases.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
      <mz-badge size="xs">Extra Small</mz-badge>
      <mz-badge size="sm">Small</mz-badge>
      <mz-badge size="md">Medium</mz-badge>
      <mz-badge size="lg">Large</mz-badge>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Different sizes available for the badge component.',
      },
    },
  },
};

export const DotIndicators: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
      <mz-badge variant="primary" dot></mz-badge>
      <mz-badge variant="success" dot></mz-badge>
      <mz-badge variant="warning" dot></mz-badge>
      <mz-badge variant="destructive" dot></mz-badge>
      <mz-badge variant="secondary" dot></mz-badge>
    </div>
    <p style="margin-top: 1rem; color: #64748B; font-size: 0.875rem;">
      Dot indicators are perfect for status indicators and notifications.
    </p>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Small dot indicators for status and notification purposes.',
      },
    },
  },
};

export const WithContent: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
        <mz-badge variant="primary">New</mz-badge>
        <mz-badge variant="success">✓ Verified</mz-badge>
        <mz-badge variant="warning">⚠ Beta</mz-badge>
        <mz-badge variant="destructive">⚡ Critical</mz-badge>
      </div>
      
      <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
        <mz-badge variant="secondary">v2.1.0</mz-badge>
        <mz-badge variant="outline">Draft</mz-badge>
        <mz-badge variant="primary">99+</mz-badge>
        <mz-badge variant="success">Online</mz-badge>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Badges with different types of content including text, numbers, and icons.',
      },
    },
  },
};

export const InContext: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 500px;">
      <!-- Navigation item with badge -->
      <div style="display: flex; align-items: center; justify-content: between; padding: 0.75rem 1rem; background: #F9FAFB; border-radius: 0.5rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="16,10 12,14 8,10"/>
            <line x1="12" y1="14" x2="12" y2="3"/>
          </svg>
          <span style="font-weight: 500;">Downloads</span>
        </div>
        <mz-badge variant="primary" size="sm">12</mz-badge>
      </div>

      <!-- Profile card with status -->
      <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; border: 1px solid #E5E7EB; border-radius: 0.75rem;">
        <div style="position: relative;">
          <div style="width: 48px; height: 48px; background: linear-gradient(45deg, #06B6D4, #10B981); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.125rem;">
            JD
          </div>
          <div style="position: absolute; bottom: -2px; right: -2px;">
            <mz-badge variant="success" dot></mz-badge>
          </div>
        </div>
        <div>
          <h4 style="margin: 0; font-size: 1rem; font-weight: 600;">John Doe</h4>
          <p style="margin: 0; color: #6B7280; font-size: 0.875rem;">Senior Developer</p>
          <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
            <mz-badge variant="outline" size="xs">React</mz-badge>
            <mz-badge variant="outline" size="xs">TypeScript</mz-badge>
          </div>
        </div>
      </div>

      <!-- Notification item -->
      <div style="display: flex; align-items: start; gap: 0.75rem; padding: 1rem; border-left: 4px solid #06B6D4; background: #F0F9FF; border-radius: 0 0.5rem 0.5rem 0;">
        <div style="width: 32px; height: 32px; background: #06B6D4; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.875rem;">
          !
        </div>
        <div style="flex: 1;">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
            <h5 style="margin: 0; font-weight: 600;">System Update</h5>
            <mz-badge variant="primary" size="xs">New</mz-badge>
          </div>
          <p style="margin: 0; color: #374151; font-size: 0.875rem;">
            A new system update is available with security improvements.
          </p>
        </div>
      </div>

      <!-- Product with multiple badges -->
      <div style="border: 1px solid #E5E7EB; border-radius: 0.75rem; overflow: hidden;">
        <div style="aspect-ratio: 16/9; background: linear-gradient(135deg, #F3F4F6, #E5E7EB); display: flex; align-items: center; justify-content: center; color: #9CA3AF; font-size: 3rem;">
          📱
        </div>
        <div style="padding: 1rem;">
          <div style="display: flex; justify-content: between; align-items: start; margin-bottom: 0.5rem;">
            <h4 style="margin: 0; font-size: 1.125rem; font-weight: 600;">iPhone 15 Pro</h4>
            <div style="display: flex; gap: 0.25rem;">
              <mz-badge variant="success" size="sm">✓ In Stock</mz-badge>
              <mz-badge variant="warning" size="sm">Limited</mz-badge>
            </div>
          </div>
          <p style="margin: 0 0 1rem; color: #6B7280; font-size: 0.875rem;">
            The most advanced iPhone yet with titanium design.
          </p>
          <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
            <mz-badge variant="outline" size="xs">128GB</mz-badge>
            <mz-badge variant="outline" size="xs">5G</mz-badge>
            <mz-badge variant="outline" size="xs">Pro Camera</mz-badge>
          </div>
          <div style="display: flex; justify-content: between; align-items: center;">
            <span style="font-size: 1.25rem; font-weight: 700;">$999</span>
            <mz-badge variant="primary">Best Seller</mz-badge>
          </div>
        </div>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of badges used in different UI contexts like navigation, profiles, notifications, and product listings.',
      },
    },
  },
};