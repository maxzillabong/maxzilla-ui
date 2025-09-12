import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface PopoverProps extends WebComponentProps {
  placement?: 'top'|'bottom'|'left'|'right'
  open?: boolean
  hover?: boolean
}

const eventMap = {}

const MzPopover = createReactWrapper<HTMLElement>('mz-popover')

export const Popover = MzPopover as React.ForwardRefExoticComponent<PopoverProps>

Popover.displayName = 'Popover'