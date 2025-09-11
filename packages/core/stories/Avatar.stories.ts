import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../src/components/avatar/mz-avatar.js';
import '../src/components/badge/mz-badge.js';

const meta: Meta = {
  title: 'Components/Avatar',
  component: 'mz-avatar',
  parameters: {
    docs: {
      description: {
        component: 'A flexible avatar component for displaying user profile pictures with fallbacks, status indicators, and multiple shapes and sizes.',
      },
    },
  },
  argTypes: {
    src: {
      control: { type: 'text' },
      description: 'Image URL for the avatar',
    },
    alt: {
      control: { type: 'text' },
      description: 'Alt text for the image (also used for initials fallback)',
    },
    initials: {
      control: { type: 'text' },
      description: 'Custom initials to display (overrides alt-based initials)',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the avatar',
    },
    shape: {
      control: { type: 'select' },
      options: ['circle', 'square', 'rounded'],
      description: 'Shape of the avatar',
    },
    status: {
      control: { type: 'select' },
      options: ['', 'online', 'offline', 'busy', 'away'],
      description: 'Status indicator',
    },
    interactive: {
      control: { type: 'boolean' },
      description: 'Whether the avatar is clickable',
    },
  },
  args: {
    src: '',
    alt: 'User Avatar',
    initials: '',
    size: 'md',
    shape: 'circle',
    status: '',
    interactive: false,
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <mz-avatar
      src=${args.src}
      alt=${args.alt}
      initials=${args.initials}
      size=${args.size}
      shape=${args.shape}
      status=${args.status}
      ?interactive=${args.interactive}
      @mz-avatar-click=${(e: CustomEvent) => console.log('Avatar clicked:', e.detail)}
    ></mz-avatar>
  `,
};

export const WithImages: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
      <mz-avatar
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        alt="John Doe"
      ></mz-avatar>
      <mz-avatar
        src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
        alt="Jane Smith"
      ></mz-avatar>
      <mz-avatar
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        alt="Mike Johnson"
      ></mz-avatar>
      <mz-avatar
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
        alt="Sarah Wilson"
      ></mz-avatar>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Avatars displaying user profile images.',
      },
    },
  },
};

export const WithInitials: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
      <mz-avatar alt="John Doe"></mz-avatar>
      <mz-avatar alt="Jane Smith"></mz-avatar>
      <mz-avatar alt="Mike Johnson"></mz-avatar>
      <mz-avatar alt="Sarah Wilson Taylor"></mz-avatar>
      <mz-avatar initials="MZ"></mz-avatar>
      <mz-avatar initials="UI"></mz-avatar>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Avatars with initials fallback. Initials are automatically generated from the alt text or can be customized.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <mz-avatar
          size="xs"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
          alt="John Doe"
        ></mz-avatar>
        <span style="font-size: 0.75rem; color: #64748B;">XS</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <mz-avatar
          size="sm"
          src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
          alt="Jane Smith"
        ></mz-avatar>
        <span style="font-size: 0.75rem; color: #64748B;">SM</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <mz-avatar
          size="md"
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
          alt="Mike Johnson"
        ></mz-avatar>
        <span style="font-size: 0.75rem; color: #64748B;">MD</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <mz-avatar
          size="lg"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
          alt="Sarah Wilson"
        ></mz-avatar>
        <span style="font-size: 0.75rem; color: #64748B;">LG</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <mz-avatar
          size="xl"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face"
          alt="Alex Thompson"
        ></mz-avatar>
        <span style="font-size: 0.75rem; color: #64748B;">XL</span>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Different sizes available for the avatar component.',
      },
    },
  },
};

export const Shapes: Story = {
  render: () => html`
    <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <mz-avatar
          shape="circle"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
          alt="John Doe"
        ></mz-avatar>
        <span style="font-size: 0.875rem; color: #64748B;">Circle</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <mz-avatar
          shape="rounded"
          src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
          alt="Jane Smith"
        ></mz-avatar>
        <span style="font-size: 0.875rem; color: #64748B;">Rounded</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <mz-avatar
          shape="square"
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
          alt="Mike Johnson"
        ></mz-avatar>
        <span style="font-size: 0.875rem; color: #64748B;">Square</span>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Different shapes available for the avatar component.',
      },
    },
  },
};

