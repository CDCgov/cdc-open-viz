import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { DashboardContext, DashboardDispatchContext, initialState } from '../../../DashboardContext'
import { GlobalContext } from '@cdc/core/components/GlobalContext'
import DashboardFiltersEditor from './DashboardFiltersEditor'

vi.mock('@cdc/core/components/ui/Icon', () => ({
  default: props => <span data-testid='mock-icon' {...props} />
}))

vi.mock('@hello-pangea/dnd', () => ({
  DragDropContext: ({ children }) => <div>{children}</div>,
  Droppable: ({ children }) => <div>{children({ droppableProps: {}, innerRef: vi.fn(), placeholder: null })}</div>,
  Draggable: ({ children }) => (
    <div>
      {children(
        {
          draggableProps: { style: {} },
          dragHandleProps: {},
          innerRef: vi.fn()
        },
        { isDragging: false }
      )}
    </div>
  )
}))

const renderEditor = (
  visual = { grayBackground: false },
  sharedFilters = [],
  sharedFilterIndexes = [],
  apiFilterDropdowns = {}
) => {
  const updateConfig = vi.fn()
  const dispatch = vi.fn()
  const vizConfig = {
    uid: 'dashboardFilters1',
    type: 'dashboardFilters',
    visualizationType: 'dashboardFilters',
    filterBehavior: 'Filter Change',
    filterIntro: '',
    sharedFilterIndexes,
    visual
  } as any

  const rendered = render(
    <GlobalContext.Provider
      value={{
        overlay: {
          object: null,
          show: false,
          disableBgClose: false,
          actions: {
            openOverlay: vi.fn(),
            toggleOverlay: vi.fn()
          }
        }
      }}
    >
      <DashboardContext.Provider
        value={{
          ...initialState,
          config: {
            type: 'dashboard',
            dashboard: { sharedFilters },
            datasets: {},
            rows: [],
            visualizations: {
              dashboardFilters1: vizConfig
            }
          } as any,
          data: {},
          outerContainerRef: vi.fn(),
          setParentConfig: vi.fn(),
          isDebug: false,
          isEditor: true,
          reloadURLData: vi.fn(),
          loadAPIFilters: vi.fn(),
          setAPIFilterDropdowns: vi.fn(),
          setAPILoading: vi.fn()
        }}
      >
        <DashboardDispatchContext.Provider value={dispatch}>
          <DashboardFiltersEditor
            apiFilterDropdowns={apiFilterDropdowns}
            updateConfig={updateConfig}
            vizConfig={vizConfig}
          />
        </DashboardDispatchContext.Provider>
      </DashboardContext.Provider>
    </GlobalContext.Provider>
  )

  return { ...rendered, dispatch, updateConfig, vizConfig }
}

