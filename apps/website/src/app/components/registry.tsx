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
  sections?: { id: string; title: string; Preview: React.FC; code: { react: string; html: string } }[]
}

const ButtonVariantsPreview: React.FC = () => (
  <div className="flex flex-wrap gap-3 items-center">
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="danger">Danger</Button>
  </div>
)

const ButtonSizesPreview: React.FC = () => (
  <div className="flex gap-3 items-center">
    <Button variant="primary" size="sm">Small</Button>
    <Button variant="primary" size="md">Medium</Button>
    <Button variant="primary" size="lg">Large</Button>
  </div>
)

const ButtonWithIconsPreview: React.FC = () => (
  <div className="flex flex-wrap gap-3 items-center">
    <Button variant="primary" size="lg">
      <span className="mr-2">🚀</span>
      Get Started
    </Button>
    <Button variant="secondary" size="lg">
      <span className="mr-2">📖</span>
      Documentation
    </Button>
    <Button variant="outline" size="lg">
      <span className="mr-2">⭐</span>
      Star on GitHub
    </Button>
  </div>
)

const ButtonStatesPreview: React.FC = () => (
  <div className="flex gap-3 items-center">
    <Button variant="primary">Normal</Button>
    <Button variant="primary" disabled>
      Disabled
    </Button>
    <Button variant="outline">
      <span className="mr-2 text-red-500">3</span>
      With Badge
    </Button>
  </div>
)

const BadgePreview: React.FC = () => (
  <div className="space-y-4">
    {/* Status Badges */}
    <div className="flex flex-wrap gap-2 items-center">
      <Badge variant="success">
        <span className="mr-1">•</span> Online
      </Badge>
      <Badge variant="warning">
        <span className="mr-1">🔥</span> Trending
      </Badge>
      <Badge variant="error">
        <span className="mr-1">🔴</span> Live
      </Badge>
      <Badge variant="primary">
        <span className="mr-1">✨</span> New
      </Badge>
      <Badge variant="secondary">Beta</Badge>
    </div>

    {/* Count Badges in Context */}
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <span className="text-neutral-600 dark:text-neutral-300">Messages</span>
        <Badge variant="primary">24</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-neutral-600 dark:text-neutral-300">Notifications</span>
        <Badge variant="error">3</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-neutral-600 dark:text-neutral-300">Updates</span>
        <Badge variant="success">12</Badge>
      </div>
    </div>

    {/* Badge with User */}
    <div className="flex items-center gap-3">
      <Avatar src="https://i.pravatar.cc/40?img=7" size="sm" />
      <span className="font-medium text-neutral-900 dark:text-white">John Doe</span>
      <Badge variant="secondary">Admin</Badge>
      <Badge variant="success">Pro</Badge>
    </div>
  </div>
)

const InputPreview: React.FC = () => (
  <div className="space-y-4">
    {/* Form with Validation States */}
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
    </div>

    {/* Input with Addons */}
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
          <span className="mr-1">💬</span> Post
        </Button>
      </div>
    </div>

    {/* Search Input */}
    <div className="relative">
      <Input
        placeholder="Search products, users, and more..."
        className="pl-10"
      />
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">🔍</span>
      <Badge variant="secondary" className="absolute right-3 top-1/2 -translate-y-1/2">⌘K</Badge>
    </div>
  </div>
)

const CardBasicPreview: React.FC = () => (
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    <Card>
      <h3 className="font-semibold mb-2">Default Card</h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">Basic card with default styling and content.</p>
    </Card>
    <Card variant="outlined">
      <h3 className="font-semibold mb-2">Outlined Card</h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">Card with border styling for subtle separation.</p>
    </Card>
    <Card variant="elevated">
      <h3 className="font-semibold mb-2">Elevated Card</h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">Card with shadow elevation for emphasis.</p>
    </Card>
  </div>
)

const CardProfilePreview: React.FC = () => (
  <div className="max-w-md">
    <Card elevation="lg" interactive>
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <Avatar src="https://i.pravatar.cc/80?img=3" size="lg" />
          <div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Sarah Chen</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">Product Designer</p>
            <div className="flex gap-2 mt-2">
              <Badge variant="primary">Design</Badge>
              <Badge variant="success">Available</Badge>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-neutral-600 dark:text-neutral-300">
        Crafting beautiful interfaces with attention to detail. Specializing in design systems and user experience.
      </p>
      <div slot="actions" className="flex gap-2">
        <Button variant="primary" size="sm">View Profile</Button>
        <Button variant="outline" size="sm">Message</Button>
      </div>
    </Card>
  </div>
)

