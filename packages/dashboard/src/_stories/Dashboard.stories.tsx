import type { Meta, StoryObj } from '@storybook/react'

import DefaultData from '../../examples/default.json'
import TestExampleData from '../../examples/test-example.json'

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

export default meta
