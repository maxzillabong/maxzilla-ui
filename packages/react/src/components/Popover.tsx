'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface PopoverProps {
  placement?: 'top'|'bottom'|'left'|'right'
  open?: boolean
  hover?: boolean
  onMzShow?: (event: Event) => void
  onMzAfterShow?: (event: Event) => void
  onMzHide?: (event: Event) => void
  onMzAfterHide?: (event: Event) => void
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export interface PopoverRef {
    show: () => void
    hide: () => void
    toggle: () => void
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-popover': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & PopoverProps,
        HTMLElement
      >
    }
  }
}

export const Popover = forwardRef<
  PopoverRef,
  PopoverProps
>((props, ref) => {
  const {
    onMzShow,
    onMzAfterShow,
    onMzHide,
    onMzAfterHide,
    className,
    style,
    children,
    ...restProps
  } = props

  const elementRef = useRef<HTMLElement>(null)

  useImperativeHandle(ref, () => ({
    show: () => (elementRef.current as any)?.show(),
    hide: () => (elementRef.current as any)?.hide(),
    toggle: () => (elementRef.current as any)?.toggle()
  }), [])

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

      if (onMzShow) {
        element.addEventListener('mz-show', onMzShow as EventListener)
      }
      if (onMzAfterShow) {
        element.addEventListener('mz-after-show', onMzAfterShow as EventListener)
      }
      if (onMzHide) {
        element.addEventListener('mz-hide', onMzHide as EventListener)
      }
      if (onMzAfterHide) {
        element.addEventListener('mz-after-hide', onMzAfterHide as EventListener)
      }

    return () => {
        if (onMzShow) {
          element.removeEventListener('mz-show', onMzShow as EventListener)
        }
        if (onMzAfterShow) {
          element.removeEventListener('mz-after-show', onMzAfterShow as EventListener)
        }
        if (onMzHide) {
          element.removeEventListener('mz-hide', onMzHide as EventListener)
        }
        if (onMzAfterHide) {
          element.removeEventListener('mz-after-hide', onMzAfterHide as EventListener)
        }
    }
  }, [onMzShow, onMzAfterShow, onMzHide, onMzAfterHide])

  // Handle controlled components
  useEffect(() => {
    const element = elementRef.current as any
    if (element && props.open !== undefined) {
      element.open = props.open
    }
  }, [props.open])

  return (
    <mz-popover
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-popover>
  )
})

Popover.displayName = 'Popover'
