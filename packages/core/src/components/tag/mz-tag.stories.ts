import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import './mz-tag.js';

const meta: Meta = {
  title: 'Display/Tag',
  component: 'mz-tag',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'neutral'],
      description: 'Visual variant of the tag',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'neutral' }
      }
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the tag',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' }
      }
    },
    removable: {
      control: 'boolean',
      description: 'Whether the tag can be removed',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    pill: {
      control: 'boolean',
      description: 'Whether to use pill styling (rounded ends)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `A versatile tag component for labeling and categorizing content. Supports multiple variants, sizes, and can be made removable.

## Features

- **Multiple Variants**: Seven color variants for different contexts
- **Three Sizes**: Small, medium, and large sizes
- **Removable Option**: Add a close button for removable tags
- **Pill Style**: Rounded pill-shaped variant
- **Slot Support**: Prefix and suffix slots for icons or additional content
- **Accessible**: Proper ARIA labels and keyboard support

## Events

- **mz-remove**: Fired when the remove button is clicked

## Slots

- **default**: The tag's content
- **prefix**: Content before the tag text
- **suffix**: Content after the tag text

## CSS Parts

- **base**: The component's base wrapper
- **content**: The tag content
- **prefix**: The prefix slot
- **suffix**: The suffix slot
- **remove-button**: The remove button

## CSS Properties

- **--border-radius**: Border radius of the tag
- **--font-size**: Font size of the tag text
- **--height**: Height of the tag
- **--padding-x**: Horizontal padding
- **--padding-y**: Vertical padding`
      }
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    variant: 'neutral'
  },
  render: (args) => html`
    <mz-tag
      variant=${args.variant}
      size=${args.size}
      ?removable=${args.removable}
      ?pill=${args.pill}
      @mz-remove=${action('mz-remove')}
    >
      Tag Label
    </mz-tag>
  `
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
      <mz-tag variant="primary">Primary</mz-tag>
      <mz-tag variant="secondary">Secondary</mz-tag>
      <mz-tag variant="success">Success</mz-tag>
      <mz-tag variant="warning">Warning</mz-tag>
      <mz-tag variant="danger">Danger</mz-tag>
      <mz-tag variant="info">Info</mz-tag>
      <mz-tag variant="neutral">Neutral</mz-tag>
    </div>
  `
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 0.5rem;">
      <mz-tag size="small" variant="primary">Small</mz-tag>
      <mz-tag size="medium" variant="primary">Medium</mz-tag>
      <mz-tag size="large" variant="primary">Large</mz-tag>
    </div>
  `
};

export const Removable: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
      <mz-tag variant="primary" removable @mz-remove=${action('mz-remove')}>JavaScript</mz-tag>
      <mz-tag variant="secondary" removable @mz-remove=${action('mz-remove')}>TypeScript</mz-tag>
      <mz-tag variant="success" removable @mz-remove=${action('mz-remove')}>React</mz-tag>
      <mz-tag variant="warning" removable @mz-remove=${action('mz-remove')}>Vue</mz-tag>
      <mz-tag variant="info" removable @mz-remove=${action('mz-remove')}>Angular</mz-tag>
      <mz-tag variant="danger" removable @mz-remove=${action('mz-remove')}>Svelte</mz-tag>
    </div>
  `
};

export const PillStyle: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
      <mz-tag variant="primary" pill>Primary Pill</mz-tag>
      <mz-tag variant="secondary" pill>Secondary Pill</mz-tag>
      <mz-tag variant="success" pill>Success Pill</mz-tag>
      <mz-tag variant="warning" pill>Warning Pill</mz-tag>
      <mz-tag variant="danger" pill>Danger Pill</mz-tag>
      <mz-tag variant="info" pill>Info Pill</mz-tag>
    </div>
  `
};

export const RemovablePills: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
      <mz-tag variant="primary" pill removable @mz-remove=${action('mz-remove')}>Design</mz-tag>
      <mz-tag variant="secondary" pill removable @mz-remove=${action('mz-remove')}>Development</mz-tag>
      <mz-tag variant="success" pill removable @mz-remove=${action('mz-remove')}>Marketing</mz-tag>
      <mz-tag variant="warning" pill removable @mz-remove=${action('mz-remove')}>Sales</mz-tag>
      <mz-tag variant="info" pill removable @mz-remove=${action('mz-remove')}>Support</mz-tag>
    </div>
  `
};

