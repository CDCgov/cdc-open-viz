import type { Meta, StoryObj } from '@storybook/react-vite'
import Chart from '../CdcChartComponent'
import configAll from './_mock/line_chart_quadrant_angles.json'
import configQ1 from './_mock/line_chart_angle_q1_steep_upward.json'
import configQ2 from './_mock/line_chart_angle_q2_gentle_downward.json'
import configQ3 from './_mock/line_chart_angle_q3_steep_downward.json'
import configQ4 from './_mock/line_chart_angle_q4_gentle_upward.json'
import configNearZeroRise from './_mock/line_chart_angle_near_zero_rise.json'
import configNearZeroFall from './_mock/line_chart_angle_near_zero_fall.json'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/QuadrantAngles',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const AllQuadrants: Story = {
  args: {
    config: configAll,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Q1SteepUpward: Story = {
  args: {
    config: configQ1,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Q2GentleDownward: Story = {
  args: {
    config: configQ2,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Q3SteepDownward: Story = {
  args: {
    config: configQ3,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Q4GentleUpward: Story = {
  args: {
    config: configQ4,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const NearZeroRise: Story = {
  args: {
    config: configNearZeroRise,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const NearZeroFall: Story = {
  args: {
    config: configNearZeroFall,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export default meta
