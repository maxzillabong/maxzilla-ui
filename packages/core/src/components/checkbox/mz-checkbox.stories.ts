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
        component: `A customizable checkbox component with support for indeterminate state, validation, and accessibility features.

### Events

| Event | Description | Detail |
|-------|-------------|--------|
| mz-change | Fired when checked state changes | \`{ checked: boolean, value: string, originalEvent: Event }\` |
| mz-input | Fired on every interaction | \`{ checked: boolean, value: string, originalEvent: Event }\` |
| mz-focus | Fired when checkbox receives focus | \`{ originalEvent: FocusEvent }\` |
| mz-blur | Fired when checkbox loses focus | \`{ originalEvent: FocusEvent }\` |
| mz-keydown | Fired on keydown | \`{ key: string, originalEvent: KeyboardEvent }\` |
| mz-keyup | Fired on keyup | \`{ key: string, originalEvent: KeyboardEvent }\` |`
      }
    },
    actions: {
      handles: ['mz-change', 'mz-input', 'mz-focus', 'mz-blur', 'mz-keydown', 'mz-keyup']
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

export const EventHandling: Story = {
  render: () => {
    const logEvent = (eventName: string, detail: any) => {
      const log = document.querySelector('#checkbox-event-log');
      if (log) {
        const entry = document.createElement('div');
        entry.style.cssText = 'padding: 0.5rem; border-left: 3px solid var(--mz-color-primary-500); margin-bottom: 0.5rem;';
        entry.innerHTML = `
          <strong>${eventName}</strong><br>
          <code style="font-size: 0.875rem;">${JSON.stringify(detail, null, 2)}</code>
        `;
        log.insertBefore(entry, log.firstChild);

        // Keep only last 5 events
        while (log.children.length > 5) {
          log.removeChild(log.lastChild);
        }
      }
    };

    return html`
      <div style="max-width: 600px;">
        <mz-checkbox
          value="demo-checkbox"
          @mz-change="${(e: CustomEvent) => logEvent('mz-change', e.detail)}"
          @mz-input="${(e: CustomEvent) => logEvent('mz-input', e.detail)}"
          @mz-focus="${(e: CustomEvent) => logEvent('mz-focus', e.detail)}"
          @mz-blur="${(e: CustomEvent) => logEvent('mz-blur', e.detail)}"
          @mz-keydown="${(e: CustomEvent) => logEvent('mz-keydown', e.detail)}"
          @mz-keyup="${(e: CustomEvent) => logEvent('mz-keyup', e.detail)}"
        >
          Check/uncheck me to see events
        </mz-checkbox>

        <div style="margin-top: 1.5rem;">
          <h4 style="margin: 0 0 0.5rem 0;">Event Log:</h4>
          <div id="checkbox-event-log" style="max-height: 300px; overflow-y: auto; background: var(--mz-color-neutral-100); border-radius: var(--mz-radius-lg); padding: 0.5rem;">
            <div style="color: var(--mz-color-neutral-500); padding: 0.5rem;">Events will appear here...</div>
          </div>
        </div>

        <div style="margin-top: 1rem; padding: 1rem; background: var(--mz-color-info-100); border-radius: var(--mz-radius-md);">
          <strong>Try:</strong> Click the checkbox, use Space key to toggle, Tab to focus/blur
        </div>
      </div>
    `;
  }
};

export const Interactive: Story = {
  render: () => {
    const handleChange = (e: CustomEvent) => {
      const checkbox = e.target as HTMLElement;
      const label = checkbox.textContent;
      const status = document.querySelector('#checkbox-status');
      if (status) {
        status.innerHTML = `<strong>${label}</strong>: ${e.detail.checked ? '✅ Checked' : '⬜ Unchecked'} (value: "${e.detail.value}")`;
      }
    };

    return html`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <mz-checkbox value="option1" @mz-change="${handleChange}">Option 1</mz-checkbox>
          <mz-checkbox value="option2" @mz-change="${handleChange}">Option 2</mz-checkbox>
          <mz-checkbox value="option3" @mz-change="${handleChange}">Option 3</mz-checkbox>
        </div>
        <div id="checkbox-status" style="margin-top: 1rem; padding: 1rem; background: var(--mz-color-neutral-100); border-radius: var(--mz-radius-lg);">
          Click a checkbox to see its status...
        </div>
      </div>
    `;
  }
};

export const ProgrammaticControl: Story = {
  render: () => {
    const toggleAll = (checked: boolean) => {
      const checkboxes = document.querySelectorAll('.controlled-checkbox');
      checkboxes.forEach((cb: any) => {
        cb.checked = checked;
      });
    };

    const updateCounter = () => {
      const checkboxes = document.querySelectorAll('.controlled-checkbox');
      const checkedCount = Array.from(checkboxes).filter((cb: any) => cb.checked).length;
      const counter = document.querySelector('#selection-counter');
      if (counter) {
        counter.textContent = `${checkedCount} of ${checkboxes.length} selected`;
      }
    };

    return html`
      <div style="max-width: 400px;">
        <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
          <button @click="${() => toggleAll(true)}" style="padding: 0.5rem 1rem;">Select All</button>
          <button @click="${() => toggleAll(false)}" style="padding: 0.5rem 1rem;">Clear All</button>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.75rem; padding: 1rem; background: var(--mz-color-neutral-50); border-radius: var(--mz-radius-lg);">
          <mz-checkbox class="controlled-checkbox" value="item1" @mz-change="${updateCounter}">Item 1</mz-checkbox>
          <mz-checkbox class="controlled-checkbox" value="item2" @mz-change="${updateCounter}">Item 2</mz-checkbox>
          <mz-checkbox class="controlled-checkbox" value="item3" @mz-change="${updateCounter}">Item 3</mz-checkbox>
          <mz-checkbox class="controlled-checkbox" value="item4" @mz-change="${updateCounter}">Item 4</mz-checkbox>
        </div>

        <div id="selection-counter" style="margin-top: 1rem; padding: 0.75rem; background: var(--mz-color-primary-100); color: var(--mz-color-primary-700); border-radius: var(--mz-radius-md); text-align: center;">
          0 of 4 selected
        </div>
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

export const KeyboardInteraction: Story = {
  render: () => {
    const handleKeydown = (e: CustomEvent) => {
      const info = document.querySelector('#key-info');
      if (info) {
        info.innerHTML = `Last key pressed: <strong>${e.detail.key}</strong>`;
      }
    };

    return html`
      <div style="max-width: 500px;">
        <h3 style="margin: 0 0 1rem 0;">Keyboard Navigation Demo</h3>
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          <mz-checkbox
            @mz-keydown="${handleKeydown}"
            @mz-focus="${() => {
              const info = document.querySelector('#focus-info');
              if (info) info.textContent = 'Checkbox has focus - press Space to toggle';
            }}"
            @mz-blur="${() => {
              const info = document.querySelector('#focus-info');
              if (info) info.textContent = 'Press Tab to focus the checkbox';
            }}"
          >
            Keyboard accessible checkbox
          </mz-checkbox>
        </div>

        <div style="margin-top: 1rem; display: flex; flex-direction: column; gap: 0.5rem;">
          <div id="focus-info" style="padding: 0.75rem; background: var(--mz-color-info-100); color: var(--mz-color-info-700); border-radius: var(--mz-radius-md);">
            Press Tab to focus the checkbox
          </div>
          <div id="key-info" style="padding: 0.75rem; background: var(--mz-color-neutral-100); border-radius: var(--mz-radius-md);">
            Key presses will appear here...
          </div>
        </div>

        <div style="margin-top: 1rem; padding: 1rem; background: var(--mz-color-neutral-50); border-radius: var(--mz-radius-md);">
          <strong>Keyboard controls:</strong>
          <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem;">
            <li>Tab - Focus checkbox</li>
            <li>Space - Toggle checked state</li>
            <li>Shift+Tab - Focus previous element</li>
          </ul>
        </div>
      </div>
    `;
  }
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