'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface PaginationProps {
  total?: number
  pageSize?: number
  current?: number
  className?: string
  style?: React.CSSProperties

}



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-pagination': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & PaginationProps,
        HTMLElement
      >
    }
  }
}

export const Pagination = forwardRef<
  HTMLElement,
  PaginationProps
>((props, ref) => {
  const {
    
    className,
    style,
    
    ...restProps
  } = props

  const elementRef = useRef<HTMLElement>(null)

  useImperativeHandle(ref, () => elementRef.current as HTMLElement, [])

  

  // Handle controlled components

  return (
    <mz-pagination
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      
    </mz-pagination>
  )
})

Pagination.displayName = 'Pagination'