const CardStatsPreview: React.FC = () => (
  <div className="grid gap-4 md:grid-cols-2">
    <Card elevation="md" variant="elevated">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-xl font-bold">
          📈
        </div>
        <div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Monthly Revenue</p>
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">$24,875</h3>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="success">+12.5%</Badge>
        <span className="text-sm text-neutral-500">vs last month</span>
      </div>
    </Card>
    <Card elevation="md" variant="elevated">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white text-xl font-bold">
          👥
        </div>
        <div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Active Users</p>
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">1,429</h3>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="success">+8.2%</Badge>
        <span className="text-sm text-neutral-500">vs last week</span>
      </div>
    </Card>
  </div>
)

const AvatarPreview: React.FC = () => (
  <div className="space-y-4">
    {/* Avatar Group with Status */}
    <div className="flex items-center -space-x-2">
      <Avatar src="https://i.pravatar.cc/80?img=1" size="lg" status="online" />
      <Avatar src="https://i.pravatar.cc/80?img=2" size="lg" status="busy" />
      <Avatar src="https://i.pravatar.cc/80?img=3" size="lg" status="away" />
      <Avatar initials="+5" size="lg" />
    </div>

    {/* Avatar with Info */}
    <div className="flex items-center gap-4">
      <Avatar src="https://i.pravatar.cc/100?img=8" size="xl" status="online" />
      <div>
        <h4 className="font-semibold text-neutral-900 dark:text-white">Emily Rodriguez</h4>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">Senior Developer</p>
        <div className="flex gap-2 mt-2">
          <Badge variant="success">Active</Badge>
          <Badge variant="primary">Pro</Badge>
        </div>
      </div>
    </div>
  </div>
)

const ModalPreview: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const [deleteModal, setDeleteModal] = React.useState(false)

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <Button variant="primary" onClick={() => setOpen(true)}>
          <span className="mr-2">✨</span> Premium Modal
        </Button>
        <Button variant="danger" onClick={() => setDeleteModal(true)}>
          <span className="mr-2">🗑️</span> Delete Modal
        </Button>
      </div>

      {/* Premium Feature Modal */}
      <Modal open={open} size="lg" closable backdrop>
        <div slot="header" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white">
            🚀
          </div>
          <h3 className="text-xl font-bold">Upgrade to Pro</h3>
        </div>

        <div className="space-y-4">
          <p className="text-neutral-600 dark:text-neutral-300">
            Unlock premium features and take your experience to the next level.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              <span>Unlimited projects</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              <span>Advanced analytics</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              <span>Priority support</span>
            </div>
          </div>

          <Card elevation="sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Monthly</p>
                <p className="text-2xl font-bold text-neutral-900 dark:text-white">$29<span className="text-sm font-normal">/mo</span></p>
              </div>
              <Badge variant="success">Save 20%</Badge>
            </div>
          </Card>
        </div>

        <div slot="footer" className="flex gap-2">
          <Button variant="outline" onClick={() => setOpen(false)}>Maybe Later</Button>
          <Button variant="primary" onClick={() => setOpen(false)}>
            <span className="mr-2">⚡</span> Upgrade Now
          </Button>
        </div>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal open={deleteModal} size="sm" closable backdrop>
        <div slot="header" className="flex items-center gap-2 text-red-600 dark:text-red-400">
          <span className="text-2xl">⚠️</span>
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
          <Button variant="outline" onClick={() => setDeleteModal(false)}>Cancel</Button>
          <Button variant="danger" onClick={() => setDeleteModal(false)}>Delete Project</Button>
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
  <div className="space-y-4">
    {/* Task List */}
    <Card elevation="sm">
      <h4 className="font-semibold text-neutral-900 dark:text-white mb-3">Today's Tasks</h4>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Checkbox checked />
          <span className="line-through text-neutral-500">Complete project proposal</span>
          <Badge variant="success">Done</Badge>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox checked />
          <span className="line-through text-neutral-500">Review pull requests</span>
          <Badge variant="success">Done</Badge>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox />
          <span className="text-neutral-700 dark:text-neutral-300">Team standup meeting</span>
          <Badge variant="warning">2:00 PM</Badge>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox />
          <span className="text-neutral-700 dark:text-neutral-300">Update documentation</span>
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-neutral-200 dark:border-neutral-700">
        <div className="flex items-center justify-between">
          <span className="text-sm text-neutral-500">Progress</span>
          <Badge variant="primary">2/4 completed</Badge>
        </div>
      </div>
    </Card>

    {/* Settings Checkboxes */}
    <div className="space-y-2">
      <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer">
        <Checkbox checked />
        <div>
          <p className="font-medium text-neutral-900 dark:text-white">Email Notifications</p>
          <p className="text-sm text-neutral-500">Receive updates via email</p>
        </div>
      </label>
      <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer">
        <Checkbox />
        <div>
          <p className="font-medium text-neutral-900 dark:text-white">Marketing Emails</p>
          <p className="text-sm text-neutral-500">Receive promotional content</p>
        </div>
      </label>
    </div>
  </div>
)

