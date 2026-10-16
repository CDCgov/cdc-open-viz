import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import Chart from '../CdcChartComponent'
import longXLabelsConfig from './_mock/large_x_axis_labels.json'
import comboConfig from './_mock/combo.json'
import pairedBarConfig from './_mock/paired-bar.json'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import { ChartConfig } from '../types/ChartConfig'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Axis Titles',
  component: Chart
}

export default meta

type Story = StoryObj<typeof Chart>

const rightAxisVisibilityUpdates = [
  { path: ['series', '4', 'axis'], value: 'Right' },
  { path: ['yAxis', 'rightAxisSize'], value: 160 },
  { path: ['yAxis', 'rightHideAxis'], value: false },
  { path: ['yAxis', 'rightHideLabel'], value: false },
  { path: ['yAxis', 'rightHideTicks'], value: false }
]

const expectRightAxisTicks = (canvasElement: HTMLElement) => {
  const rightAxisTickLabels = canvasElement.querySelectorAll('.right-axis .vx-axis-tick text')

  expect(rightAxisTickLabels.length).toBeGreaterThan(0)
}

export const Dynamic_Labels: Story = {
  args: {
    config: editConfigKeys(longXLabelsConfig, [{ path: ['xAxis', 'label'], value: 'This is the title' }])
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
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
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Paired_Bar: Story = {
  args: {
    config: pairedBarConfig
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Top_Y_Axis_Title: Story = {
  args: {
    config: editConfigKeys(longXLabelsConfig, [
      { path: ['yAxis', 'label'], value: 'Number of emergency department visits' },
      { path: ['runtime', 'yAxis', 'label'], value: 'Number of emergency department visits' },
      { path: ['yAxis', 'titlePlacement'], value: 'top' }
    ])
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Combo_Both_Top_Y_Axis_Titles: Story = {
  args: {
    config: editConfigKeys(comboConfig, [
      ...rightAxisVisibilityUpdates,
      { path: ['yAxis', 'label'], value: 'Cases' },
      { path: ['runtime', 'yAxis', 'label'], value: 'Cases' },
      { path: ['yAxis', 'titlePlacement'], value: 'top' },
      { path: ['yAxis', 'rightLabel'], value: 'Rate' },
      { path: ['yAxis', 'rightTitlePlacement'], value: 'top' }
    ])
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    expectRightAxisTicks(canvasElement)
  }
}

export const Combo_Side_Right_Y_Axis_Title: Story = {
  args: {
    config: editConfigKeys(comboConfig, [
      ...rightAxisVisibilityUpdates,
      { path: ['legend', 'position'], value: 'bottom' },
      { path: ['yAxis', 'rightLabel'], value: 'Rate per 100,000' },
      { path: ['yAxis', 'rightTitlePlacement'], value: 'side' }
    ])
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    expectRightAxisTicks(canvasElement)
  }
}
