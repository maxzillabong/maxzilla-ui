export const componentsData = [
  { slug: 'button', name: 'Button', category: 'Basics', description: 'Clickable actions with variants and sizes.' },
  { slug: 'badge', name: 'Badge', category: 'Basics', description: 'Small status or count indicator in multiple variants.' },
  { slug: 'input', name: 'Input', category: 'Forms', description: 'Accessible form input with label, helper text and sizes.' },
  { slug: 'card', name: 'Card', category: 'Data Display', description: 'Surface container with elevation variants and slots.' },
  { slug: 'avatar', name: 'Avatar', category: 'Data Display', description: 'User avatar with image, initials and sizes.' },
  { slug: 'modal', name: 'Modal', category: 'Overlays', description: 'Dialog overlay with header, content and footer slots.' },
  { slug: 'accordion', name: 'Accordion', category: 'Navigation', description: 'Collapsible panels for grouping content.' },
  { slug: 'divider', name: 'Divider', category: 'Layout', description: 'Horizontal or vertical separator for grouping content.' },
  { slug: 'stack', name: 'Stack', category: 'Layout', description: 'Flexbox stack with direction, spacing, alignment.' },
  { slug: 'container', name: 'Container', category: 'Layout', description: 'Content wrapper with max-width sizes and centering.' },
  { slug: 'checkbox', name: 'Checkbox', category: 'Forms', description: 'Boolean input with label and change event.' },
  { slug: 'switch', name: 'Switch', category: 'Forms', description: 'Toggle switch with keyboard support.' },
  { slug: 'textarea', name: 'Textarea', category: 'Forms', description: 'Multi-line text input with label and helper text.' },
  { slug: 'navbar', name: 'Navbar', category: 'Navigation', description: 'Top navigation with brand and menu slots.' },
  { slug: 'breadcrumb', name: 'Breadcrumb', category: 'Navigation', description: 'Path navigation with separator and current item.' },
  { slug: 'drawer', name: 'Drawer', category: 'Navigation', description: 'Side panel overlay with scrim and placement.' },
  { slug: 'radiogroup', name: 'Radio Group', category: 'Forms', description: 'Single selection among multiple options.' },
  { slug: 'tabs', name: 'Tabs', category: 'Data Display', description: 'Tabbed interface with panels.' },
  { slug: 'popover', name: 'Popover', category: 'Overlays', description: 'Rich contextual content anchored to a trigger.' },
  { slug: 'table', name: 'Table', category: 'Data Display', description: 'Semantic table with styled header and rows.' },
  { slug: 'form', name: 'Form', category: 'Forms', description: 'Form container with group and actions.' },
  { slug: 'pagination', name: 'Pagination', category: 'Data Display', description: 'Page navigation with prev/next and pages.' },
  { slug: 'alert', name: 'Alert', category: 'Data Display', description: 'Contextual messages with variants and dismiss.' },
  { slug: 'progress', name: 'Progress', category: 'Data Display', description: 'Progress indication (linear).' },
  { slug: 'loading', name: 'Loading', category: 'Overlays', description: 'Loading spinner (inline or overlay).' },
  { slug: 'toastcontainer', name: 'Toast Container', category: 'Overlays', description: 'Toast stack/queue with variants and timing.' },
]

export function findDataBySlug(slug: string) {
  return componentsData.find((c) => c.slug === slug)
}
