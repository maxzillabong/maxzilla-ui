"use client"
import React from 'react'
import { Button, Badge, Input, Card, Avatar, Modal, Accordion, AccordionItem, Divider, Stack, Container, Checkbox, Switch, Textarea, Navbar, Breadcrumb, BreadcrumbItem, Drawer, RadioGroup, Radio, Tabs, Tab, Popover, Table, Form, FormGroup, FormActions, Pagination, Alert, Progress, Loading, ToastContainer, Tree, TreeNode, DatePicker, Select, Tooltip, Sidebar, Toast, Row, Col } from 'maxzilla-ui-react'
import { Rocket, BookOpen, Star, Github, Mail, Search, TrendingUp, Users, Check, AlertTriangle, X, Info, Upload, Settings, Moon, Bell, Lock, Zap, ChevronRight, Home, User, ChevronDown, Calendar, Send, Eye, MessageCircle, Trash2 } from 'lucide-react'

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
  </div>
)

const ButtonWithIconsPreview: React.FC = () => (
  <div className="flex flex-wrap gap-3 items-center">
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

const BadgeVariantsPreview: React.FC = () => (
  <div className="flex flex-wrap gap-2 items-center">
    <Badge variant="success">
      <span className="mr-1">•</span> Online
    </Badge>
    <Badge variant="warning">
      <TrendingUp className="w-3 h-3 mr-1" /> Trending
    </Badge>
    <Badge variant="error">
      <span className="mr-1 text-red-500">•</span> Live
    </Badge>
    <Badge variant="primary">
      <Star className="w-3 h-3 mr-1" /> New
    </Badge>
    <Badge variant="secondary">Beta</Badge>
  </div>
)

const BadgeCountsPreview: React.FC = () => (
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
)

const BadgeWithUserPreview: React.FC = () => (
  <div className="flex items-center gap-3">
    <Avatar src="https://i.pravatar.cc/40?img=7" size="sm" />
    <span className="font-medium text-neutral-900 dark:text-white">John Doe</span>
    <Badge variant="secondary">Admin</Badge>
    <Badge variant="success">Pro</Badge>
  </div>
)

const InputBasicPreview: React.FC = () => (
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
)

const InputWithAddonsPreview: React.FC = () => (
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
  </div>
)

const InputSearchPreview: React.FC = () => (
  <div className="relative">
    <Input
      placeholder="Search products, users, and more..."
      className="pl-10"
    />
    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
    <Badge variant="secondary" className="absolute right-3 top-1/2 -translate-y-1/2">⌘K</Badge>
  </div>
)

const CardDefaultPreview: React.FC = () => (
  <div className="max-w-md">
    <Card>
      <h3 className="font-semibold mb-2">Default Card</h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">Basic card with default styling and content.</p>
    </Card>
  </div>
)

const CardOutlinedPreview: React.FC = () => (
  <div className="max-w-md">
    <Card variant="outlined">
      <h3 className="font-semibold mb-2">Outlined Card</h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">Card with border styling for subtle separation.</p>
    </Card>
  </div>
)

const CardElevatedPreview: React.FC = () => (
  <div className="max-w-md">
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

const CardRevenueStatsPreview: React.FC = () => (
  <div className="max-w-sm">
    <Card elevation="md" variant="elevated">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white">
          <TrendingUp className="w-6 h-6" />
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
  </div>
)

const CardUsersStatsPreview: React.FC = () => (
  <div className="max-w-sm">
    <Card elevation="md" variant="elevated">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white">
          <Users className="w-6 h-6" />
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

const AvatarGroupPreview: React.FC = () => (
  <div className="flex items-center -space-x-2">
    <Avatar src="https://i.pravatar.cc/80?img=1" size="lg" status="online" />
    <Avatar src="https://i.pravatar.cc/80?img=2" size="lg" status="busy" />
    <Avatar src="https://i.pravatar.cc/80?img=3" size="lg" status="away" />
    <Avatar initials="+5" size="lg" />
  </div>
)

const AvatarWithInfoPreview: React.FC = () => (
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
)

const ModalUpgradePreview: React.FC = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <div>
      <Button variant="primary" onClick={() => setOpen(true)}>
        <Star className="w-4 h-4 mr-2" /> Premium Modal
      </Button>

      {/* Premium Feature Modal */}
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
            <Zap className="w-4 h-4 mr-2" /> Upgrade Now
          </Button>
        </div>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal open={deleteModal} size="sm" closable backdrop>
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
            <Moon className="w-6 h-6 text-neutral-600 dark:text-neutral-400" />
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
            <Bell className="w-6 h-6 text-neutral-600 dark:text-neutral-400" />
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
            <Lock className="w-6 h-6 text-neutral-600 dark:text-neutral-400" />
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
            <Rocket className="w-6 h-6 text-neutral-600 dark:text-neutral-400" />
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
          <Star className="w-3 h-3 mr-1" /> Star
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

const RadioBasicPreview: React.FC = () => (
  <div className="space-y-4">
    {/* Basic Options */}
    <div>
      <h4 className="font-semibold text-neutral-900 dark:text-white mb-3">Select your plan</h4>
      <RadioGroup name="plan" className="space-y-2">
        <Radio value="basic" className="p-3 border rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 cursor-pointer">
          <div className="flex items-center justify-between w-full">
            <div>
              <p className="font-medium text-neutral-900 dark:text-white">Basic</p>
              <p className="text-sm text-neutral-500">Free forever</p>
            </div>
            <Badge variant="secondary">$0</Badge>
          </div>
        </Radio>
        <Radio value="pro" className="p-3 border rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 cursor-pointer">
          <div className="flex items-center justify-between w-full">
            <div>
              <p className="font-medium text-neutral-900 dark:text-white">Pro</p>
              <p className="text-sm text-neutral-500">Perfect for professionals</p>
            </div>
            <Badge variant="primary">$29/mo</Badge>
          </div>
        </Radio>
        <Radio value="enterprise" className="p-3 border rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 cursor-pointer">
          <div className="flex items-center justify-between w-full">
            <div>
              <p className="font-medium text-neutral-900 dark:text-white">Enterprise</p>
              <p className="text-sm text-neutral-500">For large teams</p>
            </div>
            <Badge variant="success">Custom</Badge>
          </div>
        </Radio>
      </RadioGroup>
    </div>

    {/* Payment Method */}
    <Card elevation="sm">
      <h4 className="font-semibold text-neutral-900 dark:text-white mb-3">Payment method</h4>
      <RadioGroup name="payment" className="space-y-3">
        <Radio value="card" className="flex items-center gap-3 p-2 cursor-pointer">
          <div className="w-8 h-8 rounded bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
            💳
          </div>
          <div>
            <p className="font-medium text-neutral-900 dark:text-white">Credit Card</p>
            <p className="text-sm text-neutral-500">Visa, Mastercard, etc.</p>
          </div>
        </Radio>
        <Radio value="paypal" className="flex items-center gap-3 p-2 cursor-pointer">
          <div className="w-8 h-8 rounded bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
            🏦
          </div>
          <div>
            <p className="font-medium text-neutral-900 dark:text-white">PayPal</p>
            <p className="text-sm text-neutral-500">Pay with your PayPal account</p>
          </div>
        </Radio>
        <Radio value="bank" className="flex items-center gap-3 p-2 cursor-pointer">
          <div className="w-8 h-8 rounded bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
            🏪
          </div>
          <div>
            <p className="font-medium text-neutral-900 dark:text-white">Bank Transfer</p>
            <p className="text-sm text-neutral-500">Direct bank transfer</p>
          </div>
        </Radio>
      </RadioGroup>
    </Card>
  </div>
)

const TabsBasicPreview: React.FC = () => (
  <div className="space-y-4">
    {/* Settings Tabs */}
    <Tabs initial={0}>
      <Tab label="Account">
        <Card elevation="sm" className="mt-4">
          <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">Account Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Avatar src="https://i.pravatar.cc/60?img=3" size="lg" />
              <div>
                <h4 className="font-medium text-neutral-900 dark:text-white">Sarah Chen</h4>
                <p className="text-sm text-neutral-500">sarah@example.com</p>
                <Badge variant="success" className="mt-1">Verified</Badge>
              </div>
            </div>
            <Divider />
            <div className="grid sm:grid-cols-2 gap-4">
              <Input label="First Name" value="Sarah" />
              <Input label="Last Name" value="Chen" />
            </div>
            <Button variant="primary" size="sm">Save Changes</Button>
          </div>
        </Card>
      </Tab>
      <Tab label="Notifications">
        <Card elevation="sm" className="mt-4">
          <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">Notification Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-neutral-900 dark:text-white">Email Notifications</p>
                <p className="text-sm text-neutral-500">Receive updates via email</p>
              </div>
              <Switch checked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-neutral-900 dark:text-white">Push Notifications</p>
                <p className="text-sm text-neutral-500">Browser push notifications</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-neutral-900 dark:text-white">Marketing Emails</p>
                <p className="text-sm text-neutral-500">Promotional content</p>
              </div>
              <Switch />
            </div>
          </div>
        </Card>
      </Tab>
      <Tab label="Security">
        <Card elevation="sm" className="mt-4">
          <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">Security Settings</h3>
          <div className="space-y-4">
            <Alert variant="success">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Two-factor authentication is enabled</span>
              </div>
            </Alert>
            <div className="space-y-2">
              <p className="font-medium text-neutral-900 dark:text-white">Recent Activity</p>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                <p>• Last login: 2 hours ago from Chrome</p>
                <p>• Password changed: 30 days ago</p>
                <p>• Recovery email updated: 45 days ago</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Change Password</Button>
              <Button variant="outline" size="sm">Download Data</Button>
            </div>
          </div>
        </Card>
      </Tab>
    </Tabs>

    {/* Dashboard Tabs */}
    <Tabs initial={0}>
      <Tab label="Overview">
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Card elevation="sm">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <p className="font-medium text-neutral-900 dark:text-white">Revenue</p>
            </div>
            <p className="text-2xl font-bold text-neutral-900 dark:text-white">$24,875</p>
            <p className="text-sm text-neutral-500">+12.5% from last month</p>
          </Card>
          <Card elevation="sm">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5 text-blue-500" />
              <p className="font-medium text-neutral-900 dark:text-white">Users</p>
            </div>
            <p className="text-2xl font-bold text-neutral-900 dark:text-white">1,429</p>
            <p className="text-sm text-neutral-500">+8.2% from last week</p>
          </Card>
        </div>
      </Tab>
      <Tab label="Analytics">
        <div className="mt-4">
          <Alert variant="info">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4" />
              <span>Analytics data is updated every 15 minutes</span>
            </div>
          </Alert>
        </div>
      </Tab>
      <Tab label="Reports">
        <div className="mt-4">
          <Card elevation="sm">
            <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">Generate Report</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <Button variant="outline" size="sm">Weekly</Button>
                <Button variant="outline" size="sm">Monthly</Button>
                <Button variant="primary" size="sm">Quarterly</Button>
              </div>
              <Button variant="primary" size="sm">
                <Upload className="w-3 h-3 mr-1" /> Export PDF
              </Button>
            </div>
          </Card>
        </div>
      </Tab>
    </Tabs>
  </div>
)

const PopoverBasicPreview: React.FC = () => (
  <div className="flex flex-wrap gap-3 items-center">
    <Popover>
      <Button variant="outline" slot="trigger">
        <Settings className="w-4 h-4 mr-2" />
        Settings
      </Button>
      <div className="w-64 p-3">
        <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Quick Settings</h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm">Dark mode</span>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Notifications</span>
            <Switch checked />
          </div>
          <Divider />
          <Button variant="outline" size="sm" className="w-full">
            <Settings className="w-3 h-3 mr-1" />
            All Settings
          </Button>
        </div>
      </div>
    </Popover>

    <Popover>
      <Button variant="primary" slot="trigger">
        <User className="w-4 h-4 mr-2" />
        Profile
      </Button>
      <div className="w-72 p-4">
        <div className="flex items-center gap-3 mb-3">
          <Avatar src="https://i.pravatar.cc/50?img=5" size="md" status="online" />
          <div>
            <p className="font-semibold text-neutral-900 dark:text-white">Alex Smith</p>
            <p className="text-sm text-neutral-500">alex@example.com</p>
          </div>
        </div>
        <Divider />
        <div className="space-y-1 mt-3">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <User className="w-3 h-3 mr-2" />
            View Profile
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <Settings className="w-3 h-3 mr-2" />
            Settings
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <Info className="w-3 h-3 mr-2" />
            Help & Support
          </Button>
          <Divider />
          <Button variant="ghost" size="sm" className="w-full justify-start text-red-600">
            Sign Out
          </Button>
        </div>
      </div>
    </Popover>

    <Popover>
      <Button variant="outline" slot="trigger">
        <Info className="w-4 h-4 mr-2" />
        Info
      </Button>
      <div className="max-w-sm p-3">
        <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Product Information</h4>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3">
          This feature allows you to customize your workflow and improve productivity.
        </p>
        <div className="flex items-center gap-2">
          <Badge variant="success">v2.1</Badge>
          <Badge variant="secondary">New</Badge>
        </div>
      </div>
    </Popover>
  </div>
)

const TableBasicPreview: React.FC = () => (
  <div className="space-y-4">
    {/* User Table */}
    <Card elevation="sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-neutral-900 dark:text-white">Team Members</h3>
        <Button variant="primary" size="sm">
          <User className="w-3 h-3 mr-1" />
          Add User
        </Button>
      </div>
      <Table>
        <th slot="header">User</th>
        <th slot="header">Role</th>
        <th slot="header">Status</th>
        <th slot="header">Actions</th>

        <tr>
          <td>
            <div className="flex items-center gap-3">
              <Avatar src="https://i.pravatar.cc/32?img=1" size="sm" status="online" />
              <div>
                <p className="font-medium text-neutral-900 dark:text-white">Sarah Chen</p>
                <p className="text-sm text-neutral-500">sarah@example.com</p>
              </div>
            </div>
          </td>
          <td><Badge variant="primary">Admin</Badge></td>
          <td><Badge variant="success">Active</Badge></td>
          <td>
            <div className="flex gap-1">
              <Button variant="ghost" size="sm">
                <Eye className="w-3 h-3" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-3 h-3" />
              </Button>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div className="flex items-center gap-3">
              <Avatar src="https://i.pravatar.cc/32?img=2" size="sm" status="away" />
              <div>
                <p className="font-medium text-neutral-900 dark:text-white">Alex Smith</p>
                <p className="text-sm text-neutral-500">alex@example.com</p>
              </div>
            </div>
          </td>
          <td><Badge variant="secondary">Editor</Badge></td>
          <td><Badge variant="warning">Away</Badge></td>
          <td>
            <div className="flex gap-1">
              <Button variant="ghost" size="sm">
                <Eye className="w-3 h-3" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-3 h-3" />
              </Button>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div className="flex items-center gap-3">
              <Avatar src="https://i.pravatar.cc/32?img=3" size="sm" status="busy" />
              <div>
                <p className="font-medium text-neutral-900 dark:text-white">Maria Garcia</p>
                <p className="text-sm text-neutral-500">maria@example.com</p>
              </div>
            </div>
          </td>
          <td><Badge variant="success">Developer</Badge></td>
          <td><Badge variant="error">Busy</Badge></td>
          <td>
            <div className="flex gap-1">
              <Button variant="ghost" size="sm">
                <Eye className="w-3 h-3" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-3 h-3" />
              </Button>
            </div>
          </td>
        </tr>
      </Table>
    </Card>

    {/* Project Table */}
    <Table>
      <th slot="header">Project</th>
      <th slot="header">Status</th>
      <th slot="header">Progress</th>
      <th slot="header">Due Date</th>

      <tr>
        <td>
          <div>
            <p className="font-medium text-neutral-900 dark:text-white">Website Redesign</p>
            <p className="text-sm text-neutral-500">Frontend overhaul</p>
          </div>
        </td>
        <td><Badge variant="warning">In Progress</Badge></td>
        <td>
          <div className="w-full">
            <Progress value={75} max={100} />
            <p className="text-xs text-neutral-500 mt-1">75%</p>
          </div>
        </td>
        <td className="text-neutral-600 dark:text-neutral-300">Dec 15, 2024</td>
      </tr>

      <tr>
        <td>
          <div>
            <p className="font-medium text-neutral-900 dark:text-white">Mobile App</p>
            <p className="text-sm text-neutral-500">iOS & Android</p>
          </div>
        </td>
        <td><Badge variant="success">Completed</Badge></td>
        <td>
          <div className="w-full">
            <Progress value={100} max={100} />
            <p className="text-xs text-neutral-500 mt-1">100%</p>
          </div>
        </td>
        <td className="text-neutral-600 dark:text-neutral-300">Nov 30, 2024</td>
      </tr>

      <tr>
        <td>
          <div>
            <p className="font-medium text-neutral-900 dark:text-white">API Documentation</p>
            <p className="text-sm text-neutral-500">Developer guides</p>
          </div>
        </td>
        <td><Badge variant="secondary">Planning</Badge></td>
        <td>
          <div className="w-full">
            <Progress value={25} max={100} />
            <p className="text-xs text-neutral-500 mt-1">25%</p>
          </div>
        </td>
        <td className="text-neutral-600 dark:text-neutral-300">Jan 20, 2025</td>
      </tr>
    </Table>
  </div>
)

const FormBasicPreview: React.FC = () => (
  <div className="space-y-6">
    {/* Contact Form */}
    <Card elevation="sm">
      <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">Contact Information</h3>
      <Form>
        <FormGroup>
          <div className="grid sm:grid-cols-2 gap-4">
            <Input label="First Name" placeholder="John" required />
            <Input label="Last Name" placeholder="Doe" required />
          </div>
          <Input label="Email Address" type="email" placeholder="john@example.com" required />
          <Input label="Phone Number" placeholder="+1 (555) 123-4567" />
        </FormGroup>

        <FormGroup>
          <Textarea
            label="Message"
            placeholder="Tell us about your project..."
            rows={4}
            helperText="Please provide as much detail as possible"
          />
        </FormGroup>

        <FormGroup>
          <div className="space-y-3">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Preferred Contact Method</p>
            <RadioGroup name="contact-method">
              <Radio value="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </Radio>
              <Radio value="phone" className="flex items-center gap-2">
                📞 Phone
              </Radio>
            </RadioGroup>
          </div>
        </FormGroup>

        <FormGroup>
          <div className="space-y-2">
            <Checkbox>I agree to the terms and conditions</Checkbox>
            <Checkbox>Subscribe to newsletter for updates</Checkbox>
          </div>
        </FormGroup>

        <FormActions>
          <Button variant="outline" type="reset">Clear Form</Button>
          <Button variant="primary" type="submit">
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </Button>
        </FormActions>
      </Form>
    </Card>

    {/* Project Form */}
    <Form>
      <FormGroup>
        <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">Create New Project</h3>
        <Input label="Project Name" placeholder="My Awesome Project" required />
        <Textarea
          label="Description"
          placeholder="Describe your project goals and requirements..."
          rows={3}
        />
      </FormGroup>

      <FormGroup>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Start Date
            </label>
            <DatePicker />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Priority
            </label>
            <RadioGroup name="priority" className="flex gap-4">
              <Radio value="low">
                <Badge variant="secondary">Low</Badge>
              </Radio>
              <Radio value="medium">
                <Badge variant="warning">Medium</Badge>
              </Radio>
              <Radio value="high">
                <Badge variant="error">High</Badge>
              </Radio>
            </RadioGroup>
          </div>
        </div>
      </FormGroup>

      <FormGroup>
        <Switch checked>Enable notifications for this project</Switch>
        <Switch>Make project public</Switch>
      </FormGroup>

      <FormActions>
        <Button variant="ghost">Save as Draft</Button>
        <Button variant="outline" type="reset">Cancel</Button>
        <Button variant="primary" type="submit">Create Project</Button>
      </FormActions>
    </Form>
  </div>
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
          <Check className="w-4 h-4 mr-2" /> Success Toast
        </Button>
        <Button variant="primary" onClick={showNotificationToast}>
          <MessageCircle className="w-4 h-4 mr-2" /> Notification
        </Button>
        <Button variant="outline" onClick={showErrorToast}>
          <X className="w-4 h-4 mr-2" /> Error Toast
        </Button>
      </div>
    </div>
  )
}

// New component previews
const TreeBasicPreview: React.FC = () => (
  <div className="space-y-4">
    {/* File Explorer Tree */}
    <Card elevation="sm">
      <h4 className="font-semibold text-neutral-900 dark:text-white mb-3">Project Structure</h4>
      <Tree>
        <TreeNode label="📁 src" expanded>
          <TreeNode label="📁 components" expanded>
            <TreeNode label="📄 Button.tsx" />
            <TreeNode label="📄 Card.tsx" />
            <TreeNode label="📄 Input.tsx" />
          </TreeNode>
          <TreeNode label="📁 styles" expanded>
            <TreeNode label="📄 global.css" />
            <TreeNode label="📄 components.css" />
          </TreeNode>
          <TreeNode label="📄 index.ts" />
        </TreeNode>
        <TreeNode label="📁 public">
          <TreeNode label="🖼️ logo.svg" />
          <TreeNode label="📄 manifest.json" />
        </TreeNode>
        <TreeNode label="📄 package.json" />
        <TreeNode label="📄 README.md" />
      </Tree>
    </Card>

    {/* Navigation Tree */}
    <Tree>
      <TreeNode label="🏠 Dashboard" expanded>
        <TreeNode label="📊 Analytics" />
        <TreeNode label="📈 Reports" />
        <TreeNode label="⚙️ Settings" />
      </TreeNode>
      <TreeNode label="👥 Users" expanded>
        <TreeNode label="👤 Manage Users" />
        <TreeNode label="🔐 Permissions" />
        <TreeNode label="📧 Invitations" />
      </TreeNode>
      <TreeNode label="🛍️ Products">
        <TreeNode label="📦 Inventory" />
        <TreeNode label="🏷️ Categories" />
        <TreeNode label="💰 Pricing" />
      </TreeNode>
    </Tree>
  </div>
)

const DatePickerBasicPreview: React.FC = () => (
  <div className="space-y-4">
    {/* Event Planning */}
    <Card elevation="sm">
      <h4 className="font-semibold text-neutral-900 dark:text-white mb-4">Schedule Event</h4>
      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              <Calendar className="w-4 h-4 inline mr-1" />
              Start Date
            </label>
            <DatePicker />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              <Calendar className="w-4 h-4 inline mr-1" />
              End Date
            </label>
            <DatePicker />
          </div>
        </div>
        <Alert variant="info">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4" />
            <span>Event duration will be calculated automatically</span>
          </div>
        </Alert>
      </div>
    </Card>

    {/* Booking Form */}
    <div className="grid gap-4 md:grid-cols-2">
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
          Appointment Date
        </label>
        <DatePicker />
        <p className="text-xs text-neutral-500 mt-1">Select your preferred appointment date</p>
      </div>
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
          Follow-up Date
        </label>
        <DatePicker />
        <p className="text-xs text-neutral-500 mt-1">Optional follow-up appointment</p>
      </div>
    </div>
  </div>
)

const SelectBasicPreview: React.FC = () => (
  <div className="space-y-4">
    {/* Basic Select */}
    <div className="grid gap-4 md:grid-cols-2">
      <Select label="Country" placeholder="Select a country">
        <option value="">Choose a country</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
        <option value="au">Australia</option>
        <option value="de">Germany</option>
        <option value="fr">France</option>
        <option value="jp">Japan</option>
      </Select>

      <Select label="Language" placeholder="Select a language">
        <option value="">Choose a language</option>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="zh">Chinese</option>
        <option value="ja">Japanese</option>
      </Select>
    </div>

    {/* Form with Selects */}
    <Card elevation="sm">
      <h4 className="font-semibold text-neutral-900 dark:text-white mb-4">Project Settings</h4>
      <div className="space-y-4">
        <Select label="Project Type" required>
          <option value="">Select project type</option>
          <option value="web">Web Application</option>
          <option value="mobile">Mobile App</option>
          <option value="desktop">Desktop Software</option>
          <option value="api">API Service</option>
          <option value="library">Component Library</option>
        </Select>

        <Select label="Team Size" helperText="Select the size of your development team">
          <option value="">Choose team size</option>
          <option value="solo">Solo Developer</option>
          <option value="small">2-5 Developers</option>
          <option value="medium">6-20 Developers</option>
          <option value="large">20+ Developers</option>
        </Select>

        <Select label="Priority Level">
          <option value="">Set priority</option>
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
          <option value="critical">Critical</option>
        </Select>
      </div>
    </Card>
  </div>
)

const TextareaBetterPreview: React.FC = () => (
  <div className="space-y-4">
    {/* Feedback Form */}
    <Card elevation="sm">
      <h4 className="font-semibold text-neutral-900 dark:text-white mb-4">Share Your Feedback</h4>
      <div className="space-y-4">
        <Textarea
          label="What did you like most?"
          placeholder="Tell us about your favorite features..."
          rows={3}
          helperText="Help us understand what works well"
        />
        <Textarea
          label="What could we improve?"
          placeholder="Suggest improvements or report issues..."
          rows={4}
          helperText="Your suggestions help make our product better"
        />
        <div className="flex gap-2">
          <Button variant="outline">Save Draft</Button>
          <Button variant="primary">
            <Send className="w-4 h-4 mr-2" />
            Submit Feedback
          </Button>
        </div>
      </div>
    </Card>

    {/* Multi-step Form */}
    <div className="grid gap-4">
      <Textarea
        label="Project Description"
        placeholder="Describe your project goals, requirements, and timeline..."
        rows={4}
        helperText="Be as detailed as possible to help us provide accurate estimates"
      />
      <div className="grid sm:grid-cols-2 gap-4">
        <Textarea
          label="Technical Requirements"
          placeholder="List any specific technologies or integrations needed..."
          rows={3}
          helperText="Include frameworks, APIs, or third-party services"
        />
        <Textarea
          label="Additional Notes"
          placeholder="Any other important information..."
          rows={3}
          helperText="Optional but helpful context"
        />
      </div>
    </div>
  </div>
)

const TooltipPreview: React.FC = () => (
  <div className="flex flex-wrap gap-4 items-center">
    <Tooltip text="This is a helpful tooltip" placement="top">
      <Button variant="primary">Hover for tooltip</Button>
    </Tooltip>
    <Tooltip text="Tooltip on the right" placement="right">
      <Button variant="outline">Right tooltip</Button>
    </Tooltip>
    <Tooltip text="Bottom positioned tooltip with more text" placement="bottom">
      <Button variant="secondary">Bottom tooltip</Button>
    </Tooltip>
  </div>
)

const SidebarPreview: React.FC = () => (
  <div className="flex h-64 border border-neutral-200 rounded-lg overflow-hidden">
    <Sidebar aria-label="Navigation example">
      <div slot="header">Navigation</div>
      <div slot="menu">
        <a href="#" className="block py-1 px-2 text-sm hover:bg-neutral-100 rounded">Dashboard</a>
        <a href="#" className="block py-1 px-2 text-sm hover:bg-neutral-100 rounded">Components</a>
        <a href="#" className="block py-1 px-2 text-sm hover:bg-neutral-100 rounded">Settings</a>
      </div>
    </Sidebar>
    <div className="flex-1 p-4 bg-neutral-50">
      <h3 className="font-medium mb-2">Main Content</h3>
      <p className="text-sm text-neutral-600">Content area next to sidebar.</p>
    </div>
  </div>
)

const ToastPreview: React.FC = () => {
  const showToast = (variant: string, message: string) => {
    // This is a simplified example - in actual implementation
    // you'd use the toast container properly
    alert(`${variant.toUpperCase()}: ${message}`)
  }

  return (
    <div className="flex flex-wrap gap-3">
      <Button
        variant="primary"
        onClick={() => showToast('success', 'Operation completed successfully!')}
      >
        Show Success Toast
      </Button>
      <Button
        variant="danger"
        onClick={() => showToast('error', 'Something went wrong!')}
      >
        Show Error Toast
      </Button>
      <Button
        variant="outline"
        onClick={() => showToast('info', 'Information message')}
      >
        Show Info Toast
      </Button>
    </div>
  )
}

const GridPreview: React.FC = () => (
  <div className="space-y-4">
    <Row>
      <Col span={6}>
        <div className="bg-blue-100 p-3 text-center rounded">Col 6</div>
      </Col>
      <Col span={6}>
        <div className="bg-purple-100 p-3 text-center rounded">Col 6</div>
      </Col>
    </Row>
    <Row>
      <Col span={4}>
        <div className="bg-green-100 p-3 text-center rounded">Col 4</div>
      </Col>
      <Col span={8}>
        <div className="bg-orange-100 p-3 text-center rounded">Col 8</div>
      </Col>
    </Row>
    <Row>
      <Col span={3}>
        <div className="bg-pink-100 p-3 text-center rounded">Col 3</div>
      </Col>
      <Col span={3}>
        <div className="bg-yellow-100 p-3 text-center rounded">Col 3</div>
      </Col>
      <Col span={3}>
        <div className="bg-indigo-100 p-3 text-center rounded">Col 3</div>
      </Col>
      <Col span={3}>
        <div className="bg-red-100 p-3 text-center rounded">Col 3</div>
      </Col>
    </Row>
  </div>
)

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
  },
  {
    slug: 'badge',
    name: 'Badge',
    category: 'Basics',
    description: 'Small status or count indicator in multiple variants.',
    Preview: BadgeVariantsPreview,
    code: {
      react: `import { Badge } from 'maxzilla-ui-react'

<Badge variant="primary">New</Badge>`,
      html: `<mz-badge variant="primary">New</mz-badge>`
    },
    sections: [
      {
        id: 'variants',
        title: 'Badge Variants',
        Preview: BadgeVariantsPreview,
        code: {
          react: `import { Badge } from 'maxzilla-ui-react'
import { TrendingUp, Star } from 'lucide-react'

<div className="flex flex-wrap gap-2 items-center">
  <Badge variant="success">
    <span className="mr-1">•</span> Online
  </Badge>
  <Badge variant="warning">
    <TrendingUp className="w-3 h-3 mr-1" /> Trending
  </Badge>
  <Badge variant="error">
    <span className="mr-1 text-red-500">•</span> Live
  </Badge>
  <Badge variant="primary">
    <Star className="w-3 h-3 mr-1" /> New
  </Badge>
  <Badge variant="secondary">Beta</Badge>
</div>`,
          html: `<div class="flex flex-wrap gap-2 items-center">
  <mz-badge variant="success">
    <span class="mr-1">•</span> Online
  </mz-badge>
  <mz-badge variant="warning">
    🔥 Trending
  </mz-badge>
  <mz-badge variant="error">
    <span class="mr-1 text-red-500">•</span> Live
  </mz-badge>
  <mz-badge variant="primary">
    ⭐ New
  </mz-badge>
  <mz-badge variant="secondary">Beta</mz-badge>
</div>`
        }
      },
      {
        id: 'counts',
        title: 'Count Badges',
        Preview: BadgeCountsPreview,
        code: {
          react: `import { Badge } from 'maxzilla-ui-react'

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
</div>`,
          html: `<div class="flex items-center gap-4">
  <div class="flex items-center gap-2">
    <span class="text-neutral-600 dark:text-neutral-300">Messages</span>
    <mz-badge variant="primary">24</mz-badge>
  </div>
  <div class="flex items-center gap-2">
    <span class="text-neutral-600 dark:text-neutral-300">Notifications</span>
    <mz-badge variant="error">3</mz-badge>
  </div>
  <div class="flex items-center gap-2">
    <span class="text-neutral-600 dark:text-neutral-300">Updates</span>
    <mz-badge variant="success">12</mz-badge>
  </div>
</div>`
        }
      },
      {
        id: 'with-user',
        title: 'With User Profile',
        Preview: BadgeWithUserPreview,
        code: {
          react: `import { Badge, Avatar } from 'maxzilla-ui-react'

<div className="flex items-center gap-3">
  <Avatar src="https://i.pravatar.cc/40?img=7" size="sm" />
  <span className="font-medium text-neutral-900 dark:text-white">John Doe</span>
  <Badge variant="secondary">Admin</Badge>
  <Badge variant="success">Pro</Badge>
</div>`,
          html: `<div class="flex items-center gap-3">
  <mz-avatar src="https://i.pravatar.cc/40?img=7" size="sm"></mz-avatar>
  <span class="font-medium text-neutral-900 dark:text-white">John Doe</span>
  <mz-badge variant="secondary">Admin</mz-badge>
  <mz-badge variant="success">Pro</mz-badge>
</div>`
        }
      }
    ]
  },
  {
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
  },
  {
    slug: 'card',
    name: 'Card',
    category: 'Data Display',
    description: 'Surface container with elevation variants and slots.',
    Preview: CardDefaultPreview,
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
        id: 'default',
        title: 'Default Card',
        Preview: CardDefaultPreview,
        code: {
          react: `import { Card } from 'maxzilla-ui-react'

<Card>
  <h3 className="font-semibold mb-2">Default Card</h3>
  <p className="text-sm text-neutral-600 dark:text-neutral-400">Basic card with default styling and content.</p>
</Card>`,
          html: `<mz-card>
  <h3>Default Card</h3>
  <p>Basic card with default styling and content.</p>
</mz-card>`
        }
      },
      {
        id: 'outlined',
        title: 'Outlined Card',
        Preview: CardOutlinedPreview,
        code: {
          react: `import { Card } from 'maxzilla-ui-react'

<Card variant="outlined">
  <h3 className="font-semibold mb-2">Outlined Card</h3>
  <p className="text-sm text-neutral-600 dark:text-neutral-400">Card with border styling for subtle separation.</p>
</Card>`,
          html: `<mz-card variant="outlined">
  <h3>Outlined Card</h3>
  <p>Card with border styling for subtle separation.</p>
</mz-card>`
        }
      },
      {
        id: 'elevated',
        title: 'Elevated Card',
        Preview: CardElevatedPreview,
        code: {
          react: `import { Card } from 'maxzilla-ui-react'

<Card variant="elevated">
  <h3 className="font-semibold mb-2">Elevated Card</h3>
  <p className="text-sm text-neutral-600 dark:text-neutral-400">Card with shadow elevation for emphasis.</p>
</Card>`,
          html: `<mz-card variant="elevated">
  <h3>Elevated Card</h3>
  <p>Card with shadow elevation for emphasis.</p>
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
        id: 'revenue-stats',
        title: 'Revenue Stats Card',
        Preview: CardRevenueStatsPreview,
        code: {
          react: `import { Card, Badge } from 'maxzilla-ui-react'
import { TrendingUp } from 'lucide-react'

<Card elevation="md" variant="elevated">
  <div className="flex items-center gap-4 mb-4">
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white">
      <TrendingUp className="w-6 h-6" />
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
</Card>`,
          html: `<mz-card elevation="md" variant="elevated">
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
</mz-card>`
        }
      },
      {
        id: 'users-stats',
        title: 'Users Stats Card',
        Preview: CardUsersStatsPreview,
        code: {
          react: `import { Card, Badge } from 'maxzilla-ui-react'
import { Users } from 'lucide-react'

<Card elevation="md" variant="elevated">
  <div className="flex items-center gap-4 mb-4">
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white">
      <Users className="w-6 h-6" />
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
          html: `<mz-card elevation="md" variant="elevated">
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
    Preview: AvatarGroupPreview,
    code: {
      react: `import { Avatar } from 'maxzilla-ui-react'

<Avatar src="/user.png" size="md" />`,
      html: `<mz-avatar src="/user.png" size="md"></mz-avatar>`
    },
    sections: [
      {
        id: 'group',
        title: 'Avatar Group',
        Preview: AvatarGroupPreview,
        code: {
          react: `import { Avatar } from 'maxzilla-ui-react'

<div className="flex items-center -space-x-2">
  <Avatar src="https://i.pravatar.cc/80?img=1" size="lg" status="online" />
  <Avatar src="https://i.pravatar.cc/80?img=2" size="lg" status="busy" />
  <Avatar src="https://i.pravatar.cc/80?img=3" size="lg" status="away" />
  <Avatar initials="+5" size="lg" />
</div>`,
          html: `<div class="flex items-center -space-x-2">
  <mz-avatar src="https://i.pravatar.cc/80?img=1" size="lg" status="online"></mz-avatar>
  <mz-avatar src="https://i.pravatar.cc/80?img=2" size="lg" status="busy"></mz-avatar>
  <mz-avatar src="https://i.pravatar.cc/80?img=3" size="lg" status="away"></mz-avatar>
  <mz-avatar initials="+5" size="lg"></mz-avatar>
</div>`
        }
      },
      {
        id: 'with-info',
        title: 'With User Info',
        Preview: AvatarWithInfoPreview,
        code: {
          react: `import { Avatar, Badge } from 'maxzilla-ui-react'

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
</div>`,
          html: `<div class="flex items-center gap-4">
  <mz-avatar src="https://i.pravatar.cc/100?img=8" size="xl" status="online"></mz-avatar>
  <div>
    <h4 class="font-semibold text-neutral-900 dark:text-white">Emily Rodriguez</h4>
    <p class="text-sm text-neutral-500 dark:text-neutral-400">Senior Developer</p>
    <div class="flex gap-2 mt-2">
      <mz-badge variant="success">Active</mz-badge>
      <mz-badge variant="primary">Pro</mz-badge>
    </div>
  </div>
</div>`
        }
      }
    ]
  },
  {
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
  {
    slug: 'textarea',
    name: 'Textarea',
    category: 'Forms',
    description: 'Multi-line text input with comprehensive features.',
    Preview: TextareaBetterPreview,
    code: {
      react: `import { Textarea, Button, Card } from 'maxzilla-ui-react'
import { Send } from 'lucide-react'

<Textarea
  label="What did you like most?"
  placeholder="Tell us about your favorite features..."
  rows={3}
  helperText="Help us understand what works well"
/>

<Textarea
  label="Project Description"
  placeholder="Describe your project goals, requirements, and timeline..."
  rows={4}
  helperText="Be as detailed as possible to help us provide accurate estimates"
/>`,
      html: `<mz-textarea label="Bio" rows="3" placeholder="Tell us about yourself..."></mz-textarea>

<mz-textarea
  label="Message"
  rows="4"
  placeholder="Your message..."
  helper-text="Please provide details"
></mz-textarea>`
    }
  }
  ,
  { slug: 'navbar', name: 'Navbar', category: 'Navigation', description: 'Top navigation with brand and menu slots.', Preview: NavbarPreview, code: { react: `<Navbar><span slot="brand">Brand</span><a slot="menu">Item</a></Navbar>`, html: `<mz-navbar><span slot="brand">Brand</span><a slot="menu">Item</a></mz-navbar>` } },
  { slug: 'breadcrumb', name: 'Breadcrumb', category: 'Navigation', description: 'Path navigation with separators and current item.', Preview: BreadcrumbPreview, code: { react: `<Breadcrumb><BreadcrumbItem href="/">Home</BreadcrumbItem><BreadcrumbItem current>Page</BreadcrumbItem></Breadcrumb>`, html: `<mz-breadcrumb><mz-breadcrumb-item href="/">Home</mz-breadcrumb-item><mz-breadcrumb-item current>Page</mz-breadcrumb-item></mz-breadcrumb>` } },
  { slug: 'drawer', name: 'Drawer', category: 'Navigation', description: 'Side panel overlay with scrim and placement.', Preview: DrawerPreview, code: { react: `<Drawer open>...</Drawer>`, html: `<mz-drawer open>...</mz-drawer>` } },
  {
    slug: 'radiogroup',
    name: 'Radio Group',
    category: 'Forms',
    description: 'Single selection among multiple options with rich styling.',
    Preview: RadioBasicPreview,
    code: {
      react: `import { RadioGroup, Radio, Badge } from 'maxzilla-ui-react'

<RadioGroup name="plan">
  <Radio value="basic">
    <div className="flex items-center justify-between w-full">
      <div>
        <p className="font-medium">Basic</p>
        <p className="text-sm text-neutral-500">Free forever</p>
      </div>
      <Badge variant="secondary">$0</Badge>
    </div>
  </Radio>
  <Radio value="pro">
    <div className="flex items-center justify-between w-full">
      <div>
        <p className="font-medium">Pro</p>
        <p className="text-sm text-neutral-500">Perfect for professionals</p>
      </div>
      <Badge variant="primary">$29/mo</Badge>
    </div>
  </Radio>
</RadioGroup>`,
      html: `<mz-radio-group name="plan">
  <mz-radio value="basic">Basic Plan</mz-radio>
  <mz-radio value="pro">Pro Plan</mz-radio>
</mz-radio-group>`
    }
  },
  {
    slug: 'tabs',
    name: 'Tabs',
    category: 'Data Display',
    description: 'Tabbed interface with rich content panels.',
    Preview: TabsBasicPreview,
    code: {
      react: `import { Tabs, Tab, Card, Input, Switch, Alert } from 'maxzilla-ui-react'

<Tabs initial={0}>
  <Tab label="Account">
    <Card elevation="sm" className="mt-4">
      <h3 className="font-semibold mb-4">Account Settings</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        <Input label="First Name" value="Sarah" />
        <Input label="Last Name" value="Chen" />
      </div>
    </Card>
  </Tab>
  <Tab label="Notifications">
    <Card elevation="sm" className="mt-4">
      <h3 className="font-semibold mb-4">Notification Preferences</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Email Notifications</p>
            <p className="text-sm text-neutral-500">Receive updates via email</p>
          </div>
          <Switch checked />
        </div>
      </div>
    </Card>
  </Tab>
</Tabs>`,
      html: `<mz-tabs initial="0">
  <mz-tab label="Account">Account content</mz-tab>
  <mz-tab label="Settings">Settings content</mz-tab>
</mz-tabs>`
    }
  },
  {
    slug: 'popover',
    name: 'Popover',
    category: 'Overlays',
    description: 'Rich contextual content anchored to a trigger.',
    Preview: PopoverBasicPreview,
    code: {
      react: `import { Popover, Button, Switch, Avatar } from 'maxzilla-ui-react'
import { Settings, User } from 'lucide-react'

<Popover>
  <Button variant="outline" slot="trigger">
    <Settings className="w-4 h-4 mr-2" />
    Settings
  </Button>
  <div className="w-64 p-3">
    <h4 className="font-semibold mb-2">Quick Settings</h4>
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm">Dark mode</span>
        <Switch />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm">Notifications</span>
        <Switch checked />
      </div>
    </div>
  </div>
</Popover>`,
      html: `<mz-popover>
  <mz-button slot="trigger">Open</mz-button>
  <div>Popover content</div>
</mz-popover>`
    }
  },
  {
    slug: 'table',
    name: 'Table',
    category: 'Data Display',
    description: 'Semantic table with rich data presentation.',
    Preview: TableBasicPreview,
    code: {
      react: `import { Table, Avatar, Badge, Button, Progress } from 'maxzilla-ui-react'
import { Eye, Settings } from 'lucide-react'

<Table>
  <th slot="header">User</th>
  <th slot="header">Role</th>
  <th slot="header">Status</th>
  <th slot="header">Actions</th>

  <tr>
    <td>
      <div className="flex items-center gap-3">
        <Avatar src="https://i.pravatar.cc/32?img=1" size="sm" status="online" />
        <div>
          <p className="font-medium">Sarah Chen</p>
          <p className="text-sm text-neutral-500">sarah@example.com</p>
        </div>
      </div>
    </td>
    <td><Badge variant="primary">Admin</Badge></td>
    <td><Badge variant="success">Active</Badge></td>
    <td>
      <div className="flex gap-1">
        <Button variant="ghost" size="sm">
          <Eye className="w-3 h-3" />
        </Button>
        <Button variant="ghost" size="sm">
          <Settings className="w-3 h-3" />
        </Button>
      </div>
    </td>
  </tr>
</Table>`,
      html: `<mz-table>
  <th slot="header">Name</th>
  <th slot="header">Role</th>
  <tr><td>Ada</td><td>Engineer</td></tr>
  <tr><td>Linus</td><td>Maintainer</td></tr>
</mz-table>`
    }
  },
  {
    slug: 'form',
    name: 'Form',
    category: 'Forms',
    description: 'Form container with comprehensive field types.',
    Preview: FormBasicPreview,
    code: {
      react: `import { Form, FormGroup, FormActions, Input, Textarea, RadioGroup, Radio, Checkbox, Button } from 'maxzilla-ui-react'
import { Send, Mail } from 'lucide-react'

<Form>
  <FormGroup>
    <div className="grid sm:grid-cols-2 gap-4">
      <Input label="First Name" placeholder="John" required />
      <Input label="Last Name" placeholder="Doe" required />
    </div>
    <Input label="Email Address" type="email" placeholder="john@example.com" required />
  </FormGroup>

  <FormGroup>
    <Textarea
      label="Message"
      placeholder="Tell us about your project..."
      rows={4}
      helperText="Please provide as much detail as possible"
    />
  </FormGroup>

  <FormGroup>
    <RadioGroup name="contact-method">
      <Radio value="email" className="flex items-center gap-2">
        <Mail className="w-4 h-4" />
        Email
      </Radio>
      <Radio value="phone" className="flex items-center gap-2">
        📞 Phone
      </Radio>
    </RadioGroup>
  </FormGroup>

  <FormActions>
    <Button variant="outline" type="reset">Clear Form</Button>
    <Button variant="primary" type="submit">
      <Send className="w-4 h-4 mr-2" />
      Send Message
    </Button>
  </FormActions>
</Form>`,
      html: `<mz-form>
  <mz-form-group>
    <mz-input label="First Name"></mz-input>
    <mz-input label="Last Name"></mz-input>
  </mz-form-group>
  <mz-form-actions>
    <mz-button type="reset">Reset</mz-button>
    <mz-button variant="primary" type="submit">Submit</mz-button>
  </mz-form-actions>
</mz-form>`
    }
  },
  {
    slug: 'pagination',
    name: 'Pagination',
    category: 'Data Display',
    description: 'Page navigation with prev/next and pages.',
    Preview: PaginationPreview,
    code: {
      react: `import { Pagination } from 'maxzilla-ui-react'

<Pagination total={120} pageSize={10} current={1} />`,
      html: `<mz-pagination total="120" page-size="10" current="1"></mz-pagination>`
    }
  },
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
  { slug: 'toastcontainer', name: 'Toast Container', category: 'Overlays', description: 'Toast stack/queue with variants and timing.', Preview: ToastContainerPreview, code: { react: `<ToastContainer ref={setRef} />`, html: `<mz-toast-container></mz-toast-container>` } },
  {
    slug: 'tree',
    name: 'Tree',
    category: 'Data Display',
    description: 'Hierarchical tree structure with expand/collapse.',
    Preview: TreeBasicPreview,
    code: {
      react: `import { Tree, TreeNode, Card } from 'maxzilla-ui-react'

<Tree>
  <TreeNode label="📁 src" expanded>
    <TreeNode label="📁 components" expanded>
      <TreeNode label="📄 Button.tsx" />
      <TreeNode label="📄 Card.tsx" />
      <TreeNode label="📄 Input.tsx" />
    </TreeNode>
    <TreeNode label="📁 styles" expanded>
      <TreeNode label="📄 global.css" />
      <TreeNode label="📄 components.css" />
    </TreeNode>
    <TreeNode label="📄 index.ts" />
  </TreeNode>
  <TreeNode label="📁 public">
    <TreeNode label="🖼️ logo.svg" />
    <TreeNode label="📄 manifest.json" />
  </TreeNode>
  <TreeNode label="📄 package.json" />
</Tree>`,
      html: `<mz-tree>
  <mz-tree-node label="src" expanded>
    <mz-tree-node label="components">
      <mz-tree-node label="Button.tsx"></mz-tree-node>
      <mz-tree-node label="Card.tsx"></mz-tree-node>
    </mz-tree-node>
    <mz-tree-node label="index.ts"></mz-tree-node>
  </mz-tree-node>
</mz-tree>`
    }
  },
  {
    slug: 'datepicker',
    name: 'Date Picker',
    category: 'Forms',
    description: 'Calendar-based date selection input.',
    Preview: DatePickerBasicPreview,
    code: {
      react: `import { DatePicker, Card, Alert } from 'maxzilla-ui-react'
import { Calendar, Info } from 'lucide-react'

<Card elevation="sm">
  <h4 className="font-semibold mb-4">Schedule Event</h4>
  <div className="space-y-4">
    <div className="grid sm:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium mb-2">
          <Calendar className="w-4 h-4 inline mr-1" />
          Start Date
        </label>
        <DatePicker />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">
          <Calendar className="w-4 h-4 inline mr-1" />
          End Date
        </label>
        <DatePicker />
      </div>
    </div>
    <Alert variant="info">
      <div className="flex items-center gap-2">
        <Info className="w-4 h-4" />
        <span>Event duration will be calculated automatically</span>
      </div>
    </Alert>
  </div>
</Card>`,
      html: `<mz-date-picker></mz-date-picker>

<label>Appointment Date</label>
<mz-date-picker></mz-date-picker>`
    }
  },
  {
    slug: 'select',
    name: 'Select',
    category: 'Forms',
    description: 'Dropdown selection input with options.',
    Preview: SelectBasicPreview,
    code: {
      react: `import { Select } from 'maxzilla-ui-react'

<Select label="Country" placeholder="Select a country">
  <option value="">Choose a country</option>
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
  <option value="ca">Canada</option>
  <option value="au">Australia</option>
</Select>

<Select label="Project Type" required>
  <option value="">Select project type</option>
  <option value="web">Web Application</option>
  <option value="mobile">Mobile App</option>
  <option value="api">API Service</option>
</Select>`,
      html: `<mz-select label="Country" placeholder="Select a country">
  <option value="">Choose a country</option>
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
  <option value="ca">Canada</option>
</mz-select>

<mz-select label="Project Type" required>
  <option value="">Select project type</option>
  <option value="web">Web Application</option>
  <option value="mobile">Mobile App</option>
  <option value="api">API Service</option>
</mz-select>`
    }
  },
  {
    slug: 'tooltip',
    name: 'Tooltip',
    category: 'Overlays',
    description: 'Contextual information overlay on hover or focus.',
    Preview: TooltipPreview,
    code: {
      react: `import { Tooltip, Button } from 'maxzilla-ui-react'

<Tooltip text="Helpful information" placement="top">
  <Button>Hover me</Button>
</Tooltip>

<Tooltip text="More details here" placement="right">
  <span>Right tooltip</span>
</Tooltip>`,
      html: `<mz-tooltip text="Helpful information" placement="top">
  <button>Hover me</button>
</mz-tooltip>

<mz-tooltip text="More details here" placement="right">
  <span>Right tooltip</span>
</mz-tooltip>`
    }
  },
  {
    slug: 'sidebar',
    name: 'Sidebar',
    category: 'Navigation',
    description: 'Vertical navigation panel with header and menu slots.',
    Preview: SidebarPreview,
    code: {
      react: `import { Sidebar } from 'maxzilla-ui-react'

<Sidebar aria-label="Main navigation">
  <div slot="header">Navigation</div>
  <div slot="menu">
    <a href="/dashboard">Dashboard</a>
    <a href="/components">Components</a>
    <a href="/settings">Settings</a>
  </div>
</Sidebar>`,
      html: `<mz-sidebar aria-label="Main navigation">
  <div slot="header">Navigation</div>
  <div slot="menu">
    <a href="/dashboard">Dashboard</a>
    <a href="/components">Components</a>
    <a href="/settings">Settings</a>
  </div>
</mz-sidebar>`
    }
  },
  {
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
  },
  {
    slug: 'grid',
    name: 'Grid',
    category: 'Layout',
    description: '12-column grid system with Row and Col components.',
    Preview: GridPreview,
    code: {
      react: `import { Row, Col } from 'maxzilla-ui-react'

<Row>
  <Col span={6}>Column 1</Col>
  <Col span={6}>Column 2</Col>
</Row>

<Row>
  <Col span={4}>Sidebar</Col>
  <Col span={8}>Main content</Col>
</Row>`,
      html: `<mz-row>
  <mz-col span="6">Column 1</mz-col>
  <mz-col span="6">Column 2</mz-col>
</mz-row>

<mz-row>
  <mz-col span="4">Sidebar</mz-col>
  <mz-col span="8">Main content</mz-col>
</mz-row>`
    }
  }
]

export function byCategory(category: ComponentCategory) {
  return registry.filter((r) => r.category === category)
}

export function findBySlug(slug: string) {
  return registry.find((r) => r.slug === slug)
}
