'use client'

import { ColorPicker } from 'maxzilla-ui-react'
import { useState } from 'react'

export function ColorPickerBasicPreview() {
  const [color, setColor] = useState('#667eea')

  return (
    <div className="flex flex-col gap-4">
      <ColorPicker
        value={color}
        onChange={(e: any) => setColor(e.detail?.value || e.target?.value)}
        swatches="#667eea;#764ba2;#f093fb;#fec163;#30cfd0;#667eea"
      />
      <div className="text-sm text-neutral-600">
        Selected color: <span className="font-mono">{color}</span>
      </div>
    </div>
  )
}

export function ColorPickerWithOpacityPreview() {
  const [color, setColor] = useState('#667eea')

  return (
    <div className="flex flex-col gap-4">
      <ColorPicker
        value={color}
        onChange={(e: any) => setColor(e.detail?.value || e.target?.value)}
        opacity
        label="Choose a color with opacity"
      />
    </div>
  )
}

export function ColorPickerInlinePreview() {
  const [color, setColor] = useState('#764ba2')

  return (
    <div className="flex flex-col gap-4">
      <ColorPicker
        value={color}
        onChange={(e: any) => setColor(e.detail?.value || e.target?.value)}
        inline
        helpText="This color picker is always visible"
      />
    </div>
  )
}