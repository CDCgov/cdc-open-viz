import { Meta, StoryObj } from '@storybook/react-vite'
import DashboardFilters from '../DashboardFilters'
import '../../../scss/main.scss'

const meta: Meta<typeof DashboardFilters> = {
  title: 'Components/Atoms/Inputs/DashboardFilters',
  component: DashboardFilters,
  decorators: [
    Story => (
      <div className='cdc-open-viz-module type-dashboard'>
        <Story />
      </div>
    )
  ]
}

type Story = StoryObj<typeof DashboardFilters>

export const Example_1: Story = {
  args: {
    filters: [
      {
        type: 'datafilter',
        key: 'label here',
        values: ['1', '2', '3', '4'],
        columnName: 'label',
        showDropdown: true,
        id: 0,
        parents: []
      } as any,
      {
        type: 'datafilter',
        key: 'something',
        values: ['A', 'B', 'C'],
        columnName: 'something',
        showDropdown: true,
        id: 1,
        parents: []
      } as any
    ],
    show: [0, 1],
    apiFilterDropdowns: {},
    handleOnChange: () => {}
  }
}

export const WithClearButton: Story = {
  args: {
    filters: [
      {
        type: 'datafilter',
        key: 'Category',
        values: ['Option 1', 'Option 2', 'Option 3'],
        active: 'Option 1',
        columnName: 'category',
        showDropdown: true,
        id: 0,
        parents: []
      } as any,
      {
        type: 'datafilter',
        key: 'Status',
        values: ['Active', 'Inactive', 'Pending'],
        active: 'Active',
        columnName: 'status',
        showDropdown: true,
        id: 1,
        parents: []
      } as any
    ],
    show: [0, 1],
    apiFilterDropdowns: {},
    handleOnChange: () => {},
    showSubmit: true,
    applyFilters: () => {},
    handleReset: () => {}
  }
}

export default meta
