'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface CheckboxProps {
  checked?: boolean
  disabled?: boolean
  indeterminate?: boolean
  label?: string
  name?: string
  value?: string
  required?: boolean
  onChange?: (event: Event) => void
  onMzChange?: (event: CustomEvent<any>) => void
  className?: string
  style?: React.CSSProperties

}

export interface CheckboxRef {
    click: () => void
    focus: () => void
    blur: () => void
    validate: () => void
    checkValidity: () => void
    reportValidity: () => void
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-checkbox': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & CheckboxProps,
        HTMLElement
      >
    }
  }
}

export const Checkbox = forwardRef<
  CheckboxRef,
  CheckboxProps
>((props, ref) => {
  const {
    onChange,
    onMzChange,
    className,
    style,
    
    ...restProps
  } = props

  const elementRef = useRef<HTMLElement>(null)

  useImperativeHandle(ref, () => ({
    click: () => (elementRef.current as any)?.click(),
    focus: () => (elementRef.current as any)?.focus(),
    blur: () => (elementRef.current as any)?.blur(),
    validate: () => (elementRef.current as any)?.validate(),
    checkValidity: () => (elementRef.current as any)?.checkValidity(),
    reportValidity: () => (elementRef.current as any)?.reportValidity()
  }), [])

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

      if (onChange) {
        element.addEventListener('change', onChange as EventListener)
      }
      if (onMzChange) {
        element.addEventListener('mz-change', onMzChange as EventListener)
      }

    return () => {
        if (onChange) {
          element.removeEventListener('change', onChange as EventListener)
        }
        if (onMzChange) {
          element.removeEventListener('mz-change', onMzChange as EventListener)
        }
    }
  }, [onChange, onMzChange])

  // Handle controlled components
  

  
  useEffect(() => {
    const element = elementRef.current as any
    if (element && props.checked !== undefined) {
      element.checked = props.checked
    }
  }, [props.checked])

  return (
    <mz-checkbox
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      
    </mz-checkbox>
  )
})

Checkbox.displayName = 'Checkbox'
