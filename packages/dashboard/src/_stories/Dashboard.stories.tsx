import type { Meta, StoryObj } from '@storybook/react-vite'
import { faker } from '@faker-js/faker'
import { waitForOptionsToPopulate, performAndAssert } from '@cdc/core/helpers/testing'
import APIFiltersMapData from './_mock/api-filter-map.json'
import APIFiltersChartData from './_mock/api-filter-chart.json'
import APIFilterErrorConfig from './_mock/api-filter-error.json'
import ExampleConfig_1 from './_mock/dashboard-gallery.json'
import ExampleConfig_2 from './_mock/dashboard-2.json'
import ExampleConfig_3 from './_mock/dashboard_no_filter.json'
import SingleStateDashboardFilters from './_mock/single-state-dashboard-filters.json'
import Dashboard_Filter from './_mock/dashboard-filter.json'
import MultiVizConfig from './_mock/multi-viz.json'
import MultiDashboardConfig from './_mock/multi-dashboards.json'
import Dashboard from '../CdcDashboard'
import StandaloneTable from './_mock/standalone-table.json'
import GroupPivotConfig from './_mock/group-pivot-filter.json'
import PivotFitlerConfig from './_mock/pivot-filter.json'
import { type DashboardConfig as Config } from '../types/DashboardConfig'
import { userEvent, within, expect } from 'storybook/test'
import ToggleExampleConfig from './_mock/toggle-example.json'
import cloneDeep from 'lodash/cloneDeep'
import times from 'lodash/times'
import { footnotesSymbols } from '@cdc/core/helpers/footnoteSymbols'
import FootnotesConfig from '@cdc/core/types/Footnotes'
import { ConfigRow } from '../types/ConfigRow'
import BumpChartConfig from './_mock/bump-chart.json'
import MethodologyConfig from './_mock/methodology.json'
import methodologyAPI from './_mock/methodologyAPI'
import TopSpacing_1 from './_mock/data-bite-dash-test.json'
import TopSpacing_2 from './_mock/data-bite-dash-test_1.json'
import TopSpacing_3 from './_mock/data-bite-dash-test_1_1.json'
import TopSpacing_4 from './_mock/data-bite-dash-test_1_1_1.json'
import CustomOrderNewValues from './_mock/custom-order-new-values.json'
import APIFilterResetConfig from '../../examples/test-api-filter-reset.json'
import CascadingDataFilters from './_mock/filter-cascade.json'
import ParentChildFilters from './_mock/parent-child-filters.json'
import NestedParentChildFilters from './_mock/nested-parent-child-filters.json'
import GalleryDataBiteDashboard from './_mock/gallery-data-bite-dashboard.json'
import TP5TestConfig from './_mock/tp5-test.json'
import LineChartAnglesConfig from './_mock/dashboard-line-chart-angles.json'

// Dashboard Filter Updates for Ascending, Descending, and Custom Order
import DashboardFilterAsc from './_mock/dashboard-filter-asc.json'
const DashboardFilterDesc = cloneDeep(DashboardFilterAsc)
const DashboardFilterCust = cloneDeep(DashboardFilterAsc)
DashboardFilterDesc.dashboard.sharedFilters[0].order = 'desc'
DashboardFilterCust.dashboard.sharedFilters[0].order = 'cust'

// On DashboardFilterCust change the sharedFilters[0].values and orderedValues to be in a custom order
const customOrder = ['American Samoa', 'Alaska', 'Alabama', 'Arizona', 'Arkansas']
DashboardFilterCust.dashboard.sharedFilters[0].orderedValues = customOrder

const meta: Meta<typeof Dashboard> = {
  title: 'Components/Pages/Dashboard',
  component: Dashboard
}

type Story = StoryObj<typeof Dashboard>

export const Dashboard_Filter_Asc: Story = {
  args: {
    config: DashboardFilterAsc,
    isEditor: false
  }
}

export const Dashboard_Filter_Desc: Story = {
  args: {
    config: DashboardFilterDesc,
    isEditor: false
  }
}

export const Dashboard_Filter_Cust: Story = {
  args: {
    config: DashboardFilterCust,
    isEditor: false
  }
}

export const CustomOrder_NewValues_AutoAppend: Story = {
  args: {
    config: CustomOrderNewValues,
    isEditor: false
  }
}

