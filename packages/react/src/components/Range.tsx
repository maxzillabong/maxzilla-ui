'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface RangeProps {
  value?: number
  min?: number
  max?: number
  step?: number
  label?: string
  helpText?: string
  disabled?: boolean
  required?: boolean
  name?: string
  tooltip?: 'top' | 'bottom' | 'none'
  className?: string
  style?: React.CSSProperties

}



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-range': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & RangeProps,
        HTMLElement
      >
    }
  }
}

export const Range = forwardRef<
  HTMLElement,
  RangeProps
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
    <mz-range
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      
    </mz-range>
  )
})

Range.displayName = 'Range'
