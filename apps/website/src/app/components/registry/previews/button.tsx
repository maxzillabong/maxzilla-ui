import React from 'react'
import { Button, Badge, Input, Card, Avatar, Modal, Accordion, AccordionItem, Divider, Stack, Container, Checkbox, Switch, Textarea, Navbar, Breadcrumb, BreadcrumbItem, Drawer, RadioGroup, Radio, Tabs, Tab, Popover, Table, Form, FormGroup, FormActions, Pagination, Alert, Progress, Loading, ToastContainer, Tree, TreeNode, DatePicker, Select, Tooltip, Sidebar, Toast, Row, Col } from 'maxzilla-ui-react'
import { Rocket, BookOpen, Star, Github, Mail, Search, TrendingUp, Users, Check, AlertTriangle, X, Info, Upload, Settings, Moon, Bell, Lock, Zap, ChevronRight, Home, User, ChevronDown, Calendar, Send, Eye, MessageCircle, Trash2 } from 'lucide-react'

export const ButtonVariantsPreview: React.FC = () => (
  <div className="flex flex-wrap gap-3 items-center">
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="danger">Danger</Button>
  </div>
)


export const ButtonSizesPreview: React.FC = () => (
  <div className="space-y-4">
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-4">
        <Button variant="primary" size="sm">Small Button</Button>
        <code className="text-sm text-neutral-600 dark:text-neutral-400">size="sm"</code>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="primary" size="md">Medium Button</Button>
        <code className="text-sm text-neutral-600 dark:text-neutral-400">size="md"</code>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="primary" size="lg">Large Button</Button>
        <code className="text-sm text-neutral-600 dark:text-neutral-400">size="lg"</code>
      </div>
    </div>
  </div>
)


export const ButtonWithIconsPreview: React.FC = () => (
  <div className="flex flex-wrap gap-3 items-center">
    <Button variant="primary" size="lg">
      <Rocket className="w-4 h-4 mr-2" />
      Get Started
    </Button>
    <Button variant="secondary" size="lg">
      <BookOpen className="w-4 h-4 mr-2" />
      Documentation
    </Button>
    <Button variant="outline" size="lg">
      <Star className="w-4 h-4 mr-2" />
      Star on GitHub
    </Button>
  </div>
)


export const ButtonStatesPreview: React.FC = () => (
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

