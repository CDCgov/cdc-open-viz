import type { Meta, StoryObj } from '@storybook/react-vite'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import Dashboard from '../CdcDashboard'

const meta: Meta<typeof Dashboard> = {
  title: 'Components/Pages/Dashboard/Y Axis Auto Max Strategy',
  component: Dashboard
}

export default meta
type Story = StoryObj<typeof Dashboard>

const rawMaxValues = [
  0.4, 0.6, 0.9, 1.1, 1.6, 2.2, 2.8, 3.4, 4.2, 4.9, 5, 5.1, 5.8, 6.2, 7.2, 8.6, 9, 10.1, 12.1, 13, 14, 15, 16, 17, 18,
  19, 25, 49, 51, 72, 89, 101, 121, 499, 1005, 1205, 1434, 2340, 5678, 10010, 12010
]

const data = rawMaxValues.flatMap(rawMax => {
  const firstValue = Number((rawMax * 0.35).toFixed(2))
  const secondValue = Number((rawMax * 0.65).toFixed(2))

  return [
    { RawMax: String(rawMax), Category: 'Selected maximum', Value: rawMax },
    { RawMax: String(rawMax), Category: 'Second comparison', Value: secondValue },
    { RawMax: String(rawMax), Category: 'First comparison', Value: firstValue }
  ]
})

const createBarChart = (uid: string, title: string, autoMaxStrategy: 'default' | 'clean-top-tick') => ({
  uid,
  type: 'chart',
  visualizationType: 'Bar',
  visualizationSubType: 'regular',
  orientation: 'vertical',
  title,
  showTitle: true,
  theme: 'theme-blue',
  dataKey: 'strategyComparisonData',
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
    titlePlacement: 'top',
    hideAxis: true,
    hideLabel: false,
    hideTicks: true,
    gridLines: true,
    enablePadding: false,
    scalePadding: 0,
    min: '',
    max: '',
    numTicks: 4,
    autoMaxStrategy
  },
  series: [{ dataKey: 'Value', type: 'Bar', axis: 'Left', tooltip: true }],
  filters: [],
  table: { show: false, showDataTableLink: false },
  legend: { hide: true }
})

const dashboardAutoMaxStrategyConfig = {
  type: 'dashboard',
  version: '4.26.6',
  dashboard: {
    theme: 'theme-blue',
    title: 'Y-Axis Auto Max Strategy Comparison',
    titleStyle: 'small',
    sharedFilters: [
      {
        key: 'raw-max-filter',
        type: 'datafilter',
        filterStyle: 'dropdown',
        columnName: 'RawMax',
        showDropdown: true,
        usedBy: ['default-chart', 'clean-top-tick-chart'],
        resetLabel: 'Select a raw max',
        values: rawMaxValues.map(String),
        active: '5.1',
        order: 'cust',
        orderedValues: rawMaxValues.map(String),
        parents: []
      }
    ]
  },
  rows: [
    {
      columns: [{ width: 12, widget: 'strategy-dashboard-filter' }]
    },
    {
      columns: [
        { width: 6, widget: 'default-chart' },
        { width: 6, widget: 'clean-top-tick-chart' }
      ]
    }
  ],
  visualizations: {
    'strategy-dashboard-filter': {
      uid: 'strategy-dashboard-filter',
      type: 'dashboardFilters',
      visualizationType: 'dashboardFilters',
      sharedFilterIndexes: [0],
      filterBehavior: 'Filter Change',
      filters: [],
      autoLoad: true
    },
    'default-chart': createBarChart('default-chart', 'Default strategy', 'default'),
    'clean-top-tick-chart': createBarChart('clean-top-tick-chart', 'Clean top tick strategy', 'clean-top-tick')
  },
  datasets: {
    strategyComparisonData: {
      data,
      preview: true,
      dataFileName: 'strategyComparisonData.json',
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
    config: dashboardAutoMaxStrategyConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}
