import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface TooltipProps extends WebComponentProps {
  text?: string
  placement?: 'top' | 'bottom' | 'left' | 'right'
}

const eventMap = {}

const MzTooltip = createReactWrapper<HTMLElement>('mz-tooltip')

export const Tooltip = MzTooltip as React.ForwardRefExoticComponent<TooltipProps>

Tooltip.displayName = 'Tooltip'