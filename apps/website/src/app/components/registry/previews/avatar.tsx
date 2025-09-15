import React from 'react'
import { Button, Badge, Input, Card, Avatar, Modal, Accordion, AccordionItem, Divider, Stack, Container, Checkbox, Switch, Textarea, Navbar, Breadcrumb, BreadcrumbItem, Drawer, RadioGroup, Radio, Tabs, Tab, Popover, Table, Form, FormGroup, FormActions, Pagination, Alert, Progress, Loading, ToastContainer, Tree, TreeNode, DatePicker, Select, Tooltip, Sidebar, Toast, Row, Col } from 'maxzilla-ui-react'
import { Rocket, BookOpen, Star, Github, Mail, Search, TrendingUp, Users, Check, AlertTriangle, X, Info, Upload, Settings, Moon, Bell, Lock, Zap, ChevronRight, Home, User, ChevronDown, Calendar, Send, Eye, MessageCircle, Trash2 } from 'lucide-react'

export const AvatarGroupPreview: React.FC = () => (
  <div className="flex items-center -space-x-2">
    <Avatar src="https://i.pravatar.cc/80?img=1" size="lg" status="online" />
    <Avatar src="https://i.pravatar.cc/80?img=2" size="lg" status="busy" />
    <Avatar src="https://i.pravatar.cc/80?img=3" size="lg" status="away" />
    <Avatar initials="+5" size="lg" />
  </div>
)


export const AvatarWithInfoPreview: React.FC = () => (
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

