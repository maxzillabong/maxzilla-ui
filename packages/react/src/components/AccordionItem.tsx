'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface AccordionItemProps {
  header?: string
  open?: boolean
  onChange?: (event: Event) => void
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export interface AccordionItemRef {
    focusHeader: () => void
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-accordion-item': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & AccordionItemProps,
        HTMLElement
      >
    }
  }
}

export const AccordionItem = forwardRef<
  AccordionItemRef,
  AccordionItemProps
>((props, ref) => {
  const {
    onChange,
    className,
    style,
    children,
    ...restProps
  } = props

  const elementRef = useRef<HTMLElement>(null)

  useImperativeHandle(ref, () => ({
    focusHeader: () => (elementRef.current as any)?.focusHeader()
  }), [])

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

      if (onChange) {
        element.addEventListener('change', onChange as EventListener)
      }

    return () => {
        if (onChange) {
          element.removeEventListener('change', onChange as EventListener)
        }
    }
  }, [onChange])

  // Handle controlled components
  useEffect(() => {
    const element = elementRef.current as any
    if (element && props.open !== undefined) {
      element.open = props.open
    }
  }, [props.open])

  return (
    <mz-accordion-item
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-accordion-item>
  )
})

AccordionItem.displayName = 'AccordionItem'
