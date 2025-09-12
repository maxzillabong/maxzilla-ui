import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function DesignTokensDoc() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Header />
      <main className="pt-20 px-4 pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Design Tokens</h1>
          <p className="text-neutral-600 dark:text-neutral-400">Overview of color, spacing, radius, and typography tokens.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

