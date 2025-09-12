import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface CheckboxProps extends WebComponentProps {
  checked?: boolean
  disabled?: boolean
  label?: string
  onChange?: (event: Event) => void
}

const eventMap = {
  onChange: 'change'
}

const MzCheckbox = createReactWrapper<HTMLElement>('mz-checkbox', eventMap)

export const Checkbox = MzCheckbox as React.ForwardRefExoticComponent<CheckboxProps>

Checkbox.displayName = 'Checkbox'