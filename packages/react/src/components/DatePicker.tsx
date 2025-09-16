'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface DatePickerProps {
  label?: string
  value?: string
  className?: string
  style?: React.CSSProperties

}



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-date-picker': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & DatePickerProps,
        HTMLElement
      >
    }
  }
}

export const DatePicker = forwardRef<
  HTMLElement,
  DatePickerProps
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
    <mz-date-picker
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      
    </mz-date-picker>
  )
})

DatePicker.displayName = 'DatePicker'
