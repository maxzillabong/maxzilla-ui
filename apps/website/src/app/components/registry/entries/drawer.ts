import { ComponentMeta } from '../types'
import { DrawerPreview } from '../previews/drawer'

export const drawerEntry: ComponentMeta = { slug: 'drawer', name: 'Drawer', category: 'Navigation', description: 'Side panel overlay with scrim and placement.', Preview: DrawerPreview, code: { react: `<Drawer open>...</Drawer>`, html: `<mz-drawer open>...</mz-drawer>` } }
