'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Eye, Code2, Palette, Mail, User, Star, Check } from 'lucide-react'
import Link from 'next/link'
import { Button, Card, Input, Badge, Avatar, Modal } from 'maxzilla-ui-react'

interface ComponentDemoProps {
  name: string
  description: string
  features: string[]
  children: React.ReactNode
}

function ComponentDemo({ name, description, features, children }: ComponentDemoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 h-full">
        {/* Header */}
        <div className="p-6 border-b border-neutral-200 dark:border-neutral-700">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                {name}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                {description}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Palette className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-2">
            {features.map((feature) => (
              <span 
                key={feature}
                className="text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full font-medium"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Live Demo */}
        <div className="p-6">
          <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Live Demo</span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-600 dark:text-green-400">Interactive</span>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center min-h-[100px] gap-4">
              {children}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 pb-6">
          <Link 
            href={`http://localhost:6007/?path=/story/${name.toLowerCase()}--default`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200 group/link"
          >
            <Eye className="w-4 h-4" />
            View in Storybook
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export function LiveComponentShowcase() {
  const [mounted, setMounted] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="py-24 px-4 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Interactive</span> Components
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mb-8">
            Experience our React wrapper components in action. These are real, interactive components 
            powered by Maxzilla UI web components.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="http://localhost:6007" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              <Eye className="w-5 h-5" />
              View in Storybook
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link 
              href="/docs" 
              className="inline-flex items-center gap-2 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white border-2 border-neutral-200 dark:border-neutral-600 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              <Code2 className="w-5 h-5" />
              Documentation
            </Link>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <ComponentDemo
            name="Button"
            description="Interactive buttons with multiple variants, loading states, and smooth animations."
            features={['Multiple variants', 'Loading states', 'Icon support', 'Hover animations']}
          >
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" onClick={() => alert('Primary clicked!')}>
                Primary
              </Button>
              <Button variant="secondary">
                Secondary
              </Button>
              <Button variant="outline">
                Outline
              </Button>
              <Button variant="ghost">
                Ghost
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" size="sm">
                Small
              </Button>
              <Button variant="primary" size="md">
                Medium
              </Button>
              <Button variant="primary" size="lg">
                Large
              </Button>
            </div>
          </ComponentDemo>

          <ComponentDemo
            name="Card"
            description="Flexible cards with elevation levels, slots for content organization, and interactive states."
            features={['Elevation levels', 'Slot system', 'Clickable states', 'Glow effects']}
          >
            <div className="w-full max-w-sm">
              <Card elevation="md" className="w-full p-6">
                <div className="font-semibold text-lg mb-4">Welcome Card</div>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  This is a demo card component with interactive hover effects.
                </p>
                <div className="flex justify-end">
                  <Button variant="primary" size="sm">
                    Learn More
                  </Button>
                </div>
              </Card>
            </div>
          </ComponentDemo>

          <ComponentDemo
            name="Input"
            description="Form inputs with validation, helper text, and beautiful focus states."
            features={['Validation states', 'Helper text', 'Multiple types', 'Focus animations']}
          >
            <div className="w-full max-w-sm space-y-4">
              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                value={inputValue}
                onChange={(e) => setInputValue((e.target as HTMLInputElement).value)}
                helperText="We'll never share your email"
              />
              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
          </ComponentDemo>

          <ComponentDemo
            name="Badge"
            description="Status indicators and labels with customizable variants and sizes."
            features={['Status variants', 'Size options', 'Dot indicators', 'Custom colors']}
          >
            <div className="flex flex-wrap gap-3">
              <Badge variant="success">
                <Check className="w-3 h-3 mr-1" />
                Success
              </Badge>
              <Badge variant="warning">
                Warning
              </Badge>
              <Badge variant="error">
                Error
              </Badge>
              <Badge variant="primary">
                Info
              </Badge>
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge variant="success" size="sm">Small</Badge>
              <Badge variant="success" size="md">Medium</Badge>
              <Badge variant="success" size="lg">Large</Badge>
            </div>
          </ComponentDemo>

          <ComponentDemo
            name="Avatar"
            description="User profile pictures with fallbacks, online status, and group support."
            features={['Image fallbacks', 'Online status', 'Size variants', 'Group avatars']}
          >
            <div className="flex flex-wrap gap-4 items-center">
              <Avatar
                alt="User 1"
                size="sm"
                online
              />
              <Avatar
                alt="User 2"
                size="md"
                online
              />
              <Avatar
                alt="User 3"
                size="lg"
              />
              <Avatar
                alt="No Image"
                size="md"
              />
            </div>
          </ComponentDemo>

          <ComponentDemo
            name="Modal"
            description="Accessible dialogs with backdrop blur, animations, and keyboard navigation."
            features={['Backdrop effects', 'Keyboard support', 'Size options', 'Slot system']}
          >
            <div className="flex flex-col gap-4 items-center">
              <Button variant="primary" onClick={() => setModalOpen(true)}>
                Open Modal
              </Button>
              
              <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                size="md"
              >
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Example Modal</h2>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                    This is a demo modal component with backdrop blur and animations.
                  </p>
                  <div className="flex gap-2 justify-end">
                    <Button variant="ghost" onClick={() => setModalOpen(false)}>
                      Cancel
                    </Button>
                    <Button variant="primary" onClick={() => setModalOpen(false)}>
                      Confirm
                    </Button>
                  </div>
                </div>
              </Modal>
            </div>
          </ComponentDemo>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-primary-50 via-white to-green-50 dark:from-neutral-800 dark:via-neutral-800 dark:to-neutral-800 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              Ready to start building?
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              Install Maxzilla UI and start creating beautiful interfaces in minutes.
            </p>
            
            <Link 
              href="/docs/installation"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}