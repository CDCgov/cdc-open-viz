import { BoxPlot } from './BoxPlot'

export type General = {
  boxplot: BoxPlot
  geoType: string
  type: string
  allowMapZoom?: boolean
  showMissingDataLabel: boolean
  showSuppressedSymbol: boolean
  showZeroValueData: boolean
  showAnnotationDropdown?: boolean
  hideNullValue: boolean
  title: string
  annotationDropdownText?: string
}
