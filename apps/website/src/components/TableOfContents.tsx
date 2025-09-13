'use client'

import { useEffect, useState, useRef } from 'react'

interface TocItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  selector?: string // CSS selector for headings to include
  maxDepth?: number // Maximum heading depth (e.g., 3 for h1, h2, h3)
}

export function TableOfContents({
  selector = 'h2, h3',
  maxDepth = 3
}: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Extract headings from the document
  useEffect(() => {
    const extractHeadings = () => {
      const elements = document.querySelectorAll(selector)
      const items: TocItem[] = []

      elements.forEach((element) => {
        if (element.id && element.textContent) {
          const level = parseInt(element.tagName[1])
          if (level <= maxDepth) {
            items.push({
              id: element.id,
              text: element.textContent,
              level: level
            })
          }
        }
      })

      setHeadings(items)
    }

    // Wait for content to load
    setTimeout(extractHeadings, 100)

    // Re-extract if content changes
    const mutationObserver = new MutationObserver(extractHeadings)
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    })

    return () => mutationObserver.disconnect()
  }, [selector, maxDepth])

  // Set up Intersection Observer for scroll spy
  useEffect(() => {
    const callback: IntersectionObserverCallback = (entries) => {
      // Find the first visible heading
      const visibleEntries = entries.filter(entry => entry.isIntersecting)

      if (visibleEntries.length > 0) {
        // Get the topmost visible heading
        const topEntry = visibleEntries.reduce((prev, current) => {
          return prev.boundingClientRect.top < current.boundingClientRect.top ? prev : current
        })
        setActiveId(topEntry.target.id)
      } else {
        // If no headings are visible, find the closest one above the viewport
        const allHeadings = headings.map(h => document.getElementById(h.id)).filter(Boolean) as HTMLElement[]
        const scrollY = window.scrollY

        for (let i = allHeadings.length - 1; i >= 0; i--) {
          const heading = allHeadings[i]
          if (heading.offsetTop <= scrollY + 100) {
            setActiveId(heading.id)
            break
          }
        }
      }
    }

    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    // Find the scrollable container
    const scrollableContainer = document.querySelector('article') || document.querySelector('main')

    // Create new observer
    observerRef.current = new IntersectionObserver(callback, {
      root: scrollableContainer, // Observe within the scrollable container
      rootMargin: '-20px 0px -70% 0px', // Adjust for scroll position
      threshold: [0, 0.5, 1]
    })

    // Observe all headings
    headings.forEach(heading => {
      const element = document.getElementById(heading.id)
      if (element) {
        observerRef.current?.observe(element)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [headings])

  // Handle click with smooth scrolling
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const targetElement = document.getElementById(id)

    if (targetElement) {
      // Try to find the scrollable article first, then main
      let scrollContainer: Element | null = targetElement.closest('article')
      if (!scrollContainer) {
        scrollContainer = targetElement.closest('main')
      }

      if (scrollContainer) {
        // Calculate the target element's position relative to the scroll container
        const targetRect = targetElement.getBoundingClientRect()
        const containerRect = scrollContainer.getBoundingClientRect()

        // Current scroll position of the container
        const currentScrollTop = scrollContainer.scrollTop

        // Calculate where we need to scroll to
        const targetScrollPosition = currentScrollTop + (targetRect.top - containerRect.top) - 20 // 20px offset from top

        // Scroll the container
        scrollContainer.scrollTo({
          top: targetScrollPosition,
          behavior: 'smooth'
        })
      } else {
        // Fallback for pages without our expected container structure
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }

      // Update active state immediately
      setActiveId(id)

      // Update URL without scrolling
      window.history.replaceState(null, '', `#${id}`)
    }
  }

  if (headings.length === 0) {
    return null
  }

  return (
    <nav className="docs-toc" aria-label="Table of contents">
      <h3 className="docs-toc-title">On this page</h3>
      <ul className="space-y-1">
        {headings.map((heading) => {
          const isActive = activeId === heading.id
          const indent = (heading.level - 2) // h2 = 0rem, h3 = 1rem, etc.

          return (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                onClick={(e) => handleClick(e, heading.id)}
                className={`
                  block py-1.5 text-sm transition-colors
                  ${isActive
                    ? 'text-primary-600 dark:text-primary-400 font-medium'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }
                `}
                style={{ paddingLeft: `${indent}rem` }}
                aria-current={isActive ? 'location' : undefined}
              >
                {heading.text}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
