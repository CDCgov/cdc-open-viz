import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import Chart from '../CdcChartComponent'
import pairedBar from './_mock/paired-bar.json'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Tooltip/Series Labels',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const Paired_Bar_Custom_Series_Labels: Story = {
  args: {
    config: {
      ...pairedBar,
      title: 'Paired Bar Custom Series Labels',
      series: pairedBar.series.map(series => ({
        ...series,
        name: series.dataKey === 'Male' ? 'Reported Males' : 'Reported Females'
      })),
      columns: {
        Male: { name: 'Male', label: 'Male Rate' },
        Female: { name: 'Female', label: 'Female Rate' }
      }
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)

    const firstBarTooltip = canvasElement.querySelector('.bar.group-1')?.getAttribute('data-tooltip-html') || ''
    const secondBarTooltip = canvasElement.querySelector('.bar.group-2')?.getAttribute('data-tooltip-html') || ''

    expect(firstBarTooltip).toContain('Male Rate:')
    expect(firstBarTooltip).not.toContain('Reported Males:')
    expect(secondBarTooltip).toContain('Female Rate:')
    expect(secondBarTooltip).not.toContain('Reported Females:')
    expect(`${firstBarTooltip}${secondBarTooltip}`).not.toContain('undefined:')
  }
}

export default meta
