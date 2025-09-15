'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface PopoverProps {
  content?: string
  trigger?: 'hover' | 'click'
  placement?: 'top' | 'bottom' | 'left' | 'right'

  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
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
  HTMLElement,
  PopoverProps
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
