'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface AccordionProps {
  multiple?: boolean
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-accordion': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & AccordionProps,
        HTMLElement
      >
    }
  }
}

export const Accordion = forwardRef<
  HTMLElement,
  AccordionProps
>((props, ref) => {
  const {
    
    className,
    style,
    children,
    ...restProps
  } = props

  const elementRef = useRef<HTMLElement>(null)

  useImperativeHandle(ref, () => elementRef.current as HTMLElement, [])

  

  // Handle controlled components

  return (
    <mz-accordion
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-accordion>
  )
})

Accordion.displayName = 'Accordion'
