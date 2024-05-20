export type Legend = {
  additionalCategories: string[]
  // general legend onClick behavior
  behavior: 'highlight' | 'isolate' | string
  axisAlign: boolean
  colorCode: string
  description: string
  // show or hide the legend
  hide: boolean
  highlightOnHover: boolean
  label: string
  lineMode: boolean
  position: string
  reverseLabelOrder: boolean
  singleRow: boolean
  type: string
  verticalSorted: boolean
}
