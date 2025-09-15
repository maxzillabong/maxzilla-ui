'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface TreeProps {


  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-tree': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & TreeProps,
        HTMLElement
      >
    }
  }
}

export const Tree = forwardRef<
  HTMLElement,
  TreeProps
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
    <mz-tree
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-tree>
  )
})

Tree.displayName = 'Tree'
