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

const renderEditor = (visual = { grayBackground: false }, sharedFilters = [], sharedFilterIndexes = []) => {
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
          <DashboardFiltersEditor updateConfig={updateConfig} vizConfig={vizConfig} />
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
    ['combobox', 'tab-simple', 'Show'],
    ['tab-simple', 'combobox', 'Show'],
    ['dropdown', 'multi-select', ['Show']]
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
      active: '',
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
})
