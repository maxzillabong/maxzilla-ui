import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import './mz-color-picker.js';

const meta: Meta = {
  title: 'Forms/Color Picker',
  component: 'mz-color-picker',
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'color',
      description: 'The color value in the specified format',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#ffffff' }
      }
    },
    format: {
      control: 'select',
      options: ['hex', 'rgb', 'hsl', 'hsv'],
      description: 'The color format for the value',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'hex' }
      }
    },
    opacity: {
      control: 'boolean',
      description: 'Whether to show the opacity slider',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    inline: {
      control: 'boolean',
      description: 'Whether to render the color picker inline (always visible)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the color picker trigger',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' }
      }
    },
    swatches: {
      control: 'text',
      description: 'Semicolon-separated list of predefined colors',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    label: {
      control: 'text',
      description: 'Label for the color picker',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    helpText: {
      control: 'text',
      description: 'Help text shown below the color picker',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the color picker is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    required: {
      control: 'boolean',
      description: 'Whether the color picker is required',
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
        component: `A comprehensive color picker component that supports multiple color formats (hex, rgb, hsl, hsv), opacity control, and predefined swatches. Can be displayed inline or as a popover.

## Features

- **Multiple Formats**: Supports hex, rgb, hsl, and hsv color formats
- **Opacity Control**: Optional alpha channel support
- **Inline Mode**: Can be displayed inline or as a popover
- **Swatches**: Support for predefined color swatches
- **Accessible**: Full keyboard navigation and ARIA support

## Events

- **mz-change**: Fired when the color value changes
- **mz-input**: Fired during live color updates
- **mz-focus**: Fired when the color picker receives focus
- **mz-blur**: Fired when the color picker loses focus
- **mz-invalid**: Fired when the color picker is invalid

## Slots

- **label**: Custom label content
- **help-text**: Custom help text content

## CSS Parts

- **base**: The component's base wrapper
- **trigger**: The color picker trigger/preview
- **panel**: The color picker panel
- **grid**: The color selection grid
- **hue-slider**: The hue slider
- **opacity-slider**: The opacity slider
- **swatches**: The predefined color swatches
- **input**: The color value input field`
      }
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    value: '#3b82f6'
  },
  render: (args) => html`
    <mz-color-picker
      value=${args.value}
      format=${args.format}
      ?opacity=${args.opacity}
      ?inline=${args.inline}
      size=${args.size}
      swatches=${args.swatches}
      label=${args.label}
      help-text=${args.helpText}
      ?disabled=${args.disabled}
      ?required=${args.required}
      name=${args.name}
      @mz-change=${action('mz-change')}
      @mz-input=${action('mz-input')}
    ></mz-color-picker>
  `
};

export const WithOpacity: Story = {
  args: {
    value: '#3b82f6',
    opacity: true,
    label: 'Choose a color with opacity'
  },
  render: (args) => html`
    <mz-color-picker
      value=${args.value}
      ?opacity=${args.opacity}
      label=${args.label}
      @mz-change=${action('mz-change')}
    ></mz-color-picker>
  `
};

export const InlineMode: Story = {
  args: {
    value: '#10b981',
    inline: true,
    label: 'Inline Color Picker'
  },
  render: (args) => html`
    <mz-color-picker
      value=${args.value}
      ?inline=${args.inline}
      label=${args.label}
      @mz-change=${action('mz-change')}
    ></mz-color-picker>
  `
};

export const WithSwatches: Story = {
  args: {
    value: '#ef4444',
    swatches: '#ef4444;#f97316;#f59e0b;#eab308;#84cc16;#22c55e;#10b981;#14b8a6;#06b6d4;#0ea5e9;#3b82f6;#6366f1;#8b5cf6;#a855f7;#d946ef;#ec4899;#f43f5e'
  },
  render: (args) => html`
    <mz-color-picker
      value=${args.value}
      swatches=${args.swatches}
      label="Select from predefined colors"
      @mz-change=${action('mz-change')}
    ></mz-color-picker>
  `
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 2rem; align-items: center;">
      <mz-color-picker size="small" value="#6366f1" label="Small"></mz-color-picker>
      <mz-color-picker size="medium" value="#3b82f6" label="Medium"></mz-color-picker>
      <mz-color-picker size="large" value="#0ea5e9" label="Large"></mz-color-picker>
    </div>
  `
};

export const Formats: Story = {
  render: () => html`
    <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
      <mz-color-picker format="hex" value="#3b82f6" label="HEX Format"></mz-color-picker>
      <mz-color-picker format="rgb" value="rgb(59, 130, 246)" label="RGB Format"></mz-color-picker>
      <mz-color-picker format="hsl" value="hsl(217, 91%, 60%)" label="HSL Format"></mz-color-picker>
      <mz-color-picker format="hsv" value="hsv(217, 76%, 96%)" label="HSV Format"></mz-color-picker>
    </div>
  `
};

export const FormExample: Story = {
  render: () => html`
    <form style="max-width: 400px;">
      <mz-color-picker
        name="primary-color"
        label="Primary Color"
        help-text="Choose your brand's primary color"
        value="#3b82f6"
        required
        @mz-change=${action('mz-change')}
      ></mz-color-picker>

      <div style="margin-top: 1rem;">
        <mz-color-picker
          name="accent-color"
          label="Accent Color"
          help-text="Choose a complementary accent color"
          value="#10b981"
          opacity
          @mz-change=${action('mz-change')}
        ></mz-color-picker>
      </div>
    </form>
  `
};

export const Disabled: Story = {
  args: {
    value: '#6b7280',
    disabled: true,
    label: 'Disabled Color Picker'
  },
  render: (args) => html`
    <mz-color-picker
      value=${args.value}
      ?disabled=${args.disabled}
      label=${args.label}
    ></mz-color-picker>
  `
};

export const CustomSwatchPalette: Story = {
  render: () => html`
    <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
      <mz-color-picker
        label="Material Design Palette"
        swatches="#f44336;#e91e63;#9c27b0;#673ab7;#3f51b5;#2196f3;#03a9f4;#00bcd4;#009688;#4caf50;#8bc34a;#cddc39;#ffeb3b;#ffc107;#ff9800;#ff5722"
        value="#2196f3"
      ></mz-color-picker>

      <mz-color-picker
        label="Pastel Palette"
        swatches="#fce7f3;#fde2e4;#fad2e1;#e0bbe4;#d6e5fa;#bee1e6;#c6f1e7;#f0efeb;#fff5ba;#fddcdf;#e2cfc4;#e0e0e0"
        value="#fad2e1"
      ></mz-color-picker>
    </div>
  `
};

export const InlineWithOpacity: Story = {
  render: () => html`
    <mz-color-picker
      inline
      opacity
      label="Advanced Color Selection"
      help-text="Pick any color with full opacity control"
      value="#3b82f6cc"
      swatches="#000000;#ffffff;#ff0000;#00ff00;#0000ff;#ffff00;#ff00ff;#00ffff"
      @mz-change=${action('mz-change')}
    ></mz-color-picker>
  `
};