import { describe, expect, it } from 'vitest'
import { DATA_FUNCTION_COUNT, DATA_FUNCTION_MEAN, DATA_FUNCTION_SUM } from '@cdc/core/helpers/constants'
import { TREND_MODE_NUMERIC } from '@cdc/core/helpers/trendIndicator'
import { resolveWaffleNumericTrend } from '../helpers/waffleNumericTrend'

const numericTrendConfig = {
  mode: TREND_MODE_NUMERIC as const,
  column: 'historical',
  numericThreshold: 5
}

describe('resolveWaffleNumericTrend', () => {
  it('resolves up when current percent exceeds historical percent by threshold', () => {
    const result = resolveWaffleNumericTrend({
      trendIndicator: numericTrendConfig,
      mainDataFunction: DATA_FUNCTION_SUM,
      currentNumerator: 55,
      historicalNumerator: 40,
      denominator: 100
    })

    expect(result).toEqual({ state: 'resolved', arrowType: 'up' })
  })

  it('resolves down when historical percent exceeds current percent by threshold', () => {
    const result = resolveWaffleNumericTrend({
      trendIndicator: numericTrendConfig,
      mainDataFunction: DATA_FUNCTION_SUM,
      currentNumerator: 35,
      historicalNumerator: 50,
      denominator: 100
    })

    expect(result).toEqual({ state: 'resolved', arrowType: 'down' })
  })

  it('returns unmapped when delta is within threshold band', () => {
    const result = resolveWaffleNumericTrend({
      trendIndicator: { ...numericTrendConfig, numericThreshold: 10 },
      mainDataFunction: DATA_FUNCTION_MEAN,
      currentNumerator: 24,
      historicalNumerator: 19,
      denominator: 100
    })

    expect(result).toEqual({ state: 'unmapped' })
  })

  it('returns invalid when denominator is zero or non-finite', () => {
    const zeroDenominator = resolveWaffleNumericTrend({
      trendIndicator: numericTrendConfig,
      mainDataFunction: DATA_FUNCTION_SUM,
      currentNumerator: 20,
      historicalNumerator: 10,
      denominator: 0
    })

    const nonFiniteDenominator = resolveWaffleNumericTrend({
      trendIndicator: numericTrendConfig,
      mainDataFunction: DATA_FUNCTION_SUM,
      currentNumerator: 20,
      historicalNumerator: 10,
      denominator: Number.NaN
    })

    expect(zeroDenominator.state).toBe('invalid')
    expect(nonFiniteDenominator.state).toBe('invalid')
  })

  it('returns invalid when threshold is negative or not a number', () => {
    const negativeThreshold = resolveWaffleNumericTrend({
      trendIndicator: { ...numericTrendConfig, numericThreshold: -1 },
      mainDataFunction: DATA_FUNCTION_SUM,
      currentNumerator: 20,
      historicalNumerator: 10,
      denominator: 100
    })

    const invalidThreshold = resolveWaffleNumericTrend({
      trendIndicator: { ...numericTrendConfig, numericThreshold: Number.NaN },
      mainDataFunction: DATA_FUNCTION_SUM,
      currentNumerator: 20,
      historicalNumerator: 10,
      denominator: 100
    })

    expect(negativeThreshold.state).toBe('invalid')
    expect(invalidThreshold.state).toBe('invalid')
  })

  it('returns invalid when trend column is missing', () => {
    const result = resolveWaffleNumericTrend({
      trendIndicator: { ...numericTrendConfig, column: '' },
      mainDataFunction: DATA_FUNCTION_SUM,
      currentNumerator: 20,
      historicalNumerator: 10,
      denominator: 100
    })

    expect(result.state).toBe('invalid')
  })

  it('returns invalid for unsupported data functions', () => {
    const result = resolveWaffleNumericTrend({
      trendIndicator: numericTrendConfig,
      mainDataFunction: DATA_FUNCTION_COUNT,
      currentNumerator: 20,
      historicalNumerator: 10,
      denominator: 100
    })

    expect(result.state).toBe('invalid')
  })
})
