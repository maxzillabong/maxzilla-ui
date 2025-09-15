import { ComponentMeta } from '../types'
import { ToastPreview } from '../previews/toast'

export const toastEntry: ComponentMeta = {
    slug: 'toast',
    name: 'Toast',
    category: 'Overlays',
    description: 'Temporary notification messages with variants.',
    Preview: ToastPreview,
    code: {
      react: `import { Toast, ToastContainer } from 'maxzilla-ui-react'

// Show toast programmatically
const showToast = (variant, message) => {
  const toast = document.createElement('mz-toast')
  toast.setAttribute('variant', variant)
  toast.setAttribute('message', message)
  toastContainer.appendChild(toast)
}

<ToastContainer duration={4000} />`,
      html: `<mz-toast-container duration="4000"></mz-toast-container>
<mz-toast variant="success" message="Success message"></mz-toast>
<mz-toast variant="error" message="Error message"></mz-toast>`
    }
  }
