import { ComponentMeta } from '../types'
import { ContainerPreview } from '../previews/container'
import { ToastContainerPreview } from '../previews/toast'

export const toastcontainerEntry: ComponentMeta = { slug: 'toastcontainer', name: 'Toast Container', category: 'Overlays', description: 'Toast stack/queue with variants and timing.', Preview: ToastContainerPreview, code: { react: `<ToastContainer ref={setRef} />`, html: `<mz-toast-container></mz-toast-container>` } }
