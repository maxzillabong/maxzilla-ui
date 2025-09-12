import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Header />
      <main className="pt-20 px-4 pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            This is a placeholder privacy policy for the demo site. Replace with your actual policy.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

