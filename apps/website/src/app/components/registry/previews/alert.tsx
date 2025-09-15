import React from 'react'
import { Button, Badge, Input, Card, Avatar, Modal, Accordion, AccordionItem, Divider, Stack, Container, Checkbox, Switch, Textarea, Navbar, Breadcrumb, BreadcrumbItem, Drawer, RadioGroup, Radio, Tabs, Tab, Popover, Table, Form, FormGroup, FormActions, Pagination, Alert, Progress, Loading, ToastContainer, Tree, TreeNode, DatePicker, Select, Tooltip, Sidebar, Toast, Row, Col } from 'maxzilla-ui-react'
import { Rocket, BookOpen, Star, Github, Mail, Search, TrendingUp, Users, Check, AlertTriangle, X, Info, Upload, Settings, Moon, Bell, Lock, Zap, ChevronRight, Home, User, ChevronDown, Calendar, Send, Eye, MessageCircle, Trash2 } from 'lucide-react'

export const AlertPreview: React.FC = () => (
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


export const AlertVariantsPreview: React.FC = () => (
  <div className="space-y-2">
    <Alert variant="success">Success: Saved successfully</Alert>
    <Alert variant="warning">Warning: Be careful</Alert>
    <Alert variant="error">Error: Something went wrong</Alert>
    <Alert variant="info">Info: Heads up</Alert>
  </div>
)

