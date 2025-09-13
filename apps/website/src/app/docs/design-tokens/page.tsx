import { DocsLayout } from '@/components/DocsLayout'

export default function DesignTokensDoc() {
  return (
    <DocsLayout pathname="/docs/design-tokens">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">Design Tokens</h1>
      <p className="text-neutral-600 dark:text-neutral-400">Overview of color, spacing, radius, and typography tokens.</p>
    </DocsLayout>
  )
}
