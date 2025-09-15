import React from 'react'
import { Button, Badge, Input, Card, Avatar, Modal, Accordion, AccordionItem, Divider, Stack, Container, Checkbox, Switch, Textarea, Navbar, Breadcrumb, BreadcrumbItem, Drawer, RadioGroup, Radio, Tabs, Tab, Popover, Table, Form, FormGroup, FormActions, Pagination, Alert, Progress, Loading, ToastContainer, Tree, TreeNode, DatePicker, Select, Tooltip, Sidebar, Toast, Row, Col } from 'maxzilla-ui-react'
import { Rocket, BookOpen, Star, Github, Mail, Search, TrendingUp, Users, Check, AlertTriangle, X, Info, Upload, Settings, Moon, Bell, Lock, Zap, ChevronRight, Home, User, ChevronDown, Calendar, Send, Eye, MessageCircle, Trash2 } from 'lucide-react'

export const ModalUpgradePreview: React.FC = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <div>
      <Button variant="primary" onClick={() => setOpen(true)}>
        <Star className="w-4 h-4 mr-2" /> Premium Modal
      </Button>

      <Modal open={open} size="lg" closable backdrop>
        <div slot="header" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white">
            <Rocket className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold">Upgrade to Pro</h3>
        </div>

        <div className="space-y-4">
          <p className="text-neutral-600 dark:text-neutral-300">
            Unlock premium features and take your experience to the next level.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Check className="w-4 h-4 text-green-500" />
              <span>Unlimited projects</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-4 h-4 text-green-500" />
              <span>Advanced analytics</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-4 h-4 text-green-500" />
              <span>Priority support</span>
            </div>
          </div>

          <Card elevation="sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Monthly</p>
                <p className="text-2xl font-bold text-neutral-900 dark:text-white">$29<span className="text-sm font-normal">/mo</span></p>
              </div>
              <Badge variant="success">Save 20%</Badge>
            </div>
          </Card>
        </div>

        <div slot="footer" className="flex gap-2">
          <Button variant="outline" onClick={() => setOpen(false)}>Maybe Later</Button>
          <Button variant="primary" onClick={() => setOpen(false)}>
            <Zap className="w-4 h-4 mr-2" /> Upgrade Now
          </Button>
        </div>
      </Modal>
    </div>
  )
}


export const ModalDeletePreview: React.FC = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <div>
      <Button variant="danger" onClick={() => setOpen(true)}>
        <Trash2 className="w-4 h-4 mr-2" /> Delete Project
      </Button>

      <Modal open={open} size="sm" closable backdrop>
        <div slot="header" className="flex items-center gap-2 text-red-600 dark:text-red-400">
          <AlertTriangle className="w-6 h-6" />
          <h3 className="text-lg font-semibold">Delete Project?</h3>
        </div>

        <div className="space-y-3">
          <p className="text-neutral-600 dark:text-neutral-300">
            This action cannot be undone. This will permanently delete your project and all associated data.
          </p>
          <Alert variant="warning">
            <p className="text-sm">All 48 files will be deleted</p>
          </Alert>
        </div>

        <div slot="footer" className="flex gap-2">
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="danger" onClick={() => setOpen(false)}>Delete Project</Button>
        </div>
      </Modal>
    </div>
  )
}

