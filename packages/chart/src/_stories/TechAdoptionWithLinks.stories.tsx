import config from './../../examples/tech-adoption-with-links.json'
import type { Meta, StoryObj } from '@storybook/react-vite'
import Chart from '../CdcChart'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Bar Chart/Horizontal Bar Chart Link Titles',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const horizontal_barchart_links: Story = {
  args: {
    config: config,
    isEditor: false
  }
}

export default meta
