import { ComponentMeta } from '../types'
import { RatingBasicPreview } from '../previews/rating'

export const ratingEntry: ComponentMeta = {
  slug: 'rating',
  name: 'Rating',
  category: 'Forms',
  description: 'Star rating component for collecting user feedback.',
  Preview: RatingBasicPreview,
  code: {
    react: `import { Rating } from 'maxzilla-ui-react'
import { useState } from 'react'

function Example() {
  const [value, setValue] = useState(3)

  return (
    <Rating
      value={value}
      onChange={(e) => setValue(e.detail.value)}
    />
  )
}`,
    html: `<mz-rating value="3"></mz-rating>`
  }
}