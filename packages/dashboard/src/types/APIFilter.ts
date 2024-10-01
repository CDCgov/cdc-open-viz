type subGroupValues = Partial<Record<'subgroupValueSelector' | 'subgroupTextSelector', string>>

export type APIFilter = Record<'apiEndpoint' | 'valueSelector' | 'textSelector', string> &
  subGroupValues & {
    values: [string, Record<string, string | number>[]]
  }
