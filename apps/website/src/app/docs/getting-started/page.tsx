import { DocsLayout } from '@/components/DocsLayout'

export default function GettingStartedDoc() {
  return (
    <DocsLayout pathname="/docs/getting-started">
      <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Getting Started</h1>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">Run the docs site, Storybook, and start building with Maxzilla UI.</p>

            <section className="space-y-3 mb-8">
              <h2 className="text-xl font-semibold">Prerequisites</h2>
              <ul className="list-disc pl-6 text-neutral-700 dark:text-neutral-300">
                <li>Node.js 18+ (we use npm workspaces)</li>
              </ul>
            </section>

            <section className="space-y-3 mb-8">
              <h2 className="text-xl font-semibold">Install</h2>
              <pre className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-xl overflow-auto text-sm"><code>npm install</code></pre>
            </section>

            <section className="space-y-3 mb-8">
              <h2 className="text-xl font-semibold">Develop</h2>
              <p>Run all packages (core, react, and website) at once:</p>
              <pre className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-xl overflow-auto text-sm"><code>npm run dev:all</code></pre>
              <p>Or just the website (Next.js on <code>http://localhost:3001</code>):</p>
              <pre className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-xl overflow-auto text-sm"><code>npm run dev:website</code></pre>
            </section>

            <section className="space-y-3 mb-8">
              <h2 className="text-xl font-semibold">Storybook (Core)</h2>
              <p>Launch Storybook for core web components on <code>http://localhost:6006</code>:</p>
              <pre className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-xl overflow-auto text-sm"><code>npm run storybook</code></pre>
            </section>

            <section className="space-y-3 mb-8">
              <h2 className="text-xl font-semibold">Build</h2>
              <pre className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-xl overflow-auto text-sm"><code>npm run build:all</code></pre>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold">E2E Tests</h2>
              <p>Run Playwright tests for the website app:</p>
              <pre className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-xl overflow-auto text-sm"><code>npm run -w @maxzilla/ui-website test:e2e</code></pre>
            </section>
      </div>
    </DocsLayout>
  )
}

