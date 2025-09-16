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
  ariaLabel?: string
  ariaDescribedBy?: string
  onMzShow?: (event: Event) => void
  onMzModalShow?: (event: Event) => void
  onMzAfterShow?: (event: Event) => void
  onMzHide?: (event: Event) => void
  onMzModalClose?: (event: Event) => void
  onMzAfterHide?: (event: Event) => void
  onMzModalClosed?: (event: Event) => void
  onClose?: (event: Event) => void
  onShow?: (event: Event) => void
  onHide?: (event: Event) => void
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
    onMzShow,
    onMzModalShow,
    onMzAfterShow,
    onMzHide,
    onMzModalClose,
    onMzAfterHide,
    onMzModalClosed,
    onClose,
    onShow,
    onHide,
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

      if (onMzShow) {
        element.addEventListener('mz-show', onMzShow as EventListener)
      }
      if (onMzModalShow) {
        element.addEventListener('mz-modal-show', onMzModalShow as EventListener)
      }
      if (onMzAfterShow) {
        element.addEventListener('mz-after-show', onMzAfterShow as EventListener)
      }
      if (onMzHide) {
        element.addEventListener('mz-hide', onMzHide as EventListener)
      }
      if (onMzModalClose) {
        element.addEventListener('mz-modal-close', onMzModalClose as EventListener)
      }
      if (onMzAfterHide) {
        element.addEventListener('mz-after-hide', onMzAfterHide as EventListener)
      }
      if (onMzModalClosed) {
        element.addEventListener('mz-modal-closed', onMzModalClosed as EventListener)
      }
      if (onClose) {
        element.addEventListener('mz-modal-close', onClose as EventListener)
      }
      if (onShow) {
        element.addEventListener('mz-show', onShow as EventListener)
      }
      if (onHide) {
        element.addEventListener('mz-hide', onHide as EventListener)
      }

    return () => {
        if (onMzShow) {
          element.removeEventListener('mz-show', onMzShow as EventListener)
        }
        if (onMzModalShow) {
          element.removeEventListener('mz-modal-show', onMzModalShow as EventListener)
        }
        if (onMzAfterShow) {
          element.removeEventListener('mz-after-show', onMzAfterShow as EventListener)
        }
        if (onMzHide) {
          element.removeEventListener('mz-hide', onMzHide as EventListener)
        }
        if (onMzModalClose) {
          element.removeEventListener('mz-modal-close', onMzModalClose as EventListener)
        }
        if (onMzAfterHide) {
          element.removeEventListener('mz-after-hide', onMzAfterHide as EventListener)
        }
        if (onMzModalClosed) {
          element.removeEventListener('mz-modal-closed', onMzModalClosed as EventListener)
        }
        if (onClose) {
          element.removeEventListener('mz-modal-close', onClose as EventListener)
        }
        if (onShow) {
          element.removeEventListener('mz-show', onShow as EventListener)
        }
        if (onHide) {
          element.removeEventListener('mz-hide', onHide as EventListener)
        }
    }
  }, [onMzShow, onMzModalShow, onMzAfterShow, onMzHide, onMzModalClose, onMzAfterHide, onMzModalClosed, onClose, onShow, onHide])

  // Handle controlled components
  useEffect(() => {
    const element = elementRef.current as any
    if (element && props.open !== undefined) {
      element.open = props.open
    }
  }, [props.open])

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
