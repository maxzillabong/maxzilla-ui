'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'warning' | 'success'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  fullWidth?: boolean
  iconOnly?: boolean
  loading?: boolean
  onClick?: (event: Event) => void
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
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
  HTMLElement,
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

  useImperativeHandle(ref, () => elementRef.current as HTMLElement, [])

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
