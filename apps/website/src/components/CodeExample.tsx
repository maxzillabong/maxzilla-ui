'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'

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

  // Simple syntax highlighting for demonstration
  const highlightCode = (code: string, language: string) => {
    if (language === 'html') {
      return code
        .replace(/(&lt;[^&]*&gt;)/g, '<span class="text-blue-400">$1</span>')
        .replace(/(\/\*.*?\*\/)/g, '<span class="text-green-400">$1</span>')
    }
    
    if (language === 'tsx' || language === 'javascript') {
      return code
        .replace(/(import|export|function|const|let|var|return|from)/g, '<span class="text-purple-400">$1</span>')
        .replace(/('.*?'|".*?")/g, '<span class="text-green-400">$1</span>')
        .replace(/(\/\/.*)/g, '<span class="text-gray-500">$1</span>')
        .replace(/(\{|\}|\(|\)|\[|\])/g, '<span class="text-yellow-400">$1</span>')
    }

    return code
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
        <div className="bg-neutral-900 dark:bg-neutral-950 p-6 overflow-x-auto">
          <pre className="text-sm text-neutral-300 font-mono leading-relaxed">
            <code 
              dangerouslySetInnerHTML={{ 
                __html: highlightCode(code, language) 
              }} 
            />
          </pre>
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