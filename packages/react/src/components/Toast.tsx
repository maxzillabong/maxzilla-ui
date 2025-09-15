'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface ToastProps {
  message?: string
  type?: 'info' | 'success' | 'warning' | 'error'
  duration?: number

  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export interface ToastRef {
    show: () => void
    hide: () => void
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-toast': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & ToastProps,
        HTMLElement
      >
    }
  }
}

export const Toast = forwardRef<
  ToastRef,
  ToastProps
>((props, ref) => {
  const {
    
    className,
    style,
    children,
    ...restProps
  } = props

  const elementRef = useRef<HTMLElement>(null)

  useImperativeHandle(ref, () => ({
    show: () => (elementRef.current as any)?.show(),
    hide: () => (elementRef.current as any)?.hide()
  }), [])

  

  // Handle controlled components
  

  

  return (
    <mz-toast
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-toast>
  )
})

Toast.displayName = 'Toast'
