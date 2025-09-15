"use client"

import { useEffect, useRef } from 'react'
import { ComponentsSidebar } from './ComponentsSidebar'

export function SidebarScrollWrapper({ current }: { current: string }) {
  const asideRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const scrollKey = 'components-sidebar-scroll'
    const aside = asideRef.current

    if (!aside) return

    // Restore scroll position
    const restoreScroll = () => {
      const savedPosition = sessionStorage.getItem(scrollKey)
      if (savedPosition && aside) {
        aside.scrollTop = parseInt(savedPosition, 10)
      }
    }

    // Save scroll position
    const handleScroll = () => {
      sessionStorage.setItem(scrollKey, aside.scrollTop.toString())
    }

    // Restore immediately
    restoreScroll()

    // Also restore after a delay to ensure content is loaded
    const timeoutId = setTimeout(restoreScroll, 100)

    // Add scroll listener
    aside.addEventListener('scroll', handleScroll)

    return () => {
      aside.removeEventListener('scroll', handleScroll)
      clearTimeout(timeoutId)
    }
  }, [current]) // Re-run when component changes

  return (
    <aside ref={asideRef} className="hidden lg:block w-[17rem] flex-shrink-0 h-[calc(100vh-5rem)] overflow-y-auto">
      <div className="py-8 px-4">
        <ComponentsSidebar current={current} sticky={false} />
      </div>
    </aside>
  )
}