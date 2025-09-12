import React from 'react'
import { createReactWrapper, type WebComponentProps } from '../utils/createReactWrapper.js'

export interface TreeNodeProps extends WebComponentProps {
  label?: string
  expandable?: boolean
}

const eventMap = {}

const MzTreeNode = createReactWrapper<HTMLElement>('mz-tree-node')

export const TreeNode = MzTreeNode as React.ForwardRefExoticComponent<TreeNodeProps>

TreeNode.displayName = 'TreeNode'