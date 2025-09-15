import React from 'react'
import { Button, Badge, Input, Card, Avatar, Modal, Accordion, AccordionItem, Divider, Stack, Container, Checkbox, Switch, Textarea, Navbar, Breadcrumb, BreadcrumbItem, Drawer, RadioGroup, Radio, Tabs, Tab, Popover, Table, Form, FormGroup, FormActions, Pagination, Alert, Progress, Loading, ToastContainer, Tree, TreeNode, DatePicker, Select, Tooltip, Sidebar, Toast, Row, Col } from 'maxzilla-ui-react'
import { Rocket, BookOpen, Star, Github, Mail, Search, TrendingUp, Users, Check, AlertTriangle, X, Info, Upload, Settings, Moon, Bell, Lock, Zap, ChevronRight, Home, User, ChevronDown, Calendar, Send, Eye, MessageCircle, Trash2 } from 'lucide-react'

export const SelectBasicPreview: React.FC = () => (
  <div className="space-y-4">
    {/* Basic Select */}
    <div className="grid gap-4 md:grid-cols-2">
      <Select label="Country" placeholder="Select a country">
        <option value="">Choose a country</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
        <option value="au">Australia</option>
        <option value="de">Germany</option>
        <option value="fr">France</option>
        <option value="jp">Japan</option>
      </Select>

      <Select label="Language" placeholder="Select a language">
        <option value="">Choose a language</option>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="zh">Chinese</option>
        <option value="ja">Japanese</option>
      </Select>
    </div>

    {/* Form with Selects */}
    <Card elevation="sm">
      <h4 className="font-semibold text-neutral-900 dark:text-white mb-4">Project Settings</h4>
      <div className="space-y-4">
        <Select label="Project Type" required>
          <option value="">Select project type</option>
          <option value="web">Web Application</option>
          <option value="mobile">Mobile App</option>
          <option value="desktop">Desktop Software</option>
          <option value="api">API Service</option>
          <option value="library">Component Library</option>
        </Select>

        <Select label="Team Size" helperText="Select the size of your development team">
          <option value="">Choose team size</option>
          <option value="solo">Solo Developer</option>
          <option value="small">2-5 Developers</option>
          <option value="medium">6-20 Developers</option>
          <option value="large">20+ Developers</option>
        </Select>

        <Select label="Priority Level">
          <option value="">Set priority</option>
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
          <option value="critical">Critical</option>
        </Select>
      </div>
    </Card>
  </div>
)

