import type { Meta, StoryObj } from '@storybook/react'
import suppressMock from './_mock/suppress_mock.json'

import Chart from '../CdcChart'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Suppress',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const Horizontal_Chart: Story = {
  args: {
    config: suppressMock
  }
}

export default meta
