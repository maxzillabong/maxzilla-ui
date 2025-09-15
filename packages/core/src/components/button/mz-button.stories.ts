import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import './mz-button.js';

const meta: Meta = {
  title: 'Actions/Button',
  component: 'mz-button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive'],
      description: 'Visual style variant of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' }
      }
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
      }
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'HTML button type attribute',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'button' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button should take full width of its container',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    iconOnly: {
      control: 'boolean',
      description: 'Whether the button contains only an icon (adjusts padding)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in loading state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    href: {
      control: 'text',
      description: 'If provided, renders the button as an anchor tag',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      }
    },
    target: {
      control: 'select',
      options: [undefined, '_blank', '_self', '_parent', '_top'],
      description: 'Target attribute for anchor links',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '_self' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `A versatile button component with multiple variants, sizes, and states. Supports icons, loading states, and can be rendered as a link.

## Events

The button component emits the following custom events:

- **mz-click**: Fired when the button is clicked. Includes the original mouse/keyboard event in \`detail.originalEvent\`
- **mz-focus**: Fired when the button receives focus. Includes the original focus event in \`detail.originalEvent\`
- **mz-blur**: Fired when the button loses focus. Includes the original blur event in \`detail.originalEvent\`
- **mz-mouseenter**: Fired when mouse enters the button. Includes the original mouseenter event in \`detail.originalEvent\`
- **mz-mouseleave**: Fired when mouse leaves the button. Includes the original mouseleave event in \`detail.originalEvent\`

### Event Usage Example

\`\`\`javascript
const button = document.querySelector('mz-button');

button.addEventListener('mz-click', (event) => {
  console.log('Button clicked', event.detail.originalEvent);
});

button.addEventListener('mz-focus', (event) => {
  console.log('Button focused', event.detail.originalEvent);
});
\`\`\``
      }
    },
    actions: {
      handles: ['mz-click', 'mz-focus', 'mz-blur', 'mz-mouseenter', 'mz-mouseleave']
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    fullWidth: false
  },
  render: (args) => html`
    <mz-button
      variant="${args.variant}"
      size="${args.size}"
      type="${args.type}"
      ?disabled="${args.disabled}"
      ?full-width="${args.fullWidth}"
      ?icon-only="${args.iconOnly}"
      ?loading="${args.loading}"
      href="${args.href}"
      target="${args.target}"
      @mz-click="${action('mz-click')}"
      @mz-focus="${action('mz-focus')}"
      @mz-blur="${action('mz-blur')}"
      @mz-mouseenter="${action('mz-mouseenter')}"
      @mz-mouseleave="${action('mz-mouseleave')}"
    >
      Click me
    </mz-button>
  `
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <mz-button variant="primary">Primary</mz-button>
      <mz-button variant="secondary">Secondary</mz-button>
      <mz-button variant="outline">Outline</mz-button>
      <mz-button variant="ghost">Ghost</mz-button>
      <mz-button variant="destructive">Destructive</mz-button>
    </div>
  `
};

export const EventHandling: Story = {
  parameters: {
    docs: {
      description: {
        story: `This story demonstrates all available button events. Open the Actions panel in Storybook to see events firing in real-time.

