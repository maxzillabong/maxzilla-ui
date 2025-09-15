import { ComponentMeta } from '../types'
import { TreeBasicPreview } from '../previews/tree'

export const treeEntry: ComponentMeta = {
    slug: 'tree',
    name: 'Tree',
    category: 'Data Display',
    description: 'Hierarchical tree structure with expand/collapse.',
    Preview: TreeBasicPreview,
    code: {
      react: `import { Tree, TreeNode, Card } from 'maxzilla-ui-react'

<Tree>
  <TreeNode label="📁 src" expanded>
    <TreeNode label="📁 components" expanded>
      <TreeNode label="📄 Button.tsx" />
      <TreeNode label="📄 Card.tsx" />
      <TreeNode label="📄 Input.tsx" />
    </TreeNode>
    <TreeNode label="📁 styles" expanded>
      <TreeNode label="📄 global.css" />
      <TreeNode label="📄 components.css" />
    </TreeNode>
    <TreeNode label="📄 index.ts" />
  </TreeNode>
  <TreeNode label="📁 public">
    <TreeNode label="🖼️ logo.svg" />
    <TreeNode label="📄 manifest.json" />
  </TreeNode>
  <TreeNode label="📄 package.json" />
</Tree>`,
      html: `<mz-tree>
  <mz-tree-node label="src" expanded>
    <mz-tree-node label="components">
      <mz-tree-node label="Button.tsx"></mz-tree-node>
      <mz-tree-node label="Card.tsx"></mz-tree-node>
    </mz-tree-node>
    <mz-tree-node label="index.ts"></mz-tree-node>
  </mz-tree-node>
</mz-tree>`
    }
  }
