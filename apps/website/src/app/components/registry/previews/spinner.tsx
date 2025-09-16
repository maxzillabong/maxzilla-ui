'use client'

import { Spinner } from 'maxzilla-ui-react'

export function SpinnerBasicPreview() {
  return (
    <div className="flex items-center gap-4">
      <Spinner size="small" />
      <Spinner size="medium" />
      <Spinner size="large" />
      <Spinner size="xlarge" />
    </div>
  )
}

export function SpinnerWithLabelPreview() {
  return (
    <div className="flex flex-col gap-4">
      <Spinner label="Loading..." />
      <Spinner size="large" label="Please wait..." />
    </div>
  )
}

export function SpinnerInContextPreview() {
  return (
    <div className="flex flex-col gap-4">
      <div className="p-4 border rounded-lg">
        <div className="flex items-center gap-3">
          <Spinner />
          <span>Fetching your data...</span>
        </div>
      </div>

      <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg" disabled>
        <Spinner size="small" />
        Processing...
      </button>
    </div>
  )
}