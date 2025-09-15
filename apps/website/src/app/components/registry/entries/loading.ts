import { ComponentMeta } from '../types'
import { LoadingPreview } from '../previews/loading'

export const loadingEntry: ComponentMeta = { slug: 'loading', name: 'Loading', category: 'Overlays', description: 'Loading spinner (inline or overlay).', Preview: LoadingPreview, code: { react: `<Loading overlay />`, html: `<mz-loading overlay></mz-loading>` } }
