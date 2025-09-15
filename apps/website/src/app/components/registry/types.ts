export type ComponentCategory = 'Basics' | 'Forms' | 'Data Display' | 'Overlays' | 'Navigation' | 'Layout'

export interface ComponentMeta {
  slug: string
  name: string
  category: ComponentCategory
  description: string
  tags?: string[]
  Preview: React.FC
  code: {
    react: string
    html: string
  }
  sections?: {
    id: string
    title: string
    Preview: React.FC
    code: {
      react: string
      html: string
    }
  }[]
}
