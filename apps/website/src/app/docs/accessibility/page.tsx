import { DocsLayout } from '@/components/DocsLayout'

export default function AccessibilityDoc() {
  return (
    <DocsLayout pathname="/docs/accessibility">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">Accessibility</h1>
      <p className="text-neutral-600 dark:text-neutral-400">Guidelines for keyboard navigation and ARIA attributes.</p>
    </DocsLayout>
  )
}
