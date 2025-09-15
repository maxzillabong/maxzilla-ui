import { ComponentMeta } from '../types'
import { StackPreview } from '../previews/stack'

export const stackEntry: ComponentMeta = { slug: 'stack', name: 'Stack', category: 'Layout', description: 'Flexbox stack with direction, spacing, alignment options.', Preview: StackPreview, code: { react: `<Stack direction="horizontal" spacing="md">...</Stack>`, html: `<mz-stack direction="horizontal" spacing="md">...</mz-stack>` } }
