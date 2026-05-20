import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import FilterEditor from './FilterEditor'

vi.mock('@cdc/core/components/ui/Icon', () => ({
  default: props => <span data-testid='mock-icon' {...props} />
}))

vi.mock('@cdc/core/helpers/fetchRemoteData', () => ({
  default: vi.fn()
}))

const mockedFetchRemoteData = vi.mocked(fetchRemoteData)

beforeEach(() => {
  mockedFetchRemoteData.mockReset()
  mockedFetchRemoteData.mockResolvedValue({
    data: [
      { state: 'AK', stateName: 'Alaska' },
      { state: 'NY', stateName: 'New York' }
    ],
    dataMetadata: {}
  })
})

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
    },
    'line-data.json': {
      dataUrl: 'https://data.test/current-line.json',
      data: [{ state: 'Alaska' }]
    },
    'bite-data.json': {
      dataUrl: 'https://data.test/current-bite.json',
      data: [{ state: 'Alaska' }]
    }
  },
  rows: [
    {
      columns: [
        {
          width: 12,
          conditionalWidgets: [
            {
              widget: 'viz-1',
              dashboardCondition: {
                id: 'row-1-col-1-condition',
                datasetKey: 'nested-data.json',
                operator: 'hasData'
              }
            }
          ]
        }
      ],
      dashboardCondition: {
        id: 'row-1-condition',
        datasetKey: 'nested-data.json',
        operator: 'hasData'
      },
      expandCollapseAllButtons: false
    },
    {
      columns: [
        {
          width: 12,
          widget: 'viz-2',
          dashboardCondition: {
            id: 'row-2-col-1-condition',
            datasetKey: 'nested-data.json',
            operator: 'hasData'
          }
        }
      ],
      dashboardCondition: {
        id: 'row-2-condition',
        datasetKey: 'nested-data.json',
        operator: 'hasData'
      },
      expandCollapseAllButtons: false,
      toggle: true
    }
  ],
  visualizations: {
    'viz-1': {
      uid: 'viz-1',
      type: 'markup-include',
      contentEditor: {
        title: 'First Markup'
      }
    },
    'viz-2': {
      uid: 'viz-2',
      type: 'markup-include',
      contentEditor: {
        title: 'Toggle Markup'
      }
    }
  }
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

const createFileNameFilter = (overrides = {}) =>
  ({
    key: 'State',
    type: 'urlfilter',
    filterStyle: 'dropdown',
    showDropdown: true,
    values: ['Alaska'],
    active: 'Alaska',
    filterBy: 'File Name',
    apiFilter: {
      apiEndpoint: '/api/states',
      valueSelector: 'state',
      textSelector: 'stateName'
    },
    fileNameTargets: [{ datasetKey: 'line-data.json', fileName: 'state_${value}' }],
    whitespaceReplacement: 'Replace With Underscore',
    ...overrides
  } as any)

