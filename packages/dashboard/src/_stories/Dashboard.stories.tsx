import type { Meta, StoryObj } from '@storybook/react'

import DefaultData from '../../examples/default.json'
import TestExampleData from '../../examples/test-example.json'
import SharedFiltersData from '../../examples/shared-filters.json'

import Dashboard from '../CdcDashboard'
import { Config } from '../types/Config'
import { userEvent, within, fireEvent, waitFor } from '@storybook/testing-library'

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

const sleep = ms => {
  return new Promise(r => setTimeout(r, ms))
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
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()
    // play is running before full rendering is complete so sleep function
    // is needed to delay the execution.
    // possible related bug: https://github.com/storybookjs/storybook/issues/18258
    await sleep(1000)
    const topicsFilter = canvas.getByLabelText('Topics', { selector: 'select' })
    await user.selectOptions(topicsFilter, ['topicId'])
    const indicatorsFilter = canvas.getByLabelText('Indicators', { selector: 'select' })
    await user.selectOptions(indicatorsFilter, ['indicatorID'])
    await user.click(canvas.getByText('GO!'))
  }
}

export default meta
