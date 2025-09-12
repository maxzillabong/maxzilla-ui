"use client"
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Card, Input, Button } from 'maxzilla-ui-react'

export default function ExamplesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Header />
      <main className="pt-20 px-4 pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Examples</h1>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            Small, copy-pasteable examples combining components.
          </p>
          <section className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <h2 className="text-lg font-semibold mb-3">Login Card</h2>
            <Card elevation="md">
              <h3 slot="header">Sign in</h3>
              <div className="space-y-3">
                <Input label="Email" placeholder="you@example.com" />
                <Input label="Password" type="password" />
                <Button variant="primary">Continue</Button>
              </div>
            </Card>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
