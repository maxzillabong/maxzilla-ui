import { Header } from '@/components/Header'
import { InlineFooter } from '@/components/InlineFooter'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Header />
      <main className="pt-20 px-4 pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            This is a placeholder terms page for the demo site. Replace with your actual terms.
          </p>
        </div>
      </main>
      <div className="max-w-3xl mx-auto px-4 pb-8">
        <div className="mt-16 pt-6 border-t border-neutral-200 dark:border-neutral-800">
          <InlineFooter />
        </div>
      </div>
    </div>
  )
}

