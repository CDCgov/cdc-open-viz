import type { Meta, StoryObj } from '@storybook/react-vite'

import Chart from '../CdcChart'
import forecastComboWithGaps from './_mock/forecast_combo_with_gaps.json'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Forecast Chart',
  component: Chart,
  parameters: {
    docs: {
      description: {
        component:
          'Forecast charts with gap handling. This story demonstrates how forecast charts properly handle gaps in data by filtering invalid values (NA) and splitting segments at gaps.'
      }
    }
  }
}

type Story = StoryObj<typeof Chart>

export const Forecast_Combo_With_Gaps: Story = {
  args: {
    config: forecastComboWithGaps,
    isEditor: true
  },
  parameters: {
    docs: {
      description: {
        story:
          'A combo chart with forecast confidence intervals that demonstrates proper gap handling. The forecast areas and lines are split into separate segments when gaps are detected, preventing misleading connections across missing data periods. Invalid data points (NA values) are automatically filtered out.'
      }
    }
  }
}

export default meta
