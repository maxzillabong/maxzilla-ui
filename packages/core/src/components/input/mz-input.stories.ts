import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
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
        component: `A versatile input component with built-in validation, multiple types, sizes, and visual states.

## Events

The input component emits the following custom events:

- **mz-input**: Fired on every input keystroke. Includes the current value and original InputEvent.
- **mz-change**: Fired when value changes and input loses focus. Includes the current value and original Event.
- **mz-focus**: Fired when input receives focus. Includes the original FocusEvent.
- **mz-blur**: Fired when input loses focus. Includes the original FocusEvent.
- **mz-keydown**: Fired on keydown. Includes the key pressed and original KeyboardEvent.
- **mz-keyup**: Fired on keyup. Includes the key pressed and original KeyboardEvent.
- **mz-enter**: Fired when Enter key is pressed. Includes the current value and original KeyboardEvent.

### Event Usage Example

\`\`\`javascript
const input = document.querySelector('mz-input');

input.addEventListener('mz-input', (event) => {
  console.log('Input value:', event.detail.value);
});

input.addEventListener('mz-enter', (event) => {
  console.log('Submit with value:', event.detail.value);
  event.detail.originalEvent.preventDefault();
});
\`\`\``
      }
    },
    actions: {
      handles: ['mz-input', 'mz-change', 'mz-focus', 'mz-blur', 'mz-keydown', 'mz-keyup', 'mz-enter']
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
      @mz-input="${action('mz-input')}"
      @mz-change="${action('mz-change')}"
      @mz-focus="${action('mz-focus')}"
      @mz-blur="${action('mz-blur')}"
      @mz-keydown="${action('mz-keydown')}"
      @mz-keyup="${action('mz-keyup')}"
      @mz-enter="${action('mz-enter')}"
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

export const EventHandling: Story = {
  parameters: {
    docs: {
      description: {
        story: `This story demonstrates all available input events. Open the Actions panel in Storybook to see events firing in real-time.

The input emits custom events with detailed information about user interactions, including the original browser events for full control.`
      }
    }
  },
  render: () => {
    // Track event counts for visual feedback
    let eventCounts = {
      input: 0,
      change: 0,
      focus: 0,
      blur: 0,
      keydown: 0,
      keyup: 0,
      enter: 0
    };

    const updateEventDisplay = (eventType: string) => {
      const displayEl = document.getElementById(`${eventType}-count`);
      if (displayEl) {
        eventCounts[eventType]++;
        displayEl.textContent = `${eventType}: ${eventCounts[eventType]}`;
        displayEl.style.fontWeight = 'bold';
        setTimeout(() => {
          displayEl.style.fontWeight = 'normal';
        }, 200);
      }
    };

    const logEvent = (eventName: string, detail: any) => {
      updateEventDisplay(eventName.replace('mz-', ''));
      const log = document.querySelector('#event-log');
      if (log) {
        const entry = document.createElement('div');
        entry.style.cssText = 'padding: 0.5rem; border-left: 3px solid var(--mz-color-primary); margin-bottom: 0.5rem;';
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
      <div style="display: flex; gap: 2rem; flex-direction: column;">
        <div>
          <h3 style="margin-bottom: 1rem;">Interactive Event Demo</h3>
          <p style="margin-bottom: 1rem; color: var(--mz-color-text-secondary);">
            Interact with the input below to see events fire. Check the Actions panel for detailed event logs.
          </p>

          <mz-input
            placeholder="Type to trigger events..."
            label="Event Demo Input"
            helper-text="Try typing, pressing Enter, focusing/blurring, using arrow keys, etc."
            @mz-input="${(e: CustomEvent) => {
              action('mz-input')(e.detail);
              logEvent('mz-input', e.detail);
            }}"
            @mz-change="${(e: CustomEvent) => {
              action('mz-change')(e.detail);
              logEvent('mz-change', e.detail);
            }}"
            @mz-focus="${(e: CustomEvent) => {
              action('mz-focus')(e.detail);
              logEvent('mz-focus', e.detail);
            }}"
            @mz-blur="${(e: CustomEvent) => {
              action('mz-blur')(e.detail);
              logEvent('mz-blur', e.detail);
            }}"
            @mz-keydown="${(e: CustomEvent) => {
              action('mz-keydown')(e.detail);
              logEvent('mz-keydown', e.detail);
            }}"
            @mz-keyup="${(e: CustomEvent) => {
              action('mz-keyup')(e.detail);
              logEvent('mz-keyup', e.detail);
            }}"
            @mz-enter="${(e: CustomEvent) => {
              action('mz-enter')(e.detail);
              logEvent('mz-enter', e.detail);
            }}"
          ></mz-input>
        </div>

        <div style="background: var(--mz-color-background-secondary); padding: 1rem; border-radius: var(--mz-radius-md);">
          <h4 style="margin-bottom: 0.5rem;">Event Counters:</h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 0.5rem; font-family: monospace; font-size: 0.875rem;">
            <div id="input-count" style="transition: font-weight 0.2s;">input: 0</div>
            <div id="change-count" style="transition: font-weight 0.2s;">change: 0</div>
            <div id="focus-count" style="transition: font-weight 0.2s;">focus: 0</div>
            <div id="blur-count" style="transition: font-weight 0.2s;">blur: 0</div>
            <div id="keydown-count" style="transition: font-weight 0.2s;">keydown: 0</div>
            <div id="keyup-count" style="transition: font-weight 0.2s;">keyup: 0</div>
            <div id="enter-count" style="transition: font-weight 0.2s;">enter: 0</div>
          </div>
        </div>

        <div>
          <h4 style="margin: 0 0 0.5rem 0;">Event Log (Last 5 Events):</h4>
          <div id="event-log" style="max-height: 300px; overflow-y: auto; background: var(--mz-color-background-secondary); border-radius: var(--mz-radius-md); padding: 0.5rem;">
            <div style="color: var(--mz-color-text-secondary); padding: 0.5rem;">Events will appear here...</div>
          </div>
        </div>
      </div>
    `;
  }
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

export const EnterKeyHandling: Story = {
  render: () => {
    const handleEnter = (e: CustomEvent) => {
      const results = document.querySelector('#search-results');
      if (results && e.detail.value) {
        results.innerHTML = `<div style="padding: 1rem; background: var(--mz-color-success-100); color: var(--mz-color-success-700); border-radius: var(--mz-radius-md);">
          Searching for: <strong>${e.detail.value}</strong>
        </div>`;
      }
    };

    return html`
      <div style="max-width: 400px;">
        <mz-input
          type="search"
          placeholder="Press Enter to search..."
          label="Search"
          helper-text="Type your query and press Enter"
          @mz-enter="${handleEnter}"
        >
          <svg slot="start" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
        </mz-input>
        <div id="search-results" style="margin-top: 1rem;"></div>
      </div>
    `;
  }
};

export const RealtimeValidation: Story = {
  render: () => {
    const validateEmail = (e: CustomEvent) => {
      const input = e.target as any;
      const email = e.detail.value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email) {
        input.error = '';
      } else if (!emailRegex.test(email)) {
        input.error = 'Please enter a valid email address';
      } else {
        input.error = '';
      }
    };

    const validatePassword = (e: CustomEvent) => {
      const input = e.target as any;
      const password = e.detail.value;

      if (!password) {
        input.error = '';
        input.helperText = 'Must be at least 8 characters';
      } else if (password.length < 8) {
        input.error = 'Password too short';
        input.helperText = `${8 - password.length} more characters needed`;
      } else if (!/\d/.test(password)) {
        input.error = 'Password must contain at least one number';
      } else if (!/[A-Z]/.test(password)) {
        input.error = 'Password must contain at least one uppercase letter';
      } else {
        input.error = '';
        input.helperText = 'Password strength: Strong';
      }
    };

    return html`
      <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
        <h3 style="margin: 0;">Real-time Validation Example</h3>

        <mz-input
          type="email"
          label="Email"
          placeholder="user@example.com"
          helper-text="We'll validate as you type"
          @mz-input="${validateEmail}"
        ></mz-input>

        <mz-input
          type="password"
          label="Password"
          placeholder="Enter a strong password"
          helper-text="Must be at least 8 characters"
          @mz-input="${validatePassword}"
        ></mz-input>
      </div>
    `;
  }
};

export const EventDetails: Story = {
  parameters: {
    docs: {
      description: {
        story: `This story demonstrates how to access the original browser event from the custom event's detail property.

