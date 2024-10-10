import type { Meta, StoryObj } from '@storybook/react'
import Chart from '../CdcChart'
import longXLabelsConfig from './_mock/large_x_axis_labels.json'
import pairedBarConfig from './_mock/paired-bar.json'
import { editConfigKeys } from '../helpers/configHelpers'
import { ChartConfig } from '../types/ChartConfig'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Axis Titles',
  component: Chart
}

export default meta

type Story = StoryObj<typeof Chart>

export const Dynamic_Labels: Story = {
  args: {
    config: editConfigKeys(longXLabelsConfig, [{ path: ['xAxis', 'label'], value: 'This is the title' }])
  }
}

export const Rotated_Labels: StoryObj<{ config: ChartConfig; tickRotation: number }> = {
  args: {
    tickRotation: 0, // Default value
    config: longXLabelsConfig
  },
  argTypes: {
    tickRotation: {
      control: {
        type: 'range',
        min: 0,
        max: 90,
        step: 5
      }
    }
  },
  render: args => {
    // Create a new config object with the updated tickRotation
    const config = editConfigKeys(longXLabelsConfig, [
      { path: ['xAxis', 'label'], value: 'This is the title This is the title This is the title' },
      { path: ['xAxis', 'tickRotation'], value: args.tickRotation }
    ])

    return <Chart config={config} />
  }
}

export const Paired_Bar: Story = {
  args: {
    config: pairedBarConfig
  }
}
