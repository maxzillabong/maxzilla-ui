import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../src/components/button/mz-button.js';

const meta: Meta = {
  title: 'Components/Button',
  component: 'mz-button',
  parameters: {
    docs: {
      description: {
        component: 'A versatile button component with multiple variants, sizes, and interactive states. Features smooth animations and hover effects inspired by Aceternity design.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive'],
      description: 'Visual style variant of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the button',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Whether the button shows loading state',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Whether the button takes full width',
    },
    iconOnly: {
      control: { type: 'boolean' },
      description: 'Whether the button contains only an icon',
    },
    href: {
      control: { type: 'text' },
      description: 'URL to link to (renders as anchor)',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    fullWidth: false,
    iconOnly: false,
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <mz-button
      variant=${args.variant}
      size=${args.size}
      ?disabled=${args.disabled}
      ?loading=${args.loading}
      ?full-width=${args.fullWidth}
      ?icon-only=${args.iconOnly}
      href=${args.href || undefined}
    >
      Click me
    </mz-button>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <mz-button variant="primary">Primary</mz-button>
      <mz-button variant="secondary">Secondary</mz-button>
      <mz-button variant="outline">Outline</mz-button>
      <mz-button variant="ghost">Ghost</mz-button>
      <mz-button variant="destructive">Destructive</mz-button>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Different visual variants of the button component.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
      <mz-button size="xs">Extra Small</mz-button>
      <mz-button size="sm">Small</mz-button>
      <mz-button size="md">Medium</mz-button>
      <mz-button size="lg">Large</mz-button>
      <mz-button size="xl">Extra Large</mz-button>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Different sizes available for the button component.',
      },
    },
  },
};

export const States: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <mz-button>Normal</mz-button>
      <mz-button loading>Loading</mz-button>
      <mz-button disabled>Disabled</mz-button>
      <mz-button variant="outline" loading>Loading Outline</mz-button>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Different states of the button component including loading and disabled states.',
      },
    },
  },
};

export const WithIcons: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <mz-button>
        <svg slot="start" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7 7-7Z"/>
        </svg>
        Like
      </mz-button>
      
      <mz-button variant="outline">
        Download
        <svg slot="end" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7,10 12,15 17,10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
      </mz-button>
      
      <mz-button variant="ghost" icon-only>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35"/>
        </svg>
      </mz-button>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Buttons with icons using the start and end slots, plus icon-only button variant.',
      },
    },
  },
};

export const AsLink: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <mz-button href="https://maxzilla.nl" target="_blank">
        Visit Website
        <svg slot="end" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15,3 21,3 21,9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      </mz-button>
      <mz-button href="#" variant="outline">Internal Link</mz-button>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Buttons rendered as anchor links when href prop is provided.',
      },
    },
  },
};

export const FullWidth: Story = {
  render: () => html`
    <div style="width: 100%; max-width: 400px;">
      <mz-button full-width>Full Width Button</mz-button>
      <br><br>
      <mz-button full-width variant="outline">Full Width Outline</mz-button>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Buttons that take the full width of their container.',
      },
    },
  },
};

export const Interactive: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <mz-button @mz-click=${(e: CustomEvent) => alert('Button clicked!')}>
        Click me
      </mz-button>
      <mz-button variant="outline" @mz-click=${(e: CustomEvent) => console.log('Outline clicked', e.detail)}>
        Check Console
      </mz-button>
    </div>
    <p style="margin-top: 1rem; color: #64748B; font-size: 0.875rem;">
      Buttons dispatch custom 'mz-click' events. Check the console or try the alert button.
    </p>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Interactive buttons with custom event handling.',
      },
    },
  },
};