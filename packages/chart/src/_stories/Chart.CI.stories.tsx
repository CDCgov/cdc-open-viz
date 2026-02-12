import type { Meta, StoryObj } from '@storybook/react-vite'
import barChartCiLabels from './_mock/bar_chart_ci_labels.json'
import lineChartDynamicCI from './_mock/line_chart_dynamic_ci.json'
import lineChartNonDynamicCI from './_mock/line_chart_non_dynamic_ci.json'

import Chart from '../CdcChartComponent'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Confidence Intervals',
  component: Chart
}
type Story = StoryObj<typeof Chart>
export const bar_chart_with_labels: Story = {
  args: {
    config: barChartCiLabels,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}
export const bar_chart_horizontal_labels: Story = {
  args: {
    config: {
      ...barChartCiLabels,
      orientation: 'horizontal',
      yAxis: { ...barChartCiLabels.yAxis, displayNumbersOnBar: true }
    },
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const line_Chart_Dynamic_Confidence_Intervals: Story = {
  args: {
    config: lineChartDynamicCI,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const line_Chart_Non_Dynamic_Confidence_Intervals: Story = {
  args: {
    config: lineChartNonDynamicCI,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}
export default meta
