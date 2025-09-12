import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface SwitchProps extends WebComponentProps {
  checked?: boolean
  disabled?: boolean
  label?: string
  onChange?: (event: Event) => void
}

const eventMap = {
  onChange: 'change'
}

const MzSwitch = createReactWrapper<HTMLElement>('mz-switch', eventMap)

export const Switch = MzSwitch as React.ForwardRefExoticComponent<SwitchProps>

Switch.displayName = 'Switch'