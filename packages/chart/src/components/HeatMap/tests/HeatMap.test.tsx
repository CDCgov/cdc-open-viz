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

import ConfigContext from '../../../ConfigContext'
import HeatMap from '../components/HeatMap'
import HeatMapGradientLegend from '../components/HeatMapGradientLegend'
import EditorPanel from '../../EditorPanel/EditorPanel'
import { createMockChartContext } from '../../LinearChart/tests/mockConfigContext'

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
      tickRotation: 0,
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
      tickRotation: 0,
      anchors: [],
      axisPadding: 0
    },
    heatmap: {
      cellPadding: 1,
      rowLabelGap: 32,
      columnLabelGap: 56,
      colorBucketCount: 9,
      xAxisPosition: 'top',
      showCellValues: false
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
      hideBorder: {
        side: false,
        topBottom: true
      }
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
      formatDate: (date: Date) => `Axis ${date.toISOString().slice(0, 10)}`,
      formatTooltipsDate: (date: Date) => `Tooltip ${date.toISOString().slice(0, 10)}`,
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
      tickRotation: 0,
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
      tickRotation: 0,
      anchors: [],
      axisPadding: 0
    },
    heatmap: {
      cellPadding: 1,
      rowLabelGap: 32,
      columnLabelGap: 56,
      colorBucketCount: 9,
      xAxisPosition: 'top',
      showCellValues: false
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
      hideBorder: {
        side: false,
        topBottom: true
      },
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

const buildCategoricalAverageAgeHeatMapContext = () => {
  const context = buildSeriesModeHeatMapContext()
  const averageAgeData = [
    { communityType: 'Urban Core', Atlanta: 34, Chicago: 36, Phoenix: 38, notes: 'Dense city center' },
    { communityType: 'Suburban', Atlanta: 41, Chicago: 39, Phoenix: 42, notes: 'Commuter belt' },
    { communityType: 'Rural', Atlanta: 46, Chicago: 44, Phoenix: 49, notes: 'Outer counties' }
  ]
  const averageAgeSeries = [
    { dataKey: 'Atlanta', name: 'Atlanta', type: 'HeatMap', axis: 'Left', tooltip: true },
    { dataKey: 'Chicago', name: 'Chicago', type: 'HeatMap', axis: 'Left', tooltip: true },
    { dataKey: 'Phoenix', name: 'Phoenix', type: 'HeatMap', axis: 'Left', tooltip: true }
  ]
  const config = context.config as any

  config.title = 'Average Age by City'
  config.data = averageAgeData
  config.filteredData = averageAgeData
  config.excludedData = averageAgeData
  config.xAxis = {
    ...config.xAxis,
    type: 'categorical',
    dataKey: 'communityType',
    label: 'Community Type'
  }
  config.yAxis = {
    ...config.yAxis,
    label: 'City'
  }
  config.columns = {
    communityType: {
      name: 'communityType',
      label: 'Community Type',
      dataTable: true
    },
    notes: {
      name: 'notes',
      label: 'Notes',
      tooltips: true,
      dataTable: true
    },
    Atlanta: {
      name: 'Atlanta',
      label: 'Atlanta',
      dataTable: true
    },
    Chicago: {
      name: 'Chicago',
      label: 'Chicago',
      dataTable: true
    },
    Phoenix: {
      name: 'Phoenix',
      label: 'Phoenix',
      dataTable: true
    }
  }
  config.legend = {
    ...config.legend,
    label: 'Average age'
  }
  config.series = averageAgeSeries
  config.runtime = {
    ...config.runtime,
    uniqueId: 'heatmap-average-age-test',
    xAxis: {
      type: 'categorical',
      dataKey: 'communityType',
      label: 'Community Type'
    },
    yAxis: { type: 'categorical', label: 'City' },
    originalXAxis: { dataKey: 'communityType' },
    seriesKeys: ['Atlanta', 'Chicago', 'Phoenix'],
    seriesLabels: { Atlanta: 'Atlanta', Chicago: 'Chicago', Phoenix: 'Phoenix' },
    seriesLabelsAll: ['Atlanta', 'Chicago', 'Phoenix']
  }
  config.tooltips = {
    opacity: 90,
    singleSeries: false
  }

  context.filteredData = averageAgeData
  context.excludedData = averageAgeData
  context.rawData = averageAgeData
  context.tableData = averageAgeData
  context.transformedData = averageAgeData

  return context
}

const getTranslateY = (element: Element | null) => {
  const transform = element?.getAttribute('transform') || ''
  const match = transform.match(/translate\([^,]+,\s*([^)]+)\)/)
  return match ? Number(match[1]) : 0
}

