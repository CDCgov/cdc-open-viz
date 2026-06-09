import type { Meta, StoryObj } from '@storybook/react-vite'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import Dashboard from '../CdcDashboard'

const meta: Meta<typeof Dashboard> = {
  title: 'Components/Pages/Dashboard/Y Axis Filter Domain',
  component: Dashboard
}

export default meta
type Story = StoryObj<typeof Dashboard>

const dashboardStableYAxisConfig = {
  type: 'dashboard',
  version: '4.26.5',
  dashboard: {
    theme: 'theme-blue',
    title: 'Dashboard Stable Y-Axis Domain',
    titleStyle: 'small',
    sharedFilters: [
      {
        key: 'region-filter',
        type: 'datafilter',
        columnName: 'Region',
        showDropdown: true,
        usedBy: ['stable-chart'],
        resetLabel: 'Reset',
        values: ['Region A', 'Region B'],
        active: 'Region B'
      }
    ]
  },
  rows: [
    {
      columns: [{ width: 12, widget: 'stable-chart' }]
    }
  ],
  visualizations: {
    'stable-chart': {
      uid: 'stable-chart',
      type: 'chart',
      visualizationType: 'Line',
      visualizationSubType: 'regular',
      title: 'Stable domain dashboard chart',
      theme: 'theme-blue',
      dataKey: 'chartData',
      xAxis: {
        dataKey: 'Month',
        type: 'categorical',
        label: 'Month'
      },
      yAxis: {
        type: 'linear',
        label: 'Cases',
        filterDomainBehavior: 'stable',
        numTicks: 4
      },
      series: [{ dataKey: 'Cases', type: 'Line', axis: 'Left', tooltip: true }],
      filters: [],
      table: { show: false },
      legend: { hide: true }
    }
  },
  datasets: {
    chartData: {
      data: [
        { Month: 'Jan', Region: 'Region A', Cases: 12 },
        { Month: 'Feb', Region: 'Region A', Cases: 28 },
        { Month: 'Jan', Region: 'Region B', Cases: 1 },
        { Month: 'Feb', Region: 'Region B', Cases: 2 }
      ],
      preview: true,
      dataFileName: 'chartData.json',
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

export const Dashboard_Chart_Stable_Filter_Domain: Story = {
  args: {
    config: dashboardStableYAxisConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}
