import { ComponentMeta } from '../types'
import { SkeletonBasicPreview } from '../previews/skeleton'

export const skeletonEntry: ComponentMeta = {
  slug: 'skeleton',
  name: 'Skeleton',
  category: 'Display',
  description: 'Loading placeholder that mimics content structure.',
  Preview: SkeletonBasicPreview,
  code: {
    react: `import { Skeleton } from 'maxzilla-ui-react'

function Example() {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton />
      <Skeleton />
      <Skeleton style={{ width: '75%' }} />
    </div>
  )
}`,
    html: `<mz-skeleton></mz-skeleton>
<mz-skeleton></mz-skeleton>
<mz-skeleton style="width: 75%"></mz-skeleton>`
  }
}