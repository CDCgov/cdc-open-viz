import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { performAndAssert, waitForPresence } from '@cdc/core/helpers/testing'
import CdcEditor from '@cdc/editor/src/CdcEditor'
import SharedFilterRowDeleteConfig from '../../examples/dashboard-shared-filter-row-delete-cleanup.json'
import UneditableConfig from '../../examples/private/uneditable.json'

const meta: Meta<typeof CdcEditor> = {
  title: 'Components/Pages/Dashboard/Regression Editor',
  component: CdcEditor
}

export default meta
type Story = StoryObj<typeof CdcEditor>

export const Delete_Rows_With_Stale_Shared_Filter_Targets: Story = {
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

export const Multi_Dashboard_Private_Tab_Charts_Open_Subeditors: Story = {
  args: {
    config: UneditableConfig
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()
    const sarsCov2ChartTitle = 'SARS-CoV-2 variant proportions in nasal swabs samples over time'

    try {
      await waitForPresence('.builder-grid', canvasElement)

      if (!(canvasElement.textContent || '').includes(sarsCov2ChartTitle)) {
        await user.click(canvas.getByText('SARS-CoV-2'))
      }

      await performAndAssert(
        'Switch to SARS-CoV-2 dashboard tab',
        () => canvasElement.textContent || '',
        async () => {},
        (_before, after) => after.includes(sarsCov2ChartTitle)
      )

      const openSubeditorForWidget = async (title: string) => {
        const titleElement = Array.from(canvasElement.querySelectorAll('.widget__title')).find(
          element => element.textContent?.trim() === title
        )
        const widget = titleElement?.closest('.widget')
        expect(widget).toBeTruthy()

        const configureButton = widget!.querySelector('[title="Configure Visualization"]') as HTMLElement | null
        expect(configureButton).toBeTruthy()

        await performAndAssert(
          `Open sub-editor for ${title}`,
          () => ({
            hasBackButton: (canvasElement.textContent || '').includes('Back to Dashboard'),
            hasBuilderGrid: !!canvasElement.querySelector('.builder-grid'),
            hasCrashText:
              (canvasElement.textContent || '').includes('Cannot read properties of undefined') ||
              (canvasElement.textContent || '').includes('Something went wrong')
          }),
          async () => await user.click(configureButton!),
          (_before, after) => after.hasBackButton && !after.hasBuilderGrid && !after.hasCrashText
        )

        await user.click(canvas.getByText('Back to Dashboard'))
        await waitForPresence('.builder-grid', canvasElement)
      }

      await openSubeditorForWidget('Traveler SARS-CoV-2 positivity over time')
      await openSubeditorForWidget('Traveler SARS-CoV-2 positivity over time (GAM)')
      await openSubeditorForWidget(sarsCov2ChartTitle)
      await openSubeditorForWidget('SARS-CoV-2 concentrations in triturator samples over time (GAM)')
      await openSubeditorForWidget('SARS-CoV-2 variant distribution in triturator samples over time')
    } finally {
      const url = new URL(window.location.href)
      url.searchParams.delete('cove-tab')
      window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`)
    }
  }
}
