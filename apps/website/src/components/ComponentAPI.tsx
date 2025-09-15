'use client'

import { useState, useEffect } from 'react'
import { Copy, Check, ChevronDown, ChevronRight, Code, Zap, Package, Palette } from 'lucide-react'
import { generatedComponentAPIs } from '../data/generated-component-apis'

// Component metadata - manually curated for better descriptions
// Falls back to auto-generated APIs for components not defined here
export const componentAPIs: Record<string, ComponentAPIData> = {
  button: {
    properties: [
      {
        name: 'variant',
        type: '"primary" | "secondary" | "ghost" | "danger" | "success"',
        default: '"primary"',
        description: 'Visual style variant of the button',
        category: 'appearance'
      },
      {
        name: 'size',
        type: '"xs" | "sm" | "md" | "lg" | "xl"',
        default: '"md"',
        description: 'Size of the button',
        category: 'appearance'
      },
      {
        name: 'type',
        type: '"button" | "submit" | "reset"',
        default: '"button"',
        description: 'HTML button type attribute',
        category: 'behavior'
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables the button',
        category: 'state'
      },
      {
        name: 'loading',
        type: 'boolean',
        default: 'false',
        description: 'Shows loading spinner and disables interactions',
        category: 'state'
      },
      {
        name: 'full-width',
        type: 'boolean',
        default: 'false',
        description: 'Makes button span full width of container',
        category: 'layout'
      },
      {
        name: 'icon-only',
        type: 'boolean',
        default: 'false',
        description: 'Optimizes padding for icon-only buttons',
        category: 'layout'
      },
      {
        name: 'href',
        type: 'string',
        default: 'undefined',
        description: 'URL to navigate to (renders as anchor)',
        category: 'navigation'
      },
      {
        name: 'target',
        type: '"_blank" | "_self" | "_parent" | "_top"',
        default: 'undefined',
        description: 'Target window for navigation',
        category: 'navigation'
      }
    ],
    events: [
      {
        name: 'mz-click',
        description: 'Fired when button is clicked',
        detail: '{ originalEvent: MouseEvent }'
      },
      {
        name: 'mz-focus',
        description: 'Fired when button receives focus',
        detail: 'FocusEvent'
      },
      {
        name: 'mz-blur',
        description: 'Fired when button loses focus',
        detail: 'FocusEvent'
      }
    ],
    slots: [
      {
        name: 'default',
        description: 'Button content/label'
      },
      {
        name: 'start',
        description: 'Content before the label (typically an icon)'
      },
      {
        name: 'end',
        description: 'Content after the label (typically an icon)'
      }
    ],
    cssProperties: [
      {
        name: '--button-height',
        description: 'Height of the button',
        default: '2.5rem'
      },
      {
        name: '--button-padding-x',
        description: 'Horizontal padding',
        default: '1rem'
      },
      {
        name: '--button-padding-y',
        description: 'Vertical padding',
        default: '0.5rem'
      },
      {
        name: '--button-font-size',
        description: 'Font size',
        default: 'var(--mz-text-sm)'
      },
      {
        name: '--button-border-radius',
        description: 'Border radius',
        default: 'var(--mz-radius-md)'
      }
    ],
    parts: [
      {
        name: 'button',
        description: 'The internal button element'
      }
    ]
  },
  card: {
    properties: [
      {
        name: 'variant',
        type: '"elevated" | "outlined" | "filled"',
        default: '"elevated"',
        description: 'Visual style of the card',
        category: 'appearance'
      },
      {
        name: 'hoverable',
        type: 'boolean',
        default: 'false',
        description: 'Adds hover effects',
        category: 'interaction'
      },
      {
        name: 'clickable',
        type: 'boolean',
        default: 'false',
        description: 'Makes card clickable with cursor pointer',
        category: 'interaction'
      },
      {
        name: 'padding',
        type: '"none" | "sm" | "md" | "lg"',
        default: '"md"',
        description: 'Internal padding of the card',
        category: 'layout'
      }
    ],
    events: [
      {
        name: 'mz-click',
        description: 'Fired when clickable card is clicked',
        detail: 'MouseEvent'
      }
    ],
    slots: [
      {
        name: 'header',
        description: 'Card header content'
      },
      {
        name: 'default',
        description: 'Main card content'
      },
      {
        name: 'footer',
        description: 'Card footer content'
      },
      {
        name: 'media',
        description: 'Media content (images, videos)'
      }
    ],
    cssProperties: [
      {
        name: '--card-padding',
        description: 'Internal padding',
        default: '1.5rem'
      },
      {
        name: '--card-border-radius',
        description: 'Corner radius',
        default: 'var(--mz-radius-lg)'
      },
      {
        name: '--card-shadow',
        description: 'Box shadow',
        default: 'var(--mz-shadow-md)'
      }
    ],
    parts: [
      {
        name: 'card',
        description: 'The card container'
      },
      {
        name: 'header',
        description: 'The header section'
      },
      {
        name: 'body',
        description: 'The body section'
      },
      {
        name: 'footer',
        description: 'The footer section'
      }
    ]
  },
  input: {
    properties: [
      {
        name: 'type',
        type: 'string',
        default: '"text"',
        description: 'Input type (text, email, password, etc.)',
        category: 'behavior'
      },
      {
        name: 'value',
        type: 'string',
        default: '""',
        description: 'Current value',
        category: 'data'
      },
      {
        name: 'placeholder',
        type: 'string',
        default: '""',
        description: 'Placeholder text',
        category: 'appearance'
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables the input',
        category: 'state'
      },
      {
        name: 'readonly',
        type: 'boolean',
        default: 'false',
        description: 'Makes input read-only',
        category: 'state'
      },
      {
        name: 'required',
        type: 'boolean',
        default: 'false',
        description: 'Makes input required',
        category: 'validation'
      },
      {
        name: 'error',
        type: 'boolean',
        default: 'false',
        description: 'Shows error state',
        category: 'validation'
      },
      {
        name: 'size',
        type: '"sm" | "md" | "lg"',
        default: '"md"',
        description: 'Size of the input',
        category: 'appearance'
      }
    ],
    events: [
      {
        name: 'mz-input',
        description: 'Fired on input',
        detail: '{ value: string }'
      },
      {
        name: 'mz-change',
        description: 'Fired on change',
        detail: '{ value: string }'
      },
      {
        name: 'mz-focus',
        description: 'Fired on focus',
        detail: 'FocusEvent'
      },
      {
        name: 'mz-blur',
        description: 'Fired on blur',
        detail: 'FocusEvent'
      }
    ],
    slots: [
      {
        name: 'prefix',
        description: 'Content before input'
      },
      {
        name: 'suffix',
        description: 'Content after input'
      },
      {
        name: 'helper',
        description: 'Helper text below input'
      },
      {
        name: 'error',
        description: 'Error message'
      }
    ],
    cssProperties: [
      {
        name: '--input-height',
        description: 'Height of the input',
        default: '2.5rem'
      },
      {
        name: '--input-padding',
        description: 'Internal padding',
        default: '0.5rem 0.75rem'
      },
      {
        name: '--input-border-color',
        description: 'Border color',
        default: 'var(--mz-color-neutral-300)'
      }
    ],
    parts: [
      {
        name: 'input',
        description: 'The input element'
      },
      {
        name: 'container',
        description: 'The input container'
      }
    ]
  },
  modal: {
    properties: [
      {
        name: 'open',
        type: 'boolean',
        default: 'false',
        description: 'Controls modal visibility',
        category: 'state'
      },
      {
        name: 'size',
        type: '"sm" | "md" | "lg" | "xl" | "full"',
        default: '"md"',
        description: 'Size of the modal',
        category: 'appearance'
      },
      {
        name: 'centered',
        type: 'boolean',
        default: 'true',
        description: 'Centers modal vertically',
        category: 'layout'
      },
      {
        name: 'closable',
        type: 'boolean',
        default: 'true',
        description: 'Shows close button',
        category: 'behavior'
      },
      {
        name: 'backdrop',
        type: 'boolean',
        default: 'true',
        description: 'Shows backdrop overlay',
        category: 'appearance'
      },
      {
        name: 'backdrop-close',
        type: 'boolean',
        default: 'true',
        description: 'Close on backdrop click',
        category: 'behavior'
      }
    ],
    events: [
      {
        name: 'mz-open',
        description: 'Fired when modal opens',
        detail: 'void'
      },
      {
        name: 'mz-close',
        description: 'Fired when modal closes',
        detail: '{ reason: "backdrop" | "escape" | "button" }'
      },
      {
        name: 'mz-after-open',
        description: 'Fired after open animation',
        detail: 'void'
      },
      {
        name: 'mz-after-close',
        description: 'Fired after close animation',
        detail: 'void'
      }
    ],
    slots: [
      {
        name: 'header',
        description: 'Modal header content'
      },
      {
        name: 'default',
        description: 'Modal body content'
      },
      {
        name: 'footer',
        description: 'Modal footer content'
      }
    ],
    cssProperties: [
      {
        name: '--modal-width',
        description: 'Width of the modal',
        default: '32rem'
      },
      {
        name: '--modal-padding',
        description: 'Internal padding',
        default: '1.5rem'
      },
      {
        name: '--modal-border-radius',
        description: 'Corner radius',
        default: 'var(--mz-radius-lg)'
      }
    ],
    parts: [
      {
        name: 'backdrop',
        description: 'The backdrop overlay'
      },
      {
        name: 'modal',
        description: 'The modal container'
      },
      {
        name: 'header',
        description: 'The header section'
      },
      {
        name: 'body',
        description: 'The body section'
      },
      {
        name: 'footer',
        description: 'The footer section'
      }
    ]
  },
  accordion: {
    properties: [
      {
        name: 'multiple',
        type: 'boolean',
        default: 'false',
        description: 'Allow multiple panels open',
        category: 'behavior'
      },
      {
        name: 'collapsible',
        type: 'boolean',
        default: 'true',
        description: 'Allow all panels to be closed',
        category: 'behavior'
      },
      {
        name: 'variant',
        type: '"default" | "bordered" | "separated"',
        default: '"default"',
        description: 'Visual style variant',
        category: 'appearance'
      }
    ],
    events: [
      {
        name: 'mz-change',
        description: 'Fired when panels change',
        detail: '{ value: string | string[] }'
      }
    ],
    slots: [
      {
        name: 'default',
        description: 'Accordion items'
      }
    ],
    cssProperties: [
      {
        name: '--accordion-gap',
        description: 'Gap between items',
        default: '0.5rem'
      },
      {
        name: '--accordion-border-color',
        description: 'Border color',
        default: 'var(--mz-color-neutral-200)'
      }
    ],
    parts: [
      {
        name: 'container',
        description: 'The accordion container'
      },
      {
        name: 'item',
        description: 'Individual accordion item'
      },
      {
        name: 'trigger',
        description: 'Accordion trigger button'
      },
      {
        name: 'content',
        description: 'Accordion content panel'
      }
    ]
  },
  badge: {
    properties: [
      {
        name: 'variant',
        type: '"primary" | "secondary" | "success" | "warning" | "danger" | "info"',
        default: '"primary"',
        description: 'Color variant',
        category: 'appearance'
      },
      {
        name: 'size',
        type: '"sm" | "md" | "lg"',
        default: '"md"',
        description: 'Size of the badge',
        category: 'appearance'
      },
      {
        name: 'pill',
        type: 'boolean',
        default: 'false',
        description: 'Rounded pill shape',
        category: 'appearance'
      },
      {
        name: 'outline',
        type: 'boolean',
        default: 'false',
        description: 'Outline style',
        category: 'appearance'
      },
      {
        name: 'dot',
        type: 'boolean',
        default: 'false',
        description: 'Show indicator dot',
        category: 'appearance'
      }
    ],
    events: [],
    slots: [
      {
        name: 'default',
        description: 'Badge content'
      },
      {
        name: 'icon',
        description: 'Icon slot'
      }
    ],
    cssProperties: [
      {
        name: '--badge-padding',
        description: 'Internal padding',
        default: '0.25rem 0.5rem'
      },
      {
        name: '--badge-font-size',
        description: 'Font size',
        default: 'var(--mz-text-xs)'
      },
      {
        name: '--badge-border-radius',
        description: 'Corner radius',
        default: 'var(--mz-radius-sm)'
      }
    ],
    parts: [
      {
        name: 'badge',
        description: 'The badge element'
      },
      {
        name: 'dot',
        description: 'The indicator dot'
      }
    ]
  },
  avatar: {
    properties: [
      {
        name: 'src',
        type: 'string',
        default: '""',
        description: 'Image source URL',
        category: 'content'
      },
      {
        name: 'alt',
        type: 'string',
        default: '""',
        description: 'Alt text for image',
        category: 'content'
      },
      {
        name: 'name',
        type: 'string',
        default: '""',
        description: 'Name for initials',
        category: 'content'
      },
      {
        name: 'size',
        type: '"xs" | "sm" | "md" | "lg" | "xl"',
        default: '"md"',
        description: 'Size of avatar',
        category: 'appearance'
      },
      {
        name: 'shape',
        type: '"circle" | "square"',
        default: '"circle"',
        description: 'Shape of avatar',
        category: 'appearance'
      },
      {
        name: 'status',
        type: '"online" | "offline" | "away" | "busy"',
        default: 'undefined',
        description: 'Status indicator',
        category: 'appearance'
      }
    ],
    events: [
      {
        name: 'mz-error',
        description: 'Fired on image load error',
        detail: 'ErrorEvent'
      },
      {
        name: 'mz-load',
        description: 'Fired on image load',
        detail: 'Event'
      }
    ],
    slots: [
      {
        name: 'default',
        description: 'Custom content (overrides image/initials)'
      },
      {
        name: 'badge',
        description: 'Badge content'
      }
    ],
    cssProperties: [
      {
        name: '--avatar-size',
        description: 'Size of avatar',
        default: '2.5rem'
      },
      {
        name: '--avatar-font-size',
        description: 'Font size for initials',
        default: 'var(--mz-text-sm)'
      },
      {
        name: '--avatar-border-radius',
        description: 'Corner radius',
        default: '50%'
      }
    ],
    parts: [
      {
        name: 'avatar',
        description: 'The avatar container'
      },
      {
        name: 'image',
        description: 'The image element'
      },
      {
        name: 'initials',
        description: 'The initials text'
      },
      {
        name: 'status',
        description: 'The status indicator'
      }
    ]
  }
}

