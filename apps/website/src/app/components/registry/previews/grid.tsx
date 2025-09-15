import React from 'react'
import { Button, Badge, Input, Card, Avatar, Modal, Accordion, AccordionItem, Divider, Stack, Container, Checkbox, Switch, Textarea, Navbar, Breadcrumb, BreadcrumbItem, Drawer, RadioGroup, Radio, Tabs, Tab, Popover, Table, Form, FormGroup, FormActions, Pagination, Alert, Progress, Loading, ToastContainer, Tree, TreeNode, DatePicker, Select, Tooltip, Sidebar, Toast, Row, Col } from 'maxzilla-ui-react'
import { Rocket, BookOpen, Star, Github, Mail, Search, TrendingUp, Users, Check, AlertTriangle, X, Info, Upload, Settings, Moon, Bell, Lock, Zap, ChevronRight, Home, User, ChevronDown, Calendar, Send, Eye, MessageCircle, Trash2 } from 'lucide-react'

export const GridPreview: React.FC = () => (
  <div className="space-y-4">
    <Row>
      <Col span={6}>
        <div className="bg-blue-100 p-3 text-center rounded">Col 6</div>
      </Col>
      <Col span={6}>
        <div className="bg-purple-100 p-3 text-center rounded">Col 6</div>
      </Col>
    </Row>
    <Row>
      <Col span={4}>
        <div className="bg-green-100 p-3 text-center rounded">Col 4</div>
      </Col>
      <Col span={8}>
        <div className="bg-orange-100 p-3 text-center rounded">Col 8</div>
      </Col>
    </Row>
    <Row>
      <Col span={3}>
        <div className="bg-pink-100 p-3 text-center rounded">Col 3</div>
      </Col>
      <Col span={3}>
        <div className="bg-yellow-100 p-3 text-center rounded">Col 3</div>
      </Col>
      <Col span={3}>
        <div className="bg-indigo-100 p-3 text-center rounded">Col 3</div>
      </Col>
      <Col span={3}>
        <div className="bg-red-100 p-3 text-center rounded">Col 3</div>
      </Col>
    </Row>
  </div>
)