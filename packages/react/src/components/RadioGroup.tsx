'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface RadioGroupProps {
  name?: string
  value?: string | null
  onChange?: (event: Event) => void
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-radio-group': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & RadioGroupProps,
        HTMLElement
      >
    }
  }
}

export const RadioGroup = forwardRef<
  HTMLElement,
  RadioGroupProps
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
  useEffect(() => {
    const element = elementRef.current as any
    if (element && props.value !== undefined) {
      element.value = props.value
    }
  }, [props.value])

  return (
    <mz-radio-group
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-radio-group>
  )
})

RadioGroup.displayName = 'RadioGroup'