The button emits custom events that include the original browser event in the \`detail.originalEvent\` property, allowing you to access all native event properties and methods.`
      }
    }
  },
  render: () => {
    // Track event counts for visual feedback
    let eventCounts = {
      click: 0,
      focus: 0,
      blur: 0,
      mouseenter: 0,
      mouseleave: 0
    };

    const updateEventDisplay = (eventType: string, displayEl: HTMLElement) => {
      eventCounts[eventType]++;
      displayEl.textContent = `${eventType}: ${eventCounts[eventType]}`;
      displayEl.style.fontWeight = 'bold';
      setTimeout(() => {
        displayEl.style.fontWeight = 'normal';
      }, 200);
    };

    return html`
      <div style="display: flex; gap: 2rem; flex-direction: column;">
        <div>
          <h3 style="margin-bottom: 1rem;">Interactive Event Demo</h3>
          <p style="margin-bottom: 1rem; color: var(--mz-color-text-secondary);">
            Interact with the button below to see events fire. Check the Actions panel for detailed event logs.
          </p>

          <mz-button
            variant="primary"
            size="lg"
            @mz-click="${(e: CustomEvent) => {
              action('mz-click')(e.detail);
              updateEventDisplay('click', document.getElementById('click-count')!);
            }}"
            @mz-focus="${(e: CustomEvent) => {
              action('mz-focus')(e.detail);
              updateEventDisplay('focus', document.getElementById('focus-count')!);
            }}"
            @mz-blur="${(e: CustomEvent) => {
              action('mz-blur')(e.detail);
              updateEventDisplay('blur', document.getElementById('blur-count')!);
            }}"
            @mz-mouseenter="${(e: CustomEvent) => {
              action('mz-mouseenter')(e.detail);
              updateEventDisplay('mouseenter', document.getElementById('mouseenter-count')!);
            }}"
            @mz-mouseleave="${(e: CustomEvent) => {
              action('mz-mouseleave')(e.detail);
              updateEventDisplay('mouseleave', document.getElementById('mouseleave-count')!);
            }}"
          >
            Interact With Me
          </mz-button>
        </div>

        <div style="background: var(--mz-color-background-secondary); padding: 1rem; border-radius: var(--mz-radius-md);">
          <h4 style="margin-bottom: 0.5rem;">Event Counters:</h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 0.5rem; font-family: monospace; font-size: 0.875rem;">
            <div id="click-count" style="transition: font-weight 0.2s;">click: 0</div>
            <div id="focus-count" style="transition: font-weight 0.2s;">focus: 0</div>
            <div id="blur-count" style="transition: font-weight 0.2s;">blur: 0</div>
            <div id="mouseenter-count" style="transition: font-weight 0.2s;">mouseenter: 0</div>
            <div id="mouseleave-count" style="transition: font-weight 0.2s;">mouseleave: 0</div>
          </div>
        </div>

        <div>
          <h3 style="margin-bottom: 1rem;">Multiple Event Handlers Example</h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <mz-button
              variant="secondary"
              @mz-click="${(e: CustomEvent) => {
                action('button-1-click')(e.detail);
                console.log('Button 1 clicked', e.detail.originalEvent);
              }}"
              @mz-focus="${action('button-1-focus')}"
              @mz-blur="${action('button-1-blur')}"
            >
              Button with Logging
            </mz-button>

            <mz-button
              variant="outline"
              @mz-click="${(e: CustomEvent) => {
                action('button-2-click')(e.detail);
                const target = e.target as HTMLElement;
                target.setAttribute('loading', 'true');
                setTimeout(() => target.removeAttribute('loading'), 1500);
              }}"
            >
              Click to Load
            </mz-button>

            <mz-button
              variant="ghost"
              @mz-mouseenter="${(e: CustomEvent) => {
                action('hover-button-enter')(e.detail);
                const target = e.target as HTMLElement;
                target.textContent = 'Mouse Entered!';
              }}"
              @mz-mouseleave="${(e: CustomEvent) => {
                action('hover-button-leave')(e.detail);
                const target = e.target as HTMLElement;
                target.textContent = 'Hover Me';
              }}"
            >
              Hover Me
            </mz-button>
          </div>
        </div>

        <div>
          <h3 style="margin-bottom: 1rem;">Keyboard Navigation</h3>
          <p style="margin-bottom: 1rem; color: var(--mz-color-text-secondary);">
            Tab through these buttons and press Space or Enter to trigger click events.
          </p>
          <div style="display: flex; gap: 1rem;">
            <mz-button
              @mz-click="${action('keyboard-nav-1')}"
              @mz-focus="${action('keyboard-focus-1')}"
              @mz-blur="${action('keyboard-blur-1')}"
            >
              First
            </mz-button>
            <mz-button
              variant="secondary"
              @mz-click="${action('keyboard-nav-2')}"
              @mz-focus="${action('keyboard-focus-2')}"
              @mz-blur="${action('keyboard-blur-2')}"
            >
              Second
            </mz-button>
            <mz-button
              variant="outline"
              @mz-click="${action('keyboard-nav-3')}"
              @mz-focus="${action('keyboard-focus-3')}"
              @mz-blur="${action('keyboard-blur-3')}"
            >
              Third
            </mz-button>
          </div>
        </div>
      </div>
    `;
  }
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <mz-button size="xs">Extra Small</mz-button>
      <mz-button size="sm">Small</mz-button>
      <mz-button size="md">Medium</mz-button>
      <mz-button size="lg">Large</mz-button>
      <mz-button size="xl">Extra Large</mz-button>
    </div>
  `
};

export const States: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <mz-button>Normal</mz-button>
      <mz-button disabled>Disabled</mz-button>
      <mz-button loading>Loading</mz-button>
    </div>
  `
};

