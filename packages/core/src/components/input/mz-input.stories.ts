import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './mz-input.js';

const meta: Meta = {
  title: 'Forms/Input',
  component: 'mz-input',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'date', 'time', 'datetime-local'],
      description: 'Input type',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' }
      }
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
      }
    },
    value: {
      control: 'text',
      description: 'Input value',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    readonly: {
      control: 'boolean',
      description: 'Whether the input is readonly',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    error: {
      control: 'text',
      description: 'Error message to display',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    label: {
      control: 'text',
      description: 'Label for the input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    helperText: {
      control: 'text',
      description: 'Helper text below the input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A versatile input component with built-in validation, multiple types, sizes, and visual states.'
      }
    },
    actions: {
      handles: ['mz-input', 'mz-change', 'mz-blur']
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    type: 'text',
    size: 'md',
    placeholder: 'Enter text...',
    disabled: false,
    required: false,
    readonly: false
  },
  render: (args) => html`
    <mz-input
      type="${args.type}"
      size="${args.size}"
      value="${args.value}"
      placeholder="${args.placeholder}"
      ?disabled="${args.disabled}"
      ?required="${args.required}"
      ?readonly="${args.readonly}"
      error="${args.error}"
      label="${args.label}"
      helper-text="${args.helperText}"
      @mz-input="${(e: CustomEvent) => console.log('Input:', e.detail)}"
      @mz-change="${(e: CustomEvent) => console.log('Change:', e.detail)}"
    ></mz-input>
  `
};

export const Types: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <mz-input type="text" placeholder="Text input" label="Text"></mz-input>
      <mz-input type="email" placeholder="email@example.com" label="Email"></mz-input>
      <mz-input type="password" placeholder="Enter password" label="Password"></mz-input>
      <mz-input type="number" placeholder="123" label="Number"></mz-input>
      <mz-input type="tel" placeholder="+1 (555) 000-0000" label="Phone"></mz-input>
      <mz-input type="url" placeholder="https://example.com" label="URL"></mz-input>
      <mz-input type="search" placeholder="Search..." label="Search"></mz-input>
      <mz-input type="date" label="Date"></mz-input>
      <mz-input type="time" label="Time"></mz-input>
    </div>
  `
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <mz-input size="xs" placeholder="Extra small input"></mz-input>
      <mz-input size="sm" placeholder="Small input"></mz-input>
      <mz-input size="md" placeholder="Medium input (default)"></mz-input>
      <mz-input size="lg" placeholder="Large input"></mz-input>
      <mz-input size="xl" placeholder="Extra large input"></mz-input>
    </div>
  `
};

export const States: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <mz-input placeholder="Normal input"></mz-input>
      <mz-input placeholder="Disabled input" disabled></mz-input>
      <mz-input value="Readonly input" readonly></mz-input>
      <mz-input placeholder="Required input" required label="Required Field"></mz-input>
      <mz-input 
        placeholder="Input with error" 
        error="This field is required"
        label="Error State"
      ></mz-input>
    </div>
  `
};

export const WithLabelsAndHelpers: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
      <mz-input 
        label="Username"
        placeholder="Enter username"
        helper-text="Choose a unique username"
      ></mz-input>
      
      <mz-input 
        type="email"
        label="Email Address"
        placeholder="john@example.com"
        helper-text="We'll never share your email"
        required
      ></mz-input>
      
      <mz-input 
        type="password"
        label="Password"
        placeholder="Enter password"
        helper-text="Must be at least 8 characters"
        required
      ></mz-input>
    </div>
  `
};

export const WithIcons: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <mz-input placeholder="With start icon">
        <svg slot="start" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
      </mz-input>
      
      <mz-input placeholder="With end icon">
        <svg slot="end" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M20 6L9 17l-5-5"/>
        </svg>
      </mz-input>
      
      <mz-input type="password" placeholder="Password with toggle">
        <svg slot="end" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="cursor: pointer;">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      </mz-input>
    </div>
  `
};

export const Validation: Story = {
  render: () => html`
    <form @submit="${(e: Event) => { e.preventDefault(); console.log('Form submitted'); }}">
      <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
        <mz-input 
          type="email"
          label="Email (Required)"
          placeholder="email@example.com"
          required
          validation-schema="email"
        ></mz-input>
        
        <mz-input 
          type="tel"
          label="Phone (Pattern)"
          placeholder="(123) 456-7890"
          pattern="\\(\\d{3}\\) \\d{3}-\\d{4}"
          helper-text="Format: (123) 456-7890"
        ></mz-input>
        
        <mz-input 
          type="text"
          label="Username (Min length)"
          placeholder="At least 3 characters"
          minlength="3"
          required
        ></mz-input>
        
        <mz-input 
          type="number"
          label="Age (Range)"
          placeholder="18-100"
          min="18"
          max="100"
          helper-text="Must be between 18 and 100"
        ></mz-input>
        
        <button type="submit" style="padding: 0.5rem 1rem; margin-top: 1rem;">Submit</button>
      </div>
    </form>
  `
};

export const Interactive: Story = {
  render: () => {
    let value = '';
    
    const handleInput = (e: CustomEvent) => {
      value = e.detail.value;
      const output = document.querySelector('#output');
      if (output) {
        output.textContent = `Current value: "${value}" (${value.length} characters)`;
      }
    };

    return html`
      <div style="max-width: 400px;">
        <mz-input 
          placeholder="Type something..."
          label="Interactive Input"
          @mz-input="${handleInput}"
        ></mz-input>
        <div id="output" style="margin-top: 1rem; padding: 1rem; background: var(--mz-color-neutral-100); border-radius: var(--mz-radius-lg);">
          Start typing to see the value...
        </div>
      </div>
    `;
  }
};

export const FormExample: Story = {
  render: () => html`
    <form @submit="${(e: Event) => { 
      e.preventDefault(); 
      const formData = new FormData(e.target as HTMLFormElement);
      console.log('Form data:', Object.fromEntries(formData));
      alert('Form submitted! Check console for data.');
    }}">
      <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
        <h3 style="margin: 0;">User Registration</h3>
        
        <mz-input 
          name="firstName"
          label="First Name"
          placeholder="John"
          required
        ></mz-input>
        
        <mz-input 
          name="lastName"
          label="Last Name"
          placeholder="Doe"
          required
        ></mz-input>
        
        <mz-input 
          type="email"
          name="email"
          label="Email Address"
          placeholder="john.doe@example.com"
          required
          validation-schema="email"
        ></mz-input>
        
        <mz-input 
          type="password"
          name="password"
          label="Password"
          placeholder="Min 8 characters"
          minlength="8"
          required
        ></mz-input>
        
        <mz-input 
          type="tel"
          name="phone"
          label="Phone Number (Optional)"
          placeholder="+1 (555) 000-0000"
        ></mz-input>
        
        <button type="submit" style="padding: 0.75rem 1.5rem; background: var(--mz-color-primary-500); color: white; border: none; border-radius: var(--mz-radius-lg); cursor: pointer;">
          Register
        </button>
      </div>
    </form>
  `
};