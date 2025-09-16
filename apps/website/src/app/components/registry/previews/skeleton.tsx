'use client'

import { Skeleton } from 'maxzilla-ui-react'

export function SkeletonBasicPreview() {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton />
      <Skeleton />
      <Skeleton style={{ width: '75%' }} />
    </div>
  )
}

export function SkeletonCardPreview() {
  return (
    <div className="p-4 border rounded-lg">
      <div className="flex items-center gap-3 mb-4">
        <Skeleton style={{ width: '48px', height: '48px', borderRadius: '50%' }} />
        <div className="flex-1">
          <Skeleton style={{ width: '150px', height: '20px', marginBottom: '8px' }} />
          <Skeleton style={{ width: '100px', height: '16px' }} />
        </div>
      </div>
      <Skeleton style={{ height: '12px', marginBottom: '8px' }} />
      <Skeleton style={{ height: '12px', marginBottom: '8px' }} />
      <Skeleton style={{ height: '12px', width: '80%' }} />
    </div>
  )
}

export function SkeletonEffectsPreview() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-sm font-medium mb-2">Sheen Effect (default)</p>
        <Skeleton effect="sheen" />
      </div>
      <div>
        <p className="text-sm font-medium mb-2">Pulse Effect</p>
        <Skeleton effect="pulse" />
      </div>
    </div>
  )
}

export function SkeletonCompleteExamplePreview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[1, 2].map((i) => (
        <div key={i} className="p-4 border rounded-lg">
          <div className="flex items-start gap-3">
            <Skeleton style={{ width: '64px', height: '64px', borderRadius: '8px' }} />
            <div className="flex-1">
              <Skeleton style={{ height: '24px', marginBottom: '8px' }} />
              <Skeleton style={{ height: '16px', marginBottom: '4px' }} />
              <Skeleton style={{ height: '16px', width: '60%' }} />
              <div className="flex gap-2 mt-3">
                <Skeleton style={{ width: '60px', height: '28px', borderRadius: '4px' }} />
                <Skeleton style={{ width: '60px', height: '28px', borderRadius: '4px' }} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}