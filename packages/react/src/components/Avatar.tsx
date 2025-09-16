'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface AvatarProps {
  src?: string
  alt?: string
  initials?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  shape?: 'circle' | 'square' | 'rounded'
  status?: 'online' | 'offline' | 'busy' | 'away' | ''
  interactive?: boolean
  decorative?: boolean
  className?: string
  style?: React.CSSProperties

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
    
    className,
    style,
    
    ...restProps
  } = props

  const elementRef = useRef<HTMLElement>(null)

  useImperativeHandle(ref, () => elementRef.current as HTMLElement, [])

  

  // Handle controlled components

  return (
    <mz-avatar
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      
    </mz-avatar>
  )
})

Avatar.displayName = 'Avatar'
