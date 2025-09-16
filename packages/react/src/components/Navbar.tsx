'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface NavbarProps {
  elevated?: boolean
  transparent?: boolean
  compact?: boolean
  centered?: boolean
  theme?: 'light' | 'dark'
  mobileMenuOpen?: boolean
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-navbar': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & NavbarProps,
        HTMLElement
      >
    }
  }
}

export const Navbar = forwardRef<
  HTMLElement,
  NavbarProps
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
    <mz-navbar
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-navbar>
  )
})

Navbar.displayName = 'Navbar'
