import type { Meta, StoryObj } from '@storybook/react'
import APIFiltersMapData from './_mock/api-filter-map.json'
import APIFiltersChartData from './_mock/api-filter-chart.json'
import ExampleConfig_1 from './_mock/dashboard-gallery.json'
import ExampleConfig_2 from './_mock/dashboard-2.json'
import ExampleConfig_3 from './_mock/dashboard_no_filter.json'
import Dashboard from '../CdcDashboard'
import { Config } from '../types/Config'
import { userEvent, within } from '@storybook/testing-library'

const meta: Meta<typeof Dashboard> = {
  title: 'Components/Pages/Dashboard',
  component: Dashboard
}

type Story = StoryObj<typeof Dashboard>

export const Example_1: Story = {
  args: {
    config: ExampleConfig_1 as unknown as Config
  }
}

export const Example_2: Story = {
  args: {
    config: ExampleConfig_2 as unknown as Config
  }
}

export const Example_3: Story = {
  args: {
    config: ExampleConfig_3 as unknown as Config
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
    {
      matcher: {
        name: 'filters',
        url: 'path:/api/POC/Filters'
      },
      response: {
        status: 200,
        body: {
          Years: [{ Year: 1999 }],
          DataValueTypes: [{ DataValueType: 'Some Data Value Type', DataValueTypeId: 'dataValueTypeId' }],
          StratificationCategories: [{ StratificationCategoryId: 'stratCategoryId', StratificationCategory: 'Some Strat Category' }]
        }
      }
    },
    {
      matcher: {
        name: 'stratifications',
        url: 'path:/api/POC/stratifications'
      },
      response: {
        status: 200,
        body: [
          {
            StratificationId: 'stratId',
            Stratification: 'Some Strat'
          }
        ]
      }
    },
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
    await user.selectOptions(yearsFilter, ['1999'])
    const stratCategoryFilter = canvas.getByLabelText('View By', { selector: 'select' })
    await user.selectOptions(stratCategoryFilter, ['stratCategoryId'])
    const stratFilter = canvas.getByLabelText('Stratification', { selector: 'select' })
    await user.selectOptions(stratFilter, ['stratId'])
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
    const yearFilter = canvas.getByLabelText('Year', { selector: 'select' })
    await user.selectOptions(yearFilter, ['1999'])
  }
}

export default meta
