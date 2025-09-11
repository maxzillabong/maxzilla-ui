'use client'

import { motion } from 'framer-motion'
import { Code, Layers, Globe, Star, Users, Download, Github, Zap } from 'lucide-react'

const stats = [
  {
    icon: Code,
    number: '6+',
    label: 'Components',
    description: 'Production-ready components',
    color: 'text-blue-500',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30'
  },
  {
    icon: Globe,
    number: '5',
    label: 'Frameworks',
    description: 'React, Vue, Svelte, Angular + Vanilla',
    color: 'text-green-500',
    bgColor: 'bg-green-100 dark:bg-green-900/30'
  },
  {
    icon: Layers,
    number: '100%',
    label: 'Accessible',
    description: 'WCAG 2.1 AA compliant',
    color: 'text-purple-500',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30'
  },
  {
    icon: Zap,
    number: '0',
    label: 'Dependencies',
    description: 'Pure web components',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-100 dark:bg-yellow-900/30'
  },
  {
    icon: Star,
    number: '∞',
    label: 'Themes',
    description: 'Fully customizable design tokens',
    color: 'text-pink-500',
    bgColor: 'bg-pink-100 dark:bg-pink-900/30'
  },
  {
    icon: Download,
    number: '< 10kb',
    label: 'Bundle Size',
    description: 'Minimal footprint per component',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-100 dark:bg-indigo-900/30'
  }
]

const achievements = [
  {
    icon: Github,
    title: 'Open Source',
    description: 'MIT licensed and community driven',
    gradient: 'from-gray-500 to-gray-700'
  },
  {
    icon: Star,
    title: 'Production Ready',
    description: 'Thoroughly tested and documented',
    gradient: 'from-yellow-500 to-orange-600'
  },
  {
    icon: Users,
    title: 'Developer Friendly',
    description: 'TypeScript support and great DX',
    gradient: 'from-blue-500 to-indigo-600'
  }
]

export function Stats() {
  return (
    <section className="py-24 px-4 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        {/* Main Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Built for <span className="text-gradient">Performance</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Every component is crafted with performance, accessibility, and developer experience in mind.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative bg-white dark:bg-neutral-900 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${stat.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>

                  {/* Number */}
                  <div className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-2">
                    {stat.number}
                  </div>

                  {/* Label */}
                  <div className="text-lg font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    {stat.label}
                  </div>

                  {/* Description */}
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">
                    {stat.description}
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-neutral-50 via-white to-primary-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 rounded-3xl p-8 md:p-12 border border-neutral-200 dark:border-neutral-700"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Why Developers Love Maxzilla UI
            </h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Built by developers, for developers. Every decision prioritizes your experience and your users' experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${achievement.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <h4 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                    {achievement.title}
                  </h4>
                  
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {achievement.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}