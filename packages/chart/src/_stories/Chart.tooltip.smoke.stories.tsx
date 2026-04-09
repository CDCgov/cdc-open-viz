import type { Meta, StoryObj } from '@storybook/react-vite'

import Chart from '../CdcChartComponent'
import barChartStacked from './_mock/barchart_labels.mock.json'
import barChartSuppressed from './_mock/bar-chart-suppressed.json'
import simplifiedLine from './_mock/simplified_line.json'
import scatterPlot from './_mock/scatterplot_mock.json'
import gradientLegend from './_mock/legend.gradient_mock.json'
import patternLegend from './_mock/stacked-pattern-test.json'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
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
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
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
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Line_Tooltip_Markers: Story = {
  args: {
    config: {
      ...simplifiedLine,
      title: 'Line Tooltip Markers'
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Scatter_Tooltip_Markers: Story = {
  args: {
    config: {
      ...scatterPlot,
      title: 'Scatter Tooltip Markers'
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const No_Markers_When_Legend_Hidden: Story = {
  args: {
    config: {
      ...simplifiedLine,
      title: 'Tooltip Without Markers When Legend Hidden',
      legend: {
        ...simplifiedLine.legend,
        hide: true
      }
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const No_Markers_For_Gradient_Legend: Story = {
  args: {
    config: {
      ...gradientLegend,
      title: 'Tooltip Without Markers For Gradient Legend'
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Pattern_Legend_Uses_Color_Markers: Story = {
  args: {
    config: {
      ...patternLegend,
      title: 'Tooltip Color Markers For Pattern Legend'
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export default meta
