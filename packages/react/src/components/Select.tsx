import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface SelectProps extends WebComponentProps {
  value?: string
  label?: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  error?: boolean
  helperText?: string
  name?: string
  size?: 'sm' | 'md' | 'lg'
  onChange?: (event: Event) => void
}

const eventMap = {
  onChange: 'change'
}

const MzSelect = createReactWrapper<HTMLElement>('mz-select', eventMap)

export const Select = MzSelect as React.ForwardRefExoticComponent<SelectProps>

Select.displayName = 'Select'