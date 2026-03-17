import numberFromString from './numberFromString'
import {
  DATA_FUNCTION_PASSTHROUGH,
  DATA_FUNCTION_MAX,
  DATA_FUNCTION_MEAN,
  DATA_FUNCTION_MEDIAN,
  DATA_FUNCTION_MIN,
  DATA_FUNCTION_SUM
} from './constants'

export const TREND_ARROW_UP = 'up'
export const TREND_ARROW_DOWN = 'down'

export const TREND_ARROW_TYPES = [TREND_ARROW_UP, TREND_ARROW_DOWN] as const
export type TrendArrowType = (typeof TREND_ARROW_TYPES)[number]

export const TREND_MODE_CATEGORICAL = 'categorical'
export const TREND_MODE_NUMERIC = 'numeric'
export const TREND_MODES = [TREND_MODE_CATEGORICAL, TREND_MODE_NUMERIC] as const
export type TrendMode = (typeof TREND_MODES)[number]

export type TrendIndicatorMapping = {
  sourceValue: string
  arrowType: TrendArrowType
}

export type TrendIndicatorNumericRules = {
  upThreshold: number
  downThreshold: number
}

export type TrendIndicatorConfig = {
  mode?: TrendMode | null
  column?: string
  numericRules?: TrendIndicatorNumericRules
  mappings?: TrendIndicatorMapping[]
}

export type TrendResolutionState = 'resolved' | 'ambiguous' | 'unmapped' | 'invalid' | 'disabled'

export type TrendResolution = {
  state: TrendResolutionState
  arrowType?: TrendArrowType
}

const NUMERIC_ELIGIBLE_FUNCTIONS = new Set([
  DATA_FUNCTION_SUM,
  DATA_FUNCTION_MEAN,
  DATA_FUNCTION_MEDIAN,
  DATA_FUNCTION_MIN,
  DATA_FUNCTION_MAX
])

const aggregateByDataFunction = (values: number[], dataFunction: string): number | null => {
  if (!values.length) return null

  switch (dataFunction) {
    case DATA_FUNCTION_SUM:
      return values.reduce((sum, value) => sum + value, 0)
    case DATA_FUNCTION_MEAN:
      return values.reduce((sum, value) => sum + value, 0) / values.length
    case DATA_FUNCTION_MEDIAN: {
      const sortedValues = [...values].sort((a, b) => a - b)
      const midpoint = Math.floor(sortedValues.length / 2)
      return sortedValues.length % 2 !== 0
        ? sortedValues[midpoint]
        : (sortedValues[midpoint - 1] + sortedValues[midpoint]) / 2
    }
    case DATA_FUNCTION_MIN:
      return Math.min(...values)
    case DATA_FUNCTION_MAX:
      return Math.max(...values)
    default:
      return null
  }
}

const isValidArrowType = (value: string): value is TrendArrowType => {
  return TREND_ARROW_TYPES.includes(value as TrendArrowType)
}

type ResolveTrendIndicatorArgs = {
  data: Record<string, any>[]
  trendIndicator?: TrendIndicatorConfig
  mainDataFunction?: string
  allowNumericMode?: boolean
}

export const resolveTrendIndicator = ({
  data = [],
  trendIndicator,
  mainDataFunction,
  allowNumericMode = false
}: ResolveTrendIndicatorArgs): TrendResolution => {
  if (!trendIndicator?.mode) {
    return { state: 'disabled' }
  }

  if (!trendIndicator.column) {
    return { state: 'invalid' }
  }

  if (trendIndicator.mode === TREND_MODE_CATEGORICAL) {
    const usePassthroughFirstRow = mainDataFunction === DATA_FUNCTION_PASSTHROUGH
    const sourceRow =
      data.length === 1 ? data[0] : usePassthroughFirstRow && data.length > 1 ? data[0] : undefined

    if (!sourceRow) {
      return { state: 'ambiguous' }
    }

    const sourceValue = sourceRow?.[trendIndicator.column]
    if (sourceValue === undefined || sourceValue === null) {
      return { state: 'invalid' }
    }

    const sourceValueString = String(sourceValue)
    const mapping = trendIndicator.mappings?.find(mappingRule => mappingRule.sourceValue === sourceValueString)

    if (!mapping || !isValidArrowType(mapping.arrowType)) {
      return { state: 'unmapped' }
    }

    return { state: 'resolved', arrowType: mapping.arrowType }
  }

  if (trendIndicator.mode === TREND_MODE_NUMERIC) {
    if (!allowNumericMode) {
      return { state: 'invalid' }
    }

    if (!mainDataFunction || !NUMERIC_ELIGIBLE_FUNCTIONS.has(mainDataFunction)) {
      return { state: 'invalid' }
    }

    if (
      trendIndicator.numericRules?.upThreshold === undefined ||
      trendIndicator.numericRules?.downThreshold === undefined
    ) {
      return { state: 'invalid' }
    }

    const upThreshold = Number(trendIndicator.numericRules.upThreshold)
    const downThreshold = Number(trendIndicator.numericRules.downThreshold)

    if (!Number.isFinite(upThreshold) || !Number.isFinite(downThreshold)) {
      return { state: 'invalid' }
    }

    const numericValues = data
      .map(row => numberFromString(row[trendIndicator.column]))
      .filter(value => typeof value === 'number' && Number.isFinite(value)) as number[]

    const aggregatedValue = aggregateByDataFunction(numericValues, mainDataFunction)
    if (aggregatedValue === null || !Number.isFinite(aggregatedValue)) {
      return { state: 'invalid' }
    }

    // Strict comparisons prevent overlap and keep equality as no-arrow.
    if (aggregatedValue > upThreshold) {
      return { state: 'resolved', arrowType: TREND_ARROW_UP }
    }

    if (aggregatedValue < downThreshold) {
      return { state: 'resolved', arrowType: TREND_ARROW_DOWN }
    }

    return { state: 'unmapped' }
  }

  return { state: 'invalid' }
}

