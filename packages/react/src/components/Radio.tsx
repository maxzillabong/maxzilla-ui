'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface RadioProps {
  value?: string
  checked?: boolean
  disabled?: boolean

  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-radio': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & RadioProps,
        HTMLElement
      >
    }
  }
}

export const Radio = forwardRef<
  HTMLElement,
  RadioProps
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
    <mz-radio
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-radio>
  )
})

Radio.displayName = 'Radio'
