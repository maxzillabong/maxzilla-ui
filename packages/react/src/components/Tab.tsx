import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface TabProps extends WebComponentProps {
  label?: string
  active?: boolean
}

const eventMap = {}

const MzTab = createReactWrapper<HTMLElement>('mz-tab')

export const Tab = MzTab as React.ForwardRefExoticComponent<TabProps>

Tab.displayName = 'Tab'