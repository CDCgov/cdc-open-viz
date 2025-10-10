import type { Meta, StoryObj } from '@storybook/react-vite'
import Chart from '../CdcChartComponent'
import config from './_mock/line_chart_symbols.json'
const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Symbols',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const LineChartSymbols: Story = {
  args: {
    config: config,
    isEditor: false
  }
}

export default meta
