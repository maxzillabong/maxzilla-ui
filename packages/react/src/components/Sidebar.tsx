'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface SidebarProps {

  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-sidebar': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & SidebarProps,
        HTMLElement
      >
    }
  }
}

export const Sidebar = forwardRef<
  HTMLElement,
  SidebarProps
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
    <mz-sidebar
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-sidebar>
  )
})

Sidebar.displayName = 'Sidebar'
