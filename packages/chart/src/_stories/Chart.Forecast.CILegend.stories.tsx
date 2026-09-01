import type { Meta, StoryObj } from '@storybook/react-vite'
import Chart from '../CdcChartComponent'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import { expect, waitFor } from 'storybook/test'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Forecast Chart/CI Legend',
  component: Chart
}

type Story = StoryObj<typeof Chart>

const forecastCiLegendConfig = {
  type: 'chart',
  version: '4.26.8',
  title: 'Forecast Chart With Multiple CI Series',
  showTitle: true,
  visualizationType: 'Forecasting',
  visualizationSubType: 'regular',
  orientation: 'vertical',
  general: {
    palette: {
      name: 'sequential_bluereverse',
      version: '2.0',
      isReversed: true
    }
  },
  legend: {
    hide: false,
    behavior: 'isolate',
    position: 'right',
    style: 'circles',
    singleRow: false,
    reverseLabelOrder: false,
    verticalSorted: false,
    dynamicLegend: false,
    colorCode: '',
    seriesHighlight: [],
    groupBy: '',
    orderedValues: [],
    patterns: {},
    hideSuppressionLink: false,
    hideBorder: {
      side: false,
      topBottom: false
    }
  },
  xAxis: {
    dataKey: 'date',
    type: 'date-time',
    dateParseFormat: '%Y-%m-%d',
    dateDisplayFormat: '%m/%d/%Y',
    sortDates: false,
    label: 'Date',
    hideAxis: false,
    hideLabel: false,
    hideTicks: false,
    numTicks: 4,
    tickRotation: 0
  },
  yAxis: {
    label: 'Count',
    min: '0',
    max: '',
    numTicks: 5,
    gridLines: true,
    hideAxis: false,
    hideLabel: false,
    hideTicks: false
  },
  visual: {
    border: true,
    accent: true,
    background: true,
    verticalHoverLine: false,
    horizontalHoverLine: false,
    lineDatapointSymbol: 'none',
    maximumShapeAmount: 7
  },
  table: {
    show: false,
    showDataTableLink: false
  },
  tooltips: {
    opacity: 90,
    singleSeries: false
  },
  dataDescription: {
    horizontal: false,
    series: false
  },
  filters: [],
  columns: {},
  confidenceKeys: {},
  series: [
    {
      dataKey: 'stage',
      type: 'Forecasting',
      axis: 'Left',
      tooltip: false,
      stageColumn: 'stage',
      stages: [
        { key: 'Estimate', color: 'sequential-blue' },
        { key: 'Estimate Based on Partial Data', color: 'sequential-green' },
        { key: 'Forecast', color: 'sequential-orange' }
      ],
      confidenceIntervals: [
        { high: 'Upper 50%', low: 'Lower 50%' },
        { high: 'Upper 90%', low: 'Lower 90%' }
      ]
    }
  ],
  data: [
    { date: '2026-01-01', stage: 'Estimate', 'Lower 50%': 84, 'Upper 50%': 128, 'Lower 90%': 58, 'Upper 90%': 160 },
    { date: '2026-01-08', stage: 'Estimate', 'Lower 50%': 98, 'Upper 50%': 154, 'Lower 90%': 72, 'Upper 90%': 190 },
    { date: '2026-01-15', stage: 'Estimate', 'Lower 50%': 116, 'Upper 50%': 183, 'Lower 90%': 86, 'Upper 90%': 226 },
    {
      date: '2026-01-22',
      stage: 'Estimate Based on Partial Data',
      'Lower 50%': 100,
      'Upper 50%': 174,
      'Lower 90%': 74,
      'Upper 90%': 214
    },
    {
      date: '2026-01-29',
      stage: 'Estimate Based on Partial Data',
      'Lower 50%': 88,
      'Upper 50%': 158,
      'Lower 90%': 64,
      'Upper 90%': 198
    },
    { date: '2026-02-05', stage: 'Forecast', 'Lower 50%': 72, 'Upper 50%': 144, 'Lower 90%': 46, 'Upper 90%': 184 },
    { date: '2026-02-12', stage: 'Forecast', 'Lower 50%': 60, 'Upper 50%': 126, 'Lower 90%': 34, 'Upper 90%': 166 }
  ]
}

const getLegendRows = (canvasElement: HTMLElement) =>
  Array.from(
    canvasElement.querySelectorAll<HTMLElement>('.legend-container__inner > .legend-item--interactive[role="button"]')
  ).map(item => {
    const marker = item.querySelector<HTMLElement>('span.legend-item')

    return {
      text: item.textContent?.trim(),
      markerColor: marker ? getComputedStyle(marker).backgroundColor : ''
    }
  })

const getAlpha = (rgbaColor: string) => {
  const match = rgbaColor.match(/^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+(?:\s*,\s*([\d.]+))?\s*\)$/)
  if (!match) return null

  return match[1] ? Number(match[1]) : 1
}

const getRenderedForecastAreas = (canvasElement: HTMLElement) =>
  Array.from(canvasElement.querySelectorAll<SVGPathElement>('.forecasting-items path')).filter(path => {
    const fill = path.getAttribute('fill')
    return fill && fill !== 'none' && fill !== 'transparent'
  })

const expectRenderableForecastAreas = (canvasElement: HTMLElement) => {
  const areas = getRenderedForecastAreas(canvasElement)

  expect(areas.length).toBeGreaterThanOrEqual(6)
  areas.forEach(area => {
    const pathData = area.getAttribute('d') || ''

    expect(pathData).not.toContain('NaN')
    expect(pathData).not.toContain('undefined')
    expect(area.getBBox().width).toBeGreaterThan(0)
    expect(area.getBBox().height).toBeGreaterThan(0)
  })
}

const expectDarkerInnerCiMarkers = (legendRows: ReturnType<typeof getLegendRows>) => {
  const ci50Rows = legendRows.slice(0, 3)
  const ci90Rows = legendRows.slice(3)

  ci50Rows.forEach((ci50Row, index) => {
    const ci50Alpha = getAlpha(ci50Row.markerColor)
    const ci90Alpha = getAlpha(ci90Rows[index].markerColor)

    expect(ci50Alpha).not.toBeNull()
    expect(ci90Alpha).not.toBeNull()
    expect(ci50Alpha!).toBeGreaterThan(ci90Alpha!)
  })
}

export const Multiple_CI_Legend_Indicators: Story = {
  args: {
    config: forecastCiLegendConfig as any,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    await waitFor(() => {
      const legendRows = getLegendRows(canvasElement)

      expectRenderableForecastAreas(canvasElement)
      expect(legendRows.map(row => row.text)).toEqual([
        '50% CI Estimate',
        '50% CI Estimate Based on Partial Data',
        '50% CI Forecast',
        '90% CI Estimate',
        '90% CI Estimate Based on Partial Data',
        '90% CI Forecast'
      ])

      expectDarkerInnerCiMarkers(legendRows)
    })
  }
}

export default meta
