import { ComponentMeta } from '../types'
import { BreadcrumbPreview } from '../previews/breadcrumb'

export const breadcrumbEntry: ComponentMeta = { slug: 'breadcrumb', name: 'Breadcrumb', category: 'Navigation', description: 'Path navigation with separators and current item.', Preview: BreadcrumbPreview, code: { react: `<Breadcrumb><BreadcrumbItem href="/">Home</BreadcrumbItem><BreadcrumbItem current>Page</BreadcrumbItem></Breadcrumb>`, html: `<mz-breadcrumb><mz-breadcrumb-item href="/">Home</mz-breadcrumb-item><mz-breadcrumb-item current>Page</mz-breadcrumb-item></mz-breadcrumb>` } }
