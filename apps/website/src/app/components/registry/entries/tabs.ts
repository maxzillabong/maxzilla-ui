import { ComponentMeta } from '../types'
import { TabsBasicPreview } from '../previews/tabs'

export const tabsEntry: ComponentMeta = {
    slug: 'tabs',
    name: 'Tabs',
    category: 'Data Display',
    description: 'Tabbed interface with rich content panels.',
    Preview: TabsBasicPreview,
    code: {
      react: `import { Tabs, Tab, Card, Input, Switch, Alert } from 'maxzilla-ui-react'

<Tabs initial={0}>
  <Tab label="Account">
    <Card elevation="sm" className="mt-4">
      <h3 className="font-semibold mb-4">Account Settings</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        <Input label="First Name" value="Sarah" />
        <Input label="Last Name" value="Chen" />
      </div>
    </Card>
  </Tab>
  <Tab label="Notifications">
    <Card elevation="sm" className="mt-4">
      <h3 className="font-semibold mb-4">Notification Preferences</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Email Notifications</p>
            <p className="text-sm text-neutral-500">Receive updates via email</p>
          </div>
          <Switch checked />
        </div>
      </div>
    </Card>
  </Tab>
</Tabs>`,
      html: `<mz-tabs initial="0">
  <mz-tab label="Account">Account content</mz-tab>
  <mz-tab label="Settings">Settings content</mz-tab>
</mz-tabs>`
    }
  }
