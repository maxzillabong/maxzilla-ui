"use client"
import { SiteSidebar } from '@/components/SiteSidebar'
export function ComponentsSidebar(props: { current: string; sticky?: boolean; filter?: string }) {
  return <SiteSidebar current={props.current} sticky={props.sticky} filter={props.filter} />
}
