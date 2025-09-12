"use client"
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Accordion, AccordionItem } from 'maxzilla-ui-react'
import { ComponentCard } from '@/components/ComponentCard'
import { byCategory } from './registry'

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Header />
      <main className="pt-20 px-4 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Components</h1>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            Browse available web components and their props.
          </p>
          <section className="p-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <Accordion>
              <AccordionItem header="Basics" open>
                <div className="grid md:grid-cols-2 gap-6 py-4">
                  {byCategory('Basics').map((c) => (
                    <ComponentCard key={c.slug} href={`/components/${c.slug}`} title={c.name} description={c.description}>
                      <c.Preview />
                    </ComponentCard>
                  ))}
                </div>
              </AccordionItem>
              <AccordionItem header="Forms">
                <div className="grid md:grid-cols-2 gap-6 py-4">
                  {byCategory('Forms').map((c) => (
                    <ComponentCard key={c.slug} href={`/components/${c.slug}`} title={c.name} description={c.description}>
                      <c.Preview />
                    </ComponentCard>
                  ))}
                </div>
              </AccordionItem>
              <AccordionItem header="Data Display">
                <div className="grid md:grid-cols-2 gap-6 py-4">
                  {byCategory('Data Display').map((c) => (
                    <ComponentCard key={c.slug} href={`/components/${c.slug}`} title={c.name} description={c.description}>
                      <c.Preview />
                    </ComponentCard>
                  ))}
                </div>
              </AccordionItem>
              <AccordionItem header="Overlays">
                <div className="grid md:grid-cols-2 gap-6 py-4">
                  {byCategory('Overlays').map((c) => (
                    <ComponentCard key={c.slug} href={`/components/${c.slug}`} title={c.name} description={c.description}>
                      <c.Preview />
                    </ComponentCard>
                  ))}
                </div>
              </AccordionItem>
              <AccordionItem header="Navigation">
                <div className="grid md:grid-cols-2 gap-6 py-4">
                  {byCategory('Navigation').map((c) => (
                    <ComponentCard key={c.slug} href={`/components/${c.slug}`} title={c.name} description={c.description}>
                      <c.Preview />
                    </ComponentCard>
                  ))}
                </div>
              </AccordionItem>
              <AccordionItem header="Layout">
                <div className="grid md:grid-cols-2 gap-6 py-4">
                  {byCategory('Layout').map((c) => (
                    <ComponentCard key={c.slug} href={`/components/${c.slug}`} title={c.name} description={c.description}>
                      <c.Preview />
                    </ComponentCard>
                  ))}
                </div>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
