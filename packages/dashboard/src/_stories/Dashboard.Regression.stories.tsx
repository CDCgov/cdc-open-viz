import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import {
  assertVisualizationRendered,
  getDisplayValue,
  performAndAssert,
  waitForOptionsToPopulate
} from '@cdc/core/helpers/testing'
import Dashboard from '../CdcDashboard'
import StaleDatasetKeysConfig from '../../examples/dashboard-stale-dataset-keys.json'
import MissingDatasetsSingleConfig from '../../examples/dashboard-missing-datasets-single.json'
import MissingDatasetsMultiConfig from '../../examples/dashboard-missing-datasets-multi.json'
import TieredFilterConfig from '../../examples/dashboard-tiered-filter-regression.json'
import MultiDashboardVersionConfig from '../../examples/dashboard-multi-dashboard-version-regression.json'

const meta: Meta<typeof Dashboard> = {
  title: 'Components/Pages/Dashboard/Regression Smoke',
  component: Dashboard
}

export default meta
type Story = StoryObj<typeof Dashboard>

const expectNoCrashText = (canvasElement: HTMLElement) => {
  expect(canvasElement.textContent).not.toContain('Cannot read properties of undefined')
  expect(canvasElement.textContent).not.toContain('Something went wrong')
}

export const Stale_Dataset_Keys_Are_Skipped_Safely: Story = {
  args: {
    config: StaleDatasetKeysConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    expectNoCrashText(canvasElement)
    expect(canvasElement.textContent).toContain('How to use this fixture')
    expect(canvasElement.textContent).toContain('Valid viz.dataKey')
    expect(getDisplayValue(canvasElement)).toContain('123')
  }
}

export const Missing_Datasets_Single_Dashboard_Loads_Safely: Story = {
  args: {
    config: MissingDatasetsSingleConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    expectNoCrashText(canvasElement)
    expect(canvasElement.textContent).toContain('Fixture notes')
    expect(canvasElement.textContent).toContain('Missing dataset')
    expect(canvasElement.textContent).toContain('Empty dataset')
  }
}

export const Missing_Datasets_Multi_Dashboard_Loads_Safely: Story = {
  args: {
    config: MissingDatasetsMultiConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()

    await assertVisualizationRendered(canvasElement)
    expectNoCrashText(canvasElement)
    expect(canvasElement.textContent).toContain('This tab has no datasets object entries for its chart.')

    const emptyDatasetTab = canvas.getByRole('link', { name: 'Empty Dataset' })
    await user.click(emptyDatasetTab)

    await performAndAssert(
      'Switch to multi-dashboard tab with empty dataset',
      () => canvasElement.textContent || '',
      async () => {},
      (_before, after) => after.includes('This sub-dashboard has a datasets object, but the dataset is empty.')
    )

    expectNoCrashText(canvasElement)
    expect(canvasElement.textContent).toContain('Please complete your selection to continue.')
  }
}

export const Tiered_Filtering_Applies_Sequentially: Story = {
  args: {
    config: TieredFilterConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()

    const regionFilter = (await canvas.findByLabelText('Region', { selector: 'select' })) as HTMLSelectElement
    const categoryFilter = (await canvas.findByLabelText('Category', { selector: 'select' })) as HTMLSelectElement
    const detailFilter = (await canvas.findByLabelText('Detail', { selector: 'select' })) as HTMLSelectElement

    const getOptions = (select: HTMLSelectElement) =>
      Array.from(select.options)
        .map(option => option.value)
        .filter(Boolean)

    const getState = () => ({
      regionSelected: regionFilter.value,
      categorySelected: categoryFilter.value,
      detailSelected: detailFilter.value,
      categoryOptions: getOptions(categoryFilter),
      detailOptions: getOptions(detailFilter),
      svgCount: canvasElement.querySelectorAll('svg').length,
      noDataVisible: !!canvas.queryByText('No Data Available')
    })

    await waitForOptionsToPopulate(regionFilter, 3)
    await waitForOptionsToPopulate(categoryFilter, 3)
    await waitForOptionsToPopulate(detailFilter, 3)

    const initialState = getState()
    expect(initialState.regionSelected).toBe('North')
    expect(initialState.categorySelected).toBe('Alpha')
    expect(initialState.detailSelected).toBe('One')
    expect(initialState.svgCount).toBeGreaterThan(0)
    expect(initialState.noDataVisible).toBe(false)

    await performAndAssert(
      'Change tier-1 filter and repopulate lower tiers',
      getState,
      async () => await user.selectOptions(regionFilter, ['South']),
      (_before, after) =>
        after.regionSelected === 'South' &&
        after.categoryOptions.includes('Alpha') &&
        after.categoryOptions.includes('Beta') &&
        after.categoryOptions.includes(after.categorySelected) &&
        after.detailOptions.includes(after.detailSelected) &&
        after.svgCount > 0 &&
        !after.noDataVisible
    )

    await performAndAssert(
      'Change tier-2 filter and observe the intermediate no-data state',
      getState,
      async () => await user.selectOptions(categoryFilter, ['Beta']),
      (_before, after) =>
        after.regionSelected === 'South' &&
        after.categorySelected === 'Beta' &&
        after.detailSelected === 'One' &&
        after.noDataVisible
    )

    await performAndAssert(
      'Change tier-3 filter to restore data after tier-2 change',
      getState,
      async () => await user.selectOptions(detailFilter, ['Two']),
      (_before, after) =>
        after.regionSelected === 'South' &&
        after.categorySelected === 'Beta' &&
        after.detailSelected === 'Two' &&
        after.svgCount > 0 &&
        !after.noDataVisible
    )
  }
}

export const Multi_Dashboard_Versioning_Remains_Stable: Story = {
  args: {
    config: MultiDashboardVersionConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()

    await assertVisualizationRendered(canvasElement)
    expectNoCrashText(canvasElement)

    await user.click(canvas.getByRole('link', { name: 'Explicit Version' }))

    await performAndAssert(
      'Switch to explicit-version sub-dashboard',
      () => canvasElement.textContent || '',
      async () => {},
      (_before, after) => after.includes('Because this sub-dashboard is already at')
    )

    await user.click(canvas.getByRole('link', { name: 'Fallback Version' }))

    await performAndAssert(
      'Switch to fallback-version sub-dashboard',
      () => canvasElement.textContent || '',
      async () => {},
      (_before, after) => after.includes('This tab intentionally omits its own version.')
    )

    expectNoCrashText(canvasElement)
    expect(canvasElement.textContent).toContain('Fallback version tab')
  }
}
