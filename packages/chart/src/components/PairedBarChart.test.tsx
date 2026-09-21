import React from 'react'
import { render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import ConfigContext from '../ConfigContext'
import PairedBarChart from './PairedBarChart'
import { createMockChartContext, createMockConfig } from './LinearChart/tests/mockConfigContext'

vi.mock('@cdc/core/helpers/cove/accessibility', () => ({
  getContrastColor: () => '#000'
}))

vi.mock('@cdc/core/helpers/getTextWidth', () => ({
  getTextWidth: () => 10
}))

const renderPairedBar = (casesLabel: string) => {
  const baseConfig = createMockConfig()
  const data = [{ Year: '2024', Cases: 10, Deaths: 2 }]
  const config = createMockConfig({
    visualizationType: 'Paired Bar',
    orientation: 'horizontal',
    barHasBorder: 'false',
    barHeight: 25,
    barSpace: 15,
    xAxis: { ...baseConfig.xAxis, dataKey: 'Year', size: '50', type: 'categorical' },
    yAxis: { ...baseConfig.yAxis, displayNumbersOnBar: false },
    series: [
      { dataKey: 'Cases', name: 'Reported Cases', type: 'Paired Bar', axis: 'Left', tooltip: true },
      { dataKey: 'Deaths', name: 'Reported Deaths', type: 'Paired Bar', axis: 'Left', tooltip: true }
    ] as any,
    columns: {
      Cases: { name: 'Cases', label: casesLabel },
      Deaths: { name: 'Deaths', label: 'Death Rate' }
    } as any,
    runtime: {
      ...baseConfig.runtime,
      seriesLabels: { Cases: 'Reported Cases', Deaths: 'Reported Deaths' }
    } as any
  })
  const context = createMockChartContext(config, {
    transformedData: data,
    colorScale: () => '#005ea8',
    formatNumber: value => String(value)
  })

  return render(
    <ConfigContext.Provider value={context}>
      <PairedBarChart width={400} height={100} originalWidth={450} yAxisWidth={50} />
    </ConfigContext.Provider>
  )
}

describe('PairedBarChart tooltips', () => {
  it('uses the customized series column label without rendering an undefined heading', () => {
    const { container } = renderPairedBar('Case Rate')
    const tooltip = container.querySelector('.bar.group-1')?.getAttribute('data-tooltip-html') || ''

    expect(tooltip).toContain('Year: 2024')
    expect(tooltip).toContain('Case Rate: 10')
    expect(tooltip).not.toContain('Reported Cases')
    expect(tooltip).not.toContain('undefined:')
  })

  it('falls back to the Series Name when the Label matches the data key', () => {
    const { container } = renderPairedBar('Cases')
    const tooltip = container.querySelector('.bar.group-1')?.getAttribute('data-tooltip-html') || ''

    expect(tooltip).toContain('Reported Cases: 10')
    expect(tooltip).not.toContain('undefined:')
  })
})
