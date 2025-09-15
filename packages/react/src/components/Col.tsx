'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface ColProps {
  span?: number
  offset?: number
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number

  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-col': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & ColProps,
        HTMLElement
      >
    }
  }
}

export const Col = forwardRef<
  HTMLElement,
  ColProps
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
    <mz-col
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-col>
  )
})

Col.displayName = 'Col'
