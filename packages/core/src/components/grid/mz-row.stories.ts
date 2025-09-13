import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import './mz-row.js'
import './mz-col.js'

const meta: Meta = {
  title: 'Layout/Grid',
  component: 'mz-row',
}
export default meta

type Story = StoryObj

export const BasicGrid: Story = {
  render: () => html`
    <mz-row>
      <mz-col span="6">
        <div style="background: #e3f2fd; padding: 1rem; text-align: center; border-radius: 0.375rem;">
          Column 1 (span 6)
        </div>
      </mz-col>
      <mz-col span="6">
        <div style="background: #f3e5f5; padding: 1rem; text-align: center; border-radius: 0.375rem;">
          Column 2 (span 6)
        </div>
      </mz-col>
    </mz-row>
  `
}

export const ResponsiveColumns: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <mz-row>
        <mz-col span="12">
          <div style="background: #e8f5e8; padding: 1rem; text-align: center; border-radius: 0.375rem;">
            Full width (span 12)
          </div>
        </mz-col>
      </mz-row>

      <mz-row>
        <mz-col span="8">
          <div style="background: #e3f2fd; padding: 1rem; text-align: center; border-radius: 0.375rem;">
            Main content (span 8)
          </div>
        </mz-col>
        <mz-col span="4">
          <div style="background: #fff3e0; padding: 1rem; text-align: center; border-radius: 0.375rem;">
            Sidebar (span 4)
          </div>
        </mz-col>
      </mz-row>

      <mz-row>
        <mz-col span="4">
          <div style="background: #f3e5f5; padding: 1rem; text-align: center; border-radius: 0.375rem;">
            Card 1 (span 4)
          </div>
        </mz-col>
        <mz-col span="4">
          <div style="background: #e8f5e8; padding: 1rem; text-align: center; border-radius: 0.375rem;">
            Card 2 (span 4)
          </div>
        </mz-col>
        <mz-col span="4">
          <div style="background: #fce4ec; padding: 1rem; text-align: center; border-radius: 0.375rem;">
            Card 3 (span 4)
          </div>
        </mz-col>
      </mz-row>
    </div>
  `
}

export const NestedGrid: Story = {
  render: () => html`
    <mz-row>
      <mz-col span="8">
        <div style="background: #e3f2fd; padding: 1rem; border-radius: 0.375rem;">
          <h3 style="margin: 0 0 1rem 0; text-align: center;">Main Content (span 8)</h3>
          <mz-row>
            <mz-col span="6">
              <div style="background: #fff; padding: 1rem; text-align: center; border-radius: 0.375rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                Nested Col 1
              </div>
            </mz-col>
            <mz-col span="6">
              <div style="background: #fff; padding: 1rem; text-align: center; border-radius: 0.375rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                Nested Col 2
              </div>
            </mz-col>
          </mz-row>
        </div>
      </mz-col>
      <mz-col span="4">
        <div style="background: #f3e5f5; padding: 1rem; text-align: center; border-radius: 0.375rem;">
          <h3 style="margin: 0 0 1rem 0;">Sidebar (span 4)</h3>
          <p style="margin: 0;">Sidebar content goes here</p>
        </div>
      </mz-col>
    </mz-row>
  `
}