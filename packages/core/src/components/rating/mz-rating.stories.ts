import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import './mz-rating.js';

const meta: Meta = {
  title: 'Display/Rating',
  component: 'mz-rating',
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'number',
      description: 'The current rating value',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' }
      }
    },
    max: {
      control: 'number',
      description: 'Maximum rating value (number of stars)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5' }
      }
    },
    precision: {
      control: 'select',
      options: [1, 0.5, 0.1],
      description: 'Rating precision (1 for whole, 0.5 for half, 0.1 for decimal)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' }
      }
    },
    readonly: {
      control: 'boolean',
      description: 'Whether the rating is read-only',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the rating is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    showValue: {
      control: 'boolean',
      description: 'Whether to show the numeric value',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    label: {
      control: 'text',
      description: 'Label for the rating',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    name: {
      control: 'text',
      description: 'Name attribute for form submission',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    symbol: {
      control: 'text',
      description: 'Custom symbol to use instead of star',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `A star rating component for displaying and collecting ratings. Supports half-star precision, custom symbols, and read-only mode.

## Features

- **Precision Control**: Support for whole, half, or decimal ratings
- **Custom Symbols**: Use any symbol instead of stars
- **Read-only Mode**: Display ratings without interaction
- **Keyboard Navigation**: Full keyboard support
- **Hover Effects**: Visual feedback on hover
- **Accessible**: ARIA attributes and keyboard navigation

## Events

- **mz-change**: Fired when the rating value changes
- **mz-hover**: Fired when hovering over a rating symbol

## Slots

- **default**: Custom symbol content (replaces default star)

## CSS Parts

- **base**: The component's base wrapper
- **symbol**: Each rating symbol
- **symbol--active**: Active rating symbols
- **symbol--inactive**: Inactive rating symbols

## CSS Properties

- **--symbol-size**: Size of each rating symbol
- **--symbol-spacing**: Space between symbols
- **--symbol-color**: Color of inactive symbols
- **--symbol-color-active**: Color of active symbols`
      }
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    value: 3,
    max: 5
  },
  render: (args) => html`
    <mz-rating
      value=${args.value}
      max=${args.max}
      precision=${args.precision}
      ?readonly=${args.readonly}
      ?disabled=${args.disabled}
      ?show-value=${args.showValue}
      label=${args.label}
      name=${args.name}
      symbol=${args.symbol}
      @mz-change=${action('mz-change')}
      @mz-hover=${action('mz-hover')}
    ></mz-rating>
  `
};

export const Interactive: Story = {
  args: {
    value: 0,
    max: 5,
    label: 'Rate this product:'
  },
  render: (args) => html`
    <mz-rating
      value=${args.value}
      max=${args.max}
      label=${args.label}
      @mz-change=${action('mz-change')}
      @mz-hover=${action('mz-hover')}
    ></mz-rating>
  `
};

export const HalfStarPrecision: Story = {
  args: {
    value: 3.5,
    max: 5,
    precision: 0.5,
    label: 'Half-star rating:'
  },
  render: (args) => html`
    <mz-rating
      value=${args.value}
      max=${args.max}
      precision=${args.precision}
      label=${args.label}
      @mz-change=${action('mz-change')}
    ></mz-rating>
  `
};

export const DecimalPrecision: Story = {
  args: {
    value: 3.7,
    max: 5,
    precision: 0.1,
    showValue: true,
    label: 'Precise rating:'
  },
  render: (args) => html`
    <mz-rating
      value=${args.value}
      max=${args.max}
      precision=${args.precision}
      ?show-value=${args.showValue}
      label=${args.label}
      @mz-change=${action('mz-change')}
    ></mz-rating>
  `
};

export const ReadOnly: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <mz-rating value="4.5" precision="0.5" readonly label="Product Rating:"></mz-rating>
      <mz-rating value="3.8" precision="0.1" readonly show-value label="User Score:"></mz-rating>
      <mz-rating value="5" readonly label="Perfect Score:"></mz-rating>
    </div>
  `
};

export const WithValue: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <mz-rating value="3" show-value label="Basic:"></mz-rating>
      <mz-rating value="4.5" precision="0.5" show-value label="Half-star:"></mz-rating>
      <mz-rating value="3.7" precision="0.1" show-value label="Decimal:"></mz-rating>
    </div>
  `
};

export const DifferentMaxValues: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <mz-rating value="2" max="3" label="Out of 3:"></mz-rating>
      <mz-rating value="3" max="5" label="Out of 5:"></mz-rating>
      <mz-rating value="7" max="10" label="Out of 10:"></mz-rating>
    </div>
  `
};

export const CustomSymbols: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <mz-rating value="3" symbol="❤️" label="Hearts:"></mz-rating>
      <mz-rating value="4" symbol="👍" label="Thumbs up:"></mz-rating>
      <mz-rating value="2" symbol="🔥" label="Fire:"></mz-rating>
      <mz-rating value="3" symbol="💎" label="Diamonds:"></mz-rating>
    </div>
  `
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <mz-rating
        value="3"
        label="Small:"
        style="--symbol-size: 1rem;"
      ></mz-rating>

      <mz-rating
        value="3"
        label="Medium:"
        style="--symbol-size: 1.5rem;"
      ></mz-rating>

      <mz-rating
        value="3"
        label="Large:"
        style="--symbol-size: 2rem;"
      ></mz-rating>

      <mz-rating
        value="3"
        label="Extra Large:"
        style="--symbol-size: 2.5rem;"
      ></mz-rating>
    </div>
  `
};

export const Colors: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <mz-rating
        value="3"
        label="Default (Warning):"
      ></mz-rating>

      <mz-rating
        value="3"
        label="Primary:"
        style="--symbol-color-active: var(--mz-color-primary);"
      ></mz-rating>

      <mz-rating
        value="3"
        label="Success:"
        style="--symbol-color-active: var(--mz-color-success);"
      ></mz-rating>

      <mz-rating
        value="3"
        label="Danger:"
        style="--symbol-color-active: var(--mz-color-danger);"
      ></mz-rating>

      <mz-rating
        value="3"
        label="Custom Gradient:"
        style="--symbol-color-active: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"
      ></mz-rating>
    </div>
  `
};

