import { ComponentMeta } from '../types'
import { AccordionPreview } from '../previews/accordion'

export const accordionEntry: ComponentMeta = {
    slug: 'accordion',
    name: 'Accordion',
    category: 'Navigation',
    description: 'Collapsible panels for grouping content.',
    Preview: AccordionPreview,
    code: {
      react: `import { Accordion, AccordionItem } from 'maxzilla-ui-react'

<Accordion>
  <AccordionItem header="Item 1">Content</AccordionItem>
  <AccordionItem header="Item 2">More</AccordionItem>
</Accordion>`,
      html: `<mz-accordion>
  <mz-accordion-item header="Item 1">Content</mz-accordion-item>
  <mz-accordion-item header="Item 2">More</mz-accordion-item>
</mz-accordion>`
    }
  }
