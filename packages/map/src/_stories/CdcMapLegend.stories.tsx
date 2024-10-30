import type { Meta, StoryObj } from '@storybook/react'
import CdcMap from '../CdcMap'
import SingleStateWithFilters from './_mock/DEV-8942.json'
import UsGradient from './_mock/usa-state-gradient.json'
import { editConfigKeys } from '@cdc/chart/src/helpers/configHelpers'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Legend',
  component: CdcMap
}

type Story = StoryObj<typeof CdcMap>

export default meta

export const Single_State_With_Filters: Story = {
  args: {
    config: editConfigKeys(SingleStateWithFilters, [
      { path: ['legend', 'style'], value: 'gradient' },
      { path: ['legend', 'position'], value: 'top' },
      { path: ['legend', 'hideBorder'], value: true },
      { path: ['legend', 'title'], value: '' },
      { path: ['legend', 'description'], value: '' }
    ])
  }
}

export const Gradient: Story = {
  args: {
    config: UsGradient
  }
}

export const Gradient_Smooth: Story = {
  args: {
    config: editConfigKeys(UsGradient, [{ path: ['legend', 'subStyle'], value: 'smooth' }])
  }
}
export const Gradient_With_Box: Story = {
  args: {
    config: editConfigKeys(UsGradient, [
      { path: ['legend', 'subStyle'], value: 'linear blocks' },
      { path: ['legend', 'hideBorder'], value: false }
    ])
  }
}
