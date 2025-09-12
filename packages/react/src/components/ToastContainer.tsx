import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface ToastContainerProps extends WebComponentProps {
  duration?: number
}

const eventMap = {}

const MzToastContainer = createReactWrapper<HTMLElement>('mz-toast-container')

export const ToastContainer = MzToastContainer as React.ForwardRefExoticComponent<ToastContainerProps>

ToastContainer.displayName = 'ToastContainer'