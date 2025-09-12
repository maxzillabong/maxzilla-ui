import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface TableProps extends WebComponentProps {

}

const eventMap = {}

const MzTable = createReactWrapper<HTMLElement>('mz-table')

export const Table = MzTable as React.ForwardRefExoticComponent<TableProps>

Table.displayName = 'Table'