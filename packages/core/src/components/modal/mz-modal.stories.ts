import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './mz-modal.js';
import '../button/mz-button.js';

const meta: Meta = {
  title: 'Overlays/Modal',
  component: 'mz-modal',
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the modal is open',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'Size of the modal',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
      }
    },
    preventClose: {
      control: 'boolean',
      description: 'Prevent closing on backdrop click or escape',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `A modal dialog component for displaying content in an overlay with various sizes and behaviors.

### Events (Shoelace Pattern)

| Event | Description | Detail |
|-------|-------------|--------|
| mz-show | Fired when modal starts showing animation | None |
| mz-after-show | Fired after show animation completes | None |
| mz-hide | Fired when modal starts hiding animation | None |
| mz-after-hide | Fired after hide animation completes | None |
| mz-request-close | Cancelable event fired when close is requested | \`{ source: 'overlay'\|'keyboard'\|'close-button'\|'method', originalEvent?: Event }\` |

### Legacy Events (Maintained for backwards compatibility)

| Event | Description | Detail |
|-------|-------------|--------|
| mz-modal-show | Fired when modal opens | None |
| mz-modal-close | Fired when close is requested | \`{ source: string }\` |
| mz-modal-closed | Fired after modal is fully closed | None |`
      }
    },
    actions: {
      handles: ['mz-show', 'mz-after-show', 'mz-hide', 'mz-after-hide', 'mz-request-close', 'mz-modal-show', 'mz-modal-close', 'mz-modal-closed']
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const handleOpen = () => {
      const modal = document.querySelector('#default-modal') as any;
      if (modal) modal.open = true;
    };

    return html`
      <div>
        <mz-button @click="${handleOpen}">Open Modal</mz-button>
        
        <mz-modal id="default-modal">
          <h2 slot="header">Modal Title</h2>
          <p>This is the modal content. You can put any content here.</p>
          <div slot="footer" style="display: flex; gap: 0.5rem; justify-content: flex-end;">
            <mz-button variant="ghost" @click="${() => {
              const modal = document.querySelector('#default-modal') as any;
              if (modal) modal.open = false;
            }}">Cancel</mz-button>
            <mz-button>Confirm</mz-button>
          </div>
        </mz-modal>
      </div>
    `;
  }
};

export const Sizes: Story = {
  render: () => {
    const openModal = (id: string) => {
      const modal = document.querySelector(`#${id}`) as any;
      if (modal) modal.open = true;
    };

    return html`
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <mz-button @click="${() => openModal('modal-sm')}">Small Modal</mz-button>
        <mz-button @click="${() => openModal('modal-md')}">Medium Modal</mz-button>
        <mz-button @click="${() => openModal('modal-lg')}">Large Modal</mz-button>
        <mz-button @click="${() => openModal('modal-xl')}">XL Modal</mz-button>
        <mz-button @click="${() => openModal('modal-full')}">Full Modal</mz-button>
        
        <mz-modal id="modal-sm" size="sm">
          <h3 slot="header">Small Modal</h3>
          <p>This is a small modal dialog.</p>
        </mz-modal>
        
        <mz-modal id="modal-md" size="md">
          <h3 slot="header">Medium Modal</h3>
          <p>This is a medium-sized modal dialog (default).</p>
        </mz-modal>
        
        <mz-modal id="modal-lg" size="lg">
          <h3 slot="header">Large Modal</h3>
          <p>This is a large modal dialog with more space for content.</p>
        </mz-modal>
        
        <mz-modal id="modal-xl" size="xl">
          <h3 slot="header">Extra Large Modal</h3>
          <p>This is an extra large modal dialog for complex content.</p>
        </mz-modal>
        
        <mz-modal id="modal-full" size="full">
          <h3 slot="header">Full Screen Modal</h3>
          <p>This modal takes up the full screen.</p>
        </mz-modal>
      </div>
    `;
  }
};

export const PreventClose: Story = {
  render: () => {
    const handleOpen = () => {
      const modal = document.querySelector('#prevent-close-modal') as any;
      if (modal) modal.open = true;
    };

    return html`
      <div>
        <mz-button @click="${handleOpen}">Open Modal (Can't close by clicking outside)</mz-button>
        
        <mz-modal id="prevent-close-modal" prevent-close>
          <h2 slot="header">Important Action Required</h2>
          <p>This modal cannot be closed by clicking outside or pressing Escape. You must use the buttons below.</p>
          <div slot="footer" style="display: flex; gap: 0.5rem; justify-content: flex-end;">
            <mz-button @click="${() => {
              const modal = document.querySelector('#prevent-close-modal') as any;
              if (modal) modal.open = false;
            }}">Close Modal</mz-button>
          </div>
        </mz-modal>
      </div>
    `;
  }
};

