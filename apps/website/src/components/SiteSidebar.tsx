"use client"
import Link from 'next/link'
import { useMemo, useEffect, useRef } from 'react'
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
  const navRef = useRef<HTMLDivElement>(null)

  // Save and restore scroll position when navigating between components
  useEffect(() => {
    const scrollKey = 'sidebar-scroll-position'
    const navEl = navRef.current

    if (navEl) {
      // Restore scroll position
      const savedPosition = sessionStorage.getItem(scrollKey)
      if (savedPosition) {
        navEl.scrollTop = parseInt(savedPosition, 10)
      }

      // Save scroll position on scroll
      const handleScroll = () => {
        sessionStorage.setItem(scrollKey, navEl.scrollTop.toString())
      }

      navEl.addEventListener('scroll', handleScroll)
      return () => navEl.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
    { href: '/docs/accessibility', label: 'Accessibility' },
    { href: '/docs/contributing', label: 'Contributing' },
  ]

  const tokens = [
    { href: '/docs/tokens/color', label: 'Colors' },
    { href: '/docs/tokens/spacing', label: 'Spacing' },
    { href: '/docs/typography', label: 'Typography' },
    { href: '/docs/tokens/shadows', label: 'Shadows' },
    { href: '/docs/tokens/borders', label: 'Borders' },
    { href: '/docs/tokens/animations', label: 'Animations' },
  ]

  const resources = [
    { href: '/examples', label: 'Examples' },
    { href: 'http://localhost:6006', label: 'Storybook', external: true },
  ]

  const isActiveDoc = (href: string) => (pathname ? pathname.startsWith(href) : false)

  return (
    <nav aria-label="Site" className="text-sm text-neutral-700 dark:text-neutral-300">
      <div ref={navRef} className={`${sticky ? 'sticky top-20 max-h-[calc(100vh-6rem)]' : ''} overflow-auto pr-2`}>
        {/* Documentation */}
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
          </ul>
        </div>

        {/* Design Tokens */}
        <div className="mb-5">
          <div className="px-2 py-1 mb-2 mt-3 rounded-md bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 text-primary-900 dark:text-primary-100 font-semibold uppercase tracking-wide text-[0.7rem]">Design Tokens</div>
          <ul className="space-y-1">
            {tokens.map((t) => (
              <li key={t.href}>
                <Link href={t.href} className={`block px-2 py-1 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 ${isActiveDoc(t.href) ? 'bg-neutral-100 dark:bg-neutral-800 font-medium' : ''}`}>
                  {t.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="mb-5">
          <div className="px-2 py-1 mb-2 mt-3 rounded-md bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-900 dark:text-green-100 font-semibold uppercase tracking-wide text-[0.7rem]">Resources</div>
          <ul className="space-y-1">
            {resources.map((r) => (
              <li key={r.href}>
                {r.external ? (
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-2 py-1 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 items-center justify-between"
                  >
                    {r.label}
                    <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <Link href={r.href} className={`block px-2 py-1 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 ${isActiveDoc(r.href) ? 'bg-neutral-100 dark:bg-neutral-800 font-medium' : ''}`}>
                    {r.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Components - Header with gradient */}
        <div className="mb-5">
          <div className="px-2 py-1 mb-2 mt-3 rounded-md bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-900 dark:text-blue-100 font-semibold uppercase tracking-wide text-[0.7rem]">Components</div>
        </div>

        {/* Components grouped list */}
        {grouped.length === 0 && (
          <div className="px-2 py-6 text-neutral-500 dark:text-neutral-400">No components match "{filter}".</div>
        )}
        {grouped.map((cat) => (
          <div key={cat.name} className="mb-5">
            <div className="px-2 py-1 mb-2 rounded-md bg-neutral-50/50 dark:bg-neutral-800/30 text-neutral-700 dark:text-neutral-300 font-medium text-[0.7rem] uppercase tracking-wide">{cat.name}</div>
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
