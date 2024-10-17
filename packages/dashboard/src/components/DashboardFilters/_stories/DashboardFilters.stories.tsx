import { Meta, StoryObj } from '@storybook/react'
import DashboardFilters from '../DashboardFilters'

const meta: Meta<typeof DashboardFilters> = {
  title: 'Components/Atoms/Inputs/DashboardFilters',
  component: DashboardFilters
}

type Story = StoryObj<typeof DashboardFilters>

export const Example_1: Story = {
  args: {
    filters: [
      { type: 'datafilter', key: 'label here', values: [1, 2, 3, 4] },
      { type: 'datafilter', key: 'something' }
    ],
    handleOnChange: () => {}
  }
}

export default meta
