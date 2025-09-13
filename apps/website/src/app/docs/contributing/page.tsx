import { DocsLayout } from '@/components/DocsLayout'

export default function ContributingDoc() {
  return (
    <DocsLayout pathname="/docs/contributing">
      <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Contributing</h1>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">Guidelines and useful commands for working on Maxzilla UI.</p>

            <section className="space-y-2 mb-8">
              <h2 className="text-xl font-semibold">Principles</h2>
              <ul className="list-disc pl-6 text-neutral-700 dark:text-neutral-300">
                <li>Core components are Web Components built with Lit.</li>
                <li>React wrappers are generated and should stay thin.</li>
                <li>Accessibility, performance, and DX are first-class concerns.</li>
                <li>Prefer small, focused PRs; keep changes scoped.</li>
              </ul>
            </section>

            <section className="space-y-2 mb-8">
              <h2 className="text-xl font-semibold">Workspace Commands</h2>
              <pre className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-xl overflow-auto text-sm"><code>{`# Install
npm install

# Run everything (core + react + website)
npm run dev:all

# Run only website (Next.js on :3001)
npm run dev:website

# Run Storybook (core on :6006)
npm run storybook

# Build everything
npm run build:all

# E2E tests for website
npm run -w @maxzilla/ui-website test:e2e`}</code></pre>
            </section>

            <section className="space-y-2 mb-8">
              <h2 className="text-xl font-semibold">Code Style</h2>
              <ul className="list-disc pl-6 text-neutral-700 dark:text-neutral-300">
                <li>TypeScript for all packages.</li>
                <li>Lit components: minimal reactive state, reflect common ARIA patterns.</li>
                <li>Small, composable CSS via tokens; respect dark mode.</li>
                <li>Tests live alongside components (Storybook stories encouraged).</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold">Submitting Changes</h2>
              <ul className="list-disc pl-6 text-neutral-700 dark:text-neutral-300">
                <li>Open an issue describing the change if it’s non-trivial.</li>
                <li>Include stories and basic tests for new components.</li>
                <li>Update docs/registry to showcase new components.</li>
              </ul>
            </section>
      </div>
    </DocsLayout>
  )
}

