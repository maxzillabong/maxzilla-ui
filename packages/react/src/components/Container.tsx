'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface ContainerProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full'

  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-container': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & ContainerProps,
        HTMLElement
      >
    }
  }
}

export const Container = forwardRef<
  HTMLElement,
  ContainerProps
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
    <mz-container
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-container>
  )
})

Container.displayName = 'Container'
