import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './mz-accordion.js';

const meta: Meta = {
  title: 'Display/Accordion',
  component: 'mz-accordion',
  tags: ['autodocs'],
  argTypes: {
    multiple: {
      control: 'boolean',
      description: 'Allow multiple items to be expanded simultaneously',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    collapsible: {
      control: 'boolean',
      description: 'Allow all items to be collapsed',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'An accordion component for organizing content into collapsible sections with smooth animations.'
      }
    },
    actions: {
      handles: ['mz-accordion-change']
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <mz-accordion>
      <mz-accordion-item header="What is Maxzilla UI?">
        Maxzilla UI is a modern web components library with Aceternity-inspired design, built on Lit Element.
        It provides framework-agnostic components that work seamlessly across React, Vue, Angular, and vanilla JavaScript.
      </mz-accordion-item>
      <mz-accordion-item header="How do I install it?">
        You can install Maxzilla UI via npm: <code>npm install maxzilla-ui-core</code> for the core web components,
        or <code>npm install maxzilla-ui-react</code> for React wrappers.
      </mz-accordion-item>
      <mz-accordion-item header="Is it production ready?">
        Yes! All components are thoroughly tested, accessible, and optimized for performance.
        The library follows web standards and best practices.
      </mz-accordion-item>
    </mz-accordion>
  `
};

export const Multiple: Story = {
  render: () => html`
    <mz-accordion multiple>
      <mz-accordion-item header="Frontend Technologies" expanded>
        <ul>
          <li>React</li>
          <li>Vue.js</li>
          <li>Angular</li>
          <li>Svelte</li>
        </ul>
      </mz-accordion-item>
      <mz-accordion-item header="Backend Technologies" expanded>
        <ul>
          <li>Node.js</li>
          <li>Python</li>
          <li>Java</li>
          <li>Go</li>
        </ul>
      </mz-accordion-item>
      <mz-accordion-item header="Databases">
        <ul>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>Redis</li>
          <li>MySQL</li>
        </ul>
      </mz-accordion-item>
    </mz-accordion>
  `
};

export const WithIcons: Story = {
  render: () => html`
    <mz-accordion>
      <mz-accordion-item>
        <div slot="header" style="display: flex; align-items: center; gap: 0.5rem;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
          </svg>
          Security Features
        </div>
        <p>Our platform includes end-to-end encryption, two-factor authentication, and regular security audits.</p>
      </mz-accordion-item>
      <mz-accordion-item>
        <div slot="header" style="display: flex; align-items: center; gap: 0.5rem;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <line x1="9" y1="9" x2="15" y2="9"/>
            <line x1="9" y1="15" x2="15" y2="15"/>
          </svg>
          Performance Metrics
        </div>
        <p>Track key performance indicators with real-time dashboards and detailed analytics.</p>
      </mz-accordion-item>
    </mz-accordion>
  `
};

export const Nested: Story = {
  render: () => html`
    <mz-accordion>
      <mz-accordion-item header="Application Settings">
        <div style="padding: 1rem 0;">
          <h4 style="margin: 0 0 1rem 0;">Configure your application</h4>
          <mz-accordion>
            <mz-accordion-item header="General">
              <p>Language, timezone, and regional settings</p>
            </mz-accordion-item>
            <mz-accordion-item header="Appearance">
              <p>Theme, colors, and visual preferences</p>
            </mz-accordion-item>
            <mz-accordion-item header="Privacy">
              <p>Data collection and sharing preferences</p>
            </mz-accordion-item>
          </mz-accordion>
        </div>
      </mz-accordion-item>
      <mz-accordion-item header="User Preferences">
        <p>Customize your user experience with personal preferences.</p>
      </mz-accordion-item>
    </mz-accordion>
  `
};

export const ComplexContent: Story = {
  render: () => html`
    <mz-accordion>
      <mz-accordion-item header="Product Specifications">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 0.5rem; border-bottom: 1px solid var(--mz-color-neutral-200);">Dimensions</td>
            <td style="padding: 0.5rem; border-bottom: 1px solid var(--mz-color-neutral-200);">120 x 80 x 45 cm</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem; border-bottom: 1px solid var(--mz-color-neutral-200);">Weight</td>
            <td style="padding: 0.5rem; border-bottom: 1px solid var(--mz-color-neutral-200);">25 kg</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem; border-bottom: 1px solid var(--mz-color-neutral-200);">Material</td>
            <td style="padding: 0.5rem; border-bottom: 1px solid var(--mz-color-neutral-200);">Solid Oak Wood</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem;">Warranty</td>
            <td style="padding: 0.5rem;">5 Years</td>
          </tr>
        </table>
      </mz-accordion-item>
      <mz-accordion-item header="Shipping Information">
        <div style="padding: 1rem; background: var(--mz-color-neutral-50); border-radius: var(--mz-radius-md);">
          <h4 style="margin: 0 0 0.5rem 0;">Free Shipping Available</h4>
          <p style="margin: 0 0 0.5rem 0;">Standard delivery: 5-7 business days</p>
          <p style="margin: 0;">Express delivery: 2-3 business days (+$25)</p>
        </div>
      </mz-accordion-item>
      <mz-accordion-item header="Customer Reviews">
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="padding: 1rem; background: var(--mz-color-neutral-50); border-radius: var(--mz-radius-md);">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
              <strong>John D.</strong>
              <span style="color: var(--mz-color-warning);">★★★★★</span>
            </div>
            <p style="margin: 0;">Excellent quality and fast shipping!</p>
          </div>
          <div style="padding: 1rem; background: var(--mz-color-neutral-50); border-radius: var(--mz-radius-md);">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
              <strong>Sarah M.</strong>
              <span style="color: var(--mz-color-warning);">★★★★☆</span>
            </div>
            <p style="margin: 0;">Great product, minor assembly required.</p>
          </div>
        </div>
      </mz-accordion-item>
    </mz-accordion>
  `
};

export const Interactive: Story = {
  render: () => {
    const handleChange = (e: CustomEvent) => {
      console.log('Accordion changed:', e.detail);
      const output = document.querySelector('#accordion-output');
      if (output) {
        output.textContent = `Item ${e.detail.index} is now ${e.detail.expanded ? 'expanded' : 'collapsed'}`;
      }
    };

    return html`
      <div>
        <mz-accordion @mz-accordion-change="${handleChange}">
          <mz-accordion-item header="Click to expand/collapse">
            This accordion tracks state changes.
          </mz-accordion-item>
          <mz-accordion-item header="Another section">
            Watch the output below when toggling sections.
          </mz-accordion-item>
          <mz-accordion-item header="Third section">
            Each change is logged to the console.
          </mz-accordion-item>
        </mz-accordion>
        <div id="accordion-output" style="margin-top: 1rem; padding: 1rem; background: var(--mz-color-neutral-100); border-radius: var(--mz-radius-lg);">
          Click an accordion item to see the state change
        </div>
      </div>
    `;
  }
};