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

    expect(result.result.current.yScaleRight.domain()).toEqual([-100, 6])
    expect(result.result.current.rightTickValues).toBeUndefined()
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
