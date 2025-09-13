import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './mz-switch.js';

const meta: Meta = {
  title: 'Forms/Switch',
  component: 'mz-switch',
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the switch is checked',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the switch',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
      }
    },
    name: {
      control: 'text',
      description: 'Name attribute for form submission',
      table: {
        type: { summary: 'string' }
      }
    },
    value: {
      control: 'text',
      description: 'Value attribute for form submission',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'on' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A toggle switch component for binary choices with smooth animations and multiple sizes.'
      }
    },
    actions: {
      handles: ['mz-change']
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    size: 'md'
  },
  render: (args) => html`
    <mz-switch
      ?checked="${args.checked}"
      ?disabled="${args.disabled}"
      size="${args.size}"
      name="${args.name}"
      value="${args.value}"
      @mz-change="${(e: CustomEvent) => console.log('Switch changed:', e.detail)}"
    >
      Toggle me
    </mz-switch>
  `
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <mz-switch size="sm">Small Switch</mz-switch>
      <mz-switch size="md">Medium Switch (Default)</mz-switch>
      <mz-switch size="lg">Large Switch</mz-switch>
    </div>
  `
};

export const States: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <mz-switch>Unchecked</mz-switch>
      <mz-switch checked>Checked</mz-switch>
      <mz-switch disabled>Disabled</mz-switch>
      <mz-switch checked disabled>Checked & Disabled</mz-switch>
    </div>
  `
};

export const WithLabels: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <mz-switch>Enable notifications</mz-switch>
      <mz-switch checked>Dark mode</mz-switch>
      <mz-switch>Auto-save</mz-switch>
      <mz-switch>Show advanced options</mz-switch>
    </div>
  `
};

export const FormExample: Story = {
  render: () => html`
    <form @submit="${(e: Event) => { 
      e.preventDefault(); 
      const formData = new FormData(e.target as HTMLFormElement);
      console.log('Settings:', Object.fromEntries(formData));
      alert('Settings saved!');
    }}">
      <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
        <h3 style="margin: 0;">Notification Settings</h3>
        
        <mz-switch name="email_notifications" checked>
          Email notifications
        </mz-switch>
        
        <mz-switch name="push_notifications">
          Push notifications
        </mz-switch>
        
        <mz-switch name="sms_notifications">
          SMS notifications
        </mz-switch>
        
        <mz-switch name="marketing_emails">
          Marketing emails
        </mz-switch>
        
        <button type="submit" style="margin-top: 1rem; padding: 0.5rem 1rem;">
          Save Settings
        </button>
      </div>
    </form>
  `
};

export const Interactive: Story = {
  render: () => {
    const handleChange = (e: CustomEvent, setting: string) => {
      const status = e.detail.checked ? 'enabled' : 'disabled';
      console.log(`${setting}: ${status}`);
      const output = document.querySelector('#switch-output');
      if (output) {
        output.textContent = `${setting} is now ${status}`;
      }
    };

    return html`
      <div style="max-width: 400px;">
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <mz-switch @mz-change="${(e: CustomEvent) => handleChange(e, 'Wi-Fi')}">
            Wi-Fi
          </mz-switch>
          <mz-switch @mz-change="${(e: CustomEvent) => handleChange(e, 'Bluetooth')}">
            Bluetooth
          </mz-switch>
          <mz-switch @mz-change="${(e: CustomEvent) => handleChange(e, 'Airplane Mode')}">
            Airplane Mode
          </mz-switch>
        </div>
        <div id="switch-output" style="margin-top: 1rem; padding: 1rem; background: var(--mz-color-neutral-100); border-radius: var(--mz-radius-lg);">
          Toggle a switch to see the status
        </div>
      </div>
    `;
  }
};