import type { Meta, StoryObj } from '@storybook/react'
import { faker } from '@faker-js/faker'
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
import { userEvent, within } from '@storybook/testing-library'
import ToggleExampleConfig from './_mock/toggle-example.json'
import _ from 'lodash'
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

// Dashboard Filter Updates for Ascending, Descending, and Custom Order
import DashboardFilterAsc from './_mock/dashboard-filter-asc.json'
const DashboardFilterDesc = _.cloneDeep(DashboardFilterAsc)
const DashboardFilterCust = _.cloneDeep(DashboardFilterAsc)
DashboardFilterDesc.dashboard.sharedFilters[0].order = 'desc'
DashboardFilterCust.dashboard.sharedFilters[0].order = 'cust'

// On DashboardFilterCust change the sharedFilters[0].values and orderedValues to be in a custom order
const customOrder = ['American Samoa', 'Alaska', 'Alabama', 'Arizona', 'Arkansas']

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

const countries = _.times(5, faker.location.country)
const categories = _.times(3, val => `category-${val + 1}`)

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
          body: _.times(5, i => ({ [filter]: `Some ${filter} ${i}` }))
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
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()
    // play is running before full rendering is complete so sleep function
    // is needed to delay the execution.
    // possible related bug: https://github.com/storybookjs/storybook/issues/18258
    await sleep(1000)
    const topicsFilter = canvas.getByLabelText('Category', { selector: 'select' })
    await user.selectOptions(topicsFilter, ['topicId'])
    const indicatorsFilter = canvas.getByLabelText('Indicator', { selector: 'select' })
    await user.selectOptions(indicatorsFilter, ['indicatorID'])
    const yearsFilter = canvas.getByLabelText('Year', { selector: 'select' })
    await user.selectOptions(yearsFilter, ['Some Year 0'])
    const stratCategoryFilter = canvas.getByLabelText('View By', { selector: 'select' })
    await user.selectOptions(stratCategoryFilter, ['Some StratificationCategory 0'])
    const stratFilter = canvas.getByLabelText('Stratification', { selector: 'select' })
    await user.selectOptions(stratFilter, ['Some Stratification 0'])
    await user.click(canvas.getByText('GO!'))
  }
}

export const RegressionAPIFiltersChart: Story = {
  args: {
    config: APIFiltersChartData as unknown as Config,
    isEditor: false
  },
  parameters: {
    fetchMock
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()
    // play is running before full rendering is complete so sleep function
    // is needed to delay the execution.
    // possible related bug: https://github.com/storybookjs/storybook/issues/18258
    await sleep(1000)
    const locationFilter = canvas.getByLabelText('Location', { selector: 'select' })
    await user.selectOptions(locationFilter, ['MS'])
    const topicsFilter = canvas.getByLabelText('Category', { selector: 'select' })
    await user.selectOptions(topicsFilter, ['topicId'])
    const indicatorsFilter = canvas.getByLabelText('Indicator', { selector: 'select' })
    await user.selectOptions(indicatorsFilter, ['indicatorID'])
    await user.click(canvas.getByText('GO!'))
    await sleep(1000)
    const yearFilter = canvas.getByLabelText('Year', { selector: 'select' })
    await user.selectOptions(yearFilter, ['Some Year 1'])
  }
}

export const RegressionHiddenFilter: Story = {
  args: {
    config: MethodologyConfig,
    isEditor: false
  },
  parameters: {
    fetchMock
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()
    // play is running before full rendering is complete so sleep function
    // is needed to delay the execution.
    // possible related bug: https://github.com/storybookjs/storybook/issues/18258
    await sleep(1000)
    const yearFilter = canvas.getByLabelText('Year', { selector: 'select' })
    await user.selectOptions(yearFilter, ['1999'])
    await user.click(canvas.getByText('GO!'))
    await sleep(500)
    canvas.getAllByText('alabama')
    canvas.getAllByText('alaska')
    canvas.getAllByText('arizona')
    await user.selectOptions(yearFilter, ['2012'])
    await user.click(canvas.getByText('GO!'))
    await sleep(500)
    canvas.getAllByText('new york')
    canvas.getAllByText('new jersey')
    canvas.getAllByText('new mexico')
  }
}

export const RegressionMultiVisualization: Story = {
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

export default meta
