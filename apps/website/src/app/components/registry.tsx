"use client"
import React from 'react'
import { Button, Badge, Input, Card, Avatar, Modal, Accordion, AccordionItem, Divider, Stack, Container, Checkbox, Switch, Textarea, Navbar, Breadcrumb, BreadcrumbItem, Drawer, RadioGroup, Radio, Tabs, Tab, Popover, Table, Form, FormGroup, FormActions, Pagination, Alert, Progress, Loading, ToastContainer } from 'maxzilla-ui-react'

export type ComponentCategory = 'Basics' | 'Forms' | 'Data Display' | 'Overlays' | 'Navigation' | 'Layout'

export interface ComponentMeta {
  slug: string
  name: string
  category: ComponentCategory
  description: string
  tags?: string[]
  Preview: React.FC
  code: {
    react: string
    html: string
  }
}

const ButtonPreview: React.FC = () => (
  <div className="flex gap-3 items-center">
    <Button variant="primary">Primary</Button>
    <Button variant="outline">Outline</Button>
  </div>
)

const BadgePreview: React.FC = () => (
  <div className="flex gap-2 items-center">
    <Badge variant="primary">Primary</Badge>
    <Badge variant="success">Success</Badge>
    <Badge variant="warning">Warning</Badge>
    <Badge variant="error">Error</Badge>
  </div>
)

const InputPreview: React.FC = () => (
  <div className="grid sm:grid-cols-2 gap-3">
    <Input label="Email" placeholder="you@example.com" />
    <Input label="Password" type="password" />
  </div>
)

const CardPreview: React.FC = () => (
  <Card elevation="md">
    <h3 slot="header">Card Header</h3>
    <p>Card content goes here.</p>
  </Card>
)

const AvatarPreview: React.FC = () => (
  <div className="flex items-center gap-4">
    <Avatar src="https://i.pravatar.cc/80?img=32" size="md" />
    <Avatar initials="MV" size="md" />
  </div>
)

const ModalPreview: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="space-y-3">
      <Button variant="primary" onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} closable backdrop>
        <h3 slot="header">Hello</h3>
        <p>This is a demo modal.</p>
        <div slot="footer">
          <Button variant="outline" onClick={() => setOpen(false)}>Close</Button>
        </div>
      </Modal>
    </div>
  )
}

const AccordionPreview: React.FC = () => (
  <Accordion>
    <AccordionItem header="Item One">
      <p className="text-neutral-600 dark:text-neutral-300">First item content.</p>
    </AccordionItem>
    <AccordionItem header="Item Two">
      <p className="text-neutral-600 dark:text-neutral-300">Second item content.</p>
    </AccordionItem>
  </Accordion>
)

const DividerPreview: React.FC = () => (
  <div className="space-y-4">
    <p>Above</p>
    <Divider />
    <p>Below</p>
  </div>
)

const StackPreview: React.FC = () => (
  <Stack direction="horizontal" spacing="md">
    <Badge variant="primary">One</Badge>
    <Badge variant="success">Two</Badge>
    <Badge variant="warning">Three</Badge>
  </Stack>
)

const ContainerPreview: React.FC = () => (
  <Container size="md" centered>
    <Card elevation="md">
      <h3 slot="header">Centered Container</h3>
      <p>Content constrained to medium width.</p>
    </Card>
  </Container>
)

const CheckboxPreview: React.FC = () => (
  <div className="flex items-center gap-4">
    <Checkbox label="Accept" />
    <Checkbox label="Subscribe" checked />
  </div>
)

const SwitchPreview: React.FC = () => (
  <div className="flex items-center gap-4">
    <Switch label="Enable" />
    <Switch label="Active" checked />
  </div>
)

const TextareaPreview: React.FC = () => (
  <Textarea label="Bio" placeholder="Tell us something..." rows={3} />
)

const NavbarPreview: React.FC = () => (
  <Navbar>
    <span slot="brand">Brand</span>
    <a slot="menu" href="#">Docs</a>
    <a slot="menu" href="#">Components</a>
  </Navbar>
)

const BreadcrumbPreview: React.FC = () => (
  <Breadcrumb>
    <BreadcrumbItem href="/">Home</BreadcrumbItem>
    <BreadcrumbItem href="/components">Components</BreadcrumbItem>
    <BreadcrumbItem current>Tabs</BreadcrumbItem>
  </Breadcrumb>
)

const DrawerPreview: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="space-y-2">
      <Button variant="outline" onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <p>Drawer content</p>
      </Drawer>
    </div>
  )
}

const RadioGroupPreview: React.FC = () => (
  <RadioGroup name="plan">
    <Radio value="basic">Basic</Radio>
    <Radio value="pro">Pro</Radio>
    <Radio value="enterprise">Enterprise</Radio>
  </RadioGroup>
)

const TabsPreview: React.FC = () => (
  <Tabs initial={0}>
    <Tab label="One">First panel</Tab>
    <Tab label="Two">Second panel</Tab>
  </Tabs>
)

