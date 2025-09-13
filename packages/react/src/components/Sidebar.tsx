import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface SidebarProps extends WebComponentProps {

}

const eventMap = {}

const MzSidebar = createReactWrapper<HTMLElement>('mz-sidebar')

export const Sidebar = MzSidebar as React.ForwardRefExoticComponent<SidebarProps>

Sidebar.displayName = 'Sidebar'