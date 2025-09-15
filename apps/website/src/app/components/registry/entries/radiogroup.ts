import { ComponentMeta } from '../types'
import { RadioBasicPreview } from '../previews/radio'

export const radiogroupEntry: ComponentMeta = {
    slug: 'radiogroup',
    name: 'Radio Group',
    category: 'Forms',
    description: 'Single selection among multiple options with rich styling.',
    Preview: RadioBasicPreview,
    code: {
      react: `import { RadioGroup, Radio, Badge } from 'maxzilla-ui-react'

<RadioGroup name="plan">
  <Radio value="basic">
    <div className="flex items-center justify-between w-full">
      <div>
        <p className="font-medium">Basic</p>
        <p className="text-sm text-neutral-500">Free forever</p>
      </div>
      <Badge variant="secondary">$0</Badge>
    </div>
  </Radio>
  <Radio value="pro">
    <div className="flex items-center justify-between w-full">
      <div>
        <p className="font-medium">Pro</p>
        <p className="text-sm text-neutral-500">Perfect for professionals</p>
      </div>
      <Badge variant="primary">$29/mo</Badge>
    </div>
  </Radio>
</RadioGroup>`,
      html: `<mz-radio-group name="plan">
  <mz-radio value="basic">Basic Plan</mz-radio>
  <mz-radio value="pro">Pro Plan</mz-radio>
</mz-radio-group>`
    }
  }
