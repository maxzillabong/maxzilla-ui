import { ComponentMeta } from './types'

// Import all entries
import { buttonEntry } from './entries/button'
import { badgeEntry } from './entries/badge'
import { inputEntry } from './entries/input'
import { cardEntry } from './entries/card'
import { avatarEntry } from './entries/avatar'
import { modalEntry } from './entries/modal'
import { accordionEntry } from './entries/accordion'
import { dividerEntry } from './entries/divider'
import { stackEntry } from './entries/stack'
import { containerEntry } from './entries/container'
import { checkboxEntry } from './entries/checkbox'
import { switchEntry } from './entries/switch'
import { textareaEntry } from './entries/textarea'
import { navbarEntry } from './entries/navbar'
import { breadcrumbEntry } from './entries/breadcrumb'
import { drawerEntry } from './entries/drawer'
import { radiogroupEntry } from './entries/radiogroup'
import { tabsEntry } from './entries/tabs'
import { popoverEntry } from './entries/popover'
import { tableEntry } from './entries/table'
import { formEntry } from './entries/form'
import { paginationEntry } from './entries/pagination'
import { alertEntry } from './entries/alert'
import { progressEntry } from './entries/progress'
import { loadingEntry } from './entries/loading'
import { toastcontainerEntry } from './entries/toastcontainer'
import { treeEntry } from './entries/tree'
import { datepickerEntry } from './entries/datepicker'
import { selectEntry } from './entries/select'
import { tooltipEntry } from './entries/tooltip'
import { sidebarEntry } from './entries/sidebar'
import { toastEntry } from './entries/toast'
import { gridEntry } from './entries/grid'
import { colorPickerEntry } from './entries/color-picker'
import { rangeEntry } from './entries/range'
import { ratingEntry } from './entries/rating'
import { spinnerEntry } from './entries/spinner'
import { tagEntry } from './entries/tag'
import { skeletonEntry } from './entries/skeleton'

// Combine into registry
export const registry: ComponentMeta[] = [
  buttonEntry,
  badgeEntry,
  inputEntry,
  cardEntry,
  avatarEntry,
  modalEntry,
  accordionEntry,
  dividerEntry,
  stackEntry,
  containerEntry,
  checkboxEntry,
  switchEntry,
  textareaEntry,
  navbarEntry,
  breadcrumbEntry,
  drawerEntry,
  radiogroupEntry,
  tabsEntry,
  popoverEntry,
  tableEntry,
  formEntry,
  paginationEntry,
  alertEntry,
  progressEntry,
  loadingEntry,
  toastcontainerEntry,
  treeEntry,
  datepickerEntry,
  selectEntry,
  tooltipEntry,
  sidebarEntry,
  toastEntry,
  gridEntry,
  colorPickerEntry,
  rangeEntry,
  ratingEntry,
  spinnerEntry,
  tagEntry,
  skeletonEntry
]

export function byCategory(category: string) {
  return registry.filter((r) => r.category === category)
}

export function findBySlug(slug: string) {
  return registry.find((r) => r.slug === slug)
}
