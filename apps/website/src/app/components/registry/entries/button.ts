import { ComponentMeta } from '../types'
import { ButtonVariantsPreview } from '../previews/button'
import { ButtonSizesPreview } from '../previews/button'
import { ButtonWithIconsPreview } from '../previews/button'
import { ButtonStatesPreview } from '../previews/button'

export const buttonEntry: ComponentMeta = {
    slug: 'button',
    name: 'Button',
    category: 'Basics',
    description: 'Clickable actions with variants and sizes.',
    Preview: ButtonVariantsPreview,
    code: {
      react: `import { Button } from 'maxzilla-ui-react'

<Button variant="primary">Click me</Button>`,
      html: `<mz-button variant="primary">Click me</mz-button>`
    },
    sections: [
      {
        id: 'variants',
        title: 'Button Variants',
        Preview: ButtonVariantsPreview,
        code: {
          react: `import { Button } from 'maxzilla-ui-react'

<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>`,
          html: `<mz-button variant="primary">Primary</mz-button>
<mz-button variant="secondary">Secondary</mz-button>
<mz-button variant="outline">Outline</mz-button>
<mz-button variant="ghost">Ghost</mz-button>
<mz-button variant="danger">Danger</mz-button>`
        }
      },
      {
        id: 'sizes',
        title: 'Button Sizes',
        Preview: ButtonSizesPreview,
        code: {
          react: `import { Button } from 'maxzilla-ui-react'

<div className="space-y-4">
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-4">
      <Button variant="primary" size="small">Small Button</Button>
      <code className="text-sm text-neutral-600 dark:text-neutral-400">size="small"</code>
    </div>
    <div className="flex items-center gap-4">
      <Button variant="primary" size="medium">Medium Button</Button>
      <code className="text-sm text-neutral-600 dark:text-neutral-400">size="medium"</code>
    </div>
    <div className="flex items-center gap-4">
      <Button variant="primary" size="large">Large Button</Button>
      <code className="text-sm text-neutral-600 dark:text-neutral-400">size="large"</code>
    </div>
  </div>
</div>`,
          html: `<div class="space-y-4">
  <div class="flex flex-col gap-3">
    <div class="flex items-center gap-4">
      <mz-button variant="primary" size="small">Small Button</mz-button>
      <code class="text-sm text-neutral-600 dark:text-neutral-400">size="small"</code>
    </div>
    <div class="flex items-center gap-4">
      <mz-button variant="primary" size="medium">Medium Button</mz-button>
      <code class="text-sm text-neutral-600 dark:text-neutral-400">size="medium"</code>
    </div>
    <div class="flex items-center gap-4">
      <mz-button variant="primary" size="large">Large Button</mz-button>
      <code class="text-sm text-neutral-600 dark:text-neutral-400">size="large"</code>
    </div>
  </div>
</div>`
        }
      },
      {
        id: 'with-icons',
        title: 'Buttons with Icons',
        Preview: ButtonWithIconsPreview,
        code: {
          react: `import { Button } from 'maxzilla-ui-react'
import { Rocket, BookOpen, Star } from 'lucide-react'

<Button variant="primary" size="large">
  <Rocket className="w-4 h-4 mr-2" />
  Get Started
</Button>

<Button variant="secondary" size="large">
  <BookOpen className="w-4 h-4 mr-2" />
  Documentation
</Button>

<Button variant="outline" size="large">
  <Star className="w-4 h-4 mr-2" />
  Star on GitHub
</Button>`,
          html: `<mz-button variant="primary" size="large">
  Get Started
</mz-button>

<mz-button variant="secondary" size="large">
  Documentation
</mz-button>

<mz-button variant="outline" size="large">
  Star on GitHub
</mz-button>`
        }
      },
      {
        id: 'states',
        title: 'Button States',
        Preview: ButtonStatesPreview,
        code: {
          react: `import { Button } from 'maxzilla-ui-react'

<Button variant="primary">Normal</Button>

<Button variant="primary" disabled>
  Disabled
</Button>

<Button variant="outline">
  <span className="mr-2 text-red-500">3</span>
  With Badge
</Button>`,
          html: `<mz-button variant="primary">Normal</mz-button>

<mz-button variant="primary" disabled>
  Disabled
</mz-button>

<mz-button variant="outline">
  <span>3</span> With Badge
</mz-button>`
        }
      }
    ]
  }
