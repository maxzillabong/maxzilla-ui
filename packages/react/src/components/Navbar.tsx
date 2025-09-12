import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface NavbarProps extends WebComponentProps {

}

const eventMap = {}

const MzNavbar = createReactWrapper<HTMLElement>('mz-navbar')

export const Navbar = MzNavbar as React.ForwardRefExoticComponent<NavbarProps>

Navbar.displayName = 'Navbar'