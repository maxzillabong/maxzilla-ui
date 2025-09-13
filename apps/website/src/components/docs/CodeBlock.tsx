'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import Prism from 'prismjs'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'
import 'prismjs/themes/prism-tomorrow.css'
import { useEffect } from 'react'

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
  showLineNumbers?: boolean
}

export function CodeBlock({ code, language = 'typescript', title, showLineNumbers = false }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [highlighted, setHighlighted] = useState('')

  useEffect(() => {
    const grammar = Prism.languages[language]
    if (grammar) {
      setHighlighted(Prism.highlight(code, grammar, language))
    } else {
      setHighlighted(code)
    }
  }, [code, language])

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group mb-6">
      {title && (
        <div className="bg-neutral-900 dark:bg-neutral-800 text-neutral-400 px-4 py-2 text-sm font-medium rounded-t-xl border-b border-neutral-800 dark:border-neutral-700">
          {title}
        </div>
      )}
      <pre className={`${title ? 'rounded-t-none' : ''} ${showLineNumbers ? 'pl-12' : ''} relative`}>
        {showLineNumbers && (
          <div className="absolute left-0 top-0 bottom-0 w-12 border-r border-neutral-800 text-neutral-500 text-right pr-2 pt-4 select-none">
            {code.split('\n').map((_, i) => (
              <div key={i} className="leading-relaxed text-sm">
                {i + 1}
              </div>
            ))}
          </div>
        )}
        <code
          className={`language-${language}`}
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-all opacity-0 group-hover:opacity-100"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </pre>
    </div>
  )
}