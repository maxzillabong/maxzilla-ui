import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface BreadcrumbProps extends WebComponentProps {

}

const eventMap = {}

const MzBreadcrumb = createReactWrapper<HTMLElement>('mz-breadcrumb')

export const Breadcrumb = MzBreadcrumb as React.ForwardRefExoticComponent<BreadcrumbProps>

Breadcrumb.displayName = 'Breadcrumb'