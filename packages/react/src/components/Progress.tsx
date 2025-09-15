'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface ProgressProps {
  value?: number
  max?: number
  type?: 'line' | 'circle'

  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-progress': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & ProgressProps,
        HTMLElement
      >
    }
  }
}

export const Progress = forwardRef<
  HTMLElement,
  ProgressProps
>((props, ref) => {
  const {
    
    className,
    style,
    children,
    ...restProps
  } = props

  const elementRef = useRef<HTMLElement>(null)

  useImperativeHandle(ref, () => elementRef.current as HTMLElement, [])

  

  // Handle controlled components
  

  

  return (
    <mz-progress
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-progress>
  )
})

Progress.displayName = 'Progress'
