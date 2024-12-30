import React from 'react'
import { Meta, Story } from '@storybook/react'
import Chart from '../CdcChart.Component'
import exampleComboBarNonNumeric from './../../examples/feature/tests-date-exclusions/date-exclusions-config.json'
import { editConfigKeys } from '../helpers/configHelpers'

export default {
  title: 'Components/Templates/Chart/Anchors',
  component: Chart
} as Meta

type Story = StoryObj<typeof Chart>

export const Anchor_DateLinear: Story = {
  args: {
    config: exampleComboBarNonNumeric,
    isEditor: false
  }
}

export const Anchor_Categorical: Story = {
  args: {
    config: editConfigKeys(exampleComboBarNonNumeric, [{ path: ['xAxis', 'type'], value: 'categorical' }])
  }
}

export const Anchor_Date_Time: Story = {
  args: {
    config: editConfigKeys(exampleComboBarNonNumeric, [{ path: ['xAxis', 'type'], value: 'date-time' }])
  }
}
