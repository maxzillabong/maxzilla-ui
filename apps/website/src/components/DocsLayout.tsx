'use client'

import { Header } from '@/components/Header'
import { SiteSidebar } from '@/components/SiteSidebar'
import { InlineFooter } from '@/components/InlineFooter'
import { TableOfContents } from '@/components/TableOfContents'
import { ReactNode } from 'react'

interface DocsLayoutProps {
  children: ReactNode
  pathname?: string
}

export function DocsLayout({ children, pathname = '/docs' }: DocsLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-50 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900 flex flex-col">
      <Header />
      <div className="flex-1 flex overflow-hidden pt-20">
        <div className="w-full flex">
          {/* Left column - Sidebar */}
          <aside className="hidden lg:block w-[17rem] flex-shrink-0 h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="py-8 px-4">
              <SiteSidebar pathname={pathname} sticky={false} />
            </div>
          </aside>

          {/* Middle column - Main content */}
          <main className="flex-1 h-[calc(100vh-5rem)] overflow-y-auto xl:overflow-visible xl:h-auto">
            <div className="xl:flex xl:gap-8">
              <article className="flex-1 xl:h-[calc(100vh-5rem)] xl:overflow-y-auto min-h-full flex flex-col">
                <div className="flex-1 px-8 py-8 docs-content">
                  <div className="max-w-4xl">
                    {children}
                  </div>
                </div>
                <div className="px-8 pb-8">
                  <div className="mt-16 pt-6 border-t border-neutral-200 dark:border-neutral-800 max-w-4xl">
                    <InlineFooter />
                  </div>
                </div>
              </article>

              {/* Right column - Table of contents (for larger screens) */}
              <aside className="hidden xl:block w-[14rem] flex-shrink-0 h-[calc(100vh-5rem)] overflow-y-auto">
                <div className="py-8 pr-4">
                  <TableOfContents />
                </div>
              </aside>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}