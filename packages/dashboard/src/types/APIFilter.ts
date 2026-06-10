type subGroupValues = Partial<Record<'subgroupValueSelector' | 'subgroupTextSelector', string>>

/**
 * Optional "row filter field" for File Name url filters. Use it when the file name and the row filter
 * should come from different fields. When set:
 * - `valueSelector` builds the data file name (e.g. `geography`),
 * - `filterSelector` is the unique dropdown value/`active` and the column used to narrow the loaded
 *   rows client-side (e.g. `county_state`),
 * - `textSelector` is the display label (e.g. `county_state`).
 * For example, this lets a single dropdown list both states and counties while still resolving to the
 * correct per-state data file and showing only the selected option's rows.
 */
type filterValues = Partial<Record<'filterSelector', string>>

export type APIFilter = Record<'apiEndpoint' | 'valueSelector' | 'textSelector', string> & subGroupValues & filterValues
