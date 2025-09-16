'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface TreeNodeProps {
  label?: string
  expandable?: boolean
  selected?: boolean
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export interface TreeNodeRef {
    expand: () => void
    collapse: () => void
    toggle: () => void
    select: () => void
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
  TreeNodeRef,
  TreeNodeProps
>((props, ref) => {
  const {
    
    className,
    style,
    children,
    ...restProps
  } = props

  const elementRef = useRef<HTMLElement>(null)

  useImperativeHandle(ref, () => ({
    expand: () => (elementRef.current as any)?.expand(),
    collapse: () => (elementRef.current as any)?.collapse(),
    toggle: () => (elementRef.current as any)?.toggle(),
    select: () => (elementRef.current as any)?.select()
  }), [])

  

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
