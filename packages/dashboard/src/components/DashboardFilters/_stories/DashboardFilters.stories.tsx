import { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import DashboardFilters from '../DashboardFilters'
import '../../../scss/main.scss'

const meta: Meta<typeof DashboardFilters> = {
  title: 'Components/Atoms/Inputs/DashboardFilters',
  component: DashboardFilters,
  decorators: [
    Story => (
      <div className='cove-visualization type-dashboard'>
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

const criddLongDiseaseLabel =
  'Paratyphoid fever (Salmonella enterica serotypes Paratyphi A, B (tartrate negative) and C (S. Paratyphi) infection)'

export const NestedDropdownWithNoteWidthCap: Story = {
  args: {
    filters: [
      {
        type: 'datafilter',
        key: 'Condition',
        filterStyle: 'nested-dropdown',
        columnName: 'category',
        showDropdown: true,
        active: '',
        resetLabel: 'Type to search for a disease',
        displaySubgroupingOnly: true,
        values: ['Enteric Diseases', 'Respiratory diseases'],
        orderedValues: ['Enteric Diseases', 'Respiratory diseases'],
        subGrouping: {
          active: '',
          columnName: 'condition',
          valuesLookup: {
            'Enteric Diseases': {
              values: ['Campylobacteriosis', criddLongDiseaseLabel],
              orderedValues: ['Campylobacteriosis', criddLongDiseaseLabel]
            },
            'Respiratory diseases': {
              values: ['Tuberculosis'],
              orderedValues: ['Tuberculosis']
            }
          }
        },
        note: 'You can search for a disease name or for keywords.'
      } as any,
      {
        type: 'datafilter',
        key: 'Topic',
        values: ['Adult'],
        active: 'Adult',
        columnName: 'topic',
        showDropdown: true,
        id: 1,
        parents: []
      } as any
    ],
    show: [0, 1],
    apiFilterDropdowns: {},
    handleOnChange: () => {}
  },
  play: async ({ canvasElement }) => {
    const form = canvasElement.querySelector('.dashboard-filters__form') as HTMLElement
    const field = canvasElement.querySelector('.dashboard-filters__field:has(.nested-dropdown)') as HTMLElement
    const note = field.querySelector('.filters-section__note-text') as HTMLElement
    const nestedDropdown = field.querySelector('.nested-dropdown') as HTMLElement
    const inputContainer = field.querySelector('.nested-dropdown-input-container') as HTMLElement

    expect(form).toHaveClass('filters-section__wrapper--multiple')
    expect(note).toBeInTheDocument()
    expect(inputContainer).toHaveAttribute('data-sizing-text', criddLongDiseaseLabel)
    expect(getComputedStyle(field).maxWidth).toBe(getComputedStyle(note).maxWidth)
    expect(nestedDropdown.getBoundingClientRect().width).toBeLessThanOrEqual(field.getBoundingClientRect().width + 1)
  }
}

export default meta
