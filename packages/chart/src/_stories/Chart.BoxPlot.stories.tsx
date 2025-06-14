import type { Meta, StoryObj } from '@storybook/react'
import boxPlotConfig from './_mock/boxplot_multiseries.json'
import Chart from '../CdcChartComponent'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Box Plot',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const BoxPlot_Multiseries: Story = {
  args: {
    config: boxPlotConfig,
    isEditor: false
  }
}

export const BoxPlot_Horizontal: Story = {
  args: {
    config: {
      ...boxPlotConfig,
      orientation: 'horizontal',
      yAxis: { ...boxPlotConfig.yAxis, labelPlacement: 'Above Bar' }
    },
    isEditor: false
  }
}

export default meta
