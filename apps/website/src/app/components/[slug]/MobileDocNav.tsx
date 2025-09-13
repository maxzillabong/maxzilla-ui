"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import { Button, Drawer, Input } from 'maxzilla-ui-react'

const ComponentsSidebar = dynamic(() => import('./ComponentsSidebar').then(m => m.ComponentsSidebar), { ssr: false })
const TOCClient = dynamic(() => import('./TOCClient').then(m => m.TOCClient), { ssr: false })

export default function MobileDocNav({ slug }: { slug: string }) {
  const [openList, setOpenList] = React.useState(false)
  const [openToc, setOpenToc] = React.useState(false)
  const [query, setQuery] = React.useState('')
  return (
    <div className="lg:hidden mb-4 flex gap-2">
      <Button variant="outline" onClick={() => setOpenList(true)} aria-label="Browse components">Components</Button>
      <Button variant="outline" onClick={() => setOpenToc(true)} aria-label="On this page">Sections</Button>

      <Drawer open={openList} placement="left" onClose={() => setOpenList(false)}>
        <div className="w-80 pr-2">
          <div className="p-3 border-b border-neutral-200 dark:border-neutral-800">
            <Input label="Search components" placeholder="Type to filter…" value={query} onInput={(e: any) => setQuery(e.target?.value ?? '')} />
          </div>
          <div className="p-2">
            <ComponentsSidebar current={slug} sticky={false} filter={query} />
          </div>
        </div>
      </Drawer>

      <Drawer open={openToc} placement="right" onClose={() => setOpenToc(false)}>
        <div className="w-64 pl-2">
          <TOCClient slug={slug} sticky={false} />
        </div>
      </Drawer>
    </div>
  )
}
