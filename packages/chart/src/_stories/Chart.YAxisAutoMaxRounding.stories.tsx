import type { Meta, StoryObj } from '@storybook/react-vite'
import Chart from '../CdcChartComponent'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import smallestLeftAxisMaxConfig from './_mock/smallest_left_axis_max.json'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Y Axis Auto Max Rounding',
  component: Chart
}

type Story = StoryObj<typeof Chart>

const baseConfig = editConfigKeys(smallestLeftAxisMaxConfig, [
  { path: ['yAxis', 'smallestLeftAxisMax'], value: undefined },
  { path: ['yAxis', 'filterDomainBehavior'], value: 'dynamic' },
  { path: ['yAxis', 'numTicks'], value: 4 },
  { path: ['filters', '0', 'active'], value: 'Region A' }
])

export const Tick_Friendly_Rounding_Enabled: Story = {
  args: {
    config: editConfigKeys(baseConfig, [{ path: ['yAxis', 'autoMaxRounding'], value: 'tick-friendly' }])
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Tick_Friendly_Rounding_Disabled: Story = {
  args: {
    config: editConfigKeys(baseConfig, [{ path: ['yAxis', 'autoMaxRounding'], value: 'none' }])
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Stable_Filter_Domain_With_Tick_Friendly_Rounding: Story = {
  args: {
    config: editConfigKeys(baseConfig, [
      { path: ['yAxis', 'filterDomainBehavior'], value: 'stable' },
      { path: ['yAxis', 'autoMaxRounding'], value: 'tick-friendly' },
      { path: ['filters', '0', 'active'], value: 'Region B' }
    ])
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export default meta