interface ComponentAPIData {
  properties: Property[]
  events: Event[]
  slots: Slot[]
  cssProperties: CSSProperty[]
  parts: Part[]
}

interface Property {
  name: string
  type: string
  default: string
  description: string
  category: string
}

interface Event {
  name: string
  description: string
  detail: string
}

interface Slot {
  name: string
  description: string
}

interface CSSProperty {
  name: string
  description: string
  default: string
}

interface Part {
  name: string
  description: string
}

export function ComponentAPI({ componentName }: { componentName: string }) {
  const [copiedItem, setCopiedItem] = useState<string | null>(null)
  const [expandedSections, setExpandedSections] = useState({
    properties: true,
    events: true,
    slots: true,
    css: false,
    parts: false
  })
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  // Use manually curated API if available, otherwise fall back to generated
  const api = componentAPIs[componentName] || generatedComponentAPIs[componentName]

  if (!api) {
    return (
      <div className="p-4 sm:p-6 bg-yellow-50 dark:bg-yellow-950/30 rounded-xl border border-yellow-200 dark:border-yellow-800">
        <p className="text-sm text-yellow-800 dark:text-yellow-200">
          API documentation for <code className="font-mono">{componentName}</code> is coming soon.
        </p>
      </div>
    )
  }

  const handleCopy = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedItem(id)
    setTimeout(() => setCopiedItem(null), 2000)
  }

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const categories = ['all', ...Array.from(new Set(api.properties.map(p => p.category)))]
  const filteredProperties = selectedCategory === 'all'
    ? api.properties
    : api.properties.filter(p => p.category === selectedCategory)

  return (
    <div className="space-y-8">
      {/* Properties */}
      <section>
        <button
          onClick={() => toggleSection('properties')}
          className="flex items-center gap-2 text-xl font-semibold mb-4 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          {expandedSections.properties ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          <Package className="w-5 h-5" />
          Properties
          <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
            ({api.properties.length})
          </span>
        </button>

        {expandedSections.properties && (
          <>
            {/* Category Filter - Mobile First */}
            <div className="mb-4 flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    selectedCategory === cat
                      ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Mobile: Card Layout */}
            <div className="sm:hidden space-y-3">
              {filteredProperties.map(prop => (
                <div
                  key={prop.name}
                  className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 p-4"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <code className="text-sm font-mono font-semibold text-primary-600 dark:text-primary-400">
                        {prop.name}
                      </code>
                      <span className="ml-2 text-xs px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800">
                        {prop.category}
                      </span>
                    </div>
                    <button
                      onClick={() => handleCopy(prop.name, `prop-${prop.name}`)}
                      className="p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
                    >
                      {copiedItem === `prop-${prop.name}` ? (
                        <Check className="w-3.5 h-3.5 text-green-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-neutral-400" />
                      )}
                    </button>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                    {prop.description}
                  </p>
                  <div className="space-y-1 text-xs">
                    <div>
                      <span className="text-neutral-500">Type:</span>{' '}
                      <code className="font-mono text-neutral-700 dark:text-neutral-300">{prop.type}</code>
                    </div>
                    <div>
                      <span className="text-neutral-500">Default:</span>{' '}
                      <code className="font-mono text-neutral-700 dark:text-neutral-300">{prop.default}</code>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Table */}
            <div className="hidden sm:block overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900">
                    <th className="text-left py-3 px-4 font-medium">Property</th>
                    <th className="text-left py-3 px-4 font-medium">Type</th>
                    <th className="text-left py-3 px-4 font-medium">Default</th>
                    <th className="text-left py-3 px-4 font-medium">Description</th>
                    <th className="text-center py-3 px-4 font-medium">Copy</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-neutral-950">
                  {filteredProperties.map((prop, idx) => (
                    <tr
                      key={prop.name}
                      className={`${
                        idx !== filteredProperties.length - 1 ? 'border-b border-neutral-100 dark:border-neutral-800' : ''
                      } hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors`}
                    >
                      <td className="py-3 px-4">
                        <code className="font-mono font-semibold text-primary-600 dark:text-primary-400">
                          {prop.name}
                        </code>
                        <span className="ml-2 text-xs px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800">
                          {prop.category}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <code className="font-mono text-xs text-neutral-600 dark:text-neutral-400">
                          {prop.type}
                        </code>
                      </td>
                      <td className="py-3 px-4">
                        <code className="font-mono text-xs text-neutral-600 dark:text-neutral-400">
                          {prop.default}
                        </code>
                      </td>
                      <td className="py-3 px-4 text-neutral-600 dark:text-neutral-400">
                        {prop.description}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => handleCopy(prop.name, `prop-${prop.name}`)}
                          className="p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded inline-flex items-center justify-center"
                        >
                          {copiedItem === `prop-${prop.name}` ? (
                            <Check className="w-3.5 h-3.5 text-green-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5 text-neutral-400" />
                          )}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>

      {/* Events */}
      <section>
        <button
          onClick={() => toggleSection('events')}
          className="flex items-center gap-2 text-xl font-semibold mb-4 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          {expandedSections.events ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          <Zap className="w-5 h-5" />
          Events
          <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
            ({api.events.length})
          </span>
        </button>

        {expandedSections.events && (
          <div className="grid gap-3 sm:gap-4">
            {api.events.map(event => (
              <div
                key={event.name}
                className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 p-4 hover:border-primary-500 dark:hover:border-primary-400 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <code className="text-sm font-mono font-semibold text-purple-600 dark:text-purple-400">
                    {event.name}
                  </code>
                  <button
                    onClick={() => handleCopy(event.name, `event-${event.name}`)}
                    className="self-end sm:self-auto p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
                  >
                    {copiedItem === `event-${event.name}` ? (
                      <Check className="w-3.5 h-3.5 text-green-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-neutral-400" />
                    )}
                  </button>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                  {event.description}
                </p>
                <div className="text-xs">
                  <span className="text-neutral-500">Detail:</span>{' '}
                  <code className="font-mono text-neutral-700 dark:text-neutral-300">
                    {event.detail}
                  </code>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Slots */}
      <section>
        <button
          onClick={() => toggleSection('slots')}
          className="flex items-center gap-2 text-xl font-semibold mb-4 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          {expandedSections.slots ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          <Code className="w-5 h-5" />
          Slots
          <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
            ({api.slots.length})
          </span>
        </button>

        {expandedSections.slots && (
          <div className="grid gap-3 sm:grid-cols-2">
            {api.slots.map(slot => (
              <div
                key={slot.name}
                className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 p-4"
              >
                <div className="flex items-start justify-between mb-2">
                  <code className="text-sm font-mono font-semibold text-green-600 dark:text-green-400">
                    {slot.name === 'default' ? '(default)' : `slot="${slot.name}"`}
                  </code>
                  <button
                    onClick={() => handleCopy(slot.name === 'default' ? '' : `slot="${slot.name}"`, `slot-${slot.name}`)}
                    className="p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
                  >
                    {copiedItem === `slot-${slot.name}` ? (
                      <Check className="w-3.5 h-3.5 text-green-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-neutral-400" />
                    )}
                  </button>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {slot.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CSS Properties */}
      <section>
        <button
          onClick={() => toggleSection('css')}
          className="flex items-center gap-2 text-xl font-semibold mb-4 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          {expandedSections.css ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          <Palette className="w-5 h-5" />
          CSS Custom Properties
          <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
            ({api.cssProperties.length})
          </span>
        </button>

        {expandedSections.css && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-700">
                  <th className="text-left py-2 px-0 sm:px-4 font-medium">Property</th>
                  <th className="text-left py-2 px-0 sm:px-4 font-medium">Default</th>
                  <th className="text-left py-2 px-0 sm:px-4 font-medium hidden sm:table-cell">Description</th>
                </tr>
              </thead>
              <tbody>
                {api.cssProperties.map(prop => (
                  <tr
                    key={prop.name}
                    className="border-b border-neutral-100 dark:border-neutral-800"
                  >
                    <td className="py-2 px-0 sm:px-4">
                      <code className="font-mono text-xs text-blue-600 dark:text-blue-400">
                        {prop.name}
                      </code>
                    </td>
                    <td className="py-2 px-0 sm:px-4">
                      <code className="font-mono text-xs text-neutral-600 dark:text-neutral-400">
                        {prop.default}
                      </code>
                    </td>
                    <td className="py-2 px-0 sm:px-4 text-neutral-600 dark:text-neutral-400 hidden sm:table-cell">
                      {prop.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Parts */}
      <section>
        <button
          onClick={() => toggleSection('parts')}
          className="flex items-center gap-2 text-xl font-semibold mb-4 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          {expandedSections.parts ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          <Package className="w-5 h-5" />
          Shadow Parts
          <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
            ({api.parts.length})
          </span>
        </button>

        {expandedSections.parts && (
          <div className="grid gap-3 sm:grid-cols-2">
            {api.parts.map(part => (
              <div
                key={part.name}
                className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 p-4"
              >
                <code className="text-sm font-mono font-semibold text-orange-600 dark:text-orange-400">
                  ::part({part.name})
                </code>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                  {part.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}