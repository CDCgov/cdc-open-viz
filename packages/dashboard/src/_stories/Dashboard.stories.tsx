import type { Meta, StoryObj } from '@storybook/react'

import DefaultData from '../../examples/default.json'
import TestExampleData from '../../examples/test-example.json'
import SharedFiltersData from '../../examples/shared-filters.json'

import Dashboard, { Config } from '../CdcDashboard'

const meta: Meta<typeof Dashboard> = {
  title: 'Components/Pages/Dashboard',
  component: Dashboard
}

type Story = StoryObj<typeof Dashboard>

export const Default: Story = {
  args: {
    config: DefaultData as unknown as Config
  }
}

export const TestExample: Story = {
  args: {
    config: TestExampleData as unknown as Config
  }
}

export const SharedFilters: Story = {
  args: {
    config: SharedFiltersData as unknown as Config
  },
  parameters: {
    fetchMock: {
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
        }
      ]
    }
  }
}

export default meta
