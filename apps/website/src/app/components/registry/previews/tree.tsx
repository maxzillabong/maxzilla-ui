import React from 'react'
import { Button, Badge, Input, Card, Avatar, Modal, Accordion, AccordionItem, Divider, Stack, Container, Checkbox, Switch, Textarea, Navbar, Breadcrumb, BreadcrumbItem, Drawer, RadioGroup, Radio, Tabs, Tab, Popover, Table, Form, FormGroup, FormActions, Pagination, Alert, Progress, Loading, ToastContainer, Tree, TreeNode, DatePicker, Select, Tooltip, Sidebar, Toast, Row, Col } from 'maxzilla-ui-react'
import { Rocket, BookOpen, Star, Github, Mail, Search, TrendingUp, Users, Check, AlertTriangle, X, Info, Upload, Settings, Moon, Bell, Lock, Zap, ChevronRight, Home, User, ChevronDown, Calendar, Send, Eye, MessageCircle, Trash2 } from 'lucide-react'

export const TreeBasicPreview: React.FC = () => (
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

