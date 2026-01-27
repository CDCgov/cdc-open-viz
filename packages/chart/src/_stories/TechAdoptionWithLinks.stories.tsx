import config from './../../examples/tech-adoption-with-links.json'
import type { Meta, StoryObj } from '@storybook/react-vite'
import Chart from '../CdcChart'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Bar Chart/Horizontal Bar Chart Link Titles',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const horizontal_barchart_links: Story = {
  args: {
    config: config,
    isEditor: true
  }
}

export const horizontal_barchart_links_single_series: Story = {
  args: {
    config: editConfigKeys(config, [{ path: ['tooltips', 'singleSeries'], value: true }]),
    isEditor: true
  }
}

export default meta
