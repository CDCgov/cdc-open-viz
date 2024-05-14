import type { Meta, StoryObj } from '@storybook/react'
import { faker } from '@faker-js/faker'
import APIFiltersMapData from './_mock/api-filter-map.json'
import APIFiltersChartData from './_mock/api-filter-chart.json'
import ExampleConfig_1 from './_mock/dashboard-gallery.json'
import ExampleConfig_2 from './_mock/dashboard-2.json'
import ExampleConfig_3 from './_mock/dashboard_no_filter.json'
import Dashboard_Filter from './_mock/dashboard-filter.json'
import MultiVizConfig from './_mock/multi-viz.json'
import Dashboard from '../CdcDashboard'
import StandaloneTable from './_mock/standalone-table.json'
import PivotFitlerConfig from './_mock/pivot-filter.json'
import { type DashboardConfig as Config } from '../types/DashboardConfig'
import { userEvent, within } from '@storybook/testing-library'
import ToggleExampleConfig from './_mock/toggle-example.json'
import _ from 'lodash'

const meta: Meta<typeof Dashboard> = {
  title: 'Components/Pages/Dashboard',
  component: Dashboard
}

type Story = StoryObj<typeof Dashboard>

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

export const Dashboard_Filters: Story = {
  args: {
    config: Dashboard_Filter,
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

const multiVizData = {
  'valid-world-data.json': { data }
}

export const MultiVisualization: Story = {
  args: {
    config: { ...MultiVizConfig, datasets: multiVizData },
    isEditor: false
  }
}

const sleep = ms => {
  return new Promise(r => setTimeout(r, ms))
}

const fetchMock = {
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
            IndicatorID: 'ALC04',
            TopicID: 'ALC',
            DataSource: null,
            Indicator: null,
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
    }
  ]
}

export const APIFiltersMap: Story = {
  args: {
    config: APIFiltersMapData as unknown as Config
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

export const APIFiltersChart: Story = {
  args: {
    config: APIFiltersChartData as unknown as Config
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

export default meta
