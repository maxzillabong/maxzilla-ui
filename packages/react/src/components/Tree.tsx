import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface TreeProps extends WebComponentProps {

}

const eventMap = {}

const MzTree = createReactWrapper<HTMLElement>('mz-tree')

export const Tree = MzTree as React.ForwardRefExoticComponent<TreeProps>

Tree.displayName = 'Tree'