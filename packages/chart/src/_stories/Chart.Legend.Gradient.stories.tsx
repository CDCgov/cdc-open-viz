import type { Meta, StoryObj } from '@storybook/react'
import chartGradientConfig from './_mock/legend.gradient_mock.json'
import chartGroupedLagend from './_mock/legend_groupBy_mock.json'
import SimplifiedLineConfig from './_mock/simplified_line.json'

import Chart from '../CdcChartComponent'
import { editConfigKeys } from '../helpers/configHelpers'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Legend',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const Legend_Gradient_Smooth: Story = {
  args: {
    config: chartGradientConfig
  }
}
export const Legend_Group_By: Story = {
  args: {
    config: chartGroupedLagend
  }
}

export const Legend_Gradient_Linear_Blocks: Story = {
  args: {
    config: editConfigKeys(chartGradientConfig, [{ path: ['legend', 'subStyle'], value: 'linear blocks' }])
  }
}

export const Labels_On_Line_Legend_On_Top: Story = {
  args: {
    config: editConfigKeys(chartGradientConfig, [{ path: ['yAxis', 'labelsAboveGridlines'], value: true }])
  }
}

export const Legend_On_Right: Story = {
  args: {
    config: SimplifiedLineConfig
  }
}

export const Legend_On_Right_With_Box: Story = {
  args: {
    config: editConfigKeys(SimplifiedLineConfig, [{ path: ['legend', 'hideBorder'], value: false }])
  }
}

export const Legend_Gradient_With_box: Story = {
  args: {
    config: editConfigKeys(chartGradientConfig, [{ path: ['legend', 'hideBorder'], value: false }])
  }
}

export const Legend_Gradient_With_Text: Story = {
  args: {
    config: editConfigKeys(chartGradientConfig, [
      { path: ['legend', 'label'], value: 'Title' },
      { path: ['legend', 'description'], value: 'Description' },
      { path: ['legend', 'hideBorder'], value: false }
    ])
  }
}
export const Legend_Gradient_Wrapping_Label: Story = {
  args: {
    config: JSON.parse(
      JSON.stringify(
        editConfigKeys(chartGradientConfig, [
          { path: ['legend', 'title'], value: 'Title' },
          { path: ['legend', 'description'], value: 'Description' },
          { path: ['legend', 'hideBorder'], value: false }
        ])
      ).replace(/Data 1/g, 'This is a long string that should wrap')
    )
  }
}

export default meta
