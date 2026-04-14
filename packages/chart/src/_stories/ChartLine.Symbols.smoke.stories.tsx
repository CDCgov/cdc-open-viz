import type { Meta, StoryObj } from '@storybook/react-vite'
import Chart from '../CdcChartComponent'
import config from './_mock/line_chart_symbols.json'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Symbols',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const LineChartSymbols: Story = {
  args: {
    config: config,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export default meta
