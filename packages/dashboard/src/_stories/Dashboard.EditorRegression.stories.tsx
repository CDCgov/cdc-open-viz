import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { performAndAssert, waitForPresence } from '@cdc/core/helpers/testing'
import CdcEditor from '@cdc/editor/src/CdcEditor'
import SharedFilterRowDeleteConfig from '../../examples/dashboard-shared-filter-row-delete-cleanup.json'

const meta: Meta<typeof CdcEditor> = {
  title: 'Regression Tests/Dashboards/Editor',
  component: CdcEditor
}

export default meta
type Story = StoryObj<typeof CdcEditor>

export const Delete_Rows_With_Stale_Shared_Filter_Targets: Story = {
  name: 'DASH-EDITOR-001 — Delete Rows with Stale Shared-Filter Targets',
  args: {
    config: SharedFilterRowDeleteConfig
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()

    await waitForPresence('.builder-row', canvasElement)

    const getState = () => ({
      rowCount: canvasElement.querySelectorAll('.builder-row').length,
      deleteButtonCount: canvasElement.querySelectorAll('[title="Delete Row"]').length,
      hasFiltersRow: (canvasElement.textContent || '').includes('dashboard-filters'),
      hasRowA: (canvasElement.textContent || '').includes('Row A'),
      hasRowB: (canvasElement.textContent || '').includes('Row B'),
      hasRowC: (canvasElement.textContent || '').includes('Row C'),
      noDataVisible: (canvasElement.textContent || '').includes('No Data Available'),
      crashTextVisible: (canvasElement.textContent || '').includes('Cannot read properties of undefined')
    })

    const initialState = getState()
    expect(initialState.rowCount).toBe(4)
    expect(initialState.deleteButtonCount).toBe(4)
    expect(initialState.hasRowA).toBe(true)
    expect(initialState.hasRowB).toBe(true)
    expect(initialState.hasRowC).toBe(true)
    expect(initialState.noDataVisible).toBe(false)
    expect(initialState.crashTextVisible).toBe(false)

    await performAndAssert(
      'Delete one shared-filter row without crashing',
      getState,
      async () => await user.click(canvas.getAllByTitle('Delete Row')[1]),
      (_before, after) =>
        after.rowCount === 3 &&
        after.deleteButtonCount === 3 &&
        !after.hasRowA &&
        after.hasRowB &&
        after.hasRowC &&
        !after.noDataVisible &&
        !after.crashTextVisible
    )

    await performAndAssert(
      'Delete another shared-filter row after indices shift',
      getState,
      async () => await user.click(canvas.getAllByTitle('Delete Row')[2]),
      (_before, after) =>
        after.rowCount === 2 &&
        after.deleteButtonCount === 2 &&
        after.hasRowB &&
        !after.hasRowC &&
        !after.noDataVisible &&
        !after.crashTextVisible
    )
  }
}

export const Author_Dashboard_And_Reapply_Configuration: Story = {
  name: 'DASH-EDITOR-003 — Author and Reload a Filtered Dashboard',
  args: { config: SharedFilterRowDeleteConfig },
  parameters: { test: { timeout: 30000 } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()

    await waitForPresence('.builder-grid', canvasElement)
    const originalRows = canvasElement.querySelectorAll('.builder-row').length
    const originalWidgets = canvasElement.querySelectorAll('.builder-row .widget').length
    expect(originalRows).toBe(4)
    expect(originalWidgets).toBeGreaterThan(0)
    expect(canvasElement.textContent).toContain('Dashboard Filters')

    await performAndAssert(
      'Add Row preserves placed visualizations and shared filters',
      () => ({
        rows: canvasElement.querySelectorAll('.builder-row').length,
        widgets: canvasElement.querySelectorAll('.builder-row .widget').length,
        hasFilters: (canvasElement.textContent || '').includes('Dashboard Filters')
      }),
      () => user.click(canvas.getByRole('button', { name: 'Add Row' })),
      (before, after) =>
        after.rows === before.rows + 1 && after.widgets === before.widgets && before.hasFilters && after.hasFilters
    )

    const advancedOptions = canvas.getAllByText('Advanced Options').at(-1)
    expect(advancedOptions).toBeTruthy()
    await user.click(advancedOptions!)
    const apply = await canvas.findByRole('button', { name: 'Apply Configuration Changes' })

    await performAndAssert(
      'Applying the authored configuration reloads rows, placements, and filters',
      () => ({
        rows: canvasElement.querySelectorAll('.builder-row').length,
        widgets: canvasElement.querySelectorAll('.builder-row .widget').length,
        hasFilters: (canvasElement.textContent || '').includes('Dashboard Filters')
      }),
      () => user.click(apply),
      (before, after) =>
        before.rows === originalRows + 1 &&
        after.rows === originalRows + 1 &&
        before.widgets === originalWidgets &&
        after.widgets === originalWidgets &&
        before.hasFilters &&
        after.hasFilters
    )

    await waitFor(() => expect(canvasElement.querySelectorAll('.builder-row')).toHaveLength(originalRows + 1))
  }
}