export const WithStatus: Story = {
  render: () => html`
    <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <mz-avatar
          status="online"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
          alt="John Doe"
        ></mz-avatar>
        <span style="font-size: 0.875rem; color: #10B981;">Online</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <mz-avatar
          status="busy"
          src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
          alt="Jane Smith"
        ></mz-avatar>
        <span style="font-size: 0.875rem; color: #EF4444;">Busy</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <mz-avatar
          status="away"
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
          alt="Mike Johnson"
        ></mz-avatar>
        <span style="font-size: 0.875rem; color: #F59E0B;">Away</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <mz-avatar
          status="offline"
          alt="Sarah Wilson"
        ></mz-avatar>
        <span style="font-size: 0.875rem; color: #6B7280;">Offline</span>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Avatars with status indicators showing online, busy, away, and offline states.',
      },
    },
  },
};

export const Interactive: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
      <mz-avatar
        interactive
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        alt="John Doe"
        @mz-avatar-click=${(e: CustomEvent) => alert('Clicked John Doe!')}
      ></mz-avatar>
      <mz-avatar
        interactive
        status="online"
        alt="Jane Smith"
        @mz-avatar-click=${(e: CustomEvent) => console.log('Jane Smith clicked', e.detail)}
      ></mz-avatar>
      <mz-avatar
        interactive
        size="lg"
        initials="MZ"
        @mz-avatar-click=${(e: CustomEvent) => alert('Maxzilla clicked!')}
      ></mz-avatar>
    </div>
    <p style="margin-top: 1rem; color: #64748B; font-size: 0.875rem;">
      Hover over the avatars and click them. Check console for click events.
    </p>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Interactive avatars with hover effects and click handling.',
      },
    },
  },
};

export const InContext: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 600px;">
      <!-- User profile header -->
      <div style="display: flex; align-items: center; gap: 1rem; padding: 1.5rem; background: #F9FAFB; border-radius: 0.75rem;">
        <mz-avatar
          size="xl"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
          alt="John Doe"
          status="online"
          interactive
        ></mz-avatar>
        <div>
          <h2 style="margin: 0 0 0.25rem; font-size: 1.5rem; font-weight: 700;">John Doe</h2>
          <p style="margin: 0 0 0.5rem; color: #6B7280;">Senior Full-Stack Developer</p>
          <div style="display: flex; gap: 0.5rem;">
            <mz-badge variant="primary" size="sm">Pro Member</mz-badge>
            <mz-badge variant="success" size="sm">✓ Verified</mz-badge>
          </div>
        </div>
      </div>

      <!-- Team list -->
      <div style="background: white; border: 1px solid #E5E7EB; border-radius: 0.75rem; padding: 1.5rem;">
        <h3 style="margin: 0 0 1rem; font-size: 1.125rem; font-weight: 600;">Development Team</h3>
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          <div style="display: flex; align-items: center; justify-content: between; padding: 0.5rem;">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <mz-avatar
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                alt="John Doe"
                status="online"
              ></mz-avatar>
              <div>
                <p style="margin: 0; font-weight: 500;">John Doe</p>
                <p style="margin: 0; color: #6B7280; font-size: 0.875rem;">Lead Developer</p>
              </div>
            </div>
            <mz-badge variant="success" size="sm">Active</mz-badge>
          </div>
          
          <div style="display: flex; align-items: center; justify-content: between; padding: 0.5rem;">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <mz-avatar
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
                alt="Jane Smith"
                status="busy"
              ></mz-avatar>
              <div>
                <p style="margin: 0; font-weight: 500;">Jane Smith</p>
                <p style="margin: 0; color: #6B7280; font-size: 0.875rem;">UI/UX Designer</p>
              </div>
            </div>
            <mz-badge variant="warning" size="sm">Busy</mz-badge>
          </div>
          
          <div style="display: flex; align-items: center; justify-content: between; padding: 0.5rem;">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <mz-avatar
                alt="Mike Johnson"
                status="away"
              ></mz-avatar>
              <div>
                <p style="margin: 0; font-weight: 500;">Mike Johnson</p>
                <p style="margin: 0; color: #6B7280; font-size: 0.875rem;">Backend Developer</p>
              </div>
            </div>
            <mz-badge variant="secondary" size="sm">Away</mz-badge>
          </div>
          
          <div style="display: flex; align-items: center; justify-content: between; padding: 0.5rem;">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <mz-avatar
                alt="Sarah Wilson"
                status="offline"
              ></mz-avatar>
              <div>
                <p style="margin: 0; font-weight: 500; color: #9CA3AF;">Sarah Wilson</p>
                <p style="margin: 0; color: #9CA3AF; font-size: 0.875rem;">DevOps Engineer</p>
              </div>
            </div>
            <mz-badge variant="outline" size="sm">Offline</mz-badge>
          </div>
        </div>
      </div>

      <!-- Avatar group -->
      <div style="background: white; border: 1px solid #E5E7EB; border-radius: 0.75rem; padding: 1.5rem;">
        <h3 style="margin: 0 0 1rem; font-size: 1.125rem; font-weight: 600;">Project Contributors</h3>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <div style="display: flex; margin-right: 0.5rem;">
            <mz-avatar
              size="sm"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
              alt="John Doe"
              style="margin-left: -0.5rem; border: 2px solid white;"
            ></mz-avatar>
            <mz-avatar
              size="sm"
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
              alt="Jane Smith"
              style="margin-left: -0.5rem; border: 2px solid white;"
            ></mz-avatar>
            <mz-avatar
              size="sm"
              alt="Mike Johnson"
              style="margin-left: -0.5rem; border: 2px solid white;"
            ></mz-avatar>
            <div style="width: 32px; height: 32px; background: #F3F4F6; border: 2px solid white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-left: -0.5rem; font-size: 0.75rem; font-weight: 500; color: #6B7280;">
              +5
            </div>
          </div>
          <span style="color: #6B7280; font-size: 0.875rem;">8 contributors</span>
        </div>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of avatars used in different contexts like profiles, team lists, and contributor groups.',
      },
    },
  },
};