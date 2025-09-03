import type { Meta, StoryObj } from '@storybook/react'
import CdcMap from '../CdcMap'
import UsGradient from './_mock/usa-state-gradient.json'
import WastewaterMap from './_mock/wastewater-map.json'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Legend/Gradient',
  component: CdcMap
}

type Story = StoryObj<typeof CdcMap>

export default meta

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

export const Gradient_With_Space: Story = {
  args: {
    config: editConfigKeys(UsGradient, [
      { path: ['legend', 'subStyle'], value: 'linear blocks' },
      { path: ['legend', 'spaces'], value: '2' },
      { path: ['legend', 'hideBorder'], value: false }
    ])
  }
}

export const Gradient_With_Text: Story = {
  args: {
    config: editConfigKeys(UsGradient, [
      { path: ['legend', 'title'], value: 'Title' },
      { path: ['legend', 'description'], value: 'Description' },
      { path: ['legend', 'hideBorder'], value: true }
    ])
  }
}
export const Gradient_With_Text_And_Box: Story = {
  args: {
    config: editConfigKeys(UsGradient, [
      { path: ['legend', 'title'], value: 'Title' },
      { path: ['legend', 'description'], value: 'Description' },
      { path: ['legend', 'hideBorder'], value: false }
    ])
  }
}

export const Gradient_With_Patterns: Story = {
  args: {
    config: WastewaterMap
  }
}
export const Gradient_Reversed: Story = {
  args: {
    config: editConfigKeys(WastewaterMap, [
      {
        path: ['customColors'],
        value: undefined
      },
      { path: ['legend', 'specialClasses'], value: ['No Data'] },
      { path: ['legend', 'showSpecialClassesLast'], value: false },
      {
        path: ['legend', 'categoryValuesOrder'],
        value: ['No Data', 'Minimal', 'Low', 'Moderate', 'High', 'Very High']
      },
      { path: ['color'], value: 'greenblue' }
    ])
  }
}
