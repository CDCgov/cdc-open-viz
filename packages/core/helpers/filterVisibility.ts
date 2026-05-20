import { VizFilter } from '../types/VizFilter'

type FilterVisibilityInput = Partial<Pick<VizFilter, 'showDropdown'>> | undefined | null

export const isVisibleVizFilter = (filter: FilterVisibilityInput): boolean =>
  Boolean(filter && filter.showDropdown !== false)

export const hasVisibleVizFilters = (filters?: FilterVisibilityInput[] | null): boolean =>
  Boolean(filters?.some(isVisibleVizFilter))
