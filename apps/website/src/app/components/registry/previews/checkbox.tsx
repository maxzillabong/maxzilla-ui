import React from 'react'
import { Button, Badge, Input, Card, Avatar, Modal, Accordion, AccordionItem, Divider, Stack, Container, Checkbox, Switch, Textarea, Navbar, Breadcrumb, BreadcrumbItem, Drawer, RadioGroup, Radio, Tabs, Tab, Popover, Table, Form, FormGroup, FormActions, Pagination, Alert, Progress, Loading, ToastContainer, Tree, TreeNode, DatePicker, Select, Tooltip, Sidebar, Toast, Row, Col } from 'maxzilla-ui-react'
import { Rocket, BookOpen, Star, Github, Mail, Search, TrendingUp, Users, Check, AlertTriangle, X, Info, Upload, Settings, Moon, Bell, Lock, Zap, ChevronRight, Home, User, ChevronDown, Calendar, Send, Eye, MessageCircle, Trash2 } from 'lucide-react'

export const CheckboxPreview: React.FC = () => (
  <div className="space-y-4">
    {/* Task List */}
    <Card elevation="sm">
      <h4 className="font-semibold text-neutral-900 dark:text-white mb-3">Today's Tasks</h4>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Checkbox checked />
          <span className="line-through text-neutral-500">Complete project proposal</span>
          <Badge variant="success">Done</Badge>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox checked />
          <span className="line-through text-neutral-500">Review pull requests</span>
          <Badge variant="success">Done</Badge>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox />
          <span className="text-neutral-700 dark:text-neutral-300">Team standup meeting</span>
          <Badge variant="warning">2:00 PM</Badge>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox />
          <span className="text-neutral-700 dark:text-neutral-300">Update documentation</span>
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-neutral-200 dark:border-neutral-700">
        <div className="flex items-center justify-between">
          <span className="text-sm text-neutral-500">Progress</span>
          <Badge variant="primary">2/4 completed</Badge>
        </div>
      </div>
    </Card>

    {/* Settings Checkboxes */}
    <div className="space-y-2">
      <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer">
        <Checkbox checked />
        <div>
          <p className="font-medium text-neutral-900 dark:text-white">Email Notifications</p>
          <p className="text-sm text-neutral-500">Receive updates via email</p>
        </div>
      </label>
      <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer">
        <Checkbox />
        <div>
          <p className="font-medium text-neutral-900 dark:text-white">Marketing Emails</p>
          <p className="text-sm text-neutral-500">Receive promotional content</p>
        </div>
      </label>
    </div>
  </div>
)

