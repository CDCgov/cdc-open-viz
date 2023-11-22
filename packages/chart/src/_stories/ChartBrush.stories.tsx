import type { Meta, StoryObj } from '@storybook/react'
import chartBrushConfig from './_mock/brush_mock.json'

import Chart from '../CdcChart'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Brush',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const Area_Brush: Story = {
  args: {
    config: chartBrushConfig
  }
}

export default meta
