import { ComponentMeta } from '../types'
import { ColorPickerBasicPreview } from '../previews/color-picker'

export const colorPickerEntry: ComponentMeta = {
  slug: 'color-picker',
  name: 'Color Picker',
  category: 'Forms',
  description: 'Select colors with various formats and opacity control.',
  Preview: ColorPickerBasicPreview,
  code: {
    react: `import { ColorPicker } from 'maxzilla-ui-react'
import { useState } from 'react'

function Example() {
  const [color, setColor] = useState('#667eea')

  return (
    <ColorPicker
      value={color}
      onChange={(e) => setColor(e.target.value)}
      swatches="#667eea;#764ba2;#f093fb;#fec163"
    />
  )
}`,
    html: `<mz-color-picker
  value="#667eea"
  swatches="#667eea;#764ba2;#f093fb;#fec163">
</mz-color-picker>`
  }
}