const getTranslateX = (element: Element | null) => {
  const transform = element?.getAttribute('transform') || ''
  const match = transform.match(/translate\(([^,\s)]+)/)
  return match ? Number(match[1]) : 0
}

const getHeatMapPlotTop = (container: HTMLElement) => getTranslateY(container.querySelector('.cdc-heatmap__plot'))

describe('HeatMap', () => {
  it('renders cells with tooltip metadata from additional columns', () => {
    const context = buildHeatMapContext()
    const { container } = render(
      <ConfigContext.Provider value={context}>
        <HeatMap parentWidth={800} parentHeight={320} />
      </ConfigContext.Provider>
    )

    const cells = container.querySelectorAll('.visx-heatmap-rect')
    const tooltipHtml = cells[0]?.getAttribute('data-tooltip-html') || ''

    expect(cells.length).toBeGreaterThan(0)
    expect(tooltipHtml).toContain('tooltip-heading')
    expect(tooltipHtml).toContain('tooltip-body')
    expect(tooltipHtml).toContain('Month: Tooltip 2024-01-01')
    expect(tooltipHtml).toContain('Region:')
    expect(tooltipHtml).toContain('Value:')
    expect(tooltipHtml).toContain('Notes')
    expect(tooltipHtml).not.toContain('<br/>')
    expect(cells[0]?.getAttribute('tabindex')).toBe('0')
    expect(cells[0]?.getAttribute('aria-label')).toContain('Month: Tooltip 2024-01-01')
    expect(cells[0]?.getAttribute('aria-label')).toContain('Region:')
  })

  it('summarizes aggregated cell tooltip columns when duplicate cells have different source values', () => {
    const context = buildHeatMapContext()
    const duplicateRows = [
      { month: '2024-01-01', North: 2, South: 4, notes: 'Low' },
      { month: '2024-01-01', North: 3, South: 1, notes: 'Severe' }
    ]

    context.config.data = duplicateRows
    context.config.filteredData = duplicateRows
    context.config.excludedData = duplicateRows
    context.filteredData = duplicateRows
    context.excludedData = duplicateRows
    context.rawData = duplicateRows
    context.tableData = duplicateRows

    const { container } = render(
      <ConfigContext.Provider value={context}>
        <HeatMap parentWidth={800} parentHeight={320} />
      </ConfigContext.Provider>
    )

    const firstCellTooltipHtml = container.querySelector('.visx-heatmap-rect')?.getAttribute('data-tooltip-html') || ''

    expect(firstCellTooltipHtml).toContain('Value: 5')
    expect(firstCellTooltipHtml).toContain('Aggregated Rows: 2')
    expect(firstCellTooltipHtml).toContain('Notes: Multiple values')
  })

  it('uses HeatMap stylesheet classes for cell paint hooks', () => {
    const context = buildHeatMapContext()
    const sparseRows = [{ month: '2024-01-01', North: 2, notes: 'Low' }]

    context.config.data = sparseRows
    context.config.filteredData = sparseRows
    context.config.excludedData = sparseRows
    context.filteredData = sparseRows
    context.excludedData = sparseRows
    context.rawData = sparseRows
    context.tableData = sparseRows

    const { container } = render(
      <ConfigContext.Provider value={context}>
        <HeatMap parentWidth={800} parentHeight={320} />
      </ConfigContext.Provider>
    )

    const cells = Array.from(container.querySelectorAll('.visx-heatmap-rect'))
    const emptyCell = cells.find(cell => cell.getAttribute('aria-label')?.includes('South'))

    expect(cells[0]).toHaveClass('cdc-heatmap__cell')
    expect(emptyCell).toHaveClass('cdc-heatmap__cell--empty')
    expect(emptyCell?.getAttribute('fill')).toBeNull()
  })

  it('keeps cell dimensions non-negative while the responsive layout is measuring', () => {
    const context = buildHeatMapContext()
    const { container } = render(
      <ConfigContext.Provider value={context}>
        <HeatMap parentWidth={0} parentHeight={0} />
      </ConfigContext.Provider>
    )

    const cells = Array.from(container.querySelectorAll('.visx-heatmap-rect'))

    expect(cells.length).toBeGreaterThan(0)
    cells.forEach(cell => {
      expect(Number(cell.getAttribute('width'))).toBeGreaterThanOrEqual(0)
      expect(Number(cell.getAttribute('height'))).toBeGreaterThanOrEqual(0)
    })
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

  it('renders HeatMap gradient legends as linear blocks', () => {
    const context = buildHeatMapContext()

    const { container } = render(
      <ConfigContext.Provider value={context}>
        <HeatMapGradientLegend />
      </ConfigContext.Provider>
    )

    expect(container.querySelector('linearGradient')).toBeNull()
    expect(container.querySelectorAll('.cdc-heatmap__legend-svg rect').length).toBeGreaterThan(2)
  })

  it('renders non-gradient HeatMap legends with range items', () => {
    const context = buildHeatMapContext()
    ;(context.config as any).legend.style = 'boxes'

    const { container } = render(
      <ConfigContext.Provider value={context}>
        <HeatMapGradientLegend />
      </ConfigContext.Provider>
    )

    expect(container.querySelector('.legend-container.cdc-heatmap__legend')).toBeTruthy()
    expect(container.querySelectorAll('.legend-item.not-clickable').length).toBeGreaterThan(0)
    expect(container.querySelector('.cdc-heatmap__legend-svg')).toBeNull()
  })

  it('uses the configured HeatMap color bucket count for cells and legend ranges', () => {
    const context = buildHeatMapContext()
    ;(context.config as any).heatmap.colorBucketCount = 5
    ;(context.config as any).legend.style = 'boxes'

    const { container } = render(
      <ConfigContext.Provider value={context}>
        <>
          <HeatMap parentWidth={800} parentHeight={320} />
          <HeatMapGradientLegend />
        </>
      </ConfigContext.Provider>
    )

    const cellFills = Array.from(container.querySelectorAll('.visx-heatmap-rect'))
      .map(cell => cell.getAttribute('fill'))
      .filter(Boolean)
    const legendFills = Array.from(
      container.querySelectorAll<HTMLElement>('.cdc-heatmap__legend .legend-item.not-clickable > .legend-item')
    )
      .map(shape => shape.style.backgroundColor)
      .filter(Boolean)

    expect(new Set(cellFills).size).toBeLessThanOrEqual(5)
    expect(new Set(legendFills).size).toBe(5)
    expect(container.querySelectorAll('.legend-item.not-clickable')).toHaveLength(5)
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

  it('renders non-calendar categories for an average age by city heatmap', () => {
    const context = buildCategoricalAverageAgeHeatMapContext()
    const { container } = render(
      <ConfigContext.Provider value={context}>
        <HeatMap parentWidth={800} parentHeight={320} />
      </ConfigContext.Provider>
    )

    const cells = container.querySelectorAll('.visx-heatmap-rect')
    const firstCellTooltipHtml = cells[0]?.getAttribute('data-tooltip-html') || ''
    const firstCellAriaLabel = cells[0]?.getAttribute('aria-label') || ''
    const firstCellX = Number(cells[0]?.getAttribute('x'))
    const xAxisTitle = Array.from(container.querySelectorAll('text')).find(
      text => text.textContent === 'Community Type'
    )
    const xAxisTitleX = Number(xAxisTitle?.getAttribute('x'))

    expect(cells).toHaveLength(9)
    expect(firstCellX).toBeGreaterThan(20)
    expect(firstCellX).toBeLessThan(90)
    expect(xAxisTitleX).toBeGreaterThan(firstCellX)
    expect(xAxisTitleX).toBeLessThan(180)
    expect(firstCellTooltipHtml).toContain('Community Type: Urban Core')
    expect(firstCellTooltipHtml).toContain('City: Atlanta')
    expect(firstCellTooltipHtml).toContain('Average age: 34')
    expect(firstCellTooltipHtml).toContain('Notes: Dense city center')
    expect(firstCellTooltipHtml).not.toContain('Tooltip')
    expect(firstCellAriaLabel).toContain('Community Type: Urban Core')
    expect(firstCellAriaLabel).toContain('City: Atlanta')
  })

  it('uses customized series column labels and formatting in heatmap cells and tooltips', () => {
    const context = buildCategoricalAverageAgeHeatMapContext()
    ;(context.config as any).columns.Atlanta.label = 'ATL'
    ;(context.config as any).columns.Atlanta.prefix = '$'
    ;(context.config as any).columns.Atlanta.suffix = ' yrs'
    ;(context.config as any).heatmap.showCellValues = true

    const { container } = render(
      <ConfigContext.Provider value={context}>
        <HeatMap parentWidth={800} parentHeight={320} />
      </ConfigContext.Provider>
    )

    const firstCell = container.querySelector('.visx-heatmap-rect')
    const firstCellTooltipHtml = firstCell?.getAttribute('data-tooltip-html') || ''
    const firstCellAriaLabel = firstCell?.getAttribute('aria-label') || ''

    expect(firstCellTooltipHtml).toContain('City: ATL')
    expect(firstCellTooltipHtml).toContain('Average age: $34 yrs')
    expect(firstCellAriaLabel).toContain('City: ATL')
    expect(firstCellAriaLabel).toContain('Average age: $34 yrs')
    expect(screen.getByText('$34 yrs')).toBeTruthy()
  })

  it('honors heatmap series tooltip visibility', () => {
    const context = buildCategoricalAverageAgeHeatMapContext()
    ;(context.config as any).series[0].tooltip = false

    const { container } = render(
      <ConfigContext.Provider value={context}>
        <HeatMap parentWidth={800} parentHeight={320} />
      </ConfigContext.Provider>
    )

    const cells = container.querySelectorAll('.visx-heatmap-rect')
    const hiddenSeriesTooltipHtml = cells[0]?.getAttribute('data-tooltip-html') || ''
    const visibleSeriesTooltipHtml = cells[1]?.getAttribute('data-tooltip-html') || ''

    expect(hiddenSeriesTooltipHtml).toContain('Community Type: Urban Core')
    expect(hiddenSeriesTooltipHtml).not.toContain('City: Atlanta')
    expect(hiddenSeriesTooltipHtml).not.toContain('Average age: 34')
    expect(visibleSeriesTooltipHtml).toContain('City: Chicago')
    expect(visibleSeriesTooltipHtml).toContain('Average age: 36')
  })

  it('applies y-axis tick rotation to row labels when configured', () => {
    const context = buildCategoricalAverageAgeHeatMapContext()
    ;(context.config as any).yAxis.tickRotation = 30

    const { container } = render(
      <ConfigContext.Provider value={context}>
        <HeatMap parentWidth={800} parentHeight={320} />
      </ConfigContext.Provider>
    )

    const rowLabel = Array.from(container.querySelectorAll('text')).find(text => text.textContent === 'Atlanta')

    expect(rowLabel?.getAttribute('transform')).toContain('rotate(-30')
  })

  it('renders top y-axis titles above the heatmap and reserves layout space', () => {
    const sideContext = buildCategoricalAverageAgeHeatMapContext()
    const topContext = buildCategoricalAverageAgeHeatMapContext()
    ;(topContext.config as any).yAxis.titlePlacement = 'top'

    const { container: sideContainer } = render(
      <ConfigContext.Provider value={sideContext}>
        <HeatMap parentWidth={800} parentHeight={320} />
      </ConfigContext.Provider>
    )

    const { container } = render(
      <ConfigContext.Provider value={topContext}>
        <HeatMap parentWidth={800} parentHeight={320} />
      </ConfigContext.Provider>
    )

    const yAxisTitle = Array.from(container.querySelectorAll('.cdc-heatmap__axis-title')).find(
      text => text.textContent === 'City'
    )
    const rotatedYAxisTitles = Array.from(container.querySelectorAll('.cdc-heatmap__axis-title')).filter(
      text => text.textContent === 'City' && text.getAttribute('transform')?.includes('rotate(-90)')
    )

    expect(yAxisTitle?.getAttribute('transform')).toBeNull()
    expect(yAxisTitle?.getAttribute('text-anchor')).toBe('start')
    expect(getHeatMapPlotTop(container) - getHeatMapPlotTop(sideContainer)).toBeCloseTo(28, 1)
    expect(rotatedYAxisTitles).toHaveLength(0)
  })

  it('anchors top y-axis titles to the left axis margin instead of the centered plot', () => {
    const context = buildCategoricalAverageAgeHeatMapContext()
    ;(context.config as any).yAxis.titlePlacement = 'top'

    const { container } = render(
      <ConfigContext.Provider value={context}>
        <HeatMap parentWidth={800} parentHeight={320} />
      </ConfigContext.Provider>
    )

    const plot = container.querySelector('.cdc-heatmap__plot')
    const yAxisTitle = Array.from(container.querySelectorAll('.cdc-heatmap__axis-title')).find(
      text => text.textContent === 'City'
    )
    const titleX = Number(yAxisTitle?.getAttribute('x'))

    expect(titleX).toBeLessThanOrEqual(0)
    expect(getTranslateX(plot) + titleX).toBeLessThan(getTranslateX(plot))
  })

  it('applies x-axis tick rotation to column labels when configured', () => {
    const context = buildCategoricalAverageAgeHeatMapContext()
    ;(context.config as any).xAxis.tickRotation = 30

    const { container } = render(
      <ConfigContext.Provider value={context}>
        <HeatMap parentWidth={800} parentHeight={320} />
      </ConfigContext.Provider>
    )

    const columnLabel = Array.from(container.querySelectorAll('text')).find(text => text.textContent === 'Urban Core')

    expect(columnLabel?.getAttribute('transform')).toContain('rotate(-30')
    expect(columnLabel?.getAttribute('text-anchor')).toBe('start')
  })

  it('places the x-axis below the heatmap when configured', () => {
    const context = buildCategoricalAverageAgeHeatMapContext()
    ;(context.config as any).heatmap.xAxisPosition = 'bottom'
    ;(context.config as any).heatmap.columnLabelGap = 44
    ;(context.config as any).xAxis.tickRotation = 135

    const { container } = render(
      <ConfigContext.Provider value={context}>
        <HeatMap parentWidth={800} parentHeight={320} />
      </ConfigContext.Provider>
    )

    const columnLabel = Array.from(container.querySelectorAll('text')).find(text => text.textContent === 'Urban Core')
    const xAxisTitle = Array.from(container.querySelectorAll('.cdc-heatmap__axis-title')).find(
      text => text.textContent === 'Community Type'
    )
    const axisBottomTop = getTranslateY(container.querySelector('.visx-axis-bottom'))
    const columnLabelAbsoluteY = axisBottomTop + Number(columnLabel?.getAttribute('y'))
    const xAxisTitleY = Number(xAxisTitle?.getAttribute('y'))

    expect(container.querySelector('.visx-axis-bottom')).toBeTruthy()
    expect(axisBottomTop).toBeGreaterThan(0)
    expect(Number(columnLabel?.getAttribute('y'))).toBe(44)
    expect(columnLabel?.getAttribute('text-anchor')).toBe('end')
    expect(xAxisTitleY - columnLabelAbsoluteY).toBeGreaterThan(50)
  })

  it('centers 90-degree x-axis labels on their tick markers', () => {
    const context = buildCategoricalAverageAgeHeatMapContext()
    ;(context.config as any).heatmap.xAxisPosition = 'bottom'
    ;(context.config as any).xAxis.tickRotation = 90

    const { container } = render(
      <ConfigContext.Provider value={context}>
        <HeatMap parentWidth={800} parentHeight={320} />
      </ConfigContext.Provider>
    )

    const columnLabel = Array.from(container.querySelectorAll('text')).find(text => text.textContent === 'Urban Core')

    expect(columnLabel?.getAttribute('transform')).toContain('rotate(-90')
    expect(columnLabel?.parentElement?.getAttribute('x')).toBe('0')
    expect(columnLabel?.querySelector('tspan')?.getAttribute('dy')).toBe('0.355em')
  })

  it('renders readable cell values when HeatMap cell labels are enabled', () => {
    const context = buildCategoricalAverageAgeHeatMapContext()
    ;(context.config as any).heatmap.showCellValues = true

    const { container } = render(
      <ConfigContext.Provider value={context}>
        <HeatMap parentWidth={800} parentHeight={320} />
      </ConfigContext.Provider>
    )

    const cellValues = Array.from(container.querySelectorAll('.cdc-heatmap__cell-value'))

    expect(cellValues.some(label => label.textContent === '34')).toBe(true)
    expect(cellValues.every(label => ['#1c1d1f', '#fff'].includes(label.getAttribute('fill') || ''))).toBe(true)
  })

  it('uses the HeatMap row label gap setting to tune spacing between row labels and cells', () => {
    const context = buildCategoricalAverageAgeHeatMapContext()
    ;(context.config as any).heatmap.rowLabelGap = 18

    const { container } = render(
      <ConfigContext.Provider value={context}>
        <HeatMap parentWidth={800} parentHeight={320} />
      </ConfigContext.Provider>
    )

    const firstCell = container.querySelector('.visx-heatmap-rect')

    expect(Number(firstCell?.getAttribute('x'))).toBeCloseTo(18, 1)
  })

  it('uses the HeatMap column label gap setting to tune spacing above the first row', () => {
    const context = buildCategoricalAverageAgeHeatMapContext()
    ;(context.config as any).heatmap.columnLabelGap = 44

    const { container } = render(
      <ConfigContext.Provider value={context}>
        <HeatMap parentWidth={800} parentHeight={320} />
      </ConfigContext.Provider>
    )

    const columnLabel = Array.from(container.querySelectorAll('text')).find(text => text.textContent === 'Urban Core')

    expect(columnLabel?.getAttribute('y')).toBe('-44')
  })

  it('shows HeatMap editor controls in their owning accordion sections', () => {
    const context = buildHeatMapContext()

    render(
      <ConfigContext.Provider value={context}>
        <EditorPanel />
      </ConfigContext.Provider>
    )

    const yAxisHeading = screen.getByText('Left Value Axis')
    const dateCategoryHeading = screen.getByText('Date/Category Axis')
    const settingsHeading = screen.getByText('HeatMap Settings')
    expect(yAxisHeading).toBeTruthy()
    expect(settingsHeading).toBeTruthy()
    expect(
      Boolean(dateCategoryHeading.compareDocumentPosition(settingsHeading) & Node.DOCUMENT_POSITION_FOLLOWING)
    ).toBe(true)
    const dataSeriesHeading = screen.getByText('Data Series')
    expect(dataSeriesHeading).toBeTruthy()

    fireEvent.click(yAxisHeading)
    fireEvent.click(dateCategoryHeading)
    fireEvent.click(settingsHeading)
    fireEvent.click(dataSeriesHeading)

    const xAxisPositionLabel = screen.getByText('X-Axis Position')

    expect(screen.queryByText('Value Column')).toBeNull()
    expect(screen.getAllByText('Hide Axis')).toHaveLength(1)
    expect(screen.getAllByText('Hide Ticks')).toHaveLength(1)
    expect(screen.getAllByText('Tick rotation (Degrees)').length).toBeGreaterThan(0)
    expect(screen.getByText('Add Data Series')).toBeTruthy()
    expect(
      Boolean(dateCategoryHeading.compareDocumentPosition(xAxisPositionLabel) & Node.DOCUMENT_POSITION_FOLLOWING)
    ).toBe(true)
    expect(
      Boolean(xAxisPositionLabel.compareDocumentPosition(settingsHeading) & Node.DOCUMENT_POSITION_FOLLOWING)
    ).toBe(true)
    expect(screen.getByText('Show Cell Values')).toBeTruthy()
    expect(screen.getByText('Cell Padding')).toBeTruthy()
    expect(screen.getByText('Row Label Gap')).toBeTruthy()
    expect(screen.getByText('Column Label Gap')).toBeTruthy()
    expect(screen.getByLabelText(/Data Grouping/i)).toBeTruthy()
    expect(screen.getByText('Displaying Rows')).toBeTruthy()
  })
})
