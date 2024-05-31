import type { Meta, StoryObj } from '@storybook/react'
import SuppressedConfig from './_mock/bar-chart-suppressed.json'

import Chart from '../CdcChart'
import lineChartTwoPointsRegressionTest from './_mock/line_Chart_Two_Points_Regression_Test.json'
import lineChartTwoPointsNewChart from './_mock/line_Chart_Two_Points_New_Chart.json'
import lollipop from './_mock/lollipop.json'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const line_Chart_Two_Points_Regression_Test: Story = {
  args: {
    config: lineChartTwoPointsRegressionTest,
    isEditor: false
  }
}
export const line_Chart_Two_Points_New_Chart: Story = {
  args: {
    config: lineChartTwoPointsNewChart,
    isEditor: false
  }
}

export const Lollipop: Story = {
  args: {
    config: lollipop,
    isEditor: false
  }
}

export const Suppression: Story = {
  args: {
    config: SuppressedConfig,
    isEditor: false
  }
}

export default meta
