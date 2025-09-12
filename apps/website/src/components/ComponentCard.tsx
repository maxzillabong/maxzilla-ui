"use client"
import Link from 'next/link'
import React from 'react'

export function ComponentCard({
  href,
  title,
  description,
  children
}: {
  href: string
  title: string
  description: string
  children?: React.ReactNode
}) {
  return (
    <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5">
      <div className="flex items-center justify-between gap-3 mb-3">
        <h3 className="text-base font-semibold">{title}</h3>
        <Link href={href} className="text-primary-600 dark:text-primary-400 text-sm hover:underline">View</Link>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">{description}</p>
      {children && <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-4">{children}</div>}
    </div>
  )
}

