'use client'

import React, { forwardRef, useEffect, useRef, type ComponentPropsWithRef } from 'react'

// Props interface for web component wrappers
export interface WebComponentProps extends ComponentPropsWithRef<any> {
  children?: React.ReactNode
  [key: string]: any
}

/**
 * Creates a React wrapper component for a web component
 * Handles prop mapping, event binding, and ref forwarding
 */
export function createReactWrapper<T extends HTMLElement = HTMLElement>(
  tagName: string,
  eventMap: Record<string, string> = {}
) {
  const Component = forwardRef<T, WebComponentProps>((props, ref) => {
    const { children, className, style, ...webComponentProps } = props
    const elementRef = useRef<T>(null)

    // Automatically load web components
    useWebComponents()

    // Forward ref
    useEffect(() => {
      if (typeof ref === 'function') {
        ref(elementRef.current)
      } else if (ref) {
        ref.current = elementRef.current
      }
    }, [ref])

    // Handle web component properties and events
    useEffect(() => {
      const element = elementRef.current
      if (!element) return

      // Set properties on the web component
      Object.entries(webComponentProps).forEach(([key, value]) => {
        if (key.startsWith('on') && typeof value === 'function') {
          // Handle React event props (onSomething -> something)
          const eventName = eventMap[key] || key.slice(2).toLowerCase()

          const handler = (event: Event) => {
            value(event)
          }

          element.addEventListener(eventName, handler)

          return () => {
            element.removeEventListener(eventName, handler)
          }
        } else if (key !== 'children') {
          // Set attribute or property
          if (typeof value === 'boolean') {
            if (value) {
              element.setAttribute(key.replace(/([A-Z])/g, '-$1').toLowerCase(), '')
            } else {
              element.removeAttribute(key.replace(/([A-Z])/g, '-$1').toLowerCase())
            }
          } else if (value !== undefined && value !== null) {
            const attrName = key.replace(/([A-Z])/g, '-$1').toLowerCase()
            element.setAttribute(attrName, String(value))
          }
        }
      })
    }, [webComponentProps])

    return React.createElement(
      tagName,
      {
        ref: elementRef,
        className,
        style,
      },
      children
    )
  })

  Component.displayName = `ReactWrapper(${tagName})`
  return Component
}

/**
 * Hook to ensure web components are loaded
 */
export function useWebComponents() {
  useEffect(() => {
    // Import web components if not already loaded
    if (typeof window !== 'undefined' && 'customElements' in window) {
      // Use dynamic import with type assertion to avoid TS errors
      // @ts-ignore - maxzilla-ui-core is a sibling package
      void import('maxzilla-ui-core').catch(console.error)
    }
  }, [])
}
