"use client"
import React, { useEffect, useMemo, useState } from 'react'
import { findBySlug } from '../registry'

export function TOCClient({ slug, sticky = true }: { slug: string; sticky?: boolean }) {
  const meta = findBySlug(slug)
  const [active, setActive] = useState<string>('')
  const items = useMemo(() => {
    if (!meta) return [] as { id: string; title: string }[]
    if (meta.sections && meta.sections.length) {
      return meta.sections.map((s: any) => ({ id: s.id, title: s.title }))
    }
    return [{ id: 'examples', title: 'Examples' }]
  }, [meta])

  useEffect(() => {
    if (!items.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        // Sort by intersection ratio / visible top
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top - b.boundingClientRect.top))
        if (visible[0]) {
          const id = (visible[0].target as HTMLElement).id
          if (id) setActive(id)
        }
      },
      { root: null, rootMargin: '0px 0px -60% 0px', threshold: [0, 0.25, 0.5, 1] }
    )
    const nodes = items
      .map((i) => document.getElementById(i.id))
      .filter((n): n is HTMLElement => !!n)
    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [items])

  return (
    <aside className="text-sm text-neutral-700 dark:text-neutral-300">
      <div className={`${sticky ? 'sticky top-20 max-h-[calc(100vh-6rem)]' : ''} overflow-auto pl-2`}>
        <div className="font-semibold mb-2">On this page</div>
        <ul className="space-y-1">
          {items.map((i) => (
            <li key={i.id}>
              <a href={`#${i.id}`} className={`block px-2 py-1 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 ${active === i.id ? 'text-primary-600 dark:text-primary-400 font-medium' : ''}`}>
                {i.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
