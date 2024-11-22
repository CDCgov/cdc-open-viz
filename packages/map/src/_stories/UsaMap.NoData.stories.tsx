import type { Meta, StoryObj } from '@storybook/react'
import CdcMap from '../CdcMap'
import cityStateConfig from './_mock/example-city-state.json'
import { editConfigKeys } from '@cdc/chart/src/helpers/configHelpers'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map',
  component: CdcMap
}

type Story = StoryObj<typeof CdcMap>

export const USA_Map_No_Data: Story = {
  args: {
    config: editConfigKeys(cityStateConfig, [{ path: ['data'], value: [] }])
  }
}

export default meta
