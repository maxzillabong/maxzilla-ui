'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeExampleProps {
  title: string
  language: string
  code: string
  className?: string
}

export function CodeExample({ title, language, code, className = '' }: CodeExampleProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  // Map language names for syntax highlighter
  const getLanguage = (lang: string) => {
    switch (lang.toLowerCase()) {
      case 'tsx':
        return 'typescript'
      case 'jsx':
        return 'javascript'
      default:
        return lang.toLowerCase()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            {title}
          </span>
        </div>
        
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 px-3 py-1 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className="relative">
        <div className="overflow-x-auto">
          <SyntaxHighlighter
            language={getLanguage(language)}
            style={oneDark}
            customStyle={{
              margin: 0,
              padding: '1.5rem',
              fontSize: '0.875rem',
              lineHeight: '1.5',
              background: 'rgb(23, 23, 23)', // neutral-900
            }}
            wrapLongLines={false}
          >
            {code}
          </SyntaxHighlighter>
        </div>

        {/* Language Badge */}
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
            {language.toUpperCase()}
          </span>
        </div>
      </div>
    </motion.div>
  )
}