const SwitchPreview: React.FC = () => (
  <div className="space-y-4">
    {/* Feature Toggles */}
    <Card elevation="sm">
      <h4 className="font-semibold text-neutral-900 dark:text-white mb-4">Feature Settings</h4>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🌙</span>
            <div>
              <p className="font-medium text-neutral-900 dark:text-white">Dark Mode</p>
              <p className="text-sm text-neutral-500">Use dark theme across the app</p>
            </div>
          </div>
          <Switch checked />
        </div>

        <Divider />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🔔</span>
            <div>
              <p className="font-medium text-neutral-900 dark:text-white">Push Notifications</p>
              <p className="text-sm text-neutral-500">Get notified about updates</p>
            </div>
          </div>
          <Switch checked />
        </div>

        <Divider />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🔒</span>
            <div>
              <p className="font-medium text-neutral-900 dark:text-white">Two-Factor Auth</p>
              <p className="text-sm text-neutral-500">Extra security for your account</p>
            </div>
          </div>
          <Switch />
        </div>

        <Divider />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🚀</span>
            <div>
              <p className="font-medium text-neutral-900 dark:text-white">Beta Features</p>
              <p className="text-sm text-neutral-500">Try experimental features</p>
              <Badge variant="warning" className="mt-1">Experimental</Badge>
            </div>
          </div>
          <Switch />
        </div>
      </div>
    </Card>
  </div>
)

const TextareaPreview: React.FC = () => (
  <Textarea label="Bio" placeholder="Tell us something..." rows={3} />
)

const NavbarPreview: React.FC = () => (
  <div className="space-y-4">
    {/* Premium Navbar */}
    <Navbar elevated>
      <div slot="brand" className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold">
          M
        </div>
        <span className="font-bold text-lg">Maxzilla</span>
      </div>

      <div slot="nav" className="flex gap-6">
        <a href="#" className="text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400">Products</a>
        <a href="#" className="text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400">Solutions</a>
        <a href="#" className="text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400">Pricing</a>
        <a href="#" className="text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400">Docs</a>
      </div>

      <div slot="actions" className="flex items-center gap-3">
        <Badge variant="success">v2.0</Badge>
        <Button variant="outline" size="sm">
          <span className="mr-1">⭐</span> Star
        </Button>
        <Button variant="primary" size="sm">Get Started</Button>
        <Avatar src="https://i.pravatar.cc/32?img=5" size="sm" status="online" />
      </div>
    </Navbar>

    {/* Transparent Navbar */}
    <div className="p-4 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20 rounded-lg">
      <Navbar transparent>
        <span slot="brand" className="font-bold">Transparent Nav</span>
        <div slot="actions">
          <Button variant="outline" size="sm">Sign In</Button>
        </div>
      </Navbar>
    </div>
  </div>
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
  <div className="space-y-3">
    {/* Success Alert with Title */}
    <Alert variant="success" dismissible>
      <div className="flex items-start gap-3">
        <span className="text-2xl">✅</span>
        <div>
          <p className="font-semibold mb-1">Your payment has been processed</p>
          <p className="text-sm opacity-90">Transaction ID: #TXN-2024-001234</p>
        </div>
      </div>
    </Alert>

    {/* Warning Alert with Action */}
    <Alert variant="warning" dismissible>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">⚠️</span>
          <div>
            <p className="font-semibold">Storage Almost Full</p>
            <p className="text-sm mt-1">You're using 9.2GB of 10GB available</p>
          </div>
        </div>
        <Button variant="outline" size="sm">Upgrade Plan</Button>
      </div>
    </Alert>

    {/* Info Alert with Avatar */}
    <Alert variant="info">
      <div className="flex items-center gap-3">
        <Avatar src="https://i.pravatar.cc/40?img=8" size="sm" />
        <div>
          <p className="font-semibold">New team member joined</p>
          <p className="text-sm mt-1">Alex Martinez joined the Design team • 2 minutes ago</p>
        </div>
      </div>
    </Alert>
  </div>
)

