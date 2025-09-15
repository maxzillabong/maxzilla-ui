'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface FormProps {

  onSubmit?: (event: Event) => void
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-form': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & FormProps,
        HTMLElement
      >
    }
  }
}

export const Form = forwardRef<
  HTMLElement,
  FormProps
>((props, ref) => {
  const {
    onSubmit,
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

      if (onSubmit) {
        element.addEventListener('submit', onSubmit as EventListener)
      }

    return () => {
        if (onSubmit) {
          element.removeEventListener('submit', onSubmit as EventListener)
        }
    }
  }, [onSubmit])

  // Handle controlled components
  

  

  return (
    <mz-form
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-form>
  )
})

Form.displayName = 'Form'
