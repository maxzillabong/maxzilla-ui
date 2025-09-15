import React from 'react'
import { Button, Badge, Input, Card, Avatar, Modal, Accordion, AccordionItem, Divider, Stack, Container, Checkbox, Switch, Textarea, Navbar, Breadcrumb, BreadcrumbItem, Drawer, RadioGroup, Radio, Tabs, Tab, Popover, Table, Form, FormGroup, FormActions, Pagination, Alert, Progress, Loading, ToastContainer, Tree, TreeNode, DatePicker, Select, Tooltip, Sidebar, Toast, Row, Col } from 'maxzilla-ui-react'
import { Rocket, BookOpen, Star, Github, Mail, Search, TrendingUp, Users, Check, AlertTriangle, X, Info, Upload, Settings, Moon, Bell, Lock, Zap, ChevronRight, Home, User, ChevronDown, Calendar, Send, Eye, MessageCircle, Trash2 } from 'lucide-react'

export const SwitchPreview: React.FC = () => (
  <div className="space-y-4">
    {/* Feature Toggles */}
    <Card elevation="sm">
      <h4 className="font-semibold text-neutral-900 dark:text-white mb-4">Feature Settings</h4>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Moon className="w-6 h-6 text-neutral-600 dark:text-neutral-400" />
            <div>
              <p className="font-medium text-neutral-900 dark:text-white">Dark Mode</p>
              <p className="text-sm text-neutral-500">Use dark theme across the app</p>
            </div>
          </div>
          <Switch checked />
        </div>

        <Divider />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bell className="w-6 h-6 text-neutral-600 dark:text-neutral-400" />
            <div>
              <p className="font-medium text-neutral-900 dark:text-white">Push Notifications</p>
              <p className="text-sm text-neutral-500">Get notified about updates</p>
            </div>
          </div>
          <Switch checked />
        </div>

        <Divider />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Lock className="w-6 h-6 text-neutral-600 dark:text-neutral-400" />
            <div>
              <p className="font-medium text-neutral-900 dark:text-white">Two-Factor Auth</p>
              <p className="text-sm text-neutral-500">Extra security for your account</p>
            </div>
          </div>
          <Switch />
        </div>

        <Divider />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Rocket className="w-6 h-6 text-neutral-600 dark:text-neutral-400" />
            <div>
              <p className="font-medium text-neutral-900 dark:text-white">Beta Features</p>
              <p className="text-sm text-neutral-500">Try experimental features</p>
              <Badge variant="warning" className="mt-1">Experimental</Badge>
            </div>
          </div>
          <Switch />
        </div>
      </div>
    </Card>
  </div>
)

