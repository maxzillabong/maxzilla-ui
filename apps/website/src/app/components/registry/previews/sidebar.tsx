import React from 'react'
import { Button, Badge, Input, Card, Avatar, Modal, Accordion, AccordionItem, Divider, Stack, Container, Checkbox, Switch, Textarea, Navbar, Breadcrumb, BreadcrumbItem, Drawer, RadioGroup, Radio, Tabs, Tab, Popover, Table, Form, FormGroup, FormActions, Pagination, Alert, Progress, Loading, ToastContainer, Tree, TreeNode, DatePicker, Select, Tooltip, Sidebar, Toast, Row, Col } from 'maxzilla-ui-react'
import { Rocket, BookOpen, Star, Github, Mail, Search, TrendingUp, Users, Check, AlertTriangle, X, Info, Upload, Settings, Moon, Bell, Lock, Zap, ChevronRight, Home, User, ChevronDown, Calendar, Send, Eye, MessageCircle, Trash2 } from 'lucide-react'

export const SidebarPreview: React.FC = () => (
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

