import { describe, it, expect } from 'vitest'
import { DATA_FUNCTION_PASSTHROUGH } from '../constants'
import {
  resolveTrendIndicator,
  TREND_MODE_CATEGORICAL,
  TREND_MODE_NUMERIC,
  TREND_ARROW_UP,
  TREND_ARROW_DOWN
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

  it('numeric mode resolves up when aggregate is above upThreshold', () => {
    const result = resolveTrendIndicator({
      data: [{ val: 12 }, { val: 9 }],
      mainDataFunction: 'Mean (Average)',
      allowNumericMode: true,
      trendIndicator: {
        mode: TREND_MODE_NUMERIC,
        column: 'val',
        numericRules: { upThreshold: 9, downThreshold: 4 }
      }
    })

    expect(result).toEqual({ state: 'resolved', arrowType: TREND_ARROW_UP })
  })

  it('numeric mode resolves down when aggregate is below downThreshold', () => {
    const result = resolveTrendIndicator({
      data: [{ val: 2 }, { val: 3 }],
      mainDataFunction: 'Mean (Average)',
      allowNumericMode: true,
      trendIndicator: {
        mode: TREND_MODE_NUMERIC,
        column: 'val',
        numericRules: { upThreshold: 10, downThreshold: 4 }
      }
    })

    expect(result).toEqual({ state: 'resolved', arrowType: TREND_ARROW_DOWN })
  })

  it('numeric mode returns unmapped for values between thresholds', () => {
    const result = resolveTrendIndicator({
      data: [{ val: 5 }, { val: 7 }],
      mainDataFunction: 'Mean (Average)',
      allowNumericMode: true,
      trendIndicator: {
        mode: TREND_MODE_NUMERIC,
        column: 'val',
        numericRules: { upThreshold: 8, downThreshold: 4 }
      }
    })

    expect(result.state).toBe('unmapped')
  })

  it('numeric mode uses strict comparisons and equality resolves to no arrow', () => {
    const equalToUp = resolveTrendIndicator({
      data: [{ val: 5 }, { val: 5 }],
      mainDataFunction: 'Mean (Average)',
      allowNumericMode: true,
      trendIndicator: {
        mode: TREND_MODE_NUMERIC,
        column: 'val',
        numericRules: { upThreshold: 5, downThreshold: 0 }
      }
    })

    const equalToDown = resolveTrendIndicator({
      data: [{ val: 0 }, { val: 0 }],
      mainDataFunction: 'Mean (Average)',
      allowNumericMode: true,
      trendIndicator: {
        mode: TREND_MODE_NUMERIC,
        column: 'val',
        numericRules: { upThreshold: 10, downThreshold: 0 }
      }
    })

    expect(equalToUp.state).toBe('unmapped')
    expect(equalToDown.state).toBe('unmapped')
  })

  it('numeric mode allows non-ordered thresholds and resolves deterministically', () => {
    const result = resolveTrendIndicator({
      data: [{ val: 8 }],
      mainDataFunction: 'Max',
      allowNumericMode: true,
      trendIndicator: {
        mode: TREND_MODE_NUMERIC,
        column: 'val',
        numericRules: { upThreshold: 7, downThreshold: 9 }
      }
    })

    expect(result).toEqual({ state: 'resolved', arrowType: TREND_ARROW_UP })
  })

  it('numeric mode returns invalid when column values are non-numeric', () => {
    const result = resolveTrendIndicator({
      data: [{ val: 'N/A' }],
      mainDataFunction: 'Max',
      allowNumericMode: true,
      trendIndicator: {
        mode: TREND_MODE_NUMERIC,
        column: 'val',
        numericRules: { upThreshold: 7, downThreshold: 3 }
      }
    })

    expect(result.state).toBe('invalid')
  })
})

