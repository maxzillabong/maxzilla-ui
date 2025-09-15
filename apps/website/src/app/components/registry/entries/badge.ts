import { ComponentMeta } from '../types'
import { BadgeVariantsPreview } from '../previews/badge'
import { BadgeCountsPreview } from '../previews/badge'
import { BadgeWithUserPreview } from '../previews/badge'

export const badgeEntry: ComponentMeta = {
    slug: 'badge',
    name: 'Badge',
    category: 'Basics',
    description: 'Small status or count indicator in multiple variants.',
    Preview: BadgeVariantsPreview,
    code: {
      react: `import { Badge } from 'maxzilla-ui-react'

<Badge variant="primary">New</Badge>`,
      html: `<mz-badge variant="primary">New</mz-badge>`
    },
    sections: [
      {
        id: 'variants',
        title: 'Badge Variants',
        Preview: BadgeVariantsPreview,
        code: {
          react: `import { Badge } from 'maxzilla-ui-react'
import { TrendingUp, Star } from 'lucide-react'

<div className="flex flex-wrap gap-2 items-center">
  <Badge variant="success">
    <span className="mr-1">•</span> Online
  </Badge>
  <Badge variant="warning">
    <TrendingUp className="w-3 h-3 mr-1" /> Trending
  </Badge>
  <Badge variant="error">
    <span className="mr-1 text-red-500">•</span> Live
  </Badge>
  <Badge variant="primary">
    <Star className="w-3 h-3 mr-1" /> New
  </Badge>
  <Badge variant="secondary">Beta</Badge>
</div>`,
          html: `<div class="flex flex-wrap gap-2 items-center">
  <mz-badge variant="success">
    <span class="mr-1">•</span> Online
  </mz-badge>
  <mz-badge variant="warning">
    🔥 Trending
  </mz-badge>
  <mz-badge variant="error">
    <span class="mr-1 text-red-500">•</span> Live
  </mz-badge>
  <mz-badge variant="primary">
    ⭐ New
  </mz-badge>
  <mz-badge variant="secondary">Beta</mz-badge>
</div>`
        }
      },
      {
        id: 'counts',
        title: 'Count Badges',
        Preview: BadgeCountsPreview,
        code: {
          react: `import { Badge } from 'maxzilla-ui-react'

<div className="flex items-center gap-4">
  <div className="flex items-center gap-2">
    <span className="text-neutral-600 dark:text-neutral-300">Messages</span>
    <Badge variant="primary">24</Badge>
  </div>
  <div className="flex items-center gap-2">
    <span className="text-neutral-600 dark:text-neutral-300">Notifications</span>
    <Badge variant="error">3</Badge>
  </div>
  <div className="flex items-center gap-2">
    <span className="text-neutral-600 dark:text-neutral-300">Updates</span>
    <Badge variant="success">12</Badge>
  </div>
</div>`,
          html: `<div class="flex items-center gap-4">
  <div class="flex items-center gap-2">
    <span class="text-neutral-600 dark:text-neutral-300">Messages</span>
    <mz-badge variant="primary">24</mz-badge>
  </div>
  <div class="flex items-center gap-2">
    <span class="text-neutral-600 dark:text-neutral-300">Notifications</span>
    <mz-badge variant="error">3</mz-badge>
  </div>
  <div class="flex items-center gap-2">
    <span class="text-neutral-600 dark:text-neutral-300">Updates</span>
    <mz-badge variant="success">12</mz-badge>
  </div>
</div>`
        }
      },
      {
        id: 'with-user',
        title: 'With User Profile',
        Preview: BadgeWithUserPreview,
        code: {
          react: `import { Badge, Avatar } from 'maxzilla-ui-react'

<div className="flex items-center gap-3">
  <Avatar src="https://i.pravatar.cc/40?img=7" size="sm" />
  <span className="font-medium text-neutral-900 dark:text-white">John Doe</span>
  <Badge variant="secondary">Admin</Badge>
  <Badge variant="success">Pro</Badge>
</div>`,
          html: `<div class="flex items-center gap-3">
  <mz-avatar src="https://i.pravatar.cc/40?img=7" size="sm"></mz-avatar>
  <span class="font-medium text-neutral-900 dark:text-white">John Doe</span>
  <mz-badge variant="secondary">Admin</mz-badge>
  <mz-badge variant="success">Pro</mz-badge>
</div>`
        }
      }
    ]
  }
