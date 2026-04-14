import { fireEvent, render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import DashboardFilters from './DashboardFilters'

vi.mock('@cdc/core/components/ui/Icon', () => ({
  default: props => <span data-testid='mock-icon' {...props} />
}))

const createDataBackedFilter = (displaySubgroupingOnly = false) =>
  ({
    key: 'Year and Quarter',
    type: 'datafilter',
    filterStyle: 'nested-dropdown',
    showDropdown: true,
    values: ['2023', '2024'],
    columnName: 'year',
    id: 0,
    parents: [],
    order: 'asc',
    active: '2023',
    displaySubgroupingOnly,
    subGrouping: {
      columnName: 'quarter',
      active: 'Q2',
      valuesLookup: {
        '2023': { values: ['Q1', 'Q2'] },
        '2024': { values: ['Q3', 'Q4'] }
      }
    }
  } as any)

const createApiBackedFilter = (displaySubgroupingOnly = false) =>
  ({
    key: 'API Year and Quarter',
    type: 'urlfilter',
    filterStyle: 'nested-dropdown',
    showDropdown: true,
    values: [],
    columnName: 'year',
    id: 0,
    parents: [],
    order: 'asc',
    active: '2023',
    displaySubgroupingOnly,
    apiFilter: {
      apiEndpoint: '/api/nested-options',
      valueSelector: 'year',
      subgroupValueSelector: 'quarter'
    },
    subGrouping: {
      columnName: 'quarter',
      active: 'Q2',
      valuesLookup: {}
    }
  } as any)

const apiFilterDropdowns = {
  '/api/nested-options': [
    {
      value: '2023',
      text: '2023',
      subOptions: [
        { value: 'Q1', text: 'Q1' },
        { value: 'Q2', text: 'Q2' }
      ]
    },
    {
      value: '2024',
      text: '2024',
      subOptions: [
        { value: 'Q3', text: 'Q3' },
        { value: 'Q4', text: 'Q4' }
      ]
    }
  ]
}

describe('DashboardFilters nested dropdown display', () => {
  it.each([
    ['data-backed', createDataBackedFilter(false), {}, '2023 - Q2'],
    ['data-backed subgroup only', createDataBackedFilter(true), {}, 'Q2'],
    ['api-backed', createApiBackedFilter(false), apiFilterDropdowns, '2023 - Q2'],
    ['api-backed subgroup only', createApiBackedFilter(true), apiFilterDropdowns, 'Q2']
  ])('shows the expected closed text for %s filters', (_label, filter, dropdowns, expectedValue) => {
    const { container } = render(
      <DashboardFilters
        applyFilters={vi.fn()}
        apiFilterDropdowns={dropdowns as any}
        filters={[filter]}
        handleOnChange={vi.fn()}
        show={[0]}
        showSubmit={false}
      />
    )

    const input = container.querySelector('.nested-dropdown input')
    expect(input).toHaveValue(expectedValue)
  })

  it.each([
    ['data-backed', createDataBackedFilter(false), {}],
    ['data-backed subgroup only', createDataBackedFilter(true), {}],
    ['api-backed', createApiBackedFilter(false), apiFilterDropdowns],
    ['api-backed subgroup only', createApiBackedFilter(true), apiFilterDropdowns]
  ])('keeps nested dropdown selection behavior unchanged for %s filters', (_label, filter, dropdowns) => {
    const handleOnChange = vi.fn()
    const { container, getByText, queryByText } = render(
      <DashboardFilters
        applyFilters={vi.fn()}
        apiFilterDropdowns={dropdowns as any}
        filters={[filter]}
        handleOnChange={handleOnChange}
        show={[0]}
        showSubmit={false}
      />
    )

    const input = container.querySelector('.nested-dropdown input') as HTMLInputElement
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: 'Q3' } })

    expect(getByText('2024')).toBeInTheDocument()
    expect(queryByText('2023')).not.toBeInTheDocument()

    fireEvent.click(getByText('Q3'))

    expect(handleOnChange).toHaveBeenCalledWith(0, ['2024', 'Q3'])
  })
})
