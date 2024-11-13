import DynamicSeriesConfig from './_mock/dynamic_series_config.json'
import DynamicSeriesBarConfig from './_mock/dynamic_series_bar_config.json'
import { Meta, StoryObj } from '@storybook/react'
import Chart from '../CdcChart'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Dynamic Series',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const Line: Story = {
  args: {
    config: DynamicSeriesConfig,
    isEditor: false
  }
}

export const Bar: Story = {
  args: {
    config: DynamicSeriesBarConfig,
    isEditor: false
  }
}

export default meta
