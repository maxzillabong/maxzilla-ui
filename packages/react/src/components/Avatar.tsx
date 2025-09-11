import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface AvatarProps extends WebComponentProps {
  src?: string
  alt?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  shape?: 'circle' | 'square'
  online?: boolean
  initials?: string
}

const eventMap = {}

const MzAvatar = createReactWrapper<HTMLElement>('mz-avatar')

export const Avatar = MzAvatar as React.ForwardRefExoticComponent<AvatarProps>

Avatar.displayName = 'Avatar'