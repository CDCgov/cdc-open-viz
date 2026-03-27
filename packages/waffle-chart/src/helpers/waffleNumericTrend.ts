import {
  TREND_ARROW_DOWN,
  TREND_ARROW_UP,
  TREND_MODE_NUMERIC,
  TrendIndicatorConfig,
  TrendResolution
} from '@cdc/core/helpers/trendIndicator'
import { NUMERIC_TREND_ELIGIBLE_FUNCTIONS } from '@cdc/core/helpers/dataAggregation'

type ResolveWaffleNumericTrendArgs = {
  trendIndicator?: TrendIndicatorConfig
  mainDataFunction?: string
  currentNumerator: number
  historicalNumerator: number
  denominator: number
}

export const resolveWaffleNumericTrend = ({
  trendIndicator,
  mainDataFunction,
  currentNumerator,
  historicalNumerator,
  denominator
}: ResolveWaffleNumericTrendArgs): TrendResolution => {
  if (!trendIndicator?.mode) {
    return { state: 'disabled' }
  }

  if (trendIndicator.mode !== TREND_MODE_NUMERIC) {
    return { state: 'invalid' }
  }

  if (!trendIndicator.column || !mainDataFunction || !NUMERIC_TREND_ELIGIBLE_FUNCTIONS.has(mainDataFunction)) {
    return { state: 'invalid' }
  }

  const threshold = Number(trendIndicator.numericThreshold)

  if (!Number.isFinite(threshold) || threshold < 0) {
    return { state: 'invalid' }
  }

  if (
    !Number.isFinite(currentNumerator) ||
    !Number.isFinite(historicalNumerator) ||
    !Number.isFinite(denominator) ||
    denominator === 0
  ) {
    return { state: 'invalid' }
  }

  const currentPercent = (currentNumerator / denominator) * 100
  const historicalPercent = (historicalNumerator / denominator) * 100
  const percentDelta = currentPercent - historicalPercent

  if (percentDelta > threshold) {
    return { state: 'resolved', arrowType: TREND_ARROW_UP }
  }

  if (percentDelta < -threshold) {
    return { state: 'resolved', arrowType: TREND_ARROW_DOWN }
  }

  return { state: 'unmapped' }
}
