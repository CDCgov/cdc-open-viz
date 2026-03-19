export const APP_FONT_SIZE = 18
export const COOL_GRAY_90 = getComputedStyle(document.documentElement).getPropertyValue('--cool-gray-90').trim()
export const APP_FONT_COLOR = COOL_GRAY_90
export const FALLBACK_COLOR_PALETTE_V1 = 'qualitative-bold'
export const FALLBACK_COLOR_PALETTE_V2 = 'sequential_blue'
export const EDITOR_WIDTH = 350

// Palette migration behavior flag
export const USE_V2_MIGRATION = true // Set to true to enable v2 migration and conversion modal

// Map editor feature flag for Data Bite-style visual controls
export const ENABLE_MAP_DATA_BITE_VISUAL_SETTINGS = true

// Chart feature flag for visual controls (border, accent, background). Intentionally enabled — UI is considered stable.
export const ENABLE_CHART_VISUAL_SETTINGS = true

// Turn these to true if we ever want the tp5 treatment for maps/charts
export const ENABLE_CHART_MAP_TP5_TREATMENT = false
export const ENABLE_CHART_MAP_TP5_TREATMENT_SELECTION = false

// Data operators for conditional logic
export const DATA_OPERATOR_LESS = '<'
export const DATA_OPERATOR_GREATER = '>'
export const DATA_OPERATOR_LESSEQUAL = '<='
export const DATA_OPERATOR_GREATEREQUAL = '>='
export const DATA_OPERATOR_EQUAL = '='
export const DATA_OPERATOR_NOTEQUAL = '≠'

export const DATA_OPERATORS = [
  DATA_OPERATOR_LESS,
  DATA_OPERATOR_GREATER,
  DATA_OPERATOR_LESSEQUAL,
  DATA_OPERATOR_GREATEREQUAL,
  DATA_OPERATOR_EQUAL,
  DATA_OPERATOR_NOTEQUAL
]

export const DATA_FUNCTION_MAX = 'Max'
export const DATA_FUNCTION_COUNT = 'Count'
export const DATA_FUNCTION_MEAN = 'Mean (Average)'
export const DATA_FUNCTION_MEDIAN = 'Median'
export const DATA_FUNCTION_MIN = 'Min'
export const DATA_FUNCTION_MODE = 'Mode'
export const DATA_FUNCTION_RANGE = 'Range'
export const DATA_FUNCTION_SUM = 'Sum'
export const DATA_FUNCTION_PASSTHROUGH = 'Pass Through'

export const DATA_FUNCTIONS = [
  DATA_FUNCTION_COUNT,
  DATA_FUNCTION_MAX,
  DATA_FUNCTION_MEAN,
  DATA_FUNCTION_MEDIAN,
  DATA_FUNCTION_MIN,
  DATA_FUNCTION_MODE,
  DATA_FUNCTION_PASSTHROUGH,
  DATA_FUNCTION_RANGE,
  DATA_FUNCTION_SUM
]
