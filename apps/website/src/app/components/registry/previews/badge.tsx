import React from 'react'
import { Button, Badge, Input, Card, Avatar, Modal, Accordion, AccordionItem, Divider, Stack, Container, Checkbox, Switch, Textarea, Navbar, Breadcrumb, BreadcrumbItem, Drawer, RadioGroup, Radio, Tabs, Tab, Popover, Table, Form, FormGroup, FormActions, Pagination, Alert, Progress, Loading, ToastContainer, Tree, TreeNode, DatePicker, Select, Tooltip, Sidebar, Toast, Row, Col } from 'maxzilla-ui-react'
import { Rocket, BookOpen, Star, Github, Mail, Search, TrendingUp, Users, Check, AlertTriangle, X, Info, Upload, Settings, Moon, Bell, Lock, Zap, ChevronRight, Home, User, ChevronDown, Calendar, Send, Eye, MessageCircle, Trash2 } from 'lucide-react'

export const BadgeVariantsPreview: React.FC = () => (
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


export const BadgeCountsPreview: React.FC = () => (
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


export const BadgeWithUserPreview: React.FC = () => (
  <div className="flex items-center gap-3">
    <Avatar src="https://i.pravatar.cc/40?img=7" size="sm" />
    <span className="font-medium text-neutral-900 dark:text-white">John Doe</span>
    <Badge variant="secondary">Admin</Badge>
    <Badge variant="success">Pro</Badge>
  </div>
)

