'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface ProgressProps {
  value?: number
  max?: number
  label?: string
  showValue?: boolean
  className?: string
  style?: React.CSSProperties

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
    
    ...restProps
  } = props

  const elementRef = useRef<HTMLElement>(null)

  useImperativeHandle(ref, () => elementRef.current as HTMLElement, [])

  

  // Handle controlled components
  useEffect(() => {
    const element = elementRef.current as any
    if (element && props.value !== undefined) {
      element.value = props.value
    }
  }, [props.value])

  return (
    <mz-progress
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      
    </mz-progress>
  )
})

Progress.displayName = 'Progress'
