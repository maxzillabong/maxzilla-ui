import { ComponentMeta } from '../types'
import { CheckboxPreview } from '../previews/checkbox'

export const checkboxEntry: ComponentMeta = { slug: 'checkbox', name: 'Checkbox', category: 'Forms', description: 'Boolean input with label and change event.', Preview: CheckboxPreview, code: { react: `<Checkbox label="Accept" />`, html: `<mz-checkbox label="Accept"></mz-checkbox>` } }
