import type { Meta, StoryObj } from '@storybook/react-vite'
import Chart from '../CdcChartComponent'
import { editConfigKeys } from '@cdc/core/helpers/configHelpers'
import brushEnabledConfig from './_mock/brush_enabled.json'
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

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/BrushSlider/Matrix/DateTime',
  component: Chart
}

export default meta

type Story = StoryObj<typeof Chart>

export const Default: Story = {
  args: { config: brushEnabledConfig, isEditor: false },
  parameters: {
    docs: {
      description: { story: 'xAxis.type = "date-time", default chronological order.' }
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const Reversed: Story = {
  args: {
    config: editConfigKeys(brushEnabledConfig, [{ path: ['xAxis', 'sortByRecentDate'], value: true }]),
    isEditor: false
  },
  parameters: {
    docs: {
      description: { story: 'xAxis.type = "date-time", sortByRecentDate = true.' }
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}

export const WithFilter: Story = {
  args: { config: addFilter(brushEnabledConfig), isEditor: false },
  parameters: {
    docs: {
      description: { story: 'xAxis.type = "date-time" with a dropdown filter applied.' }
    }
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
  }
}
