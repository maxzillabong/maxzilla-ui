import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Introduction/Welcome',
  parameters: {
    docs: {
      page: () => html`
        <div style="font-family: Inter, sans-serif; max-width: 800px; margin: 0 auto; padding: 2rem;">
          <div style="text-align: center; margin-bottom: 3rem;">
            <h1 style="font-size: 3rem; font-weight: 700; background: linear-gradient(45deg, #06B6D4, #10B981); background-clip: text; -webkit-background-clip: text; color: transparent; margin-bottom: 1rem;">
              Maxzilla UI
            </h1>
            <p style="font-size: 1.25rem; color: #64748B; margin-bottom: 2rem;">
              A modern web components library with Aceternity-inspired design, built on Lit Element
            </p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
              <div style="background: #F1F5F9; padding: 0.5rem 1rem; border-radius: 0.5rem; font-weight: 500;">
                🚀 Framework Agnostic
              </div>
              <div style="background: #F1F5F9; padding: 0.5rem 1rem; border-radius: 0.5rem; font-weight: 500;">
                ✨ Smooth Animations
              </div>
              <div style="background: #F1F5F9; padding: 0.5rem 1rem; border-radius: 0.5rem; font-weight: 500;">
                🎨 Aceternity Design
              </div>
              <div style="background: #F1F5F9; padding: 0.5rem 1rem; border-radius: 0.5rem; font-weight: 500;">
                📱 Responsive
              </div>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-bottom: 3rem;">
            <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 0.75rem; padding: 1.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem; color: #1E293B;">
                🎯 Core Components
              </h3>
              <p style="color: #64748B; margin-bottom: 1rem;">
                Essential UI components including buttons, cards, inputs, badges, avatars, and modals.
              </p>
              <p style="font-size: 0.875rem; font-weight: 500; color: #06B6D4;">
                → Explore Components
              </p>
            </div>

            <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 0.75rem; padding: 1.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem; color: #1E293B;">
                🎨 Design System
              </h3>
              <p style="color: #64748B; margin-bottom: 1rem;">
                Comprehensive design tokens with colors, typography, spacing, and animations.
              </p>
              <p style="font-size: 0.875rem; font-weight: 500; color: #06B6D4;">
                → View Design Tokens
              </p>
            </div>

            <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 0.75rem; padding: 1.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem; color: #1E293B;">
                🔧 Framework Support
              </h3>
              <p style="color: #64748B; margin-bottom: 1rem;">
                React, Vue, Svelte, and Angular wrappers for seamless integration.
              </p>
              <p style="font-size: 0.875rem; font-weight: 500; color: #06B6D4;">
                → Integration Guide
              </p>
            </div>
          </div>

          <div style="background: linear-gradient(135deg, #F8FAFC, #E2E8F0); border-radius: 1rem; padding: 2rem; text-align: center;">
            <h2 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: #1E293B;">
              Quick Start
            </h2>
            <div style="background: #1E293B; color: #F8FAFC; padding: 1rem; border-radius: 0.5rem; font-family: 'JetBrains Mono', monospace; text-align: left; margin: 1rem 0;">
              <div># Install the core library</div>
              <div style="color: #06B6D4;">npm install @maxzilla/ui-core</div>
              <br>
              <div># Import components</div>
              <div style="color: #10B981;">import '@maxzilla/ui-core/button';</div>
              <div style="color: #10B981;">import '@maxzilla/ui-core/card';</div>
              <br>
              <div># Use in HTML</div>
              <div style="color: #F59E0B;">&lt;mz-button variant="primary"&gt;Click me&lt;/mz-button&gt;</div>
            </div>
            <p style="color: #64748B;">
              Start building beautiful, interactive interfaces with Maxzilla UI components.
            </p>
          </div>
        </div>
      `,
    },
  },
};

export default meta;

type Story = StoryObj;

export const Welcome: Story = {
  render: () => html`<div>Welcome to Maxzilla UI Storybook</div>`,
};