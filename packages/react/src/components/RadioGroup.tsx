import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface RadioGroupProps extends WebComponentProps {
  name?: string
  value?: string
  onChange?: (event: Event) => void
}

const eventMap = {
  onChange: 'change'
}

const MzRadioGroup = createReactWrapper<HTMLElement>('mz-radio-group', eventMap)

export const RadioGroup = MzRadioGroup as React.ForwardRefExoticComponent<RadioGroupProps>

RadioGroup.displayName = 'RadioGroup'