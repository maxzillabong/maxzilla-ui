'use client'

import { motion } from 'framer-motion'
import { Github, BookOpen, ExternalLink, Heart, Mail, Globe } from 'lucide-react'
import Link from 'next/link'
import packageJson from '../../package.json'

const footerLinks = {
  Product: [
    { label: 'Documentation', href: '/docs' },
    { label: 'Components', href: '/components' },
    { label: 'Examples', href: '/examples' },
    { label: 'Storybook', href: 'http://localhost:6006', external: true }
  ],
  Resources: [
    { label: 'Getting Started', href: '/docs/installation' },
    { label: 'Design Tokens', href: '/docs/design-tokens' },
    { label: 'Theming', href: '/docs/theming' },
    { label: 'Accessibility', href: '/docs/accessibility' }
  ],
  Community: [
    { label: 'GitHub', href: 'https://github.com/maxzillabong/maxzilla-ui', external: true },
    { label: 'Issues', href: 'https://github.com/maxzillabong/maxzilla-ui/issues', external: true },
    { label: 'Discussions', href: 'https://github.com/maxzillabong/maxzilla-ui/discussions', external: true },
    { label: 'Contributing', href: '/docs/contributing' }
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'License', href: 'https://github.com/maxzillabong/maxzilla-ui/blob/main/LICENSE', external: true },
    { label: 'Code of Conduct', href: '/code-of-conduct' }
  ]
}

export function Footer() {
  return (
    <footer className="bg-neutral-900 dark:bg-neutral-950 text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 group mb-6">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-green-500 rounded-lg flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                    MZ
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-green-500 rounded-lg opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gradient">Maxzilla UI</div>
                  <div className="text-sm text-neutral-400 -mt-1">v{packageJson.version}</div>
                </div>
              </Link>

              {/* Description */}
              <p className="text-neutral-400 text-lg leading-relaxed mb-6">
                A modern web components library with Aceternity-inspired design. 
                Framework-agnostic, accessible, and beautiful by default.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <Link
                  href="https://github.com/maxzillabong/maxzilla-ui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors duration-200 group"
                  aria-label="GitHub Repository"
                >
                  <Github className="w-5 h-5 text-neutral-400 group-hover:text-white" />
                </Link>
                
                <Link
                  href="http://localhost:6007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors duration-200 group"
                  aria-label="Storybook Documentation"
                >
                  <BookOpen className="w-5 h-5 text-neutral-400 group-hover:text-white" />
                </Link>
                
                <Link
                  href="https://maxzilla.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors duration-200 group"
                  aria-label="Maxzilla Website"
                >
                  <Globe className="w-5 h-5 text-neutral-400 group-hover:text-white" />
                </Link>

                <Link
                  href="mailto:hello@maxzilla.nl"
                  className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors duration-200 group"
                  aria-label="Contact Email"
                >
                  <Mail className="w-5 h-5 text-neutral-400 group-hover:text-white" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 flex items-center gap-1 group"
                      >
                        {link.label}
                        {link.external && (
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-neutral-800 pt-12 mb-12"
        >
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-neutral-400 mb-6">
              Get notified about new components, framework updates, and best practices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-neutral-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-neutral-400">
              <span>© 2024 Maxzilla UI. Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>by</span>
              <Link 
                href="https://maxzilla.nl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 font-medium transition-colors duration-200"
              >
                Max Vananen
              </Link>
            </div>

            <div className="flex items-center gap-6 text-sm text-neutral-400">
              <span>MIT Licensed</span>
              <span>•</span>
              <span>Open Source</span>
              <span>•</span>
              <Link 
                href="/privacy" 
                className="hover:text-primary-400 transition-colors duration-200"
              >
                Privacy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
