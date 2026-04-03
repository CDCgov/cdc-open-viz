import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import FilterEditor from './FilterEditor'

vi.mock('@cdc/core/components/ui/Icon', () => ({
  default: props => <span data-testid='mock-icon' {...props} />
}))

const baseConfig = {
  dashboard: {
    sharedFilters: []
  },
  datasets: {
    'nested-data.json': {
      data: [
        { region: 'North', year: '2023', quarter: 'Q1' },
        { region: 'North', year: '2023', quarter: 'Q2' }
      ]
    }
  },
  rows: [],
  visualizations: {}
} as any

const createNestedFilter = (type: 'datafilter' | 'urlfilter') =>
  ({
    key: 'Year and Quarter',
    type,
    filterStyle: 'nested-dropdown',
    showDropdown: true,
    values: ['2023', '2024'],
    columnName: 'year',
    id: 0,
    parents: [],
    order: 'asc',
    subGrouping: {
      columnName: 'quarter',
      valuesLookup: {
        '2023': { values: ['Q1', 'Q2'] },
        '2024': { values: ['Q3', 'Q4'] }
      }
    },
    ...(type === 'urlfilter'
      ? {
          apiFilter: {
            apiEndpoint: '/api/nested-options',
            valueSelector: 'year',
            subgroupValueSelector: 'quarter'
          }
        }
      : {})
  } as any)

describe('FilterEditor nested dropdown display toggle', () => {
  it.each([
    ['data-backed nested filters', createNestedFilter('datafilter')],
    ['api-backed nested filters', createNestedFilter('urlfilter')]
  ])('renders the checkbox below Create query parameters for %s', (_label, filter) => {
    const updateFilterProp = vi.fn()

    render(
      <FilterEditor
        config={{
          ...baseConfig,
          dashboard: { sharedFilters: [filter] }
        }}
        filter={filter}
        filterIndex={0}
        onNestedDragAreaHover={vi.fn()}
        toggleNestedQueryParameters={vi.fn()}
        updateFilterProp={updateFilterProp}
      />
    )

    const queryParameters = screen.getByLabelText('Create query parameters')
    const displaySubgroupingOnly = screen.getByLabelText('Display subgrouping only')

    expect(displaySubgroupingOnly).not.toBeChecked()

    const queryParametersLabel = queryParameters.closest('label')
    const displaySubgroupingOnlyLabel = displaySubgroupingOnly.closest('label')
    const isBelowQueryParameters = !!(
      queryParametersLabel &&
      displaySubgroupingOnlyLabel &&
      queryParametersLabel.compareDocumentPosition(displaySubgroupingOnlyLabel) & Node.DOCUMENT_POSITION_FOLLOWING
    )

    expect(isBelowQueryParameters).toBe(true)

    fireEvent.click(displaySubgroupingOnly)

    expect(updateFilterProp).toHaveBeenCalledWith('displaySubgroupingOnly', true)
  })
})
