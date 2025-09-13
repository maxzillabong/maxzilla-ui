import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './mz-checkbox.js';

const meta: Meta = {
  title: 'Forms/Checkbox',
  component: 'mz-checkbox',
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    required: {
      control: 'boolean',
      description: 'Whether the checkbox is required',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    indeterminate: {
      control: 'boolean',
      description: 'Whether the checkbox is in indeterminate state',
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
        component: 'A customizable checkbox component with support for indeterminate state, validation, and accessibility features.'
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
    required: false,
    indeterminate: false
  },
  render: (args) => html`
    <mz-checkbox
      ?checked="${args.checked}"
      ?disabled="${args.disabled}"
      ?required="${args.required}"
      ?indeterminate="${args.indeterminate}"
      name="${args.name}"
      value="${args.value}"
      @mz-change="${(e: CustomEvent) => console.log('Checkbox changed', e.detail)}"
    >
      Checkbox Label
    </mz-checkbox>
  `
};

export const States: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <mz-checkbox>Unchecked</mz-checkbox>
      <mz-checkbox checked>Checked</mz-checkbox>
      <mz-checkbox indeterminate>Indeterminate</mz-checkbox>
      <mz-checkbox disabled>Disabled</mz-checkbox>
      <mz-checkbox checked disabled>Checked & Disabled</mz-checkbox>
    </div>
  `
};

export const WithLabels: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <mz-checkbox>Short label</mz-checkbox>
      <mz-checkbox>
        This is a longer label that demonstrates how the checkbox handles multi-line text content
      </mz-checkbox>
      <mz-checkbox required>
        Required checkbox
      </mz-checkbox>
    </div>
  `
};

export const CheckboxGroup: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <h3 style="margin: 0; font-size: 1rem;">Select your interests:</h3>
      <mz-checkbox name="interests" value="coding">Coding</mz-checkbox>
      <mz-checkbox name="interests" value="design">Design</mz-checkbox>
      <mz-checkbox name="interests" value="music">Music</mz-checkbox>
      <mz-checkbox name="interests" value="sports">Sports</mz-checkbox>
      <mz-checkbox name="interests" value="reading">Reading</mz-checkbox>
    </div>
  `
};

export const Interactive: Story = {
  render: () => {
    const handleChange = (e: CustomEvent) => {
      const checkbox = e.target as HTMLElement;
      const label = checkbox.textContent;
      console.log(`${label}: ${e.detail.checked ? 'checked' : 'unchecked'}`);
    };

    return html`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <mz-checkbox @mz-change="${handleChange}">Click me</mz-checkbox>
        <mz-checkbox @mz-change="${handleChange}">Toggle me</mz-checkbox>
        <mz-checkbox @mz-change="${handleChange}">Select me</mz-checkbox>
      </div>
    `;
  }
};

export const FormExample: Story = {
  render: () => html`
    <form @submit="${(e: Event) => { e.preventDefault(); console.log('Form submitted'); }}">
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <h3 style="margin: 0; font-size: 1rem;">Terms and Conditions</h3>
        <mz-checkbox required name="terms">
          I agree to the terms and conditions
        </mz-checkbox>
        <mz-checkbox name="newsletter">
          Send me newsletter updates
        </mz-checkbox>
        <mz-checkbox name="marketing">
          I agree to receive marketing communications
        </mz-checkbox>
        <button type="submit" style="margin-top: 1rem; padding: 0.5rem 1rem;">Submit</button>
      </div>
    </form>
  `
};

export const IndeterminateExample: Story = {
  render: () => {
    let parentChecked = false;
    let parentIndeterminate = true;
    
    const handleParentChange = (e: CustomEvent) => {
      const parent = e.target as any;
      const checkboxes = parent.parentElement.querySelectorAll('mz-checkbox[name="item"]');
      checkboxes.forEach((cb: any) => {
        cb.checked = e.detail.checked;
      });
    };

    const handleChildChange = () => {
      const parent = document.querySelector('#parent-checkbox') as any;
      const checkboxes = document.querySelectorAll('mz-checkbox[name="item"]');
      const checkedCount = Array.from(checkboxes).filter((cb: any) => cb.checked).length;
      
      if (checkedCount === 0) {
        parent.checked = false;
        parent.indeterminate = false;
      } else if (checkedCount === checkboxes.length) {
        parent.checked = true;
        parent.indeterminate = false;
      } else {
        parent.checked = false;
        parent.indeterminate = true;
      }
    };

    return html`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <mz-checkbox 
          id="parent-checkbox"
          indeterminate
          @mz-change="${handleParentChange}"
        >
          Select All
        </mz-checkbox>
        <div style="margin-left: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
          <mz-checkbox name="item" @mz-change="${handleChildChange}">Item 1</mz-checkbox>
          <mz-checkbox name="item" @mz-change="${handleChildChange}" checked>Item 2</mz-checkbox>
          <mz-checkbox name="item" @mz-change="${handleChildChange}" checked>Item 3</mz-checkbox>
        </div>
      </div>
    `;
  }
};