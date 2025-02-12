import type { Meta, StoryObj } from '@storybook/react'
import Chart from '../CdcChartComponent'
import { editConfigKeys } from '../helpers/configHelpers'
import scatterPlotDownloadImage from './_mock/scatterplot-image-download.json'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Filters',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const Tab_Simple: Story = {
  args: {
    config: editConfigKeys(scatterPlotDownloadImage, [{ path: ['filters', '0', 'filterStyle'], value: 'tab-simple' }])
  }
}

export default meta
