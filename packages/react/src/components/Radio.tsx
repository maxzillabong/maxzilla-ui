import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface RadioProps extends WebComponentProps {
  value?: string
  checked?: boolean
  disabled?: boolean
  onSelect?: (event: Event) => void
}

const eventMap = {
  onSelect: 'radio-select'
}

const MzRadio = createReactWrapper<HTMLElement>('mz-radio', eventMap)

export const Radio = MzRadio as React.ForwardRefExoticComponent<RadioProps>

Radio.displayName = 'Radio'