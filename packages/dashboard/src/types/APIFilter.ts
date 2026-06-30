type subGroupValues = Partial<Record<'subgroupValueSelector' | 'subgroupTextSelector', string>>

/**
 * Optional "row filter field" for File Name url filters. Use it when the file name and the row filter
 * should come from different fields. When set:
 * - `valueSelector` builds the data file name,
 * - `filterSelector` is the unique dropdown value/`active` and the column used to narrow the loaded
 *   rows client-side,
 * - `textSelector` is the display label.
 * This is useful when one data file contains rows at two levels: `valueSelector` picks the file while
 * `filterSelector` picks the rows within it (and keeps the dropdown options unique).
 */
type filterValues = Partial<Record<'filterSelector', string>>

export type APIFilter = Record<'apiEndpoint' | 'valueSelector' | 'textSelector', string> & subGroupValues & filterValues
