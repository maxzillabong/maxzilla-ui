import React from 'react'
import { Button, Badge, Input, Card, Avatar, Modal, Accordion, AccordionItem, Divider, Stack, Container, Checkbox, Switch, Textarea, Navbar, Breadcrumb, BreadcrumbItem, Drawer, RadioGroup, Radio, Tabs, Tab, Popover, Table, Form, FormGroup, FormActions, Pagination, Alert, Progress, Loading, ToastContainer, Tree, TreeNode, DatePicker, Select, Tooltip, Sidebar, Toast, Row, Col } from 'maxzilla-ui-react'
import { Rocket, BookOpen, Star, Github, Mail, Search, TrendingUp, Users, Check, AlertTriangle, X, Info, Upload, Settings, Moon, Bell, Lock, Zap, ChevronRight, Home, User, ChevronDown, Calendar, Send, Eye, MessageCircle, Trash2 } from 'lucide-react'

export const InputBasicPreview: React.FC = () => (
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


export const InputWithAddonsPreview: React.FC = () => (
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


export const InputSearchPreview: React.FC = () => (
  <div className="relative">
    <Input
      placeholder="Search products, users, and more..."
      className="pl-10"
    />
    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
    <Badge variant="secondary" className="absolute right-3 top-1/2 -translate-y-1/2">⌘K</Badge>
  </div>
)

