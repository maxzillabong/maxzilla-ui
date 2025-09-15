import { ComponentMeta } from '../types'
import { ContainerPreview } from '../previews/container'

export const containerEntry: ComponentMeta = { slug: 'container', name: 'Container', category: 'Layout', description: 'Content wrapper with max-width sizes and centering.', Preview: ContainerPreview, code: { react: `<Container size="md" centered>...</Container>`, html: `<mz-container size="md" centered>...</mz-container>` } }
