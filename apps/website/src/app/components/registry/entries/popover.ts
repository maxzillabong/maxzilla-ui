import { ComponentMeta } from '../types'
import { PopoverSettingsPreview } from '../previews/popover'
import { PopoverProfilePreview } from '../previews/popover'
import { PopoverInfoPreview } from '../previews/popover'

export const popoverEntry: ComponentMeta = {
    slug: 'popover',
    name: 'Popover',
    category: 'Overlays',
    description: 'Rich contextual content anchored to a trigger.',
    Preview: PopoverSettingsPreview,
    code: {
      react: `import { Popover, Button, Switch } from 'maxzilla-ui-react'
import { Settings } from 'lucide-react'

<Popover>
  <Button variant="outline" slot="trigger">
    <Settings className="w-4 h-4 mr-2" />
    Settings
  </Button>
  <div className="w-64 p-3">
    <h4 className="font-semibold mb-2">Quick Settings</h4>
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm">Dark mode</span>
        <Switch />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm">Notifications</span>
        <Switch checked />
      </div>
    </div>
  </div>
</Popover>`,
      html: `<mz-popover>
  <mz-button slot="trigger">Settings</mz-button>
  <div class="settings-panel">
    <h4>Quick Settings</h4>
    <div>Dark mode: <input type="checkbox" /></div>
    <div>Notifications: <input type="checkbox" checked /></div>
  </div>
</mz-popover>`
    },
    sections: [
      {
        id: 'settings-popover',
        title: 'Settings Popover',
        Preview: PopoverSettingsPreview,
        code: {
          react: `import { Popover, Button, Switch, Divider } from 'maxzilla-ui-react'
import { Settings } from 'lucide-react'

<Popover>
  <Button variant="outline" slot="trigger">
    <Settings className="w-4 h-4 mr-2" />
    Settings
  </Button>
  <div className="w-64 p-3">
    <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Quick Settings</h4>
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm">Dark mode</span>
        <Switch />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm">Notifications</span>
        <Switch checked />
      </div>
      <Divider />
      <Button variant="outline" size="sm" className="w-full">
        <Settings className="w-3 h-3 mr-1" />
        All Settings
      </Button>
    </div>
  </div>
</Popover>`,
          html: `<mz-popover>
  <mz-button variant="outline" slot="trigger">
    ⚙️ Settings
  </mz-button>
  <div class="w-64 p-3">
    <h4>Quick Settings</h4>
    <div class="settings-list">
      <div class="setting-item">
        <span>Dark mode</span>
        <input type="checkbox" />
      </div>
      <div class="setting-item">
        <span>Notifications</span>
        <input type="checkbox" checked />
      </div>
      <hr />
      <button class="w-full">⚙️ All Settings</button>
    </div>
  </div>
</mz-popover>`
        }
      },
      {
        id: 'profile-popover',
        title: 'Profile Popover',
        Preview: PopoverProfilePreview,
        code: {
          react: `import { Popover, Button, Avatar, Divider } from 'maxzilla-ui-react'
import { User, Settings, Info } from 'lucide-react'

<Popover>
  <Button variant="primary" slot="trigger">
    <User className="w-4 h-4 mr-2" />
    Profile
  </Button>
  <div className="w-72 p-4">
    <div className="flex items-center gap-3 mb-3">
      <Avatar src="https://i.pravatar.cc/50?img=5" size="md" status="online" />
      <div>
        <p className="font-semibold text-neutral-900 dark:text-white">Alex Smith</p>
        <p className="text-sm text-neutral-500">alex@example.com</p>
      </div>
    </div>
    <Divider />
    <div className="space-y-1 mt-3">
      <Button variant="ghost" size="sm" className="w-full justify-start">
        <User className="w-3 h-3 mr-2" />
        View Profile
      </Button>
      <Button variant="ghost" size="sm" className="w-full justify-start">
        <Settings className="w-3 h-3 mr-2" />
        Settings
      </Button>
      <Button variant="ghost" size="sm" className="w-full justify-start">
        <Info className="w-3 h-3 mr-2" />
        Help & Support
      </Button>
      <Divider />
      <Button variant="ghost" size="sm" className="w-full justify-start text-red-600">
        Sign Out
      </Button>
    </div>
  </div>
</Popover>`,
          html: `<mz-popover>
  <mz-button variant="primary" slot="trigger">
    👤 Profile
  </mz-button>
  <div class="w-72 p-4">
    <div class="user-info">
      <img src="avatar.jpg" alt="User" />
      <div>
        <p class="name">Alex Smith</p>
        <p class="email">alex@example.com</p>
      </div>
    </div>
    <hr />
    <div class="menu">
      <button>👤 View Profile</button>
      <button>⚙️ Settings</button>
      <button>ℹ️ Help & Support</button>
      <hr />
      <button class="text-red-600">Sign Out</button>
    </div>
  </div>
</mz-popover>`
        }
      },
      {
        id: 'info-popover',
        title: 'Info Popover',
        Preview: PopoverInfoPreview,
        code: {
          react: `import { Popover, Button, Badge } from 'maxzilla-ui-react'
import { Info } from 'lucide-react'

<Popover>
  <Button variant="outline" slot="trigger">
    <Info className="w-4 h-4 mr-2" />
    Info
  </Button>
  <div className="max-w-sm p-3">
    <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Product Information</h4>
    <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3">
      This feature allows you to customize your workflow and improve productivity.
    </p>
    <div className="flex items-center gap-2">
      <Badge variant="success">v2.1</Badge>
      <Badge variant="secondary">New</Badge>
    </div>
  </div>
</Popover>`,
          html: `<mz-popover>
  <mz-button variant="outline" slot="trigger">
    ℹ️ Info
  </mz-button>
  <div class="max-w-sm p-3">
    <h4>Product Information</h4>
    <p>This feature allows you to customize your workflow and improve productivity.</p>
    <div class="badges">
      <mz-badge variant="success">v2.1</mz-badge>
      <mz-badge variant="secondary">New</mz-badge>
    </div>
  </div>
</mz-popover>`
        }
      }
    ]
  }
