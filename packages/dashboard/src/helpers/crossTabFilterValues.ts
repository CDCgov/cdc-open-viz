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
 * and carried values are validated against the target filter's values and type.
 *
 * Type safety: enforces active-value compatibility based on target filter style.
 * Multi-select targets receive arrays; single-select targets receive strings.
 * When the source and target have different filter styles, carried values are
 * adapted or skipped (e.g., first valid value from source array → single-select string).
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
    const isMultiSelect = target.filterStyle === 'multi-select'

    let active: string | string[]

    if (isMultiSelect) {
      // Target is multi-select: ensure active is an array
      if (Array.isArray(source.active)) {
        const filtered = source.active.filter(isValidValue)
        if (!filtered.length) return target // Keep target default if filtering leaves nothing
        active = filtered
      } else if (isValidValue(source.active)) {
        active = [source.active]
      } else {
        return target // Carried value invalid; keep target default
      }
    } else {
      // Target is single-select: ensure active is a string
      if (Array.isArray(source.active)) {
        // Find first valid value from the array
        const firstValid = source.active.find(isValidValue)
        if (!firstValid) return target // No valid value in array; keep target default
        active = firstValid
      } else if (isValidValue(source.active)) {
        active = source.active
      } else {
        return target // Carried value invalid; keep target default
      }
    }

    return { ...target, active, queuedActive: source.queuedActive }
  })
}
