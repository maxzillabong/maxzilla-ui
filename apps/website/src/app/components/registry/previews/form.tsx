import React from 'react'
import { Button, Badge, Input, Card, Avatar, Modal, Accordion, AccordionItem, Divider, Stack, Container, Checkbox, Switch, Textarea, Navbar, Breadcrumb, BreadcrumbItem, Drawer, RadioGroup, Radio, Tabs, Tab, Popover, Table, Form, FormGroup, FormActions, Pagination, Alert, Progress, Loading, ToastContainer, Tree, TreeNode, DatePicker, Select, Tooltip, Sidebar, Toast, Row, Col } from 'maxzilla-ui-react'
import { Rocket, BookOpen, Star, Github, Mail, Search, TrendingUp, Users, Check, AlertTriangle, X, Info, Upload, Settings, Moon, Bell, Lock, Zap, ChevronRight, Home, User, ChevronDown, Calendar, Send, Eye, MessageCircle, Trash2 } from 'lucide-react'

export const FormBasicPreview: React.FC = () => (
  <div className="space-y-6">
    {/* Contact Form */}
    <Card elevation="sm">
      <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">Contact Information</h3>
      <Form>
        <FormGroup>
          <div className="grid sm:grid-cols-2 gap-4">
            <Input label="First Name" placeholder="John" required />
            <Input label="Last Name" placeholder="Doe" required />
          </div>
          <Input label="Email Address" type="email" placeholder="john@example.com" required />
          <Input label="Phone Number" placeholder="+1 (555) 123-4567" />
        </FormGroup>

        <FormGroup>
          <Textarea
            label="Message"
            placeholder="Tell us about your project..."
            rows={4}
            helperText="Please provide as much detail as possible"
          />
        </FormGroup>

        <FormGroup>
          <div className="space-y-3">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Preferred Contact Method</p>
            <RadioGroup name="contact-method">
              <Radio value="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </Radio>
              <Radio value="phone" className="flex items-center gap-2">
                📞 Phone
              </Radio>
            </RadioGroup>
          </div>
        </FormGroup>

        <FormGroup>
          <div className="space-y-2">
            <Checkbox>I agree to the terms and conditions</Checkbox>
            <Checkbox>Subscribe to newsletter for updates</Checkbox>
          </div>
        </FormGroup>

        <FormActions>
          <Button variant="outline" type="reset">Clear Form</Button>
          <Button variant="primary" type="submit">
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </Button>
        </FormActions>
      </Form>
    </Card>

    {/* Project Form */}
    <Form>
      <FormGroup>
        <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">Create New Project</h3>
        <Input label="Project Name" placeholder="My Awesome Project" required />
        <Textarea
          label="Description"
          placeholder="Describe your project goals and requirements..."
          rows={3}
        />
      </FormGroup>

      <FormGroup>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Start Date
            </label>
            <DatePicker />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Priority
            </label>
            <RadioGroup name="priority" className="flex gap-4">
              <Radio value="low">
                <Badge variant="secondary">Low</Badge>
              </Radio>
              <Radio value="medium">
                <Badge variant="warning">Medium</Badge>
              </Radio>
              <Radio value="high">
                <Badge variant="error">High</Badge>
              </Radio>
            </RadioGroup>
          </div>
        </div>
      </FormGroup>

      <FormGroup>
        <Switch checked>Enable notifications for this project</Switch>
        <Switch>Make project public</Switch>
      </FormGroup>

      <FormActions>
        <Button variant="ghost">Save as Draft</Button>
        <Button variant="outline" type="reset">Cancel</Button>
        <Button variant="primary" type="submit">Create Project</Button>
      </FormActions>
    </Form>
  </div>
)

