'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
  showLineNumbers?: boolean
}

export function CodeBlock({ code, language = 'typescript', title, showLineNumbers = false }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Map language names for syntax highlighter
  const getLanguage = (lang: string) => {
    switch (lang.toLowerCase()) {
      case 'tsx':
        return 'typescript'
      case 'jsx':
        return 'javascript'
      case 'bash':
        return 'bash'
      case 'json':
        return 'json'
      default:
        return lang.toLowerCase()
    }
  }

  return (
    <div className="relative group mb-6">
      {title && (
        <div className="bg-neutral-900 dark:bg-neutral-800 text-neutral-400 px-4 py-2 text-sm font-medium rounded-t-xl border-b border-neutral-800 dark:border-neutral-700">
          {title}
        </div>
      )}
      <div className={`relative ${title ? 'rounded-t-none' : 'rounded-xl'} overflow-hidden`}>
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 z-10 p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-all opacity-0 group-hover:opacity-100"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
        <SyntaxHighlighter
          language={getLanguage(language)}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            borderRadius: title ? 0 : '0.75rem',
            background: '#1e1e1e',
            padding: '1.5rem',
            fontSize: '0.875rem',
            lineHeight: '1.5'
          }}
          showLineNumbers={showLineNumbers}
          lineNumberStyle={{
            minWidth: '2.5em',
            paddingRight: '1em',
            color: '#6e7681',
            userSelect: 'none'
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}