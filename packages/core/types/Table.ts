export type Pivot = {
  columnName: string
  valueColumns: string[]
}

export type DefaultSort = {
  column?: string
  sortDirection?: 'asc' | 'desc' | 'custom'
  customOrder?: string[]
}

export type Table = {
  caption?: string
  cellMinWidth?: number
  collapsible?: boolean
  dateDisplayFormat?: string
  showNonGeoData?: boolean
  download?: boolean
  downloadDataLabel?: string
  downloadImageLabel?: string
  downloadUrlLabel?: string
  downloadVisibleDataOnly?: boolean
  downloadImageButton?: boolean
  downloadPdfButton?: boolean
  excludeColumns?: string[]
  expanded?: boolean
  groupBy?: string
  height?: number
  includeContextInDownload?: boolean
  indexLabel?: string
  label?: string
  limitHeight?: boolean
  pivot?: Pivot
  show?: boolean
  search?: boolean
  searchPlaceholder?: string
  sharedFilterColumns?: string[] // added at runtime by Dashboard
  showBottomCollapse?: boolean // if true, the table will have a button to collapse at bottom of the expanded table
  showDataTableLink?: boolean
  showDownloadImgButton?: boolean
  showDownloadLinkBelow?: boolean
  showDownloadPdfButton?: boolean
  showDownloadUrl?: boolean
  showVertical?: boolean
  defaultSort?: DefaultSort
}