export const EventHandling: Story = {
  render: () => {
    const logEvent = (eventName: string, detail?: any) => {
      const log = document.querySelector('#modal-event-log');
      if (log) {
        const entry = document.createElement('div');
        entry.style.cssText = 'padding: 0.5rem; border-left: 3px solid var(--mz-color-primary-500); margin-bottom: 0.5rem;';
        const detailStr = detail ? `<br><code style="font-size: 0.875rem;">${JSON.stringify(detail, null, 2)}</code>` : '';
        entry.innerHTML = `<strong>${eventName}</strong>${detailStr}`;
        log.insertBefore(entry, log.firstChild);

        // Keep only last 8 events
        while (log.children.length > 8) {
          log.removeChild(log.lastChild);
        }
      }
    };

    const handleOpen = () => {
      const modal = document.querySelector('#event-demo-modal') as any;
      if (modal) modal.open = true;
    };

    return html`
      <div style="max-width: 700px;">
        <mz-button @click="${handleOpen}">Open Modal with Events</mz-button>

        <mz-modal
          id="event-demo-modal"
          @mz-show="${() => logEvent('mz-show')}"
          @mz-after-show="${() => logEvent('mz-after-show')}"
          @mz-hide="${() => logEvent('mz-hide')}"
          @mz-after-hide="${() => logEvent('mz-after-hide')}"
          @mz-request-close="${(e: CustomEvent) => logEvent('mz-request-close', e.detail)}"
          @mz-modal-show="${() => logEvent('mz-modal-show (legacy)')}"
          @mz-modal-close="${(e: CustomEvent) => logEvent('mz-modal-close (legacy)', e.detail)}"
          @mz-modal-closed="${() => logEvent('mz-modal-closed (legacy)')}"
        >
          <h2 slot="header">Event Demo Modal</h2>
          <p>This modal demonstrates all available events. Try different ways to close it:</p>
          <ul>
            <li>Click the X button (source: 'close-button')</li>
            <li>Click outside the modal (source: 'overlay')</li>
            <li>Press Escape key (source: 'keyboard')</li>
            <li>Click the Close button below (source: 'method')</li>
          </ul>
          <div slot="footer" style="display: flex; gap: 0.5rem; justify-content: flex-end;">
            <mz-button @click="${() => {
              const modal = document.querySelector('#event-demo-modal') as any;
              if (modal) modal.open = false;
            }}">Close Modal</mz-button>
          </div>
        </mz-modal>

        <div style="margin-top: 1.5rem;">
          <h4 style="margin: 0 0 0.5rem 0;">Event Log:</h4>
          <div id="modal-event-log" style="max-height: 400px; overflow-y: auto; background: var(--mz-color-neutral-100); border-radius: var(--mz-radius-lg); padding: 0.5rem;">
            <div style="color: var(--mz-color-neutral-500); padding: 0.5rem;">Events will appear here when you interact with the modal...</div>
          </div>
        </div>
      </div>
    `;
  }
};

export const PreventableClose: Story = {
  render: () => {
    const handleOpen = () => {
      const modal = document.querySelector('#preventable-modal') as any;
      if (modal) modal.open = true;
    };

    const handleRequestClose = (e: CustomEvent) => {
      const { source } = e.detail;
      const allowClose = confirm(`Close request from "${source}". Allow close?`);

      if (!allowClose) {
        e.preventDefault();
        console.log(`Prevented close from source: ${source}`);
      }
    };

    return html`
      <div style="max-width: 600px;">
        <mz-button @click="${handleOpen}">Open Modal with Preventable Close</mz-button>

        <mz-modal
          id="preventable-modal"
          @mz-request-close="${handleRequestClose}"
        >
          <h2 slot="header">Preventable Close Demo</h2>
          <p>This modal demonstrates the cancelable <code>mz-request-close</code> event.</p>
          <p>When you try to close this modal, you'll be asked to confirm. You can prevent the close by canceling the confirmation dialog.</p>
          <p>Try closing via:</p>
          <ul>
            <li>Close button</li>
            <li>Overlay click</li>
            <li>Escape key</li>
          </ul>
          <div slot="footer" style="display: flex; gap: 0.5rem; justify-content: flex-end;">
            <mz-button @click="${() => {
              const modal = document.querySelector('#preventable-modal') as any;
              if (modal) modal.open = false;
            }}">Try to Close</mz-button>
          </div>
        </mz-modal>
      </div>
    `;
  }
};