export const Example_1: Story = {
  args: {
    config: ExampleConfig_1,
    isEditor: false
  }
}

export const Example_2: Story = {
  args: {
    config: ExampleConfig_2,
    isEditor: false
  }
}

export const Example_3: Story = {
  args: {
    config: ExampleConfig_3,
    isEditor: false
  }
}

export const TP5_Test_Dashboard: Story = {
  args: {
    config: TP5TestConfig,
    isEditor: false
  }
}

export const Line_Chart_Angles: Story = {
  args: {
    config: LineChartAnglesConfig,
    isEditor: false
  }
}

export const Bump_Chart_Dashboard: Story = {
  args: {
    config: BumpChartConfig,
    isEditor: false
  }
}

export const Dashboard_Filters: Story = {
  args: {
    config: Dashboard_Filter,
    isEditor: false
  }
}

export const API_Filter_Error: Story = {
  args: {
    config: APIFilterErrorConfig,
    isEditor: false
  }
}

export const StandAloneTable: Story = {
  args: {
    config: StandaloneTable,
    isEditor: false
  }
}

export const ToggleExample: Story = {
  args: {
    config: ToggleExampleConfig,
    isEditor: false
  }
}

export const PivotFilter: Story = {
  args: {
    config: PivotFitlerConfig,
    isEditor: false
  }
}

export const GroupPivotFilter: Story = {
  args: {
    config: GroupPivotConfig,
    isEditor: false
  }
}

export const SingleStateDashboardWithFilters: Story = {
  args: {
    config: SingleStateDashboardFilters,
    isEditor: false
  }
}

faker.seed(123)

const countries = times(5, faker.location.country)
const categories = times(3, val => `category-${val + 1}`)

const data = []
countries.forEach((country, i) => {
  categories.forEach((category, j) => {
    if ((i + j) % 3 === 0) return
    data.push({
      Country: country,
      'Sample Categories': category,
      Data: faker.number.int({ min: 5, max: 50 })
    })
  })
})

const footnoteData = countries.map((country, i) => {
  return { Country: country, symbol: footnotesSymbols[i][0], text: faker.lorem.sentence() }
})

const multiVizData = {
  'valid-world-data.json': { data },
  'footnote-data.json': { data: footnoteData }
}

export const MultiDashboard: Story = {
  args: {
    config: MultiDashboardConfig,
    isEditor: false
  }
}

const FNrows: ConfigRow[] = [{ ...MultiVizConfig.rows[0], footnotesId: 'footnote123' }]
const footnoteConfig: Partial<FootnotesConfig> = {
  dataKey: 'footnote-data.json',
  dynamicFootnotes: { symbolColumn: 'symbol', textColumn: 'text' },
  staticFootnotes: [{ symbol: '**', text: 'This is a static Footnote' }]
}
const FNViz = { ...MultiVizConfig.visualizations, footnote123: footnoteConfig }
export const Footnotes: Story = {
  args: {
    config: { ...MultiVizConfig, datasets: multiVizData, rows: FNrows, visualizations: FNViz },
    isEditor: false
  }
}

const sleep = ms => {
  return new Promise(r => setTimeout(r, ms))
}

