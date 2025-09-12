import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface TabsProps extends WebComponentProps {
  initial?: number
}

const eventMap = {}

const MzTabs = createReactWrapper<HTMLElement>('mz-tabs')

export const Tabs = MzTabs as React.ForwardRefExoticComponent<TabsProps>

Tabs.displayName = 'Tabs'