import type { Meta, StoryObj } from '@storybook/react'
import CdcMap from '../CdcMap'
import defaultPatterns from './_mock/default-patterns.json'
import { editConfigKeys } from '@cdc/chart/src/helpers/configHelpers'

const meta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Patterns',
  component: CdcMap
}

type Story = StoryObj<typeof CdcMap>

export default meta

export const Default_Patterns: Story = {
  args: {
    config: defaultPatterns
  }
}

export const Default_Patterns_Dark: Story = {
  args: {
    isEditor: true,
    config: editConfigKeys(defaultPatterns, [
      { path: ['color'], value: 'bluegreen' },
      { path: ['legend', 'specialClasses'], value: [] }
    ])
  }
}
