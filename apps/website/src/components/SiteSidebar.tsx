"use client"
import Link from 'next/link'
import { useMemo } from 'react'
import { componentsData } from '@/app/components/registry-data'

type Category = {
  name: string
  items: { slug: string; name: string }[]
}

const CATEGORY_ORDER = ['Basics', 'Forms', 'Data Display', 'Navigation', 'Layout', 'Overlays']

export function SiteSidebar({
  current,
  pathname,
  sticky = true,
  filter = '',
}: {
  current?: string
  pathname?: string
  sticky?: boolean
  filter?: string
}) {
  const grouped = useMemo<Category[]>(() => {
    const map = new Map<string, { slug: string; name: string }[]>()
    const q = filter.trim().toLowerCase()
    componentsData.forEach((c) => {
      const matches =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.slug.toLowerCase().includes(q) ||
        c.description?.toLowerCase().includes(q)
      if (!matches) return
      const arr = map.get(c.category) ?? []
      arr.push({ slug: c.slug, name: c.name })
      map.set(c.category, arr)
    })
    return CATEGORY_ORDER.filter((c) => map.has(c)).map((c) => ({ name: c, items: map.get(c)! }))
  }, [filter])

  const docs = [
    { href: '/docs', label: 'Overview' },
    { href: '/docs/getting-started', label: 'Getting Started' },
    { href: '/docs/installation', label: 'Installation' },
    { href: '/docs/theming', label: 'Theming' },
    { href: '/docs/design-tokens', label: 'Design Tokens' },
    { href: '/docs/tokens/color', label: '→ Color Tokens' },
    { href: '/docs/tokens/spacing', label: '→ Spacing Tokens' },
    { href: '/docs/typography', label: 'Typography' },
    { href: '/docs/accessibility', label: 'Accessibility' },
    { href: '/docs/contributing', label: 'Contributing' },
    { href: '/examples', label: 'Examples' },
  ]

  const isActiveDoc = (href: string) => (pathname ? pathname.startsWith(href) : false)

  return (
    <nav aria-label="Site" className="text-sm text-neutral-700 dark:text-neutral-300">
      <div className={`${sticky ? 'sticky top-20 max-h-[calc(100vh-6rem)]' : ''} overflow-auto pr-2`}>
        {/* Top-level documentation links */}
        <div className="mb-5">
          <div className="px-2 py-1 mb-2 mt-3 rounded-md bg-neutral-50 dark:bg-neutral-800/60 text-neutral-900 dark:text-neutral-100 font-semibold uppercase tracking-wide text-[0.7rem]">Documentation</div>
          <ul className="space-y-1">
            {docs.map((d) => (
              <li key={d.href}>
                <Link href={d.href} className={`block px-2 py-1 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 ${isActiveDoc(d.href) ? 'bg-neutral-100 dark:bg-neutral-800 font-medium' : ''}`}>
                  {d.label}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <a href="http://localhost:6006" target="_blank" rel="noopener" className="block px-2 py-1 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800">Storybook</a>
            </li>
          </ul>
        </div>

        {/* Components grouped list */}
        {grouped.length === 0 && (
          <div className="px-2 py-6 text-neutral-500 dark:text-neutral-400">No components match “{filter}”.</div>
        )}
        {grouped.map((cat) => (
          <div key={cat.name} className="mb-5">
            <div className="px-2 py-1 mb-2 mt-3 rounded-md bg-neutral-50 dark:bg-neutral-800/60 text-neutral-900 dark:text-neutral-100 font-semibold uppercase tracking-wide text-[0.7rem]">{cat.name}</div>
            <ul className="space-y-1">
              {cat.items.map((it) => (
                <li key={it.slug}>
                  <Link
                    href={`/components/${it.slug}`}
                    className={`block px-2 py-1 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 ${
                      it.slug === current ? 'bg-neutral-100 dark:bg-neutral-800 font-medium' : ''
                    }`}
                  >
                    {it.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  )
}
