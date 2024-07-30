type Pivot = {
  columnName: string
  valueColumn: string
}

export type Table = {
  caption?: string
  cellMinWidth?: number
  collapsible?: boolean
  dateDisplayFormat?: string
  download?: boolean
  downloadImageButton?: boolean
  downloadPdfButton?: boolean
  excludeColumns?: string[]
  expanded?: boolean
  fontSize: 'small' | 'medium' | 'large'
  groupBy?: string
  height?: number
  indexLabel?: string
  label?: string
  limitHeight?: boolean
  pivot?: Pivot
  show?: boolean
  showDataTableLink?: boolean
  showDownloadImgButton?: boolean
  showDownloadPdfButton?: boolean
  showDownloadUrl?: boolean
  showVertical?: boolean
}