const AlertVariantsPreview: React.FC = () => (
  <div className="space-y-2">
    <Alert variant="success">Success: Saved successfully</Alert>
    <Alert variant="warning">Warning: Be careful</Alert>
    <Alert variant="error">Error: Something went wrong</Alert>
    <Alert variant="info">Info: Heads up</Alert>
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

  const showSuccessToast = () => {
    if (ref) {
      ref.show({
        title: 'File Uploaded',
        message: 'profile-photo.jpg uploaded successfully',
        variant: 'success',
        avatar: 'https://i.pravatar.cc/40?img=5',
        duration: 4000
      })
    }
  }

  const showNotificationToast = () => {
    if (ref) {
      ref.show({
        title: 'New Message',
        message: 'You have a new message from Sarah',
        variant: 'info',
        avatar: 'https://i.pravatar.cc/40?img=9',
        duration: 5000
      })
    }
  }

  const showErrorToast = () => {
    if (ref) {
      ref.show({
        title: 'Upload Failed',
        message: 'File size exceeds 10MB limit',
        variant: 'error',
        duration: 5000
      })
    }
  }

  return (
    <div className="space-y-3">
      <ToastContainer ref={setRef as any} position="bottom-right" />
      <div className="flex flex-wrap gap-2">
        <Button variant="primary" onClick={showSuccessToast}>
          <span className="mr-2">✅</span> Success Toast
        </Button>
        <Button variant="primary" onClick={showNotificationToast}>
          <span className="mr-2">💬</span> Notification
        </Button>
        <Button variant="outline" onClick={showErrorToast}>
          <span className="mr-2">❌</span> Error Toast
        </Button>
      </div>
    </div>
  )
}

