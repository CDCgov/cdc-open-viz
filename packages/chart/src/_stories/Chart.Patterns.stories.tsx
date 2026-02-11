import type { Meta, StoryObj } from '@storybook/react'
import StackedPattern from './_mock/stacked-pattern-test.json'

import Chart from '../CdcChartComponent'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Patterns',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const Stacked_Bar_Pattern: Story = {
  args: {
    config: StackedPattern,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export default meta
