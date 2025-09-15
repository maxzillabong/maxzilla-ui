'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface StackProps {
  direction?: 'row' | 'column'
  spacing?: string | number
  align?: string
  justify?: string

  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-stack': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & StackProps,
        HTMLElement
      >
    }
  }
}

export const Stack = forwardRef<
  HTMLElement,
  StackProps
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
    <mz-stack
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-stack>
  )
})

Stack.displayName = 'Stack'
