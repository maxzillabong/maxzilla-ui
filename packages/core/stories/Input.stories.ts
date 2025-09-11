import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../src/components/input/mz-input.js';
import '../src/components/button/mz-button.js';

const meta: Meta = {
  title: 'Components/Input',
  component: 'mz-input',
  parameters: {
    docs: {
      description: {
        component: 'A flexible input component with validation states, focus effects, and multiple sizes. Features smooth transitions and modern styling.',
      },
    },
  },
  argTypes: {
    value: {
      control: { type: 'text' },
      description: 'Current value of the input',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number'],
      description: 'Input type',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled',
    },
    error: {
      control: { type: 'boolean' },
      description: 'Whether the input has an error state',
    },
    success: {
      control: { type: 'boolean' },
      description: 'Whether the input has a success state',
    },
  },
  args: {
    value: '',
    placeholder: 'Enter text...',
    type: 'text',
    size: 'md',
    disabled: false,
    error: false,
    success: false,
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <mz-input
      value=${args.value}
      placeholder=${args.placeholder}
      type=${args.type}
      size=${args.size}
      ?disabled=${args.disabled}
      ?error=${args.error}
      ?success=${args.success}
      @mz-input=${(e: CustomEvent) => console.log('Input changed:', e.detail.value)}
    ></mz-input>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 300px;">
      <div>
        <label style="display: block; margin-bottom: 0.25rem; font-weight: 500; color: #374151;">Small</label>
        <mz-input size="sm" placeholder="Small input"></mz-input>
      </div>
      <div>
        <label style="display: block; margin-bottom: 0.25rem; font-weight: 500; color: #374151;">Medium (Default)</label>
        <mz-input size="md" placeholder="Medium input"></mz-input>
      </div>
      <div>
        <label style="display: block; margin-bottom: 0.25rem; font-weight: 500; color: #374151;">Large</label>
        <mz-input size="lg" placeholder="Large input"></mz-input>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Different sizes available for the input component.',
      },
    },
  },
};

export const Types: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 300px;">
      <div>
        <label style="display: block; margin-bottom: 0.25rem; font-weight: 500; color: #374151;">Text</label>
        <mz-input type="text" placeholder="Enter text"></mz-input>
      </div>
      <div>
        <label style="display: block; margin-bottom: 0.25rem; font-weight: 500; color: #374151;">Email</label>
        <mz-input type="email" placeholder="Enter email address"></mz-input>
      </div>
      <div>
        <label style="display: block; margin-bottom: 0.25rem; font-weight: 500; color: #374151;">Password</label>
        <mz-input type="password" placeholder="Enter password"></mz-input>
      </div>
      <div>
        <label style="display: block; margin-bottom: 0.25rem; font-weight: 500; color: #374151;">Number</label>
        <mz-input type="number" placeholder="Enter number"></mz-input>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Different input types with appropriate validation and behavior.',
      },
    },
  },
};

export const States: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 300px;">
      <div>
        <label style="display: block; margin-bottom: 0.25rem; font-weight: 500; color: #374151;">Normal</label>
        <mz-input placeholder="Normal state"></mz-input>
      </div>
      <div>
        <label style="display: block; margin-bottom: 0.25rem; font-weight: 500; color: #374151;">Error</label>
        <mz-input error placeholder="Invalid input" value="invalid@email"></mz-input>
        <p style="margin: 0.25rem 0 0; font-size: 0.875rem; color: #EF4444;">Please enter a valid email address</p>
      </div>
      <div>
        <label style="display: block; margin-bottom: 0.25rem; font-weight: 500; color: #374151;">Success</label>
        <mz-input success placeholder="Valid input" value="user@example.com"></mz-input>
        <p style="margin: 0.25rem 0 0; font-size: 0.875rem; color: #10B981;">Email address is valid</p>
      </div>
      <div>
        <label style="display: block; margin-bottom: 0.25rem; font-weight: 500; color: #9CA3AF;">Disabled</label>
        <mz-input disabled placeholder="Disabled input" value="Cannot edit"></mz-input>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Different states of the input component including validation states.',
      },
    },
  },
};

export const FormExample: Story = {
  render: () => html`
    <div style="max-width: 400px; padding: 2rem; background: #F9FAFB; border-radius: 0.75rem;">
      <h3 style="margin: 0 0 1.5rem; color: #1F2937;">Create Account</h3>
      <form @submit=${(e: Event) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        console.log('Form submitted:', Object.fromEntries(formData));
        alert('Form submitted! Check console for data.');
      }}>
        <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
          <div style="flex: 1;">
            <label style="display: block; margin-bottom: 0.25rem; font-weight: 500; color: #374151;">First Name</label>
            <mz-input name="firstName" placeholder="John" @mz-input=${(e: CustomEvent) => {
              const target = e.target as any;
              target.name = 'firstName';
              target.value = e.detail.value;
            }}></mz-input>
          </div>
          <div style="flex: 1;">
            <label style="display: block; margin-bottom: 0.25rem; font-weight: 500; color: #374151;">Last Name</label>
            <mz-input name="lastName" placeholder="Doe" @mz-input=${(e: CustomEvent) => {
              const target = e.target as any;
              target.name = 'lastName';
              target.value = e.detail.value;
            }}></mz-input>
          </div>
        </div>
        
        <div style="margin-bottom: 1rem;">
          <label style="display: block; margin-bottom: 0.25rem; font-weight: 500; color: #374151;">Email Address</label>
          <mz-input name="email" type="email" placeholder="john@example.com" @mz-input=${(e: CustomEvent) => {
            const target = e.target as any;
            target.name = 'email';
            target.value = e.detail.value;
          }}></mz-input>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
          <label style="display: block; margin-bottom: 0.25rem; font-weight: 500; color: #374151;">Password</label>
          <mz-input name="password" type="password" placeholder="••••••••" @mz-input=${(e: CustomEvent) => {
            const target = e.target as any;
            target.name = 'password';
            target.value = e.detail.value;
          }}></mz-input>
        </div>
        
        <mz-button type="submit" full-width>Create Account</mz-button>
      </form>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Example form using multiple input components with form submission handling.',
      },
    },
  },
};

export const WithEvents: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <div style="margin-bottom: 1rem;">
        <label style="display: block; margin-bottom: 0.25rem; font-weight: 500; color: #374151;">
          Real-time validation
        </label>
        <mz-input
          placeholder="Type something..."
          @mz-input=${(e: CustomEvent) => {
            const value = e.detail.value;
            const target = e.target as any;
            
            if (value.length === 0) {
              target.removeAttribute('error');
              target.removeAttribute('success');
            } else if (value.length < 3) {
              target.setAttribute('error', '');
              target.removeAttribute('success');
            } else {
              target.removeAttribute('error');
              target.setAttribute('success', '');
            }
          }}
          @mz-focus=${() => console.log('Input focused')}
          @mz-blur=${() => console.log('Input blurred')}
        ></mz-input>
        <p style="margin: 0.25rem 0 0; font-size: 0.875rem; color: #6B7280;">
          Type at least 3 characters. Check console for focus/blur events.
        </p>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Interactive input with real-time validation and event handling. Check the console for focus and blur events.',
      },
    },
  },
};