import { describe, expect, it } from 'vitest'
import {
  aggregateByDataFunction,
  aggregateMax,
  aggregateMean,
  aggregateMedian,
  aggregateMin,
  aggregateMode,
  aggregateRange,
  aggregateSum,
  NUMERIC_TREND_ELIGIBLE_FUNCTIONS
} from '../dataAggregation'
import {
  DATA_FUNCTION_COUNT,
  DATA_FUNCTION_MAX,
  DATA_FUNCTION_MEAN,
  DATA_FUNCTION_MEDIAN,
  DATA_FUNCTION_MIN,
  DATA_FUNCTION_MODE,
  DATA_FUNCTION_RANGE,
  DATA_FUNCTION_SUM
} from '../constants'

describe('dataAggregation helper', () => {
  it('exposes expected numeric trend eligible data functions', () => {
    expect(NUMERIC_TREND_ELIGIBLE_FUNCTIONS.has(DATA_FUNCTION_SUM)).toBe(true)
    expect(NUMERIC_TREND_ELIGIBLE_FUNCTIONS.has(DATA_FUNCTION_MEAN)).toBe(true)
    expect(NUMERIC_TREND_ELIGIBLE_FUNCTIONS.has(DATA_FUNCTION_MEDIAN)).toBe(true)
    expect(NUMERIC_TREND_ELIGIBLE_FUNCTIONS.has(DATA_FUNCTION_MIN)).toBe(true)
    expect(NUMERIC_TREND_ELIGIBLE_FUNCTIONS.has(DATA_FUNCTION_MAX)).toBe(true)
    expect(NUMERIC_TREND_ELIGIBLE_FUNCTIONS.has(DATA_FUNCTION_COUNT)).toBe(false)
  })

  it('calculates numeric aggregates', () => {
    const values = [2, 4, 6]
    expect(aggregateSum(values)).toBe(12)
    expect(aggregateMean(values)).toBe(4)
    expect(aggregateMedian(values)).toBe(4)
    expect(aggregateMin(values)).toBe(2)
    expect(aggregateMax(values)).toBe(6)
    expect(aggregateRange(values)).toEqual([2, 6])
  })

  it('returns all tied mode values as strings', () => {
    expect(aggregateMode([1, 2, 2, 3, 3])).toEqual(['2', '3'])
  })

  it('filters non-finite values and returns null for empty numeric aggregates', () => {
    expect(aggregateSum([1, Number.NaN, Number.POSITIVE_INFINITY, 2])).toBe(3)
    expect(aggregateMean([Number.NaN, Number.POSITIVE_INFINITY])).toBeNull()
    expect(aggregateMedian([Number.NaN])).toBeNull()
    expect(aggregateMin([Number.NaN])).toBeNull()
    expect(aggregateMax([Number.NaN])).toBeNull()
    expect(aggregateRange([Number.NaN])).toBeNull()
    expect(aggregateMode([Number.NaN])).toBeNull()
  })

  it('dispatches by data function and returns null for unsupported functions', () => {
    const values = [5, 10, 15]
    expect(aggregateByDataFunction(values, DATA_FUNCTION_COUNT)).toBe(3)
    expect(aggregateByDataFunction(values, DATA_FUNCTION_SUM)).toBe(30)
    expect(aggregateByDataFunction(values, DATA_FUNCTION_MEAN)).toBe(10)
    expect(aggregateByDataFunction(values, DATA_FUNCTION_MEDIAN)).toBe(10)
    expect(aggregateByDataFunction(values, DATA_FUNCTION_MIN)).toBe(5)
    expect(aggregateByDataFunction(values, DATA_FUNCTION_MAX)).toBe(15)
    expect(aggregateByDataFunction(values, DATA_FUNCTION_MODE)).toEqual(['5', '10', '15'])
    expect(aggregateByDataFunction(values, DATA_FUNCTION_RANGE)).toEqual([5, 15])
    expect(aggregateByDataFunction(values, 'unknown')).toBeNull()
  })
})
