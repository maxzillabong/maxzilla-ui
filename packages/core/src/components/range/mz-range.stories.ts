import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import './mz-range.js';

const meta: Meta = {
  title: 'Forms/Range',
  component: 'mz-range',
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'number',
      description: 'The current value of the range',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' }
      }
    },
    min: {
      control: 'number',
      description: 'Minimum value of the range',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' }
      }
    },
    max: {
      control: 'number',
      description: 'Maximum value of the range',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100' }
      }
    },
    step: {
      control: 'number',
      description: 'Step increment for the range',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' }
      }
    },
    label: {
      control: 'text',
      description: 'Label for the range slider',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    helpText: {
      control: 'text',
      description: 'Help text shown below the range',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    tooltip: {
      control: 'select',
      options: ['top', 'bottom', 'none'],
      description: 'Tooltip placement for showing current value',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'top' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the range is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    required: {
      control: 'boolean',
      description: 'Whether the range is required',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    name: {
      control: 'text',
      description: 'Name attribute for form submission',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `A customizable range slider component with tooltip support, custom formatting, and smooth animations. Perfect for selecting numeric values within a defined range.

## Features

- **Tooltip Support**: Show current value in a tooltip while dragging
- **Custom Formatting**: Format tooltip values with custom functions
- **Keyboard Navigation**: Full keyboard support with arrow keys
- **Smooth Animations**: Animated track and thumb movements
- **Accessible**: ARIA attributes and keyboard navigation

## Events

- **mz-change**: Fired when the value changes and focus is lost
- **mz-input**: Fired during live value updates while dragging
- **mz-focus**: Fired when the range receives focus
- **mz-blur**: Fired when the range loses focus
- **mz-invalid**: Fired when the range is invalid

## Slots

- **label**: Custom label content
- **help-text**: Custom help text content
- **prefix**: Content before the range slider
- **suffix**: Content after the range slider

## CSS Parts

- **base**: The component's base wrapper
- **input**: The native range input element
- **track**: The range track
- **thumb**: The range thumb/handle
- **tooltip**: The value tooltip

## CSS Properties

- **--thumb-size**: Size of the range thumb
- **--tooltip-offset**: Distance between tooltip and thumb
- **--track-color-active**: Color of the active track portion
- **--track-color-inactive**: Color of the inactive track portion
- **--track-height**: Height of the track`
      }
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    value: 50,
    min: 0,
    max: 100,
    step: 1
  },
  render: (args) => html`
    <mz-range
      value=${args.value}
      min=${args.min}
      max=${args.max}
      step=${args.step}
      label=${args.label}
      help-text=${args.helpText}
      tooltip=${args.tooltip}
      ?disabled=${args.disabled}
      ?required=${args.required}
      name=${args.name}
      @mz-change=${action('mz-change')}
      @mz-input=${action('mz-input')}
    ></mz-range>
  `
};

export const WithLabel: Story = {
  args: {
    value: 30,
    min: 0,
    max: 100,
    label: 'Volume Control',
    helpText: 'Adjust the volume level'
  },
  render: (args) => html`
    <mz-range
      value=${args.value}
      min=${args.min}
      max=${args.max}
      label=${args.label}
      help-text=${args.helpText}
      @mz-change=${action('mz-change')}
    ></mz-range>
  `
};

export const CustomRange: Story = {
  args: {
    value: 25,
    min: 10,
    max: 50,
    step: 5,
    label: 'Temperature (°C)',
    helpText: 'Select temperature between 10°C and 50°C'
  },
  render: (args) => html`
    <mz-range
      value=${args.value}
      min=${args.min}
      max=${args.max}
      step=${args.step}
      label=${args.label}
      help-text=${args.helpText}
      @mz-change=${action('mz-change')}
    ></mz-range>
  `
};

export const PrecisionSteps: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <mz-range
        value="1"
        min="0"
        max="10"
        step="1"
        label="Whole numbers (step: 1)"
        @mz-change=${action('mz-change')}
      ></mz-range>

      <mz-range
        value="2.5"
        min="0"
        max="10"
        step="0.5"
        label="Half steps (step: 0.5)"
        @mz-change=${action('mz-change')}
      ></mz-range>

      <mz-range
        value="3.33"
        min="0"
        max="10"
        step="0.01"
        label="Fine control (step: 0.01)"
        @mz-change=${action('mz-change')}
      ></mz-range>
    </div>
  `
};

export const TooltipPositions: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 3rem; padding: 2rem 0;">
      <mz-range
        value="30"
        tooltip="top"
        label="Tooltip on top"
        @mz-change=${action('mz-change')}
      ></mz-range>

      <mz-range
        value="50"
        tooltip="bottom"
        label="Tooltip on bottom"
        @mz-change=${action('mz-change')}
      ></mz-range>

      <mz-range
        value="70"
        tooltip="none"
        label="No tooltip"
        @mz-change=${action('mz-change')}
      ></mz-range>
    </div>
  `
};

export const WithPrefixSuffix: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <mz-range value="50" label="Brightness">
        <span slot="prefix">🌑</span>
        <span slot="suffix">☀️</span>
      </mz-range>

      <mz-range value="75" label="Volume">
        <span slot="prefix">🔇</span>
        <span slot="suffix">🔊</span>
      </mz-range>

      <mz-range value="3" min="1" max="5" step="1" label="Rating">
        <span slot="prefix">⭐</span>
        <span slot="suffix">⭐⭐⭐⭐⭐</span>
      </mz-range>
    </div>
  `
};

export const CustomTooltipFormatter: Story = {
  render: () => {
    // Note: In a real app, you'd pass this function via property binding
    const percentFormatter = (value: number) => `${value}%`;
    const currencyFormatter = (value: number) => `$${value.toFixed(2)}`;
    const ratingFormatter = (value: number) => `${value} stars`;

    return html`
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <mz-range
          value="75"
          label="Percentage"
          help-text="Shows value as percentage"
          .tooltipFormatter=${percentFormatter}
          @mz-change=${action('mz-change')}
        ></mz-range>

        <mz-range
          value="49.99"
          min="0"
          max="100"
          step="0.01"
          label="Price Range"
          help-text="Shows value as currency"
          .tooltipFormatter=${currencyFormatter}
          @mz-change=${action('mz-change')}
        ></mz-range>

        <mz-range
          value="4"
          min="1"
          max="5"
          step="1"
          label="Star Rating"
          help-text="Shows value as star rating"
          .tooltipFormatter=${ratingFormatter}
          @mz-change=${action('mz-change')}
        ></mz-range>
      </div>
    `;
  }
};

export const FormExample: Story = {
  render: () => html`
    <form style="max-width: 400px;">
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <mz-range
          name="age"
          value="25"
          min="18"
          max="100"
          label="Age"
          help-text="Must be 18 or older"
          required
          @mz-change=${action('mz-change')}
        ></mz-range>

        <mz-range
          name="experience"
          value="3"
          min="0"
          max="20"
          label="Years of Experience"
          help-text="How many years have you been in this field?"
          @mz-change=${action('mz-change')}
        ></mz-range>

        <mz-range
          name="satisfaction"
          value="7"
          min="1"
          max="10"
          label="Satisfaction Level"
          help-text="Rate from 1 (very unsatisfied) to 10 (very satisfied)"
          @mz-change=${action('mz-change')}
        ></mz-range>
      </div>
    </form>
  `
};

export const Disabled: Story = {
  args: {
    value: 35,
    disabled: true,
    label: 'Disabled Range',
    helpText: 'This range is disabled'
  },
  render: (args) => html`
    <mz-range
      value=${args.value}
      ?disabled=${args.disabled}
      label=${args.label}
      help-text=${args.helpText}
    ></mz-range>
  `
};

export const ColorVariations: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <mz-range
        value="30"
        label="Primary"
        style="--track-color-active: var(--mz-color-primary);"
      ></mz-range>

      <mz-range
        value="50"
        label="Success"
        style="--track-color-active: var(--mz-color-success);"
      ></mz-range>

      <mz-range
        value="70"
        label="Warning"
        style="--track-color-active: var(--mz-color-warning);"
      ></mz-range>

      <mz-range
        value="40"
        label="Danger"
        style="--track-color-active: var(--mz-color-danger);"
      ></mz-range>
    </div>
  `
};

export const CustomStyling: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <mz-range
        value="60"
        label="Large Thumb"
        style="--thumb-size: 28px; --track-height: 8px;"
      ></mz-range>

      <mz-range
        value="40"
        label="Thin Track"
        style="--track-height: 2px;"
      ></mz-range>

      <mz-range
        value="75"
        label="Custom Colors"
        style="
          --track-color-active: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
          --track-color-inactive: #e2e8f0;
          --thumb-size: 24px;
          --track-height: 10px;
        "
      ></mz-range>
    </div>
  `
};