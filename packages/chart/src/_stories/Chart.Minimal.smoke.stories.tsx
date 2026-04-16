import type { Meta, StoryObj } from '@storybook/react-vite'
import Chart from '../CdcChart'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import MinimalExampleConfig from '../../examples/minimal-example.json'
import { expect } from 'storybook/test'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Minimal Config',
  component: Chart
}

export default meta
type Story = StoryObj<typeof Chart>

export const Minimal_Bar_Chart: Story = {
  args: {
    config: MinimalExampleConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    expect(canvasElement.textContent).toContain('Minimal Chart')
    expect(canvasElement.textContent).toContain('A')
  }
}
