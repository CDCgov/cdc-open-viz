import React from 'react'
import { Meta, Story } from '@storybook/react-vite'
import Chart from '../CdcChartComponent'
import exampleComboBarNonNumeric from './../../examples/feature/tests-date-exclusions/date-exclusions-config.json'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'

export default {
  title: 'Components/Templates/Chart/Anchors',
  component: Chart
} as Meta

type Story = StoryObj<typeof Chart>

export const Anchor_DateLinear: Story = {
  args: {
    config: exampleComboBarNonNumeric,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Anchor_Categorical: Story = {
  args: {
    config: editConfigKeys(exampleComboBarNonNumeric, [{ path: ['xAxis', 'type'], value: 'categorical' }])
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Anchor_Date_Time: Story = {
  args: {
    config: editConfigKeys(exampleComboBarNonNumeric, [{ path: ['xAxis', 'type'], value: 'date-time' }])
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}
