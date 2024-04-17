export type APIFilter = Record<'apiEndpoint' | 'valueSelector' | 'textSelector', string> & {
  autoLoad?: boolean
  defaultValue?: string
}
