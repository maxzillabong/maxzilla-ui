'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface BadgeProps {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
  dot?: boolean

  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-badge': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & BadgeProps,
        HTMLElement
      >
    }
  }
}

export const Badge = forwardRef<
  HTMLElement,
  BadgeProps
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
    <mz-badge
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-badge>
  )
})

Badge.displayName = 'Badge'
