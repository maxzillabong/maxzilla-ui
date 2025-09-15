import React from 'react'
import { Button, Badge, Input, Card, Avatar, Modal, Accordion, AccordionItem, Divider, Stack, Container, Checkbox, Switch, Textarea, Navbar, Breadcrumb, BreadcrumbItem, Drawer, RadioGroup, Radio, Tabs, Tab, Popover, Table, Form, FormGroup, FormActions, Pagination, Alert, Progress, Loading, ToastContainer, Tree, TreeNode, DatePicker, Select, Tooltip, Sidebar, Toast, Row, Col } from 'maxzilla-ui-react'
import { Rocket, BookOpen, Star, Github, Mail, Search, TrendingUp, Users, Check, AlertTriangle, X, Info, Upload, Settings, Moon, Bell, Lock, Zap, ChevronRight, Home, User, ChevronDown, Calendar, Send, Eye, MessageCircle, Trash2 } from 'lucide-react'

export const AccordionPreview: React.FC = () => (
  <Accordion>
    <AccordionItem header="Item One">
      <p className="text-neutral-600 dark:text-neutral-300">First item content.</p>
    </AccordionItem>
    <AccordionItem header="Item Two">
      <p className="text-neutral-600 dark:text-neutral-300">Second item content.</p>
    </AccordionItem>
  </Accordion>
)

