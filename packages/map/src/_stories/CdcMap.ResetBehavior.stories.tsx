import type { Meta, StoryObj } from '@storybook/react-vite'
import CdcMap from '../CdcMap'
import worldDataZoomFilters from './_mock/world-data-zoom-filters.json'
import { assertVisualizationRendered, waitForPresence } from '@cdc/core/helpers/testing'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Reset Behavior',
  component: CdcMap,
  parameters: {
    docs: {
      description: {
        component:
          'Manual repro story for world data maps that combine active filters with zoom so reset behavior can be validated directly in Storybook.'
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof CdcMap>

export const WorldDataZoomWithFilters: Story = {
  args: {
    config: worldDataZoomFilters,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('path[data-country-code]', canvasElement)
  }
}