export const registry: ComponentMeta[] = [
  {
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

<Button variant="primary" size="sm">Small</Button>
<Button variant="primary" size="md">Medium</Button>
<Button variant="primary" size="lg">Large</Button>`,
          html: `<mz-button variant="primary" size="sm">Small</mz-button>
<mz-button variant="primary" size="md">Medium</mz-button>
<mz-button variant="primary" size="lg">Large</mz-button>`
        }
      },
      {
        id: 'with-icons',
        title: 'Buttons with Icons',
        Preview: ButtonWithIconsPreview,
        code: {
          react: `import { Button } from 'maxzilla-ui-react'

<Button variant="primary" size="lg">
  <span className="mr-2">🚀</span>
  Get Started
</Button>

<Button variant="secondary" size="lg">
  <span className="mr-2">📖</span>
  Documentation
</Button>

<Button variant="outline" size="lg">
  <span className="mr-2">⭐</span>
  Star on GitHub
</Button>`,
          html: `<mz-button variant="primary" size="lg">
  <span>🚀</span> Get Started
</mz-button>

<mz-button variant="secondary" size="lg">
  <span>📖</span> Documentation
</mz-button>

<mz-button variant="outline" size="lg">
  <span>⭐</span> Star on GitHub
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
    Preview: CardBasicPreview,
    code: {
      react: `import { Card } from 'maxzilla-ui-react'

<Card>
  <h3 className="font-semibold mb-2">Default Card</h3>
  <p className="text-sm">Basic card with default styling.</p>
</Card>`,
      html: `<mz-card>
  <h3>Default Card</h3>
  <p>Basic card with default styling.</p>
</mz-card>`
    },
    sections: [
      {
        id: 'basic-cards',
        title: 'Basic Cards',
        Preview: CardBasicPreview,
        code: {
          react: `import { Card } from 'maxzilla-ui-react'

// Default Card
<Card>
  <h3 className="font-semibold mb-2">Default Card</h3>
  <p className="text-sm">Basic card with default styling.</p>
</Card>

// Outlined Card
<Card variant="outlined">
  <h3 className="font-semibold mb-2">Outlined Card</h3>
  <p className="text-sm">Card with border styling.</p>
</Card>

// Elevated Card
<Card variant="elevated">
  <h3 className="font-semibold mb-2">Elevated Card</h3>
  <p className="text-sm">Card with shadow elevation.</p>
</Card>`,
          html: `<!-- Default Card -->
<mz-card>
  <h3>Default Card</h3>
  <p>Basic card with default styling.</p>
</mz-card>

<!-- Outlined Card -->
<mz-card variant="outlined">
  <h3>Outlined Card</h3>
  <p>Card with border styling.</p>
</mz-card>

<!-- Elevated Card -->
<mz-card variant="elevated">
  <h3>Elevated Card</h3>
  <p>Card with shadow elevation.</p>
</mz-card>`
        }
      },
      {
        id: 'profile-card',
        title: 'Profile Card',
        Preview: CardProfilePreview,
        code: {
          react: `import { Card, Avatar, Badge, Button } from 'maxzilla-ui-react'

<Card elevation="lg" interactive>
  <div className="flex items-start justify-between">
    <div className="flex gap-4">
      <Avatar src="https://i.pravatar.cc/80?img=3" size="lg" />
      <div>
        <h3 className="text-lg font-semibold">Sarah Chen</h3>
        <p className="text-sm text-neutral-500">Product Designer</p>
        <div className="flex gap-2 mt-2">
          <Badge variant="primary">Design</Badge>
          <Badge variant="success">Available</Badge>
        </div>
      </div>
    </div>
  </div>
  <p className="mt-4 text-neutral-600">
    Crafting beautiful interfaces with attention to detail.
  </p>
  <div slot="actions" className="flex gap-2">
    <Button variant="primary" size="sm">View Profile</Button>
    <Button variant="outline" size="sm">Message</Button>
  </div>
</Card>`,
          html: `<mz-card elevation="lg" interactive>
  <div class="flex items-start justify-between">
    <div class="flex gap-4">
      <mz-avatar src="https://i.pravatar.cc/80?img=3" size="lg"></mz-avatar>
      <div>
        <h3>Sarah Chen</h3>
        <p>Product Designer</p>
        <div class="flex gap-2 mt-2">
          <mz-badge variant="primary">Design</mz-badge>
          <mz-badge variant="success">Available</mz-badge>
        </div>
      </div>
    </div>
  </div>
  <p>Crafting beautiful interfaces with attention to detail.</p>
  <div slot="actions">
    <mz-button variant="primary" size="sm">View Profile</mz-button>
    <mz-button variant="outline" size="sm">Message</mz-button>
  </div>
</mz-card>`
        }
      },
      {
        id: 'stats-cards',
        title: 'Stats Cards',
        Preview: CardStatsPreview,
        code: {
          react: `import { Card, Badge } from 'maxzilla-ui-react'

// Revenue Card
<Card elevation="md" variant="elevated">
  <div className="flex items-center gap-4 mb-4">
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white">
      📈
    </div>
    <div>
      <p className="text-sm text-neutral-500">Monthly Revenue</p>
      <h3 className="text-2xl font-bold">$24,875</h3>
    </div>
  </div>
  <div className="flex items-center gap-2">
    <Badge variant="success">+12.5%</Badge>
    <span className="text-sm text-neutral-500">vs last month</span>
  </div>
</Card>

// Users Card
<Card elevation="md" variant="elevated">
  <div className="flex items-center gap-4 mb-4">
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white">
      👥
    </div>
    <div>
      <p className="text-sm text-neutral-500">Active Users</p>
      <h3 className="text-2xl font-bold">1,429</h3>
    </div>
  </div>
  <div className="flex items-center gap-2">
    <Badge variant="success">+8.2%</Badge>
    <span className="text-sm text-neutral-500">vs last week</span>
  </div>
</Card>`,
          html: `<!-- Revenue Card -->
<mz-card elevation="md" variant="elevated">
  <div class="flex items-center gap-4 mb-4">
    <div class="icon-box">📈</div>
    <div>
      <p>Monthly Revenue</p>
      <h3>$24,875</h3>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <mz-badge variant="success">+12.5%</mz-badge>
    <span>vs last month</span>
  </div>
</mz-card>

<!-- Users Card -->
<mz-card elevation="md" variant="elevated">
  <div class="flex items-center gap-4 mb-4">
    <div class="icon-box">👥</div>
    <div>
      <p>Active Users</p>
      <h3>1,429</h3>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <mz-badge variant="success">+8.2%</mz-badge>
    <span>vs last week</span>
  </div>
</mz-card>`
        }
      }
    ]
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
  { 
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
  },
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