const fetchMock = {
  debug: true,
  mocks: [
    {
      matcher: {
        name: 'topicsFilter',
        url: 'path:/api/poc/topics'
      },
      response: {
        status: 200,
        body: [{ TopicID: 'topicId', Topic: 'Some Topic' }]
      }
    },
    {
      matcher: {
        name: 'indicatorsFilter',
        url: 'path:/api/poc/indicators'
      },
      response: {
        status: 200,
        body: [{ IndicatorID: 'indicatorID', Indicator: 'Some Indicator' }]
      }
    },
    ...['Year', 'DataValueType', 'StratificationCategory', 'Stratification'].map(filter => {
      return {
        matcher: {
          name: 'filters' + filter,
          url: 'path:/api/POC/Filters/' + filter
        },
        response: {
          status: 200,
          body: times(5, i => ({ [filter]: `Some ${filter} ${i}` }))
        }
      }
    }),
    {
      matcher: {
        name: 'locations',
        url: 'path:/api/poc/locations'
      },
      response: {
        status: 200,
        body: [
          {
            LocationAbbr: 'MS',
            LocationDesc: 'Mississippi'
          }
        ]
      }
    },
    {
      matcher: {
        name: 'tableData',
        url: 'path:/api/POC/TableData'
      },
      response: {
        status: 200,
        body: [
          {
            LocationAbbr: 'MS',
            LocationDesc: 'Mississippi',
            Indicator: 'Some Indicator',
            IndicatorID: 'ALC04',
            Topic: 'Some Topic',
            TopicID: 'ALC',
            DataSource: null,
            StratificationCategory: 'Overall',
            Stratification: 'Overall',
            StratificationId1: 'OVR',
            StratificationCategoryId: 'OVERALL',
            YearStart: null,
            YearEnd: 2019,
            DataValue: 2,
            DataValueUnit: 'Number',
            LowConfidenceLimit: 1.6,
            HighConfidenceLimit: 2.9,
            DataValueType: null,
            DataValueTypeID: 'CRDMEDN'
          }
        ]
      }
    },
    {
      matcher: {
        name: 'methodologyYear',
        url: 'path:/methodology',
        query: {
          $select: 'distinct year'
        }
      },
      response: {
        status: 200,
        body: methodologyAPI('distinct year')
      }
    },
    ...['a', 'b'].map(methodology => {
      return {
        matcher: {
          name: 'methodology' + methodology,
          url: 'path:/methodology',
          query: {
            methodology: `"${methodology}"`
          }
        },
        response: {
          status: 200,
          body: methodologyAPI('*', ['methodology', methodology])
        }
      }
    }),
    ...[1999, 2000, 2012, 2013].map(year => {
      return {
        matcher: {
          name: 'methodology' + year,
          url: 'path:/methodology',
          query: {
            $select: 'distinct methodology',
            year
          }
        },
        response: {
          status: 200,
          body: methodologyAPI('distinct methodology', ['year', year])
        }
      }
    })
  ]
}

export const RegressionAPIFiltersMap: Story = {
  args: {
    config: APIFiltersMapData as unknown as Config,
    isEditor: false
  },
  parameters: {
    fetchMock
  }
  // TODO: Re-enable play function when fetch-mock is fully compatible with Storybook 9 + Vitest
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement)
  //   const user = userEvent.setup()
  //   // play is running before full rendering is complete so sleep function
  //   // is needed to delay the execution.
  //   // possible related bug: https://github.com/storybookjs/storybook/issues/18258
  //   await sleep(1000)
  //   const topicsFilter = canvas.getByLabelText('Category', { selector: 'select' })
  //   await user.selectOptions(topicsFilter, ['topicId'])
  //   await sleep(1000)

  //   const indicatorsFilter = canvas.getByLabelText('Indicator', { selector: 'select' })
  //   await user.selectOptions(indicatorsFilter, ['indicatorID'])
  //   const yearsFilter = canvas.getByLabelText('Year', { selector: 'select' })
  //   await user.selectOptions(yearsFilter, ['Some Year 0'])
  //   const stratCategoryFilter = canvas.getByLabelText('View By', { selector: 'select' })
  //   await user.selectOptions(stratCategoryFilter, ['Some StratificationCategory 0'])
  //   const stratFilter = canvas.getByLabelText('Stratification', { selector: 'select' })
  //   await user.selectOptions(stratFilter, ['Some Stratification 0'])
  //   await user.click(canvas.getByText('GO!'))
  // }
}

export const RegressionAPIFiltersChart: Story = {
  args: {
    config: APIFiltersChartData as unknown as Config,
    isEditor: false
  },
  parameters: {
    fetchMock
  }
  // TODO: Re-enable play function when fetch-mock is fully compatible with Storybook 9 + Vitest
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement)
  //   const user = userEvent.setup()
  //   // play is running before full rendering is complete so sleep function
  //   // is needed to delay the execution.
  //   // possible related bug: https://github.com/storybookjs/storybook/issues/18258
  //   await sleep(1000)
  //   const locationFilter = canvas.getByLabelText('Location', { selector: 'select' })
  //   await user.selectOptions(locationFilter, ['MS'])
  //   const topicsFilter = canvas.getByLabelText('Category', { selector: 'select' })
  //   await user.selectOptions(topicsFilter, ['topicId'])
  //   const indicatorsFilter = canvas.getByLabelText('Indicator', { selector: 'select' })
  //   await user.selectOptions(indicatorsFilter, ['indicatorID'])
  //   await user.click(canvas.getByText('GO!'))
  //   await sleep(1000)
  //   const yearFilter = canvas.getByLabelText('Year', { selector: 'select' })
  //   await user.selectOptions(yearFilter, ['Some Year 1'])
  // }
}

