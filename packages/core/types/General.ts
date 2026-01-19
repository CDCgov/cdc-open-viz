import { BoxPlot } from './BoxPlot'
import { ComponentThemes } from './ComponentThemes'

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
  /** Header color theme - used by maps and filters */
  headerColor?: ComponentThemes
}
