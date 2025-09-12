import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface PaginationProps extends WebComponentProps {
  total?: number
  pageSize?: number
  current?: number
  onPageChange?: (event: Event) => void
}

const eventMap = {
  onPageChange: 'page-change'
}

const MzPagination = createReactWrapper<HTMLElement>('mz-pagination', eventMap)

export const Pagination = MzPagination as React.ForwardRefExoticComponent<PaginationProps>

Pagination.displayName = 'Pagination'