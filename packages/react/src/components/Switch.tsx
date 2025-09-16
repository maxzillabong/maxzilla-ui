'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface SwitchProps {
  checked?: boolean
  disabled?: boolean
  label?: string
  ariaLabel?: string
  ariaDescribedBy?: string
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
      'mz-switch': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & SwitchProps,
        HTMLElement
      >
    }
  }
}

export const Switch = forwardRef<
  HTMLElement,
  SwitchProps
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
    if (element && props.checked !== undefined) {
      element.checked = props.checked
    }
  }, [props.checked])

  return (
    <mz-switch
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      
    </mz-switch>
  )
})

Switch.displayName = 'Switch'
