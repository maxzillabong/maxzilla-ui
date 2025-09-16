'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface BreadcrumbProps {

  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-breadcrumb': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & BreadcrumbProps,
        HTMLElement
      >
    }
  }
}

export const Breadcrumb = forwardRef<
  HTMLElement,
  BreadcrumbProps
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
    <mz-breadcrumb
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-breadcrumb>
  )
})

Breadcrumb.displayName = 'Breadcrumb'
