import React from 'react'
import { Button, Badge, Input, Card, Avatar, Modal, Accordion, AccordionItem, Divider, Stack, Container, Checkbox, Switch, Textarea, Navbar, Breadcrumb, BreadcrumbItem, Drawer, RadioGroup, Radio, Tabs, Tab, Popover, Table, Form, FormGroup, FormActions, Pagination, Alert, Progress, Loading, ToastContainer, Tree, TreeNode, DatePicker, Select, Tooltip, Sidebar, Toast, Row, Col } from 'maxzilla-ui-react'
import { Rocket, BookOpen, Star, Github, Mail, Search, TrendingUp, Users, Check, AlertTriangle, X, Info, Upload, Settings, Moon, Bell, Lock, Zap, ChevronRight, Home, User, ChevronDown, Calendar, Send, Eye, MessageCircle, Trash2 } from 'lucide-react'

export const TabsBasicPreview: React.FC = () => (
  <div className="space-y-4">
    {/* Settings Tabs */}
    <Tabs initial={0}>
      <Tab label="Account">
        <Card elevation="sm" className="mt-4">
          <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">Account Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Avatar src="https://i.pravatar.cc/60?img=3" size="lg" />
              <div>
                <h4 className="font-medium text-neutral-900 dark:text-white">Sarah Chen</h4>
                <p className="text-sm text-neutral-500">sarah@example.com</p>
                <Badge variant="success" className="mt-1">Verified</Badge>
              </div>
            </div>
            <Divider />
            <div className="grid sm:grid-cols-2 gap-4">
              <Input label="First Name" value="Sarah" />
              <Input label="Last Name" value="Chen" />
            </div>
            <Button variant="primary" size="sm">Save Changes</Button>
          </div>
        </Card>
      </Tab>
      <Tab label="Notifications">
        <Card elevation="sm" className="mt-4">
          <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">Notification Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-neutral-900 dark:text-white">Email Notifications</p>
                <p className="text-sm text-neutral-500">Receive updates via email</p>
              </div>
              <Switch checked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-neutral-900 dark:text-white">Push Notifications</p>
                <p className="text-sm text-neutral-500">Browser push notifications</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-neutral-900 dark:text-white">Marketing Emails</p>
                <p className="text-sm text-neutral-500">Promotional content</p>
              </div>
              <Switch />
            </div>
          </div>
        </Card>
      </Tab>
      <Tab label="Security">
        <Card elevation="sm" className="mt-4">
          <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">Security Settings</h3>
          <div className="space-y-4">
            <Alert variant="success">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Two-factor authentication is enabled</span>
              </div>
            </Alert>
            <div className="space-y-2">
              <p className="font-medium text-neutral-900 dark:text-white">Recent Activity</p>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                <p>• Last login: 2 hours ago from Chrome</p>
                <p>• Password changed: 30 days ago</p>
                <p>• Recovery email updated: 45 days ago</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Change Password</Button>
              <Button variant="outline" size="sm">Download Data</Button>
            </div>
          </div>
        </Card>
      </Tab>
    </Tabs>

    {/* Dashboard Tabs */}
    <Tabs initial={0}>
      <Tab label="Overview">
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Card elevation="sm">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <p className="font-medium text-neutral-900 dark:text-white">Revenue</p>
            </div>
            <p className="text-2xl font-bold text-neutral-900 dark:text-white">$24,875</p>
            <p className="text-sm text-neutral-500">+12.5% from last month</p>
          </Card>
          <Card elevation="sm">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5 text-blue-500" />
              <p className="font-medium text-neutral-900 dark:text-white">Users</p>
            </div>
            <p className="text-2xl font-bold text-neutral-900 dark:text-white">1,429</p>
            <p className="text-sm text-neutral-500">+8.2% from last week</p>
          </Card>
        </div>
      </Tab>
      <Tab label="Analytics">
        <div className="mt-4">
          <Alert variant="info">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4" />
              <span>Analytics data is updated every 15 minutes</span>
            </div>
          </Alert>
        </div>
      </Tab>
      <Tab label="Reports">
        <div className="mt-4">
          <Card elevation="sm">
            <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">Generate Report</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <Button variant="outline" size="sm">Weekly</Button>
                <Button variant="outline" size="sm">Monthly</Button>
                <Button variant="primary" size="sm">Quarterly</Button>
              </div>
              <Button variant="primary" size="sm">
                <Upload className="w-3 h-3 mr-1" /> Export PDF
              </Button>
            </div>
          </Card>
        </div>
      </Tab>
    </Tabs>
  </div>
)

