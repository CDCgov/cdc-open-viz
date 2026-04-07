import React from 'react'
import { beforeAll, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

vi.mock('@cdc/core/components/ui/Icon', () => ({
  default: () => <span data-testid='icon' />
}))

vi.mock('@cdc/core/components/ui/Tooltip', () => {
  const Tooltip = ({ children }) => <>{children}</>
  Tooltip.Target = ({ children }) => <>{children}</>
  Tooltip.Content = ({ children }) => <>{children}</>
  return { default: Tooltip }
})

vi.mock('@cdc/core/components/AdvancedEditor', () => ({
  default: () => <div>Advanced Editor</div>
}))

vi.mock('@cdc/core/components/EditorPanel/DataTableEditor', () => ({
  default: () => <div>Data Table Editor</div>
}))

vi.mock('@cdc/core/assets/icon-check.svg', () => ({
  default: () => <span data-testid='check-icon' />
}))

import ConfigContext from '../../ConfigContext'
import HeatMap from './HeatMap'
import HeatMapGradientLegend from './HeatMapGradientLegend'
import EditorPanel from '../EditorPanel/EditorPanel'
import { createMockChartContext } from '../LinearChart/tests/mockConfigContext'

beforeAll(() => {
  HTMLCanvasElement.prototype.getContext = vi.fn(() => ({
    measureText: vi.fn(() => ({ width: 50 })),
    fillText: vi.fn(),
    fillRect: vi.fn(),
    clearRect: vi.fn()
  })) as any

  // @ts-expect-error test shim
  SVGElement.prototype.getBBox = vi.fn(() => ({ x: 0, y: 0, width: 100, height: 50 }))
})

const buildHeatMapContext = () => {
  const config = {
    type: 'chart',
    visualizationType: 'HeatMap',
    visualizationSubType: 'regular',
    orientation: 'vertical',
    title: 'HeatMap Title',
    animate: false,
    data: [
      { month: '2024-02-01', North: 5, South: 7, notes: 'Severe' },
      { month: '2024-01-01', North: 2, South: 4, notes: 'Low' }
    ],
    filteredData: [
      { month: '2024-02-01', North: 5, South: 7, notes: 'Severe' },
      { month: '2024-01-01', North: 2, South: 4, notes: 'Low' }
    ],
    excludedData: [
      { month: '2024-02-01', North: 5, South: 7, notes: 'Severe' },
      { month: '2024-01-01', North: 2, South: 4, notes: 'Low' }
    ],
    xAxis: {
      type: 'date',
      dataKey: 'month',
      label: 'Month',
      maxTickRotation: 45,
      hideTicks: false,
      hideAxis: false,
      anchors: [],
      axisPadding: 0,
      labelOffset: 0
    },
    yAxis: {
      type: 'categorical',
      label: 'Region',
      hideTicks: false,
      hideAxis: false,
      gridLines: false,
      size: 50,
      anchors: [],
      axisPadding: 0
    },
    heatmap: {
      cellPadding: 2
    },
    columns: {
      notes: {
        name: 'notes',
        label: 'Notes',
        tooltips: true,
        dataTable: true
      },
      North: {
        name: 'North',
        label: 'North',
        dataTable: true
      },
      South: {
        name: 'South',
        label: 'South',
        dataTable: true
      }
    },
    legend: {
      hide: false,
      position: 'bottom',
      style: 'gradient',
      subStyle: 'smooth',
      hideBorder: false
    },
    series: [
      { dataKey: 'North', name: 'North', type: 'HeatMap', axis: 'Left', tooltip: true },
      { dataKey: 'South', name: 'South', type: 'HeatMap', axis: 'Left', tooltip: true }
    ],
    general: {
      palette: {
        name: 'sequential_blue',
        version: '2.0',
        isReversed: false
      }
    },
    confidenceKeys: {},
    exclusions: { active: false, keys: [] },
    annotations: [],
    preliminaryData: [],
    runtime: {
      uniqueId: 'heatmap-test',
      xAxis: {
        type: 'date',
        dataKey: 'month',
        label: 'Month',
        dateParseFormat: '%Y-%m-%d',
        dateDisplayFormat: '%Y-%m-%d'
      },
      yAxis: { type: 'categorical', label: 'Region' },
      originalXAxis: { dataKey: 'month' },
      series: [],
      seriesKeys: ['North', 'South'],
      seriesLabels: { North: 'North', South: 'South' },
      seriesLabelsAll: ['North', 'South'],
      editorErrorMessage: '',
      horizontal: false
    },
    tooltips: {
      opacity: 90,
      singleSeries: false,
      dateDisplayFormat: '%Y-%m-%d'
    },
    forestPlot: {
      type: ''
    },
    heights: {
      vertical: 300,
      horizontal: 300,
      mobileVertical: 200
    },
    chartMessage: { noData: 'No Data Available' },
    dataFormat: { abbreviated: false, roundTo: 0, commas: true },
    table: { showVertical: true, show: true },
    filters: [],
    visual: {}
  }

  return createMockChartContext(
    config as any,
    {
      config: config as any,
      filteredData: config.filteredData,
      excludedData: config.excludedData,
      transformedData: config.filteredData,
      tableData: config.filteredData,
      rawData: config.data,
      unfilteredData: config.data,
      updateConfig: vi.fn(),
      missingRequiredSections: vi.fn(() => false),
      setFilteredData: vi.fn(),
      lineOptions: [],
      highlight: vi.fn(),
      handleShowAll: vi.fn(),
      isLoading: false,
      dimensions: [800, 400],
      handleChartAriaLabels: () => 'HeatMap chart'
    } as any
  )
}

const buildSeriesModeHeatMapContext = () => {
  const config = {
    type: 'chart',
    visualizationType: 'HeatMap',
    visualizationSubType: 'regular',
    orientation: 'vertical',
    title: 'HeatMap Title',
    animate: false,
    data: [
      { month: '2024-01-01', Austin: 12, Boston: 30, notes: 'Cold' },
      { month: '2024-02-01', Austin: 18, Boston: 40, notes: 'Warmer' }
    ],
    filteredData: [
      { month: '2024-01-01', Austin: 12, Boston: 30, notes: 'Cold' },
      { month: '2024-02-01', Austin: 18, Boston: 40, notes: 'Warmer' }
    ],
    excludedData: [
      { month: '2024-01-01', Austin: 12, Boston: 30, notes: 'Cold' },
      { month: '2024-02-01', Austin: 18, Boston: 40, notes: 'Warmer' }
    ],
    xAxis: {
      type: 'date',
      dataKey: 'month',
      label: 'Month',
      maxTickRotation: 45,
      hideTicks: false,
      hideAxis: false,
      anchors: [],
      axisPadding: 0,
      labelOffset: 0,
      size: 75
    },
    yAxis: {
      type: 'categorical',
      label: 'Location',
      hideTicks: false,
      hideAxis: false,
      gridLines: false,
      size: 80,
      anchors: [],
      axisPadding: 0
    },
    heatmap: {
      cellPadding: 2
    },
    columns: {
      notes: {
        name: 'notes',
        label: 'Notes',
        tooltips: true,
        dataTable: true
      }
    },
    legend: {
      hide: false,
      position: 'top',
      style: 'gradient',
      subStyle: 'smooth',
      hideBorder: false,
      label: 'Average value'
    },
    series: [
      { dataKey: 'Austin', name: 'Austin', type: 'HeatMap', axis: 'Left', tooltip: true },
      { dataKey: 'Boston', name: 'Boston', type: 'HeatMap', axis: 'Left', tooltip: true }
    ],
    general: {
      palette: {
        name: 'sequential_blue',
        version: '2.0',
        isReversed: false
      }
    },
    confidenceKeys: {},
    exclusions: { active: false, keys: [] },
    annotations: [],
    preliminaryData: [],
    runtime: {
      uniqueId: 'heatmap-series-test',
      xAxis: {
        type: 'date',
        dataKey: 'month',
        label: 'Month',
        dateParseFormat: '%Y-%m-%d',
        dateDisplayFormat: '%Y-%m-%d'
      },
      yAxis: { type: 'categorical', label: 'Location' },
      originalXAxis: { dataKey: 'month' },
      series: [],
      seriesKeys: ['Austin', 'Boston'],
      seriesLabels: { Austin: 'Austin', Boston: 'Boston' },
      seriesLabelsAll: ['Austin', 'Boston'],
      editorErrorMessage: '',
      horizontal: false
    },
    tooltips: {
      opacity: 90,
      singleSeries: false,
      dateDisplayFormat: '%Y-%m-%d'
    },
    forestPlot: {
      type: ''
    },
    heights: {
      vertical: 300,
      horizontal: 300,
      mobileVertical: 200
    },
    chartMessage: { noData: 'No Data Available' },
    dataFormat: { abbreviated: false, roundTo: 0, commas: true },
    table: { showVertical: true, show: true },
    filters: [],
    visual: {}
  }

  return createMockChartContext(
    config as any,
    {
      config: config as any,
      filteredData: config.filteredData,
      excludedData: config.excludedData,
      transformedData: config.filteredData,
      tableData: config.filteredData,
      rawData: config.data,
      unfilteredData: config.data,
      updateConfig: vi.fn(),
      missingRequiredSections: vi.fn(() => false),
      setFilteredData: vi.fn(),
      lineOptions: [],
      highlight: vi.fn(),
      handleShowAll: vi.fn(),
      isLoading: false,
      dimensions: [800, 400],
      handleChartAriaLabels: () => 'HeatMap chart'
    } as any
  )
}

describe('HeatMap', () => {
  it('renders cells with tooltip metadata from additional columns', () => {
    const context = buildHeatMapContext()
    const { container } = render(
      <ConfigContext.Provider value={context}>
        <HeatMap parentWidth={800} parentHeight={320} />
      </ConfigContext.Provider>
    )

    const cells = container.querySelectorAll('.visx-heatmap-rect')
    expect(cells.length).toBeGreaterThan(0)
    expect(cells[0]?.getAttribute('data-tooltip-html')).toContain('Notes')
  })

  it('renders a gradient legend for the mapped value column', () => {
    const context = buildHeatMapContext()

    render(
      <ConfigContext.Provider value={context}>
        <HeatMapGradientLegend />
      </ConfigContext.Provider>
    )

    expect(screen.getByText('Value')).toBeTruthy()
    expect(screen.getByText('2')).toBeTruthy()
    expect(screen.getByText('7')).toBeTruthy()
  })

  it('renders series-driven rows when heatmap data series are configured', () => {
    const context = buildSeriesModeHeatMapContext()
    const { container } = render(
      <ConfigContext.Provider value={context}>
        <HeatMap parentWidth={800} parentHeight={320} />
      </ConfigContext.Provider>
    )

    const cells = container.querySelectorAll('.visx-heatmap-rect')
    expect(cells.length).toBe(4)
    expect(cells[0]?.getAttribute('data-tooltip-html')).toContain('Austin')
    expect(cells[1]?.getAttribute('data-tooltip-html')).toContain('Boston')
  })

  it('shows the Data Series accordion for HeatMap and keeps heatmap settings available', () => {
    const context = buildHeatMapContext()

    render(
      <ConfigContext.Provider value={context}>
        <EditorPanel />
      </ConfigContext.Provider>
    )

    const yAxisHeading = screen.getByText('Left Value Axis')
    const settingsHeading = screen.getByText('HeatMap Settings')
    expect(yAxisHeading).toBeTruthy()
    expect(settingsHeading).toBeTruthy()
    const dataSeriesHeading = screen.getByText('Data Series')
    expect(dataSeriesHeading).toBeTruthy()

    fireEvent.click(yAxisHeading)
    fireEvent.click(settingsHeading)
    fireEvent.click(dataSeriesHeading)

    expect(screen.queryByText('Value Column')).toBeNull()
    expect(screen.getByText('Add Data Series')).toBeTruthy()
    expect(screen.getByText('Cell Padding')).toBeTruthy()
    expect(screen.getByText('Displaying Rows')).toBeTruthy()
  })
})
