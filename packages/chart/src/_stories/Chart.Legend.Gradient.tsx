import type { Meta, StoryObj } from '@storybook/react'
import chartGradientConfig from './_mock/legend.gradient_mock.json'

import Chart from '../CdcChart'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Legend',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const Legend_gradient: Story = {
  args: {
    config: chartGradientConfig
  }
}

export default meta
