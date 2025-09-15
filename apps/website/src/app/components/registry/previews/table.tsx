import React from 'react'
import { Button, Badge, Input, Card, Avatar, Modal, Accordion, AccordionItem, Divider, Stack, Container, Checkbox, Switch, Textarea, Navbar, Breadcrumb, BreadcrumbItem, Drawer, RadioGroup, Radio, Tabs, Tab, Popover, Table, Form, FormGroup, FormActions, Pagination, Alert, Progress, Loading, ToastContainer, Tree, TreeNode, DatePicker, Select, Tooltip, Sidebar, Toast, Row, Col } from 'maxzilla-ui-react'
import { Rocket, BookOpen, Star, Github, Mail, Search, TrendingUp, Users, Check, AlertTriangle, X, Info, Upload, Settings, Moon, Bell, Lock, Zap, ChevronRight, Home, User, ChevronDown, Calendar, Send, Eye, MessageCircle, Trash2 } from 'lucide-react'

export const TableBasicPreview: React.FC = () => (
  <div className="space-y-4">
    {/* User Table */}
    <Card elevation="sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-neutral-900 dark:text-white">Team Members</h3>
        <Button variant="primary" size="sm">
          <User className="w-3 h-3 mr-1" />
          Add User
        </Button>
      </div>
      <Table>
        <th slot="header">User</th>
        <th slot="header">Role</th>
        <th slot="header">Status</th>
        <th slot="header">Actions</th>

        <tr>
          <td>
            <div className="flex items-center gap-3">
              <Avatar src="https://i.pravatar.cc/32?img=1" size="sm" status="online" />
              <div>
                <p className="font-medium text-neutral-900 dark:text-white">Sarah Chen</p>
                <p className="text-sm text-neutral-500">sarah@example.com</p>
              </div>
            </div>
          </td>
          <td><Badge variant="primary">Admin</Badge></td>
          <td><Badge variant="success">Active</Badge></td>
          <td>
            <div className="flex gap-1">
              <Button variant="ghost" size="sm">
                <Eye className="w-3 h-3" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-3 h-3" />
              </Button>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div className="flex items-center gap-3">
              <Avatar src="https://i.pravatar.cc/32?img=2" size="sm" status="away" />
              <div>
                <p className="font-medium text-neutral-900 dark:text-white">Alex Smith</p>
                <p className="text-sm text-neutral-500">alex@example.com</p>
              </div>
            </div>
          </td>
          <td><Badge variant="secondary">Editor</Badge></td>
          <td><Badge variant="warning">Away</Badge></td>
          <td>
            <div className="flex gap-1">
              <Button variant="ghost" size="sm">
                <Eye className="w-3 h-3" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-3 h-3" />
              </Button>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div className="flex items-center gap-3">
              <Avatar src="https://i.pravatar.cc/32?img=3" size="sm" status="busy" />
              <div>
                <p className="font-medium text-neutral-900 dark:text-white">Maria Garcia</p>
                <p className="text-sm text-neutral-500">maria@example.com</p>
              </div>
            </div>
          </td>
          <td><Badge variant="success">Developer</Badge></td>
          <td><Badge variant="error">Busy</Badge></td>
          <td>
            <div className="flex gap-1">
              <Button variant="ghost" size="sm">
                <Eye className="w-3 h-3" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-3 h-3" />
              </Button>
            </div>
          </td>
        </tr>
      </Table>
    </Card>

    {/* Project Table */}
    <Table>
      <th slot="header">Project</th>
      <th slot="header">Status</th>
      <th slot="header">Progress</th>
      <th slot="header">Due Date</th>

      <tr>
        <td>
          <div>
            <p className="font-medium text-neutral-900 dark:text-white">Website Redesign</p>
            <p className="text-sm text-neutral-500">Frontend overhaul</p>
          </div>
        </td>
        <td><Badge variant="warning">In Progress</Badge></td>
        <td>
          <div className="w-full">
            <Progress value={75} max={100} />
            <p className="text-xs text-neutral-500 mt-1">75%</p>
          </div>
        </td>
        <td className="text-neutral-600 dark:text-neutral-300">Dec 15, 2024</td>
      </tr>

      <tr>
        <td>
          <div>
            <p className="font-medium text-neutral-900 dark:text-white">Mobile App</p>
            <p className="text-sm text-neutral-500">iOS & Android</p>
          </div>
        </td>
        <td><Badge variant="success">Completed</Badge></td>
        <td>
          <div className="w-full">
            <Progress value={100} max={100} />
            <p className="text-xs text-neutral-500 mt-1">100%</p>
          </div>
        </td>
        <td className="text-neutral-600 dark:text-neutral-300">Nov 30, 2024</td>
      </tr>

      <tr>
        <td>
          <div>
            <p className="font-medium text-neutral-900 dark:text-white">API Documentation</p>
            <p className="text-sm text-neutral-500">Developer guides</p>
          </div>
        </td>
        <td><Badge variant="secondary">Planning</Badge></td>
        <td>
          <div className="w-full">
            <Progress value={25} max={100} />
            <p className="text-xs text-neutral-500 mt-1">25%</p>
          </div>
        </td>
        <td className="text-neutral-600 dark:text-neutral-300">Jan 20, 2025</td>
      </tr>
    </Table>
  </div>
)

