'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  color?: string

  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-loading': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & LoadingProps,
        HTMLElement
      >
    }
  }
}

export const Loading = forwardRef<
  HTMLElement,
  LoadingProps
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
    <mz-loading
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-loading>
  )
})

Loading.displayName = 'Loading'
