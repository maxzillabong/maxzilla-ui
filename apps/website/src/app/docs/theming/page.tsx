import { DocsLayout } from '@/components/DocsLayout'

export default function ThemingDoc() {
  return (
    <DocsLayout pathname="/docs/theming">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">Theming</h1>
      <p className="text-neutral-600 dark:text-neutral-400">Switch between light/dark and customize CSS variables.</p>
    </DocsLayout>
  )
}
