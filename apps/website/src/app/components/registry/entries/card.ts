import { ComponentMeta } from '../types'
import { CardDefaultPreview } from '../previews/card'
import { CardOutlinedPreview } from '../previews/card'
import { CardElevatedPreview } from '../previews/card'
import { CardProfilePreview } from '../previews/card'
import { CardRevenueStatsPreview } from '../previews/card'
import { CardUsersStatsPreview } from '../previews/card'

export const cardEntry: ComponentMeta = {
    slug: 'card',
    name: 'Card',
    category: 'Data Display',
    description: 'Surface container with elevation variants and slots.',
    Preview: CardDefaultPreview,
    code: {
      react: `import { Card } from 'maxzilla-ui-react'

<Card>
  <h3 className="font-semibold mb-2">Default Card</h3>
  <p className="text-sm">Basic card with default styling.</p>
</Card>`,
      html: `<mz-card>
  <h3>Default Card</h3>
  <p>Basic card with default styling.</p>
</mz-card>`
    },
    sections: [
      {
        id: 'default',
        title: 'Default Card',
        Preview: CardDefaultPreview,
        code: {
          react: `import { Card } from 'maxzilla-ui-react'

<Card>
  <h3 className="font-semibold mb-2">Default Card</h3>
  <p className="text-sm text-neutral-600 dark:text-neutral-400">Basic card with default styling and content.</p>
</Card>`,
          html: `<mz-card>
  <h3>Default Card</h3>
  <p>Basic card with default styling and content.</p>
</mz-card>`
        }
      },
      {
        id: 'outlined',
        title: 'Outlined Card',
        Preview: CardOutlinedPreview,
        code: {
          react: `import { Card } from 'maxzilla-ui-react'

<Card variant="outlined">
  <h3 className="font-semibold mb-2">Outlined Card</h3>
  <p className="text-sm text-neutral-600 dark:text-neutral-400">Card with border styling for subtle separation.</p>
</Card>`,
          html: `<mz-card variant="outlined">
  <h3>Outlined Card</h3>
  <p>Card with border styling for subtle separation.</p>
</mz-card>`
        }
      },
      {
        id: 'elevated',
        title: 'Elevated Card',
        Preview: CardElevatedPreview,
        code: {
          react: `import { Card } from 'maxzilla-ui-react'

<Card variant="elevated">
  <h3 className="font-semibold mb-2">Elevated Card</h3>
  <p className="text-sm text-neutral-600 dark:text-neutral-400">Card with shadow elevation for emphasis.</p>
</Card>`,
          html: `<mz-card variant="elevated">
  <h3>Elevated Card</h3>
  <p>Card with shadow elevation for emphasis.</p>
</mz-card>`
        }
      },
      {
        id: 'profile-card',
        title: 'Profile Card',
        Preview: CardProfilePreview,
        code: {
          react: `import { Card, Avatar, Badge, Button } from 'maxzilla-ui-react'

<Card elevation="lg" interactive>
  <div className="flex items-start justify-between">
    <div className="flex gap-4">
      <Avatar src="https://i.pravatar.cc/80?img=3" size="lg" />
      <div>
        <h3 className="text-lg font-semibold">Sarah Chen</h3>
        <p className="text-sm text-neutral-500">Product Designer</p>
        <div className="flex gap-2 mt-2">
          <Badge variant="primary">Design</Badge>
          <Badge variant="success">Available</Badge>
        </div>
      </div>
    </div>
  </div>
  <p className="mt-4 text-neutral-600">
    Crafting beautiful interfaces with attention to detail.
  </p>
  <div slot="actions" className="flex gap-2">
    <Button variant="primary" size="sm">View Profile</Button>
    <Button variant="outline" size="sm">Message</Button>
  </div>
</Card>`,
          html: `<mz-card elevation="lg" interactive>
  <div class="flex items-start justify-between">
    <div class="flex gap-4">
      <mz-avatar src="https://i.pravatar.cc/80?img=3" size="lg"></mz-avatar>
      <div>
        <h3>Sarah Chen</h3>
        <p>Product Designer</p>
        <div class="flex gap-2 mt-2">
          <mz-badge variant="primary">Design</mz-badge>
          <mz-badge variant="success">Available</mz-badge>
        </div>
      </div>
    </div>
  </div>
  <p>Crafting beautiful interfaces with attention to detail.</p>
  <div slot="actions">
    <mz-button variant="primary" size="sm">View Profile</mz-button>
    <mz-button variant="outline" size="sm">Message</mz-button>
  </div>
</mz-card>`
        }
      },
      {
        id: 'revenue-stats',
        title: 'Revenue Stats Card',
        Preview: CardRevenueStatsPreview,
        code: {
          react: `import { Card, Badge } from 'maxzilla-ui-react'
import { TrendingUp } from 'lucide-react'

<Card elevation="md" variant="elevated">
  <div className="flex items-center gap-4 mb-4">
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white">
      <TrendingUp className="w-6 h-6" />
    </div>
    <div>
      <p className="text-sm text-neutral-500">Monthly Revenue</p>
      <h3 className="text-2xl font-bold">$24,875</h3>
    </div>
  </div>
  <div className="flex items-center gap-2">
    <Badge variant="success">+12.5%</Badge>
    <span className="text-sm text-neutral-500">vs last month</span>
  </div>
</Card>`,
          html: `<mz-card elevation="md" variant="elevated">
  <div class="flex items-center gap-4 mb-4">
    <div class="icon-box">📈</div>
    <div>
      <p>Monthly Revenue</p>
      <h3>$24,875</h3>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <mz-badge variant="success">+12.5%</mz-badge>
    <span>vs last month</span>
  </div>
</mz-card>`
        }
      },
      {
        id: 'users-stats',
        title: 'Users Stats Card',
        Preview: CardUsersStatsPreview,
        code: {
          react: `import { Card, Badge } from 'maxzilla-ui-react'
import { Users } from 'lucide-react'

<Card elevation="md" variant="elevated">
  <div className="flex items-center gap-4 mb-4">
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white">
      <Users className="w-6 h-6" />
    </div>
    <div>
      <p className="text-sm text-neutral-500">Active Users</p>
      <h3 className="text-2xl font-bold">1,429</h3>
    </div>
  </div>
  <div className="flex items-center gap-2">
    <Badge variant="success">+8.2%</Badge>
    <span className="text-sm text-neutral-500">vs last week</span>
  </div>
</Card>`,
          html: `<mz-card elevation="md" variant="elevated">
  <div class="flex items-center gap-4 mb-4">
    <div class="icon-box">👥</div>
    <div>
      <p>Active Users</p>
      <h3>1,429</h3>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <mz-badge variant="success">+8.2%</mz-badge>
    <span>vs last week</span>
  </div>
</mz-card>`
        }
      }
    ]
  }
