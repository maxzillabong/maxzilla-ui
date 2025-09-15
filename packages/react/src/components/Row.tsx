'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface RowProps {
  gutter?: number
  align?: string
  justify?: string

  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-row': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & RowProps,
        HTMLElement
      >
    }
  }
}

export const Row = forwardRef<
  HTMLElement,
  RowProps
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
    <mz-row
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-row>
  )
})

Row.displayName = 'Row'
