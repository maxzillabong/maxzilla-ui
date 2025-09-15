import { ComponentMeta } from '../types'
import { SelectBasicPreview } from '../previews/select'

export const selectEntry: ComponentMeta = {
    slug: 'select',
    name: 'Select',
    category: 'Forms',
    description: 'Dropdown selection input with options.',
    Preview: SelectBasicPreview,
    code: {
      react: `import { Select } from 'maxzilla-ui-react'

<Select label="Country" placeholder="Select a country">
  <option value="">Choose a country</option>
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
  <option value="ca">Canada</option>
  <option value="au">Australia</option>
</Select>

<Select label="Project Type" required>
  <option value="">Select project type</option>
  <option value="web">Web Application</option>
  <option value="mobile">Mobile App</option>
  <option value="api">API Service</option>
</Select>`,
      html: `<mz-select label="Country" placeholder="Select a country">
  <option value="">Choose a country</option>
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
  <option value="ca">Canada</option>
</mz-select>

<mz-select label="Project Type" required>
  <option value="">Select project type</option>
  <option value="web">Web Application</option>
  <option value="mobile">Mobile App</option>
  <option value="api">API Service</option>
</mz-select>`
    }
  }
