import type { Meta, StoryObj } from '@storybook/react-vite'
import Chart from '../CdcChartComponent'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import smallestLeftAxisMaxConfig from './_mock/smallest_left_axis_max.json'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Smallest Left Axis Maximum',
  component: Chart
}

type Story = StoryObj<typeof Chart>

/**
 * Region B is the default filter — data only goes up to 1.
 * Without smallestLeftAxisMax, the Y axis would show decimal ticks (0, 0.2, 0.4…).
 * With smallestLeftAxisMax: 5, the axis extends to at least 5, producing clean integer ticks.
 */
export const WithSmallestLeftAxisMax: Story = {
  args: {
    config: smallestLeftAxisMaxConfig
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

/**
 * Same chart without the smallestLeftAxisMax setting.
 * Region B data (max 1) causes decimal ticks on the Y axis — the problem this feature solves.
 */
export const WithoutSmallestLeftAxisMax: Story = {
  args: {
    config: editConfigKeys(smallestLeftAxisMaxConfig, [{ path: ['yAxis', 'smallestLeftAxisMax'], value: undefined }])
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

/**
 * Region A has data up to 28, well above the smallestLeftAxisMax of 5.
 * The axis naturally scales to the data — the setting has no effect here.
 */
export const LargerDataUnaffected: Story = {
  args: {
    config: editConfigKeys(smallestLeftAxisMaxConfig, [{ path: ['filters', '0', 'active'], value: 'Region A' }])
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

/**
 * Editor view so you can see the Smallest Left Axis Maximum field in the Left Value Axis section.
 */
export const Editor: Story = {
  args: {
    config: smallestLeftAxisMaxConfig,
    isEditor: true
  }
}

export default meta
