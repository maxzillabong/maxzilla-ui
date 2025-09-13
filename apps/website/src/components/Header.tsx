"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'
import { Menu, X, Github, Sun, Moon } from 'lucide-react'
import Link from 'next/link'
import { Input } from 'maxzilla-ui-react'
import { SiteSidebar } from './SiteSidebar'
import packageJson from '../../package.json'

const NAV_ITEMS = [
  { href: '/docs', label: 'Documentation' },
  { href: '/docs/getting-started', label: 'Getting Started' },
  { href: '/docs/installation', label: 'Installation' },
  { href: '/docs/theming', label: 'Theming' },
  { href: '/docs/design-tokens', label: 'Design Tokens' },
  { href: '/docs/accessibility', label: 'Accessibility' },
  { href: '/docs/contributing', label: 'Contributing' },
  { href: '/components', label: 'Components' },
  { href: '/examples', label: 'Examples' },
  { href: 'http://localhost:6006', label: 'Storybook', external: true },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)
  const [query, setQuery] = useState('')
  const [pathname, setPathname] = useState('')

  // Apply page transform when menu opens
  useEffect(() => {
    const body = document.body
    if (isMenuOpen) {
      body.style.overflow = 'hidden'
      body.classList.add('menu-open')
    } else {
      body.style.overflow = ''
      body.classList.remove('menu-open')
    }

    return () => {
      body.style.overflow = ''
      body.classList.remove('menu-open')
    }
  }, [isMenuOpen])

  useEffect(() => {
    setMounted(true)
    setPathname(window.location.pathname)
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialTheme = (stored as 'light' | 'dark') || (prefersDark ? 'dark' : 'light')
    setTheme(initialTheme)
    document.documentElement.setAttribute('data-theme', initialTheme)

    // Update Tailwind dark mode class
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    // Sync with web components theme system
    localStorage.setItem('mz-theme', initialTheme)
    document.documentElement.classList.remove('mz-theme-light', 'mz-theme-dark')
    document.documentElement.classList.add(`mz-theme-${initialTheme}`)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)

    // Update Tailwind dark mode class
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    // Sync with web components theme system
    localStorage.setItem('mz-theme', newTheme)
    document.documentElement.classList.remove('mz-theme-light', 'mz-theme-dark')
    document.documentElement.classList.add(`mz-theme-${newTheme}`)

    // Dispatch web components theme change event
    window.dispatchEvent(
      new CustomEvent('mz-theme-change', {
        detail: { theme: newTheme },
      })
    )
  };

  // Render immediately; we handle theme updates after mount.

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left cluster: hamburger + logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors duration-200"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
            </button>
            <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-green-500 rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                MZ
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-green-500 rounded-lg opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
            </div>
            <div>
              <div className="text-xl font-bold text-gradient">Maxzilla UI</div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 -mt-1">v{packageJson.version}</div>
            </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8" aria-hidden="true"></div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors duration-200"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
              ) : (
                <Sun className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
              )}
            </button>

            {/* GitHub Link */}
            <Link
              href="https://github.com/maxzillabong/maxzilla-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-100 text-white dark:text-neutral-900 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </Link>

            {/* Mobile Menu Button moved to left */}
          </div>
        </div>

      {/* Mobile Menu Drawer (portal to avoid transform/fixed issues) */}
      {mounted && createPortal(
        (
          <AnimatePresence>
            {isMenuOpen && (
              <>
                {/* Scrim */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-black/30 backdrop-blur-[1px] z-[9998] md:hidden"
                  aria-hidden="true"
                  onClick={() => setIsMenuOpen(false)}
                />

                {/* Sidebar (left) */}
                <motion.div
                  initial={{ x: -320 }}
                  animate={{ x: 0 }}
                  exit={{ x: -320 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="fixed inset-y-0 left-0 w-80 bg-white dark:bg-neutral-900 mobile-menu-slide z-[9999] md:hidden shadow-xl"
                  role="dialog"
                  aria-label="Mobile navigation"
                >
                <div className="flex flex-col h-full">
                  {/* Menu Header */}
                  <div className="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-neutral-800">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-green-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        MZ
                      </div>
                      <span className="text-lg font-bold text-gradient">Maxzilla UI</span>
                    </div>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors duration-200"
                      aria-label="Close menu"
                    >
                      <X className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                    </button>
                  </div>

                  {/* Menu Content */}
                  <div className="flex-1 overflow-y-auto">
                    <div className="p-4 border-b border-neutral-200 dark:border-neutral-800">
                      <Input label="Search" placeholder="Filter components…" value={query} onInput={(e: any) => setQuery(e.target?.value ?? '')} />
                    </div>
                    <div className="p-4" data-testid="mobile-menu-items">
                      <SiteSidebar current={undefined} pathname={pathname} sticky={false} filter={query} />
                      <div className="mt-6">
                        <div className="px-2 py-1 mb-2 rounded-md bg-neutral-50 dark:bg-neutral-800/60 text-neutral-900 dark:text-neutral-100 font-semibold uppercase tracking-wide text-[0.7rem]">Quick Links</div>
                        <ul className="space-y-1">
                          {NAV_ITEMS.map((item) => (
                            <li key={item.href}>
                              <a
                                href={item.href}
                                target={item.external ? '_blank' : undefined}
                                rel={item.external ? 'noopener noreferrer' : undefined}
                                className="block px-2 py-1 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  {/* Theme Toggle */}
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                    className="pt-4 border-t border-neutral-200 dark:border-neutral-800"
                  >
                    <button
                      onClick={toggleTheme}
                      className="flex items-center gap-3 w-full p-3 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors duration-200"
                    >
                      {theme === 'light' ? (
                        <Moon className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                      ) : (
                        <Sun className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                      )}
                      <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                      </span>
                    </button>
                  </motion.div>

                  {/* GitHub Link */}
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.3 }}
                  >
                    <Link
                      href="https://github.com/maxzillabong/maxzilla-ui"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-100 text-white dark:text-neutral-900 px-6 py-3 rounded-lg font-semibold transition-all duration-200 w-full justify-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Github className="w-5 h-5" />
                      <span>View on GitHub</span>
                    </Link>
                  </motion.div>
                  </div>
                </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        ),
        document.body
      )}
      </nav>
    </header>
  )
}
