'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface InputProps {
  value?: string
  placeholder?: string
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  error?: boolean
  success?: boolean
  name?: string
  label?: string
  helperText?: string
  required?: boolean
  fullWidth?: boolean
  pattern?: string
  autocomplete?: string
  readonly?: boolean
  autofocus?: boolean
  ariaLabel?: string
  ariaDescribedBy?: string
  hasPrefix?: boolean
  hasSuffix?: boolean
  onInput?: (event: Event) => void
  onChange?: (event: Event) => void
  onFocus?: (event: Event) => void
  onBlur?: (event: Event) => void
  className?: string
  style?: React.CSSProperties

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
  HTMLElement,
  InputProps
>((props, ref) => {
  const {
    onInput,
    onChange,
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

      if (onInput) {
        element.addEventListener('input', onInput as EventListener)
      }
      if (onChange) {
        element.addEventListener('change', onChange as EventListener)
      }
      if (onFocus) {
        element.addEventListener('focus', onFocus as EventListener)
      }
      if (onBlur) {
        element.addEventListener('blur', onBlur as EventListener)
      }

    return () => {
        if (onInput) {
          element.removeEventListener('input', onInput as EventListener)
        }
        if (onChange) {
          element.removeEventListener('change', onChange as EventListener)
        }
        if (onFocus) {
          element.removeEventListener('focus', onFocus as EventListener)
        }
        if (onBlur) {
          element.removeEventListener('blur', onBlur as EventListener)
        }
    }
  }, [onInput, onChange, onFocus, onBlur])

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
