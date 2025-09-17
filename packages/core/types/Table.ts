export type Pivot = {
  columnName: string
  valueColumns: string[]
}

export type RowColorMode = 'sequential' | 'categorical' | 'custom'

export type RowColorConfig = {
  enabled: boolean
  colorColumn?: string
  mode?: RowColorMode
  palette?: string
  customColors?: Record<string, string>
  customRange?: { min: number; max: number }
}

export type Table = {
  caption?: string
  cellMinWidth?: number
  collapsible?: boolean
  dateDisplayFormat?: string
  showNonGeoData?: boolean
  download?: boolean
  downloadVisibleDataOnly?: boolean
  downloadImageButton?: boolean
  downloadPdfButton?: boolean
  excludeColumns?: string[]
  expanded?: boolean
  groupBy?: string
  height?: number
  indexLabel?: string
  label?: string
  limitHeight?: boolean
  pivot?: Pivot
  rowColors?: RowColorConfig
  show?: boolean
  sharedFilterColumns?: string[] // added at runtime by Dashboard
  showBottomCollapse?: boolean // if true, the table will have a button to collapse at bottom of the expanded table
  showDataTableLink?: boolean
  showDownloadImgButton?: boolean
  showDownloadLinkBelow?: boolean
  showDownloadPdfButton?: boolean
  showDownloadUrl?: boolean
  showVertical?: boolean
}
