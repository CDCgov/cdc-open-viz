import type { Meta, StoryObj } from '@storybook/react-vite'

import Chart from '../CdcChartComponent'
import barChartStacked from './_mock/barchart_labels.mock.json'
import barChartSuppressed from './_mock/bar-chart-suppressed.json'
const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Tooltip',
  component: Chart
}

type Story = StoryObj<typeof Chart>

export const Increased_Tooltip_Range: Story = {
  args: {
    config: {
      ...barChartSuppressed,
      title: 'Increased Tooltip hovers range for missing and suppressed bars',
      tooltips: {
        ...barChartSuppressed.tooltips,
        singleSeries: true
      }
    }
  }
}

export const Additional_Tooltip: Story = {
  args: {
    config: {
      ...barChartStacked,
      title: 'Stacked Bar Chart with Additional Tooltip Column',
      showTitle: true,
      visualizationSubType: 'stacked',
      series: [
        ...barChartStacked.series,
        {
          dataKey: 'White, non-Hispanic',
          type: 'Bar',
          axis: 'Left',
          tooltip: true
        }
      ],
      columns: {
        'American Indian/Alaska Native': {
          label: 'Additional Tooltip',
          dataTable: true,
          tooltips: true,
          prefix: '',
          suffix: '',
          forestPlot: false,
          startingPoint: '0',
          forestPlotAlignRight: false,
          roundToPlace: 0,
          commas: true,
          showInViz: false,
          forestPlotStartingPoint: 0,
          name: 'American Indian/Alaska Native',
          series: 'Hispanic'
        }
      }
    }
  }
}

export default meta
