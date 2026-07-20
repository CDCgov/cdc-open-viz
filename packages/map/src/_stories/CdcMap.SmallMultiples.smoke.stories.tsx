import type { Meta, StoryObj } from '@storybook/react-vite'
import CdcMap from '../CdcMap'
import wastewaterMapSmallMultiples from './_mock/small_multiples/wastewater-map-small-multiples.json'
import multiStateSmallMultiples from './_mock/small_multiples/multi-state-small-multiples.json'
import regionSmallMultiples from './_mock/small_multiples/region-small-multiples.json'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import { wastewaterSmallMultiplesSampleData } from './_mock/wastewater-sample-data'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Small Multiples',
  component: CdcMap
}

type Story = StoryObj<typeof CdcMap>

export const SmallMultiples_UsaStateMap: Story = {
  args: {
    config: editConfigKeys(wastewaterMapSmallMultiples, [
      { path: ['dataUrl'], value: undefined },
      { path: ['formattedData'], value: wastewaterSmallMultiplesSampleData }
    ]),
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const SmallMultiples_MultiStateCountyMap: Story = {
  args: {
    config: multiStateSmallMultiples,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const SmallMultiples_UsaRegionMap: Story = {
  args: {
    config: regionSmallMultiples,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export default meta
