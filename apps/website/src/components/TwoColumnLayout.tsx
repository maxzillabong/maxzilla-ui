'use client'

import { Header } from '@/components/Header'
import { SiteSidebar } from '@/components/SiteSidebar'
import { InlineFooter } from '@/components/InlineFooter'
import { ReactNode } from 'react'

interface TwoColumnLayoutProps {
  children: ReactNode
  pathname?: string
}

export function TwoColumnLayout({ children, pathname = '/docs' }: TwoColumnLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-50 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900 flex flex-col">
      <Header />
      <div className="flex-1 flex overflow-hidden pt-20">
        <div className="w-full flex">
          {/* Left column - Sidebar with independent scrolling */}
          <aside className="hidden lg:block w-[17rem] flex-shrink-0 h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="py-8 px-4">
              <SiteSidebar pathname={pathname} sticky={false} />
            </div>
          </aside>

          {/* Right column - Main content with scrollbar at browser edge */}
          <main className="flex-1 h-[calc(100vh-5rem)] overflow-y-auto">
            <article className="min-h-full flex flex-col">
              <div className="flex-1 w-full max-w-[90rem] mx-auto px-8 py-8">
                {children}
              </div>
              <div className="max-w-[90rem] mx-auto px-8 pb-8">
                <div className="mt-16 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                  <InlineFooter />
                </div>
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  )
}