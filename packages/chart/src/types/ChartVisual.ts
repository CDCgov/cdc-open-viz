import { EditorPanel_Visual } from '@cdc/core/types/EditorPanel_Visual'

/**
 * Chart-specific visual configuration.
 * Extends BaseVisual with chart-specific visual properties for hover interactions
 * and datapoint styling.
 */
export interface ChartVisual extends EditorPanel_Visual {
  /** Whether to show a vertical line on hover */
  verticalHoverLine?: boolean
  /** Whether to show a horizontal line on hover */
  horizontalHoverLine?: boolean
  /** Style for line chart datapoint symbols */
  lineDatapointSymbol: 'none' | 'standard'
  /** Maximum number of shapes to display */
  maximumShapeAmount: 7
}
