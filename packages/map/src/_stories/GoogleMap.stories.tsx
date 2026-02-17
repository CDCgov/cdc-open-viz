import type { Meta, StoryObj } from '@storybook/react-vite'
import CdcMap from '../CdcMap'
import googleMapConfig from './_mock/google-map.json'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map',
  component: CdcMap
}

type Story = StoryObj<typeof CdcMap>

export const Google_Map: Story = {
  args: {
    config: googleMapConfig
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export default meta
