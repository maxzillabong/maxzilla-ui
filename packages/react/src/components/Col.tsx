import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface ColProps extends WebComponentProps {
  span?: number
}

const eventMap = {}

const MzCol = createReactWrapper<HTMLElement>('mz-col')

export const Col = MzCol as React.ForwardRefExoticComponent<ColProps>

Col.displayName = 'Col'