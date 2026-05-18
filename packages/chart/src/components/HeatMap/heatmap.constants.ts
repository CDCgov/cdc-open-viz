import { type HeatMapConfig } from '../../types/ChartConfig'

export const MIN_HEATMAP_COLOR_BUCKETS = 1
export const MAX_HEATMAP_COLOR_BUCKETS = 9

export const HEATMAP_CONFIG_DEFAULTS: Required<HeatMapConfig> = {
  cellPadding: 1,
  rowLabelGap: 32,
  columnLabelGap: 56,
  colorBucketCount: 9,
  xAxisPosition: 'top',
  showCellValues: false
}
