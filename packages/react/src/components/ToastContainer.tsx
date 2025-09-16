'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface ToastContainerProps {
  duration?: number
  position?: 'top-left'|'top-right'|'bottom-left'|'bottom-right'
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export interface ToastContainerRef {
    show: () => void
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-toast-container': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & ToastContainerProps,
        HTMLElement
      >
    }
  }
}

export const ToastContainer = forwardRef<
  ToastContainerRef,
  ToastContainerProps
>((props, ref) => {
  const {
    
    className,
    style,
    children,
    ...restProps
  } = props

  const elementRef = useRef<HTMLElement>(null)

  useImperativeHandle(ref, () => ({
    show: () => (elementRef.current as any)?.show()
  }), [])

  

  // Handle controlled components

  return (
    <mz-toast-container
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-toast-container>
  )
})

ToastContainer.displayName = 'ToastContainer'
