// generate a combo chart story
import React from 'react'
import { Meta, Story } from '@storybook/react'
import CdcChart from '@cdc/chart/src/CdcChart'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
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

export const ComboChartWithBrush = Template.bind({})
ComboChartWithBrush.args = {
  config: editConfigKeys(comboChartConfig, [
    { path: ['xAxis', 'brushActive'], value: true },
    { path: ['xAxis', 'brushDefaultRecentDateCount'], value: 12 }
  ]),
  isEditor: true
}
