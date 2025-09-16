'use client'

import { Tag } from 'maxzilla-ui-react'
import { useState } from 'react'

export function TagBasicPreview() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tag>Default</Tag>
      <Tag variant="primary">Primary</Tag>
      <Tag variant="secondary">Secondary</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="danger">Danger</Tag>
      <Tag variant="info">Info</Tag>
    </div>
  )
}

export function TagSizesPreview() {
  return (
    <div className="flex items-center gap-2">
      <Tag size="small">Small</Tag>
      <Tag size="medium">Medium</Tag>
      <Tag size="large">Large</Tag>
    </div>
  )
}

export function TagRemovablePreview() {
  const [tags, setTags] = useState(['React', 'TypeScript', 'Tailwind', 'Next.js'])

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <Tag
            key={tag}
            variant="primary"
            removable
            onRemove={() => removeTag(tag)}
          >
            {tag}
          </Tag>
        ))}
      </div>
      {tags.length === 0 && (
        <p className="text-sm text-neutral-500">All tags removed!</p>
      )}
    </div>
  )
}

export function TagPillPreview() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tag pill>Pill Tag</Tag>
      <Tag pill variant="primary">Primary Pill</Tag>
      <Tag pill variant="success" removable>Removable Pill</Tag>
    </div>
  )
}