import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface ButtonProps extends WebComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  disabled?: boolean
  href?: string
  target?: string
  rel?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: (event: Event) => void
}

const eventMap = {
  onClick: 'click'
}

const MzButton = createReactWrapper<HTMLElement>('mz-button', eventMap)

export const Button = MzButton as React.ForwardRefExoticComponent<ButtonProps>

Button.displayName = 'Button'