export const RegressionHiddenFilter: Story = {
  args: {
    config: MethodologyConfig,
    isEditor: false
  },
  parameters: {
    fetchMock
  }
  // TODO: Re-enable play function when fetch-mock is fully compatible with Storybook 9 + Vitest
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement)
  //   const user = userEvent.setup()
  //   // play is running before full rendering is complete so sleep function
  //   // is needed to delay the execution.
  //   // possible related bug: https://github.com/storybookjs/storybook/issues/18258
  //   await sleep(1000)
  //   const yearFilter = canvas.getByLabelText('Year', { selector: 'select' })
  //   await user.selectOptions(yearFilter, ['1999'])
  //   await user.click(canvas.getByText('GO!'))
  //   await sleep(500)
  //   canvas.getAllByText('alabama')
  //   canvas.getAllByText('alaska')
  //   canvas.getAllByText('arizona')
  //   await user.selectOptions(yearFilter, ['2012'])
  //   await user.click(canvas.getByText('GO!'))
  //   await sleep(500)
  //   canvas.getAllByText('new york')
  //   canvas.getAllByText('new jersey')
  //   canvas.getAllByText('new mexico')
  // }
}

export const RegressionMultiVisualizationTests: Story = {
  args: {
    config: { ...MultiVizConfig, datasets: multiVizData },
    isEditor: false
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()
    // play is running before full rendering is complete so sleep function
    // is needed to delay the execution.
    // possible related bug: https://github.com/storybookjs/storybook/issues/18258
    await sleep(1000)
    const categoryFilter = canvas.getByLabelText('Category', { selector: 'select' })
    canvas.getAllByText('Paraguay')
    canvas.getAllByText('Poland')
    canvas.getAllByText('Iraq')
    await user.selectOptions(categoryFilter, ['category-3'])
    canvas.getAllByText('Paraguay')
    canvas.getAllByText('Ethiopia')
    canvas.getAllByText('Iraq')
    await user.selectOptions(categoryFilter, ['category-1'])
    canvas.getAllByText('Poland')
    canvas.getAllByText('Ethiopia')
    canvas.getAllByText('Curacao')
  }
}

export const Top_Spacing_1: Story = {
  args: {
    config: TopSpacing_1,
    isEditor: false
  }
}

export const Top_Spacing_2: Story = {
  args: {
    config: TopSpacing_2,
    isEditor: false
  }
}

export const Top_Spacing_3: Story = {
  args: {
    config: TopSpacing_3,
    isEditor: false
  }
}

export const Top_Spacing_4: Story = {
  args: {
    config: TopSpacing_4,
    isEditor: false
  }
}

export const Gallery_Data_Bite_Dashboard: Story = {
  args: {
    config: GalleryDataBiteDashboard,
    isEditor: false
  }
}

export const Clear_Filters_Button: Story = {
  args: {
    config: APIFilterResetConfig as unknown as Config,
    isEditor: false
  }
}

