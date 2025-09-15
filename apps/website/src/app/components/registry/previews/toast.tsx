import React from 'react'
import { Button, Badge, Input, Card, Avatar, Modal, Accordion, AccordionItem, Divider, Stack, Container, Checkbox, Switch, Textarea, Navbar, Breadcrumb, BreadcrumbItem, Drawer, RadioGroup, Radio, Tabs, Tab, Popover, Table, Form, FormGroup, FormActions, Pagination, Alert, Progress, Loading, ToastContainer, Tree, TreeNode, DatePicker, Select, Tooltip, Sidebar, Toast, Row, Col } from 'maxzilla-ui-react'
import { Rocket, BookOpen, Star, Github, Mail, Search, TrendingUp, Users, Check, AlertTriangle, X, Info, Upload, Settings, Moon, Bell, Lock, Zap, ChevronRight, Home, User, ChevronDown, Calendar, Send, Eye, MessageCircle, Trash2 } from 'lucide-react'

export const ToastPreview: React.FC = () => {
  const showToast = (variant: string, message: string) => {
    // This is a simplified example - in actual implementation
    // you'd use the toast container properly
    alert(`${variant.toUpperCase()}: ${message}`)
  }

  return (
    <div className="flex flex-wrap gap-3">
      <Button
        variant="primary"
        onClick={() => showToast('success', 'Operation completed successfully!')}
      >
        Show Success Toast
      </Button>
      <Button
        variant="danger"
        onClick={() => showToast('error', 'Something went wrong!')}
      >
        Show Error Toast
      </Button>
      <Button
        variant="outline"
        onClick={() => showToast('info', 'Information message')}
      >
        Show Info Toast
      </Button>
    </div>
  )
}


export const ToastContainerPreview: React.FC = () => {
  const [ref, setRef] = React.useState<any>(null)

  const showSuccessToast = () => {
    if (ref) {
      ref.show({
        title: 'File Uploaded',
        message: 'profile-photo.jpg uploaded successfully',
        variant: 'success',
        avatar: 'https://i.pravatar.cc/40?img=5',
        duration: 4000
      })
    }
  }

  const showNotificationToast = () => {
    if (ref) {
      ref.show({
        title: 'New Message',
        message: 'You have a new message from Sarah',
        variant: 'info',
        avatar: 'https://i.pravatar.cc/40?img=9',
        duration: 5000
      })
    }
  }

  const showErrorToast = () => {
    if (ref) {
      ref.show({
        title: 'Upload Failed',
        message: 'File size exceeds 10MB limit',
        variant: 'error',
        duration: 5000
      })
    }
  }

  return (
    <div className="space-y-3">
      <ToastContainer ref={setRef as any} position="bottom-right" />
      <div className="flex flex-wrap gap-2">
        <Button variant="primary" onClick={showSuccessToast}>
          <Check className="w-4 h-4 mr-2" /> Success Toast
        </Button>
        <Button variant="primary" onClick={showNotificationToast}>
          <MessageCircle className="w-4 h-4 mr-2" /> Notification
        </Button>
        <Button variant="outline" onClick={showErrorToast}>
          <X className="w-4 h-4 mr-2" /> Error Toast
        </Button>
      </div>
    </div>
  )
}

// New component previews
