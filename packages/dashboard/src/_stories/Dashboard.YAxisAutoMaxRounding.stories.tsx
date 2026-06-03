import type { Meta, StoryObj } from '@storybook/react-vite'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import Dashboard from '../CdcDashboard'

const meta: Meta<typeof Dashboard> = {
  title: 'Components/Pages/Dashboard/Y Axis Auto Max Rounding',
  component: Dashboard
}

export default meta
type Story = StoryObj<typeof Dashboard>

const rawMaxValues = [10.1, 13, 14, 15, 16, 17, 18, 19, 12.1, 101, 121, 1005, 1205, 10010, 12010]

const data = rawMaxValues.flatMap(rawMax => {
  const firstValue = Number((rawMax * 0.35).toFixed(2))
  const secondValue = Number((rawMax * 0.65).toFixed(2))

  return [
    { RawMax: String(rawMax), Category: 'Selected maximum', Value: rawMax },
    { RawMax: String(rawMax), Category: 'Second comparison', Value: secondValue },
    { RawMax: String(rawMax), Category: 'First comparison', Value: firstValue }
  ]
})

const createBarChart = (
  uid: string,
  title: string,
  autoMaxRounding: 'none' | 'tick-friendly',
  titlePlacement: 'top' | 'side' = 'top'
) => ({
  uid,
  type: 'chart',
  visualizationType: 'Bar',
  visualizationSubType: 'regular',
  orientation: 'vertical',
  title,
  showTitle: true,
  theme: 'theme-blue',
  dataKey: 'roundingComparisonData',
  filterBehavior: 'Filter Change',
  xAxis: {
    dataKey: 'Category',
    type: 'categorical',
    label: 'Category',
    hideLabel: false,
    hideTicks: false
  },
  yAxis: {
    type: 'linear',
    label: 'Value',
    inlineLabel: '',
    titlePlacement,
    hideAxis: true,
    hideLabel: false,
    hideTicks: true,
    gridLines: true,
    enablePadding: false,
    scalePadding: 0,
    min: '',
    max: '',
    numTicks: 4,
    autoMaxRounding
  },
  series: [{ dataKey: 'Value', type: 'Bar', axis: 'Left', tooltip: true }],
  filters: [],
  table: { show: false, showDataTableLink: false },
  legend: { hide: true }
})

const dashboardAutoMaxRoundingConfig = {
  type: 'dashboard',
  version: '4.26.6',
  dashboard: {
    theme: 'theme-blue',
    title: 'Y-Axis Auto Max Rounding Comparison',
    titleStyle: 'small',
    sharedFilters: [
      {
        key: 'raw-max-filter',
        type: 'datafilter',
        filterStyle: 'dropdown',
        columnName: 'RawMax',
        showDropdown: true,
        usedBy: ['old-rounding-chart', 'new-rounding-chart', 'old-side-title-chart', 'new-side-title-chart'],
        resetLabel: 'Select a raw max',
        values: rawMaxValues.map(String),
        active: '10.1',
        order: 'cust',
        orderedValues: rawMaxValues.map(String),
        parents: []
      }
    ]
  },
  rows: [
    {
      columns: [{ width: 12, widget: 'rounding-dashboard-filter' }]
    },
    {
      columns: [
        { width: 6, widget: 'old-rounding-chart' },
        { width: 6, widget: 'new-rounding-chart' }
      ]
    },
    {
      columns: [
        { width: 6, widget: 'old-side-title-chart' },
        { width: 6, widget: 'new-side-title-chart' }
      ]
    }
  ],
  visualizations: {
    'rounding-dashboard-filter': {
      uid: 'rounding-dashboard-filter',
      type: 'dashboardFilters',
      visualizationType: 'dashboardFilters',
      sharedFilterIndexes: [0],
      filterBehavior: 'Filter Change',
      filters: [],
      autoLoad: true
    },
    'old-rounding-chart': createBarChart('old-rounding-chart', 'Old behavior: no auto max rounding', 'none'),
    'new-rounding-chart': createBarChart(
      'new-rounding-chart',
      'New behavior: tick-friendly auto max rounding',
      'tick-friendly'
    ),
    'old-side-title-chart': createBarChart(
      'old-side-title-chart',
      'Old behavior with side Y-axis title',
      'none',
      'side'
    ),
    'new-side-title-chart': createBarChart(
      'new-side-title-chart',
      'New behavior with side Y-axis title',
      'tick-friendly',
      'side'
    )
  },
  datasets: {
    roundingComparisonData: {
      data,
      preview: true,
      dataFileName: 'roundingComparisonData.json',
      dataFileSourceType: 'file',
      dataFileFormat: 'JSON'
    }
  },
  table: {
    label: 'Data Table',
    show: false,
    showDownloadUrl: false,
    showVertical: true
  }
}

export const Dashboard_Filtered_Bar_Chart_Comparison: Story = {
  args: {
    config: dashboardAutoMaxRoundingConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}
