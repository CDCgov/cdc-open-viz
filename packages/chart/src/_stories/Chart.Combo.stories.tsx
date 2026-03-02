// generate a combo chart story
import React from 'react'
import { Meta, Story } from '@storybook/react'
import CdcChart from '@cdc/chart/src/CdcChart'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import comboChartConfig from './_mock/combo.json'

export default {
  title: 'Components/Templates/Chart/Combo Chart',
  component: CdcChart
} as Meta

const Template: Story = args => <CdcChart {...args} />

export const ComboChart = Template.bind({})
ComboChart.args = {
  config: comboChartConfig,
  isEditor: true
}
ComboChart.play = async ({ canvasElement }) => {
  await assertVisualizationRendered(canvasElement)
}

export const ComboChartWithBrush = Template.bind({})
ComboChartWithBrush.args = {
  config: editConfigKeys(comboChartConfig, [
    { path: ['xAxis', 'brushActive'], value: true },
    { path: ['xAxis', 'brushDefaultRecentDateCount'], value: 12 }
  ]),
  isEditor: true
}
ComboChartWithBrush.play = async ({ canvasElement }) => {
  await assertVisualizationRendered(canvasElement)
}
