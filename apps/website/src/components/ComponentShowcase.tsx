'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Eye, Code2, Palette } from 'lucide-react'
import Link from 'next/link'

const components = [
  {
    name: 'Button',
    description: 'Interactive buttons with multiple variants, loading states, and smooth animations.',
    preview: `<mz-button variant="primary" size="lg">
  Get Started
</mz-button>`,
    features: ['Multiple variants', 'Loading states', 'Icon support', 'Hover animations']
  },
  {
    name: 'Card',
    description: 'Flexible cards with elevation levels, slots for content organization, and interactive states.',
    preview: `<mz-card elevation="md" clickable>
  <h3 slot="header">Welcome</h3>
  <p>Beautiful card component</p>
  <mz-button slot="actions">Learn More</mz-button>
</mz-card>`,
    features: ['Elevation levels', 'Slot system', 'Clickable states', 'Glow effects']
  },
  {
    name: 'Input',
    description: 'Form inputs with validation, helper text, and beautiful focus states.',
    preview: `<mz-input 
  label="Email" 
  type="email" 
  required
  helper-text="We'll never share your email">
</mz-input>`,
    features: ['Validation states', 'Helper text', 'Multiple types', 'Focus animations']
  },
  {
    name: 'Badge',
    description: 'Status indicators and labels with customizable variants and sizes.',
    preview: `<mz-badge variant="success" size="lg">
  New Feature
</mz-badge>`,
    features: ['Status variants', 'Size options', 'Dot indicators', 'Custom colors']
  },
  {
    name: 'Avatar',
    description: 'User profile pictures with fallbacks, online status, and group support.',
    preview: `<mz-avatar 
  src="/user.jpg" 
  alt="John Doe" 
  size="lg"
  online>
</mz-avatar>`,
    features: ['Image fallbacks', 'Online status', 'Size variants', 'Group avatars']
  },
  {
    name: 'Modal',
    description: 'Accessible dialogs with backdrop blur, animations, and keyboard navigation.',
    preview: `<mz-modal size="md">
  <h2 slot="header">Confirm Action</h2>
  <p>Are you sure you want to continue?</p>
  <mz-button slot="footer">Confirm</mz-button>
</mz-modal>`,
    features: ['Backdrop effects', 'Keyboard support', 'Size options', 'Slot system']
  }
]

export function ComponentShowcase() {
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
            <span className="text-gradient">Components</span> Overview
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mb-8">
            Explore our collection of beautifully designed, accessible components. 
            Each component is built with performance and usability in mind.
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
          {components.map((component, index) => (
            <motion.div
              key={component.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 h-full">
                {/* Header */}
                <div className="p-6 border-b border-neutral-200 dark:border-neutral-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                        {component.name}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {component.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Palette className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {component.features.map((feature) => (
                      <span 
                        key={feature}
                        className="text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Code Preview */}
                <div className="p-6">
                  <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-4 border border-neutral-700">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-xs text-neutral-400">{component.name}.html</span>
                    </div>
                    
                    <pre className="text-sm text-neutral-300 overflow-x-auto">
                      <code className="font-mono whitespace-pre">{component.preview}</code>
                    </pre>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 pb-6">
                  <Link 
                    href={`http://localhost:6007/?path=/story/${component.name.toLowerCase()}--default`}
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
          ))}
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