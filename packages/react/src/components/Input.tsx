import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface InputProps extends WebComponentProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'
  label?: string
  placeholder?: string
  value?: string | number
  disabled?: boolean
  required?: boolean
  readonly?: boolean
  error?: boolean
  helperText?: string
  size?: 'sm' | 'md' | 'lg'
  onChange?: (event: Event) => void
  onInput?: (event: Event) => void
  onFocus?: (event: Event) => void
  onBlur?: (event: Event) => void
}

const eventMap = {
  onChange: 'change',
  onInput: 'input',
  onFocus: 'focus',
  onBlur: 'blur'
}

const MzInput = createReactWrapper<HTMLElement>('mz-input', eventMap)

export const Input = MzInput as React.ForwardRefExoticComponent<InputProps>

Input.displayName = 'Input'