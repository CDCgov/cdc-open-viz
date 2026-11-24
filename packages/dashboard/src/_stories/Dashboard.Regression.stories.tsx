import type { Meta, StoryObj } from '@storybook/react-vite'
import { Markdown } from '@storybook/addon-docs/blocks'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { assertVisualizationRendered, performAndAssert, waitForOptionsToPopulate } from '@cdc/core/helpers/testing'
import cloneDeep from 'lodash/cloneDeep'
import Dashboard from '../CdcDashboard'
import { type DashboardConfig as Config } from '../types/DashboardConfig'
import APIFiltersChartData from './_mock/api-filter-chart.json'
import MultiVizConfig from './_mock/multi-viz.json'
import StaleDatasetKeysConfig from '../../examples/dashboard-stale-dataset-keys.json'
import MissingDatasetsSingleConfig from '../../examples/dashboard-missing-datasets-single.json'
import MissingDatasetsMultiConfig from '../../examples/dashboard-missing-datasets-multi.json'
import TieredFilterConfig from '../../examples/dashboard-tiered-filter-regression.json'
import MultiDashboardVersionConfig from '../../examples/dashboard-multi-dashboard-version-regression.json'
import FileNameUrlFilterStaticDataBiteConfig from './_mock/urlfilter-combobox-static-databite.json'

const DASHBOARD_SCRIPT_DOCS = `# Dashboard regression scripts

Named dashboard runtime regressions.

## Coverage

- **DASH-001 — API Dashboard Filter:** API option loading, dependent-filter request parameters, applying selections, and the resulting chart update.
- **DASH-002 — MultiViz with Dynamic Footnotes:** Filtered groups, scoped dynamic notes, shared static notes, symbols, and independent collapse behavior.
- **DASH-003 — Stale Dataset Keys:** Safe rendering when a visualization references a stale dataset key while valid content remains available.
- **DASH-004 — Missing Datasets in a Single Dashboard:** A dashboard remaining rendered without crashing when dataset references are missing or empty.
- **DASH-005 — Missing Datasets Across Dashboard Tabs:** Missing-dataset explanatory content and the no-data state after switching to an empty-dataset tab.
- **DASH-006 — Tiered Dashboard Filters:** Three dependent tiers, option repopulation, an intermediate no-data state, and restored output.
- **DASH-007 — Multi-Dashboard Versioning:** Version-fixture stability while switching between explicit-version and fallback-version sub-dashboards.
- **DASH-008 — File-Name URL Filter:** A URL-driven filter keeping a chart plus static and dynamic Data Bites synchronized.
- **DASH-EDITOR-001 — Delete Rows with Stale Shared-Filter Targets:** Repeated row deletion after shared-filter target indices become stale.
- **DASH-EDITOR-002 — MultiViz Data Setup:** Dashboard selection, URL dataset loading, save and load, and MultiViz column configuration.

## Future enhancements

- Add an end-to-end dashboard authoring script covering row creation, visualization placement, shared filters, save, and reload.
- Add manual QA scripts for the API filter, MultiViz footnote, tiered-filter, and URL-filter workflows.`

