export type APIFilter = Record<'apiEndpoint'|'valueSelector'|'textSelector', string> & {
    heirarchyLookup?: string
}