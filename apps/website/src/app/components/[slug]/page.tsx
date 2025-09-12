import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { componentsData, findDataBySlug } from '../registry-data'
import DetailClient from './DetailClient'

export default function ComponentDetail({ params }: { params: { slug: string } }) {
  const data = findDataBySlug(params.slug)
  if (!data) {
    return (
      <div className="min-h-screen bg-white dark:bg-neutral-950">
        <Header />
        <main className="pt-24 px-4 pb-24 md:pb-32 max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold">Not found</h1>
          <p className="text-neutral-600 dark:text-neutral-400">Unknown component: {params.slug}</p>
        </main>
        <Footer />
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Header />
      <main className="pt-24 px-4 pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <div className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-1">{data.category}</div>
            <h1 className="text-3xl md:text-5xl font-bold mb-2">{data.name}</h1>
            <p className="text-neutral-600 dark:text-neutral-400">{data.description}</p>
          </div>
          <DetailClient slug={params.slug} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export function generateStaticParams() {
  return componentsData.map((c) => ({ slug: c.slug }))
}