const meta: Meta<typeof Dashboard> = {
  title: 'Regression Tests/Dashboards/Scripts',
  component: Dashboard,
  parameters: {
    docs: {
      page: () => <Markdown>{DASHBOARD_SCRIPT_DOCS}</Markdown>,
      description: {
        component: DASHBOARD_SCRIPT_DOCS
      }
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Dashboard>

let apiFilterRequestUrls: string[] = []

const jsonResponse = (body: unknown) =>
  new Response(JSON.stringify(body), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  })

const getApiFilterRequest = (pathname: string) =>
  [...apiFilterRequestUrls]
    .reverse()
    .map(requestUrl => new URL(requestUrl))
    .find(url => url.pathname.toLowerCase() === pathname.toLowerCase())

const getApiFilterRequestParam = (pathname: string, parameter: string) =>
  getApiFilterRequest(pathname)?.searchParams.get(parameter)?.replace(/^"|"$/g, '')

const getSelectOptions = (select: HTMLSelectElement | null) =>
  select
    ? Array.from(select.options)
        .map(option => option.value)
        .filter(Boolean)
    : []

const MultiVizDynamicFootnotesConfig = {
  ...cloneDeep(MultiVizConfig),
  dashboard: cloneDeep(MultiVizConfig.dashboard),
  datasets: {
    'valid-world-data.json': {
      data: [
        { Country: 'North', 'Sample Categories': 'Category A', Data: 42 },
        { Country: 'North', 'Sample Categories': 'Category B', Data: 27 },
        { Country: 'South', 'Sample Categories': 'Category A', Data: 31 }
      ]
    },
    'footnote-data.json': {
      data: [
        { Country: 'North', symbol: '*', text: 'North-specific dynamic footnote.' },
        { Country: 'South', symbol: '†', text: 'South-specific dynamic footnote.' },
        { Country: 'Unused', symbol: '‡', text: 'Footnote without a matching multiviz group.' }
      ]
    }
  },
  rows: [
    {
      ...cloneDeep(MultiVizConfig.rows[0]),
      toggle: undefined,
      columns: [{ width: 12, widget: 'chart1711646813542' }],
      footnotesId: 'multiviz-dynamic-footnotes',
      expandCollapseAllButtons: true
    }
  ],
  visualizations: {
    ...cloneDeep(MultiVizConfig.visualizations),
    'multiviz-dynamic-footnotes': {
      uid: 'multiviz-dynamic-footnotes',
      type: 'footnotes',
      visualizationType: 'footnotes',
      dataKey: 'footnote-data.json',
      dynamicFootnotes: { symbolColumn: 'symbol', textColumn: 'text' },
      staticFootnotes: [{ symbol: '**', text: 'Static footnote shared by every multiviz group.' }]
    }
  }
} as unknown as Config

const expectNoCrashText = (canvasElement: HTMLElement) => {
  expect(canvasElement.textContent).not.toContain('Cannot read properties of undefined')
  expect(canvasElement.textContent).not.toContain('Something went wrong')
}

const getFileNameUrlFilterState = (canvasElement: HTMLElement) => {
  const chartPaths = Array.from(canvasElement.querySelectorAll('.cove-visualization.type-chart svg path'))
    .map(path => path.getAttribute('d') || '')
    .filter(Boolean)
    .join('|')
  const dataBites = Array.from(canvasElement.querySelectorAll('.cove-visualization.type-data-bite')).map(
    dataBite => dataBite.textContent || ''
  )
  const stateFilter = canvasElement.querySelector('[role="combobox"]') as HTMLInputElement | null

  return {
    selectedState: stateFilter?.value || '',
    chartPaths,
    dynamicDataBite: dataBites[0] || '',
    staticDataBite: dataBites[1] || ''
  }
}

const selectStateFromCombobox = async (canvasElement: HTMLElement, stateName: string) => {
  const canvas = within(canvasElement)
  const user = userEvent.setup()
  const stateFilter = (await canvas.findByRole('combobox')) as HTMLInputElement

  await user.click(stateFilter)
  await user.click(await canvas.findByRole('option', { name: stateName }))
}

export const API_Dashboard_Filters_Load_And_Apply: Story = {
  name: 'DASH-001 — API Dashboard Filter',
  parameters: {
    docs: {
      description: {
        story:
          'Loads API-backed filter options, verifies dependent-filter request parameters, applies selections, and confirms the chart updates.'
      }
    }
  },
  args: {
    config: APIFiltersChartData as unknown as Config,
    isEditor: false
  },
  beforeEach: () => {
    const originalFetch = globalThis.fetch
    apiFilterRequestUrls = []

    globalThis.fetch = async input => {
      const rawUrl = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url
      const requestUrl = new URL(rawUrl, window.location.origin)
      if (requestUrl.origin !== 'http://test.gov') {
        throw new Error(`Unexpected API dashboard filter origin: ${requestUrl.origin}`)
      }
      apiFilterRequestUrls.push(requestUrl.toString())

      switch (requestUrl.pathname.toLowerCase()) {
        case '/api/poc/locations':
          return jsonResponse([{ LocationAbbr: 'MS', LocationDesc: 'Mississippi' }])
        case '/api/poc/topics':
          return jsonResponse([{ TopicID: 'topicId', Topic: 'Some Topic' }])
        case '/api/poc/indicators':
          return jsonResponse([{ IndicatorID: 'indicatorID', Indicator: 'Some Indicator' }])
        case '/api/poc/filters/year':
          return jsonResponse([{ Year: '2024' }])
        case '/api/poc/filters/stratificationcategory':
          return jsonResponse([{ StratificationCategory: 'AGE' }])
        case '/api/poc/filters/datavaluetype':
          return jsonResponse([{ DataValueType: 'Crude Rate' }])
        case '/api/poc/tabledata':
          return jsonResponse([
            {
              LocationAbbr: 'MS',
              TopicID: 'topicId',
              IndicatorID: 'indicatorID',
              Year: '2024',
              StratificationCategory: 'AGE',
              DataValueType: 'Crude Rate',
              Stratification: '18–44',
              DataValue: 42
            },
            {
              LocationAbbr: 'MS',
              TopicID: 'topicId',
              IndicatorID: 'indicatorID',
              Year: '2024',
              StratificationCategory: 'AGE',
              DataValueType: 'Crude Rate',
              Stratification: '45–64',
              DataValue: 27
            }
          ])
        default:
          throw new Error(`Unexpected API dashboard filter request: ${requestUrl}`)
      }
    }

    return () => {
      globalThis.fetch = originalFetch
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()
    const locationFilter = (await canvas.findByLabelText('Location', { selector: 'select' })) as HTMLSelectElement
    const categoryFilter = (await canvas.findByLabelText('Category', { selector: 'select' })) as HTMLSelectElement
    const indicatorFilter = (await canvas.findByLabelText('Indicator', { selector: 'select' })) as HTMLSelectElement

    await waitForOptionsToPopulate(locationFilter, 2)
    await waitForOptionsToPopulate(categoryFilter, 2)
    expect(getSelectOptions(locationFilter)).toContain('MS')
    expect(getSelectOptions(categoryFilter)).toContain('topicId')
    expect(
      Array.from(locationFilter.options).some(option => option.value === 'MS' && option.text === 'Mississippi')
    ).toBe(true)
    expect(
      Array.from(categoryFilter.options).some(option => option.value === 'topicId' && option.text === 'Some Topic')
    ).toBe(true)
    expect(indicatorFilter).toBeDisabled()
    expect(canvas.queryByLabelText('Year', { selector: 'select' })).not.toBeInTheDocument()
    expect(canvas.queryByLabelText('View By', { selector: 'select' })).not.toBeInTheDocument()
    expect(canvas.queryByLabelText('Data Type', { selector: 'select' })).not.toBeInTheDocument()
    expect(getApiFilterRequest('/api/poc/locations')).toBeDefined()
    expect(getApiFilterRequest('/api/poc/topics')).toBeDefined()
    expect(getApiFilterRequest('/api/poc/indicators')).toBeUndefined()

    await user.selectOptions(locationFilter, ['MS'])

    await performAndAssert(
      'Selecting a category loads its API-backed indicator options with the parent parameter',
      () => ({
        indicatorOptions: getSelectOptions(indicatorFilter),
        indicatorRequest: getApiFilterRequestParam('/api/poc/indicators', 'topicid')
      }),
      async () => await user.selectOptions(categoryFilter, ['topicId']),
      (_before, after) => after.indicatorOptions.includes('indicatorID') && after.indicatorRequest === 'topicId'
    )

    await performAndAssert(
      'Selecting an indicator requests all dependent API filter options',
      () => ({
        dependentRequestsUseIndicator: [
          '/api/POC/Filters/Year',
          '/api/POC/Filters/StratificationCategory',
          '/api/POC/Filters/DataValueType'
        ].every(
          pathname =>
            getApiFilterRequestParam(pathname, 'topicid') === 'topicId' &&
            getApiFilterRequestParam(pathname, 'indicatorid') === 'indicatorID'
        )
      }),
      async () => await user.selectOptions(indicatorFilter, ['indicatorID']),
      (_before, after) => after.dependentRequestsUseIndicator
    )

    const applyButton = canvas.getByRole('button', { name: 'GO!' })
    await performAndAssert(
      'Applying API filters requests and renders the filtered dashboard data',
      () => ({
        tableDataRequested: !!getApiFilterRequest('/api/POC/TableData'),
        chartBars: canvasElement.querySelectorAll('.cove-visualization.type-chart path[id^="barGroup"]').length,
        yearOptions: getSelectOptions(canvas.queryByLabelText('Year', { selector: 'select' }) as HTMLSelectElement),
        viewByOptions: getSelectOptions(
          canvas.queryByLabelText('View By', { selector: 'select' }) as HTMLSelectElement
        ),
        dataTypeOptions: getSelectOptions(
          canvas.queryByLabelText('Data Type', { selector: 'select' }) as HTMLSelectElement
        ),
        noDataVisible: !!canvas.queryByText('No Data Available'),
        crashVisible: canvasElement.textContent?.includes('Something went wrong') || false
      }),
      async () => await user.click(applyButton),
      (before, after) =>
        !before.tableDataRequested &&
        before.chartBars === 0 &&
        after.tableDataRequested &&
        after.chartBars === 2 &&
        after.yearOptions.includes('2024') &&
        after.viewByOptions.includes('AGE') &&
        after.dataTypeOptions.includes('Crude Rate') &&
        !after.noDataVisible &&
        !after.crashVisible
    )

    await assertVisualizationRendered(canvasElement)
    expectNoCrashText(canvasElement)
    expect(getApiFilterRequestParam('/api/POC/TableData', 'locationabbr')).toBe('MS')
    expect(getApiFilterRequestParam('/api/POC/TableData', 'topicid')).toBe('topicId')
    expect(getApiFilterRequestParam('/api/POC/TableData', 'indicatorid')).toBe('indicatorID')
    expect(getApiFilterRequestParam('/api/POC/TableData', 'year')).toBe('2024')
    expect(getApiFilterRequestParam('/api/POC/TableData', 'stratificationcategoryid')).toBe('AGE')
    expect(getApiFilterRequestParam('/api/POC/TableData', 'datavaluetypeid')).toBe('Crude Rate')
  }
}

export const MultiViz_Dynamic_Footnotes_Are_Grouped: Story = {
  name: 'DASH-002 — MultiViz with Dynamic Footnotes',
  parameters: {
    docs: {
      description: {
        story:
          'Filters MultiViz groups and verifies scoped dynamic footnotes, shared static notes, symbols, and independent collapse behavior.'
      }
    }
  },
  args: {
    config: cloneDeep(MultiVizDynamicFootnotesConfig),
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()
    const categoryFilter = (await canvas.findByLabelText('Category', { selector: 'select' })) as HTMLSelectElement
    const getMultiVizGroup = (name: string) =>
      canvas
        .queryByRole('button', { name: new RegExp(`${name}$`) })
        ?.closest('.collapsable-multiviz-container') as HTMLElement | null

    await assertVisualizationRendered(canvasElement)
    await waitForOptionsToPopulate(categoryFilter, 2)
    expect(categoryFilter.value).toBe('Category A')
    await waitFor(() => {
      expect(canvasElement.querySelectorAll('.collapsable-multiviz-container')).toHaveLength(2)
    })

    const northHeading = canvas.getByRole('button', { name: /North$/ })
    const northGroup = northHeading.closest('.collapsable-multiviz-container') as HTMLElement
    const southGroup = canvas
      .getByRole('button', { name: /South$/ })
      .closest('.collapsable-multiviz-container') as HTMLElement

    expect(northGroup).toBeInTheDocument()
    expect(southGroup).toBeInTheDocument()
    expect(northGroup).toHaveTextContent('North-specific dynamic footnote.')
    expect(northGroup).not.toHaveTextContent('South-specific dynamic footnote.')
    expect(northGroup).toHaveTextContent('Static footnote shared by every multiviz group.')
    expect(southGroup).toHaveTextContent('South-specific dynamic footnote.')
    expect(southGroup).not.toHaveTextContent('North-specific dynamic footnote.')
    expect(southGroup).toHaveTextContent('Static footnote shared by every multiviz group.')
    expect(within(northGroup).getByText('*', { selector: '.cove-footnotes__symbol' })).toBeInTheDocument()
    expect(within(southGroup).getByText('†', { selector: '.cove-footnotes__symbol' })).toBeInTheDocument()
    expect(canvas.queryByText('Footnote without a matching multiviz group.')).not.toBeInTheDocument()
    expect(canvasElement.querySelectorAll('.cove-visualization.type-chart')).toHaveLength(2)

    await performAndAssert(
      'Collapsing one multiviz group hides only its dynamic footnote',
      () => ({
        northFootnoteVisible: !!within(northGroup).queryByText('North-specific dynamic footnote.'),
        southFootnoteVisible: !!within(southGroup).queryByText('South-specific dynamic footnote.')
      }),
      async () => await user.click(northHeading),
      (before, after) =>
        before.northFootnoteVisible &&
        before.southFootnoteVisible &&
        !after.northFootnoteVisible &&
        after.southFootnoteVisible
    )

    await performAndAssert(
      'Re-expanding the multiviz group restores its dynamic footnote',
      () => !!within(northGroup).queryByText('North-specific dynamic footnote.'),
      async () => await user.click(northHeading),
      (before, after) => !before && after
    )

    await performAndAssert(
      'Filtering the multiviz data keeps only matching groups and dynamic footnotes',
      () => {
        const currentNorthGroup = getMultiVizGroup('North')
        return {
          selectedCategory: categoryFilter.value,
          groupCount: canvasElement.querySelectorAll('.collapsable-multiviz-container').length,
          chartCount: canvasElement.querySelectorAll('.cove-visualization.type-chart').length,
          northFootnoteVisible: !!currentNorthGroup?.textContent?.includes('North-specific dynamic footnote.'),
          northStaticFootnoteVisible: !!currentNorthGroup?.textContent?.includes(
            'Static footnote shared by every multiviz group.'
          ),
          northSymbol: currentNorthGroup?.querySelector('.cove-footnotes__symbol')?.textContent,
          southGroupVisible: !!getMultiVizGroup('South'),
          unmatchedFootnoteVisible: !!canvas.queryByText('Footnote without a matching multiviz group.')
        }
      },
      async () => await user.selectOptions(categoryFilter, ['Category B']),
      (before, after) =>
        before.groupCount === 2 &&
        after.selectedCategory === 'Category B' &&
        after.groupCount === 1 &&
        after.chartCount === 1 &&
        after.northFootnoteVisible &&
        after.northStaticFootnoteVisible &&
        after.northSymbol === '*' &&
        !after.southGroupVisible &&
        !after.unmatchedFootnoteVisible
    )

    await performAndAssert(
      'Restoring the category restores the removed group and its dynamic footnote',
      () => ({
        selectedCategory: categoryFilter.value,
        groupCount: canvasElement.querySelectorAll('.collapsable-multiviz-container').length,
        southFootnoteVisible: !!getMultiVizGroup('South')?.textContent?.includes('South-specific dynamic footnote.'),
        southSymbol: getMultiVizGroup('South')?.querySelector('.cove-footnotes__symbol')?.textContent
      }),
      async () => await user.selectOptions(categoryFilter, ['Category A']),
      (before, after) =>
        before.groupCount === 1 &&
        after.selectedCategory === 'Category A' &&
        after.groupCount === 2 &&
        after.southFootnoteVisible &&
        after.southSymbol === '†'
    )
  }
}

export const Stale_Dataset_Keys_Are_Skipped_Safely: Story = {
  name: 'DASH-003 — Stale Dataset Keys',
  parameters: {
    docs: {
      description: {
        story:
          'Loads a dashboard with stale visualization dataset references and verifies valid content still renders without crashing.'
      }
    }
  },
  args: {
    config: StaleDatasetKeysConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    expectNoCrashText(canvasElement)
    expect(canvasElement.textContent).toContain('How to use this fixture')
    await waitFor(() => expect(canvasElement.textContent).toContain('Valid viz.dataKey'), { timeout: 5000 })
    await waitFor(() => {
      expect(canvasElement.querySelector('.cdc-callout__value')?.textContent).toContain('123')
    })
  }
}

export const Missing_Datasets_Single_Dashboard_Loads_Safely: Story = {
  name: 'DASH-004 — Missing Datasets in a Single Dashboard',
  parameters: {
    docs: {
      description: {
        story:
          'Loads a fixture with missing and empty dataset references and verifies that the dashboard remains rendered without crashing.'
      }
    }
  },
  args: {
    config: MissingDatasetsSingleConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    expectNoCrashText(canvasElement)
    expect(canvasElement.textContent).toContain('Fixture notes')
    await waitFor(
      () => {
        expect(canvasElement.textContent).toContain('Missing dataset')
        expect(canvasElement.textContent).toContain('Empty dataset')
      },
      { timeout: 5000 }
    )
  }
}

export const Missing_Datasets_Multi_Dashboard_Loads_Safely: Story = {
  name: 'DASH-005 — Missing Datasets Across Dashboard Tabs',
  parameters: {
    docs: {
      description: {
        story:
          'Checks explanatory content on the missing-dataset tab, then switches to the empty-dataset tab and verifies its no-data state.'
      }
    }
  },
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
    await waitFor(() => expect(canvasElement.textContent).toContain('No Data Available'), { timeout: 5000 })
    expect(canvasElement.textContent).not.toContain('Please complete your selection to continue.')
  }
}

export const Tiered_Filtering_Applies_Sequentially: Story = {
  name: 'DASH-006 — Tiered Dashboard Filters',
  parameters: {
    docs: {
      description: {
        story:
          'Exercises three dependent filter tiers and verifies option repopulation, the intermediate no-data state, and restored output.'
      }
    }
  },
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

    await waitFor(() => expect(getState().svgCount).toBeGreaterThan(0), { timeout: 5000 })
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
  name: 'DASH-007 — Multi-Dashboard Versioning',
  parameters: {
    docs: {
      description: {
        story:
          'Switches between explicit-version and fallback-version sub-dashboards and verifies their fixture content renders without crashing.'
      }
    }
  },
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

export const File_Name_Url_Filter_Updates_Static_And_Dynamic_Data: Story = {
  name: 'DASH-008 — File-Name URL Filter',
  parameters: {
    docs: {
      description: {
        story:
          'Changes a URL-driven file-name filter and verifies a chart plus static and dynamic Data Bites remain synchronized.'
      }
    }
  },
  args: {
    config: FileNameUrlFilterStaticDataBiteConfig,
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    expectNoCrashText(canvasElement)

    await performAndAssert(
      'Initial File Name URL filter data loads',
      () => getFileNameUrlFilterState(canvasElement),
      async () => {},
      (_before, after) =>
        after.selectedState === 'United States' &&
        after.chartPaths.length > 0 &&
        after.dynamicDataBite.includes('53') &&
        after.staticDataBite.includes('53')
    )

    await performAndAssert(
      'File Name URL filter updates chart, dynamic data bite, and static data bite',
      () => getFileNameUrlFilterState(canvasElement),
      async () => await selectStateFromCombobox(canvasElement, 'Alaska'),
      (before, after) =>
        after.selectedState === 'Alaska' &&
        after.chartPaths.length > 0 &&
        after.chartPaths !== before.chartPaths &&
        after.dynamicDataBite.includes('44') &&
        !after.dynamicDataBite.includes('53') &&
        after.staticDataBite.includes('44') &&
        !after.staticDataBite.includes('53')
    )

    await performAndAssert(
      'File Name URL filter keeps all three visualizations in sync on another value',
      () => getFileNameUrlFilterState(canvasElement),
      async () => await selectStateFromCombobox(canvasElement, 'Georgia'),
      (before, after) =>
        after.selectedState === 'Georgia' &&
        after.chartPaths.length > 0 &&
        after.chartPaths !== before.chartPaths &&
        after.dynamicDataBite.includes('68') &&
        !after.dynamicDataBite.includes('44') &&
        after.staticDataBite.includes('68') &&
        !after.staticDataBite.includes('44')
    )
  }
}
