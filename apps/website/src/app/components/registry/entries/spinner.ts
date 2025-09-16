import { ComponentMeta } from '../types'
import { SpinnerBasicPreview } from '../previews/spinner'

export const spinnerEntry: ComponentMeta = {
  slug: 'spinner',
  name: 'Spinner',
  category: 'Feedback',
  description: 'Loading spinner to indicate processing or waiting states.',
  Preview: SpinnerBasicPreview,
  code: {
    react: `import { Spinner } from 'maxzilla-ui-react'

function Example() {
  return (
    <div className="flex items-center gap-4">
      <Spinner size="small" />
      <Spinner size="medium" />
      <Spinner size="large" />
    </div>
  )
}`,
    html: `<mz-spinner size="medium"></mz-spinner>
<mz-spinner size="large" label="Loading..."></mz-spinner>`
  }
}