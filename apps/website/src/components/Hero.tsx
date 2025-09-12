'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Sparkles, Zap, Code, Palette } from 'lucide-react'
import { Button } from 'maxzilla-ui-react'
import packageJson from '../../package.json'

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      <div className="hero-glow"></div>

      {/* Floating Elements */}
      <div className="absolute top-32 left-10 w-20 h-20 bg-primary-200 dark:bg-primary-800 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-48 right-16 w-32 h-32 bg-green-200 dark:bg-green-800 rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-15 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-primary-200 dark:border-primary-800"
        >
          <Sparkles className="w-4 h-4 animate-pulse" />
          Introducing Maxzilla UI v{packageJson.version}
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Build
            <br />
            <span className="relative">
              <span className="text-gradient">Beautiful</span>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary-500 to-green-500 rounded-full"
              ></motion.div>
            </span>
            <br />
            Interfaces
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          A modern web components library with{' '}
          <span className="text-primary-600 dark:text-primary-400 font-semibold">Aceternity-inspired design</span>.
          Framework-agnostic, accessible, and beautiful by default.
        </motion.p>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {[
            { icon: Code, text: 'Framework Agnostic' },
            { icon: Zap, text: 'Lightning Fast' },
            { icon: Palette, text: 'Beautiful Design' },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 bg-white dark:bg-neutral-800 px-4 py-2 rounded-full shadow-sm border border-neutral-200 dark:border-neutral-700"
            >
              <Icon className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{text}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => window.location.href = '/docs/installation'}
            className="group animate-glow"
          >
            <Download className="w-5 h-5" />
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('http://localhost:6007', '_blank', 'noopener,noreferrer')}
          >
            View Components
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>

        {/* Quick Install */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-neutral-900 dark:bg-neutral-800 rounded-xl p-6 text-left border border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-xs text-neutral-400">Terminal</span>
            </div>
            <div className="font-mono">
              <div className="text-green-400 mb-2"># Install Maxzilla UI</div>
              <div className="text-white mb-4">npm install maxzilla-ui-core</div>
              <div className="text-green-400 mb-2"># Import and use</div>
              <div className="text-white">
                <span className="text-purple-400">import</span>{' '}
                <span className="text-yellow-300">'maxzilla-ui-core/button'</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-8 md:gap-12 mt-20 pt-12 border-t border-neutral-200 dark:border-neutral-800"
        >
          {[
            { number: '6+', label: 'Components' },
            { number: '5', label: 'Frameworks' },
            { number: '100%', label: 'Accessible' },
            { number: '0', label: 'Dependencies' },
          ].map(({ number, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {number}
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
