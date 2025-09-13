import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './mz-button.js';

const meta: Meta = {
  title: 'Actions/Button',
  component: 'mz-button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive'],
      description: 'Visual style variant of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' }
      }
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
      }
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'HTML button type attribute',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'button' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button should take full width of its container',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    iconOnly: {
      control: 'boolean',
      description: 'Whether the button contains only an icon (adjusts padding)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in loading state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    href: {
      control: 'text',
      description: 'If provided, renders the button as an anchor tag',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      }
    },
    target: {
      control: 'select',
      options: [undefined, '_blank', '_self', '_parent', '_top'],
      description: 'Target attribute for anchor links',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '_self' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A versatile button component with multiple variants, sizes, and states. Supports icons, loading states, and can be rendered as a link.'
      }
    },
    actions: {
      handles: ['mz-click']
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    fullWidth: false
  },
  render: (args) => html`
    <mz-button
      variant="${args.variant}"
      size="${args.size}"
      type="${args.type}"
      ?disabled="${args.disabled}"
      ?full-width="${args.fullWidth}"
      ?icon-only="${args.iconOnly}"
      ?loading="${args.loading}"
      href="${args.href}"
      target="${args.target}"
      @mz-click="${(e: CustomEvent) => console.log('Button clicked', e)}"
    >
      Click me
    </mz-button>
  `
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
  `
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <mz-button size="xs">Extra Small</mz-button>
      <mz-button size="sm">Small</mz-button>
      <mz-button size="md">Medium</mz-button>
      <mz-button size="lg">Large</mz-button>
      <mz-button size="xl">Extra Large</mz-button>
    </div>
  `
};

export const States: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <mz-button>Normal</mz-button>
      <mz-button disabled>Disabled</mz-button>
      <mz-button loading>Loading</mz-button>
    </div>
  `
};

export const WithIcons: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <mz-button>
        <svg slot="start" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
        </svg>
        With Start Icon
      </mz-button>

      <mz-button>
        With End Icon
        <svg slot="end" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </mz-button>

      <mz-button icon-only aria-label="Settings">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6m4.22-13.22l4.24 4.24M1.54 1.54l4.24 4.24M20.46 20.46l-4.24-4.24M1.54 20.46l4.24-4.24"/>
        </svg>
      </mz-button>
    </div>
  `
};

export const FullWidth: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <mz-button full-width>Full Width Button</mz-button>
      <div style="margin-top: 1rem;">
        <mz-button full-width variant="secondary">Full Width Secondary</mz-button>
      </div>
      <div style="margin-top: 1rem;">
        <mz-button full-width variant="outline">Full Width Outline</mz-button>
      </div>
    </div>
  `
};

export const AsLink: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <mz-button href="https://example.com" target="_blank">
        External Link
        <svg slot="end" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      </mz-button>

      <mz-button href="/internal" variant="secondary">Internal Link</mz-button>

      <mz-button href="#anchor" variant="outline">Anchor Link</mz-button>
    </div>
  `
};

export const LoadingStates: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <mz-button loading variant="primary">Primary Loading</mz-button>
      <mz-button loading variant="secondary">Secondary Loading</mz-button>
      <mz-button loading variant="outline">Outline Loading</mz-button>
      <mz-button loading variant="ghost">Ghost Loading</mz-button>
      <mz-button loading variant="destructive">Destructive Loading</mz-button>
    </div>
  `
};

export const ButtonGroup: Story = {
  render: () => html`
    <div style="display: flex; gap: 0.25rem;">
      <mz-button variant="outline">Left</mz-button>
      <mz-button variant="outline">Center</mz-button>
      <mz-button variant="outline">Right</mz-button>
    </div>
  `
};

export const Interactive: Story = {
  render: () => {
    let clickCount = 0;
    const handleClick = (e: CustomEvent) => {
      clickCount++;
      const button = e.target as HTMLElement;
      button.textContent = `Clicked ${clickCount} time${clickCount !== 1 ? 's' : ''}`;
    };

    return html`
      <div style="display: flex; gap: 1rem; flex-direction: column; max-width: 300px;">
        <mz-button @mz-click="${handleClick}">Click to count</mz-button>

        <mz-button
          variant="secondary"
          @mz-click="${() => alert('Button clicked!')}"
        >
          Click for alert
        </mz-button>

        <mz-button
          variant="outline"
          @mz-click="${(e: CustomEvent) => {
            const btn = e.target as HTMLElement;
            btn.setAttribute('loading', 'true');
            setTimeout(() => btn.removeAttribute('loading'), 2000);
          }}"
        >
          Click to load
        </mz-button>
      </div>
    `;
  }
};

export const AllCombinations: Story = {
  render: () => {
    const variants = ['primary', 'secondary', 'outline', 'ghost', 'destructive'];
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

    return html`
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        ${variants.map(variant => html`
          <div>
            <h3 style="margin-bottom: 1rem; text-transform: capitalize;">${variant} Variant</h3>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
              ${sizes.map(size => html`
                <mz-button variant="${variant}" size="${size}">
                  ${size.toUpperCase()}
                </mz-button>
              `)}
            </div>
          </div>
        `)}
      </div>
    `;
  }
};