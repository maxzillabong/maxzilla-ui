'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface CardProps {
  elevation?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'outlined' | 'elevated' | 'interactive'
  interactive?: boolean
  loading?: boolean
  disabled?: boolean
  compact?: boolean
  fullHeight?: boolean
  hasAvatar?: boolean
  onClick?: (event: Event) => void
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-card': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & CardProps,
        HTMLElement
      >
    }
  }
}

export const Card = forwardRef<
  HTMLElement,
  CardProps
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
    <mz-card
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-card>
  )
})

Card.displayName = 'Card'
