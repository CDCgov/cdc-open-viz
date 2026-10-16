import type { Meta, StoryObj } from '@storybook/react-vite'
import Chart from '../CdcChartComponent'
import sankeyConfig from './_mock/sankey_mock.json'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Sankey',
  component: Chart
}

export default meta
type Story = StoryObj<typeof Chart>

export const Sankey_Basic: Story = {
  args: {
    config: {
      ...sankeyConfig,
      title: 'Patient Care Pathway'
    },
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Sankey_WithStoryNodes: Story = {
  args: {
    config: {
      ...sankeyConfig,
      title: 'Care Pathway with Story Nodes',
      data: [
        {
          links: sankeyConfig.data[0].links,
          tooltips: true,
          storyNodeText: [
            { StoryNode: 'Screened', segmentTextBefore: 'Total Screened', segmentTextAfter: 'participants' },
            { StoryNode: 'Recovered', segmentTextBefore: 'Fully', segmentTextAfter: 'patients' }
          ]
        }
      ]
    },
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Sankey_TooltipsDisabled: Story = {
  args: {
    config: {
      ...sankeyConfig,
      title: 'Sankey — Tooltips Disabled',
      enableTooltips: false
    },
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}
