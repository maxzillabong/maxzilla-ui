import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface ToastProps extends WebComponentProps {
  variant?: 'success' | 'info' | 'warning' | 'error'
  message?: string
  duration?: number
  onClose?: (event: Event) => void
}

const eventMap = {
  onClose: 'close'
}

const MzToast = createReactWrapper<HTMLElement>('mz-toast', eventMap)

export const Toast = MzToast as React.ForwardRefExoticComponent<ToastProps>

Toast.displayName = 'Toast'