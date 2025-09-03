import type { Meta, StoryObj } from '@storybook/react'
import CdcMap from '../CdcMap'
import googleMapConfig from './_mock/google-map.json'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map',
  component: CdcMap
}

type Story = StoryObj<typeof CdcMap>

export const Google_Map: Story = {
  args: {
    config: googleMapConfig
  }
}

export default meta
