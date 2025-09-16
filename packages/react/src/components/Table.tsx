'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface TableProps {

  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-table': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & TableProps,
        HTMLElement
      >
    }
  }
}

export const Table = forwardRef<
  HTMLElement,
  TableProps
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
    <mz-table
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-table>
  )
})

Table.displayName = 'Table'
