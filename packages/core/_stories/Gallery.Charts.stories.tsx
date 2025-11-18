import type { Meta, StoryObj } from '@storybook/react-vite'
import Chart from '@cdc/chart'

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

// Bar Charts
export const Bar_Chart_Time_Based: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/Example_Bar_Chart.json" />
}

export const Bar_Chart_Categorical: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/example-category-bar-char.json" />
}

export const Bar_Chart_With_Highlighted_Value: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/bar-chart-with-highlighte.json" />
}

export const Bar_Chart_With_Confidence_Intervals: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/Example_Bar_CI_1.json" />
}

export const Bar_Chart_With_Suppressed_Values: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/bar-chart-with-suppressed-values.json" />
}

export const Horizontal_Bar_Chart: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/Horizontal_Bar_Chart_Viz.json" />
}

// Box and Whiskers Plots
export const Box_Plot_With_Outliers: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/box-plot-outliers.json" />
}

export const Horizontal_Box_Plot: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/horizontal-box-plot.json" />
}

// Bump Chart
export const Bump_Chart: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/bump-chart.json" />
}

// Combo Bar/Line Charts
export const Combo_Bar_And_Area: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/Combo_Bar_Line_Viz.json" />
}

export const Epi_Style_Bar_Chart: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/example-epi-style-bar-chart.json" />
}

// Deviation Bar Chart
export const Deviation_Bar_Chart: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/example-deviation-bar-chart.json" />
}

// Forecast Charts
export const Forecast_Chart_Single_CI: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/forecast-chart-one-CI.json" />
}

export const Forecast_Chart_Multiple_CIs: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/forecast-chart-2-CIs.json" />
}

// Line Charts
export const Line_Chart_Standard: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/Line_Chart_Viz.json" />
}

export const Line_Chart_With_Regions: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/Line_Chart_Regions_Viz.json" />
}

export const Line_Chart_Isolated: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/Line_Chart_Isolated.json" />
}

export const Line_Chart_Line_Weights: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/Line_Chart_Line_Weights.json" />
}

export const Line_Chart_With_Open_Circles: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/line-chart-with-open-circles.json" />
}

export const Line_Chart_With_Suppression: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/line-chart-with-suppression.json" />
}

// Lollipop Bar Chart
export const Lollipop_Horizontal_Bar_Chart: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/lollipop-style-horizontal-bar-chart.json" />
}

// Pie and Donut Charts
export const Pie_Chart: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/Example_Pie_viz.json" />
}

export const Donut_Chart: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/Donut-Chart.json" />
}

// Scatter Plots
export const Scatter_Plot_Negative_Trend: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/scatter-plot-negative-trend.json" />
}

export const Scatter_Plot_Multi_Series: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/scatter-plot-multi-series.json" />
}

export const Scatter_Plot_Nonlinear_Trend: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/scatter-plot-nonlinear-trend.json" />
}

// Sparklines
export const Sparkline_Dashboard: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/sparkline-dash.json" />
}

export const Sparkline_2016_Outreach_Var2: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/2016-outreach-2.json" />
}

export const Sparkline_2016_Outreach_Var3: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/2016-outreach-3.json" />
}

export const Sparkline_2016_Outreach_Var4: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/2016-outreach-4.json" />
}

// Stacked Area Charts
export const Stacked_Area_Chart: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/example-stacked-area-chart.json" />
}

export const Area_Chart_With_Annotations: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/area-chart-with-annotations_1.json" />
}

export const Area_Chart_With_Categorical_Axis: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/example-area-chart-with-cat-axis.json" />
}

// Stacked Bar Charts
export const Stacked_Horizontal_Bar_Chart: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/example-stacked-horizontal-chart.json" />
}

export const Stacked_Vertical_Bar_Chart: Story = {
  render: () => <Chart configUrl="https://www.cdc.gov/cove/examples/Stacked_Bar_Viz.json" />
}
