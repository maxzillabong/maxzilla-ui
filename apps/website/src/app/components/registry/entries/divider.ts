import { ComponentMeta } from '../types'
import { DividerPreview } from '../previews/divider'

export const dividerEntry: ComponentMeta = { slug: 'divider', name: 'Divider', category: 'Layout', description: 'Horizontal or vertical separator for grouping content.', Preview: DividerPreview, code: { react: `<Divider />`, html: `<mz-divider></mz-divider>` } }
