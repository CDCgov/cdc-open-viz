import type { Meta, StoryObj } from '@storybook/react'
import barChartCiLabels from './_mock/bar_chart_ci_labels.json'
import lineChartDynamicCI from './_mock/line_chart_dynamic_ci.json'
import lineChartNonDynamicCI from './_mock/line_chart_non_dynamic_ci.json'

import Chart from '../CdcChartComponent'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Confidence Intervals',
  component: Chart
}
type Story = StoryObj<typeof Chart>
export const bar_chart_with_labels: Story = {
  args: {
    config: barChartCiLabels,
    isEditor: false
  }
}

export const line_Chart_Dynamic_Confidence_Intervals: Story = {
  args: {
    config: lineChartDynamicCI,
    isEditor: false
  }
}

export const line_Chart_Non_Dynamic_Confidence_Intervals: Story = {
  args: {
    config: lineChartNonDynamicCI,
    isEditor: false
  }
}
export default meta
