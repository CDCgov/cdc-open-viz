import type { Meta, StoryObj } from '@storybook/react-vite'
import CdcMap from '../CdcMap'
import wastewaterMapSmallMultiples from './_mock/small_multiples/wastewater-map-small-multiples.json'
import multiStateSmallMultiples from './_mock/small_multiples/multi-state-small-multiples.json'
import regionSmallMultiples from './_mock/small_multiples/region-small-multiples.json'
import { assertVisualizationRendered, performAndAssert } from '@cdc/core/helpers/testing'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Small Multiples',
  component: CdcMap
}

type Story = StoryObj<typeof CdcMap>

export const SmallMultiples_UsaStateMap: Story = {
  args: {
    config: wastewaterMapSmallMultiples,
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

    const getRegionTileState = () => {
      const tiles = Array.from(canvasElement.querySelectorAll('.small-multiple-tile'))

      return {
        tileCount: tiles.length,
        renderedRegionTileCount: tiles.filter(tile => tile.querySelector('.geo-group')).length
      }
    }

    await performAndAssert(
      'All region small-multiple tiles render geography',
      getRegionTileState,
      () => {},
      (_before, after) => after.tileCount > 0 && after.renderedRegionTileCount === after.tileCount
    )
  }
}

export default meta
