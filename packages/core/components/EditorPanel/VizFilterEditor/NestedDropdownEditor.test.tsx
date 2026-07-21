import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import NestedDropdownEditor from './NestedDropdownEditor'

vi.mock('../../ui/Icon', () => ({
  default: props => <span data-testid='mock-icon' {...props} />
}))

describe('NestedDropdownEditor', () => {
  it('keeps the current subgroup column available while excluding other filter columns', () => {
    render(
      <NestedDropdownEditor
        config={
          {
            filters: [
              {
                id: 1,
                label: 'Location',
                filterStyle: 'combobox',
                columnName: 'location',
                values: ['North Clinic'],
                order: 'asc'
              },
              {
                id: 2,
                label: 'Category and Type',
                filterStyle: 'nested-dropdown',
                columnName: 'category',
                values: ['A'],
                order: 'asc',
                subGrouping: {
                  columnName: 'otherSubgroup',
                  valuesLookup: {
                    A: { values: ['One'] }
                  }
                }
              },
              {
                id: 3,
                label: 'Region and Location Type',
                filterStyle: 'nested-dropdown',
                columnName: 'region',
                values: ['North', 'South'],
                order: 'asc',
                subGrouping: {
                  columnName: 'locationType',
                  valuesLookup: {
                    North: { values: ['Clinic', 'Mobile Unit'] },
                    South: { values: ['Clinic', 'Community Site'] }
                  }
                }
              }
            ]
          } as any
        }
        dataColumns={[
          'location',
          'locationDescription',
          'category',
          'otherSubgroup',
          'region',
          'locationType',
          'locationTypeDescription'
        ]}
        filterIndex={2}
        handleGroupingCustomOrder={vi.fn()}
        handleNameChange={vi.fn()}
        rawData={[
          { location: 'North Clinic', region: 'North', locationType: 'Clinic' },
          { location: 'North Mobile Unit', region: 'North', locationType: 'Mobile Unit' },
          { location: 'South Community Site', region: 'South', locationType: 'Community Site' }
        ]}
        updateField={vi.fn()}
        updateFilterStyle={vi.fn()}
      />
    )

    const subgroupSelect = screen
      .getAllByLabelText('Filter SubGrouping')
      .find((field): field is HTMLSelectElement => field instanceof HTMLSelectElement)

    if (!subgroupSelect) throw new Error('Filter SubGrouping select not found')

    const optionValues = Array.from(subgroupSelect.options).map(option => option.value)

    expect(optionValues).toContain('locationType')
    expect(optionValues).not.toContain('location')
    expect(optionValues).not.toContain('category')
    expect(optionValues).not.toContain('otherSubgroup')
  })

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

  it('does not render the subgroup-only checkbox when the filter is not nested-dropdown', () => {
    render(
      <NestedDropdownEditor
        config={
          {
            filters: [
              {
                label: 'Year and Quarter',
                filterStyle: 'dropdown',
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
        updateField={vi.fn()}
        updateFilterStyle={vi.fn()}
      />
    )

    expect(screen.queryByLabelText('Display subgrouping only')).not.toBeInTheDocument()
  })

  it('updates filter note text', async () => {
    const updateField = vi.fn()

    render(
      <NestedDropdownEditor
        config={
          {
            filters: [
              {
                label: 'Year and Quarter',
                filterStyle: 'nested-dropdown',
                note: 'Existing note',
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

    fireEvent.change(screen.getByLabelText('Note'), { target: { value: 'Helpful note' } })

    await waitFor(() => {
      expect(updateField).toHaveBeenCalledWith('filters', 0, 'note', 'Helpful note')
    })
  })

  it('does not create subgroup config from subgroup description alone', () => {
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
                order: 'asc'
              }
            ]
          } as any
        }
        dataColumns={['year', 'quarter', 'region']}
        filterIndex={0}
        handleGroupingCustomOrder={vi.fn()}
        handleNameChange={vi.fn()}
        rawData={[
          { year: '2023', quarter: 'Q1', region: 'North' },
          { year: '2023', quarter: 'Q2', region: 'South' }
        ]}
        updateField={updateField}
        updateFilterStyle={vi.fn()}
      />
    )

    const descriptionFields = screen
      .getAllByLabelText('Subgroup Description Field')
      .filter((field: HTMLSelectElement) =>
        Array.from(field.options).some(option => option.value === '' && option.textContent === 'None')
      )

    descriptionFields.forEach(descriptionField => {
      expect(descriptionField).toBeDisabled()

      fireEvent.change(descriptionField, { target: { value: 'region' } })
    })

    expect(updateField).not.toHaveBeenCalledWith(
      'filters',
      0,
      'subGrouping',
      expect.objectContaining({ subgroupDescriptionSelector: 'region' })
    )
  })
})
