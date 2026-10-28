import { type HeatMapConfig } from '../../types/ChartConfig'
import { type HeatMapScrollState } from './types'

export const MIN_HEATMAP_COLOR_BUCKETS = 1
export const MAX_HEATMAP_COLOR_BUCKETS = 9
export const MIN_HEATMAP_COLUMN_WIDTH = 1
export const MAX_HEATMAP_COLUMN_WIDTH = 400
export const MAX_HEATMAP_GRID_WIDTH = 1_000_000

export const AXIS_TOP_LABEL_SPACE = 28
export const AXIS_TICK_FONT_SIZE = 16
export const AXIS_TICK_LENGTH = 8
export const AXIS_TITLE_SPACE = 30
export const AXIS_TITLE_FONT_SIZE = 18
export const AXIS_TOP_TITLE_BASELINE = 18
export const X_AXIS_TITLE_LABEL_SPACE = 32
export const X_AXIS_TITLE_LABEL_PADDING = 9
export const TICK_ROTATION_VERTICAL_ANCHOR_THRESHOLD = -50
export const AXIS_MARGIN_PADDING = 12
export const AXIS_OUTER_PADDING = 8
export const MIN_LEFT_MARGIN = 64
export const MAX_LEFT_MARGIN = 240
export const MIN_X_AXIS_MARGIN = 16
export const MAX_X_AXIS_MARGIN = 220
export const MIN_GRID_WIDTH = 24
export const MIN_GRID_HEIGHT = 24
export const MAX_X_AXIS_SCROLL_INSET = MAX_LEFT_MARGIN
export const SCROLL_EDGE_TOLERANCE = 1
export const AXIS_TICK_FONT = `normal ${AXIS_TICK_FONT_SIZE}px Nunito, sans-serif`
export const SIDE_Y_AXIS_TITLE_GAP = 20
export const AXIS_TITLE_FONT_WEIGHT = 'bold'

export const DEFAULT_SERIES_LABEL = 'Series'
export const DEFAULT_VALUE_LABEL = 'Value'
export const EMPTY_VALUE_LABEL = 'No data'
export const MIN_CELL_VALUE_WIDTH = 18
export const MIN_CELL_VALUE_HEIGHT = 14

export const DEFAULT_SCROLL_STATE: HeatMapScrollState = {
  scrollbarSpace: 0,
  canScrollLeft: false,
  canScrollRight: false
}

export const HEATMAP_CONFIG_DEFAULTS: Required<HeatMapConfig> = {
  cellPadding: 1,
  rowLabelGap: 0,
  columnLabelGap: 20,
  colorBucketCount: 9,
  xAxisPosition: 'top',
  showCellValues: false,
  horizontalScroll: false,
  minColumnWidth: 44
}
