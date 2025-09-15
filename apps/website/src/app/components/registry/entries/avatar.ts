import { ComponentMeta } from '../types'
import { AvatarGroupPreview } from '../previews/avatar'
import { AvatarWithInfoPreview } from '../previews/avatar'

export const avatarEntry: ComponentMeta = {
    slug: 'avatar',
    name: 'Avatar',
    category: 'Data Display',
    description: 'User avatar with image, initials and sizes.',
    Preview: AvatarGroupPreview,
    code: {
      react: `import { Avatar } from 'maxzilla-ui-react'

<Avatar src="/user.png" size="md" />`,
      html: `<mz-avatar src="/user.png" size="md"></mz-avatar>`
    },
    sections: [
      {
        id: 'group',
        title: 'Avatar Group',
        Preview: AvatarGroupPreview,
        code: {
          react: `import { Avatar } from 'maxzilla-ui-react'

<div className="flex items-center -space-x-2">
  <Avatar src="https://i.pravatar.cc/80?img=1" size="lg" status="online" />
  <Avatar src="https://i.pravatar.cc/80?img=2" size="lg" status="busy" />
  <Avatar src="https://i.pravatar.cc/80?img=3" size="lg" status="away" />
  <Avatar initials="+5" size="lg" />
</div>`,
          html: `<div class="flex items-center -space-x-2">
  <mz-avatar src="https://i.pravatar.cc/80?img=1" size="lg" status="online"></mz-avatar>
  <mz-avatar src="https://i.pravatar.cc/80?img=2" size="lg" status="busy"></mz-avatar>
  <mz-avatar src="https://i.pravatar.cc/80?img=3" size="lg" status="away"></mz-avatar>
  <mz-avatar initials="+5" size="lg"></mz-avatar>
</div>`
        }
      },
      {
        id: 'with-info',
        title: 'With User Info',
        Preview: AvatarWithInfoPreview,
        code: {
          react: `import { Avatar, Badge } from 'maxzilla-ui-react'

<div className="flex items-center gap-4">
  <Avatar src="https://i.pravatar.cc/100?img=8" size="xl" status="online" />
  <div>
    <h4 className="font-semibold text-neutral-900 dark:text-white">Emily Rodriguez</h4>
    <p className="text-sm text-neutral-500 dark:text-neutral-400">Senior Developer</p>
    <div className="flex gap-2 mt-2">
      <Badge variant="success">Active</Badge>
      <Badge variant="primary">Pro</Badge>
    </div>
  </div>
</div>`,
          html: `<div class="flex items-center gap-4">
  <mz-avatar src="https://i.pravatar.cc/100?img=8" size="xl" status="online"></mz-avatar>
  <div>
    <h4 class="font-semibold text-neutral-900 dark:text-white">Emily Rodriguez</h4>
    <p class="text-sm text-neutral-500 dark:text-neutral-400">Senior Developer</p>
    <div class="flex gap-2 mt-2">
      <mz-badge variant="success">Active</mz-badge>
      <mz-badge variant="primary">Pro</mz-badge>
    </div>
  </div>
</div>`
        }
      }
    ]
  }
