import type { Meta, StoryObj } from '@storybook/react-vite'
import CdcMap from '../CdcMap'
import wastewaterMapSmallMultiples from './_mock/small_multiples/wastewater-map-small-multiples.json'
import multiStateSmallMultiples from './_mock/small_multiples/multi-state-small-multiples.json'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Small Multiples',
  component: CdcMap
}

type Story = StoryObj<typeof CdcMap>

export const SmallMultiples_UsaStateMap: Story = {
  args: {
    config: wastewaterMapSmallMultiples,
    isEditor: false
  }
}

export const SmallMultiples_MultiStateCountyMap: Story = {
  args: {
    config: multiStateSmallMultiples,
    isEditor: false
  }
}

export default meta
