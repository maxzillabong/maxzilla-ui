import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './mz-avatar.js';

const meta: Meta = {
  title: 'Display/Avatar',
  component: 'mz-avatar',
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'URL of the avatar image',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    alt: {
      control: 'text',
      description: 'Alt text for the avatar image',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    initials: {
      control: 'text',
      description: 'Initials to display when no image is available',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the avatar',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
      }
    },
    shape: {
      control: 'select',
      options: ['circle', 'square', 'rounded'],
      description: 'Shape of the avatar',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'circle' }
      }
    },
    status: {
      control: 'select',
      options: ['', 'online', 'offline', 'busy', 'away'],
      description: 'Status indicator for the avatar',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    interactive: {
      control: 'boolean',
      description: 'Whether the avatar is interactive (clickable)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A versatile avatar component for displaying user profile images, initials, or fallback content. Supports different sizes, shapes, and status indicators.'
      }
    },
    actions: {
      handles: ['mz-avatar-click']
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
    alt: 'User avatar',
    size: 'md',
    shape: 'circle'
  },
  render: (args) => html`
    <mz-avatar
      src="${args.src}"
      alt="${args.alt}"
      initials="${args.initials}"
      size="${args.size}"
      shape="${args.shape}"
      status="${args.status}"
      ?interactive="${args.interactive}"
      @mz-avatar-click="${(e: CustomEvent) => console.log('Avatar clicked', e)}"
    ></mz-avatar>
  `
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <mz-avatar
        size="xs"
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
        alt="Extra small avatar"
      ></mz-avatar>
      <mz-avatar
        size="sm"
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
        alt="Small avatar"
      ></mz-avatar>
      <mz-avatar
        size="md"
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
        alt="Medium avatar"
      ></mz-avatar>
      <mz-avatar
        size="lg"
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
        alt="Large avatar"
      ></mz-avatar>
      <mz-avatar
        size="xl"
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
        alt="Extra large avatar"
      ></mz-avatar>
    </div>
  `
};

export const Shapes: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <mz-avatar
        shape="circle"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop"
        alt="Circle avatar"
      ></mz-avatar>
      <mz-avatar
        shape="square"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop"
        alt="Square avatar"
      ></mz-avatar>
      <mz-avatar
        shape="rounded"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop"
        alt="Rounded avatar"
      ></mz-avatar>
    </div>
  `
};

export const WithInitials: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <mz-avatar initials="JD"></mz-avatar>
      <mz-avatar initials="MV" size="lg"></mz-avatar>
      <mz-avatar initials="AB" shape="square"></mz-avatar>
      <mz-avatar alt="John Doe"></mz-avatar>
      <mz-avatar alt="Jane Smith" shape="rounded"></mz-avatar>
    </div>
  `
};

export const StatusIndicators: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <mz-avatar
        status="online"
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=300&h=300&fit=crop"
        alt="Online user"
      ></mz-avatar>
      <mz-avatar
        status="away"
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&h=300&fit=crop"
        alt="Away user"
      ></mz-avatar>
      <mz-avatar
        status="busy"
        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=300&h=300&fit=crop"
        alt="Busy user"
      ></mz-avatar>
      <mz-avatar
        status="offline"
        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop"
        alt="Offline user"
      ></mz-avatar>
    </div>
  `
};

export const Interactive: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <mz-avatar
        interactive
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop"
        alt="Click me"
        @mz-avatar-click="${() => alert('Avatar clicked!')}"
      ></mz-avatar>
      <mz-avatar
        interactive
        initials="CL"
        size="lg"
        @mz-avatar-click="${() => alert('Avatar with initials clicked!')}"
      ></mz-avatar>
      <mz-avatar
        interactive
        status="online"
        src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&h=300&fit=crop"
        alt="Interactive with status"
        @mz-avatar-click="${() => alert('Avatar with status clicked!')}"
      ></mz-avatar>
    </div>
  `
};

export const Fallback: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <mz-avatar
        src="invalid-url.jpg"
        alt="User Name"
      ></mz-avatar>
      <mz-avatar
        src="invalid-url.jpg"
        initials="UN"
      ></mz-avatar>
      <mz-avatar></mz-avatar>
      <mz-avatar>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      </mz-avatar>
    </div>
  `
};

export const AvatarGroup: Story = {
  render: () => html`
    <div style="display: flex; margin-left: 1rem;">
      <mz-avatar
        style="margin-left: -1rem; z-index: 5;"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop"
        alt="User 1"
      ></mz-avatar>
      <mz-avatar
        style="margin-left: -1rem; z-index: 4;"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop"
        alt="User 2"
      ></mz-avatar>
      <mz-avatar
        style="margin-left: -1rem; z-index: 3;"
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
        alt="User 3"
      ></mz-avatar>
      <mz-avatar
        style="margin-left: -1rem; z-index: 2;"
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=300&h=300&fit=crop"
        alt="User 4"
      ></mz-avatar>
      <mz-avatar
        style="margin-left: -1rem; z-index: 1; background: var(--mz-color-neutral-300); color: var(--mz-color-neutral-800);"
        initials="+5"
      ></mz-avatar>
    </div>
  `
};

export const AllVariations: Story = {
  render: () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
    const shapes = ['circle', 'square', 'rounded'];
    const statuses = ['', 'online', 'offline', 'busy', 'away'];

    return html`
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div>
          <h3 style="margin-bottom: 1rem;">Sizes with Image</h3>
          <div style="display: flex; gap: 1rem; align-items: center;">
            ${sizes.map(size => html`
              <mz-avatar
                size="${size}"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&h=300&fit=crop"
                alt="${size} avatar"
              ></mz-avatar>
            `)}
          </div>
        </div>

        <div>
          <h3 style="margin-bottom: 1rem;">Shapes with Initials</h3>
          <div style="display: flex; gap: 1rem; align-items: center;">
            ${shapes.map(shape => html`
              <mz-avatar
                shape="${shape}"
                initials="MZ"
                size="lg"
              ></mz-avatar>
            `)}
          </div>
        </div>

        <div>
          <h3 style="margin-bottom: 1rem;">Status Variations</h3>
          <div style="display: flex; gap: 1rem; align-items: center;">
            ${statuses.map(status => html`
              <mz-avatar
                status="${status}"
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=300&h=300&fit=crop"
                alt="${status || 'no status'} avatar"
              ></mz-avatar>
            `)}
          </div>
        </div>
      </div>
    `;
  }
};

export const UseCase: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
      <!-- User profile card -->
      <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: var(--mz-color-neutral-50); border-radius: var(--mz-radius-lg);">
        <mz-avatar
          size="lg"
          status="online"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop"
          alt="John Doe"
        ></mz-avatar>
        <div>
          <div style="font-weight: 600;">John Doe</div>
          <div style="font-size: 0.875rem; color: var(--mz-color-neutral-600);">john.doe@example.com</div>
        </div>
      </div>

      <!-- Comment/message -->
      <div style="display: flex; gap: 0.75rem;">
        <mz-avatar
          size="sm"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop"
          alt="Jane Smith"
        ></mz-avatar>
        <div style="flex: 1;">
          <div style="font-size: 0.875rem; font-weight: 500;">Jane Smith</div>
          <div style="font-size: 0.875rem; color: var(--mz-color-neutral-600); margin-top: 0.25rem;">
            This is a sample comment or message that shows how avatars work in context.
          </div>
        </div>
      </div>
    </div>
  `
};