export const WithPrefixSuffix: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
      <mz-tag variant="primary">
        <span slot="prefix">🚀</span>
        Launched
      </mz-tag>

      <mz-tag variant="success">
        <span slot="prefix">✓</span>
        Completed
      </mz-tag>

      <mz-tag variant="warning">
        <span slot="prefix">⚠️</span>
        Warning
      </mz-tag>

      <mz-tag variant="info">
        Version 2.0
        <span slot="suffix">🎉</span>
      </mz-tag>

      <mz-tag variant="secondary">
        <span slot="prefix">👤</span>
        User
        <span slot="suffix">(Admin)</span>
      </mz-tag>
    </div>
  `
};

export const StatusTags: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <strong>Order Status:</strong>
        <mz-tag variant="success">
          <span slot="prefix">✓</span>
          Delivered
        </mz-tag>
      </div>

      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <strong>Payment:</strong>
        <mz-tag variant="warning">
          <span slot="prefix">⏳</span>
          Pending
        </mz-tag>
      </div>

      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <strong>Subscription:</strong>
        <mz-tag variant="danger">
          <span slot="prefix">✗</span>
          Expired
        </mz-tag>
      </div>

      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <strong>Account:</strong>
        <mz-tag variant="info">
          <span slot="prefix">👑</span>
          Premium
        </mz-tag>
      </div>
    </div>
  `
};

export const CategoryTags: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
      <mz-tag variant="primary" size="small">Technology</mz-tag>
      <mz-tag variant="secondary" size="small">Business</mz-tag>
      <mz-tag variant="info" size="small">Health</mz-tag>
      <mz-tag variant="success" size="small">Education</mz-tag>
      <mz-tag variant="warning" size="small">Entertainment</mz-tag>
      <mz-tag variant="danger" size="small">Sports</mz-tag>
      <mz-tag variant="neutral" size="small">Lifestyle</mz-tag>
    </div>
  `
};

export const SkillTags: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
      <mz-tag variant="primary" pill>HTML/CSS</mz-tag>
      <mz-tag variant="primary" pill>JavaScript</mz-tag>
      <mz-tag variant="primary" pill>TypeScript</mz-tag>
      <mz-tag variant="secondary" pill>React</mz-tag>
      <mz-tag variant="secondary" pill>Vue.js</mz-tag>
      <mz-tag variant="secondary" pill>Angular</mz-tag>
      <mz-tag variant="success" pill>Node.js</mz-tag>
      <mz-tag variant="success" pill>Express</mz-tag>
      <mz-tag variant="info" pill>MongoDB</mz-tag>
      <mz-tag variant="info" pill>PostgreSQL</mz-tag>
    </div>
  `
};

export const FilterTags: Story = {
  render: () => html`
    <div style="
      padding: 1rem;
      border: 1px solid var(--mz-color-border);
      border-radius: 8px;
    ">
      <div style="margin-bottom: 1rem; font-weight: 600;">Active Filters:</div>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        <mz-tag variant="primary" removable @mz-remove=${action('mz-remove')}>
          Price: $100-$500
        </mz-tag>
        <mz-tag variant="primary" removable @mz-remove=${action('mz-remove')}>
          Brand: Apple
        </mz-tag>
        <mz-tag variant="primary" removable @mz-remove=${action('mz-remove')}>
          Color: Black
        </mz-tag>
        <mz-tag variant="primary" removable @mz-remove=${action('mz-remove')}>
          Size: Large
        </mz-tag>
        <mz-tag variant="secondary">
          <span slot="prefix">✗</span>
          Clear All
        </mz-tag>
      </div>
    </div>
  `
};

export const ProductTags: Story = {
  render: () => html`
    <div style="
      max-width: 400px;
      padding: 1.5rem;
      border: 1px solid var(--mz-color-border);
      border-radius: 12px;
    ">
      <h3 style="margin: 0 0 1rem 0;">MacBook Pro 14"</h3>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
        <mz-tag variant="danger" size="small">
          <span slot="prefix">🔥</span>
          Hot Deal
        </mz-tag>
        <mz-tag variant="success" size="small">In Stock</mz-tag>
        <mz-tag variant="info" size="small">Free Shipping</mz-tag>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        <mz-tag variant="neutral" size="small" pill>M3 Pro</mz-tag>
        <mz-tag variant="neutral" size="small" pill>18GB RAM</mz-tag>
        <mz-tag variant="neutral" size="small" pill>512GB SSD</mz-tag>
        <mz-tag variant="neutral" size="small" pill>Space Black</mz-tag>
      </div>
    </div>
  `
};

export const UserTags: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <strong>John Doe</strong>
        <mz-tag variant="primary" size="small" pill>Admin</mz-tag>
        <mz-tag variant="success" size="small" pill>
          <span slot="prefix">●</span>
          Online
        </mz-tag>
      </div>

      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <strong>Jane Smith</strong>
        <mz-tag variant="secondary" size="small" pill>Editor</mz-tag>
        <mz-tag variant="warning" size="small" pill>
          <span slot="prefix">●</span>
          Away
        </mz-tag>
      </div>

      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <strong>Mike Johnson</strong>
        <mz-tag variant="info" size="small" pill>Viewer</mz-tag>
        <mz-tag variant="neutral" size="small" pill>
          <span slot="prefix">●</span>
          Offline
        </mz-tag>
      </div>
    </div>
  `
};