"use client"
import { useMemo, useState } from 'react'
import { findBySlug } from '../registry'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Copy, Check } from 'lucide-react'

type Section = {
  id: string
  title: string
  Preview: React.FC
  code: { react: string; html: string }
}

export default function DetailClient({ slug }: { slug: string }) {
  const meta = findBySlug(slug)
  const [tabBySection, setTabBySection] = useState<Record<string, 'preview' | 'code'>>({})
  const [copiedSection, setCopiedSection] = useState<string | null>(null)

  const sections: Section[] = useMemo(() => {
    if (!meta) return []
    if (meta.sections && meta.sections.length) return meta.sections as Section[]
    // Fallback to a single Examples section from top-level Preview/code
    return [
      {
        id: 'examples',
        title: 'Examples',
        Preview: meta.Preview,
        code: meta.code,
      },
    ]
  }, [meta])

  if (!meta) return null

  return (
    <div className="space-y-12">
      {sections.map((s) => {
        const tab = tabBySection[s.id] ?? 'preview'
        return (
          <section key={s.id} id={s.id} className="scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-3">{s.title}</h2>
            <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden bg-white dark:bg-neutral-900">
              <div className="flex items-center gap-2 border-b border-neutral-200 dark:border-neutral-800 px-3 py-2">
                <button
                  onClick={() => setTabBySection((m) => ({ ...m, [s.id]: 'preview' }))}
                  className={`px-3 py-1.5 rounded-md text-sm ${tab === 'preview' ? 'bg-neutral-100 dark:bg-neutral-800 font-semibold' : 'text-neutral-600 dark:text-neutral-400'}`}
                >
                  Preview
                </button>
                <button
                  onClick={() => setTabBySection((m) => ({ ...m, [s.id]: 'code' }))}
                  className={`px-3 py-1.5 rounded-md text-sm ${tab === 'code' ? 'bg-neutral-100 dark:bg-neutral-800 font-semibold' : 'text-neutral-600 dark:text-neutral-400'}`}
                >
                  Code
                </button>
              </div>
              {tab === 'preview' ? (
                <div className="p-6">
                  <s.Preview />
                </div>
              ) : (
                <div className="relative">
                  <div className="grid md:grid-cols-2 divide-x divide-neutral-200 dark:divide-neutral-800">
                    <div className="relative">
                      <div className="absolute top-2 right-2 z-10 flex items-center gap-2">
                        <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">React</span>
                        <button
                          onClick={async () => {
                            await navigator.clipboard.writeText(s.code.react)
                            setCopiedSection(`${s.id}-react`)
                            setTimeout(() => setCopiedSection(null), 2000)
                          }}
                          className="p-1.5 rounded-md bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-400 transition-colors"
                          aria-label="Copy React code"
                        >
                          {copiedSection === `${s.id}-react` ? (
                            <Check className="w-3.5 h-3.5" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                      <SyntaxHighlighter
                        language="tsx"
                        style={vscDarkPlus}
                        customStyle={{
                          margin: 0,
                          borderRadius: 0,
                          background: '#1e1e1e',
                          padding: '1.5rem',
                          fontSize: '0.875rem',
                          lineHeight: '1.5'
                        }}
                        showLineNumbers={true}
                        lineNumberStyle={{
                          minWidth: '2.5em',
                          paddingRight: '1em',
                          color: '#6e7681',
                          userSelect: 'none'
                        }}
                      >
                        {s.code.react}
                      </SyntaxHighlighter>
                    </div>
                    <div className="relative">
                      <div className="absolute top-2 right-2 z-10 flex items-center gap-2">
                        <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">HTML</span>
                        <button
                          onClick={async () => {
                            await navigator.clipboard.writeText(s.code.html)
                            setCopiedSection(`${s.id}-html`)
                            setTimeout(() => setCopiedSection(null), 2000)
                          }}
                          className="p-1.5 rounded-md bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-400 transition-colors"
                          aria-label="Copy HTML code"
                        >
                          {copiedSection === `${s.id}-html` ? (
                            <Check className="w-3.5 h-3.5" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                      <SyntaxHighlighter
                        language="html"
                        style={vscDarkPlus}
                        customStyle={{
                          margin: 0,
                          borderRadius: 0,
                          background: '#1e1e1e',
                          padding: '1.5rem',
                          fontSize: '0.875rem',
                          lineHeight: '1.5'
                        }}
                        showLineNumbers={true}
                        lineNumberStyle={{
                          minWidth: '2.5em',
                          paddingRight: '1em',
                          color: '#6e7681',
                          userSelect: 'none'
                        }}
                      >
                        {s.code.html}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        )
      })}
    </div>
  )
}
