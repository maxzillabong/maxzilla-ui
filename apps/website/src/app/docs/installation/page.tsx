import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function InstallationDoc() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Header />
      <main className="pt-20 px-4 pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Installation</h1>
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">Install packages via npm:</p>
          <pre className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-xl overflow-auto text-sm"><code>npm install maxzilla-ui-core maxzilla-ui-react</code></pre>
        </div>
      </main>
      <Footer />
    </div>
  )
}

