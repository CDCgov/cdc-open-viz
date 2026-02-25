import type { Meta, StoryObj } from '@storybook/react-vite'
import Chart from '../CdcChartComponent'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import minimumAxisRangeConfig from './_mock/minimum_axis_range.json'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Minimum Axis Range',
  component: Chart
}

type Story = StoryObj<typeof Chart>

/**
 * Region B is the default filter — data only goes up to 1.
 * Without minimumAxisRange, the Y axis would show decimal ticks (0, 0.2, 0.4…).
 * With minimumAxisRange: 5, the axis extends to at least 5, producing clean integer ticks.
 */
export const WithMinimumAxisRange: Story = {
  args: {
    config: minimumAxisRangeConfig
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

/**
 * Same chart without the minimumAxisRange setting.
 * Region B data (max 1) causes decimal ticks on the Y axis — the problem this feature solves.
 */
export const WithoutMinimumAxisRange: Story = {
  args: {
    config: editConfigKeys(minimumAxisRangeConfig, [{ path: ['yAxis', 'minimumAxisRange'], value: undefined }])
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

/**
 * Region A has data up to 28, well above the minimumAxisRange of 5.
 * The axis naturally scales to the data — the minimum range has no effect here.
 */
export const LargerDataUnaffected: Story = {
  args: {
    config: editConfigKeys(minimumAxisRangeConfig, [{ path: ['filters', '0', 'active'], value: 'Region A' }])
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

/**
 * Editor view so you can see the Minimum Axis Range field in the Left Value Axis section.
 */
export const Editor: Story = {
  args: {
    config: minimumAxisRangeConfig,
    isEditor: true
  }
}

export default meta
