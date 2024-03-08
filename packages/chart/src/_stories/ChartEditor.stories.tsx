import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import Chart from '../CdcChart'
import pieChartExample from './_mock/pie_config.json'
import pieData from './_mock/pie_data.json'
import urlFilterExample from './_mock/url_filter.json'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Editor',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const Primary: Story = {
  args: {
    config: { ...pieChartExample, data: pieData, columns: { someCol: { name: 'females', showInViz: true } } },
    isEditor: true
  }
}

const sleep = ms => {
  return new Promise(r => setTimeout(r, ms))
}

export const Url_Filter: Story = {
  args: {
    config: urlFilterExample,
    isEditor: true
  }
}

export default meta
