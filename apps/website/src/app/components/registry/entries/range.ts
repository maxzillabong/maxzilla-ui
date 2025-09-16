import { ComponentMeta } from '../types'
import { RangeBasicPreview } from '../previews/range'

export const rangeEntry: ComponentMeta = {
  slug: 'range',
  name: 'Range',
  category: 'Forms',
  description: 'Slider input for selecting numeric values within a range.',
  Preview: RangeBasicPreview,
  code: {
    react: `import { Range } from 'maxzilla-ui-react'
import { useState } from 'react'

function Example() {
  const [value, setValue] = useState(50)

  return (
    <Range
      value={value}
      onChange={(e) => setValue(e.target.value)}
      label="Volume"
      helpText="Adjust the volume level"
    />
  )
}`,
    html: `<mz-range
  value="50"
  label="Volume"
  help-text="Adjust the volume level">
</mz-range>`
  }
}