describe('FilterEditor API filter subgroup text selector', () => {
  it('displays subgroupTextSelector value from apiFilter', () => {
    const filter = {
      ...createNestedFilter('urlfilter'),
      apiFilter: {
        apiEndpoint: '/api/nested-options',
        valueSelector: 'year',
        subgroupValueSelector: 'quarter',
        subgroupTextSelector: 'quarterName'
      }
    } as any

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
        updateFilterProp={vi.fn()}
      />
    )

    expect(screen.getByDisplayValue('quarterName')).toBeInTheDocument()
  })

  it('shows empty string when subgroupTextSelector is absent', () => {
    const filter = createNestedFilter('urlfilter') as any

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
        updateFilterProp={vi.fn()}
      />
    )

    const inputs = screen.getAllByRole('textbox')
    const subgroupTextInput = inputs.find(el =>
      el.closest('label')?.textContent?.includes('Subgroup Display Text Selector')
    )
    expect(subgroupTextInput).toHaveValue('')
  })
})

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

  it.each([
    [
      'data-backed non-nested filters',
      {
        ...createNestedFilter('datafilter'),
        filterStyle: 'dropdown'
      }
    ],
    [
      'api-backed non-nested filters',
      {
        ...createNestedFilter('urlfilter'),
        filterStyle: 'dropdown'
      }
    ]
  ])('does not render the checkbox for %s', (_label, filter) => {
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
        updateFilterProp={vi.fn()}
      />
    )

    expect(screen.queryByLabelText('Display subgrouping only')).not.toBeInTheDocument()
  })

  it('uses row targets for row conditions and does not expose dashboard condition ids in Used By options', () => {
    render(
      <FilterEditor
        config={{
          ...baseConfig,
          dashboard: {
            sharedFilters: [
              {
                ...createNestedFilter('datafilter'),
                filterStyle: 'dropdown'
              }
            ]
          }
        }}
        filter={{
          ...createNestedFilter('datafilter'),
          filterStyle: 'dropdown'
        }}
        filterIndex={0}
        onNestedDragAreaHover={vi.fn()}
        toggleNestedQueryParameters={vi.fn()}
        updateFilterProp={vi.fn()}
      />
    )

    const expandButtons = screen.getAllByLabelText('Expand')
    fireEvent.click(expandButtons[0])

    expect(screen.getByText('Row 1')).toBeInTheDocument()
    expect(screen.queryByText('Row 1 Dashboard Condition')).not.toBeInTheDocument()
    expect(screen.queryByText('Row 1 Column 1 Component 1 Dashboard Condition')).not.toBeInTheDocument()
    expect(screen.queryByText('Row 2 Dashboard Condition')).not.toBeInTheDocument()
    expect(screen.queryByText('Row 2 Column 1 Dashboard Condition')).not.toBeInTheDocument()
  })

  it('updates dashboard shared filter note text', async () => {
    const filter = {
      ...createNestedFilter('datafilter'),
      filterStyle: 'dropdown',
      note: 'Existing note'
    }
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

    fireEvent.change(screen.getByLabelText('Note'), { target: { value: 'Helpful note' } })

    await waitFor(() => {
      expect(updateFilterProp).toHaveBeenCalledWith('note', 'Helpful note')
    })
  })
})

