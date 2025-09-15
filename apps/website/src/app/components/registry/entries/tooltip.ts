import { ComponentMeta } from '../types'
import { TooltipPreview } from '../previews/tooltip'
import { TooltipRightPreview } from '../previews/tooltip'
import { TooltipBottomPreview } from '../previews/tooltip'
import { TooltipLeftPreview } from '../previews/tooltip'

export const tooltipEntry: ComponentMeta = {
    slug: 'tooltip',
    name: 'Tooltip',
    category: 'Overlays',
    description: 'Contextual information overlay on hover or focus.',
    Preview: TooltipPreview,
    code: {
      react: `import { Tooltip, Button } from 'maxzilla-ui-react'

<Tooltip text="This is a helpful tooltip" placement="top">
  <Button variant="primary">Hover for tooltip</Button>
</Tooltip>`,
      html: `<mz-tooltip text="This is a helpful tooltip" placement="top">
  <button>Hover for tooltip</button>
</mz-tooltip>`
    },
    sections: [
      {
        id: 'placement-right',
        title: 'Right Placement',
        Preview: TooltipRightPreview,
        code: {
          react: `import { Tooltip, Button } from 'maxzilla-ui-react'

<Tooltip text="Tooltip on the right" placement="right">
  <Button variant="outline">Right tooltip</Button>
</Tooltip>`,
          html: `<mz-tooltip text="Tooltip on the right" placement="right">
  <button>Right tooltip</button>
</mz-tooltip>`
        }
      },
      {
        id: 'placement-bottom',
        title: 'Bottom Placement',
        Preview: TooltipBottomPreview,
        code: {
          react: `import { Tooltip, Button } from 'maxzilla-ui-react'

<Tooltip text="Bottom positioned tooltip with more text" placement="bottom">
  <Button variant="secondary">Bottom tooltip</Button>
</Tooltip>`,
          html: `<mz-tooltip text="Bottom positioned tooltip with more text" placement="bottom">
  <button>Bottom tooltip</button>
</mz-tooltip>`
        }
      },
      {
        id: 'placement-left',
        title: 'Left Placement',
        Preview: TooltipLeftPreview,
        code: {
          react: `import { Tooltip, Button } from 'maxzilla-ui-react'

<Tooltip text="Left positioned tooltip" placement="left">
  <Button variant="ghost">Left tooltip</Button>
</Tooltip>`,
          html: `<mz-tooltip text="Left positioned tooltip" placement="left">
  <button>Left tooltip</button>
</mz-tooltip>`
        }
      }
    ]
  }
