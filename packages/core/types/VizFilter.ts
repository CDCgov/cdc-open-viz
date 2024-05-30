export type VizFilter = {
  active: string
  columnName: string
  filterStyle: 'tab' | 'pill' | 'tab bar' | 'dropdown'
  label: string
  order: 'asc' | 'desc' | 'cust'
  orderedValues?: string[]
  queryParameter: string
  setByQueryParameter: string
  showDropdown: boolean
  type: 'url'
  values: string[]
}
