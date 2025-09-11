import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../src/components/modal/mz-modal.js';
import '../src/components/button/mz-button.js';
import '../src/components/input/mz-input.js';

const meta: Meta = {
  title: 'Components/Modal',
  component: 'mz-modal',
  parameters: {
    docs: {
      description: {
        component: 'An accessible modal dialog component with backdrop, animations, and flexible content slots. Features keyboard navigation, focus management, and customizable sizes.',
      },
    },
  },
  argTypes: {
    open: {
      control: { type: 'boolean' },
      description: 'Whether the modal is open',
    },
    title: {
      control: { type: 'text' },
      description: 'Title displayed in the modal header',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'Size of the modal',
    },
    animation: {
      control: { type: 'select' },
      options: ['scale', 'fade', 'slide-up'],
      description: 'Animation style for the modal',
    },
    noCloseOnBackdrop: {
      control: { type: 'boolean' },
      description: 'Prevent closing when clicking backdrop',
    },
    noCloseButton: {
      control: { type: 'boolean' },
      description: 'Hide the close button',
    },
    scrollable: {
      control: { type: 'boolean' },
      description: 'Make the modal body scrollable',
    },
  },
  args: {
    open: false,
    title: 'Modal Title',
    size: 'md',
    animation: 'scale',
    noCloseOnBackdrop: false,
    noCloseButton: false,
    scrollable: false,
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <div>
      <mz-button @click=${() => {
        const modal = document.querySelector('mz-modal') as any;
        modal.show();
      }}>
        Open Modal
      </mz-button>
      
      <mz-modal
        ?open=${args.open}
        title=${args.title}
        size=${args.size}
        animation=${args.animation}
        ?no-close-on-backdrop=${args.noCloseOnBackdrop}
        ?no-close-button=${args.noCloseButton}
        ?scrollable=${args.scrollable}
        @mz-modal-close=${(e: CustomEvent) => console.log('Modal close requested')}
        @mz-modal-closed=${(e: CustomEvent) => console.log('Modal closed')}
      >
        <p>This is the modal content. You can put any content here including forms, images, or other components.</p>
        <div slot="footer">
          <mz-button variant="outline" @click=${(e: Event) => {
            const modal = (e.target as Element).closest('mz-modal') as any;
            modal.close();
          }}>
            Cancel
          </mz-button>
          <mz-button @click=${(e: Event) => {
            const modal = (e.target as Element).closest('mz-modal') as any;
            modal.close();
          }}>
            Confirm
          </mz-button>
        </div>
      </mz-modal>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <mz-button @click=${() => {
        const modal = document.querySelector('#modal-sm') as any;
        modal.show();
      }}>
        Small Modal
      </mz-button>
      
      <mz-button @click=${() => {
        const modal = document.querySelector('#modal-md') as any;
        modal.show();
      }}>
        Medium Modal
      </mz-button>
      
      <mz-button @click=${() => {
        const modal = document.querySelector('#modal-lg') as any;
        modal.show();
      }}>
        Large Modal
      </mz-button>
      
      <mz-button @click=${() => {
        const modal = document.querySelector('#modal-xl') as any;
        modal.show();
      }}>
        Extra Large Modal
      </mz-button>
      
      <mz-button @click=${() => {
        const modal = document.querySelector('#modal-full') as any;
        modal.show();
      }}>
        Full Size Modal
      </mz-button>
    </div>
    
    <mz-modal id="modal-sm" size="sm" title="Small Modal">
      <p>This is a small modal perfect for confirmations and simple dialogs.</p>
      <div slot="footer">
        <mz-button variant="outline" @click=${(e: Event) => {
          const modal = (e.target as Element).closest('mz-modal') as any;
          modal.close();
        }}>Close</mz-button>
      </div>
    </mz-modal>
    
    <mz-modal id="modal-md" size="md" title="Medium Modal">
      <p>This is a medium modal suitable for most content and forms.</p>
      <div slot="footer">
        <mz-button variant="outline" @click=${(e: Event) => {
          const modal = (e.target as Element).closest('mz-modal') as any;
          modal.close();
        }}>Close</mz-button>
      </div>
    </mz-modal>
    
    <mz-modal id="modal-lg" size="lg" title="Large Modal">
      <p>This is a large modal ideal for complex forms and detailed content.</p>
      <div slot="footer">
        <mz-button variant="outline" @click=${(e: Event) => {
          const modal = (e.target as Element).closest('mz-modal') as any;
          modal.close();
        }}>Close</mz-button>
      </div>
    </mz-modal>
    
    <mz-modal id="modal-xl" size="xl" title="Extra Large Modal">
      <p>This is an extra large modal perfect for dashboards and comprehensive interfaces.</p>
      <div slot="footer">
        <mz-button variant="outline" @click=${(e: Event) => {
          const modal = (e.target as Element).closest('mz-modal') as any;
          modal.close();
        }}>Close</mz-button>
      </div>
    </mz-modal>
    
    <mz-modal id="modal-full" size="full" title="Full Size Modal">
      <p>This is a full-size modal that takes up almost the entire viewport.</p>
      <div slot="footer">
        <mz-button variant="outline" @click=${(e: Event) => {
          const modal = (e.target as Element).closest('mz-modal') as any;
          modal.close();
        }}>Close</mz-button>
      </div>
    </mz-modal>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Different sizes available for the modal component.',
      },
    },
  },
};

