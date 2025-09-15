import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './mz-select.js';
import './mz-option.js';

const meta: Meta = {
  title: 'Forms/Select',
  component: 'mz-select',
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'The selected value',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    label: {
      control: 'text',
      description: 'Label for the select',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no option is selected',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Select an option' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    required: {
      control: 'boolean',
      description: 'Whether the select is required',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    multiple: {
      control: 'boolean',
      description: 'Whether multiple options can be selected',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    clearable: {
      control: 'boolean',
      description: 'Whether the select can be cleared',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    searchable: {
      control: 'boolean',
      description: 'Whether the options are searchable',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the select',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
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
    helperText: {
      control: 'text',
      description: 'Helper text below the select',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `A customizable select dropdown component with support for single/multiple selection, search, and various states.

### Events

| Event | Description | Detail |
|-------|-------------|--------|
| mz-change | Fired when selection changes | \`{ value: string, previousValue: string, originalEvent: Event }\` |
| mz-input | Fired on every interaction | \`{ value: string, originalEvent: Event }\` |
| mz-focus | Fired when select receives focus | \`{ originalEvent: FocusEvent }\` |
| mz-blur | Fired when select loses focus | \`{ originalEvent: FocusEvent }\` |
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
    label: 'Select Country',
    placeholder: 'Choose a country',
    disabled: false,
    required: false,
    clearable: false,
    searchable: false
  },
  render: (args) => html`
    <mz-select
      label="${args.label}"
      placeholder="${args.placeholder}"
      ?disabled="${args.disabled}"
      ?required="${args.required}"
      ?clearable="${args.clearable}"
      ?searchable="${args.searchable}"
      size="${args.size}"
      error="${args.error}"
      helper-text="${args.helperText}"
      @mz-change="${(e: CustomEvent) => console.log('Select changed:', e.detail)}"
    >
      <mz-option value="us">United States</mz-option>
      <mz-option value="ca">Canada</mz-option>
      <mz-option value="uk">United Kingdom</mz-option>
      <mz-option value="de">Germany</mz-option>
      <mz-option value="fr">France</mz-option>
      <mz-option value="jp">Japan</mz-option>
      <mz-option value="au">Australia</mz-option>
    </mz-select>
  `
};

export const EventHandling: Story = {
  render: () => {
    const logEvent = (eventName: string, detail: any) => {
      const log = document.querySelector('#select-event-log');
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
        <mz-select
          label="Event Demo Select"
          placeholder="Select to trigger events"
          helper-text="Try selecting different options, using keyboard navigation, etc."
          @mz-change="${(e: CustomEvent) => logEvent('mz-change', e.detail)}"
          @mz-input="${(e: CustomEvent) => logEvent('mz-input', e.detail)}"
          @mz-focus="${(e: CustomEvent) => logEvent('mz-focus', e.detail)}"
          @mz-blur="${(e: CustomEvent) => logEvent('mz-blur', e.detail)}"
          @mz-keydown="${(e: CustomEvent) => logEvent('mz-keydown', e.detail)}"
          @mz-keyup="${(e: CustomEvent) => logEvent('mz-keyup', e.detail)}"
        >
          <mz-option value="option1">Option 1</mz-option>
          <mz-option value="option2">Option 2</mz-option>
          <mz-option value="option3">Option 3</mz-option>
          <mz-option value="option4">Option 4</mz-option>
        </mz-select>

        <div style="margin-top: 1.5rem;">
          <h4 style="margin: 0 0 0.5rem 0;">Event Log:</h4>
          <div id="select-event-log" style="max-height: 300px; overflow-y: auto; background: var(--mz-color-neutral-100); border-radius: var(--mz-radius-lg); padding: 0.5rem;">
            <div style="color: var(--mz-color-neutral-500); padding: 0.5rem;">Events will appear here...</div>
          </div>
        </div>

        <div style="margin-top: 1rem; padding: 1rem; background: var(--mz-color-info-100); border-radius: var(--mz-radius-md);">
          <strong>Try:</strong> Click to open, use arrow keys to navigate, Enter to select, Tab to focus/blur
        </div>
      </div>
    `;
  }
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
      <mz-select size="sm" label="Small" placeholder="Small select">
        <mz-option value="1">Option 1</mz-option>
        <mz-option value="2">Option 2</mz-option>
        <mz-option value="3">Option 3</mz-option>
      </mz-select>

      <mz-select size="md" label="Medium (default)" placeholder="Medium select">
        <mz-option value="1">Option 1</mz-option>
        <mz-option value="2">Option 2</mz-option>
        <mz-option value="3">Option 3</mz-option>
      </mz-select>

      <mz-select size="lg" label="Large" placeholder="Large select">
        <mz-option value="1">Option 1</mz-option>
        <mz-option value="2">Option 2</mz-option>
        <mz-option value="3">Option 3</mz-option>
      </mz-select>
    </div>
  `
};

export const States: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
      <mz-select label="Normal" placeholder="Select an option">
        <mz-option value="1">Option 1</mz-option>
        <mz-option value="2">Option 2</mz-option>
        <mz-option value="3">Option 3</mz-option>
      </mz-select>

      <mz-select label="Disabled" placeholder="Disabled select" disabled>
        <mz-option value="1">Option 1</mz-option>
        <mz-option value="2">Option 2</mz-option>
      </mz-select>

      <mz-select label="Required" placeholder="Required field" required>
        <mz-option value="1">Option 1</mz-option>
        <mz-option value="2">Option 2</mz-option>
        <mz-option value="3">Option 3</mz-option>
      </mz-select>

      <mz-select label="With Error" placeholder="Select an option" error="Please select a valid option">
        <mz-option value="1">Option 1</mz-option>
        <mz-option value="2">Option 2</mz-option>
      </mz-select>

      <mz-select label="With Helper Text" placeholder="Select an option" helper-text="Choose the option that best fits your needs">
        <mz-option value="1">Option 1</mz-option>
        <mz-option value="2">Option 2</mz-option>
        <mz-option value="3">Option 3</mz-option>
      </mz-select>
    </div>
  `
};

export const WithIcons: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
      <mz-select label="Payment Method" placeholder="Select payment method">
        <mz-option value="credit">
          <span style="display: flex; align-items: center; gap: 0.5rem;">
            💳 Credit Card
          </span>
        </mz-option>
        <mz-option value="debit">
          <span style="display: flex; align-items: center; gap: 0.5rem;">
            💰 Debit Card
          </span>
        </mz-option>
        <mz-option value="paypal">
          <span style="display: flex; align-items: center; gap: 0.5rem;">
            📱 PayPal
          </span>
        </mz-option>
        <mz-option value="bank">
          <span style="display: flex; align-items: center; gap: 0.5rem;">
            🏦 Bank Transfer
          </span>
        </mz-option>
      </mz-select>

      <mz-select label="Priority" placeholder="Select priority level">
        <mz-option value="low">
          <span style="color: var(--mz-color-success-600);">🟢 Low Priority</span>
        </mz-option>
        <mz-option value="medium">
          <span style="color: var(--mz-color-warning-600);">🟡 Medium Priority</span>
        </mz-option>
        <mz-option value="high">
          <span style="color: var(--mz-color-danger-600);">🔴 High Priority</span>
        </mz-option>
      </mz-select>
    </div>
  `
};

export const Clearable: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <mz-select
        label="Clearable Select"
        placeholder="Select an option (can be cleared)"
        clearable
        value="option2"
        helper-text="Click the clear button to reset selection"
      >
        <mz-option value="option1">Option 1</mz-option>
        <mz-option value="option2">Option 2 (Pre-selected)</mz-option>
        <mz-option value="option3">Option 3</mz-option>
        <mz-option value="option4">Option 4</mz-option>
      </mz-select>
    </div>
  `
};

export const Searchable: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <mz-select
        label="Searchable Select"
        placeholder="Type to search..."
        searchable
        helper-text="Start typing to filter options"
      >
        <mz-option value="apple">Apple</mz-option>
        <mz-option value="banana">Banana</mz-option>
        <mz-option value="cherry">Cherry</mz-option>
        <mz-option value="date">Date</mz-option>
        <mz-option value="elderberry">Elderberry</mz-option>
        <mz-option value="fig">Fig</mz-option>
        <mz-option value="grape">Grape</mz-option>
        <mz-option value="honeydew">Honeydew</mz-option>
        <mz-option value="kiwi">Kiwi</mz-option>
        <mz-option value="lemon">Lemon</mz-option>
        <mz-option value="mango">Mango</mz-option>
        <mz-option value="nectarine">Nectarine</mz-option>
        <mz-option value="orange">Orange</mz-option>
        <mz-option value="papaya">Papaya</mz-option>
        <mz-option value="quince">Quince</mz-option>
        <mz-option value="raspberry">Raspberry</mz-option>
        <mz-option value="strawberry">Strawberry</mz-option>
        <mz-option value="tangerine">Tangerine</mz-option>
        <mz-option value="watermelon">Watermelon</mz-option>
      </mz-select>
    </div>
  `
};

export const MultipleSelection: Story = {
  render: () => {
    const handleChange = (e: CustomEvent) => {
      const selected = document.querySelector('#selected-values');
      if (selected) {
        const values = e.detail.value;
        selected.innerHTML = values && values.length > 0
          ? `Selected: <strong>${Array.isArray(values) ? values.join(', ') : values}</strong>`
          : 'No items selected';
      }
    };

    return html`
      <div style="max-width: 400px;">
        <mz-select
          label="Multiple Selection"
          placeholder="Select multiple options"
          multiple
          helper-text="Hold Ctrl/Cmd to select multiple items"
          @mz-change="${handleChange}"
        >
          <mz-option value="javascript">JavaScript</mz-option>
          <mz-option value="typescript">TypeScript</mz-option>
          <mz-option value="python">Python</mz-option>
          <mz-option value="java">Java</mz-option>
          <mz-option value="csharp">C#</mz-option>
          <mz-option value="go">Go</mz-option>
          <mz-option value="rust">Rust</mz-option>
          <mz-option value="swift">Swift</mz-option>
        </mz-select>

        <div id="selected-values" style="margin-top: 1rem; padding: 1rem; background: var(--mz-color-primary-100); color: var(--mz-color-primary-700); border-radius: var(--mz-radius-md);">
          No items selected
        </div>
      </div>
    `;
  }
};

export const ProgrammaticControl: Story = {
  render: () => {
    const setValue = (value: string) => {
      const select = document.querySelector('#programmatic-select') as any;
      if (select) {
        const previousValue = select.value;
        select.value = value;

        // Display the change
        const display = document.querySelector('#value-display');
        if (display) {
          display.innerHTML = `Changed from <strong>"${previousValue || 'none'}"</strong> to <strong>"${value}"</strong>`;
        }
      }
    };

    const getValue = () => {
      const select = document.querySelector('#programmatic-select') as any;
      if (select) {
        const display = document.querySelector('#value-display');
        if (display) {
          display.innerHTML = `Current value: <strong>"${select.value || 'none'}"</strong>`;
        }
      }
    };

    return html`
      <div style="max-width: 500px;">
        <mz-select
          id="programmatic-select"
          label="Programmatically Controlled"
          placeholder="Select an option"
          @mz-change="${(e: CustomEvent) => {
            const display = document.querySelector('#value-display');
            if (display) {
              display.innerHTML = `User selected: <strong>"${e.detail.value}"</strong> (was: "${e.detail.previousValue || 'none'}")`;
            }
          }}"
        >
          <mz-option value="option1">Option 1</mz-option>
          <mz-option value="option2">Option 2</mz-option>
          <mz-option value="option3">Option 3</mz-option>
          <mz-option value="option4">Option 4</mz-option>
        </mz-select>

        <div style="margin-top: 1rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <button @click="${() => setValue('option1')}" style="padding: 0.5rem 1rem;">Set to Option 1</button>
          <button @click="${() => setValue('option2')}" style="padding: 0.5rem 1rem;">Set to Option 2</button>
          <button @click="${() => setValue('option3')}" style="padding: 0.5rem 1rem;">Set to Option 3</button>
          <button @click="${() => setValue('')}" style="padding: 0.5rem 1rem;">Clear</button>
          <button @click="${getValue}" style="padding: 0.5rem 1rem;">Get Value</button>
        </div>

        <div id="value-display" style="margin-top: 1rem; padding: 1rem; background: var(--mz-color-neutral-100); border-radius: var(--mz-radius-md);">
          Click a button to interact with the select...
        </div>
      </div>
    `;
  }
};

export const WithGroups: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <mz-select label="Grouped Options" placeholder="Select a region">
        <optgroup label="North America">
          <mz-option value="us">United States</mz-option>
          <mz-option value="ca">Canada</mz-option>
          <mz-option value="mx">Mexico</mz-option>
        </optgroup>
        <optgroup label="Europe">
          <mz-option value="uk">United Kingdom</mz-option>
          <mz-option value="de">Germany</mz-option>
          <mz-option value="fr">France</mz-option>
          <mz-option value="it">Italy</mz-option>
          <mz-option value="es">Spain</mz-option>
        </optgroup>
        <optgroup label="Asia">
          <mz-option value="jp">Japan</mz-option>
          <mz-option value="cn">China</mz-option>
          <mz-option value="kr">South Korea</mz-option>
          <mz-option value="in">India</mz-option>
        </optgroup>
        <optgroup label="Oceania">
          <mz-option value="au">Australia</mz-option>
          <mz-option value="nz">New Zealand</mz-option>
        </optgroup>
      </mz-select>
    </div>
  `
};

export const FormIntegration: Story = {
  render: () => html`
    <form @submit="${(e: Event) => {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      const data = Object.fromEntries(formData);
      console.log('Form submitted:', data);
      alert('Form submitted! Check console for data.');
    }}">
      <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
        <h3 style="margin: 0;">Shipping Information</h3>

        <mz-select name="country" label="Country" required>
          <mz-option value="">Select a country</mz-option>
          <mz-option value="us">United States</mz-option>
          <mz-option value="ca">Canada</mz-option>
          <mz-option value="uk">United Kingdom</mz-option>
          <mz-option value="au">Australia</mz-option>
        </mz-select>

        <mz-select name="shipping" label="Shipping Method" required>
          <mz-option value="">Select shipping</mz-option>
          <mz-option value="standard">Standard (5-7 days)</mz-option>
          <mz-option value="express">Express (2-3 days)</mz-option>
          <mz-option value="overnight">Overnight (1 day)</mz-option>
        </mz-select>

        <mz-select name="gift" label="Gift Options">
          <mz-option value="">No gift options</mz-option>
          <mz-option value="wrap">Gift wrapping (+$5)</mz-option>
          <mz-option value="message">Gift message (+$2)</mz-option>
          <mz-option value="both">Both wrapping and message (+$7)</mz-option>
        </mz-select>

        <button type="submit" style="padding: 0.75rem 1.5rem; background: var(--mz-color-primary-500); color: white; border: none; border-radius: var(--mz-radius-lg); cursor: pointer;">
          Submit Order
        </button>
      </div>
    </form>
  `
};

export const KeyboardNavigation: Story = {
  render: () => html`
    <div style="max-width: 500px;">
      <h3 style="margin: 0 0 1rem 0;">Keyboard Navigation Demo</h3>

      <mz-select
        label="Navigate with keyboard"
        placeholder="Focus and use arrow keys"
        helper-text="Tab to focus, Space/Enter to open, arrows to navigate, Enter to select, Escape to close"
        @mz-keydown="${(e: CustomEvent) => {
          const info = document.querySelector('#key-nav-info');
          if (info) {
            info.innerHTML = `Key pressed: <strong>${e.detail.key}</strong>`;
          }
        }}"
      >
        <mz-option value="first">First Option</mz-option>
        <mz-option value="second">Second Option</mz-option>
        <mz-option value="third">Third Option</mz-option>
        <mz-option value="fourth">Fourth Option</mz-option>
        <mz-option value="fifth">Fifth Option</mz-option>
      </mz-select>

      <div id="key-nav-info" style="margin-top: 1rem; padding: 0.75rem; background: var(--mz-color-info-100); color: var(--mz-color-info-700); border-radius: var(--mz-radius-md);">
        Press keys to see them here...
      </div>

      <div style="margin-top: 1rem; padding: 1rem; background: var(--mz-color-neutral-50); border-radius: var(--mz-radius-md);">
        <strong>Keyboard controls:</strong>
        <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem;">
          <li><kbd>Tab</kbd> - Focus select</li>
          <li><kbd>Space</kbd> / <kbd>Enter</kbd> - Open dropdown</li>
          <li><kbd>↑</kbd> / <kbd>↓</kbd> - Navigate options</li>
          <li><kbd>Home</kbd> / <kbd>End</kbd> - Jump to first/last</li>
          <li><kbd>Enter</kbd> - Select current option</li>
          <li><kbd>Escape</kbd> - Close dropdown</li>
        </ul>
      </div>
    </div>
  `
};