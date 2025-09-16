'use client'

import { Range } from 'maxzilla-ui-react'
import { useState } from 'react'

export function RangeBasicPreview() {
  const [value, setValue] = useState(50)

  return (
    <div className="flex flex-col gap-4">
      <Range
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        label="Volume"
        helpText="Adjust the volume level"
      />
      <div className="text-sm text-neutral-600">
        Current value: {value}
      </div>
    </div>
  )
}

export function RangeWithStepsPreview() {
  const [value, setValue] = useState(5)

  return (
    <div className="flex flex-col gap-4">
      <Range
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        min={0}
        max={10}
        step={0.5}
        label="Rating"
        helpText="Rate from 0 to 10"
      />
      <div className="text-sm text-neutral-600">
        Rating: {value}/10
      </div>
    </div>
  )
}

export function RangeDisabledPreview() {
  return (
    <div className="flex flex-col gap-4">
      <Range
        value={30}
        disabled
        label="Disabled Range"
        helpText="This range is disabled"
      />
    </div>
  )
}