export const Animations: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <mz-button @click=${() => {
        const modal = document.querySelector('#modal-scale') as any;
        modal.show();
      }}>
        Scale Animation
      </mz-button>
      
      <mz-button @click=${() => {
        const modal = document.querySelector('#modal-fade') as any;
        modal.show();
      }}>
        Fade Animation
      </mz-button>
      
      <mz-button @click=${() => {
        const modal = document.querySelector('#modal-slide') as any;
        modal.show();
      }}>
        Slide Up Animation
      </mz-button>
    </div>
    
    <mz-modal id="modal-scale" animation="scale" title="Scale Animation">
      <p>This modal uses the scale animation with a spring effect.</p>
      <div slot="footer">
        <mz-button variant="outline" @click=${(e: Event) => {
          const modal = (e.target as Element).closest('mz-modal') as any;
          modal.close();
        }}>Close</mz-button>
      </div>
    </mz-modal>
    
    <mz-modal id="modal-fade" animation="fade" title="Fade Animation">
      <p>This modal uses a simple fade animation.</p>
      <div slot="footer">
        <mz-button variant="outline" @click=${(e: Event) => {
          const modal = (e.target as Element).closest('mz-modal') as any;
          modal.close();
        }}>Close</mz-button>
      </div>
    </mz-modal>
    
    <mz-modal id="modal-slide" animation="slide-up" title="Slide Up Animation">
      <p>This modal slides up from the bottom of the screen.</p>
      <div slot="footer">
        <mz-button variant="outline" @click=${(e: Event) => {
          const modal = (e.target as Element).closest('mz-modal') as any;
          modal.close();
        }}>Close</mz-button>
      </div>
    </mz-modal>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Different animation styles for the modal entrance and exit.',
      },
    },
  },
};

