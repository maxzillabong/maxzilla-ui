'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface SelectProps {
  label?: string
  multiple?: boolean
  value?: string | null
  ariaExpanded?: boolean
  onChange?: (event: Event) => void
  onInput?: (event: Event) => void
  onFocus?: (event: Event) => void
  onBlur?: (event: Event) => void
  className?: string
  style?: React.CSSProperties

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
  HTMLElement,
  SelectProps
>((props, ref) => {
  const {
    onChange,
    onInput,
    onFocus,
    onBlur,
    className,
    style,
    
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
      if (onInput) {
        element.addEventListener('input', onInput as EventListener)
      }
      if (onFocus) {
        element.addEventListener('focus', onFocus as EventListener)
      }
      if (onBlur) {
        element.addEventListener('blur', onBlur as EventListener)
      }

    return () => {
        if (onChange) {
          element.removeEventListener('change', onChange as EventListener)
        }
        if (onInput) {
          element.removeEventListener('input', onInput as EventListener)
        }
        if (onFocus) {
          element.removeEventListener('focus', onFocus as EventListener)
        }
        if (onBlur) {
          element.removeEventListener('blur', onBlur as EventListener)
        }
    }
  }, [onChange, onInput, onFocus, onBlur])

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
