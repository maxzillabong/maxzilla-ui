import React from 'react'
import { Button, Badge, Input, Card, Avatar, Modal, Accordion, AccordionItem, Divider, Stack, Container, Checkbox, Switch, Textarea, Navbar, Breadcrumb, BreadcrumbItem, Drawer, RadioGroup, Radio, Tabs, Tab, Popover, Table, Form, FormGroup, FormActions, Pagination, Alert, Progress, Loading, ToastContainer, Tree, TreeNode, DatePicker, Select, Tooltip, Sidebar, Toast, Row, Col } from 'maxzilla-ui-react'
import { Rocket, BookOpen, Star, Github, Mail, Search, TrendingUp, Users, Check, AlertTriangle, X, Info, Upload, Settings, Moon, Bell, Lock, Zap, ChevronRight, Home, User, ChevronDown, Calendar, Send, Eye, MessageCircle, Trash2 } from 'lucide-react'

export const NavbarPreview: React.FC = () => (
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

