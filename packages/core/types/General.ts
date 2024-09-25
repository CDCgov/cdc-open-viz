import { BoxPlot } from './BoxPlot'

export type General = {
  boxplot: BoxPlot
  geoType: string
  type: string
  showDownloadButton: boolean
  allowMapZoom?: boolean
  showMissingDataLabel: boolean
  showSuppressedSymbol: boolean
  showAnnotationDropdown?: boolean
  hideNullValue: boolean
  title: string
}
