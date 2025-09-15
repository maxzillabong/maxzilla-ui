'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local'
  label?: string
  placeholder?: string
  value?: string
  name?: string
  disabled?: boolean
  required?: boolean
  readonly?: boolean
  error?: boolean
  success?: boolean
  helperText?: string
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  pattern?: string
  autocomplete?: string
  min?: string | number
  max?: string | number
  minLength?: number
  maxLength?: number
  step?: number
  autofocus?: boolean
  onChange?: (event: Event) => void
  onInput?: (event: CustomEvent<any>) => void
  onFocus?: (event: Event) => void
  onBlur?: (event: Event) => void
  className?: string
  style?: React.CSSProperties

}

export interface InputRef {
    focus: () => void
    blur: () => void
    select: () => void
    setSelectionRange: (start: number, end: number, direction?: 'forward' | 'backward' | 'none') => void
    validate: () => void
    checkValidity: () => void
    reportValidity: () => void
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-input': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & InputProps,
        HTMLElement
      >
    }
  }
}

export const Input = forwardRef<
  InputRef,
  InputProps
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

  useImperativeHandle(ref, () => ({
    focus: () => (elementRef.current as any)?.focus(),
    blur: () => (elementRef.current as any)?.blur(),
    select: () => (elementRef.current as any)?.select(),
    setSelectionRange: (start: number, end: number, direction?: 'forward' | 'backward' | 'none') => {
      (elementRef.current as any)?.setSelectionRange(start, end, direction)
    },
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
      if (onInput) {
        element.addEventListener('mz-input', onInput as EventListener)
      }
      if (onFocus) {
        element.addEventListener('mz-focus', onFocus as EventListener)
      }
      if (onBlur) {
        element.addEventListener('mz-blur', onBlur as EventListener)
      }

    return () => {
        if (onChange) {
          element.removeEventListener('change', onChange as EventListener)
        }
        if (onInput) {
          element.removeEventListener('mz-input', onInput as EventListener)
        }
        if (onFocus) {
          element.removeEventListener('mz-focus', onFocus as EventListener)
        }
        if (onBlur) {
          element.removeEventListener('mz-blur', onBlur as EventListener)
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
    <mz-input
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      
    </mz-input>
  )
})

Input.displayName = 'Input'
