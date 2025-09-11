import type { Preview } from '@storybook/web-components';
import { html } from 'lit';
import '../src/styles/base.js';

// Import all components to ensure they're registered
import '../src/components/button/mz-button.js';
import '../src/components/card/mz-card.js';
import '../src/components/input/mz-input.js';
import '../src/components/badge/mz-badge.js';
import '../src/components/avatar/mz-avatar.js';
import '../src/components/modal/mz-modal.js';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      extractComponentDescription: (component, { notes }) => {
        if (notes) {
          return typeof notes === 'string' ? notes : notes.markdown || notes.text;
        }
        return null;
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#0f172a',
        },
      ],
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (story, context) => {
      const theme = context.globals.theme || 'light';
      
      return html`
        <div data-theme="${theme}" style="min-height: 100vh; padding: 2rem;">
          <style>
            [data-theme='dark'] {
              background: #0f172a;
              color: #f8fafc;
            }
            [data-theme='light'] {
              background: #ffffff;
              color: #0f172a;
            }
          </style>
          ${story()}
        </div>
      `;
    },
  ],
};

export default preview;