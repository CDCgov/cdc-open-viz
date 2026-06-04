import type { Meta, StoryObj } from '@storybook/react-vite'
import Chart from '../CdcChartComponent'
import brushEnabledConfig from './_mock/brush_enabled.json'
import pertussisConfig from './_mock/reported_pertussis_cases.json'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/BrushSlider',
  component: Chart,
  parameters: {
    docs: {
      description: {
        component:
          'Brush Slider feature allows users to interactively filter data by dragging handles along the x-axis. Only works with date/time-based x-axis and vertical orientation.'
      }
    }
  }
}

type Story = StoryObj<typeof Chart>

export const BrushSliderEnabled: Story = {
  args: {
    config: brushEnabledConfig,
    isEditor: false
  },
  parameters: {
    docs: {
      description: {
        story:
          'Line chart with brush slider enabled. Drag the handles on the slider below the chart to filter the data range.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const BrushDynamicYAxis: Story = {
  args: {
    config: {
      ...pertussisConfig,
      xAxis: {
        ...pertussisConfig.xAxis,
        brushActive: true,
        brushDynamicYAxis: true,
        brushDefaultRecentDateCount: undefined
      }
    },
    isEditor: false
  },
  parameters: {
    docs: {
      description: {
        story:
          'Reported pertussis cases (1922-2025) with Dynamic Y-Axis enabled. The Y-axis rescales to fit only the data visible in the current brush selection. Drag the brush to the 1970s-1990s low period (~1K-7K cases) then to the 1920s-1940s peak (~100K-265K cases) to see the Y-axis adjust dramatically.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export default meta
