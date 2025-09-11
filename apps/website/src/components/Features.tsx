'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  Palette, 
  Zap, 
  Globe, 
  Users, 
  Target,
  Layers,
  Rocket
} from 'lucide-react'

const features = [
  {
    icon: Code,
    title: 'Framework Agnostic',
    description: 'Works with React, Vue, Svelte, Angular, or vanilla JavaScript. One component library for all your projects.',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built with Lit Element for optimal performance. Lazy loading and tree-shaking support out of the box.',
    gradient: 'from-yellow-500 to-orange-600'
  },
  {
    icon: Palette,
    title: 'Beautiful Design',
    description: 'Aceternity-inspired design with smooth animations, perfect hover effects, and modern aesthetics.',
    gradient: 'from-pink-500 to-purple-600'
  },
  {
    icon: Globe,
    title: 'Web Standards',
    description: 'Built on native web standards. No build step required. Import and use anywhere HTML is supported.',
    gradient: 'from-green-500 to-teal-600'
  },
  {
    icon: Users,
    title: 'Developer Experience',
    description: 'TypeScript support, comprehensive documentation, and Storybook playground for rapid development.',
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    icon: Target,
    title: 'Accessibility First',
    description: 'WCAG 2.1 AA compliant by default. Screen reader support, keyboard navigation, and proper focus management.',
    gradient: 'from-red-500 to-pink-600'
  },
  {
    icon: Layers,
    title: 'Design System',
    description: 'Consistent design tokens, theming support, and dark mode. Build cohesive interfaces effortlessly.',
    gradient: 'from-purple-500 to-indigo-600'
  },
  {
    icon: Rocket,
    title: 'Production Ready',
    description: 'Thoroughly tested components with comprehensive documentation. Ready for your next project.',
    gradient: 'from-orange-500 to-red-600'
  }
]

export function Features() {
  return (
    <section className="py-24 px-4 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Why Choose <span className="text-gradient">Maxzilla UI</span>?
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            A modern component library built for developers who care about performance, 
            accessibility, and beautiful user experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white dark:bg-neutral-900 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 h-full">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300">
                    <div className={`w-full h-full bg-gradient-to-br ${feature.gradient} rounded-2xl`}></div>
                  </div>

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}