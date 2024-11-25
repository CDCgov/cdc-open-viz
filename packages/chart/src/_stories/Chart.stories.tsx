import type { Meta, StoryObj } from '@storybook/react'

import Chart from '../CdcChart'
import lineChartTwoPointsRegressionTest from './_mock/line_chart_two_points_regression_test.json'
import lineChartTwoPointsNewChart from './_mock/line_chart_two_points_new_chart.json'
import lineChartConfidenceIntervals from './_mock/line_chart_confidence_intervals.json'
import lollipop from './_mock/lollipop.json'
import forestPlot from '../../examples/feature/forest-plot/forest-plot.json'
import pairedBar from './_mock/paired-bar.json'
import horizontalBarConfig from './_mock/horizontal_bar.json'
import pieConfig from './_mock/pie_with_data.json'
import boxPlotConfig from './_mock/boxplot_multiseries.json'
import areaChartStacked from './_mock/area_chart_stacked.json'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const line_Chart_Confidence_Intervals: Story = {
  args: {
    config: lineChartConfidenceIntervals,
    isEditor: false
  }
}

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

export const Forest_Plot: Story = {
  args: {
    config: forestPlot
  }
}

export const Horizontal_Bar: Story = {
  args: {
    config: horizontalBarConfig
  }
}

export const Pie: Story = {
  args: {
    config: pieConfig
  }
}

export const Paired_Bar: Story = {
  args: {
    config: pairedBar
  }
}
export const BoxPlot_Multiseries: Story = {
  args: {
    config: boxPlotConfig,
    isEditor: false
  }
}

export const Area_Chart_stacked: Story = {
  args: {
    config: areaChartStacked,
    isEditor: false
  }
}

export default meta
