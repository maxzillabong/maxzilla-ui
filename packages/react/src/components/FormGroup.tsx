'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface FormGroupProps {

  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-form-group': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & FormGroupProps,
        HTMLElement
      >
    }
  }
}

export const FormGroup = forwardRef<
  HTMLElement,
  FormGroupProps
>((props, ref) => {
  const {
    
    className,
    style,
    children,
    ...restProps
  } = props

  const elementRef = useRef<HTMLElement>(null)

  useImperativeHandle(ref, () => elementRef.current as HTMLElement, [])

  

  // Handle controlled components

  return (
    <mz-form-group
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-form-group>
  )
})

FormGroup.displayName = 'FormGroup'
