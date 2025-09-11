import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface BadgeProps extends WebComponentProps {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
  dot?: boolean
}

const eventMap = {}

const MzBadge = createReactWrapper<HTMLElement>('mz-badge')

export const Badge = MzBadge as React.ForwardRefExoticComponent<BadgeProps>

Badge.displayName = 'Badge'