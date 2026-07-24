import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import Chart from '../CdcChart'
import pieConfig from './_mock/pie_with_data.json'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import { assertVisualizationRendered, waitForPresence } from '@cdc/core/helpers/testing'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Pie Labels',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const CategoryPercentageLabels: Story = {
  args: {
    config: editConfigKeys(pieConfig, [
      { path: ['labels'], value: true },
      { path: ['legend', 'hide'], value: true }
    ]),
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('.pie-label', canvasElement)
    expect(canvasElement.querySelector('line')).toBeNull()
  }
}

export const DonutCategoryPercentageLabels: Story = {
  args: {
    config: editConfigKeys(pieConfig, [
      { path: ['labels'], value: true },
      { path: ['legend', 'hide'], value: true },
      { path: ['pieType'], value: 'Donut' }
    ]),
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('.pie-label--outside', canvasElement)
    expect(canvasElement.querySelector('.pie-label--inside')).toBeNull()
    expect(canvasElement.querySelector('line')).toBeNull()
  }
}

export default meta
