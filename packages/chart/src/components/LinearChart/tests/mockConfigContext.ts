import { ChartContext } from '../../../types/ChartContext'
import { ChartConfig } from '../../../types/ChartConfig'

// Minimal config for testing LinearChart
export const createMockConfig = (overrides: Partial<ChartConfig> = {}): ChartConfig =>
  ({
    type: 'chart',
    visualizationType: 'Line',
    visualizationSubType: 'regular',
    orientation: 'vertical',
    animate: false,
    heights: {
      vertical: 300,
      horizontal: 300,
      mobileVertical: 200
    },
    xAxis: {
      type: 'date',
      dataKey: 'Date',
      label: 'X-Axis',
      hideAxis: false,
      hideLabel: false,
      hideTicks: false,
      size: '50',
      tickRotation: 0,
      maxTickRotation: 90,
      anchors: [],
      axisPadding: 0
    },
    yAxis: {
      hideAxis: false,
      hideLabel: false,
      hideTicks: false,
      size: '50',
      gridLines: true,
      label: 'Y-Axis',
      titlePlacement: 'top',
      tickRotation: 0,
      anchors: [],
      axisPadding: 0,
      labelPlacement: 'On Date/Category Axis',
      rightAxisSize: 0
    },
    runtime: {
      xAxis: {
        type: 'date',
        dataKey: 'Date',
        label: 'X-Axis'
      },
      yAxis: {
        size: 50,
        label: 'Y-Axis',
        gridLines: true
      },
      originalXAxis: {
        dataKey: 'Date'
      },
      series: [],
      seriesKeys: [],
      seriesLabelsAll: [],
      uniqueId: 'test-chart'
    },
    series: [],
    data: [],
    dataFormat: {
      abbreviated: false,
      roundTo: 0
    },
    legend: {
      position: 'bottom'
    },
    tooltips: {
      opacity: 90,
      singleSeries: false
    },
    chartMessage: {
      noData: 'No data available'
    },
    barThickness: 0.8,
    barHeight: 25,
    barSpace: 15,
    isResponsiveTicks: true,
    debugSvg: false,
    filters: [],
    topAxis: {
      hasLine: false
    },
    hideXAxisLabel: false,
    hideYAxisLabel: false,
    ...overrides
  } as ChartConfig)

// Minimal chart context for testing
export const createMockChartContext = (
  configOverrides: Partial<ChartConfig> = {},
  contextOverrides: Partial<ChartContext> = {}
): ChartContext => {
  const config = createMockConfig(configOverrides)

  return {
    config,
    colorScale: undefined,
    convertLineToBarGraph: false,
    currentViewport: 'lg',
    vizViewport: 'lg',
    dimensions: [800, 400],
    formatDate: (date: any) => String(date),
    formatNumber: (num: any) => String(num),
    handleChartAriaLabels: () => 'Chart',
    handleLineType: () => '',
    handleDragStateChange: () => {},
    interactionLabel: '',
    isEditor: false,
    isDraggingAnnotation: false,
    legendRef: { current: null },
    parentRef: { current: null },
    parseDate: (date: any) => new Date(date),
    seriesHighlight: [],
    tableData: [],
    transformedData: [],
    annotations: [],
    colorPalettes: {},
    twoColorPalette: {},
    capitalize: (s: string) => s,
    clean: (s: any) => s,
    formatTooltipsDate: (date: any) => String(date),
    legendId: 'test-legend',
    rawData: config.data,
    updateConfig: () => {},
    ...contextOverrides
  } as ChartContext
}
