'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface SkeletonProps {
  effect?: 'sheen' | 'pulse'
  className?: string
  style?: React.CSSProperties

}



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-skeleton': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & SkeletonProps,
        HTMLElement
      >
    }
  }
}

export const Skeleton = forwardRef<
  HTMLElement,
  SkeletonProps
>((props, ref) => {
  const {
    
    className,
    style,
    
    ...restProps
  } = props

  const elementRef = useRef<HTMLElement>(null)

  useImperativeHandle(ref, () => elementRef.current as HTMLElement, [])

  

  // Handle controlled components

  return (
    <mz-skeleton
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      
    </mz-skeleton>
  )
})

Skeleton.displayName = 'Skeleton'
