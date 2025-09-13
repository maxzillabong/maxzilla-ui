"use client"
import Link from 'next/link'

export function InlineFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="text-xs text-neutral-500 dark:text-neutral-400 flex flex-wrap items-center gap-x-3 gap-y-2">
      <span>© {year} Maxzilla UI</span>
      <span className="opacity-50">•</span>
      <Link href="/docs" className="hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors">Docs</Link>
      <span className="opacity-50">•</span>
      <a href="http://localhost:6006" target="_blank" rel="noopener" className="hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors">Storybook</a>
      <span className="opacity-50">•</span>
      <a href="https://github.com/maxzillabong/maxzilla-ui" target="_blank" rel="noopener" className="hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors">GitHub</a>
    </footer>
  )
}

