import { describe, it, expect } from 'vitest'
import { DATA_FUNCTION_MEAN, DATA_FUNCTION_MAX, DATA_FUNCTION_PASSTHROUGH } from '../constants'
import {
  resolveTrendIndicator,
  TREND_MODE_CATEGORICAL,
  TREND_MODE_NUMERIC,
  TREND_ARROW_UP,
  TREND_ARROW_DOWN,
  TREND_ARROW_NO_CHANGE
} from '../trendIndicator'

describe('resolveTrendIndicator', () => {
  it('returns disabled when mode is missing', () => {
    const result = resolveTrendIndicator({ data: [], trendIndicator: {} })
    expect(result.state).toBe('disabled')
  })

  it('categorical mode resolves a mapped single value', () => {
    const result = resolveTrendIndicator({
      data: [{ trend: 'increase' }],
      trendIndicator: {
        mode: TREND_MODE_CATEGORICAL,
        column: 'trend',
        mappings: [{ sourceValue: 'increase', arrowType: TREND_ARROW_UP }]
      }
    })

    expect(result).toEqual({ state: 'resolved', arrowType: TREND_ARROW_UP })
  })

  it('categorical mode returns ambiguous when more than one row resolves for non-passthrough functions', () => {
    const result = resolveTrendIndicator({
      data: [{ trend: 'increase' }, { trend: 'decrease' }],
      trendIndicator: {
        mode: TREND_MODE_CATEGORICAL,
        column: 'trend',
        mappings: [{ sourceValue: 'increase', arrowType: TREND_ARROW_UP }]
      }
    })

    expect(result.state).toBe('ambiguous')
  })

  it('categorical mode uses first row for passthrough when more than one row resolves', () => {
    const result = resolveTrendIndicator({
      data: [{ trend: 'increase' }, { trend: 'decrease' }],
      mainDataFunction: DATA_FUNCTION_PASSTHROUGH,
      trendIndicator: {
        mode: TREND_MODE_CATEGORICAL,
        column: 'trend',
        mappings: [
          { sourceValue: 'increase', arrowType: TREND_ARROW_UP },
          { sourceValue: 'decrease', arrowType: TREND_ARROW_DOWN }
        ]
      }
    })

    expect(result).toEqual({ state: 'resolved', arrowType: TREND_ARROW_UP })
  })

  it('categorical mode returns unmapped when value has no mapping', () => {
    const result = resolveTrendIndicator({
      data: [{ trend: 'flat' }],
      trendIndicator: {
        mode: TREND_MODE_CATEGORICAL,
        column: 'trend',
        mappings: [{ sourceValue: 'increase', arrowType: TREND_ARROW_UP }]
      }
    })

    expect(result.state).toBe('unmapped')
  })

  it('categorical mode resolves a mapped no-change value', () => {
    const result = resolveTrendIndicator({
      data: [{ trend: 'flat' }],
      trendIndicator: {
        mode: TREND_MODE_CATEGORICAL,
        column: 'trend',
        mappings: [{ sourceValue: 'flat', arrowType: TREND_ARROW_NO_CHANGE }]
      }
    })

    expect(result).toEqual({ state: 'resolved', arrowType: TREND_ARROW_NO_CHANGE })
  })

  it('numeric mode resolves up when current aggregate exceeds historical aggregate by threshold', () => {
    const result = resolveTrendIndicator({
      data: [
        { current: 12, previous: 9 },
        { current: 10, previous: 8 }
      ],
      mainDataFunction: DATA_FUNCTION_MEAN,
      mainDataColumn: 'current',
      allowNumericMode: true,
      trendIndicator: {
        mode: TREND_MODE_NUMERIC,
        column: 'previous',
        numericThreshold: 1
      }
    })

    expect(result).toEqual({ state: 'resolved', arrowType: TREND_ARROW_UP })
  })

  it('numeric mode resolves down when current aggregate trails historical aggregate by threshold', () => {
    const result = resolveTrendIndicator({
      data: [
        { current: 2, previous: 6 },
        { current: 4, previous: 8 }
      ],
      mainDataFunction: DATA_FUNCTION_MEAN,
      mainDataColumn: 'current',
      allowNumericMode: true,
      trendIndicator: {
        mode: TREND_MODE_NUMERIC,
        column: 'previous',
        numericThreshold: 1
      }
    })

    expect(result).toEqual({ state: 'resolved', arrowType: TREND_ARROW_DOWN })
  })

  it('numeric mode returns unmapped for deltas within threshold band', () => {
    const result = resolveTrendIndicator({
      data: [
        { current: 8, previous: 7.8 },
        { current: 8, previous: 8.2 }
      ],
      mainDataFunction: DATA_FUNCTION_MEAN,
      mainDataColumn: 'current',
      allowNumericMode: true,
      trendIndicator: {
        mode: TREND_MODE_NUMERIC,
        column: 'previous',
        numericThreshold: 0.5
      }
    })

    expect(result.state).toBe('unmapped')
  })

  it('numeric mode resolves no-change within threshold band when opt-in is enabled', () => {
    const result = resolveTrendIndicator({
      data: [
        { current: 8, previous: 7.8 },
        { current: 8, previous: 8.2 }
      ],
      mainDataFunction: DATA_FUNCTION_MEAN,
      mainDataColumn: 'current',
      allowNumericMode: true,
      trendIndicator: {
        mode: TREND_MODE_NUMERIC,
        column: 'previous',
        numericThreshold: 0.5,
        showNoChangeArrows: true
      }
    })

    expect(result).toEqual({ state: 'resolved', arrowType: TREND_ARROW_NO_CHANGE })
  })

  it('numeric mode with zero threshold resolves up/down from delta sign', () => {
    const up = resolveTrendIndicator({
      data: [{ current: 8, previous: 7 }],
      mainDataFunction: DATA_FUNCTION_MEAN,
      mainDataColumn: 'current',
      allowNumericMode: true,
      trendIndicator: {
        mode: TREND_MODE_NUMERIC,
        column: 'previous',
        numericThreshold: 0
      }
    })

    const down = resolveTrendIndicator({
      data: [{ current: 7, previous: 8 }],
      mainDataFunction: DATA_FUNCTION_MEAN,
      mainDataColumn: 'current',
      allowNumericMode: true,
      trendIndicator: {
        mode: TREND_MODE_NUMERIC,
        column: 'previous',
        numericThreshold: 0
      }
    })

    expect(up).toEqual({ state: 'resolved', arrowType: TREND_ARROW_UP })
    expect(down).toEqual({ state: 'resolved', arrowType: TREND_ARROW_DOWN })
  })

  it('numeric mode resolves no arrow when delta equals threshold boundary', () => {
    const result = resolveTrendIndicator({
      data: [{ current: 10, previous: 8 }],
      mainDataFunction: DATA_FUNCTION_MEAN,
      mainDataColumn: 'current',
      allowNumericMode: true,
      trendIndicator: {
        mode: TREND_MODE_NUMERIC,
        column: 'previous',
        numericThreshold: 2
      }
    })

    expect(result.state).toBe('unmapped')
  })

  it('numeric mode resolves no-change when delta equals threshold boundary and opt-in is enabled', () => {
    const result = resolveTrendIndicator({
      data: [{ current: 10, previous: 8 }],
      mainDataFunction: DATA_FUNCTION_MEAN,
      mainDataColumn: 'current',
      allowNumericMode: true,
      trendIndicator: {
        mode: TREND_MODE_NUMERIC,
        column: 'previous',
        numericThreshold: 2,
        showNoChangeArrows: true
      }
    })

    expect(result).toEqual({ state: 'resolved', arrowType: TREND_ARROW_NO_CHANGE })
  })

  it('numeric mode returns invalid when historical trend column is missing', () => {
    const result = resolveTrendIndicator({
      data: [{ current: 10, previous: 8 }],
      mainDataFunction: DATA_FUNCTION_MEAN,
      mainDataColumn: 'current',
      allowNumericMode: true,
      trendIndicator: {
        mode: TREND_MODE_NUMERIC,
        numericThreshold: 0
      }
    })

    expect(result.state).toBe('invalid')
  })

  it('numeric mode returns invalid when main data column is missing', () => {
    const result = resolveTrendIndicator({
      data: [{ current: 10, previous: 8 }],
      mainDataFunction: DATA_FUNCTION_MEAN,
      allowNumericMode: true,
      trendIndicator: {
        mode: TREND_MODE_NUMERIC,
        column: 'previous',
        numericThreshold: 0
      }
    })

    expect(result.state).toBe('invalid')
  })

  it('numeric mode returns invalid when threshold is non-numeric or negative', () => {
    const nonNumericThreshold = resolveTrendIndicator({
      data: [{ current: 10, previous: 8 }],
      mainDataFunction: DATA_FUNCTION_MEAN,
      mainDataColumn: 'current',
      allowNumericMode: true,
      trendIndicator: {
        mode: TREND_MODE_NUMERIC,
        column: 'previous',
        numericThreshold: Number('not-a-number')
      }
    })

    const negativeThreshold = resolveTrendIndicator({
      data: [{ current: 10, previous: 8 }],
      mainDataFunction: DATA_FUNCTION_MEAN,
      mainDataColumn: 'current',
      allowNumericMode: true,
      trendIndicator: {
        mode: TREND_MODE_NUMERIC,
        column: 'previous',
        numericThreshold: -1
      }
    })

    expect(nonNumericThreshold.state).toBe('invalid')
    expect(negativeThreshold.state).toBe('invalid')
  })

  it('numeric mode returns invalid when either series has no numeric values', () => {
    const noCurrentValues = resolveTrendIndicator({
      data: [{ current: 'N/A', previous: 7 }],
      mainDataFunction: DATA_FUNCTION_MAX,
      mainDataColumn: 'current',
      allowNumericMode: true,
      trendIndicator: {
        mode: TREND_MODE_NUMERIC,
        column: 'previous',
        numericThreshold: 0
      }
    })

    const noComparisonValues = resolveTrendIndicator({
      data: [{ current: 7, previous: 'N/A' }],
      mainDataFunction: DATA_FUNCTION_MAX,
      mainDataColumn: 'current',
      allowNumericMode: true,
      trendIndicator: {
        mode: TREND_MODE_NUMERIC,
        column: 'previous',
        numericThreshold: 0
      }
    })

    expect(noCurrentValues.state).toBe('invalid')
    expect(noComparisonValues.state).toBe('invalid')
  })

  it('numeric mode returns invalid for unsupported data functions', () => {
    const result = resolveTrendIndicator({
      data: [{ current: 7, previous: 6 }],
      mainDataFunction: DATA_FUNCTION_PASSTHROUGH,
      mainDataColumn: 'current',
      allowNumericMode: true,
      trendIndicator: {
        mode: TREND_MODE_NUMERIC,
        column: 'previous',
        numericThreshold: 0
      }
    })

    expect(result.state).toBe('invalid')
  })
})
