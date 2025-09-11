'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Code, 
  Palette, 
  Zap, 
  Globe, 
  Users, 
  Star,
  Github,
  BookOpen,
  Sparkles,
  Target,
  Layers,
  Rocket,
  Heart
} from 'lucide-react'
import Link from 'next/link'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Features } from '../components/Features'
import { ComponentShowcase } from '../components/ComponentShowcase'
import { CodeExample } from '../components/CodeExample'
import { Stats } from '../components/Stats'
import { Footer } from '../components/Footer'

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Header />
      
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Component Showcase */}
      <ComponentShowcase />

      {/* Code Examples */}
      <section className="py-24 px-4 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Get Started</span> in Minutes
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Framework-agnostic web components that work everywhere. Choose your preferred way to integrate.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <CodeExample 
              title="Vanilla JavaScript"
              language="html"
              code={`<!-- Import components -->
<script type="module">
  import '@maxzilla/ui-core/button';
  import '@maxzilla/ui-core/card';
</script>

<!-- Use anywhere -->
<mz-button variant="primary">
  Click me
</mz-button>

<mz-card elevation="md">
  <h3 slot="header">Welcome</h3>
  <p>Beautiful components ready to use!</p>
</mz-card>`}
            />

            <CodeExample 
              title="React Integration"
              language="tsx"
              code={`import { MzButton, MzCard } from '@maxzilla/ui-react';

function App() {
  return (
    <>
      <MzButton 
        variant="primary"
        onClick={() => alert('Hello!')}
      >
        Click me
      </MzButton>
      
      <MzCard elevation="md">
        <h3 slot="header">Welcome</h3>
        <p>Seamless React integration!</p>
      </MzCard>
    </>
  );
}`}
            />
          </div>

          <div className="text-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link 
                href="/docs" 
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <BookOpen className="w-5 h-5" />
                View Documentation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary-50 via-neutral-50 to-green-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Ready for Production
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Start Building
              <br />
              <span className="text-gradient">Beautiful Interfaces</span>
            </h2>
            
            <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl mx-auto">
              Join developers who are already building amazing experiences with Maxzilla UI. 
              Framework-agnostic, accessible, and beautiful by default.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="https://github.com/maxvfischer/maxzilla-ui"
                className="inline-flex items-center gap-2 bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-100 text-white dark:text-neutral-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </Link>
              
              <Link 
                href="/storybook" 
                className="inline-flex items-center gap-2 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white border-2 border-neutral-200 dark:border-neutral-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                <BookOpen className="w-5 h-5" />
                Explore Storybook
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex items-center justify-center gap-6 mt-12 text-sm text-neutral-500 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-500" />
                MIT Licensed
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                Production Ready
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-500" />
                Community Driven
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}