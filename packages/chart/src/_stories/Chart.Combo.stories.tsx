// generate a combo chart story
import React from 'react'
import { Meta, Story } from '@storybook/react'
import CdcChart from '@cdc/chart/src/CdcChart'
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
