import { Header } from '@/components/Header'
import { InlineFooter } from '@/components/InlineFooter'
import { componentsData, findDataBySlug } from '../registry-data'
import dynamic from 'next/dynamic'
const DetailClient = dynamic(() => import('./DetailClient'), { ssr: false })
const SidebarScrollWrapper = dynamic(() => import('./SidebarScrollWrapper').then(m => m.SidebarScrollWrapper), { ssr: false })
const TOCClient = dynamic(() => import('./TOCClient').then(m => m.TOCClient), { ssr: false })
const MobileDocNav = dynamic(() => import('./MobileDocNav'), { ssr: false })

export default function ComponentDetail({ params }: { params: { slug: string } }) {
  const data = findDataBySlug(params.slug)
  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-50 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900 flex flex-col">
        <Header />
        <div className="flex-1 flex overflow-hidden pt-20">
          <div className="w-full max-w-[90rem] mx-auto px-4">
            <main className="py-8">
              <h1 className="text-2xl font-bold">Component Not Found</h1>
              <p className="text-neutral-600 dark:text-neutral-400 mt-2">
                The component "{params.slug}" does not exist. Please check the URL or browse our <a href="/components" className="text-primary-600 dark:text-primary-400 underline">component library</a>.
              </p>
            </main>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-50 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900 flex flex-col">
      <Header />
      <div className="flex-1 flex overflow-hidden pt-20">
        <div className="w-full flex">
          {/* Left column - Sidebar */}
          <SidebarScrollWrapper current={params.slug} />

          {/* Middle and Right columns container */}
          <main className="flex-1 h-[calc(100vh-5rem)] overflow-y-auto xl:overflow-visible xl:h-auto">
            <div className="xl:flex xl:gap-8">
              <article className="flex-1 xl:h-[calc(100vh-5rem)] xl:overflow-y-auto min-h-full flex flex-col">
                <div className="flex-1 px-8 py-8">
                  <div className="max-w-4xl">
                    <div className="mb-6">
                      <div className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-1">{data.category}</div>
                      <h1 className="text-3xl md:text-5xl font-bold mb-2">{data.name}</h1>
                      <p className="text-neutral-600 dark:text-neutral-400">{data.description}</p>
                    </div>
                    <MobileDocNav slug={params.slug} />
                    <DetailClient slug={params.slug} />
                  </div>
                </div>
                <div className="px-8 pb-8">
                  <div className="mt-16 pt-6 border-t border-neutral-200 dark:border-neutral-800 max-w-4xl">
                    <InlineFooter />
                  </div>
                </div>
              </article>

              {/* Right column - Table of contents (for larger screens) */}
              <aside className="hidden xl:block w-[14rem] flex-shrink-0 h-[calc(100vh-5rem)] overflow-y-auto">
                <div className="py-8 pr-4">
                  <TOCClient slug={params.slug} />
                </div>
              </aside>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return componentsData.map((c) => ({ slug: c.slug }))
}
