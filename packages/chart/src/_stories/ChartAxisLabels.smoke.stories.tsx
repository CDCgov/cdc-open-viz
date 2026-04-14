import type { Meta, StoryObj } from '@storybook/react-vite'
import SimplifiedLineConfig from './_mock/simplified_line.json'

import Chart from '../CdcChartComponent'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Axis Labels',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const Abbreviated_Dates: Story = {
  args: {
    config: editConfigKeys(SimplifiedLineConfig, [
      { path: ['xAxis', 'showYearsOnce'], value: true },
      { path: ['tooltips', 'dateDisplayFormat'], value: '%b. %d %Y' }
    ])
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export default meta
