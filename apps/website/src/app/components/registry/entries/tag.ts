import { ComponentMeta } from '../types'
import { TagBasicPreview } from '../previews/tag'

export const tagEntry: ComponentMeta = {
  slug: 'tag',
  name: 'Tag',
  category: 'Display',
  description: 'Labels for categorizing and organizing content.',
  Preview: TagBasicPreview,
  code: {
    react: `import { Tag } from 'maxzilla-ui-react'

function Example() {
  return (
    <div className="flex gap-2">
      <Tag>Default</Tag>
      <Tag variant="primary">Primary</Tag>
      <Tag variant="success" removable>
        Removable
      </Tag>
    </div>
  )
}`,
    html: `<mz-tag>Default</mz-tag>
<mz-tag variant="primary">Primary</mz-tag>
<mz-tag variant="success" removable>Removable</mz-tag>`
  }
}