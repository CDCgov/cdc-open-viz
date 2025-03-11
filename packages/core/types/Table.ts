export type Pivot = {
  columnName: string
  valueColumns: string[]
}

export type Table = {
  caption?: string
  cellMinWidth?: number
  collapsible?: boolean
  dateDisplayFormat?: string
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
  show?: boolean
  sharedFilterColumns?: string[] // added at runtime by Dashboard
  showDataTableLink?: boolean
  showDownloadImgButton?: boolean
  showDownloadLinkBelow?: boolean
  showDownloadPdfButton?: boolean
  showDownloadUrl?: boolean
  showVertical?: boolean
}
