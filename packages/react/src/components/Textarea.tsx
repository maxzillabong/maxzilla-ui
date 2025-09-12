import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface TextareaProps extends WebComponentProps {
  label?: string
  placeholder?: string
  rows?: number
  value?: string
  disabled?: boolean
  helperText?: string
  onInput?: (event: Event) => void
  onChange?: (event: Event) => void
}

const eventMap = {
  onInput: 'input',
  onChange: 'change'
}

const MzTextarea = createReactWrapper<HTMLElement>('mz-textarea', eventMap)

export const Textarea = MzTextarea as React.ForwardRefExoticComponent<TextareaProps>

Textarea.displayName = 'Textarea'