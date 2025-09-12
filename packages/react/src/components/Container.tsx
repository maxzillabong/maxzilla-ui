import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface ContainerProps extends WebComponentProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  centered?: boolean
}

const eventMap = {}

const MzContainer = createReactWrapper<HTMLElement>('mz-container')

export const Container = MzContainer as React.ForwardRefExoticComponent<ContainerProps>

Container.displayName = 'Container'