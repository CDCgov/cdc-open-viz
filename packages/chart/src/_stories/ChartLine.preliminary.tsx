import type { Meta, StoryObj } from '@storybook/react'
import chartLinepreliminary from './_mock/preliminary_mock.json'

import Chart from '../CdcChart'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Line/Preliminary',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const Line_Chart: Story = {
  args: {
    config: chartLinepreliminary
  }
}

export default meta
