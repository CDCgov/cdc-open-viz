import type { Meta, StoryObj } from '@storybook/react-vite'
import CdcMap from '../CdcMap'
import WastewaterMap from './_mock/wastewater-map.json'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Filters',
  component: CdcMap
}

type Story = StoryObj<typeof CdcMap>

export default meta

export const Tab_Simple: Story = {
  args: {
    config: editConfigKeys(WastewaterMap, [])
  }
}
