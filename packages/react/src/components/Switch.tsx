'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface SwitchProps {
  checked?: boolean
  disabled?: boolean
  label?: string
  name?: string
  value?: string
  required?: boolean
  onChange?: (event: Event) => void
  className?: string
  style?: React.CSSProperties

}

export interface SwitchRef {
    click: () => void
    focus: () => void
    blur: () => void
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
  SwitchRef,
  SwitchProps
>((props, ref) => {
  const {
    onChange,
    className,
    style,
    
    ...restProps
  } = props

  const elementRef = useRef<HTMLElement>(null)

  useImperativeHandle(ref, () => ({
    click: () => (elementRef.current as any)?.click(),
    focus: () => (elementRef.current as any)?.focus(),
    blur: () => (elementRef.current as any)?.blur()
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
