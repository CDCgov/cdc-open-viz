import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { assertVisualizationRendered, waitForPresence } from '@cdc/core/helpers/testing'
import Dashboard from '../CdcDashboard'
import TableDashboard from './_mock/standalone-table.json'

const meta: Meta<typeof Dashboard> = {
  title: 'Regression Tests/Misc/Data Table/Dashboard Embedding',
  component: Dashboard
}

export default meta
type Story = StoryObj<typeof Dashboard>

export const MISC003: Story = {
  name: 'MISC-003 — Data Table Dashboard Embedding',
  args: { config: TableDashboard, isEditor: false },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('.cove-visualization.type-table, table', canvasElement)
    expect(within(canvasElement).getByText('Hispanic or Latino')).toBeVisible()
  }
}
