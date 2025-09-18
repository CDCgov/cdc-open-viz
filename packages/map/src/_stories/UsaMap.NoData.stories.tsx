import type { Meta, StoryObj } from '@storybook/react-vite'
import CdcMapComponent from '../CdcMapComponent'
import cityStateConfig from './_mock/example-city-state.json'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'

const meta: Meta<typeof CdcMapComponent> = {
  title: 'Components/Templates/Map',
  component: CdcMapComponent
}

type Story = StoryObj<typeof CdcMapComponent>

export const USA_Map_No_Data: Story = {
  args: {
    config: editConfigKeys(cityStateConfig, [{ path: ['data'], value: [] }])
  }
}

export default meta
