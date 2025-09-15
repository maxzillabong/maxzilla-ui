import { ComponentMeta } from '../types'
import { PaginationPreview } from '../previews/pagination'

export const paginationEntry: ComponentMeta = {
    slug: 'pagination',
    name: 'Pagination',
    category: 'Data Display',
    description: 'Page navigation with prev/next and pages.',
    Preview: PaginationPreview,
    code: {
      react: `import { Pagination } from 'maxzilla-ui-react'

<Pagination total={120} pageSize={10} current={1} />`,
      html: `<mz-pagination total="120" page-size="10" current="1"></mz-pagination>`
    }
  }
