import type { Meta, StoryObj } from '@storybook/react'
import Chart from '../CdcChart'
import scatterPlotCustomColorConfig from './_mock/scatterplot_mock.json'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Custom Colors',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const ScatterPlot: Story = {
  args: {
    config: scatterPlotCustomColorConfig,
    isEditor: false
  }
}

export default meta
