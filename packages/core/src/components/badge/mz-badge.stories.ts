import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './mz-badge.js';

const meta: Meta = {
  title: 'Display/Badge',
  component: 'mz-badge',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive'],
      description: 'Visual style variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' }
      }
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the badge',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
      }
    },
    pill: {
      control: 'boolean',
      description: 'Whether the badge has pill shape',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    dot: {
      control: 'boolean',
      description: 'Show as a dot badge',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A badge component for displaying labels, statuses, and counts with various styles and sizes.'
      }
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'md'
  },
  render: (args) => html`
    <mz-badge
      variant="${args.variant}"
      size="${args.size}"
      ?pill="${args.pill}"
      ?dot="${args.dot}"
    >
      Badge
    </mz-badge>
  `
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
      <mz-badge variant="primary">Primary</mz-badge>
      <mz-badge variant="secondary">Secondary</mz-badge>
      <mz-badge variant="outline">Outline</mz-badge>
      <mz-badge variant="ghost">Ghost</mz-badge>
      <mz-badge variant="destructive">Destructive</mz-badge>
    </div>
  `
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
      <mz-badge size="xs">XS</mz-badge>
      <mz-badge size="sm">Small</mz-badge>
      <mz-badge size="md">Medium</mz-badge>
      <mz-badge size="lg">Large</mz-badge>
      <mz-badge size="xl">XL</mz-badge>
    </div>
  `
};

export const PillShape: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
      <mz-badge pill>Default Pill</mz-badge>
      <mz-badge pill variant="primary">Primary Pill</mz-badge>
      <mz-badge pill variant="secondary">Secondary Pill</mz-badge>
      <mz-badge pill variant="outline">Outline Pill</mz-badge>
    </div>
  `
};

export const DotBadge: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <mz-badge dot variant="primary"></mz-badge>
      <mz-badge dot variant="secondary"></mz-badge>
      <mz-badge dot variant="destructive"></mz-badge>
    </div>
  `
};

export const UseCases: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <span>Status:</span>
        <mz-badge variant="primary">Active</mz-badge>
        <mz-badge variant="secondary">Pending</mz-badge>
        <mz-badge variant="destructive">Expired</mz-badge>
      </div>
      
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <span>Tags:</span>
        <mz-badge size="sm" pill>JavaScript</mz-badge>
        <mz-badge size="sm" pill>TypeScript</mz-badge>
        <mz-badge size="sm" pill>React</mz-badge>
      </div>
      
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <span>Notifications:</span>
        <mz-badge variant="destructive">99+</mz-badge>
        <mz-badge variant="primary">NEW</mz-badge>
      </div>
    </div>
  `
};