export const Cascading_Multi_Parent_Data_Filters: Story = {
  args: {
    config: CascadingDataFilters as unknown as Config,
    isEditor: false
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates cascading data filters with multiple parent relationships. The size filter depends on color, and weight depends on both color and size, creating a multi-tier cascading filter system with deterministic test data.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()

    // Get all filter dropdowns (using findBy to wait for them)
    const colorFilter = (await canvas.findByLabelText('color', { selector: 'select' })) as HTMLSelectElement
    const sizeFilter = (await canvas.findByLabelText('size', { selector: 'select' })) as HTMLSelectElement
    const weightFilter = (await canvas.findByLabelText('weight', { selector: 'select' })) as HTMLSelectElement
    const smellFilter = (await canvas.findByLabelText('smell', { selector: 'select' })) as HTMLSelectElement

    // Helper to get non-empty filter options
    const getFilterOptions = (filter: HTMLSelectElement) =>
      Array.from(filter.querySelectorAll('option'))
        .map(opt => opt.value)
        .filter(v => v)

    // Helper to get state of filters and chart
    const getState = () => ({
      colorOptions: getFilterOptions(colorFilter),
      colorSelected: colorFilter.value,
      sizeOptions: getFilterOptions(sizeFilter),
      sizeSelected: sizeFilter.value,
      weightOptions: getFilterOptions(weightFilter),
      weightSelected: weightFilter.value,
      smellOptions: getFilterOptions(smellFilter),
      smellSelected: smellFilter.value,
      chartRendered: !!canvasElement.querySelector('svg'),
      noDataVisible: !!canvas.queryByText('No Data Available')
    })

    // Initial verification - wait for options to populate
    await waitForOptionsToPopulate(colorFilter, 3)
    const initialState = getState()
    expect(initialState.chartRendered).toBe(true)
    expect(initialState.noDataVisible).toBe(false)

    // ============================================================================
    // TEST: Color → Size cascade (single parent)
    // ============================================================================

    // Test 1: Select blue → size should show all 3 sizes
    await performAndAssert(
      'Select color=blue → size shows large, medium, small',
      getState,
      async () => await user.selectOptions(colorFilter, ['blue']),
      (before, after) =>
        after.colorSelected === 'blue' &&
        after.sizeOptions.includes('large') &&
        after.sizeOptions.includes('medium') &&
        after.sizeOptions.includes('small') &&
        after.sizeOptions.length === 3 &&
        after.chartRendered &&
        !after.noDataVisible
    )

    // Test 2: Select red → size should show only small, medium
    await performAndAssert(
      'Select color=red → size shows medium, small (no large)',
      getState,
      async () => await user.selectOptions(colorFilter, ['red']),
      (before, after) =>
        after.colorSelected === 'red' &&
        after.sizeOptions.includes('medium') &&
        after.sizeOptions.includes('small') &&
        !after.sizeOptions.includes('large') &&
        after.sizeOptions.length === 2 &&
        after.chartRendered &&
        !after.noDataVisible
    )

    // Test 3: Select green → size should show only large
    await performAndAssert(
      'Select color=green → size shows only large',
      getState,
      async () => await user.selectOptions(colorFilter, ['green']),
      (before, after) =>
        after.colorSelected === 'green' &&
        after.sizeOptions.length === 1 &&
        after.sizeOptions[0] === 'large' &&
        after.sizeSelected === 'large' &&
        after.chartRendered &&
        !after.noDataVisible
    )

    // ============================================================================
    // TEST: Color + Size → Weight cascade (multiple parents)
    // ============================================================================

    // Test 4: Select blue + small → weight updates based on both parents
    await performAndAssert(
      'Select color=blue → size options repopulate',
      getState,
      async () => await user.selectOptions(colorFilter, ['blue']),
      (before, after) =>
        after.colorSelected === 'blue' && after.sizeSelected === 'large' && after.sizeOptions.length === 3
    )

    await performAndAssert(
      'Select size=small → weight updates based on color+size',
      getState,
      async () => await user.selectOptions(sizeFilter, ['small']),
      (before, after) =>
        after.colorSelected === 'blue' &&
        after.sizeSelected === 'small' &&
        after.weightOptions.length === 3 &&
        after.chartRendered &&
        !after.noDataVisible
    )

    // ============================================================================
    // TEST: Weight → Smell cascade
    // ============================================================================

    // Test 5: Select light → smell shows only neutral and sweet (2 options)
    await performAndAssert(
      'Select weight=light → smell shows neutral, sweet (not bitter)',
      getState,
      async () => await user.selectOptions(weightFilter, ['light']),
      (before, after) =>
        after.colorSelected === 'blue' &&
        after.sizeSelected === 'small' &&
        after.weightSelected === 'light' &&
        after.smellOptions.includes('neutral') &&
        after.smellOptions.includes('sweet') &&
        !after.smellOptions.includes('bitter') &&
        after.smellOptions.length === 2 &&
        after.chartRendered &&
        !after.noDataVisible
    )

    // ============================================================================
    // TEST: Full cascade verification - change parent and verify all children
    // ============================================================================

    // Test 6: Final - select red again and verify entire cascade updates
    await performAndAssert(
      'Select color=red → all filters update; size shows medium, small',
      getState,
      async () => await user.selectOptions(colorFilter, ['red']),
      (before, after) =>
        after.colorSelected === 'red' &&
        after.sizeOptions.length === 2 &&
        after.sizeOptions.includes('medium') &&
        after.sizeOptions.includes('small') &&
        // Size, weight, and smell selected values should be valid in their updated options
        after.sizeOptions.includes(after.sizeSelected) &&
        after.weightOptions.includes(after.weightSelected) &&
        after.smellOptions.includes(after.smellSelected) &&
        after.chartRendered &&
        !after.noDataVisible
    )
  }
}

