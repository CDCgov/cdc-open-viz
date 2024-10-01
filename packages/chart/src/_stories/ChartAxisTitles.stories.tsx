import type { Meta, StoryObj } from '@storybook/react'
import Chart from '../CdcChart'
import longXLabelsConfig from './_mock/large_x_axis_labels.json'
import pairedBarConfig from './_mock/paired-bar.json'
import { editConfigKeys } from '../helpers/configHelpers'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Axis Titles',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const Dynamic_Labels: Story = {
  args: {
    config: editConfigKeys(longXLabelsConfig, [{ path: ['xAxis', 'label'], value: 'This is the title' }])
  }
}

export const Rotated_Labels: Story = {
  args: {
    config: editConfigKeys(longXLabelsConfig, [
      { path: ['xAxis', 'label'], value: 'This is the title' },
      { path: ['xAxis', 'tickRotation'], value: 45 }
    ])
  }
}

export const Paired_Bar: Story = {
  args: {
    config: pairedBarConfig
  }
}

export default meta
