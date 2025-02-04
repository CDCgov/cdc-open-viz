import type { Meta, StoryObj } from '@storybook/react'
import Chart from '../CdcChartComponent'
import scatterPlotDownloadImage from './_mock/scatterplot-image-download.json'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Scatter Plot Download Image',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const ScatterPlot_Download_Image: Story = {
  args: {
    config: scatterPlotDownloadImage,
    isEditor: false
  }
}

export default meta
