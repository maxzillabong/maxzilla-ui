// Re-export data from the refactored registry
import { registry } from './registry/index'

export const componentsData = registry.map(r => ({
  slug: r.slug,
  name: r.name,
  category: r.category,
  description: r.description
}))

export function findDataBySlug(slug: string) {
  return componentsData.find((c) => c.slug === slug)
}