export const AnimationLifecycle: Story = {
  render: () => {
    const handleOpen = () => {
      const modal = document.querySelector('#lifecycle-modal') as any;
      const status = document.querySelector('#lifecycle-status');

      if (modal) {
        modal.open = true;
        if (status) status.textContent = 'Opening modal...';
      }
    };

    return html`
      <div style="max-width: 600px;">
        <mz-button @click="${handleOpen}">Open Modal with Animation Lifecycle</mz-button>

        <mz-modal
          id="lifecycle-modal"
          @mz-show="${() => {
            const status = document.querySelector('#lifecycle-status');
            if (status) status.textContent = '1. mz-show fired (animation starting)';
          }}"
          @mz-after-show="${() => {
            const status = document.querySelector('#lifecycle-status');
            if (status) status.textContent = '2. mz-after-show fired (animation complete, modal visible)';
          }}"
          @mz-hide="${() => {
            const status = document.querySelector('#lifecycle-status');
            if (status) status.textContent = '3. mz-hide fired (closing animation starting)';
          }}"
          @mz-after-hide="${() => {
            const status = document.querySelector('#lifecycle-status');
            if (status) status.textContent = '4. mz-after-hide fired (animation complete, modal hidden)';
          }}"
        >
          <h2 slot="header">Animation Lifecycle</h2>
          <p>Watch the status below to see the event lifecycle as the modal opens and closes.</p>
          <p>The events fire in this order:</p>
          <ol>
            <li><strong>mz-show</strong> - When opening animation starts</li>
            <li><strong>mz-after-show</strong> - When opening animation completes</li>
            <li><strong>mz-hide</strong> - When closing animation starts</li>
            <li><strong>mz-after-hide</strong> - When closing animation completes</li>
          </ol>
          <div slot="footer" style="display: flex; gap: 0.5rem; justify-content: flex-end;">
            <mz-button @click="${() => {
              const modal = document.querySelector('#lifecycle-modal') as any;
              if (modal) modal.open = false;
            }}">Close Modal</mz-button>
          </div>
        </mz-modal>

        <div id="lifecycle-status" style="margin-top: 1rem; padding: 1rem; background: var(--mz-color-info-100); color: var(--mz-color-info-700); border-radius: var(--mz-radius-md); min-height: 3rem; display: flex; align-items: center;">
          Ready to open modal...
        </div>
      </div>
    `;
  }
};

export const KeyboardInteraction: Story = {
  render: () => {
    const handleOpen = () => {
      const modal = document.querySelector('#keyboard-modal') as any;
      if (modal) modal.open = true;
    };

    return html`
      <div style="max-width: 600px;">
        <mz-button @click="${handleOpen}">Open Modal with Keyboard Support</mz-button>

        <mz-modal
          id="keyboard-modal"
          @mz-request-close="${(e: CustomEvent) => {
            if (e.detail.source === 'keyboard') {
              const info = document.querySelector('#keyboard-info');
              if (info) {
                info.textContent = 'Modal closed using Escape key!';
                setTimeout(() => {
                  if (info) info.textContent = 'Press button to open modal again';
                }, 2000);
              }
            }
          }}"
        >
          <h2 slot="header">Keyboard Interaction</h2>
          <div>
            <p>This modal demonstrates keyboard accessibility:</p>
            <ul style="line-height: 1.8;">
              <li><kbd>Escape</kbd> - Close the modal</li>
              <li><kbd>Tab</kbd> - Navigate through focusable elements</li>
              <li><kbd>Shift + Tab</kbd> - Navigate backwards</li>
            </ul>
            <p>Focus is trapped within the modal while it's open, preventing Tab navigation to elements behind the modal.</p>

            <div style="margin-top: 1rem; display: flex; gap: 0.5rem;">
              <input type="text" placeholder="Tab to me first" style="padding: 0.5rem; flex: 1;" />
              <button style="padding: 0.5rem 1rem;">Then to me</button>
            </div>
          </div>
          <div slot="footer" style="display: flex; gap: 0.5rem; justify-content: flex-end;">
            <mz-button variant="ghost" @click="${() => {
              const modal = document.querySelector('#keyboard-modal') as any;
              if (modal) modal.open = false;
            }}">Cancel</mz-button>
            <mz-button>Confirm</mz-button>
          </div>
        </mz-modal>

        <div id="keyboard-info" style="margin-top: 1rem; padding: 1rem; background: var(--mz-color-neutral-100); border-radius: var(--mz-radius-md);">
          Press button to open modal
        </div>
      </div>
    `;
  }
};