export const Parent_Child_Filters_With_DefaultValue: Story = {
  args: {
    config: ParentChildFilters as unknown as Config,
    isEditor: false
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates parent-child filter relationships (State → County → City) with defaultValue support. Shows how child filter options update based on parent selection, and how defaultValue is applied on initial load.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()

    // Get filter dropdowns
    const stateFilter = (await canvas.findByLabelText('State', { selector: 'select' })) as HTMLSelectElement
    const countyFilter = (await canvas.findByLabelText('County', { selector: 'select' })) as HTMLSelectElement
    const cityFilter = (await canvas.findByLabelText('City', { selector: 'select' })) as HTMLSelectElement

    const getFilterOptions = (select: HTMLSelectElement) =>
      Array.from(select.options)
        .map(o => o.value)
        .filter(Boolean)

    const getState = () => ({
      stateOptions: getFilterOptions(stateFilter),
      stateSelected: stateFilter.value,
      countyOptions: getFilterOptions(countyFilter),
      countySelected: countyFilter.value,
      cityOptions: getFilterOptions(cityFilter),
      citySelected: cityFilter.value,
      chartRendered: !!canvasElement.querySelector('svg')
    })

    // Wait for initial load
    await waitForOptionsToPopulate(stateFilter, 3)
    const initialState = getState()

    // Verify defaultValue is applied on initial load
    expect(initialState.stateSelected).toBe('California')
    expect(initialState.countySelected).toBe('Los Angeles')
    expect(initialState.citySelected).toBe('Los Angeles')
    expect(initialState.chartRendered).toBe(true)

    // Test 1: Change state to Texas → county and city should update
    await performAndAssert(
      'Select state=Texas → county shows Texas counties',
      getState,
      async () => await user.selectOptions(stateFilter, ['Texas']),
      (before, after) =>
        after.stateSelected === 'Texas' &&
        after.countyOptions.includes('Harris') &&
        after.countyOptions.includes('Dallas') &&
        after.countyOptions.includes('Bexar') &&
        after.countyOptions.includes('Travis') &&
        !after.countyOptions.includes('Los Angeles') &&
        after.chartRendered
    )

    // Test 2: Select county → city options update
    await performAndAssert(
      'Select county=Harris → city shows Houston, Pasadena',
      getState,
      async () => await user.selectOptions(countyFilter, ['Harris']),
      (before, after) =>
        after.countySelected === 'Harris' &&
        after.cityOptions.includes('Houston') &&
        after.cityOptions.includes('Pasadena') &&
        after.cityOptions.length === 2 &&
        after.chartRendered
    )

    // Test 3: Change state back to California → verify cascade updates
    await performAndAssert(
      'Select state=California → filters reset to California data',
      getState,
      async () => await user.selectOptions(stateFilter, ['California']),
      (before, after) =>
        after.stateSelected === 'California' &&
        after.countyOptions.includes('Los Angeles') &&
        after.countyOptions.includes('San Diego') &&
        after.countyOptions.includes('Orange') &&
        after.chartRendered
    )

    // Test 4: Select Orange county → verify city options
    await performAndAssert(
      'Select county=Orange → city shows Anaheim, Santa Ana, Irvine',
      getState,
      async () => await user.selectOptions(countyFilter, ['Orange']),
      (before, after) =>
        after.countySelected === 'Orange' &&
        after.cityOptions.includes('Anaheim') &&
        after.cityOptions.includes('Santa Ana') &&
        after.cityOptions.includes('Irvine') &&
        after.cityOptions.length === 3 &&
        !after.cityOptions.includes('Los Angeles') &&
        after.chartRendered
    )
  }
}

