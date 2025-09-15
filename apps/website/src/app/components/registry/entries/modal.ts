import { ComponentMeta } from '../types'
import { ModalUpgradePreview } from '../previews/modal'
import { ModalDeletePreview } from '../previews/modal'

export const modalEntry: ComponentMeta = {
    slug: 'modal',
    name: 'Modal',
    category: 'Overlays',
    description: 'Dialog overlay with header, content and footer slots.',
    Preview: ModalUpgradePreview,
    code: {
      react: `import { Modal, Button } from 'maxzilla-ui-react'

<Modal open closable backdrop>
  <h3 slot="header">Title</h3>
  <p>Content</p>
  <div slot="footer"><Button variant="outline">Close</Button></div>
</Modal>`,
      html: `<mz-modal open>
  <h3 slot="header">Title</h3>
  <p>Content</p>
  <button slot="footer">Close</button>
</mz-modal>`
    },
    sections: [
      {
        id: 'upgrade-modal',
        title: 'Upgrade Modal',
        Preview: ModalUpgradePreview,
        code: {
          react: `import { Modal, Button, Card, Badge } from 'maxzilla-ui-react'
import { Star, Rocket, Check, Zap } from 'lucide-react'

const [open, setOpen] = React.useState(false)

<div>
  <Button variant="primary" onClick={() => setOpen(true)}>
    <Star className="w-4 h-4 mr-2" /> Premium Modal
  </Button>

  <Modal open={open} size="lg" closable backdrop>
    <div slot="header" className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white">
        <Rocket className="w-5 h-5" />
      </div>
      <h3 className="text-xl font-bold">Upgrade to Pro</h3>
    </div>

    <div className="space-y-4">
      <p className="text-neutral-600 dark:text-neutral-300">
        Unlock premium features and take your experience to the next level.
      </p>

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Check className="w-4 h-4 text-green-500" />
          <span>Unlimited projects</span>
        </div>
        <div className="flex items-center gap-3">
          <Check className="w-4 h-4 text-green-500" />
          <span>Advanced analytics</span>
        </div>
        <div className="flex items-center gap-3">
          <Check className="w-4 h-4 text-green-500" />
          <span>Priority support</span>
        </div>
      </div>

      <Card elevation="sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-neutral-600">Monthly</p>
            <p className="text-2xl font-bold">$29<span className="text-sm font-normal">/mo</span></p>
          </div>
          <Badge variant="success">Save 20%</Badge>
        </div>
      </Card>
    </div>

    <div slot="footer" className="flex gap-2">
      <Button variant="outline" onClick={() => setOpen(false)}>Maybe Later</Button>
      <Button variant="primary" onClick={() => setOpen(false)}>
        <Zap className="w-4 h-4 mr-2" /> Upgrade Now
      </Button>
    </div>
  </Modal>
</div>`,
          html: `<div>
  <button onclick="openModal()">Premium Modal</button>

  <mz-modal id="upgrade-modal" size="lg" closable backdrop>
    <div slot="header">
      <div class="header-content">
        <div class="icon">🚀</div>
        <h3>Upgrade to Pro</h3>
      </div>
    </div>

    <div class="space-y-4">
      <p>Unlock premium features and take your experience to the next level.</p>

      <div class="features">
        <div class="feature">✅ Unlimited projects</div>
        <div class="feature">✅ Advanced analytics</div>
        <div class="feature">✅ Priority support</div>
      </div>

      <mz-card elevation="sm">
        <div class="pricing">
          <div>
            <p>Monthly</p>
            <h3>$29<span>/mo</span></h3>
          </div>
          <mz-badge variant="success">Save 20%</mz-badge>
        </div>
      </mz-card>
    </div>

    <div slot="footer">
      <button onclick="closeModal()">Maybe Later</button>
      <button class="primary" onclick="upgrade()">🔥 Upgrade Now</button>
    </div>
  </mz-modal>
</div>`
        }
      },
      {
        id: 'delete-confirmation',
        title: 'Delete Confirmation Modal',
        Preview: ModalDeletePreview,
        code: {
          react: `import { Modal, Button, Alert } from 'maxzilla-ui-react'
import { Trash2, AlertTriangle } from 'lucide-react'

const [open, setOpen] = React.useState(false)

<div>
  <Button variant="danger" onClick={() => setOpen(true)}>
    <Trash2 className="w-4 h-4 mr-2" /> Delete Project
  </Button>

  <Modal open={open} size="sm" closable backdrop>
    <div slot="header" className="flex items-center gap-2 text-red-600 dark:text-red-400">
      <AlertTriangle className="w-6 h-6" />
      <h3 className="text-lg font-semibold">Delete Project?</h3>
    </div>

    <div className="space-y-3">
      <p className="text-neutral-600 dark:text-neutral-300">
        This action cannot be undone. This will permanently delete your project and all associated data.
      </p>
      <Alert variant="warning">
        <p className="text-sm">All 48 files will be deleted</p>
      </Alert>
    </div>

    <div slot="footer" className="flex gap-2">
      <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
      <Button variant="danger" onClick={() => setOpen(false)}>Delete Project</Button>
    </div>
  </Modal>
</div>`,
          html: `<div>
  <button class="danger" onclick="openDeleteModal()">🗑️ Delete Project</button>

  <mz-modal id="delete-modal" size="sm" closable backdrop>
    <div slot="header" class="text-red-600">
      <div class="flex items-center gap-2">
        <span>⚠️</span>
        <h3>Delete Project?</h3>
      </div>
    </div>

    <div class="space-y-3">
      <p>This action cannot be undone. This will permanently delete your project and all associated data.</p>
      <mz-alert variant="warning">
        <p>All 48 files will be deleted</p>
      </mz-alert>
    </div>

    <div slot="footer">
      <button onclick="closeModal()">Cancel</button>
      <button class="danger" onclick="deleteProject()">Delete Project</button>
    </div>
  </mz-modal>
</div>`
        }
      }
    ]
  }