export const ProgrammaticControl: Story = {
  render: () => {
    let modalInstance: any = null;

    const getModal = () => {
      if (!modalInstance) {
        modalInstance = document.querySelector('#programmatic-modal');
      }
      return modalInstance;
    };

    const openModal = () => {
      const modal = getModal();
      if (modal) {
        modal.open = true;
        updateStatus('Modal opened programmatically');
      }
    };

    const closeModal = () => {
      const modal = getModal();
      if (modal) {
        modal.open = false;
        updateStatus('Modal closed programmatically');
      }
    };

    const toggleModal = () => {
      const modal = getModal();
      if (modal) {
        modal.open = !modal.open;
        updateStatus(`Modal ${modal.open ? 'opened' : 'closed'} (toggled)`);
      }
    };

    const checkStatus = () => {
      const modal = getModal();
      if (modal) {
        updateStatus(`Modal is currently: ${modal.open ? 'OPEN' : 'CLOSED'}`);
      }
    };

    const updateStatus = (message: string) => {
      const status = document.querySelector('#control-status');
      if (status) {
        status.textContent = message;
      }
    };

    return html`
      <div style="max-width: 600px;">
        <h3 style="margin: 0 0 1rem 0;">Programmatic Modal Control</h3>

        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
          <button @click="${openModal}" style="padding: 0.5rem 1rem;">Open Modal</button>
          <button @click="${closeModal}" style="padding: 0.5rem 1rem;">Close Modal</button>
          <button @click="${toggleModal}" style="padding: 0.5rem 1rem;">Toggle Modal</button>
          <button @click="${checkStatus}" style="padding: 0.5rem 1rem;">Check Status</button>
        </div>

        <mz-modal id="programmatic-modal">
          <h2 slot="header">Programmatically Controlled</h2>
          <p>This modal is controlled via JavaScript methods.</p>
          <p>You can open, close, toggle, and check the status using the buttons outside the modal.</p>
          <div slot="footer" style="display: flex; gap: 0.5rem; justify-content: flex-end;">
            <mz-button @click="${closeModal}">Close</mz-button>
          </div>
        </mz-modal>

        <div id="control-status" style="padding: 1rem; background: var(--mz-color-primary-100); color: var(--mz-color-primary-700); border-radius: var(--mz-radius-md);">
          Ready for interaction...
        </div>
      </div>
    `;
  }
};

export const FormExample: Story = {
  render: () => {
    const handleOpen = () => {
      const modal = document.querySelector('#form-modal') as any;
      if (modal) modal.open = true;
    };

    const handleSubmit = (e: Event) => {
      e.preventDefault();
      alert('Form submitted!');
      const modal = document.querySelector('#form-modal') as any;
      if (modal) modal.open = false;
    };

    return html`
      <div>
        <mz-button @click="${handleOpen}">Open Form Modal</mz-button>

        <mz-modal id="form-modal" size="lg">
          <h2 slot="header">User Registration</h2>
          <form @submit="${handleSubmit}" style="display: flex; flex-direction: column; gap: 1rem;">
            <label>
              Name:
              <input type="text" required style="width: 100%; padding: 0.5rem; margin-top: 0.25rem;" />
            </label>
            <label>
              Email:
              <input type="email" required style="width: 100%; padding: 0.5rem; margin-top: 0.25rem;" />
            </label>
            <label>
              Message:
              <textarea required style="width: 100%; padding: 0.5rem; margin-top: 0.25rem; min-height: 100px;"></textarea>
            </label>
          </form>
          <div slot="footer" style="display: flex; gap: 0.5rem; justify-content: flex-end;">
            <mz-button variant="ghost" @click="${() => {
              const modal = document.querySelector('#form-modal') as any;
              if (modal) modal.open = false;
            }}">Cancel</mz-button>
            <mz-button type="submit" @click="${handleSubmit}">Submit</mz-button>
          </div>
        </mz-modal>
      </div>
    `;
  }
};