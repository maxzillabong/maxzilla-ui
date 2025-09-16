'use client'

import { Rating } from 'maxzilla-ui-react'
import { useState } from 'react'

export function RatingBasicPreview() {
  const [value, setValue] = useState(3)

  return (
    <div className="flex flex-col gap-4">
      <Rating
        value={value}
        onChange={(e: any) => setValue(e.detail.value)}
      />
      <div className="text-sm text-neutral-600">
        You rated: {value} stars
      </div>
    </div>
  )
}

export function RatingWithPrecisionPreview() {
  const [value, setValue] = useState(3.5)

  return (
    <div className="flex flex-col gap-4">
      <Rating
        value={value}
        precision={0.5}
        onChange={(e: any) => setValue(e.detail.value)}
        showValue
      />
    </div>
  )
}

export function RatingReadOnlyPreview() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Rating value={4.5} precision={0.5} readonly />
        <span className="text-sm text-neutral-600">4.5 out of 5</span>
      </div>
      <div className="flex items-center gap-4">
        <Rating value={3} readonly />
        <span className="text-sm text-neutral-600">3 out of 5</span>
      </div>
    </div>
  )
}

export function RatingCustomMaxPreview() {
  const [value, setValue] = useState(7)

  return (
    <div className="flex flex-col gap-4">
      <Rating
        value={value}
        max={10}
        onChange={(e: any) => setValue(e.detail.value)}
        label="Rate out of 10:"
        showValue
      />
    </div>
  )
}