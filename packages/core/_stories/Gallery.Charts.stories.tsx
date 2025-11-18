import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, expect } from 'storybook/test'
import Chart from '@cdc/chart'

// Fallback step function for test descriptions
const step = async (description: string, fn: () => Promise<void> | void) => {
  console.log(`▶ ${description}`)
  await fn()
  console.log(`✓ ${description}`)
}

const meta: Meta = {
  title: 'Gallery/Charts',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Chart visualization examples from the CDC COVE Gallery'
      }
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Chart>

// Helper function to test chart rendering
const testChartRendering = async (canvasElement: HTMLElement, storyName: string) => {
  const canvas = within(canvasElement)

  await step('Wait for chart to render', async () => {
    const svgElement = await canvas.findByRole('img', { hidden: true }, { timeout: 10000 })
    expect(svgElement).toBeInTheDocument()
  })

  await step('Verify chart SVG is present', async () => {
    const chartSvg = canvasElement.querySelector('svg')
    expect(chartSvg).toBeInTheDocument()
  })

  await step('Verify COVE module wrapper is present', async () => {
    const coveModule = canvasElement.querySelector('.cdc-open-viz-module')
    expect(coveModule).toBeInTheDocument()
  })

  console.log(` ${storyName} chart rendered successfully`)
}

// Bar Charts
export const Bar_Chart_Time_Based: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/Example_Bar_Chart.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Bar Chart Time Based')
  }
}

export const Bar_Chart_Categorical: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/example-category-bar-char.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Bar Chart Categorical')
  }
}

export const Bar_Chart_With_Highlighted_Value: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/bar-chart-with-highlighte.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Bar Chart With Highlighted Value')
  }
}

export const Bar_Chart_With_Confidence_Intervals: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/Example_Bar_CI_1.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Bar Chart With Confidence Intervals')
  }
}

export const Bar_Chart_With_Suppressed_Values: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/bar-chart-with-suppressed-values.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Bar Chart With Suppressed Values')
  }
}

export const Horizontal_Bar_Chart: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/Horizontal_Bar_Chart_Viz.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Horizontal Bar Chart')
  }
}

// Box and Whiskers Plots
export const Box_Plot_With_Outliers: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/box-plot-outliers.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Box Plot With Outliers')
  }
}

export const Horizontal_Box_Plot: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/horizontal-box-plot.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Horizontal Box Plot')
  }
}

// Bump Chart
export const Bump_Chart: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/bump-chart.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Bump Chart')
  }
}

// Combo Bar/Line Charts
export const Combo_Bar_And_Area: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/Combo_Bar_Line_Viz.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Combo Bar And Area')
  }
}

export const Epi_Style_Bar_Chart: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/example-epi-style-bar-chart.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Epi Style Bar Chart')
  }
}

// Deviation Bar Chart
export const Deviation_Bar_Chart: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/example-deviation-bar-chart.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Deviation Bar Chart')
  }
}

// Forecast Charts
export const Forecast_Chart_Single_CI: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/forecast-chart-one-CI.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Forecast Chart Single CI')
  }
}

export const Forecast_Chart_Multiple_CIs: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/forecast-chart-2-CIs.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Forecast Chart Multiple CIs')
  }
}

// Line Charts
export const Line_Chart_Standard: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/Line_Chart_Viz.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Line Chart Standard')
  }
}

export const Line_Chart_With_Regions: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/Line_Chart_Regions_Viz.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Line Chart With Regions')
  }
}

export const Line_Chart_Isolated: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/Line_Chart_Isolated.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Line Chart Isolated')
  }
}

export const Line_Chart_Line_Weights: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/Line_Chart_Line_Weights.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Line Chart Line Weights')
  }
}

export const Line_Chart_With_Open_Circles: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/line-chart-with-open-circles.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Line Chart With Open Circles')
  }
}

export const Line_Chart_With_Suppression: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/line-chart-with-suppression.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Line Chart With Suppression')
  }
}

// Lollipop Bar Chart
export const Lollipop_Horizontal_Bar_Chart: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/lollipop-style-horizontal-bar-chart.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Lollipop Horizontal Bar Chart')
  }
}

// Pie and Donut Charts
export const Pie_Chart: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/Example_Pie_viz.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Pie Chart')
  }
}

export const Donut_Chart: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/Donut-Chart.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Donut Chart')
  }
}

// Scatter Plots
export const Scatter_Plot_Negative_Trend: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/scatter-plot-negative-trend.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Scatter Plot Negative Trend')
  }
}

export const Scatter_Plot_Multi_Series: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/scatter-plot-multi-series.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Scatter Plot Multi Series')
  }
}

export const Scatter_Plot_Nonlinear_Trend: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/scatter-plot-nonlinear-trend.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Scatter Plot Nonlinear Trend')
  }
}

// Sparklines
export const Sparkline_Dashboard: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/sparkline-dash.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Sparkline Dashboard')
  }
}

export const Sparkline_2016_Outreach_Var2: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/2016-outreach-2.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Sparkline 2016 Outreach Var2')
  }
}

export const Sparkline_2016_Outreach_Var3: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/2016-outreach-3.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Sparkline 2016 Outreach Var3')
  }
}

export const Sparkline_2016_Outreach_Var4: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/2016-outreach-4.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Sparkline 2016 Outreach Var4')
  }
}

// Stacked Area Charts
export const Stacked_Area_Chart: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/example-stacked-area-chart.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Stacked Area Chart')
  }
}

export const Area_Chart_With_Annotations: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/area-chart-with-annotations_1.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Area Chart With Annotations')
  }
}

export const Area_Chart_With_Categorical_Axis: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/example-area-chart-with-cat-axis.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Area Chart With Categorical Axis')
  }
}

// Stacked Bar Charts
export const Stacked_Horizontal_Bar_Chart: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/example-stacked-horizontal-chart.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Stacked Horizontal Bar Chart')
  }
}

export const Stacked_Vertical_Bar_Chart: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/Stacked_Bar_Viz.json" />,
  play: async ({ canvasElement }) => {
    await testChartRendering(canvasElement, 'Stacked Vertical Bar Chart')
  }
}