export const FormModal: Story = {
  render: () => html`
    <mz-button @click=${() => {
      const modal = document.querySelector('#form-modal') as any;
      modal.show();
    }}>
      Open Form Modal
    </mz-button>
    
    <mz-modal id="form-modal" title="Contact Form">
      <form @submit=${(e: Event) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        console.log('Form submitted:', Object.fromEntries(formData));
        const modal = (e.target as Element).closest('mz-modal') as any;
        modal.close();
        alert('Form submitted! Check console for data.');
      }}>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div>
            <label style="display: block; margin-bottom: 0.25rem; font-weight: 500;">Name</label>
            <mz-input name="name" placeholder="Enter your name" required></mz-input>
          </div>
          
          <div>
            <label style="display: block; margin-bottom: 0.25rem; font-weight: 500;">Email</label>
            <mz-input name="email" type="email" placeholder="Enter your email" required></mz-input>
          </div>
          
          <div>
            <label style="display: block; margin-bottom: 0.25rem; font-weight: 500;">Message</label>
            <textarea 
              name="message" 
              rows="4" 
              placeholder="Enter your message"
              style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #D1D5DB; border-radius: 0.375rem; font-family: inherit; resize: vertical;"
              required
            ></textarea>
          </div>
        </div>
        
        <div slot="footer">
          <mz-button variant="outline" type="button" @click=${(e: Event) => {
            const modal = (e.target as Element).closest('mz-modal') as any;
            modal.close();
          }}>
            Cancel
          </mz-button>
          <mz-button type="submit">Send Message</mz-button>
        </div>
      </form>
    </mz-modal>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Modal containing a form with proper form handling and validation.',
      },
    },
  },
};

export const ConfirmationModal: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <mz-button variant="destructive" @click=${() => {
        const modal = document.querySelector('#delete-modal') as any;
        modal.show();
      }}>
        Delete Item
      </mz-button>
      
      <mz-button @click=${() => {
        const modal = document.querySelector('#save-modal') as any;
        modal.show();
      }}>
        Save Changes
      </mz-button>
    </div>
    
    <mz-modal id="delete-modal" size="sm" title="Confirm Deletion" no-close-on-backdrop>
      <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
        <div style="width: 48px; height: 48px; background: #FEE2E2; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #DC2626; font-size: 1.5rem;">
          ⚠️
        </div>
        <div>
          <h4 style="margin: 0 0 0.25rem; font-size: 1.125rem; font-weight: 600;">Delete this item?</h4>
          <p style="margin: 0; color: #6B7280; font-size: 0.875rem;">This action cannot be undone.</p>
        </div>
      </div>
      <p style="color: #374151;">Are you sure you want to delete this item? All associated data will be permanently removed from our servers.</p>
      
      <div slot="footer">
        <mz-button variant="outline" @click=${(e: Event) => {
          const modal = (e.target as Element).closest('mz-modal') as any;
          modal.close();
        }}>
          Cancel
        </mz-button>
        <mz-button variant="destructive" @click=${(e: Event) => {
          const modal = (e.target as Element).closest('mz-modal') as any;
          modal.close();
          alert('Item deleted!');
        }}>
          Delete
        </mz-button>
      </div>
    </mz-modal>
    
    <mz-modal id="save-modal" size="sm" title="Save Changes">
      <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
        <div style="width: 48px; height: 48px; background: #DBEAFE; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #2563EB; font-size: 1.5rem;">
          💾
        </div>
        <div>
          <h4 style="margin: 0 0 0.25rem; font-size: 1.125rem; font-weight: 600;">Unsaved Changes</h4>
          <p style="margin: 0; color: #6B7280; font-size: 0.875rem;">You have unsaved changes.</p>
        </div>
      </div>
      <p style="color: #374151;">Do you want to save your changes before leaving this page?</p>
      
      <div slot="footer">
        <mz-button variant="outline" @click=${(e: Event) => {
          const modal = (e.target as Element).closest('mz-modal') as any;
          modal.close();
          alert('Changes discarded!');
        }}>
          Don't Save
        </mz-button>
        <mz-button @click=${(e: Event) => {
          const modal = (e.target as Element).closest('mz-modal') as any;
          modal.close();
          alert('Changes saved!');
        }}>
          Save Changes
        </mz-button>
      </div>
    </mz-modal>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Confirmation modals for destructive and important actions.',
      },
    },
  },
};

export const ScrollableContent: Story = {
  render: () => html`
    <mz-button @click=${() => {
      const modal = document.querySelector('#scrollable-modal') as any;
      modal.show();
    }}>
      Open Scrollable Modal
    </mz-button>
    
    <mz-modal id="scrollable-modal" scrollable title="Terms of Service">
      <div style="line-height: 1.6;">
        <h3>1. Terms</h3>
        <p>By accessing and placing an order with our company, you confirm that you are in agreement with and bound by the terms of service contained in the Terms & Conditions outlined below.</p>
        
        <h3>2. Use License</h3>
        <p>Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
        <ul>
          <li>modify or copy the materials;</li>
          <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
          <li>attempt to decompile or reverse engineer any software contained on our website;</li>
          <li>remove any copyright or other proprietary notations from the materials.</li>
        </ul>
        
        <h3>3. Disclaimer</h3>
        <p>The materials on our website are provided on an 'as is' basis. To the fullest extent permitted by law, this Company:</p>
        <ul>
          <li>excludes all representations and warranties relating to this website and its contents;</li>
          <li>does not warrant that the functions contained in the website will be uninterrupted or error-free;</li>
          <li>does not warrant that defects will be corrected, or that this website or the server that makes it available are free of viruses or bugs.</li>
        </ul>
        
        <h3>4. Limitations</h3>
        <p>In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.</p>
        
        <h3>5. Accuracy of materials</h3>
        <p>The materials appearing on our website could include technical, typographical, or photographic errors. Our company does not warrant that any of the materials on its website are accurate, complete, or current.</p>
        
        <h3>6. Links</h3>
        <p>Our company has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by our company of the site.</p>
        
        <h3>7. Modifications</h3>
        <p>Our company may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.</p>
        
        <h3>8. Governing Law</h3>
        <p>These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.</p>
      </div>
      
      <div slot="footer">
        <mz-button variant="outline" @click=${(e: Event) => {
          const modal = (e.target as Element).closest('mz-modal') as any;
          modal.close();
        }}>
          Decline
        </mz-button>
        <mz-button @click=${(e: Event) => {
          const modal = (e.target as Element).closest('mz-modal') as any;
          modal.close();
          alert('Terms accepted!');
        }}>
          Accept Terms
        </mz-button>
      </div>
    </mz-modal>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Modal with scrollable content for long text or detailed information.',
      },
    },
  },
};

export const CustomSlots: Story = {
  render: () => html`
    <mz-button @click=${() => {
      const modal = document.querySelector('#custom-modal') as any;
      modal.show();
    }}>
      Open Custom Modal
    </mz-button>
    
    <mz-modal id="custom-modal" no-close-button>
      <div slot="title" style="display: flex; align-items: center; gap: 0.5rem;">
        <div style="width: 24px; height: 24px; background: linear-gradient(45deg, #06B6D4, #10B981); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.75rem; font-weight: bold;">
          ✓
        </div>
        <span>Success!</span>
      </div>
      
      <div style="text-align: center; padding: 1rem 0;">
        <div style="width: 80px; height: 80px; background: linear-gradient(45deg, #10B981, #059669); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; color: white; font-size: 2rem;">
          🎉
        </div>
        <h3 style="margin: 0 0 0.5rem; font-size: 1.25rem; font-weight: 600; color: #10B981;">Operation Completed</h3>
        <p style="margin: 0; color: #6B7280;">Your request has been processed successfully. You will receive a confirmation email shortly.</p>
      </div>
      
      <div slot="footer" style="display: flex; justify-content: center;">
        <mz-button @click=${(e: Event) => {
          const modal = (e.target as Element).closest('mz-modal') as any;
          modal.close();
        }}>
          Continue
        </mz-button>
      </div>
    </mz-modal>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Modal with custom title slot and centered content layout.',
      },
    },
  },
};