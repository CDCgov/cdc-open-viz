import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { assertVisualizationRendered, waitForPresence } from '@cdc/core/helpers/testing'
import Chart from '../CdcChartComponent'
import { createNewChartConfig } from '../helpers/createNewChartConfig'
import type { ChartConfig } from '../types/ChartConfig'
import horizonFixture from '../../examples/feature/horizon/horizon-chart.json'
import horizonData from '../../examples/feature/__data__/horizon-chart-data.json'
import radarFixture from '../../examples/radar-chart-simple.json'
import { BrushDefaultSelectionTests } from './ChartBrush.Editor.stories'
import { HeatMap_QA_Spacing_And_Cell_Values } from './Chart.HeatMap.stories'
import { Network_Editor } from './Chart.Network.stories'
import { Dendrogram_Editor } from './Chart.Dendrogram.stories'

const meta: Meta<typeof Chart> = {
  title: 'Regression Tests/Charts/Specialized Charts',
  component: Chart
}

export default meta
type Story = StoryObj<typeof Chart>

const epiConfig = createNewChartConfig({
  type: 'chart',
  visualizationType: 'Bar',
  title: 'Epi Chart Regression',
  showTitle: true,
  barThickness: '0.95',
  isResponsiveTicks: false,
  data: [
    { date: '2026-01-01', cases: 3 },
    { date: '2026-01-02', cases: 7 },
    { date: '2026-01-03', cases: 4 },
    { date: '2026-01-04', cases: 9 }
  ],
  xAxis: {
    dataKey: 'date',
    type: 'date-time',
    dateParseFormat: '%Y-%m-%d',
    dateDisplayFormat: '%b. %-d %Y',
    maxTickRotation: 45,
    numTicks: 6,
    viewportNumTicks: { xs: 4, xxs: 4 }
  },
  series: [{ dataKey: 'cases', name: 'Cases', type: 'Bar', axis: 'Left', tooltip: true }]
})

const horizonConfig = createNewChartConfig({
  ...(horizonFixture as Partial<ChartConfig>),
  dataUrl: undefined,
  data: horizonData
})

const radarConfig = createNewChartConfig(radarFixture as Partial<ChartConfig>)

const warmingStripesConfig = createNewChartConfig({
  type: 'chart',
  visualizationType: 'Warming Stripes',
  title: 'Annual Temperature Anomalies',
  showTitle: true,
  data: [
    { year: '2017', anomaly: -0.5 },
    { year: '2018', anomaly: -0.2 },
    { year: '2019', anomaly: 0.1 },
    { year: '2020', anomaly: 0.4 },
    { year: '2021', anomaly: 0.7 },
    { year: '2022', anomaly: 1.0 }
  ],
  xAxis: { dataKey: 'year', type: 'date', dateParseFormat: '%Y', dateDisplayFormat: '%Y' },
  series: [{ dataKey: 'anomaly', name: 'Temperature anomaly', type: 'Warming Stripes', axis: 'Left' }],
  legend: { position: 'bottom', style: 'gradient', label: 'Temperature anomaly' }
})

const expectDataTableRows = async (canvasElement: HTMLElement, expectedRows: number) => {
  const canvas = within(canvasElement)
  const tableButton = canvas.queryByRole('button', { name: /data table/i })
  if (tableButton) await userEvent.click(tableButton)
  if (tableButton) expect(canvasElement.querySelectorAll('table tbody tr').length).toBeGreaterThanOrEqual(expectedRows)
}

export const CHART005: Story = {
  ...BrushDefaultSelectionTests,
  name: 'CHART-005 — Brush Slider Authoring'
}

export const CHART006: Story = {
  ...HeatMap_QA_Spacing_And_Cell_Values,
  name: 'CHART-006 — HeatMap Spacing and Cell Values'
}

export const CHART007: Story = {
  name: 'CHART-007 — Date-Based Epi Chart',
  args: { config: epiConfig, isEditor: false },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    expect(await within(canvasElement).findByText('Epi Chart Regression')).toBeVisible()
    expect(canvasElement.querySelectorAll('g[class*="bar-group-"]').length).toBe(4)
    await expectDataTableRows(canvasElement, 4)
  }
}

export const CHART008: Story = {
  name: 'CHART-008 — Multi-Series Horizon Chart',
  args: { config: horizonConfig, isEditor: false },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    const chart = await waitForPresence('.horizon-chart', canvasElement)
    expect(chart.querySelectorAll('.horizon-band-row').length).toBeGreaterThanOrEqual(4)
  }
}

export const CHART009: Story = {
  name: 'CHART-009 — Program Comparison Radar Chart',
  args: { config: radarConfig, isEditor: false },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    const chart = await waitForPresence('svg.radar-chart', canvasElement)
    expect(chart.querySelectorAll('polygon, path').length).toBeGreaterThan(1)
    expect(canvasElement.textContent).not.toContain('Radar chart requires at least 3 dimensions')
  }
}

export const CHART010: Story = {
  name: 'CHART-010 — Temperature-Anomaly Warming Stripes',
  args: { config: warmingStripesConfig, isEditor: false },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    const chart = await waitForPresence('.warming-stripes', canvasElement)
    expect(chart.querySelectorAll('rect')).toHaveLength(6)
    expect((await within(canvasElement).findAllByText('Temperature anomaly')).length).toBeGreaterThanOrEqual(2)
  }
}

export const CHART011: Story = {
  ...Network_Editor,
  name: 'CHART-011 — Network Editor Configuration'
}

export const CHART012: Story = {
  ...Dendrogram_Editor,
  name: 'CHART-012 — Dendrogram Editor Configuration'
}
