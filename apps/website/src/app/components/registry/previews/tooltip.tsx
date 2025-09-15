import React from 'react'
import { Button, Badge, Input, Card, Avatar, Modal, Accordion, AccordionItem, Divider, Stack, Container, Checkbox, Switch, Textarea, Navbar, Breadcrumb, BreadcrumbItem, Drawer, RadioGroup, Radio, Tabs, Tab, Popover, Table, Form, FormGroup, FormActions, Pagination, Alert, Progress, Loading, ToastContainer, Tree, TreeNode, DatePicker, Select, Tooltip, Sidebar, Toast, Row, Col } from 'maxzilla-ui-react'
import { Rocket, BookOpen, Star, Github, Mail, Search, TrendingUp, Users, Check, AlertTriangle, X, Info, Upload, Settings, Moon, Bell, Lock, Zap, ChevronRight, Home, User, ChevronDown, Calendar, Send, Eye, MessageCircle, Trash2 } from 'lucide-react'

export const TooltipPreview: React.FC = () => (
  <div className="flex items-center justify-center">
    <Tooltip text="This is a helpful tooltip" placement="top">
      <Button variant="primary">Hover for tooltip</Button>
    </Tooltip>
  </div>
)


export const TooltipRightPreview: React.FC = () => (
  <div className="flex items-center justify-center">
    <Tooltip text="Tooltip on the right" placement="right">
      <Button variant="outline">Right tooltip</Button>
    </Tooltip>
  </div>
)


export const TooltipBottomPreview: React.FC = () => (
  <div className="flex items-center justify-center">
    <Tooltip text="Bottom positioned tooltip with more text" placement="bottom">
      <Button variant="secondary">Bottom tooltip</Button>
    </Tooltip>
  </div>
)


export const TooltipLeftPreview: React.FC = () => (
  <div className="flex items-center justify-center">
    <Tooltip text="Left positioned tooltip" placement="left">
      <Button variant="ghost">Left tooltip</Button>
    </Tooltip>
  </div>
)