const PopoverPreview: React.FC = () => (
  <Popover>
    <Button variant="outline" slot="trigger">Open</Button>
    <div style={{ minWidth: '10rem' }}>
      <p className="text-neutral-700 dark:text-neutral-300">Popover content</p>
    </div>
  </Popover>
)

const TablePreview: React.FC = () => (
  <Table>
    <th slot="header">Name</th>
    <th slot="header">Role</th>
    <tr><td>Ada</td><td>Engineer</td></tr>
    <tr><td>Linus</td><td>Maintainer</td></tr>
  </Table>
)

const FormPreview: React.FC = () => (
  <Form>
    <FormGroup>
      <Input label="First Name" />
      <Input label="Last Name" />
    </FormGroup>
    <FormActions>
      <Button variant="outline" type="reset">Reset</Button>
      <Button variant="primary" type="submit">Submit</Button>
    </FormActions>
  </Form>
)

const PaginationPreview: React.FC = () => (
  <Pagination total={120} pageSize={10} current={1} />
)

const AlertPreview: React.FC = () => (
  <div className="space-y-2">
    <Alert variant="success">Saved successfully</Alert>
    <Alert variant="warning">Be careful</Alert>
  </div>
)

const ProgressPreview: React.FC = () => (
  <Progress value={60} max={100} label="Upload" showValue />
)

const LoadingPreview: React.FC = () => (
  <div className="flex items-center gap-3">
    <Loading />
    <span className="text-neutral-600 dark:text-neutral-300">Loading…</span>
  </div>
)

const ToastContainerPreview: React.FC = () => {
  const [ref, setRef] = React.useState<any>(null)
  return (
    <div className="space-y-2">
      <ToastContainer ref={setRef as any} />
      <Button variant="outline" onClick={() => ref?.show('Action completed', 'success')}>Show Toast</Button>
    </div>
  )
}