export const WithIcons: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <mz-button>
        <svg slot="start" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
        </svg>
        With Start Icon
      </mz-button>

      <mz-button>
        With End Icon
        <svg slot="end" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </mz-button>

      <mz-button icon-only aria-label="Settings">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6m4.22-13.22l4.24 4.24M1.54 1.54l4.24 4.24M20.46 20.46l-4.24-4.24M1.54 20.46l4.24-4.24"/>
        </svg>
      </mz-button>
    </div>
  `
};

export const FullWidth: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <mz-button full-width>Full Width Button</mz-button>
      <div style="margin-top: 1rem;">
        <mz-button full-width variant="secondary">Full Width Secondary</mz-button>
      </div>
      <div style="margin-top: 1rem;">
        <mz-button full-width variant="outline">Full Width Outline</mz-button>
      </div>
    </div>
  `
};

export const AsLink: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <mz-button href="https://example.com" target="_blank">
        External Link
        <svg slot="end" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      </mz-button>

      <mz-button href="/internal" variant="secondary">Internal Link</mz-button>

      <mz-button href="#anchor" variant="outline">Anchor Link</mz-button>
    </div>
  `
};

export const LoadingStates: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <mz-button loading variant="primary">Primary Loading</mz-button>
      <mz-button loading variant="secondary">Secondary Loading</mz-button>
      <mz-button loading variant="outline">Outline Loading</mz-button>
      <mz-button loading variant="ghost">Ghost Loading</mz-button>
      <mz-button loading variant="destructive">Destructive Loading</mz-button>
    </div>
  `
};

export const ButtonGroup: Story = {
  render: () => html`
    <div style="display: flex; gap: 0.25rem;">
      <mz-button variant="outline">Left</mz-button>
      <mz-button variant="outline">Center</mz-button>
      <mz-button variant="outline">Right</mz-button>
    </div>
  `
};

