'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface FormActionsProps {

  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-form-actions': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & FormActionsProps,
        HTMLElement
      >
    }
  }
}

export const FormActions = forwardRef<
  HTMLElement,
  FormActionsProps
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
    <mz-form-actions
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-form-actions>
  )
})

FormActions.displayName = 'FormActions'
