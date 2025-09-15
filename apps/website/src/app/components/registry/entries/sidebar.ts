import { ComponentMeta } from '../types'
import { SidebarPreview } from '../previews/sidebar'

export const sidebarEntry: ComponentMeta = {
    slug: 'sidebar',
    name: 'Sidebar',
    category: 'Navigation',
    description: 'Vertical navigation panel with header and menu slots.',
    Preview: SidebarPreview,
    code: {
      react: `import { Sidebar } from 'maxzilla-ui-react'

<Sidebar aria-label="Main navigation">
  <div slot="header">Navigation</div>
  <div slot="menu">
    <a href="/dashboard">Dashboard</a>
    <a href="/components">Components</a>
    <a href="/settings">Settings</a>
  </div>
</Sidebar>`,
      html: `<mz-sidebar aria-label="Main navigation">
  <div slot="header">Navigation</div>
  <div slot="menu">
    <a href="/dashboard">Dashboard</a>
    <a href="/components">Components</a>
    <a href="/settings">Settings</a>
  </div>
</mz-sidebar>`
    }
  }
