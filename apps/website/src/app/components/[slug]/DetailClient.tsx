"use client"
import { useMemo, useState } from 'react'
import { findBySlug } from '../registry'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import oneDark from 'react-syntax-highlighter/dist/esm/styles/prism/one-dark'

type Section = {
  id: string
  title: string
  Preview: React.FC
  code: { react: string; html: string }
}

export default function DetailClient({ slug }: { slug: string }) {
  const meta = findBySlug(slug)
  const [tabBySection, setTabBySection] = useState<Record<string, 'preview' | 'code'>>({})
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
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-0 border-r border-neutral-200 dark:border-neutral-800">
                    <SyntaxHighlighter language="tsx" style={oneDark} customStyle={{ margin: 0, borderRadius: 0, background: 'transparent' }}>
                      {s.code.react}
                    </SyntaxHighlighter>
                  </div>
                  <div className="p-0">
                    <SyntaxHighlighter language="html" style={oneDark} customStyle={{ margin: 0, borderRadius: 0, background: 'transparent' }}>
                      {s.code.html}
                    </SyntaxHighlighter>
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
