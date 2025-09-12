import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface DividerProps extends WebComponentProps {
  orientation?: 'horizontal' | 'vertical'
}

const eventMap = {}

const MzDivider = createReactWrapper<HTMLElement>('mz-divider')

export const Divider = MzDivider as React.ForwardRefExoticComponent<DividerProps>

Divider.displayName = 'Divider'