import numberFromString from './numberFromString'
import { DATA_FUNCTION_PASSTHROUGH } from './constants'
import { aggregateByDataFunction, NUMERIC_TREND_ELIGIBLE_FUNCTIONS } from './dataAggregation'

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

export type TrendIndicatorConfig = {
  mode?: TrendMode | null
  column?: string
  numericThreshold?: number
  mappings?: TrendIndicatorMapping[]
  upLabel?: string
  downLabel?: string
  trendLabel?: string
}

export type TrendResolutionState = 'resolved' | 'ambiguous' | 'unmapped' | 'invalid' | 'disabled'

export type TrendResolution = {
  state: TrendResolutionState
  arrowType?: TrendArrowType
}

const isValidArrowType = (value: string): value is TrendArrowType => {
  return TREND_ARROW_TYPES.includes(value as TrendArrowType)
}

type ResolveTrendIndicatorArgs = {
  data: Record<string, any>[]
  trendIndicator?: TrendIndicatorConfig
  mainDataFunction?: string
  mainDataColumn?: string
  allowNumericMode?: boolean
}

export const resolveTrendIndicator = ({
  data = [],
  trendIndicator,
  mainDataFunction,
  mainDataColumn,
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
    const sourceRow = data.length === 1 ? data[0] : usePassthroughFirstRow && data.length > 1 ? data[0] : undefined

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

    if (!mainDataFunction || !NUMERIC_TREND_ELIGIBLE_FUNCTIONS.has(mainDataFunction)) {
      return { state: 'invalid' }
    }

    if (!mainDataColumn || trendIndicator.numericThreshold === undefined) {
      return { state: 'invalid' }
    }

    const threshold = Number(trendIndicator.numericThreshold)

    if (!Number.isFinite(threshold) || threshold < 0) {
      return { state: 'invalid' }
    }

    const currentNumericValues = data
      .map(row => numberFromString(row[mainDataColumn]))
      .filter(value => typeof value === 'number' && Number.isFinite(value)) as number[]

    const historicalNumericValues = data
      .map(row => numberFromString(row[trendIndicator.column]))
      .filter(value => typeof value === 'number' && Number.isFinite(value)) as number[]

    const currentAggregatedValue = aggregateByDataFunction(currentNumericValues, mainDataFunction) as number | null
    const historicalAggregatedValue = aggregateByDataFunction(historicalNumericValues, mainDataFunction) as number | null

    if (
      currentAggregatedValue === null ||
      historicalAggregatedValue === null ||
      !Number.isFinite(currentAggregatedValue) ||
      !Number.isFinite(historicalAggregatedValue)
    ) {
      return { state: 'invalid' }
    }

    const delta = currentAggregatedValue - historicalAggregatedValue

    if (delta > threshold) {
      return { state: 'resolved', arrowType: TREND_ARROW_UP }
    }

    if (delta < -threshold) {
      return { state: 'resolved', arrowType: TREND_ARROW_DOWN }
    }

    return { state: 'unmapped' }
  }

  return { state: 'invalid' }
}
