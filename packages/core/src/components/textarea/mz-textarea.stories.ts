import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './mz-textarea.js';

const meta: Meta = {
  title: 'Forms/Textarea',
  component: 'mz-textarea',
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Textarea value',
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
    rows: {
      control: 'number',
      description: 'Number of visible text rows',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '4' }
      }
    },
    maxlength: {
      control: 'number',
      description: 'Maximum character length',
      table: {
        type: { summary: 'number' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    required: {
      control: 'boolean',
      description: 'Whether the textarea is required',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    readonly: {
      control: 'boolean',
      description: 'Whether the textarea is readonly',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal', 'both'],
      description: 'Resize behavior',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'vertical' }
      }
    },
    autoResize: {
      control: 'boolean',
      description: 'Auto-resize to fit content',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A customizable textarea component with auto-resize, character counting, and validation support.'
      }
    },
    actions: {
      handles: ['mz-input', 'mz-change', 'mz-blur']
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    placeholder: 'Enter your message...',
    rows: 4,
    disabled: false,
    required: false,
    readonly: false,
    resize: 'vertical'
  },
  render: (args) => html`
    <mz-textarea
      placeholder="${args.placeholder}"
      rows="${args.rows}"
      maxlength="${args.maxlength}"
      ?disabled="${args.disabled}"
      ?required="${args.required}"
      ?readonly="${args.readonly}"
      resize="${args.resize}"
      ?auto-resize="${args.autoResize}"
      @mz-input="${(e: CustomEvent) => console.log('Input:', e.detail)}"
      @mz-change="${(e: CustomEvent) => console.log('Change:', e.detail)}"
    ></mz-textarea>
  `
};

export const WithLabel: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 500px;">
      <mz-textarea
        label="Description"
        placeholder="Describe your issue..."
        helper-text="Please provide as much detail as possible"
        rows="5"
      ></mz-textarea>
      
      <mz-textarea
        label="Comments (Optional)"
        placeholder="Any additional comments?"
        rows="3"
      ></mz-textarea>
    </div>
  `
};

export const AutoResize: Story = {
  render: () => html`
    <div style="max-width: 500px;">
      <mz-textarea
        label="Auto-Resizing Textarea"
        placeholder="Start typing and watch the textarea grow..."
        auto-resize
        rows="2"
        helper-text="This textarea automatically adjusts its height based on content"
      ></mz-textarea>
    </div>
  `
};

export const CharacterCount: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 500px;">
      <mz-textarea
        label="Bio"
        placeholder="Tell us about yourself..."
        maxlength="200"
        show-count
        rows="4"
        helper-text="Maximum 200 characters"
      ></mz-textarea>
      
      <mz-textarea
        label="Tweet"
        placeholder="What's on your mind?"
        maxlength="280"
        show-count
        rows="3"
      ></mz-textarea>
    </div>
  `
};

export const States: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 500px;">
      <mz-textarea placeholder="Normal textarea" rows="3"></mz-textarea>
      <mz-textarea placeholder="Disabled textarea" disabled rows="3"></mz-textarea>
      <mz-textarea value="This is readonly content" readonly rows="3"></mz-textarea>
      <mz-textarea 
        placeholder="Required textarea" 
        required 
        label="Required Field"
        rows="3"
      ></mz-textarea>
      <mz-textarea 
        placeholder="Textarea with error" 
        error="This field has an error"
        label="Error State"
        rows="3"
      ></mz-textarea>
    </div>
  `
};

export const ResizeOptions: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
      <mz-textarea
        label="No Resize"
        placeholder="Cannot be resized"
        resize="none"
        rows="3"
      ></mz-textarea>
      
      <mz-textarea
        label="Vertical Only (Default)"
        placeholder="Can resize vertically"
        resize="vertical"
        rows="3"
      ></mz-textarea>
      
      <mz-textarea
        label="Horizontal Only"
        placeholder="Can resize horizontally"
        resize="horizontal"
        rows="3"
      ></mz-textarea>
      
      <mz-textarea
        label="Both Directions"
        placeholder="Can resize in any direction"
        resize="both"
        rows="3"
      ></mz-textarea>
    </div>
  `
};

export const FormExample: Story = {
  render: () => html`
    <form @submit="${(e: Event) => { 
      e.preventDefault(); 
      const formData = new FormData(e.target as HTMLFormElement);
      console.log('Form data:', Object.fromEntries(formData));
      alert('Feedback submitted!');
    }}" style="max-width: 500px;">
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <h3 style="margin: 0;">Feedback Form</h3>
        
        <mz-textarea
          name="feedback"
          label="Your Feedback"
          placeholder="Tell us what you think..."
          required
          rows="5"
          maxlength="500"
          show-count
        ></mz-textarea>
        
        <mz-textarea
          name="suggestions"
          label="Suggestions for Improvement"
          placeholder="Any ideas to make things better?"
          rows="4"
          auto-resize
        ></mz-textarea>
        
        <button type="submit" style="padding: 0.75rem 1.5rem; background: var(--mz-color-primary-500); color: white; border: none; border-radius: var(--mz-radius-lg); cursor: pointer;">
          Submit Feedback
        </button>
      </div>
    </form>
  `
};