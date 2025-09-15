import { ComponentMeta } from '../types'
import { InputBasicPreview } from '../previews/input'
import { InputWithAddonsPreview } from '../previews/input'
import { InputSearchPreview } from '../previews/input'

export const inputEntry: ComponentMeta = {
    slug: 'input',
    name: 'Input',
    category: 'Forms',
    description: 'Accessible form input with label, helper text and sizes.',
    Preview: InputBasicPreview,
    code: {
      react: `import { Input } from 'maxzilla-ui-react'

<Input label="Email" placeholder="you@example.com" />`,
      html: `<mz-input label="Email" placeholder="you@example.com"></mz-input>`
    },
    sections: [
      {
        id: 'basic',
        title: 'Basic Inputs',
        Preview: InputBasicPreview,
        code: {
          react: `import { Input } from 'maxzilla-ui-react'

<div className="grid sm:grid-cols-2 gap-4">
  <div>
    <Input
      label="Email"
      placeholder="you@example.com"
      helperText="We'll never share your email"
    />
  </div>
  <div>
    <Input
      label="Username"
      placeholder="@username"
      success
      helperText="Username is available"
    />
  </div>
</div>`,
          html: `<div class="grid sm:grid-cols-2 gap-4">
  <div>
    <mz-input
      label="Email"
      placeholder="you@example.com"
      helper-text="We'll never share your email">
    </mz-input>
  </div>
  <div>
    <mz-input
      label="Username"
      placeholder="@username"
      success
      helper-text="Username is available">
    </mz-input>
  </div>
</div>`
        }
      },
      {
        id: 'with-addons',
        title: 'With Add-ons',
        Preview: InputWithAddonsPreview,
        code: {
          react: `import { Input, Button, Avatar } from 'maxzilla-ui-react'
import { Send } from 'lucide-react'

<div className="space-y-3">
  <div className="flex items-center gap-2">
    <span className="text-neutral-500 dark:text-neutral-400">https://</span>
    <Input placeholder="your-website.com" className="flex-1" />
    <Button variant="primary" size="sm">Verify</Button>
  </div>

  <div className="flex items-center gap-2">
    <Avatar src="https://i.pravatar.cc/32?img=5" size="sm" />
    <Input
      placeholder="What's on your mind?"
      className="flex-1"
    />
    <Button variant="primary" size="sm">
      <Send className="w-3 h-3 mr-1" /> Post
    </Button>
  </div>
</div>`,
          html: `<div class="space-y-3">
  <div class="flex items-center gap-2">
    <span class="text-neutral-500 dark:text-neutral-400">https://</span>
    <mz-input placeholder="your-website.com" class="flex-1"></mz-input>
    <mz-button variant="primary" size="sm">Verify</mz-button>
  </div>

  <div class="flex items-center gap-2">
    <mz-avatar src="https://i.pravatar.cc/32?img=5" size="sm"></mz-avatar>
    <mz-input
      placeholder="What's on your mind?"
      class="flex-1">
    </mz-input>
    <mz-button variant="primary" size="sm">
      📤 Post
    </mz-button>
  </div>
</div>`
        }
      },
      {
        id: 'search',
        title: 'Search Input',
        Preview: InputSearchPreview,
        code: {
          react: `import { Input, Badge } from 'maxzilla-ui-react'
import { Search } from 'lucide-react'

<div className="relative">
  <Input
    placeholder="Search products, users, and more..."
    className="pl-10"
  />
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
  <Badge variant="secondary" className="absolute right-3 top-1/2 -translate-y-1/2">⌘K</Badge>
</div>`,
          html: `<div class="relative">
  <mz-input
    placeholder="Search products, users, and more..."
    class="pl-10">
  </mz-input>
  <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400">
    <!-- Search icon SVG -->
  </svg>
  <mz-badge variant="secondary" class="absolute right-3 top-1/2 -translate-y-1/2">⌘K</mz-badge>
</div>`
        }
      }
    ]
  }
