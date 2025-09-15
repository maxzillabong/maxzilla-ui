'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface PaginationProps {
  current?: number
  total?: number
  pageSize?: number
  onChange?: (event: CustomEvent<any>) => void
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
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
  

  

  return (
    <mz-pagination
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-pagination>
  )
})

Pagination.displayName = 'Pagination'
