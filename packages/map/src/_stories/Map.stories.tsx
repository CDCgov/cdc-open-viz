import type { Meta, StoryObj } from '@storybook/react'
import usMapConfig from './_mock/default-usa.json'

import Map from '../CdcMap'

const meta: Meta<typeof Map> = {
  title: 'Components/Templates/Wrapper/Map',
  component: Map
}

type Story = StoryObj<typeof Map>

export const US_Map: Story = {
  args: {
    config: usMapConfig
  }
}

export default meta
