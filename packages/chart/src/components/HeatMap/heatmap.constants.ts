import { type HeatMapConfig } from '../../types/ChartConfig'

export const HEATMAP_CONFIG_DEFAULTS: Required<HeatMapConfig> = {
  cellPadding: 1,
  rowLabelGap: 32,
  columnLabelGap: 56,
  xAxisPosition: 'top',
  showCellValues: false
}
