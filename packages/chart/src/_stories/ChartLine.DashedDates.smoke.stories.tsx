import type { Meta, StoryObj } from '@storybook/react-vite'
import Chart from '../CdcChartComponent'
import config from './_mock/line_chart_dashed_dates.json'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Special Lines - Dashed on Date Axis',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const DashedSpecialLineWithDates: Story = {
  args: {
    config: config,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export default meta
