'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical'

  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-divider': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & DividerProps,
        HTMLElement
      >
    }
  }
}

export const Divider = forwardRef<
  HTMLElement,
  DividerProps
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
    <mz-divider
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-divider>
  )
})

Divider.displayName = 'Divider'
