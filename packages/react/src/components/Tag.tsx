'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface TagProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral'
  size?: 'small' | 'medium' | 'large'
  removable?: boolean
  pill?: boolean
  className?: string
  style?: React.CSSProperties

}



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-tag': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & TagProps,
        HTMLElement
      >
    }
  }
}

export const Tag = forwardRef<
  HTMLElement,
  TagProps
>((props, ref) => {
  const {
    
    className,
    style,
    
    ...restProps
  } = props

  const elementRef = useRef<HTMLElement>(null)

  useImperativeHandle(ref, () => elementRef.current as HTMLElement, [])

  

  // Handle controlled components

  return (
    <mz-tag
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      
    </mz-tag>
  )
})

Tag.displayName = 'Tag'