export const Interactive: Story = {
  render: () => {
    let clickCount = 0;
    const handleClick = (e: CustomEvent) => {
      clickCount++;
      const button = e.target as HTMLElement;
      button.textContent = `Clicked ${clickCount} time${clickCount !== 1 ? 's' : ''}`;
    };

    return html`
      <div style="display: flex; gap: 1rem; flex-direction: column; max-width: 300px;">
        <mz-button @mz-click="${handleClick}">Click to count</mz-button>

        <mz-button
          variant="secondary"
          @mz-click="${() => alert('Button clicked!')}"
        >
          Click for alert
        </mz-button>

        <mz-button
          variant="outline"
          @mz-click="${(e: CustomEvent) => {
            const btn = e.target as HTMLElement;
            btn.setAttribute('loading', 'true');
            setTimeout(() => btn.removeAttribute('loading'), 2000);
          }}"
        >
          Click to load
        </mz-button>
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
- Event coordinates (clientX, clientY)
- Modifier keys (ctrlKey, shiftKey, altKey, metaKey)
- Event prevention (preventDefault, stopPropagation)
- Target information
- Timestamp and other native properties`
      }
    }
  },
  render: () => {
    const handleAdvancedClick = (e: CustomEvent) => {
      const originalEvent = e.detail.originalEvent as MouseEvent;
      const info = {
        type: originalEvent.type,
        button: originalEvent.button,
        clientX: originalEvent.clientX,
        clientY: originalEvent.clientY,
        ctrlKey: originalEvent.ctrlKey,
        shiftKey: originalEvent.shiftKey,
        altKey: originalEvent.altKey,
        metaKey: originalEvent.metaKey,
        timestamp: originalEvent.timeStamp
      };

      const displayEl = document.getElementById('event-details-display');
      if (displayEl) {
        displayEl.textContent = JSON.stringify(info, null, 2);
      }

      action('detailed-click')(info);
    };

    const handleFormSubmit = (e: CustomEvent) => {
      // Access original event to prevent default form submission
      const originalEvent = e.detail.originalEvent as Event;
      originalEvent.preventDefault();

      action('form-submit-prevented')({
        defaultPrevented: originalEvent.defaultPrevented,
        timestamp: originalEvent.timeStamp
      });

      const resultEl = document.getElementById('form-result');
      if (resultEl) {
        resultEl.textContent = 'Form submission prevented!';
        resultEl.style.color = 'var(--mz-color-success)';
        setTimeout(() => {
          resultEl.textContent = '';
        }, 2000);
      }
    };

    return html`
      <div style="display: flex; gap: 2rem; flex-direction: column;">
        <div>
          <h3 style="margin-bottom: 1rem;">Access Original Event Properties</h3>
          <p style="margin-bottom: 1rem; color: var(--mz-color-text-secondary);">
            Click the button with different modifier keys held down to see the event details.
          </p>
          <mz-button
            variant="primary"
            size="lg"
            @mz-click="${handleAdvancedClick}"
          >
            Click with Modifiers (Ctrl, Shift, Alt)
          </mz-button>
          <pre id="event-details-display" style="
            margin-top: 1rem;
            padding: 1rem;
            background: var(--mz-color-background-secondary);
            border-radius: var(--mz-radius-md);
            font-size: 0.875rem;
            min-height: 200px;
            font-family: monospace;
          ">Click the button to see event details...</pre>
        </div>

        <div>
          <h3 style="margin-bottom: 1rem;">Prevent Default Behavior</h3>
          <p style="margin-bottom: 1rem; color: var(--mz-color-text-secondary);">
            This example shows how to prevent default form submission using the original event.
          </p>
          <form style="display: flex; gap: 1rem; align-items: center;">
            <input
              type="text"
              placeholder="Enter text..."
              style="
                padding: 0.5rem;
                border: 1px solid var(--mz-color-border);
                border-radius: var(--mz-radius-sm);
                background: var(--mz-color-background);
                color: var(--mz-color-text);
              "
            />
            <mz-button
              type="submit"
              variant="secondary"
              @mz-click="${handleFormSubmit}"
            >
              Submit Form
            </mz-button>
            <span id="form-result" style="font-size: 0.875rem; font-weight: 500;"></span>
          </form>
        </div>

        <div>
          <h3 style="margin-bottom: 1rem;">Event Coordinates</h3>
          <p style="margin-bottom: 1rem; color: var(--mz-color-text-secondary);">
            Track mouse position during click events.
          </p>
          <div style="
            position: relative;
            padding: 2rem;
            background: var(--mz-color-background-secondary);
            border-radius: var(--mz-radius-md);
            min-height: 150px;
          ">
            <mz-button
              variant="outline"
              @mz-click="${(e: CustomEvent) => {
                const originalEvent = e.detail.originalEvent as MouseEvent;
                const marker = document.createElement('div');
                marker.style.cssText = `
                  position: absolute;
                  left: ${originalEvent.offsetX}px;
                  top: ${originalEvent.offsetY}px;
                  width: 10px;
                  height: 10px;
                  background: var(--mz-color-primary);
                  border-radius: 50%;
                  pointer-events: none;
                  animation: pulse 1s ease-out;
                  transform: translate(-50%, -50%);
                `;
                const container = e.currentTarget as HTMLElement;
                container.parentElement?.appendChild(marker);
                setTimeout(() => marker.remove(), 1000);

                action('click-coordinates')({
                  offsetX: originalEvent.offsetX,
                  offsetY: originalEvent.offsetY,
                  clientX: originalEvent.clientX,
                  clientY: originalEvent.clientY
                });
              }}"
            >
              Click to Mark Position
            </mz-button>
          </div>
        </div>
      </div>

      <style>
        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
          }
        }
      </style>
    `;
  }
};

export const AllCombinations: Story = {
  render: () => {
    const variants = ['primary', 'secondary', 'outline', 'ghost', 'destructive'];
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

    return html`
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        ${variants.map(variant => html`
          <div>
            <h3 style="margin-bottom: 1rem; text-transform: capitalize;">${variant} Variant</h3>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
              ${sizes.map(size => html`
                <mz-button variant="${variant}" size="${size}">
                  ${size.toUpperCase()}
                </mz-button>
              `)}
            </div>
          </div>
        `)}
      </div>
    `;
  }
};