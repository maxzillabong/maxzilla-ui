import React from 'react'
import { Button, Badge, Input, Card, Avatar, Modal, Accordion, AccordionItem, Divider, Stack, Container, Checkbox, Switch, Textarea, Navbar, Breadcrumb, BreadcrumbItem, Drawer, RadioGroup, Radio, Tabs, Tab, Popover, Table, Form, FormGroup, FormActions, Pagination, Alert, Progress, Loading, ToastContainer, Tree, TreeNode, DatePicker, Select, Tooltip, Sidebar, Toast, Row, Col } from 'maxzilla-ui-react'
import { Rocket, BookOpen, Star, Github, Mail, Search, TrendingUp, Users, Check, AlertTriangle, X, Info, Upload, Settings, Moon, Bell, Lock, Zap, ChevronRight, Home, User, ChevronDown, Calendar, Send, Eye, MessageCircle, Trash2 } from 'lucide-react'

export const DatePickerBasicPreview: React.FC = () => (
  <div className="space-y-4">
    {/* Event Planning */}
    <Card elevation="sm">
      <h4 className="font-semibold text-neutral-900 dark:text-white mb-4">Schedule Event</h4>
      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              <Calendar className="w-4 h-4 inline mr-1" />
              Start Date
            </label>
            <DatePicker />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              <Calendar className="w-4 h-4 inline mr-1" />
              End Date
            </label>
            <DatePicker />
          </div>
        </div>
        <Alert variant="info">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4" />
            <span>Event duration will be calculated automatically</span>
          </div>
        </Alert>
      </div>
    </Card>

    {/* Booking Form */}
    <div className="grid gap-4 md:grid-cols-2">
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
          Appointment Date
        </label>
        <DatePicker />
        <p className="text-xs text-neutral-500 mt-1">Select your preferred appointment date</p>
      </div>
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
          Follow-up Date
        </label>
        <DatePicker />
        <p className="text-xs text-neutral-500 mt-1">Optional follow-up appointment</p>
      </div>
    </div>
  </div>
)

