import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import useRightAxis from '../useRightAxis'
import { createMockConfig } from '../../components/LinearChart/tests/mockConfigContext'

const leftSeries = { dataKey: 'Cases', type: 'Bar', axis: 'Left', tooltip: true }
const rightSeries = { dataKey: 'Rate', type: 'Line', axis: 'Right', tooltip: true }

const createComboConfig = () =>
  createMockConfig({
    visualizationType: 'Combo',
    orientation: 'vertical',
    series: [leftSeries, rightSeries],
    yAxis: {
      ...createMockConfig().yAxis,
      rightMax: undefined,
      rightMin: undefined,
      smallestRightAxisMax: undefined
    },
    runtime: {
      ...createMockConfig().runtime,
      series: [leftSeries, rightSeries],
      seriesKeys: ['Cases', 'Rate'],
      barSeriesKeys: ['Cases'],
      lineSeriesKeys: ['Rate']
    } as any
  })

describe('useRightAxis', () => {
  it('does not render a right axis for vertical Combo charts with only left-axis series', () => {
    const config = createMockConfig({
      visualizationType: 'Combo',
      orientation: 'vertical',
      series: [leftSeries],
      yAxis: {
        ...createMockConfig().yAxis,
        rightHideAxis: true
      },
      runtime: {
        ...createMockConfig().runtime,
        series: [leftSeries],
        seriesKeys: ['Cases'],
        barSeriesKeys: ['Cases'],
        lineSeriesKeys: []
      } as any
    })

    const result = renderHook(() => useRightAxis({ config, yMax: 100, data: [{ Cases: 5 }] }))

    expect(result.result.current.hasRightAxis).toBe(false)
  })

  it('builds the right-axis scale from the supplied domain rows', () => {
    const config = createComboConfig()
    const renderedRows = [{ Cases: 5, Rate: 12 }]
    const stableDomainRows = [
      { Cases: 5, Rate: 12 },
      { Cases: 10, Rate: 90 }
    ]

    const renderedResult = renderHook(() => useRightAxis({ config, yMax: 100, data: renderedRows }))
    const stableResult = renderHook(() => useRightAxis({ config, yMax: 100, data: stableDomainRows }))

    expect(renderedResult.result.current.yScaleRight.domain()).toEqual([0, 12])
    expect(stableResult.result.current.yScaleRight.domain()).toEqual([0, 90])
  })

  it('uses clean-top-tick for the automatic right-axis max when shared auto max strategy is enabled', () => {
    const config = {
      ...createComboConfig(),
      yAxis: {
        ...createComboConfig().yAxis,
        autoMaxStrategy: 'clean-top-tick' as const
      }
    }

    const result = renderHook(() => useRightAxis({ config, yMax: 100, data: [{ Cases: 5, Rate: 101 }] }))

    expect(result.result.current.yScaleRight.domain()).toEqual([0, 120])
    expect(result.result.current.rightTickValues).toBeUndefined()
  })

  it('does not finalize right-axis ticks from the inherited mixed Combo min', () => {
    const config = {
      ...createComboConfig(),
      yAxis: {
        ...createComboConfig().yAxis,
        autoMaxStrategy: 'clean-top-tick' as const
      }
    }

    const result = renderHook(() => useRightAxis({ config, yMax: 100, data: [{ Cases: -100, Rate: 6 }] }))

    expect(result.result.current.yScaleRight.domain()).toEqual([0, 6])
    expect(result.result.current.rightTickValues).toBeUndefined()
  })

  it('honors a positive rightMin below the right-axis data minimum', () => {
    const config = {
      ...createComboConfig(),
      yAxis: {
        ...createComboConfig().yAxis,
        rightMin: '90',
        rightMax: '100'
      }
    }

    const result = renderHook(() => useRightAxis({ config, yMax: 100, data: [{ Cases: 5, Rate: 95 }] }))

    expect(result.result.current.yScaleRight.domain()).toEqual([90, 100])
  })

  it('uses formatted numeric strings when calculating the right-axis domain', () => {
    const config = createComboConfig()

    const result = renderHook(() =>
      useRightAxis({
        config,
        yMax: 100,
        data: [
          { Cases: 5, Rate: '$1,000' },
          { Cases: 6, Rate: '2,500' }
        ]
      })
    )

    expect(result.result.current.yScaleRight.domain()).toEqual([0, 2500])
  })

  it('ignores a rightMin above the right-axis data minimum and defaults positive domains to zero', () => {
    const config = {
      ...createComboConfig(),
      yAxis: {
        ...createComboConfig().yAxis,
        rightMin: '98'
      }
    }

    const result = renderHook(() => useRightAxis({ config, yMax: 100, data: [{ Cases: 5, Rate: 95 }] }))

    expect(result.result.current.yScaleRight.domain()).toEqual([0, 95])
  })

  it('uses a negative minimum when right-axis data is negative', () => {
    const config = createComboConfig()

    const result = renderHook(() =>
      useRightAxis({
        config,
        yMax: 100,
        data: [
          { Cases: 5, Rate: -12 },
          { Cases: 6, Rate: -3 }
        ]
      })
    )

    expect(result.result.current.yScaleRight.domain()).toEqual([-12, -3])
  })

  it('ignores values that are empty after right-axis numeric cleanup', () => {
    const config = createComboConfig()

    const result = renderHook(() =>
      useRightAxis({
        config,
        yMax: 100,
        data: [
          { Cases: 5, Rate: '$' },
          { Cases: 6, Rate: '-12' }
        ]
      })
    )

    expect(result.result.current.yScaleRight.domain()).toEqual([-12, -12])
  })

  it('honors a negative rightMin below the right-axis data minimum', () => {
    const config = {
      ...createComboConfig(),
      yAxis: {
        ...createComboConfig().yAxis,
        rightMin: '-20'
      }
    }

    const result = renderHook(() =>
      useRightAxis({
        config,
        yMax: 100,
        data: [
          { Cases: 5, Rate: -12 },
          { Cases: 6, Rate: -3 }
        ]
      })
    )

    expect(result.result.current.yScaleRight.domain()).toEqual([-20, -3])
  })

  it('does not round the right-axis max when rightMax is explicit', () => {
    const config = {
      ...createComboConfig(),
      yAxis: {
        ...createComboConfig().yAxis,
        autoMaxStrategy: 'clean-top-tick' as const,
        rightMax: '100'
      }
    }

    const result = renderHook(() => useRightAxis({ config, yMax: 100, data: [{ Cases: 5, Rate: 25 }] }))

    expect(result.result.current.yScaleRight.domain()).toEqual([0, 100])
    expect(result.result.current.rightTickValues).toBeUndefined()
  })

  it('uses clean-top-tick when rightMax is invalid', () => {
    const createConfigWithRightMax = (rightMax: string) => ({
      ...createComboConfig(),
      yAxis: {
        ...createComboConfig().yAxis,
        autoMaxStrategy: 'clean-top-tick' as const,
        rightMax
      }
    })

    const lowerThanData = renderHook(() =>
      useRightAxis({ config: createConfigWithRightMax('50'), yMax: 100, data: [{ Cases: 5, Rate: 101 }] })
    )
    const nonNumeric = renderHook(() =>
      useRightAxis({ config: createConfigWithRightMax('not-a-number'), yMax: 100, data: [{ Cases: 5, Rate: 101 }] })
    )

    expect(lowerThanData.result.current.yScaleRight.domain()).toEqual([0, 120])
    expect(lowerThanData.result.current.rightTickValues).toBeUndefined()
    expect(nonNumeric.result.current.yScaleRight.domain()).toEqual([0, 120])
    expect(nonNumeric.result.current.rightTickValues).toBeUndefined()
  })

  it('ignores a non-numeric rightMin value', () => {
    const config = {
      ...createComboConfig(),
      yAxis: {
        ...createComboConfig().yAxis,
        rightMin: 'not-a-number'
      }
    }

    const result = renderHook(() => useRightAxis({ config, yMax: 100, data: [{ Cases: 5, Rate: 25 }] }))

    expect(result.result.current.yScaleRight.domain()).toEqual([0, 25])
  })
})
