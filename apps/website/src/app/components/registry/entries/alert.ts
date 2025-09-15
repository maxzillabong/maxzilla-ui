import { ComponentMeta } from '../types'
import { AlertPreview } from '../previews/alert'
import { AlertVariantsPreview } from '../previews/alert'

export const alertEntry: ComponentMeta = { 
    slug: 'alert', name: 'Alert', category: 'Data Display', description: 'Contextual messages with variants and dismiss.', 
    Preview: AlertPreview, 
    code: { 
      react: `import { Alert } from 'maxzilla-ui-react'\n\n<Alert>Standard alert message</Alert>`, 
      html: `<mz-alert>Standard alert message</mz-alert>` 
    },
    sections: [
      { id: 'examples', title: 'Examples', Preview: AlertPreview, code: { 
        react: `import { Alert } from 'maxzilla-ui-react'\n\n<Alert>Standard alert message</Alert>`, 
        html: `<mz-alert>Standard alert message</mz-alert>`
      }},
      { id: 'variants', title: 'Variants', Preview: AlertVariantsPreview, code: { 
        react: `import { Alert } from 'maxzilla-ui-react'\n\n<div>\n  <Alert variant=\"success\">Success: Saved successfully</Alert>\n  <Alert variant=\"warning\">Warning: Be careful</Alert>\n  <Alert variant=\"error\">Error: Something went wrong</Alert>\n  <Alert variant=\"info\">Info: Heads up</Alert>\n</div>`, 
        html: `<div>\n  <mz-alert variant=\"success\">Success: Saved successfully</mz-alert>\n  <mz-alert variant=\"warning\">Warning: Be careful</mz-alert>\n  <mz-alert variant=\"error\">Error: Something went wrong</mz-alert>\n  <mz-alert variant=\"info\">Info: Heads up</mz-alert>\n</div>`
      }}
    ]
  }
