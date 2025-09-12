import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface DrawerProps extends WebComponentProps {
  open?: boolean
  placement?: 'left' | 'right'
  closable?: boolean
  onClose?: (event: Event) => void
}

const eventMap = {
  onClose: 'drawer-close'
}

const MzDrawer = createReactWrapper<HTMLElement>('mz-drawer', eventMap)

export const Drawer = MzDrawer as React.ForwardRefExoticComponent<DrawerProps>

Drawer.displayName = 'Drawer'