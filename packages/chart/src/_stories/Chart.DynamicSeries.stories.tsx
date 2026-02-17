import DynamicSeriesConfig from './_mock/dynamic_series_config.json'
import DynamicSeriesBarConfig from './_mock/dynamic_series_bar_config.json'
import DynamicSeriesSuppression from './_mock/dynamic_series_suppression_mock.json'
import { Meta, StoryObj } from '@storybook/react-vite'
import Chart from '../CdcChartComponent'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Dynamic Series',
  component: Chart
}

type Story = StoryObj<typeof Chart>

// data with a line break
const data = DynamicSeriesConfig.data.map((d, i) => (i === 4 ? { ...d, Data_Value: null } : d))
export const LineShowPoints: Story = {
  args: {
    config: {
      ...DynamicSeriesConfig,
      data,
      originalFormattedData: data,
      formattedData: data,
      lineDatapointStyle: 'always show'
    },
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const LineSuppression: Story = {
  args: {
    config: DynamicSeriesSuppression,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const LineHoverPoints: Story = {
  args: {
    config: DynamicSeriesConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Bar_Vertical: Story = {
  args: {
    config: DynamicSeriesBarConfig,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Bar_Horizontal: Story = {
  args: {
    config: { ...DynamicSeriesBarConfig, orientation: 'horizontal' },
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Legend_Order: Story = {
  args: {
    config: {
      ...DynamicSeriesBarConfig,
      orientation: 'vertical',
      legend: { ...DynamicSeriesBarConfig, order: 'desc' }
    },
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export default meta
