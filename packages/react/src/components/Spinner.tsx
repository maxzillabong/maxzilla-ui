'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface SpinnerProps {
  size?: 'small' | 'medium' | 'large' | 'xlarge'
  label?: string
  className?: string
  style?: React.CSSProperties

}



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-spinner': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & SpinnerProps,
        HTMLElement
      >
    }
  }
}

export const Spinner = forwardRef<
  HTMLElement,
  SpinnerProps
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
    <mz-spinner
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      
    </mz-spinner>
  )
})

Spinner.displayName = 'Spinner'
