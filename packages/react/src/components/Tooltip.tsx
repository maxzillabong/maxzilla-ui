'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface TooltipProps {
  text?: string
  placement?: 'top'|'bottom'|'left'|'right'
  onMzShow?: (event: Event) => void
  onMzAfterShow?: (event: Event) => void
  onMzHide?: (event: Event) => void
  onMzAfterHide?: (event: Event) => void
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export interface TooltipRef {
    show: () => void
    hide: () => void
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-tooltip': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & TooltipProps,
        HTMLElement
      >
    }
  }
}

export const Tooltip = forwardRef<
  TooltipRef,
  TooltipProps
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
    hide: () => (elementRef.current as any)?.hide()
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

  return (
    <mz-tooltip
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-tooltip>
  )
})

Tooltip.displayName = 'Tooltip'
