import { SharedFilter } from '../types/SharedFilter'

export const SHOW_ALL_VALUE = 'All'

export const isShowAllEnabled = (filter: SharedFilter): boolean =>
  filter.type === 'datafilter' && filter.filterStyle === 'multi-select' && filter.showAllOption === true

/** Imported mixed selections keep specifics; All is reserved only for opted-in filters. */
export const normalizeMultiSelectActive = (filter: SharedFilter, value: SharedFilter['active']): string[] => {
  const values = Array.isArray(value) ? value : value == null || value === '' ? [] : [value]
  return isShowAllEnabled(filter) && values.some(value => value !== SHOW_ALL_VALUE)
    ? values.filter(value => value !== SHOW_ALL_VALUE)
    : values
}

export const isShowAllSelection = (filter: SharedFilter): boolean => {
  if (!isShowAllEnabled(filter)) return false
  const values = normalizeMultiSelectActive(filter, filter.active)
  return values.length === 1 && values[0] === SHOW_ALL_VALUE
}

/** The newly added choice wins when switching between All and specific values. */
export const getChangedMultiSelectActive = (filter: SharedFilter, value: SharedFilter['active']): string[] => {
  const previous = normalizeMultiSelectActive(filter, filter.queuedActive ?? filter.active)
  const next = Array.isArray(value) ? value : value == null || value === '' ? [] : [value]
  if (isShowAllEnabled(filter) && next.includes(SHOW_ALL_VALUE) && !previous.includes(SHOW_ALL_VALUE)) {
    return [SHOW_ALL_VALUE]
  }
  return normalizeMultiSelectActive(filter, next)
}

export const withShowAllOption = (filter: SharedFilter, values: string[]): string[] =>
  isShowAllEnabled(filter) ? [SHOW_ALL_VALUE, ...values.filter(value => value !== SHOW_ALL_VALUE)] : values
