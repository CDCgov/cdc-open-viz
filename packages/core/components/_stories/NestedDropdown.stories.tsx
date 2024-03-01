import { Meta, StoryObj } from '@storybook/react'

import NestedDropdown from '../NestedDropdown'

const meta: Meta<typeof NestedDropdown> = {
  title: 'Components/Molecules/NestedDropdown',
  component: NestedDropdown
}

type Story = StoryObj<typeof NestedDropdown>

export const Primary: Story = {
  args: {
    data: [
      {
        country: 'USA',
        region: 'Region1'
      },
      {
        country: 'USA',
        region: 'Florida'
      },
      {
        country: 'USA',
        region: 'Iowa'
      },
      {
        country: 'Country2',
        region: 'Region1'
      },
      {
        country: 'Country2',
        region: 'Region2'
      },
      {
        country: 'Country2',
        region: 'Region3'
      },
      {
        country: 'Italy',
        region: 'Region1'
      },
      {
        country: 'Italy',
        region: 'Naples'
      },
      {
        country: 'Italy',
        region: 'Region3'
      }
    ],
    tiers: ['country', 'region'],
    listLabel: 'Countries of the World',
    handleSelectedItems: console.log
  }
}

export default meta
