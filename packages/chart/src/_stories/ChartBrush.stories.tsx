import type { Meta, StoryObj } from '@storybook/react-vite'
import Chart from '../CdcChartComponent'
import brushEnabledConfig from './_mock/brush_enabled.json'

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
  }
}

export const BrushSliderInEditor: Story = {
  args: {
    config: brushEnabledConfig,
    isEditor: true
  },
  parameters: {
    docs: {
      description: {
        story:
          'Brush slider in editor mode. You can toggle the "Brush Slider" checkbox in the X-Axis section to enable/disable it.'
      }
    }
  }
}

export default meta
