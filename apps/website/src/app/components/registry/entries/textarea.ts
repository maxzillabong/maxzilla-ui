import { ComponentMeta } from '../types'
import { TextareaBasicPreview } from '../previews/textarea'
import { TextareaFeedbackPreview } from '../previews/textarea'
import { TextareaProjectPreview } from '../previews/textarea'

export const textareaEntry: ComponentMeta = {
    slug: 'textarea',
    name: 'Textarea',
    category: 'Forms',
    description: 'Multi-line text input with comprehensive features.',
    Preview: TextareaBasicPreview,
    code: {
      react: `import { Textarea } from 'maxzilla-ui-react'

<Textarea
  label="Bio"
  placeholder="Tell us about yourself..."
  rows={3}
  helperText="Share a brief introduction"
/>`,
      html: `<mz-textarea
  label="Bio"
  rows="3"
  placeholder="Tell us about yourself..."
  helper-text="Share a brief introduction">
</mz-textarea>`
    },
    sections: [
      {
        id: 'basic',
        title: 'Basic Textarea',
        Preview: TextareaBasicPreview,
        code: {
          react: `import { Textarea } from 'maxzilla-ui-react'

<Textarea
  label="Bio"
  placeholder="Tell us about yourself..."
  rows={3}
  helperText="Share a brief introduction"
/>`,
          html: `<mz-textarea
  label="Bio"
  rows="3"
  placeholder="Tell us about yourself..."
  helper-text="Share a brief introduction">
</mz-textarea>`
        }
      },
      {
        id: 'feedback',
        title: 'Feedback Textarea',
        Preview: TextareaFeedbackPreview,
        code: {
          react: `import { Textarea } from 'maxzilla-ui-react'

<Textarea
  label="What did you like most?"
  placeholder="Tell us about your favorite features..."
  rows={3}
  helperText="Help us understand what works well"
/>`,
          html: `<mz-textarea
  label="What did you like most?"
  rows="3"
  placeholder="Tell us about your favorite features..."
  helper-text="Help us understand what works well">
</mz-textarea>`
        }
      },
      {
        id: 'project-description',
        title: 'Project Description Textarea',
        Preview: TextareaProjectPreview,
        code: {
          react: `import { Textarea } from 'maxzilla-ui-react'

<Textarea
  label="Project Description"
  placeholder="Describe your project goals, requirements, and timeline..."
  rows={4}
  helperText="Be as detailed as possible to help us provide accurate estimates"
/>`,
          html: `<mz-textarea
  label="Project Description"
  rows="4"
  placeholder="Describe your project goals, requirements, and timeline..."
  helper-text="Be as detailed as possible to help us provide accurate estimates">
</mz-textarea>`
        }
      }
    ]
  }
