import type { Meta, StoryObj } from '@storybook/react-vite'
import boxPlotConfig from './_mock/boxplot_multiseries.json'
import Chart from '../CdcChartComponent'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Box Plot',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const BoxPlot_Vertical: Story = {
  args: {
    config: {
      ...boxPlotConfig,
      orientation: 'vertical',
      title: 'Vertical Multiseries Box Plot',
      isEditor: false
    }
  }
}

export const BoxPlot_Horizontal: Story = {
  args: {
    config: {
      ...boxPlotConfig,
      orientation: 'horizontal',
      title: 'Horizontal Multiseries Box Plot',
      yAxis: { ...boxPlotConfig.yAxis, labelPlacement: 'Above Bar' }
    },
    isEditor: false
  }
}

export default meta
