import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface BreadcrumbItemProps extends WebComponentProps {
  href?: string
  current?: boolean
}

const eventMap = {}

const MzBreadcrumbItem = createReactWrapper<HTMLElement>('mz-breadcrumb-item')

export const BreadcrumbItem = MzBreadcrumbItem as React.ForwardRefExoticComponent<BreadcrumbItemProps>

BreadcrumbItem.displayName = 'BreadcrumbItem'