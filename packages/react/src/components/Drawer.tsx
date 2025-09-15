'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface DrawerProps {
  open?: boolean
  placement?: 'left' | 'right'
  closable?: boolean
  noCloseButton?: boolean
  size?: 'sm' | 'md' | 'lg' | 'full'
  onOpen?: (event: Event) => void
  onClose?: (event: Event) => void
  onClosed?: (event: Event) => void
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export interface DrawerRef {
    show: () => void
    close: () => void
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-drawer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & DrawerProps,
        HTMLElement
      >
    }
  }
}

export const Drawer = forwardRef<
  DrawerRef,
  DrawerProps
>((props, ref) => {
  const {
    onOpen,
    onClose,
    onClosed,
    className,
    style,
    children,
    ...restProps
  } = props

  const elementRef = useRef<HTMLElement>(null)

  useImperativeHandle(ref, () => ({
    show: () => (elementRef.current as any)?.show(),
    close: () => (elementRef.current as any)?.close()
  }), [])

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

      if (onOpen) {
        element.addEventListener('mz-drawer-open', onOpen as EventListener)
      }
      if (onClose) {
        element.addEventListener('mz-drawer-close', onClose as EventListener)
      }
      if (onClosed) {
        element.addEventListener('mz-drawer-closed', onClosed as EventListener)
      }

    return () => {
        if (onOpen) {
          element.removeEventListener('mz-drawer-open', onOpen as EventListener)
        }
        if (onClose) {
          element.removeEventListener('mz-drawer-close', onClose as EventListener)
        }
        if (onClosed) {
          element.removeEventListener('mz-drawer-closed', onClosed as EventListener)
        }
    }
  }, [onOpen, onClose, onClosed])

  // Handle controlled components
  

  

  return (
    <mz-drawer
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-drawer>
  )
})

Drawer.displayName = 'Drawer'