Each custom event includes the original event in \`detail.originalEvent\`, giving you access to:
- Input value and selection range
- Keyboard modifiers (ctrlKey, shiftKey, altKey, metaKey)
- Event prevention (preventDefault, stopPropagation)
- Target information
- Timestamp and other native properties`
      }
    }
  },
  render: () => {
    const handleAdvancedInput = (e: CustomEvent) => {
      const originalEvent = e.detail.originalEvent as InputEvent;
      const input = e.target as HTMLInputElement;
      const info = {
        value: e.detail.value,
        inputType: originalEvent.inputType,
        data: originalEvent.data,
        isComposing: originalEvent.isComposing,
        selectionStart: input.selectionStart,
        selectionEnd: input.selectionEnd,
        timestamp: originalEvent.timeStamp
      };

      const displayEl = document.getElementById('input-details-display');
      if (displayEl) {
        displayEl.textContent = JSON.stringify(info, null, 2);
      }

      action('detailed-input')(info);
    };

    const handleKeydown = (e: CustomEvent) => {
      const originalEvent = e.detail.originalEvent as KeyboardEvent;
      const info = {
        key: e.detail.key,
        code: originalEvent.code,
        ctrlKey: originalEvent.ctrlKey,
        shiftKey: originalEvent.shiftKey,
        altKey: originalEvent.altKey,
        metaKey: originalEvent.metaKey,
        repeat: originalEvent.repeat
      };

      action('detailed-keydown')(info);

      // Example: Prevent default for certain key combinations
      if (originalEvent.ctrlKey && originalEvent.key === 's') {
        originalEvent.preventDefault();
        const resultEl = document.getElementById('shortcut-result');
        if (resultEl) {
          resultEl.textContent = 'Ctrl+S pressed - Default prevented!';
          resultEl.style.color = 'var(--mz-color-success)';
          setTimeout(() => {
            resultEl.textContent = '';
          }, 2000);
        }
      }
    };

    return html`
      <div style="display: flex; gap: 2rem; flex-direction: column;">
        <div>
          <h3 style="margin-bottom: 1rem;">Access Original Event Properties</h3>
          <p style="margin-bottom: 1rem; color: var(--mz-color-text-secondary);">
            Type in the input to see detailed event information including input type, selection range, and more.
          </p>
          <mz-input
            placeholder="Type or paste text..."
            label="Detailed Event Analysis"
            @mz-input="${handleAdvancedInput}"
          ></mz-input>
          <pre id="input-details-display" style="
            margin-top: 1rem;
            padding: 1rem;
            background: var(--mz-color-background-secondary);
            border-radius: var(--mz-radius-md);
            font-size: 0.875rem;
            min-height: 150px;
            font-family: monospace;
          ">Type to see event details...</pre>
        </div>

        <div>
          <h3 style="margin-bottom: 1rem;">Keyboard Shortcuts</h3>
          <p style="margin-bottom: 1rem; color: var(--mz-color-text-secondary);">
            Try keyboard shortcuts like Ctrl+S, Ctrl+A, etc. to see modifier key detection.
          </p>
          <mz-input
            placeholder="Press Ctrl+S to test shortcut prevention..."
            label="Shortcut Detection"
            @mz-keydown="${handleKeydown}"
          ></mz-input>
          <div id="shortcut-result" style="margin-top: 0.5rem; font-size: 0.875rem; font-weight: 500;"></div>
        </div>

        <div>
          <h3 style="margin-bottom: 1rem;">Enter Key Form Submission</h3>
          <p style="margin-bottom: 1rem; color: var(--mz-color-text-secondary);">
            Press Enter in the input to simulate form submission.
          </p>
          <form @submit="${(e: Event) => e.preventDefault()}" style="display: flex; gap: 1rem; align-items: flex-end;">
            <mz-input
              placeholder="Press Enter to submit..."
              label="Quick Submit"
              @mz-enter="${(e: CustomEvent) => {
                action('enter-submit')(e.detail);
                const resultEl = document.getElementById('submit-result');
                if (resultEl && e.detail.value) {
                  resultEl.innerHTML = `<div style="padding: 0.5rem; background: var(--mz-color-success-100); color: var(--mz-color-success-700); border-radius: var(--mz-radius-sm);">
                    Submitted: <strong>${e.detail.value}</strong>
                  </div>`;
                  setTimeout(() => {
                    resultEl.innerHTML = '';
                  }, 3000);
                }
              }}"
            ></mz-input>
          </form>
          <div id="submit-result" style="margin-top: 1rem;"></div>
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