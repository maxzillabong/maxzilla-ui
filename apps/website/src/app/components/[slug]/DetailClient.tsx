"use client"
import { useState } from 'react'
import { findBySlug } from '../registry'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import oneDark from 'react-syntax-highlighter/dist/esm/styles/prism/one-dark'

export default function DetailClient({ slug }: { slug: string }) {
  const meta = findBySlug(slug)
  const [tab, setTab] = useState<'preview' | 'code'>('preview')
  if (!meta) return null
  const { Preview, code } = meta
  return (
    <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden bg-white dark:bg-neutral-900">
      <div className="flex items-center gap-2 border-b border-neutral-200 dark:border-neutral-800 px-3 py-2">
        <button onClick={() => setTab('preview')} className={`px-3 py-1.5 rounded-md text-sm ${tab === 'preview' ? 'bg-neutral-100 dark:bg-neutral-800 font-semibold' : 'text-neutral-600 dark:text-neutral-400'}`}>Preview</button>
        <button onClick={() => setTab('code')} className={`px-3 py-1.5 rounded-md text-sm ${tab === 'code' ? 'bg-neutral-100 dark:bg-neutral-800 font-semibold' : 'text-neutral-600 dark:text-neutral-400'}`}>Code</button>
      </div>
      {tab === 'preview' ? (
        <div className="p-6">
          <Preview />
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-0">
          <div className="p-0 border-r border-neutral-200 dark:border-neutral-800">
            <SyntaxHighlighter language="tsx" style={oneDark} customStyle={{ margin: 0, borderRadius: 0, background: 'transparent' }}>
              {code.react}
            </SyntaxHighlighter>
          </div>
          <div className="p-0">
            <SyntaxHighlighter language="html" style={oneDark} customStyle={{ margin: 0, borderRadius: 0, background: 'transparent' }}>
              {code.html}
            </SyntaxHighlighter>
          </div>
        </div>
      )}
    </div>
  )
}
