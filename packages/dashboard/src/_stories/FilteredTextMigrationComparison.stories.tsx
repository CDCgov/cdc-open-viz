import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import CdcDashboard from '../CdcDashboard'
import { assertVisualizationRendered } from '@cdc/core/helpers/testing'
import { expect, waitFor } from 'storybook/test'

const comparisonData = [
  {
    State: 'CA',
    Message: 'Representative filtered text output'
  }
]

const meta: Meta = {
  title: 'Components/Pages/Dashboard/Filtered Text Migration Comparison'
}

type Story = StoryObj

export const Legacy_Dashboard_Config_Migrates_To_Markup_Include: Story = {
  render: () => (
    <CdcDashboard
      config={{
        type: 'dashboard',
        version: '4.26.4',
        dashboard: {
          sharedFilters: []
        },
        rows: [{ columns: [{ width: 12, widget: 'legacy-filtered-text' }] }],
        visualizations: {
          'legacy-filtered-text': {
            uid: 'legacy-filtered-text',
            type: 'filtered-text',
            visualizationType: 'filtered-text',
            title: 'Legacy filtered text',
            textColumn: 'Message',
            dataKey: 'comparison',
            filters: [{ columnName: 'State', columnValue: 'CA' }]
          }
        },
        datasets: {
          comparison: {
            data: comparisonData
          }
        },
        table: {
          show: false
        }
      }}
      isEditor={false}
    />
  ),
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitFor(() => {
      expect(canvasElement.textContent).toContain('Legacy filtered text')
      expect(canvasElement.textContent).toContain('Representative filtered text output')
    })
  }
}

export default meta
