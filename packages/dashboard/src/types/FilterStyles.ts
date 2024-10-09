export const FILTER_STYLE = {
  nestedDropdown: 'nested-dropdown',
  multiSelect: 'multi-select',
  dropdown: 'dropdown'
} as const

export type FilterStyle = (typeof FILTER_STYLE)[keyof typeof FILTER_STYLE]