describe('DashboardFiltersEditor', () => {
  it('renders a Visual accordion with a Gray Background option', () => {
    renderEditor()

    expect(screen.getByText('Visual')).toBeInTheDocument()
    expect(screen.getAllByLabelText('Use Gray Background Style')[0]).not.toBeChecked()
  })

  it('updates visual.grayBackground when Gray Background is toggled', () => {
    const { updateConfig, vizConfig } = renderEditor()

    fireEvent.click(screen.getAllByLabelText('Use Gray Background Style')[0])

    expect(updateConfig).toHaveBeenCalledWith({
      ...vizConfig,
      visual: {
        grayBackground: true
      }
    })
  })

  it('updates filterIntro from the General panel', async () => {
    const { updateConfig, vizConfig } = renderEditor()

    fireEvent.change(screen.getByLabelText('Filter intro text'), {
      target: { value: 'Choose filters before viewing results.' }
    })

    await waitFor(() => {
      expect(updateConfig).toHaveBeenCalledWith({
        ...vizConfig,
        filterIntro: 'Choose filters before viewing results.'
      })
    })
  })

  it.each([
    ['combobox', 'tab-simple'],
    ['tab-simple', 'combobox'],
    ['dropdown', 'combobox']
  ])('preserves scalar data filter state when switching from %s to %s', (initialStyle, nextStyle) => {
    const sharedFilter = {
      key: 'Status',
      type: 'datafilter',
      filterStyle: initialStyle,
      showDropdown: true,
      values: ['Show', 'Hide'],
      orderedValues: ['Show', 'Hide'],
      columnName: 'status',
      defaultValue: 'Show',
      active: 'Hide',
      order: 'cust'
    }
    const { container, dispatch } = renderEditor({ grayBackground: false }, [sharedFilter], [0])

    fireEvent.click(container.querySelector('.editor-field-item__header button') as HTMLButtonElement)
    fireEvent.change(screen.getAllByLabelText('Filter Style')[0], { target: { value: nextStyle } })

    expect(dispatch).toHaveBeenCalledWith({
      type: 'SET_SHARED_FILTERS',
      payload: [
        {
          ...sharedFilter,
          filterStyle: nextStyle
        }
      ]
    })
  })

  it.each([
    ['dropdown', 'multi-select', ['Show']],
    ['dropdown', 'nested-dropdown', 'Show'],
    ['multi-select', 'dropdown', 'Show']
  ])('applies the configured default when switching a data filter from %s to %s', (initialStyle, nextStyle, active) => {
    const sharedFilter = {
      key: 'Status',
      type: 'datafilter',
      filterStyle: initialStyle,
      showDropdown: true,
      values: ['Show', 'Hide'],
      orderedValues: ['Show', 'Hide'],
      columnName: 'status',
      defaultValue: 'Show',
      active: initialStyle === 'multi-select' ? ['Hide'] : '',
      order: 'cust'
    }
    const { container, dispatch } = renderEditor({ grayBackground: false }, [sharedFilter], [0])

    fireEvent.click(container.querySelector('.editor-field-item__header button') as HTMLButtonElement)
    fireEvent.change(screen.getAllByLabelText('Filter Style')[0], { target: { value: nextStyle } })

    expect(dispatch).toHaveBeenCalledWith({
      type: 'SET_SHARED_FILTERS',
      payload: [
        {
          ...sharedFilter,
          active,
          apiFilter: {
            apiEndpoint: '',
            subgroupValueSelector: '',
            textSelector: '',
            valueSelector: ''
          },
          filterStyle: nextStyle
        }
      ]
    })
  })

  it('hides tab-simple for URL filters while preserving it for data filters', () => {
    const urlFilter = {
      key: 'Disease',
      type: 'urlfilter',
      filterBy: 'Query String',
      filterStyle: 'dropdown',
      showDropdown: true,
      values: [],
      active: '',
      apiFilter: {
        apiEndpoint: '/api/disease-options',
        valueSelector: 'disease_id',
        textSelector: 'disease_name'
      }
    }
    const urlEditor = renderEditor({ grayBackground: false }, [urlFilter], [0])

    fireEvent.click(urlEditor.container.querySelector('.editor-field-item__header button') as HTMLButtonElement)
    const urlFilterStyleSelect = screen.getAllByLabelText('Filter Style')[0] as HTMLSelectElement

    expect(Array.from(urlFilterStyleSelect.options).map(option => option.value)).not.toContain('tab-simple')

    urlEditor.unmount()

    const dataFilter = {
      key: 'Status',
      type: 'datafilter',
      filterStyle: 'dropdown',
      showDropdown: true,
      values: ['Show', 'Hide'],
      columnName: 'status',
      active: 'Show',
      order: 'asc'
    }
    const dataEditor = renderEditor({ grayBackground: false }, [dataFilter], [0])

    fireEvent.click(dataEditor.container.querySelector('.editor-field-item__header button') as HTMLButtonElement)
    const dataFilterStyleSelect = screen.getAllByLabelText('Filter Style')[0] as HTMLSelectElement

    expect(Array.from(dataFilterStyleSelect.options).map(option => option.value)).toContain('tab-simple')
  })

  it('hides both multi-select and tab-simple for File Name URL filters', () => {
    const sharedFilter = {
      key: 'Disease',
      type: 'urlfilter',
      filterBy: 'File Name',
      filterStyle: 'dropdown',
      showDropdown: true,
      values: [],
      active: '',
      apiFilter: {
        apiEndpoint: '/api/disease-options',
        valueSelector: 'disease_id',
        textSelector: 'disease_name'
      }
    }
    const { container } = renderEditor({ grayBackground: false }, [sharedFilter], [0])

    fireEvent.click(container.querySelector('.editor-field-item__header button') as HTMLButtonElement)
    const filterStyleSelect = screen.getAllByLabelText('Filter Style')[0] as HTMLSelectElement
    const optionValues = Array.from(filterStyleSelect.options).map(option => option.value)

    expect(optionValues).not.toContain('multi-select')
    expect(optionValues).not.toContain('tab-simple')
  })

  it('clears File Name filter active state when Auto-select first option is disabled', () => {
    const sharedFilter = {
      key: 'Disease',
      type: 'urlfilter',
      filterBy: 'File Name',
      filterStyle: 'nested-dropdown',
      showDropdown: true,
      values: ['asthma', 'cancer'],
      active: 'asthma',
      queuedActive: ['cancer', 'regional'],
      subGrouping: {
        active: 'national',
        valuesLookup: {
          asthma: { values: ['national', 'regional'] },
          cancer: { values: ['national'] }
        }
      },
      apiFilter: {
        apiEndpoint: '/api/disease-options',
        valueSelector: 'disease_id',
        textSelector: 'disease_name',
        subgroupValueSelector: 'geo'
      }
    }
    const { container, dispatch } = renderEditor({ grayBackground: false }, [sharedFilter], [0])

    fireEvent.click(container.querySelector('.editor-field-item__header button') as HTMLButtonElement)
    fireEvent.click(screen.getByLabelText('Auto-select first option'))

    expect(dispatch).toHaveBeenCalledWith({
      type: 'SET_SHARED_FILTERS',
      payload: [
        {
          ...sharedFilter,
          active: '',
          queuedActive: undefined,
          allowEmptyInitialState: true,
          subGrouping: {
            ...sharedFilter.subGrouping,
            active: ''
          }
        }
      ]
    })
  })

  it('restores the first loaded API option when Auto-select first option is enabled', () => {
    const sharedFilter = {
      key: 'Region',
      type: 'urlfilter',
      filterBy: 'File Name',
      filterStyle: 'dropdown',
      showDropdown: true,
      values: [],
      active: '',
      allowEmptyInitialState: true,
      apiFilter: {
        apiEndpoint: '/api/regions',
        valueSelector: 'region_id',
        textSelector: 'region_name'
      }
    }
    const apiFilterDropdowns = {
      '/api/regions': [
        { text: 'Northeast', value: 'NE' },
        { text: 'Southwest', value: 'SW' }
      ]
    }
    const { container, dispatch } = renderEditor({ grayBackground: false }, [sharedFilter], [0], apiFilterDropdowns)

    fireEvent.click(container.querySelector('.editor-field-item__header button') as HTMLButtonElement)
    fireEvent.click(screen.getByLabelText('Auto-select first option'))

    expect(dispatch).toHaveBeenCalledWith({
      type: 'SET_SHARED_FILTERS',
      payload: [
        {
          ...sharedFilter,
          active: 'NE',
          queuedActive: undefined,
          allowEmptyInitialState: false
        }
      ]
    })
  })

  it.each([
    ['combobox', 'dropdown'],
    ['dropdown', 'combobox']
  ])(
    'preserves URL filter state when switching compatible single-select styles from %s to %s',
    (initialStyle, nextStyle) => {
      const sharedFilter = {
        key: 'Disease',
        type: 'urlfilter',
        filterBy: 'File Name',
        filterStyle: initialStyle,
        showDropdown: true,
        values: [],
        active: '',
        resetLabel: 'Type to search for a disease',
        allowEmptyInitialState: true,
        fileNameTargets: [{ datasetKey: 'diseaseData', fileName: '${value}_weekly' }],
        apiFilter: {
          apiEndpoint: '/examples/private/cridd/__data__/metadata/cridd_condition_metadata.json',
          valueSelector: 'condition_identifier',
          textSelector: 'combo_name'
        }
      }
      const { container, dispatch } = renderEditor({ grayBackground: false }, [sharedFilter], [0])

      fireEvent.click(container.querySelector('.editor-field-item__header button') as HTMLButtonElement)
      fireEvent.change(screen.getAllByLabelText('Filter Style')[0], { target: { value: nextStyle } })

      expect(dispatch).toHaveBeenCalledWith({
        type: 'SET_SHARED_FILTERS',
        payload: [
          {
            ...sharedFilter,
            filterStyle: nextStyle
          }
        ]
      })
    }
  )

  it.each([
    ['dropdown', 'nested-dropdown', 'asthma'],
    ['multi-select', 'dropdown', 'asthma']
  ])('resets URL filter state when switching from %s to %s', (initialStyle, nextStyle, active) => {
    const sharedFilter = {
      key: 'Disease',
      type: 'urlfilter',
      filterBy: 'Query String',
      filterStyle: initialStyle,
      showDropdown: true,
      values: ['asthma', 'cancer'],
      active: initialStyle === 'multi-select' ? ['cancer'] : 'cancer',
      apiFilter: {
        apiEndpoint: '/api/disease-options',
        valueSelector: 'disease_id',
        textSelector: 'disease_name'
      }
    }
    const { container, dispatch } = renderEditor({ grayBackground: false }, [sharedFilter], [0])

    fireEvent.click(container.querySelector('.editor-field-item__header button') as HTMLButtonElement)
    fireEvent.change(screen.getAllByLabelText('Filter Style')[0], { target: { value: nextStyle } })

    expect(dispatch).toHaveBeenCalledWith({
      type: 'SET_SHARED_FILTERS',
      payload: [
        {
          ...sharedFilter,
          active,
          apiFilter: {
            apiEndpoint: '',
            subgroupValueSelector: '',
            textSelector: '',
            valueSelector: ''
          },
          filterStyle: nextStyle
        }
      ]
    })
  })

  it('does not preserve multi-select when a URL filter is changed to File Name', () => {
    const sharedFilter = {
      key: 'Disease',
      type: 'urlfilter',
      filterBy: 'Query String',
      filterStyle: 'multi-select',
      showDropdown: true,
      values: ['asthma', 'cancer'],
      active: ['cancer'],
      apiFilter: {
        apiEndpoint: '/api/disease-options',
        valueSelector: 'disease_id',
        textSelector: 'disease_name'
      }
    }
    const { container, dispatch } = renderEditor({ grayBackground: false }, [sharedFilter], [0])

    fireEvent.click(container.querySelector('.editor-field-item__header button') as HTMLButtonElement)
    fireEvent.change(screen.getAllByLabelText('Filter By')[0], { target: { value: 'File Name' } })

    expect(dispatch).toHaveBeenCalledWith({
      type: 'SET_SHARED_FILTERS',
      payload: [
        {
          ...sharedFilter,
          filterBy: 'File Name',
          filterStyle: 'dropdown',
          active: 'asthma',
          orderedValues: ['asthma', 'cancer'],
          apiFilter: {
            apiEndpoint: '',
            subgroupValueSelector: '',
            textSelector: '',
            valueSelector: ''
          }
        }
      ]
    })
  })
})
