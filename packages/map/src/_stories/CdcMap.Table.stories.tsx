import type { Meta, StoryObj } from '@storybook/react'
import CdcMapComponent from '../CdcMapComponent'
import defaultPatterns from './_mock/default-patterns.json'
import { editConfigKeys } from '@cdc/chart/src/helpers/configHelpers'

const meta: Meta<typeof CdcMapComponent> = {
  title: 'Components/Templates/Map/Table',
  component: CdcMapComponent
}

type Story = StoryObj<typeof CdcMapComponent>

export const Show_Non_Geo_Data: Story = {
  args: {
    config: editConfigKeys(defaultPatterns, [{ path: ['table', 'showNonGeoData'], value: true }])
  }
}

export default meta
