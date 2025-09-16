'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface AlertProps {
  variant?: 'success' | 'info' | 'warning' | 'error'
  dismissible?: boolean
  title?: string
  onMzAfterClose?: (event: Event) => void
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export interface AlertRef {
    close: () => void
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
    onMzAfterClose,
    className,
    style,
    children,
    ...restProps
  } = props

  const elementRef = useRef<HTMLElement>(null)

  useImperativeHandle(ref, () => ({
    close: () => (elementRef.current as any)?.close()
  }), [])

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

      if (onMzAfterClose) {
        element.addEventListener('mz-after-close', onMzAfterClose as EventListener)
      }

    return () => {
        if (onMzAfterClose) {
          element.removeEventListener('mz-after-close', onMzAfterClose as EventListener)
        }
    }
  }, [onMzAfterClose])

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
