import type { Meta, StoryObj } from '@storybook/react-vite'
import Chart from '../CdcChartComponent'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import smallestMaxTickValue from './_mock/smallest_max_tick_value.json'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Smallest Maximum Tick Value',
  component: Chart
}

type Story = StoryObj<typeof Chart>

/**
 * Region B is the default filter — data only goes up to 1.
 * Without smallestMaxTickValue, the Y axis would show decimal ticks (0, 0.2, 0.4…).
 * With smallestMaxTickValue: 5, the axis extends to at least 5, producing clean integer ticks.
 */
export const WithSmallestMaxTickValue: Story = {
  args: {
    config: smallestMaxTickValue
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

/**
 * Same chart without the smallestMaxTickValue setting.
 * Region B data (max 1) causes decimal ticks on the Y axis — the problem this feature solves.
 */
export const WithoutSmallestMaxTickValue: Story = {
  args: {
    config: editConfigKeys(smallestMaxTickValue, [{ path: ['yAxis', 'smallestMaxTickValue'], value: undefined }])
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

/**
 * Region A has data up to 28, well above the smallestMaxTickValue of 5.
 * The axis naturally scales to the data — the minimum range has no effect here.
 */
export const LargerDataUnaffected: Story = {
  args: {
    config: editConfigKeys(smallestMaxTickValue, [{ path: ['filters', '0', 'active'], value: 'Region A' }])
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

/**
 * Editor view so you can see the Smallest Maximum Tick Value field in the Left Value Axis section.
 */
export const Editor: Story = {
  args: {
    config: smallestMaxTickValue,
    isEditor: true
  }
}

export default meta
