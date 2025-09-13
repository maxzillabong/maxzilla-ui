import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './mz-card.js';

const meta: Meta = {
  title: 'Display/Card',
  component: 'mz-card',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'outlined', 'filled'],
      description: 'Visual style variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' }
      }
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Padding size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
      }
    },
    hoverable: {
      control: 'boolean',
      description: 'Show hover effects',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    clickable: {
      control: 'boolean',
      description: 'Make card clickable',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A versatile card component for displaying content in a contained format with various styles and layouts.'
      }
    },
    actions: {
      handles: ['mz-card-click']
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    variant: 'default',
    padding: 'md',
    hoverable: false,
    clickable: false
  },
  render: (args) => html`
    <mz-card
      variant="${args.variant}"
      padding="${args.padding}"
      ?hoverable="${args.hoverable}"
      ?clickable="${args.clickable}"
      @mz-card-click="${(e: CustomEvent) => console.log('Card clicked', e)}"
    >
      <h3 slot="header">Card Title</h3>
      <p>This is the card content. You can put any content here.</p>
      <div slot="footer" style="display: flex; gap: 0.5rem;">
        <button>Action 1</button>
        <button>Action 2</button>
      </div>
    </mz-card>
  `
};

export const Variants: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
      <mz-card variant="default">
        <h3 slot="header">Default Card</h3>
        <p>Default card variant with subtle styling.</p>
      </mz-card>
      
      <mz-card variant="elevated">
        <h3 slot="header">Elevated Card</h3>
        <p>Elevated card with shadow for depth.</p>
      </mz-card>
      
      <mz-card variant="outlined">
        <h3 slot="header">Outlined Card</h3>
        <p>Outlined card with border.</p>
      </mz-card>
      
      <mz-card variant="filled">
        <h3 slot="header">Filled Card</h3>
        <p>Filled card with background color.</p>
      </mz-card>
    </div>
  `
};

export const Interactive: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
      <mz-card hoverable>
        <h3 slot="header">Hoverable Card</h3>
        <p>Hover over this card to see the effect.</p>
      </mz-card>
      
      <mz-card clickable @mz-card-click="${() => alert('Card clicked!')}">
        <h3 slot="header">Clickable Card</h3>
        <p>Click this card to trigger an action.</p>
      </mz-card>
      
      <mz-card hoverable clickable>
        <h3 slot="header">Both Effects</h3>
        <p>This card is both hoverable and clickable.</p>
      </mz-card>
    </div>
  `
};

export const ComplexLayout: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <mz-card variant="elevated" hoverable>
        <div slot="media">
          <img 
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=200&fit=crop" 
            alt="Sofa"
            style="width: 100%; height: 200px; object-fit: cover;"
          />
        </div>
        <h3 slot="header">Modern Sofa</h3>
        <div slot="subtitle" style="color: var(--mz-color-neutral-600); font-size: 0.875rem;">
          Living Room Furniture
        </div>
        <p>Experience ultimate comfort with our premium modern sofa. Perfect for any contemporary living space.</p>
        <div slot="footer" style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 1.5rem; font-weight: 600; color: var(--mz-color-primary-600);">$899</span>
          <button style="padding: 0.5rem 1rem; background: var(--mz-color-primary-500); color: white; border: none; border-radius: var(--mz-radius-md); cursor: pointer;">
            Add to Cart
          </button>
        </div>
      </mz-card>
    </div>
  `
};

export const CardGrid: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1rem;">
      ${[1, 2, 3, 4, 5, 6].map(i => html`
        <mz-card variant="elevated" hoverable clickable>
          <h4 slot="header">Card ${i}</h4>
          <p>Content for card number ${i}. Each card can contain different content.</p>
          <div slot="footer">
            <a href="#" style="color: var(--mz-color-primary-600); text-decoration: none;">Learn more →</a>
          </div>
        </mz-card>
      `)}
    </div>
  `
};