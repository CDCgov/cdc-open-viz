import type { Meta, StoryObj } from '@storybook/react'

import Chart from '../CdcChart'

import pieChartExample from './_mock/pie_config.json'
import pieData from './_mock/pie_data.json'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Editor/Chart',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const Primary: Story = {
  args: {
    config: { ...pieChartExample, data: pieData, columns: { someCol: { name: 'females', showInViz: true } } },
    isEditor: true
  }
}

export default meta
