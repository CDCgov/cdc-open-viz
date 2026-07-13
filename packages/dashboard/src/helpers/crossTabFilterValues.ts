import { SharedFilter } from '../types/SharedFilter'

/**
 * Stable identity used to match "the same" shared filter across dashboard tabs.
 * `key` is not reliable because each tab can assign a different key to an
 * equivalent filter (e.g. "State/Territory (1)" vs "State/Territory"), so we
 * prefer the underlying data column, then the URL parameter, then the key.
 */
const getFilterIdentity = (filter: SharedFilter): string =>
  filter.columnName || filter.setByQueryParameter || filter.key

/**
 * Carries user-selected filter values from one dashboard tab's shared filters
 * onto another tab's matching shared filters. Filters are matched by identity,
 * and carried values are validated against the target filter's values.
 *
 * @param fromFilters - shared filters of the tab being left
 * @param toFilters - shared filters of the tab being entered
 * @returns the target filters with matching `active`/`queuedActive` values carried over
 */
export const crossTabFilterValues = (
  fromFilters: SharedFilter[] = [],
  toFilters: SharedFilter[] = []
): SharedFilter[] => {
  if (!toFilters.length || !fromFilters.length) return toFilters

  const sourceByIdentity = new Map<string, SharedFilter>()
  fromFilters.forEach(filter => {
    const identity = getFilterIdentity(filter)
    if (identity && !sourceByIdentity.has(identity)) sourceByIdentity.set(identity, filter)
  })

  return toFilters.map(target => {
    const source = sourceByIdentity.get(getFilterIdentity(target))
    if (!source || source.active === undefined) return target

    const values = target.values
    const isValidValue = (value: string) => !values?.length || values.includes(value)

    let active: string | string[]
    if (Array.isArray(source.active)) {
      active = source.active.filter(isValidValue)
    } else if (isValidValue(source.active)) {
      active = source.active
    } else {
      // Carried value does not exist in the target tab; keep the target default.
      return target
    }

    return { ...target, active, queuedActive: source.queuedActive }
  })
}
