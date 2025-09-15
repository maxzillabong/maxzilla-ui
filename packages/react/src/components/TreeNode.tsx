'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface TreeNodeProps {
  label?: string
  expanded?: boolean

  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-tree-node': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & TreeNodeProps,
        HTMLElement
      >
    }
  }
}

export const TreeNode = forwardRef<
  HTMLElement,
  TreeNodeProps
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
    <mz-tree-node
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-tree-node>
  )
})

TreeNode.displayName = 'TreeNode'
