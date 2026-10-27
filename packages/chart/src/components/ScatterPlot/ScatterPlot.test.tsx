import React from 'react'
import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ConfigContext from '../../ConfigContext'
import ScatterPlot from './ScatterPlot'
import { createMockChartContext, createMockConfig } from '../LinearChart/tests/mockConfigContext'

const renderScatterPlot = (casesLabel: string) => {
  const baseConfig = createMockConfig()
  const data = [{ Year: '2024', Cases: 10 }]
  const config = createMockConfig({
    visualizationType: 'Scatter Plot',
    xAxis: { ...baseConfig.xAxis, dataKey: 'Year', label: 'Year', type: 'categorical' },
    series: [{ dataKey: 'Cases', name: 'Reported Cases', type: 'Scatter Plot', axis: 'Left', tooltip: true }] as any,
    columns: {
      Cases: { name: 'Cases', label: casesLabel }
    } as any,
    general: { showMissingDataLabel: true, hideNullValue: true } as any,
    legend: { ...baseConfig.legend, behavior: 'highlight', hide: false },
    runtime: {
      ...baseConfig.runtime,
      xAxis: { ...baseConfig.runtime.xAxis, dataKey: 'Year', label: 'Year', type: 'categorical' },
      series: [{ dataKey: 'Cases', name: 'Reported Cases', type: 'Scatter Plot', axis: 'Left', tooltip: true }],
      seriesKeys: ['Cases'],
      seriesLabels: { Cases: 'Reported Cases' },
      seriesLabelsAll: ['Reported Cases']
    } as any
  })
  const context = createMockChartContext(config, {
    transformedData: data,
    tableData: data,
    colorScale: () => '#005ea8',
    formatNumber: value => String(value)
  })

  return render(
    <ConfigContext.Provider value={context}>
      <svg>
        <ScatterPlot xScale={() => 10} yScale={() => 10} yAxisWidth={0} getXAxisData={row => row.Year} />
      </svg>
    </ConfigContext.Provider>
  )
}

describe('ScatterPlot tooltips', () => {
  it('uses a customized Label instead of the Series Name', () => {
    const { container } = renderScatterPlot('Case Rate')
    const tooltip = container.querySelector('circle')?.getAttribute('data-tooltip-html') || ''

    expect(tooltip).toContain('Case Rate: 10')
    expect(tooltip).not.toContain('Reported Cases: 10')
  })

  it('falls back to the Series Name when the Label is cleared', () => {
    const { container } = renderScatterPlot('')
    const tooltip = container.querySelector('circle')?.getAttribute('data-tooltip-html') || ''

    expect(tooltip).toContain('Reported Cases: 10')
  })
})
