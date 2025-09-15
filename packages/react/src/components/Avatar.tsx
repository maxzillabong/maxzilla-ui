'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface AvatarProps {
  src?: string
  alt?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  shape?: 'circle' | 'square' | 'rounded'
  status?: 'online' | 'offline' | 'busy' | 'away' | ''
  interactive?: boolean
  initials?: string
  ariaLabel?: string
  decorative?: boolean
  onClick?: (event: CustomEvent<any>) => void
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-avatar': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & AvatarProps,
        HTMLElement
      >
    }
  }
}

export const Avatar = forwardRef<
  HTMLElement,
  AvatarProps
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
        element.addEventListener('mz-avatar-click', onClick as EventListener)
      }

    return () => {
        if (onClick) {
          element.removeEventListener('mz-avatar-click', onClick as EventListener)
        }
    }
  }, [onClick])

  // Handle controlled components
  

  

  return (
    <mz-avatar
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-avatar>
  )
})

Avatar.displayName = 'Avatar'
