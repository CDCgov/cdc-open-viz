import { BoxPlot } from './BoxPlot'
import { Palette } from './Palette'

export type General = {
  boxplot: BoxPlot
  geoType: string
  type: string
  allowMapZoom?: boolean
  showMissingDataLabel: boolean
  showSuppressedSymbol: boolean
  showZeroValueData: boolean
  showAnnotationDropdown?: boolean
  mobileAnnotationDisplay?: 'symbol' | 'text'
  hideNullValue: boolean
  title: string
  annotationDropdownText?: string
  palette?: Palette
}
