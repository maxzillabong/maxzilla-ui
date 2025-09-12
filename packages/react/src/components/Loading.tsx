import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface LoadingProps extends WebComponentProps {
  overlay?: boolean
  size?: 'sm'|'md'|'lg'
}

const eventMap = {}

const MzLoading = createReactWrapper<HTMLElement>('mz-loading')

export const Loading = MzLoading as React.ForwardRefExoticComponent<LoadingProps>

Loading.displayName = 'Loading'