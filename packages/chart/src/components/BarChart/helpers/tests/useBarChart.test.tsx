import { renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { createMockChartContext, createMockConfig } from '../../../LinearChart/tests/mockConfigContext'
import { useBarChart } from '../useBarChart'

const baseConfig = createMockConfig()

const makeConfigContext = (countColumnOverrides: Record<string, unknown> = {}) => {
  const config = createMockConfig({
    visualizationType: 'Bar',
    orientation: 'horizontal',
    barHeight: 25,
    xAxis: {
      ...baseConfig.xAxis,
      type: 'categorical',
      dataKey: 'Cause of death'
    },
    yAxis: {
      ...baseConfig.yAxis,
      labelPlacement: 'Below Bar'
    },
    series: [{ dataKey: 'Percentage', type: 'Bar', axis: 'Left', tooltip: true }] as any,
    columns: {
      Count: {
        name: 'Count',
        label: 'Count',
        prefix: '',
        suffix: '',
        roundToPlace: 0,
        commas: true,
        dataTable: true,
        tooltips: true,
        ...countColumnOverrides
      }
    } as any,
    dataFormat: {
      abbreviated: false,
      bottomAbbreviated: false,
      bottomPrefix: '',
      bottomRoundTo: 0,
      bottomSuffix: '',
      bottomCommas: false,
      commas: false,
      prefix: '',
      preserveOriginalDecimals: false,
      rightPrefix: '',
      rightRoundTo: 0,
      rightSuffix: '',
      roundTo: 1,
      suffix: '%'
    } as any,
    runtime: {
      ...baseConfig.runtime,
      xAxis: {
        ...baseConfig.runtime.xAxis,
        type: 'categorical',
        dataKey: 'Cause of death'
      },
      yAxis: {
        ...baseConfig.runtime.yAxis,
        dataKey: 'Percentage'
      },
      series: [{ dataKey: 'Percentage', type: 'Bar', axis: 'Left', tooltip: true }],
      seriesKeys: ['Percentage'],
      seriesLabels: { Percentage: 'Percentage' },
      seriesLabelsAll: ['Percentage']
    } as any
  })

  return createMockChartContext(config, {
    tableData: [
      {
        'Cause of death': 'Cardiovascular conditions',
        Percentage: 22,
        Count: 146
      }
    ],
    updateConfig: vi.fn()
  })
}

describe('useBarChart', () => {
  it('does not apply the left-axis suffix to an additional single-series tooltip column', () => {
    const configContext = makeConfigContext()
    const { result } = renderHook(() => useBarChart(vi.fn(), vi.fn(), configContext))

    expect(result.current.getAdditionalColumn('Percentage', 'Cardiovascular conditions')).toBe('Count : 146 <br/>')
  })

  it('applies an additional column suffix when one is configured', () => {
    const configContext = makeConfigContext({ suffix: ' deaths' })
    const { result } = renderHook(() => useBarChart(vi.fn(), vi.fn(), configContext))

    expect(result.current.getAdditionalColumn('Percentage', 'Cardiovascular conditions')).toBe(
      'Count : 146 deaths <br/>'
    )
  })
})
