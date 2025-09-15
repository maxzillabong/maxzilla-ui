import { ComponentMeta } from '../types'
import { ProgressPreview } from '../previews/progress'

export const progressEntry: ComponentMeta = { slug: 'progress', name: 'Progress', category: 'Data Display', description: 'Progress indication (linear).', Preview: ProgressPreview, code: { react: `<Progress value={60} max={100} label="Upload" showValue />`, html: `<mz-progress value="60" max="100" label="Upload" show-value></mz-progress>` } }
