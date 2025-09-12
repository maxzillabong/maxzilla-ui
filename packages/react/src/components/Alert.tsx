import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface AlertProps extends WebComponentProps {
  variant?: 'success'|'info'|'warning'|'error'
  dismissible?: boolean
  onClose?: (event: Event) => void
}

const eventMap = {
  onClose: 'close'
}

const MzAlert = createReactWrapper<HTMLElement>('mz-alert', eventMap)

export const Alert = MzAlert as React.ForwardRefExoticComponent<AlertProps>

Alert.displayName = 'Alert'