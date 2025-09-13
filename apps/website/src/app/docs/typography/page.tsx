'use client'

import { DocsLayout } from '@/components/DocsLayout'
import { useState } from 'react'
import { Copy, Check, Type, Minus, Plus } from 'lucide-react'

// Typography scale based on Tailwind/common design systems
const fontSizes = [
  {
    name: 'xs',
    size: '12px',
    rem: '0.75rem',
    lineHeight: '16px',
    usage: 'Captions, labels, helper text',
    example: 'Small helper text'
  },
  {
    name: 'sm',
    size: '14px',
    rem: '0.875rem',
    lineHeight: '20px',
    usage: 'Body text, form labels',
    example: 'Secondary body text'
  },
  {
    name: 'base',
    size: '16px',
    rem: '1rem',
    lineHeight: '24px',
    usage: 'Default body text',
    example: 'Main paragraph text'
  },
  {
    name: 'lg',
    size: '18px',
    rem: '1.125rem',
    lineHeight: '28px',
    usage: 'Emphasized body text',
    example: 'Lead paragraph text'
  },
  {
    name: 'xl',
    size: '20px',
    rem: '1.25rem',
    lineHeight: '28px',
    usage: 'Small headings',
    example: 'Section subtitle'
  },
  {
    name: '2xl',
    size: '24px',
    rem: '1.5rem',
    lineHeight: '32px',
    usage: 'H4 headings',
    example: 'Card titles'
  },
  {
    name: '3xl',
    size: '30px',
    rem: '1.875rem',
    lineHeight: '36px',
    usage: 'H3 headings',
    example: 'Section headings'
  },
  {
    name: '4xl',
    size: '36px',
    rem: '2.25rem',
    lineHeight: '40px',
    usage: 'H2 headings',
    example: 'Page sections'
  },
  {
    name: '5xl',
    size: '48px',
    rem: '3rem',
    lineHeight: '48px',
    usage: 'H1 headings',
    example: 'Page titles'
  },
  {
    name: '6xl',
    size: '60px',
    rem: '3.75rem',
    lineHeight: '60px',
    usage: 'Display headings',
    example: 'Hero text'
  },
  {
    name: '7xl',
    size: '72px',
    rem: '4.5rem',
    lineHeight: '72px',
    usage: 'Large display',
    example: 'Landing hero'
  },
  {
    name: '8xl',
    size: '96px',
    rem: '6rem',
    lineHeight: '96px',
    usage: 'Extra large display',
    example: 'Big impact'
  },
  {
    name: '9xl',
    size: '128px',
    rem: '8rem',
    lineHeight: '128px',
    usage: 'Maximum display',
    example: 'Wow'
  }
]

const fontWeights = [
  { name: 'thin', value: '100', example: 'Thin weight text' },
  { name: 'extralight', value: '200', example: 'Extra light weight text' },
  { name: 'light', value: '300', example: 'Light weight text' },
  { name: 'normal', value: '400', example: 'Normal weight text' },
  { name: 'medium', value: '500', example: 'Medium weight text' },
  { name: 'semibold', value: '600', example: 'Semibold weight text' },
  { name: 'bold', value: '700', example: 'Bold weight text' },
  { name: 'extrabold', value: '800', example: 'Extra bold weight text' },
  { name: 'black', value: '900', example: 'Black weight text' }
]

const lineHeights = [
  { name: 'none', value: '1', usage: 'No line height' },
  { name: 'tight', value: '1.25', usage: 'Tight line spacing for headings' },
  { name: 'snug', value: '1.375', usage: 'Slightly tight spacing' },
  { name: 'normal', value: '1.5', usage: 'Default line spacing' },
  { name: 'relaxed', value: '1.625', usage: 'Relaxed paragraph spacing' },
  { name: 'loose', value: '2', usage: 'Double line spacing' }
]

const letterSpacing = [
  { name: 'tighter', value: '-0.05em', usage: 'Very tight tracking' },
  { name: 'tight', value: '-0.025em', usage: 'Tight tracking' },
  { name: 'normal', value: '0', usage: 'Default tracking' },
  { name: 'wide', value: '0.025em', usage: 'Wide tracking' },
  { name: 'wider', value: '0.05em', usage: 'Wider tracking' },
  { name: 'widest', value: '0.1em', usage: 'Maximum tracking' }
]

