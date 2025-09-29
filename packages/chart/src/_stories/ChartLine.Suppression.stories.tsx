import type { Meta, StoryObj } from '@storybook/react-vite'
import Chart from '../CdcChartComponent'
import suppressionConfig from './_mock/suppression_mock.json'
import SuppressedConfig from './_mock/bar-chart-suppressed.json'
const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Suppression',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const SuppressedLines: Story = {
  args: {
    config: suppressionConfig,
    isEditor: false
  }
}
export const SuppressedBars: Story = {
  args: {
    config: SuppressedConfig,
    isEditor: false
  }
}

export default meta
