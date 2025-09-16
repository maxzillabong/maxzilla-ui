'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface DrawerProps {
  open?: boolean
  placement?: 'left' | 'right'
  closable?: boolean
  noCloseButton?: boolean
  size?: 'sm' | 'md' | 'lg' | 'full'
  ariaLabel?: string
  ariaDescribedBy?: string
  onMzDrawerOpen?: (event: Event) => void
  onMzDrawerClose?: (event: Event) => void
  onMzDrawerClosed?: (event: Event) => void
  onClose?: (event: Event) => void
  onShow?: (event: Event) => void
  onHide?: (event: Event) => void
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
    onMzDrawerOpen,
    onMzDrawerClose,
    onMzDrawerClosed,
    onClose,
    onShow,
    onHide,
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

      if (onMzDrawerOpen) {
        element.addEventListener('mz-drawer-open', onMzDrawerOpen as EventListener)
      }
      if (onMzDrawerClose) {
        element.addEventListener('mz-drawer-close', onMzDrawerClose as EventListener)
      }
      if (onMzDrawerClosed) {
        element.addEventListener('mz-drawer-closed', onMzDrawerClosed as EventListener)
      }
      if (onClose) {
        element.addEventListener('mz-drawer-close', onClose as EventListener)
      }
      if (onShow) {
        element.addEventListener('mz-show', onShow as EventListener)
      }
      if (onHide) {
        element.addEventListener('mz-hide', onHide as EventListener)
      }

    return () => {
        if (onMzDrawerOpen) {
          element.removeEventListener('mz-drawer-open', onMzDrawerOpen as EventListener)
        }
        if (onMzDrawerClose) {
          element.removeEventListener('mz-drawer-close', onMzDrawerClose as EventListener)
        }
        if (onMzDrawerClosed) {
          element.removeEventListener('mz-drawer-closed', onMzDrawerClosed as EventListener)
        }
        if (onClose) {
          element.removeEventListener('mz-drawer-close', onClose as EventListener)
        }
        if (onShow) {
          element.removeEventListener('mz-show', onShow as EventListener)
        }
        if (onHide) {
          element.removeEventListener('mz-hide', onHide as EventListener)
        }
    }
  }, [onMzDrawerOpen, onMzDrawerClose, onMzDrawerClosed, onClose, onShow, onHide])

  // Handle controlled components
  useEffect(() => {
    const element = elementRef.current as any
    if (element && props.open !== undefined) {
      element.open = props.open
    }
  }, [props.open])

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
