'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error'
  dismissible?: boolean
  icon?: boolean
  onDismiss?: (event: Event) => void
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export interface AlertRef {
    dismiss: () => void
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-alert': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & AlertProps,
        HTMLElement
      >
    }
  }
}

export const Alert = forwardRef<
  AlertRef,
  AlertProps
>((props, ref) => {
  const {
    onDismiss,
    className,
    style,
    children,
    ...restProps
  } = props

  const elementRef = useRef<HTMLElement>(null)

  useImperativeHandle(ref, () => ({
    dismiss: () => (elementRef.current as any)?.dismiss()
  }), [])

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

      if (onDismiss) {
        element.addEventListener('dismiss', onDismiss as EventListener)
      }

    return () => {
        if (onDismiss) {
          element.removeEventListener('dismiss', onDismiss as EventListener)
        }
    }
  }, [onDismiss])

  // Handle controlled components
  

  

  return (
    <mz-alert
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-alert>
  )
})

Alert.displayName = 'Alert'
