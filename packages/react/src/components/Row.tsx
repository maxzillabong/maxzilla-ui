import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface RowProps extends WebComponentProps {

}

const eventMap = {}

const MzRow = createReactWrapper<HTMLElement>('mz-row')

export const Row = MzRow as React.ForwardRefExoticComponent<RowProps>

Row.displayName = 'Row'