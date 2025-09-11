import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface CardProps extends WebComponentProps {
  elevation?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  clickable?: boolean
  href?: string
  target?: string
  rel?: string
  onClick?: (event: Event) => void
}

const eventMap = {
  onClick: 'click'
}

const MzCard = createReactWrapper<HTMLElement>('mz-card', eventMap)

export const Card = MzCard as React.ForwardRefExoticComponent<CardProps>

Card.displayName = 'Card'