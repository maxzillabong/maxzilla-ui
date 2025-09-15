'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface DatePickerProps {
  value?: string
  format?: string
  placeholder?: string
  onChange?: (event: Event) => void
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
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
    onChange,
    className,
    style,
    children,
    ...restProps
  } = props

  const elementRef = useRef<HTMLElement>(null)

  useImperativeHandle(ref, () => elementRef.current as HTMLElement, [])

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

      if (onChange) {
        element.addEventListener('change', onChange as EventListener)
      }

    return () => {
        if (onChange) {
          element.removeEventListener('change', onChange as EventListener)
        }
    }
  }, [onChange])

  // Handle controlled components
  

  

  return (
    <mz-date-picker
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-date-picker>
  )
})

DatePicker.displayName = 'DatePicker'
