import type { Meta, StoryObj } from '@storybook/react-vite'
import Chart from '../CdcChartComponent'
import scatterPlotDownloadImage from './_mock/scatterplot-image-download.json'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Scatter Plot Download Image',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const ScatterPlot_Download_Image: Story = {
  args: {
    config: scatterPlotDownloadImage,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export default meta
