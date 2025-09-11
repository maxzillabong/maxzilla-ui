import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface ModalProps extends WebComponentProps {
  open?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  closable?: boolean
  backdrop?: boolean
  onClose?: (event: Event) => void
  onOpen?: (event: Event) => void
}

const eventMap = {
  onClose: 'close',
  onOpen: 'open'
}

const MzModal = createReactWrapper<HTMLElement>('mz-modal', eventMap)

export const Modal = MzModal as React.ForwardRefExoticComponent<ModalProps>

Modal.displayName = 'Modal'