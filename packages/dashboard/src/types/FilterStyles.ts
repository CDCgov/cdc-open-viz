export const FILTER_STYLE = {
  combobox: 'combobox',
  dropdown: 'dropdown',
  multiSelect: 'multi-select',
  nestedDropdown: 'nested-dropdown',
  tabSimple: 'tab-simple'
} as const

export type FilterStyle = (typeof FILTER_STYLE)[keyof typeof FILTER_STYLE]
