import type { Meta, StoryObj } from '@storybook/react-vite'

import Chart from '../CdcChart'
import lineChartTwoPointsRegressionTest from './_mock/line_chart_two_points_regression_test.json'
import lineChartTwoPointsNewChart from './_mock/line_chart_two_points_new_chart.json'
import lollipop from './_mock/lollipop.json'
import forestPlot from '../../examples/feature/forest-plot/forest-plot.json'
import pairedBar from './_mock/paired-bar.json'
import pairedBarAbbreviated from './_mock/paired-bar-abbr.json'
import horizontalBarConfig from './_mock/horizontal_bar.json'
import horizontalBarsDynamicYAxis from './_mock/horizontal-bars-dynamic-y-axis.json'
import barChartLabels from './_mock/barchart_labels.mock.json'
import pieConfig from './_mock/pie_with_data.json'
import pieCalculatedArea from './_mock/pie_calculated_area.json'
import areaChartStacked from './_mock/area_chart_stacked.json'
import multipleLines from './_mock/short_dates.json'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import { assertVisualizationRendered, waitForPresence } from '@cdc/core/helpers/testing'
import { expect } from 'storybook/test'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const line_Chart_Two_Points_Regression_Test: Story = {
  args: {
    config: lineChartTwoPointsRegressionTest,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}
export const line_Chart_Two_Points_New_Chart: Story = {
  args: {
    config: lineChartTwoPointsNewChart,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const multiple_lines: Story = {
  args: {
    config: editConfigKeys(multipleLines, [{ path: ['tooltips', 'dateDisplayFormat'], value: '%b. %d %Y' }])
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Lollipop: Story = {
  args: {
    config: lollipop,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Forest_Plot: Story = {
  args: {
    config: forestPlot,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Horizontal_Bar: Story = {
  args: {
    config: horizontalBarConfig
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Horizontal_Bars_Dynamic_Y_Axis: Story = {
  args: {
    config: horizontalBarsDynamicYAxis,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const BarChart_Labels: Story = {
  args: {
    config: barChartLabels
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Pie: Story = {
  args: {
    config: pieConfig,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}
export const Pie_Calculated_Area: Story = {
  args: {
    config: pieCalculatedArea,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Paired_Bar: Story = {
  args: {
    config: pairedBar,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Paired_Bar_Year_Tick_Format_Regression: Story = {
  args: {
    config: pairedBarAbbreviated,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Area_Chart_stacked: Story = {
  args: {
    config: areaChartStacked,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Metadata_In_Description: Story = {
  args: {
    configUrl: '/packages/chart/tests/fixtures/chart-config-with-metadata.json'
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    const subtext = await waitForPresence('.subtext', canvasElement)
    expect(subtext?.textContent).toContain('January 15, 2026')
  }
}

export const Metadata_Backward_Compat_Plain_Array: Story = {
  args: {
    config: lineChartTwoPointsRegressionTest,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export default meta
