import { FILTER_STYLE } from '../types/FilterStyles'
import { SharedFilter } from '../types/SharedFilter'

export const isVisibleDashboardFilter = (filter?: SharedFilter | null): boolean =>
  Boolean(
    filter &&
      (filter.type === 'urlfilter' ||
        filter.showDropdown ||
        filter.filterStyle === FILTER_STYLE.nestedDropdown ||
        filter.filterStyle === FILTER_STYLE.tabSimple)
  )

export const hasVisibleDashboardFiltersForIndexes = (
  sharedFilters?: SharedFilter[] | null,
  sharedFilterIndexes?: (number | string)[] | null
): boolean =>
  Boolean(
    sharedFilterIndexes?.length &&
      sharedFilterIndexes.map(Number).some(filterIndex => isVisibleDashboardFilter(sharedFilters?.[filterIndex]))
  )