export const registry: ComponentMeta[] = [
  {
    slug: 'button',
    name: 'Button',
    category: 'Basics',
    description: 'Clickable actions with variants and sizes.',
    Preview: ButtonPreview,
    code: {
      react: `import { Button } from 'maxzilla-ui-react'

<Button variant="primary">Click me</Button>`,
      html: `<!-- web component -->
<mz-button variant="primary">Click me</mz-button>`
    }
  },
  {
    slug: 'badge',
    name: 'Badge',
    category: 'Basics',
    description: 'Small status or count indicator in multiple variants.',
    Preview: BadgePreview,
    code: {
      react: `import { Badge } from 'maxzilla-ui-react'

<Badge variant="primary">New</Badge>`,
      html: `<mz-badge variant="primary">New</mz-badge>`
    }
  },
  {
    slug: 'input',
    name: 'Input',
    category: 'Forms',
    description: 'Accessible form input with label, helper text and sizes.',
    Preview: InputPreview,
    code: {
      react: `import { Input } from 'maxzilla-ui-react'

<Input label="Email" placeholder="you@example.com" />`,
      html: `<mz-input label="Email" placeholder="you@example.com"></mz-input>`
    }
  },
  {
    slug: 'card',
    name: 'Card',
    category: 'Data Display',
    description: 'Surface container with elevation variants and slots.',
    Preview: CardPreview,
    code: {
      react: `import { Card } from 'maxzilla-ui-react'

<Card elevation="md">
  <h3 slot="header">Title</h3>
  <p>Content</p>
</Card>`,
      html: `<mz-card elevation="md">
  <h3 slot="header">Title</h3>
  <p>Content</p>
</mz-card>`
    }
  },
  {
    slug: 'avatar',
    name: 'Avatar',
    category: 'Data Display',
    description: 'User avatar with image, initials and sizes.',
    Preview: AvatarPreview,
    code: {
      react: `import { Avatar } from 'maxzilla-ui-react'

<Avatar src="/user.png" size="md" />`,
      html: `<mz-avatar src="/user.png" size="md"></mz-avatar>`
    }
  },
  {
    slug: 'modal',
    name: 'Modal',
    category: 'Overlays',
    description: 'Dialog overlay with header, content and footer slots.',
    Preview: ModalPreview,
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
    }
  },
  {
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
  ,
  { slug: 'divider', name: 'Divider', category: 'Layout', description: 'Horizontal or vertical separator for grouping content.', Preview: DividerPreview, code: { react: `<Divider />`, html: `<mz-divider></mz-divider>` } },
  { slug: 'stack', name: 'Stack', category: 'Layout', description: 'Flexbox stack with direction, spacing, alignment options.', Preview: StackPreview, code: { react: `<Stack direction="horizontal" spacing="md">...</Stack>`, html: `<mz-stack direction="horizontal" spacing="md">...</mz-stack>` } },
  { slug: 'container', name: 'Container', category: 'Layout', description: 'Content wrapper with max-width sizes and centering.', Preview: ContainerPreview, code: { react: `<Container size="md" centered>...</Container>`, html: `<mz-container size="md" centered>...</mz-container>` } },
  { slug: 'checkbox', name: 'Checkbox', category: 'Forms', description: 'Boolean input with label and change event.', Preview: CheckboxPreview, code: { react: `<Checkbox label="Accept" />`, html: `<mz-checkbox label="Accept"></mz-checkbox>` } },
  { slug: 'switch', name: 'Switch', category: 'Forms', description: 'Toggle switch with keyboard support.', Preview: SwitchPreview, code: { react: `<Switch label="Enable" />`, html: `<mz-switch label="Enable"></mz-switch>` } },
  { slug: 'textarea', name: 'Textarea', category: 'Forms', description: 'Multi-line text input with label and helper text.', Preview: TextareaPreview, code: { react: `<Textarea label="Bio" rows={3} />`, html: `<mz-textarea label="Bio" rows="3"></mz-textarea>` } }
  ,
  { slug: 'navbar', name: 'Navbar', category: 'Navigation', description: 'Top navigation with brand and menu slots.', Preview: NavbarPreview, code: { react: `<Navbar><span slot="brand">Brand</span><a slot="menu">Item</a></Navbar>`, html: `<mz-navbar><span slot="brand">Brand</span><a slot="menu">Item</a></mz-navbar>` } },
  { slug: 'breadcrumb', name: 'Breadcrumb', category: 'Navigation', description: 'Path navigation with separators and current item.', Preview: BreadcrumbPreview, code: { react: `<Breadcrumb><BreadcrumbItem href="/">Home</BreadcrumbItem><BreadcrumbItem current>Page</BreadcrumbItem></Breadcrumb>`, html: `<mz-breadcrumb><mz-breadcrumb-item href="/">Home</mz-breadcrumb-item><mz-breadcrumb-item current>Page</mz-breadcrumb-item></mz-breadcrumb>` } },
  { slug: 'drawer', name: 'Drawer', category: 'Navigation', description: 'Side panel overlay with scrim and placement.', Preview: DrawerPreview, code: { react: `<Drawer open>...</Drawer>`, html: `<mz-drawer open>...</mz-drawer>` } },
  { slug: 'radiogroup', name: 'Radio Group', category: 'Forms', description: 'Single selection among multiple options.', Preview: RadioGroupPreview, code: { react: `<RadioGroup name="plan"><Radio value="basic"/></RadioGroup>`, html: `<mz-radio-group name="plan"><mz-radio value="basic"></mz-radio></mz-radio-group>` } },
  { slug: 'tabs', name: 'Tabs', category: 'Data Display', description: 'Tabbed interface with panels.', Preview: TabsPreview, code: { react: `<Tabs><Tab label="One">...</Tab></Tabs>`, html: `<mz-tabs><mz-tab label="One">...</mz-tab></mz-tabs>` } }
  ,
  { slug: 'popover', name: 'Popover', category: 'Overlays', description: 'Rich contextual content anchored to a trigger.', Preview: PopoverPreview, code: { react: `<Popover><Button slot="trigger">Open</Button>...</Popover>`, html: `<mz-popover><button slot="trigger">Open</button>...</mz-popover>` } },
  { slug: 'table', name: 'Table', category: 'Data Display', description: 'Semantic table with styled header and rows.', Preview: TablePreview, code: { react: `<Table><th slot="header">Name</th>...</Table>`, html: `<mz-table><th slot="header">Name</th>...</mz-table>` } },
  { slug: 'form', name: 'Form', category: 'Forms', description: 'Form container with group and actions slots.', Preview: FormPreview, code: { react: `<Form><FormGroup>...</FormGroup><FormActions>...</FormActions></Form>`, html: `<mz-form><mz-form-group>...</mz-form-group><mz-form-actions>...</mz-form-actions></mz-form>` } },
  { slug: 'pagination', name: 'Pagination', category: 'Data Display', description: 'Page navigation with prev/next and pages.', Preview: PaginationPreview, code: { react: `<Pagination total={120} pageSize={10} current={1} />`, html: `<mz-pagination total="120" page-size="10" current="1"></mz-pagination>` } },
  { slug: 'alert', name: 'Alert', category: 'Data Display', description: 'Contextual messages with variants and dismiss.', Preview: AlertPreview, code: { react: `<Alert variant="success">Saved</Alert>`, html: `<mz-alert variant="success">Saved</mz-alert>` } },
  { slug: 'progress', name: 'Progress', category: 'Data Display', description: 'Progress indication (linear).', Preview: ProgressPreview, code: { react: `<Progress value={60} max={100} label="Upload" showValue />`, html: `<mz-progress value="60" max="100" label="Upload" show-value></mz-progress>` } },
  { slug: 'loading', name: 'Loading', category: 'Overlays', description: 'Loading spinner (inline or overlay).', Preview: LoadingPreview, code: { react: `<Loading overlay />`, html: `<mz-loading overlay></mz-loading>` } },
  { slug: 'toastcontainer', name: 'Toast Container', category: 'Overlays', description: 'Toast stack/queue with variants and timing.', Preview: ToastContainerPreview, code: { react: `<ToastContainer ref={setRef} />`, html: `<mz-toast-container></mz-toast-container>` } }
]

export function byCategory(category: ComponentCategory) {
  return registry.filter((r) => r.category === category)
}

export function findBySlug(slug: string) {
  return registry.find((r) => r.slug === slug)
}
