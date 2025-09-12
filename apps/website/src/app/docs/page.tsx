import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Header />
      <main className="pt-20 px-4 pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Documentation
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            Getting started with Maxzilla UI. Install, import, and use web components in your app.
          </p>
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-2">Install</h2>
              <pre className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-xl overflow-auto text-sm">
                <code>npm install maxzilla-ui-core maxzilla-ui-react</code>
              </pre>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-2">Usage</h2>
              <pre className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-xl overflow-auto text-sm">
                <code>{`import 'maxzilla-ui-core/button'

<mz-button variant="primary">Click me</mz-button>`}</code>
              </pre>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
