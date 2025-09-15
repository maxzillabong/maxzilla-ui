'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  disabled?: boolean
  fullWidth?: boolean
  href?: string
  target?: string
  rel?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: (event: Event) => void
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export interface ButtonRef {
    click: () => void
    focus: () => void
    blur: () => void
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-button': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & ButtonProps,
        HTMLElement
      >
    }
  }
}

export const Button = forwardRef<
  ButtonRef,
  ButtonProps
>((props, ref) => {
  const {
    onClick,
    className,
    style,
    children,
    ...restProps
  } = props

  const elementRef = useRef<HTMLElement>(null)

  useImperativeHandle(ref, () => ({
    click: () => (elementRef.current as any)?.click(),
    focus: () => (elementRef.current as any)?.focus(),
    blur: () => (elementRef.current as any)?.blur()
  }), [])

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

      if (onClick) {
        element.addEventListener('click', onClick as EventListener)
      }

    return () => {
        if (onClick) {
          element.removeEventListener('click', onClick as EventListener)
        }
    }
  }, [onClick])

  // Handle controlled components
  

  

  return (
    <mz-button
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-button>
  )
})

Button.displayName = 'Button'