export const FormExample: Story = {
  render: () => html`
    <form style="max-width: 400px;">
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <mz-rating
          name="overall"
          value="0"
          label="Overall Satisfaction"
          @mz-change=${action('mz-change')}
        ></mz-rating>

        <mz-rating
          name="quality"
          value="0"
          label="Product Quality"
          @mz-change=${action('mz-change')}
        ></mz-rating>

        <mz-rating
          name="value"
          value="0"
          label="Value for Money"
          @mz-change=${action('mz-change')}
        ></mz-rating>

        <mz-rating
          name="service"
          value="0"
          label="Customer Service"
          @mz-change=${action('mz-change')}
        ></mz-rating>
      </div>
    </form>
  `
};

export const ProductReviews: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 500px;">
      <div style="border: 1px solid var(--mz-color-border); padding: 1rem; border-radius: 8px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <strong>John Doe</strong>
          <mz-rating value="4.5" precision="0.5" readonly></mz-rating>
        </div>
        <p style="margin: 0; color: var(--mz-color-text-secondary); font-size: 0.875rem;">
          Great product! The quality exceeded my expectations.
        </p>
      </div>

      <div style="border: 1px solid var(--mz-color-border); padding: 1rem; border-radius: 8px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <strong>Jane Smith</strong>
          <mz-rating value="5" readonly></mz-rating>
        </div>
        <p style="margin: 0; color: var(--mz-color-text-secondary); font-size: 0.875rem;">
          Absolutely perfect! Couldn't be happier with my purchase.
        </p>
      </div>

      <div style="border: 1px solid var(--mz-color-border); padding: 1rem; border-radius: 8px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <strong>Mike Johnson</strong>
          <mz-rating value="3" readonly></mz-rating>
        </div>
        <p style="margin: 0; color: var(--mz-color-text-secondary); font-size: 0.875rem;">
          Good product but shipping took longer than expected.
        </p>
      </div>
    </div>
  `
};

export const Disabled: Story = {
  args: {
    value: 3,
    disabled: true,
    label: 'Disabled Rating:'
  },
  render: (args) => html`
    <mz-rating
      value=${args.value}
      ?disabled=${args.disabled}
      label=${args.label}
    ></mz-rating>
  `
};