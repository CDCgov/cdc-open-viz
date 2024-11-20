import type { Meta, StoryObj } from '@storybook/react'
import CdcMap from '../CdcMap'
import SingleStateWithFilters from './_mock/DEV-8942.json'
import CustomLayerMap from './_mock/custom-layer-map.json'
import WastewaterMap from './_mock/wastewater-map.json'
import { editConfigKeys } from '@cdc/chart/src/helpers/configHelpers'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Legend',
  component: CdcMap
}

type Story = StoryObj<typeof CdcMap>

export default meta

export const Legend_Right: Story = {
  args: {
    config: editConfigKeys(SingleStateWithFilters, [{ path: ['legend', 'hideBorder'], value: true }])
  }
}

export const Legend_Bottom_Single_Row: Story = {
  args: {
    config: editConfigKeys(CustomLayerMap, [{ path: ['legend', 'position'], value: 'bottom' }])
  }
}

export const Legend_Bottom: Story = {
  args: {
    config: editConfigKeys(CustomLayerMap, [
      { path: ['legend', 'position'], value: 'bottom' },
      { path: ['legend', 'singleRow'], value: true }
    ])
  }
}

export const Legend_Bottom_Pattern: Story = {
  args: {
    config: editConfigKeys(WastewaterMap, [
      { path: ['legend', 'position'], value: 'bottom' },
      { path: ['legend', 'style'], value: 'circles' },
      { path: ['legend', 'singleRow'], value: false }
    ])
  }
}
