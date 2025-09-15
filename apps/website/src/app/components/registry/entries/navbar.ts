import { ComponentMeta } from '../types'
import { NavbarPreview } from '../previews/navbar'

export const navbarEntry: ComponentMeta = { slug: 'navbar', name: 'Navbar', category: 'Navigation', description: 'Top navigation with brand and menu slots.', Preview: NavbarPreview, code: { react: `<Navbar><span slot="brand">Brand</span><a slot="menu">Item</a></Navbar>`, html: `<mz-navbar><span slot="brand">Brand</span><a slot="menu">Item</a></mz-navbar>` } }