describe('FilterEditor File Name URL targets', () => {
  it('adds a fileNameTargets row without writing legacy datasetKey or fileName', () => {
    const updateFilterProp = vi.fn()
    const filter = createFileNameFilter({ fileNameTargets: [] })

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

    fireEvent.click(screen.getByRole('button', { name: 'Add Target' }))

    expect(updateFilterProp).toHaveBeenCalledWith('fileNameTargets', [
      { datasetKey: 'line-data.json', fileName: '${value}' }
    ])
    expect(updateFilterProp).not.toHaveBeenCalledWith('datasetKey', expect.anything())
    expect(updateFilterProp).not.toHaveBeenCalledWith('fileName', expect.anything())
  })

  it('updates only the edited target template', async () => {
    const updateFilterProp = vi.fn()
    const filter = createFileNameFilter({
      fileNameTargets: [
        { datasetKey: 'line-data.json', fileName: 'state_${value}' },
        { datasetKey: 'bite-data.json', fileName: 'state_${value}_data_bite' }
      ]
    })

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

    fireEvent.change(screen.getAllByLabelText('File Name Template')[1], {
      target: { value: 'rate_${value}_bite' }
    })

    await waitFor(() =>
      expect(updateFilterProp).toHaveBeenCalledWith('fileNameTargets', [
        { datasetKey: 'line-data.json', fileName: 'state_${value}' },
        { datasetKey: 'bite-data.json', fileName: 'rate_${value}_bite' }
      ])
    )
    expect(updateFilterProp).not.toHaveBeenCalledWith('fileName', expect.anything())
  })

  it('removes only the selected target', () => {
    const updateFilterProp = vi.fn()
    const filter = createFileNameFilter({
      fileNameTargets: [
        { datasetKey: 'line-data.json', fileName: 'state_${value}' },
        { datasetKey: 'bite-data.json', fileName: 'state_${value}_data_bite' }
      ]
    })

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

    fireEvent.click(screen.getAllByRole('button', { name: 'Remove Target' })[0])

    expect(updateFilterProp).toHaveBeenCalledWith('fileNameTargets', [
      { datasetKey: 'bite-data.json', fileName: 'state_${value}_data_bite' }
    ])
  })

  it('does not render the legacy URL to Filter or filter-level File Name controls', () => {
    render(
      <FilterEditor
        config={{
          ...baseConfig,
          dashboard: { sharedFilters: [createFileNameFilter()] }
        }}
        filter={createFileNameFilter()}
        filterIndex={0}
        onNestedDragAreaHover={vi.fn()}
        toggleNestedQueryParameters={vi.fn()}
        updateFilterProp={vi.fn()}
      />
    )

    expect(screen.queryByLabelText('URL to Filter')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('File Name:')).not.toBeInTheDocument()
    expect(screen.getByLabelText('File Name Template')).toBeInTheDocument()
  })

  it('renders inline dropdown option fields and hides query parameter controls for File Name filters', async () => {
    const updateFilterProp = vi.fn()
    const filter = createFileNameFilter()

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

    expect(screen.getByText('Filter Options Source')).toBeInTheDocument()
    expect(screen.getByLabelText('File or URL with options')).toHaveAttribute(
      'placeholder',
      '/path/to/filter-options.json'
    )
    expect(screen.queryByLabelText('Create query parameters')).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Edit API Values' })).not.toBeInTheDocument()
    expect(screen.getByText('Filter Options Source').closest('.border')).toHaveClass('bg-light')
    expect(screen.getByText('Filter Targets').closest('.border')).toHaveClass('bg-light')
    expect(screen.getByLabelText('File Name Template').closest('.border')).toHaveClass('bg-white')

    await screen.findByText('Options file loaded. Choose fields below.')

    fireEvent.change(screen.getByLabelText('File or URL with options'), { target: { value: '/api/new-states' } })
    fireEvent.change(screen.getByLabelText('Display Text Selector'), { target: { value: 'state' } })

    await waitFor(() => {
      expect(updateFilterProp).toHaveBeenCalledWith('apiFilter', {
        apiEndpoint: '/api/new-states',
        valueSelector: 'state',
        textSelector: 'stateName'
      })
      expect(updateFilterProp).toHaveBeenCalledWith('apiFilter', {
        apiEndpoint: '/api/states',
        valueSelector: 'state',
        textSelector: 'state'
      })
    })
  })

  it('populates value and display field dropdowns from the options file', async () => {
    const updateFilterProp = vi.fn()
    const filter = createFileNameFilter({
      apiFilter: {
        apiEndpoint: '/api/states',
        valueSelector: '',
        textSelector: ''
      }
    })

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

    await screen.findByText('Options file loaded. Choose fields below.')

    expect(screen.getByLabelText('Value Selector')).not.toBeDisabled()
    expect(screen.getByLabelText('Display Text Selector')).not.toBeDisabled()
    expect(screen.getByLabelText('Value Selector')).toHaveClass('cove-form-select', 'w-100')
    expect(screen.getByLabelText('Display Text Selector')).toHaveClass('cove-form-select', 'w-100')
    expect(screen.getByLabelText('Value Selector')).toHaveStyle({ textTransform: 'none' })
    expect(screen.getByLabelText('Display Text Selector')).toHaveStyle({ textTransform: 'none' })
    expect(screen.getAllByRole('option', { name: 'state' })).toHaveLength(2)
    expect(screen.getAllByRole('option', { name: 'stateName' })).toHaveLength(2)

    fireEvent.change(screen.getByLabelText('Value Selector'), { target: { value: 'state' } })
    fireEvent.change(screen.getByLabelText('Display Text Selector'), { target: { value: 'stateName' } })

    expect(updateFilterProp).toHaveBeenCalledWith('apiFilter', {
      apiEndpoint: '/api/states',
      valueSelector: 'state',
      textSelector: ''
    })
    expect(updateFilterProp).toHaveBeenCalledWith('apiFilter', {
      apiEndpoint: '/api/states',
      valueSelector: '',
      textSelector: 'stateName'
    })
  })

  it('allows the display field to remain empty so it uses the value field', async () => {
    const updateFilterProp = vi.fn()
    const filter = createFileNameFilter()

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

    await screen.findByText('Options file loaded. Choose fields below.')

    expect(screen.getByRole('option', { name: 'Use value field' })).toBeInTheDocument()
    fireEvent.change(screen.getByLabelText('Display Text Selector'), { target: { value: '' } })

    expect(updateFilterProp).toHaveBeenCalledWith('apiFilter', {
      apiEndpoint: '/api/states',
      valueSelector: 'state',
      textSelector: ''
    })
  })

  it('shows an error and preserves existing field selections when the options file cannot be loaded', async () => {
    mockedFetchRemoteData.mockRejectedValue(new Error('Could not load'))
    const updateFilterProp = vi.fn()
    const filter = createFileNameFilter({
      apiFilter: {
        apiEndpoint: '/missing-options.json',
        valueSelector: 'legacy_value',
        textSelector: 'legacy_label'
      }
    })

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

    await screen.findByText('Fields could not be loaded. check the file or URL and try again.')

    expect(screen.getByLabelText('Value Selector')).toHaveValue('legacy_value')
    expect(screen.getByLabelText('Display Text Selector')).toHaveValue('legacy_label')
    expect(screen.getByRole('option', { name: 'legacy_value' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'legacy_label' })).toBeInTheDocument()
    expect(updateFilterProp).not.toHaveBeenCalled()
  })

  it('preserves saved field selections and warns when the loaded options do not include them', async () => {
    mockedFetchRemoteData.mockResolvedValue({
      data: [{ otherValue: 'AK', otherText: 'Alaska' }],
      dataMetadata: {}
    })
    const updateFilterProp = vi.fn()
    const filter = createFileNameFilter({
      apiFilter: {
        apiEndpoint: '/api/states',
        valueSelector: 'legacy_value',
        textSelector: 'legacy_label'
      }
    })

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

    await screen.findByText('Options file loaded. Choose fields below.')

    expect(screen.getByLabelText('Value Selector')).toHaveValue('legacy_value')
    expect(screen.getByLabelText('Display Text Selector')).toHaveValue('legacy_label')
    expect(screen.getByRole('option', { name: 'legacy_value' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'legacy_label' })).toBeInTheDocument()
    expect(
      screen.getAllByText('This saved field was not found in the options file. It has been preserved.')
    ).toHaveLength(2)
    expect(updateFilterProp).not.toHaveBeenCalled()
  })

  it.each([
    ['empty', []],
    ['invalid', { state: 'Alaska' }]
  ])('shows no fields found and preserves config for a %s options response', async (_label, data) => {
    mockedFetchRemoteData.mockResolvedValue({
      data: data as any,
      dataMetadata: {}
    })
    const updateFilterProp = vi.fn()
    const filter = createFileNameFilter()

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

    await screen.findByText('The file loaded, but no fields were found.')

    expect(screen.getByLabelText('Value Selector')).toHaveValue('state')
    expect(screen.getByLabelText('Display Text Selector')).toHaveValue('stateName')
    expect(updateFilterProp).not.toHaveBeenCalled()
  })

  it('updates the Force Capitalization compatibility toggle for File Name filters', () => {
    const updateFilterProp = vi.fn()

    render(
      <FilterEditor
        config={{
          ...baseConfig,
          dashboard: { sharedFilters: [createFileNameFilter()] }
        }}
        filter={createFileNameFilter()}
        filterIndex={0}
        onNestedDragAreaHover={vi.fn()}
        toggleNestedQueryParameters={vi.fn()}
        updateFilterProp={updateFilterProp}
      />
    )

    fireEvent.click(screen.getByLabelText('Force Capitalization'))

    expect(updateFilterProp).toHaveBeenCalledWith('forceFileNameCapitalization', true)
  })

  it('does not show Force Capitalization for Query String filters', () => {
    const filter = {
      ...createFileNameFilter(),
      filterBy: 'Query String'
    }

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
        updateFilterProp={vi.fn()}
      />
    )

    expect(screen.queryByLabelText('Force Capitalization')).not.toBeInTheDocument()
  })
})
