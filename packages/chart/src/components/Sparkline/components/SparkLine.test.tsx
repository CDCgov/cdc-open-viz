import React from 'react'
import { render } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import ConfigContext from '../../../ConfigContext'
import { createMockChartContext, createMockConfig } from '../../LinearChart/tests/mockConfigContext'
import SparkLine from './SparkLine'

describe('SparkLine', () => {
  afterEach(() => vi.restoreAllMocks())

  it('keys every top-level mapped series without logging a React key warning', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})
    const baseConfig = createMockConfig()
    const series = [
      { dataKey: 'Cases', type: 'Spark Line', axis: 'Left', tooltip: true },
      { dataKey: 'Deaths', type: 'Spark Line', axis: 'Left', tooltip: true }
    ]
    const data = [
      { Period: 'A', Cases: 10, Deaths: 2 },
      { Period: 'B', Cases: 15, Deaths: 4 }
    ]
    const config = createMockConfig({
      visualizationType: 'Spark Line',
      labels: false,
      xAxis: { ...baseConfig.xAxis, dataKey: 'Period', type: 'categorical' },
      series: series as any,
      runtime: {
        ...baseConfig.runtime,
        xAxis: { ...baseConfig.runtime.xAxis, dataKey: 'Period', type: 'categorical' },
        yAxis: { ...baseConfig.runtime.yAxis },
        originalXAxis: { dataKey: 'Period' },
        series,
        seriesKeys: ['Cases', 'Deaths'],
        lineSeriesKeys: [],
        seriesLabels: { Cases: 'Cases', Deaths: 'Deaths' },
        seriesLabelsAll: ['Cases', 'Deaths']
      } as any
    })
    const context = createMockChartContext(config, {
      transformedData: data,
      colorScale: () => '#005ea8',
      formatNumber: value => String(value)
    })

    const { container } = render(
      <ConfigContext.Provider value={context}>
        <SparkLine width={400} height={100} />
      </ConfigContext.Provider>
    )

    expect(container.querySelectorAll('.sparkline-group')).toHaveLength(2)
    expect(consoleError.mock.calls.flat().join(' ')).not.toContain('Each child in a list should have a unique "key"')
  })
})
