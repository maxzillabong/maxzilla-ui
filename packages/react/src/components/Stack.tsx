import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface StackProps extends WebComponentProps {
  direction?: 'horizontal' | 'vertical'
  spacing?: 'sm' | 'md' | 'lg'
  align?: 'start' | 'center' | 'end'
  justify?: 'start' | 'center' | 'end' | 'between'
}

const eventMap = {}

const MzStack = createReactWrapper<HTMLElement>('mz-stack')

export const Stack = MzStack as React.ForwardRefExoticComponent<StackProps>

Stack.displayName = 'Stack'