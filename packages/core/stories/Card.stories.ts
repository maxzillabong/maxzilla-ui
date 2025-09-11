import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../src/components/card/mz-card.js';
import '../src/components/button/mz-button.js';

const meta: Meta = {
  title: 'Components/Card',
  component: 'mz-card',
  parameters: {
    docs: {
      description: {
        component: 'A flexible card component with slots for header, content, actions, and footer. Features interactive states and elevation levels with smooth hover effects.',
      },
    },
  },
  argTypes: {
    elevation: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'xl'],
      description: 'Shadow elevation level',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'elevated', 'interactive'],
      description: 'Visual style variant',
    },
    interactive: {
      control: { type: 'boolean' },
      description: 'Whether the card is interactive (clickable)',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Whether the card shows loading state',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the card is disabled',
    },
    compact: {
      control: { type: 'boolean' },
      description: 'Whether to use compact padding',
    },
    fullHeight: {
      control: { type: 'boolean' },
      description: 'Whether the card takes full height',
    },
  },
  args: {
    elevation: 'sm',
    variant: 'default',
    interactive: false,
    loading: false,
    disabled: false,
    compact: false,
    fullHeight: false,
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <mz-card
      elevation=${args.elevation}
      variant=${args.variant}
      ?interactive=${args.interactive}
      ?loading=${args.loading}
      ?disabled=${args.disabled}
      ?compact=${args.compact}
      ?full-height=${args.fullHeight}
    >
      <p>This is a basic card with default styling. Cards can contain any content and provide a clean, elevated surface for grouping related information.</p>
    </mz-card>
  `,
};

export const WithSlots: Story = {
  render: () => html`
    <mz-card>
      <h3 slot="header">Card Title</h3>
      <p>This card demonstrates the use of slots. The header slot provides a prominent area for titles, while the main content area can contain any type of content.</p>
      <div slot="actions">
        <mz-button variant="outline" size="sm">Cancel</mz-button>
        <mz-button size="sm">Save</mz-button>
      </div>
      <p slot="footer">Footer content can include additional information or metadata.</p>
    </mz-card>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Card with header, actions, and footer slots to organize content.',
      },
    },
  },
};

export const Elevations: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;">
      <mz-card elevation="none">
        <h4>No Elevation</h4>
        <p>Card without shadow</p>
      </mz-card>
      <mz-card elevation="sm">
        <h4>Small</h4>
        <p>Subtle shadow</p>
      </mz-card>
      <mz-card elevation="md">
        <h4>Medium</h4>
        <p>Moderate shadow</p>
      </mz-card>
      <mz-card elevation="lg">
        <h4>Large</h4>
        <p>Strong shadow</p>
      </mz-card>
      <mz-card elevation="xl">
        <h4>Extra Large</h4>
        <p>Maximum shadow</p>
      </mz-card>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Different elevation levels create varying degrees of visual depth.',
      },
    },
  },
};

export const Variants: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
      <mz-card variant="default">
        <h4>Default</h4>
        <p>Standard card with default styling and subtle shadow.</p>
      </mz-card>
      <mz-card variant="outlined">
        <h4>Outlined</h4>
        <p>Card with border instead of shadow for a cleaner look.</p>
      </mz-card>
      <mz-card variant="elevated">
        <h4>Elevated</h4>
        <p>Card with enhanced shadow for more prominence.</p>
      </mz-card>
      <mz-card variant="interactive" interactive>
        <h4>Interactive</h4>
        <p>Hover over this card to see interactive effects and animations.</p>
      </mz-card>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Different card variants for various use cases and visual styles.',
      },
    },
  },
};

export const Interactive: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
      <mz-card interactive @mz-card-click=${(e: CustomEvent) => alert('Card clicked!')}>
        <h4>Clickable Card</h4>
        <p>This card responds to clicks and shows hover effects. Click it to see the alert.</p>
        <div slot="actions">
          <mz-button size="sm">Learn More</mz-button>
        </div>
      </mz-card>
      
      <mz-card interactive @mz-card-click=${(e: CustomEvent) => console.log('Product card clicked', e)}>
        <img slot="image" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=200&fit=crop" alt="Product" style="width: 100%; height: 200px; object-fit: cover;" />
        <h4>Product Card</h4>
        <p>Interactive card with image slot. Perfect for product listings or content previews.</p>
        <div slot="actions">
          <mz-button variant="outline" size="sm">Add to Cart</mz-button>
          <mz-button size="sm">View Details</mz-button>
        </div>
      </mz-card>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Interactive cards with click handling and hover effects. Check the console for click events.',
      },
    },
  },
};

export const States: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;">
      <mz-card>
        <h4>Normal State</h4>
        <p>Standard card appearance</p>
      </mz-card>
      <mz-card loading>
        <h4>Loading State</h4>
        <p>Card with shimmer loading effect</p>
      </mz-card>
      <mz-card disabled>
        <h4>Disabled State</h4>
        <p>Card is disabled and non-interactive</p>
      </mz-card>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Different states of the card component including loading and disabled states.',
      },
    },
  },
};

export const CompactAndFullHeight: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem; height: 300px;">
      <mz-card>
        <h4>Normal Padding</h4>
        <p>Standard card with regular padding and content spacing.</p>
      </mz-card>
      <mz-card compact>
        <h4>Compact</h4>
        <p>Card with reduced padding for denser layouts.</p>
      </mz-card>
      <mz-card full-height>
        <h4>Full Height</h4>
        <p>This card stretches to fill the available height of its container, making it perfect for grid layouts.</p>
        <div slot="footer">Footer stays at bottom</div>
      </mz-card>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Compact padding and full height variants for different layout needs.',
      },
    },
  },
};

export const ComplexContent: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <mz-card>
        <div slot="header" style="display: flex; align-items: center; gap: 0.75rem;">
          <div style="width: 40px; height: 40px; background: linear-gradient(45deg, #06B6D4, #10B981); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
            MZ
          </div>
          <div>
            <h3 style="margin: 0; font-size: 1.125rem;">Maxzilla UI</h3>
            <p style="margin: 0; color: #64748B; font-size: 0.875rem;">Component Library</p>
          </div>
        </div>
        
        <div style="margin: 1rem 0;">
          <p>A comprehensive component library built with modern web standards and beautiful animations.</p>
          
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin: 1rem 0;">
            <span style="background: #F1F5F9; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem; font-weight: 500;">Web Components</span>
            <span style="background: #F1F5F9; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem; font-weight: 500;">TypeScript</span>
            <span style="background: #F1F5F9; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem; font-weight: 500;">Lit Element</span>
          </div>
        </div>
        
        <div slot="actions">
          <mz-button variant="outline" size="sm">
            <svg slot="start" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            GitHub
          </mz-button>
          <mz-button size="sm">Get Started</mz-button>
        </div>
        
        <div slot="footer" style="display: flex; justify-content: between; align-items: center; color: #64748B; font-size: 0.875rem;">
          <span>⭐ 1.2k stars</span>
          <span>📦 v0.1.0</span>
        </div>
      </mz-card>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Complex card layout with multiple slots, icons, tags, and rich content structure.',
      },
    },
  },
};