export const Nested_Dropdown_With_Parent_Child: Story = {
  args: {
    config: NestedParentChildFilters as unknown as Config,
    isEditor: false
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates nested dropdown filters (Year/Quarter subGrouping) with parent-child relationships. The Year/Quarter filter depends on Region selection, and both Year and Quarter defaultValue properties are respected on initial load.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()

    // Get filter dropdowns
    const regionFilter = (await canvas.findByLabelText('Region', { selector: 'select' })) as HTMLSelectElement
    const yearQuarterInput = canvasElement.querySelector('.nested-dropdown input') as HTMLInputElement

    const getFilterOptions = (select: HTMLSelectElement) =>
      Array.from(select.options)
        .map(o => o.text)
        .filter(Boolean)

    const getNestedDropdownOptions = () => {
      const container = yearQuarterInput.closest('.nested-dropdown')
      if (!container) return []
      return Array.from(container.querySelectorAll('li[role="treeitem"]'))
        .map(li => li.getAttribute('aria-label') || li.textContent?.trim() || '')
        .filter(Boolean)
    }

    const getState = () => ({
      regionOptions: getFilterOptions(regionFilter),
      regionSelected: regionFilter.value,
      yearQuarterOptions: getNestedDropdownOptions(),
      yearQuarterSelected: yearQuarterInput.value,
      chartRendered: !!canvasElement.querySelector('svg')
    })

    // Wait for initial load
    await waitForOptionsToPopulate(regionFilter, 4)
    const initialState = getState()

    // Verify defaultValue is applied on initial load (North region, 2023 Q2)
    expect(initialState.regionSelected).toBe('North')
    expect(initialState.yearQuarterSelected).toContain('2023')
    expect(initialState.yearQuarterSelected).toContain('Q2')
    expect(initialState.chartRendered).toBe(true)

    // Test 1: Change region to South → year options should update based on available data
    await performAndAssert(
      'Select region=South → year/quarter filter updates',
      getState,
      async () => await user.selectOptions(regionFilter, ['South']),
      (before, after) =>
        after.regionSelected === 'South' &&
        after.yearQuarterOptions.some(opt => opt.includes('2022')) &&
        after.yearQuarterOptions.some(opt => opt.includes('2023')) &&
        after.yearQuarterOptions.some(opt => opt.includes('2024')) &&
        after.chartRendered
    )

    // Test 2: Change region to East → should only show 2023 and 2024 (no 2022 data for East)
    await performAndAssert(
      'Select region=East → year shows only 2023, 2024',
      getState,
      async () => await user.selectOptions(regionFilter, ['East']),
      (before, after) =>
        after.regionSelected === 'East' &&
        after.yearQuarterOptions.some(opt => opt.includes('2023')) &&
        after.yearQuarterOptions.some(opt => opt.includes('2024')) &&
        !after.yearQuarterOptions.some(opt => opt.includes('2022')) &&
        after.chartRendered
    )

    // Test 3: Change region to West → should only show 2023 Q3-Q4 and 2024
    await performAndAssert(
      'Select region=West → limited year/quarter options',
      getState,
      async () => await user.selectOptions(regionFilter, ['West']),
      (before, after) =>
        after.regionSelected === 'West' &&
        (after.yearQuarterOptions.some(opt => opt.includes('2023')) ||
          after.yearQuarterOptions.some(opt => opt.includes('2024'))) &&
        !after.yearQuarterOptions.some(opt => opt.includes('2022')) &&
        after.chartRendered
    )

    // Test 4: Change back to North → verify all years available again
    await performAndAssert(
      'Select region=North → all years (2022-2024) available',
      getState,
      async () => await user.selectOptions(regionFilter, ['North']),
      (before, after) =>
        after.regionSelected === 'North' &&
        after.yearQuarterOptions.some(opt => opt.includes('2022')) &&
        after.yearQuarterOptions.some(opt => opt.includes('2023')) &&
        after.yearQuarterOptions.some(opt => opt.includes('2024')) &&
        after.chartRendered
    )
  }
}

export default meta
