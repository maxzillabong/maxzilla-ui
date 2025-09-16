'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface BreadcrumbItemProps {
  href?: string | null
  current?: boolean
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-breadcrumb-item': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & BreadcrumbItemProps,
        HTMLElement
      >
    }
  }
}

export const BreadcrumbItem = forwardRef<
  HTMLElement,
  BreadcrumbItemProps
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
    <mz-breadcrumb-item
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-breadcrumb-item>
  )
})

BreadcrumbItem.displayName = 'BreadcrumbItem'
