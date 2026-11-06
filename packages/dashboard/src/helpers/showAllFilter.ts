import { SharedFilter } from '../types/SharedFilter'
import { FILTER_STYLE } from '../types/FilterStyles'

// Opt in explicitly: ordinary data values and required-filter prompts keep their meaning.
export const hasShowAllOption = (filter: SharedFilter): boolean =>
  filter.type === 'datafilter' && filter.filterStyle === FILTER_STYLE.multiSelect && filter.showAllOption === true

export const getShowAllValue = (filter: SharedFilter): string => filter.resetLabel || 'All'

export const isShowAllSelection = (filter: SharedFilter): boolean => {
  if (!hasShowAllOption(filter)) return false
  const active = filter.active
  const sentinel = getShowAllValue(filter)
  return Array.isArray(active) ? active.every(value => value === sentinel) : active === sentinel
}
