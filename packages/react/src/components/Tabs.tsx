'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface TabsProps {
  initial?: number
  orientation?: 'horizontal' | 'vertical'
  onChange?: (event: CustomEvent<any>) => void
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-tabs': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & TabsProps,
        HTMLElement
      >
    }
  }
}

export const Tabs = forwardRef<
  HTMLElement,
  TabsProps
>((props, ref) => {
  const {
    onChange,
    className,
    style,
    children,
    ...restProps
  } = props

  const elementRef = useRef<HTMLElement>(null)

  useImperativeHandle(ref, () => elementRef.current as HTMLElement, [])

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

      if (onChange) {
        element.addEventListener('mz-tab-change', onChange as EventListener)
      }

    return () => {
        if (onChange) {
          element.removeEventListener('mz-tab-change', onChange as EventListener)
        }
    }
  }, [onChange])

  // Handle controlled components
  

  

  return (
    <mz-tabs
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-tabs>
  )
})

Tabs.displayName = 'Tabs'
