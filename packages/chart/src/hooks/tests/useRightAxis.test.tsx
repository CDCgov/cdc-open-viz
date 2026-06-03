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

  it('rounds the automatic right-axis max when shared auto max rounding is enabled', () => {
    const config = {
      ...createComboConfig(),
      yAxis: {
        ...createComboConfig().yAxis,
        autoMaxRounding: 'nice-power-of-ten' as const
      }
    }

    const result = renderHook(() => useRightAxis({ config, yMax: 100, data: [{ Cases: 5, Rate: 25 }] }))

    expect(result.result.current.yScaleRight.domain()).toEqual([0, 30])
  })

  it('does not round the right-axis max when rightMax is explicit', () => {
    const config = {
      ...createComboConfig(),
      yAxis: {
        ...createComboConfig().yAxis,
        autoMaxRounding: 'nice-power-of-ten' as const,
        rightMax: '100'
      }
    }

    const result = renderHook(() => useRightAxis({ config, yMax: 100, data: [{ Cases: 5, Rate: 25 }] }))

    expect(result.result.current.yScaleRight.domain()).toEqual([0, 100])
  })
})
