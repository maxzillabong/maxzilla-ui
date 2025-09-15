import React from 'react'
import { Button, Badge, Input, Card, Avatar, Modal, Accordion, AccordionItem, Divider, Stack, Container, Checkbox, Switch, Textarea, Navbar, Breadcrumb, BreadcrumbItem, Drawer, RadioGroup, Radio, Tabs, Tab, Popover, Table, Form, FormGroup, FormActions, Pagination, Alert, Progress, Loading, ToastContainer, Tree, TreeNode, DatePicker, Select, Tooltip, Sidebar, Toast, Row, Col } from 'maxzilla-ui-react'
import { Rocket, BookOpen, Star, Github, Mail, Search, TrendingUp, Users, Check, AlertTriangle, X, Info, Upload, Settings, Moon, Bell, Lock, Zap, ChevronRight, Home, User, ChevronDown, Calendar, Send, Eye, MessageCircle, Trash2 } from 'lucide-react'

export const PopoverSettingsPreview: React.FC = () => (
  <div className="flex justify-center">
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
  </div>
)


export const PopoverProfilePreview: React.FC = () => (
  <div className="flex justify-center">
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
  </div>
)


export const PopoverInfoPreview: React.FC = () => (
  <div className="flex justify-center">
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

