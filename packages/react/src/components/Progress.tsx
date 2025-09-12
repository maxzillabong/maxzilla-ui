import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface ProgressProps extends WebComponentProps {
  value?: number
  max?: number
  label?: string
  showValue?: boolean
}

const eventMap = {}

const MzProgress = createReactWrapper<HTMLElement>('mz-progress')

export const Progress = MzProgress as React.ForwardRefExoticComponent<ProgressProps>

Progress.displayName = 'Progress'