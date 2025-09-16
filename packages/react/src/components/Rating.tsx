'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface RatingProps {
  value?: number
  max?: number
  precision?: number
  readonly?: boolean
  disabled?: boolean
  showValue?: boolean
  label?: string
  name?: string
  symbol?: string
  className?: string
  style?: React.CSSProperties

}



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-rating': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & RatingProps,
        HTMLElement
      >
    }
  }
}

export const Rating = forwardRef<
  HTMLElement,
  RatingProps
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
    <mz-rating
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      
    </mz-rating>
  )
})

Rating.displayName = 'Rating'
