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
        component: 'A modal dialog component for displaying content in an overlay with various sizes and behaviors.'
      }
    },
    actions: {
      handles: ['mz-modal-close', 'mz-modal-open']
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