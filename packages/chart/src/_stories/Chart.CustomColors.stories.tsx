import type { Meta, StoryObj } from '@storybook/react-vite'
import Chart from '../CdcChartComponent'
import scatterPlotCustomColorConfig from './_mock/scatterplot_mock.json'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Custom Colors',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const ScatterPlot: Story = {
  args: {
    config: scatterPlotCustomColorConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export default meta
