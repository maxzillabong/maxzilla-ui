import { ComponentMeta } from '../types'
import { SwitchPreview } from '../previews/switch'

export const switchEntry: ComponentMeta = { slug: 'switch', name: 'Switch', category: 'Forms', description: 'Toggle switch with keyboard support.', Preview: SwitchPreview, code: { react: `<Switch label="Enable" />`, html: `<mz-switch label="Enable"></mz-switch>` } }
