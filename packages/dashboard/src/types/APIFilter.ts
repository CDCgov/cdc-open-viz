type subGroupValues = Partial<Record<'subgroupValueSelector' | 'subgroupTextSelector', string>>

/**
 * Optional "linked geography" selector for File Name url filters. When set, the filter operates in
 * linked-geo mode:
 * - `valueSelector` builds the data file name (e.g. `geography`),
 * - `filterSelector` is the unique dropdown value/`active` and the column used to narrow the loaded
 *   rows client-side (e.g. `county_state`),
 * - `textSelector` is the display label (e.g. `county_state`).
 * This lets a single dropdown list both states and counties while still resolving to the correct
 * per-state data file and showing only the selected geography's rows.
 */
type filterValues = Partial<Record<'filterSelector', string>>

export type APIFilter = Record<'apiEndpoint' | 'valueSelector' | 'textSelector', string> & subGroupValues & filterValues
