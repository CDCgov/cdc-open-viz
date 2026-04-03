import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import NestedDropdownEditor from './NestedDropdownEditor'

describe('NestedDropdownEditor', () => {
  it('renders the subgroup-only checkbox below Create query parameters and defaults it to unchecked', () => {
    const updateField = vi.fn()

    render(
      <NestedDropdownEditor
        config={
          {
            filters: [
              {
                label: 'Year and Quarter',
                filterStyle: 'nested-dropdown',
                columnName: 'year',
                values: ['2023', '2024'],
                order: 'asc',
                subGrouping: {
                  columnName: 'quarter',
                  valuesLookup: {
                    '2023': { values: ['Q1', 'Q2'] },
                    '2024': { values: ['Q3', 'Q4'] }
                  }
                }
              }
            ]
          } as any
        }
        dataColumns={['year', 'quarter', 'region']}
        filterIndex={0}
        handleGroupingCustomOrder={vi.fn()}
        handleNameChange={vi.fn()}
        rawData={[
          { year: '2023', quarter: 'Q1' },
          { year: '2023', quarter: 'Q2' },
          { year: '2024', quarter: 'Q3' }
        ]}
        updateField={updateField}
        updateFilterStyle={vi.fn()}
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

    expect(updateField).toHaveBeenCalledWith('filters', 0, 'displaySubgroupingOnly', true)
  })
})
