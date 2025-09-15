'use client'

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import 'maxzilla-ui-core'

export interface ModalProps {
  open?: boolean
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  animation?: 'scale' | 'fade' | 'slide-up'
  noCloseOnBackdrop?: boolean
  noCloseButton?: boolean
  scrollable?: boolean
  onShow?: (event: Event) => void
  onClose?: (event: Event) => void
  onClosed?: (event: Event) => void
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export interface ModalRef {
    show: () => void
    close: () => void
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mz-modal': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & ModalProps,
        HTMLElement
      >
    }
  }
}

export const Modal = forwardRef<
  ModalRef,
  ModalProps
>((props, ref) => {
  const {
    onShow,
    onClose,
    onClosed,
    className,
    style,
    children,
    ...restProps
  } = props

  const elementRef = useRef<HTMLElement>(null)

  useImperativeHandle(ref, () => ({
    show: () => (elementRef.current as any)?.show(),
    close: () => (elementRef.current as any)?.close()
  }), [])

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

      if (onShow) {
        element.addEventListener('mz-modal-show', onShow as EventListener)
      }
      if (onClose) {
        element.addEventListener('mz-modal-close', onClose as EventListener)
      }
      if (onClosed) {
        element.addEventListener('mz-modal-closed', onClosed as EventListener)
      }

    return () => {
        if (onShow) {
          element.removeEventListener('mz-modal-show', onShow as EventListener)
        }
        if (onClose) {
          element.removeEventListener('mz-modal-close', onClose as EventListener)
        }
        if (onClosed) {
          element.removeEventListener('mz-modal-closed', onClosed as EventListener)
        }
    }
  }, [onShow, onClose, onClosed])

  // Handle controlled components
  

  

  return (
    <mz-modal
      ref={elementRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children}
    </mz-modal>
  )
})

Modal.displayName = 'Modal'
