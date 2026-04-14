import type { Meta, StoryObj } from '@storybook/react-vite'
import Chart from '../CdcChartComponent'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import brushDateLargeConfig from './_mock/brush_date_large.json'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'

// Helper: add a "Category" column to every row (duplicating for two categories) and add a dropdown filter
function addFilter(config: any) {
  const dataWithCategory = [
    ...config.data.map((row: any) => ({ ...row, Category: 'Group A' })),
    ...config.data.map((row: any) => ({ ...row, Category: 'Group B' }))
  ]
  return editConfigKeys(config, [
    { path: ['data'], value: dataWithCategory },
    {
      path: ['filters'],
      value: [
        {
          values: ['Group A', 'Group B'],
          filterStyle: 'dropdown',
          showDropdown: false,
          active: 'Group A',
          columnName: 'Category',
          orderedValues: ['Group A', 'Group B'],
          defaultValue: 'Group A'
        }
      ]
    }
  ])
}

const reversedDataConfig = editConfigKeys(brushDateLargeConfig, [
  { path: ['data'], value: [...brushDateLargeConfig.data].reverse() }
])

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/BrushSlider/Matrix/Date',
  component: Chart
}

export default meta

type Story = StoryObj<typeof Chart>

export const Default: Story = {
  args: { config: brushDateLargeConfig, isEditor: false },
  parameters: {
    docs: {
      description: {
        story: 'xAxis.type = "date", default chronological order. ~104 weekly data points.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Reversed: Story = {
  args: {
    config: editConfigKeys(brushDateLargeConfig, [{ path: ['xAxis', 'sortByRecentDate'], value: true }]),
    isEditor: false
  },
  parameters: {
    docs: {
      description: { story: 'xAxis.type = "date", sortByRecentDate = true. Most recent dates appear first.' }
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const ReversedDataOrder: Story = {
  args: { config: reversedDataConfig, isEditor: false },
  parameters: {
    docs: {
      description: {
        story:
          'Data array in reverse chronological order (newest-first in JSON). Verifies the brush sorts its domain correctly regardless of input order.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const WithFilter: Story = {
  args: { config: addFilter(brushDateLargeConfig), isEditor: false },
  parameters: {
    docs: {
      description: { story: 'xAxis.type = "date" with a dropdown filter applied.' }
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Reversed_WithFilter: Story = {
  args: {
    config: addFilter(editConfigKeys(brushDateLargeConfig, [{ path: ['xAxis', 'sortByRecentDate'], value: true }])),
    isEditor: false
  },
  parameters: {
    docs: {
      description: { story: 'sortByRecentDate = true with a dropdown filter.' }
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}
