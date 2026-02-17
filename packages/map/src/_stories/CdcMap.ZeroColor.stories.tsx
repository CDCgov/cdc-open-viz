import type { Meta, StoryObj } from '@storybook/react-vite'
import CdcMap from '../CdcMap'
import zeroMapConfig from './_mock/zero-map.json'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Zero Color',
  component: CdcMap
}

type Story = StoryObj<typeof CdcMap>

export const Zero_Color_Map: Story = {
  args: {
    config: zeroMapConfig,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export default meta
