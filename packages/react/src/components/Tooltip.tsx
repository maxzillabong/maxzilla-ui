'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface TooltipProps {
  content?: string
  placement?: 'top' | 'bottom' | 'left' | 'right'

  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
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
  HTMLElement,
  TooltipProps
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
