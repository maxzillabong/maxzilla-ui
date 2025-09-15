'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface SelectProps {
  value?: string
  label?: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  error?: boolean
  helperText?: string
  name?: string
  size?: 'sm' | 'md' | 'lg'
  onChange?: (event: Event) => void
  className?: string
  style?: React.CSSProperties

}

export interface SelectRef {
    focus: () => void
    blur: () => void
    validate: () => void
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-select': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & SelectProps,
        HTMLElement
      >
    }
  }
}

export const Select = forwardRef<
  SelectRef,
  SelectProps
>((props, ref) => {
  const {
    onChange,
    className,
    style,
    
    ...restProps
  } = props

  const elementRef = useRef<HTMLElement>(null)

  useImperativeHandle(ref, () => ({
    focus: () => (elementRef.current as any)?.focus(),
    blur: () => (elementRef.current as any)?.blur(),
    validate: () => (elementRef.current as any)?.validate()
  }), [])

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
  
  useEffect(() => {
    const element = elementRef.current as any
    if (element && props.value !== undefined) {
      element.value = props.value
    }
  }, [props.value])

  

  return (
    <mz-select
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      
    </mz-select>
  )
})

Select.displayName = 'Select'