export default function TypographyPage() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null)
  const [fontSize, setFontSize] = useState(16)
  const [selectedWeight, setSelectedWeight] = useState('400')
  const [selectedLineHeight, setSelectedLineHeight] = useState('1.5')
  const [selectedTracking, setSelectedTracking] = useState('0')

  const handleCopy = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedItem(id)
    setTimeout(() => setCopiedItem(null), 2000)
  }

  return (
    <DocsLayout pathname="/docs/typography">
      <div className="max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Typography</h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
            A flexible type system that adapts to any screen size. All typography is mobile-first with fluid scaling.
          </p>
        </div>

        {/* Interactive Playground - Mobile First */}
        <div className="mb-12 p-4 sm:p-6 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Interactive Playground</h2>

          {/* Controls - Stack on mobile, grid on larger screens */}
          <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 mb-6">
            <div>
              <label className="text-xs font-medium text-neutral-600 dark:text-neutral-400 mb-1 block">
                Font Size
              </label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setFontSize(Math.max(10, fontSize - 2))}
                  className="p-1.5 rounded bg-white dark:bg-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-600"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="flex-1 text-center text-sm font-mono">{fontSize}px</span>
                <button
                  onClick={() => setFontSize(Math.min(72, fontSize + 2))}
                  className="p-1.5 rounded bg-white dark:bg-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-600"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-neutral-600 dark:text-neutral-400 mb-1 block">
                Weight
              </label>
              <select
                value={selectedWeight}
                onChange={(e) => setSelectedWeight(e.target.value)}
                className="w-full px-2 py-1.5 text-sm rounded bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600"
              >
                {fontWeights.map(w => (
                  <option key={w.value} value={w.value}>{w.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-medium text-neutral-600 dark:text-neutral-400 mb-1 block">
                Line Height
              </label>
              <select
                value={selectedLineHeight}
                onChange={(e) => setSelectedLineHeight(e.target.value)}
                className="w-full px-2 py-1.5 text-sm rounded bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600"
              >
                {lineHeights.map(l => (
                  <option key={l.value} value={l.value}>{l.name} ({l.value})</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-medium text-neutral-600 dark:text-neutral-400 mb-1 block">
                Letter Spacing
              </label>
              <select
                value={selectedTracking}
                onChange={(e) => setSelectedTracking(e.target.value)}
                className="w-full px-2 py-1.5 text-sm rounded bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600"
              >
                {letterSpacing.map(l => (
                  <option key={l.value} value={l.value}>{l.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Preview */}
          <div className="p-4 sm:p-6 bg-white dark:bg-neutral-950 rounded-lg">
            <p
              style={{
                fontSize: `${fontSize}px`,
                fontWeight: selectedWeight,
                lineHeight: selectedLineHeight,
                letterSpacing: selectedTracking
              }}
              className="text-neutral-900 dark:text-white"
            >
              The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.
            </p>
          </div>
        </div>

        {/* Font Size Scale - Premium Mobile-First Table */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6">Font Size Scale</h2>

          {/* Mobile: Card Layout */}
          <div className="sm:hidden space-y-3">
            {fontSizes.map((size) => (
              <div
                key={size.name}
                className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 p-4"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="inline-flex items-center px-2 py-1 rounded bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium">
                      {size.name}
                    </span>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{size.usage}</p>
                  </div>
                  <button
                    onClick={() => handleCopy(`text-${size.name}`, `size-${size.name}`)}
                    className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
                  >
                    {copiedItem === `size-${size.name}` ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-neutral-400" />
                    )}
                  </button>
                </div>
                <div
                  className="text-neutral-900 dark:text-white mb-3 truncate"
                  style={{ fontSize: size.size }}
                >
                  {size.example}
                </div>
                <div className="flex gap-4 text-xs">
                  <span className="font-mono text-neutral-600 dark:text-neutral-400">{size.size}</span>
                  <span className="font-mono text-neutral-500 dark:text-neutral-500">{size.rem}</span>
                  <span className="font-mono text-neutral-400 dark:text-neutral-600">lh: {size.lineHeight}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Premium Table */}
          <div className="hidden sm:block overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900">
                  <th className="text-left py-4 px-6 font-medium text-neutral-900 dark:text-white text-sm">
                    Size
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-neutral-900 dark:text-white text-sm">
                    Example
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-neutral-900 dark:text-white text-sm hidden lg:table-cell">
                    Pixels
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-neutral-900 dark:text-white text-sm hidden lg:table-cell">
                    Rem
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-neutral-900 dark:text-white text-sm hidden lg:table-cell">
                    Line Height
                  </th>
                  <th className="text-left py-4 px-6 font-medium text-neutral-900 dark:text-white text-sm">
                    Usage
                  </th>
                  <th className="text-center py-4 px-6 font-medium text-neutral-900 dark:text-white text-sm">
                    Copy
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-neutral-950">
                {fontSizes.map((size, index) => (
                  <tr
                    key={size.name}
                    className={`
                      ${index !== fontSizes.length - 1 ? 'border-b border-neutral-100 dark:border-neutral-800' : ''}
                      hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors
                    `}
                  >
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2 py-1 rounded-md bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-semibold">
                        {size.name}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div
                        className="text-neutral-900 dark:text-white truncate max-w-[200px] lg:max-w-none"
                        style={{ fontSize: Math.min(parseInt(size.size), 48) + 'px' }}
                      >
                        {size.example}
                      </div>
                    </td>
                    <td className="py-4 px-6 hidden lg:table-cell">
                      <code className="text-sm font-mono text-neutral-600 dark:text-neutral-400">
                        {size.size}
                      </code>
                    </td>
                    <td className="py-4 px-6 hidden lg:table-cell">
                      <code className="text-sm font-mono text-neutral-600 dark:text-neutral-400">
                        {size.rem}
                      </code>
                    </td>
                    <td className="py-4 px-6 hidden lg:table-cell">
                      <code className="text-sm font-mono text-neutral-500 dark:text-neutral-500">
                        {size.lineHeight}
                      </code>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">
                        {size.usage}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <button
                        onClick={() => handleCopy(`text-${size.name}`, `size-${size.name}`)}
                        className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors inline-flex items-center justify-center"
                        aria-label={`Copy text-${size.name}`}
                      >
                        {copiedItem === `size-${size.name}` ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4 text-neutral-400" />
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Font Weights */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6">Font Weights</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {fontWeights.map((weight) => (
              <div
                key={weight.name}
                className="group relative bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 p-4 hover:border-primary-500 dark:hover:border-primary-400 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-sm font-medium text-neutral-900 dark:text-white">
                      {weight.name}
                    </span>
                    <span className="ml-2 text-xs font-mono text-neutral-500">
                      {weight.value}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(`font-${weight.name}`, `weight-${weight.name}`)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-1"
                  >
                    {copiedItem === `weight-${weight.name}` ? (
                      <Check className="w-3.5 h-3.5 text-green-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-neutral-400" />
                    )}
                  </button>
                </div>
                <p
                  className="text-lg text-neutral-700 dark:text-neutral-300"
                  style={{ fontWeight: weight.value }}
                >
                  {weight.example}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Line Heights */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6">Line Heights</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {lineHeights.map((height) => (
              <div
                key={height.name}
                className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="font-medium text-neutral-900 dark:text-white">
                      {height.name}
                    </span>
                    <span className="ml-2 text-sm font-mono text-neutral-500">
                      {height.value}
                    </span>
                  </div>
                  <span className="text-xs text-neutral-500">
                    {height.usage}
                  </span>
                </div>
                <p
                  className="text-sm text-neutral-600 dark:text-neutral-400 border-l-2 border-primary-500 pl-3"
                  style={{ lineHeight: height.value }}
                >
                  This is a sample paragraph demonstrating the line height.
                  Multiple lines help visualize the spacing between lines of text.
                  The quick brown fox jumps over the lazy dog.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Letter Spacing */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6">Letter Spacing</h2>
          <div className="space-y-3">
            {letterSpacing.map((spacing) => (
              <div
                key={spacing.name}
                className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 p-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-neutral-900 dark:text-white">
                      {spacing.name}
                    </span>
                    <span className="text-sm font-mono text-neutral-500">
                      {spacing.value}
                    </span>
                    <span className="text-xs text-neutral-500">
                      {spacing.usage}
                    </span>
                  </div>
                  <p
                    className="text-lg text-neutral-700 dark:text-neutral-300"
                    style={{ letterSpacing: spacing.value }}
                  >
                    TYPOGRAPHY
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Font Families */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6">Font Families</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 p-6">
              <h3 className="font-semibold mb-2">Sans Serif</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 font-mono">
                font-sans
              </p>
              <p className="text-lg" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                The quick brown fox jumps over the lazy dog.
              </p>
              <p className="text-xs text-neutral-500 mt-2">
                Inter, system-ui, -apple-system, sans-serif
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 p-6">
              <h3 className="font-semibold mb-2">Monospace</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 font-mono">
                font-mono
              </p>
              <p className="text-lg" style={{ fontFamily: 'ui-monospace, monospace' }}>
                The quick brown fox jumps over the lazy dog.
              </p>
              <p className="text-xs text-neutral-500 mt-2">
                ui-monospace, "Cascadia Code", "SF Mono", monospace
              </p>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800">
          <h2 className="text-lg font-semibold mb-4 text-blue-900 dark:text-blue-100">
            Typography Best Practices
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Mobile First</h3>
              <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                  <span>Start with mobile sizes and scale up</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                  <span>Use fluid typography with clamp() for smooth scaling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                  <span>Test readability on actual devices</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Hierarchy</h3>
              <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                  <span>Limit to 2-3 font sizes per screen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                  <span>Use weight and color for emphasis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                  <span>Maintain consistent spacing ratios</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}