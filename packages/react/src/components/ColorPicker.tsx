'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface ColorPickerProps {
  value?: string
  format?: 'hex' | 'rgb' | 'hsl' | 'hsv'
  opacity?: boolean
  inline?: boolean
  size?: 'small' | 'medium' | 'large'
  swatches?: string
  label?: string
  helpText?: string
  disabled?: boolean
  required?: boolean
  name?: string
  className?: string
  style?: React.CSSProperties

}



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-color-picker': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & ColorPickerProps,
        HTMLElement
      >
    }
  }
}

export const ColorPicker = forwardRef<
  HTMLElement,
  ColorPickerProps
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
    <mz-color-picker
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      
    </mz-color-picker>
  )
})

ColorPicker.displayName = 'ColorPicker'
