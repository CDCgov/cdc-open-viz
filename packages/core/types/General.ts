import { BoxPlot } from './BoxPlot'
import { Palette } from './Palette'

/**
 * Base general configuration shared across visualizations.
 * Contains common configuration properties like palette.
 *
 * Visualization-specific general configs should extend this interface.
 *
 * @example
 * ```typescript
 * export interface ChartGeneral extends BaseGeneral {
 *   showAnnotationDropdown?: boolean
 *   annotationDropdownText?: string
 * }
 * ```
 */
export interface BaseGeneral {
  /** Color palette configuration */
  palette?: Palette
}

/**
 * @deprecated This type is deprecated and should not be used.
 * Each visualization should define its own General interface with visualization-specific properties.
 * Common properties like title and showTitle are available in BaseVisualizationConfig.
 *
 * Historical Note: This type was originally used but contained a mix of visualization-specific
 * properties (boxplot for charts, geoType for maps, etc.) which made it unsuitable as a shared type.
 */
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
