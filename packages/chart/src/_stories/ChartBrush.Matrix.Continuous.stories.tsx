import type { Meta, StoryObj } from '@storybook/react-vite'
import Chart from '../CdcChartComponent'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import brushContinuousConfig from './_mock/brush_continuous.json'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/BrushSlider/Matrix/Continuous',
  component: Chart
}

export default meta

type Story = StoryObj<typeof Chart>

export const Default: Story = {
  args: { config: brushContinuousConfig, isEditor: false },
  parameters: {
    docs: {
      description: { story: 'xAxis.type = "continuous", default ascending numeric order.' }
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Reversed: Story = {
  args: {
    config: editConfigKeys(brushContinuousConfig, [{ path: ['xAxis', 'sortByRecentDate'], value: true }]),
    isEditor: false
  },
  parameters: {
    docs: {
      description: { story: 'xAxis.type = "continuous", sortByRecentDate = true.' }
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}
