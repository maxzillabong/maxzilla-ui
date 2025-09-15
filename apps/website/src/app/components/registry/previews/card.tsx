import React from 'react'
import { Button, Badge, Input, Card, Avatar, Modal, Accordion, AccordionItem, Divider, Stack, Container, Checkbox, Switch, Textarea, Navbar, Breadcrumb, BreadcrumbItem, Drawer, RadioGroup, Radio, Tabs, Tab, Popover, Table, Form, FormGroup, FormActions, Pagination, Alert, Progress, Loading, ToastContainer, Tree, TreeNode, DatePicker, Select, Tooltip, Sidebar, Toast, Row, Col } from 'maxzilla-ui-react'
import { Rocket, BookOpen, Star, Github, Mail, Search, TrendingUp, Users, Check, AlertTriangle, X, Info, Upload, Settings, Moon, Bell, Lock, Zap, ChevronRight, Home, User, ChevronDown, Calendar, Send, Eye, MessageCircle, Trash2 } from 'lucide-react'

export const CardDefaultPreview: React.FC = () => (
  <div className="max-w-md">
    <Card>
      <h3 className="font-semibold mb-2">Default Card</h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">Basic card with default styling and content.</p>
    </Card>
  </div>
)


export const CardOutlinedPreview: React.FC = () => (
  <div className="max-w-md">
    <Card variant="outlined">
      <h3 className="font-semibold mb-2">Outlined Card</h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">Card with border styling for subtle separation.</p>
    </Card>
  </div>
)


export const CardElevatedPreview: React.FC = () => (
  <div className="max-w-md">
    <Card variant="elevated">
      <h3 className="font-semibold mb-2">Elevated Card</h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">Card with shadow elevation for emphasis.</p>
    </Card>
  </div>
)


export const CardProfilePreview: React.FC = () => (
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


export const CardRevenueStatsPreview: React.FC = () => (
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


export const CardUsersStatsPreview: React.FC = () => (
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

