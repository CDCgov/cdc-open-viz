import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { DashboardContext, DashboardDispatchContext, initialState } from '../DashboardContext'
import { GlobalContext } from '@cdc/core/components/GlobalContext'
import { DashboardConditionModal } from './DashboardConditionModal'

vi.mock('@cdc/core/components/ui/Icon', () => ({
  default: props => <span data-testid='mock-icon' {...props} />
}))

vi.mock('@cdc/core/components/ui/Tooltip', () => {
  const Tooltip = ({ children }) => <div data-testid='tooltip'>{children}</div>
  Tooltip.Target = ({ children }) => <>{children}</>
  Tooltip.Content = ({ children }) => <>{children}</>
  return { default: Tooltip }
})

const buildConfig = () =>
  ({
    type: 'dashboard',
    dashboard: {
      sharedFilters: []
    },
    datasets: {
      'condition-data': {
        data: [
          { region: 'North', status: 'visible' },
          { region: 'South', status: 'hidden' }
        ]
      }
    },
    rows: [
      {
        columns: [{ width: 12, widget: 'markup-1' }],
        expandCollapseAllButtons: false
      }
    ],
    visualizations: {
      'markup-1': {
        uid: 'markup-1',
        type: 'markup-include',
        visualizationType: 'markup-include',
        contentEditor: {
          inlineHTML: '<p>Example</p>',
          showHeader: true,
          srcUrl: '',
          title: 'Example',
          useInlineHTML: true
        }
      }
    }
  } as any)

const buildConditionalConfig = (dashboardCondition = undefined) =>
  ({
    ...buildConfig(),
    rows: [
      {
        columns: [
          {
            width: 12,
            conditionalWidgets: [{ widget: 'markup-1', dashboardCondition }]
          }
        ],
        expandCollapseAllButtons: false
      }
    ]
  } as any)

const renderModal = () => {
  const dispatch = vi.fn()
  const toggleOverlay = vi.fn()

  render(
    <GlobalContext.Provider
      value={{
        overlay: {
          object: null,
          show: true,
          disableBgClose: false,
          actions: {
            openOverlay: vi.fn(),
            toggleOverlay
          }
        }
      }}
    >
      <DashboardContext.Provider
        value={{
          ...initialState,
          config: buildConfig(),
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
          <DashboardConditionModal rowIndex={0} columnIndex={0} />
        </DashboardDispatchContext.Provider>
      </DashboardContext.Provider>
    </GlobalContext.Provider>
  )

  return { dispatch, toggleOverlay }
}

const renderRowModal = (dashboardCondition = undefined) => {
  const dispatch = vi.fn()
  const toggleOverlay = vi.fn()

  render(
    <GlobalContext.Provider
      value={{
        overlay: {
          object: null,
          show: true,
          disableBgClose: false,
          actions: {
            openOverlay: vi.fn(),
            toggleOverlay
          }
        }
      }}
    >
      <DashboardContext.Provider
        value={{
          ...initialState,
          config: {
            ...buildConfig(),
            rows: [
              {
                columns: [{ width: 12, widget: 'markup-1' }],
                dashboardCondition,
                expandCollapseAllButtons: false
              }
            ]
          },
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
          <DashboardConditionModal rowIndex={0} />
        </DashboardDispatchContext.Provider>
      </DashboardContext.Provider>
    </GlobalContext.Provider>
  )

  return { dispatch, toggleOverlay }
}

const renderConditionalEntryModal = (dashboardCondition = undefined) => {
  const dispatch = vi.fn()

  render(
    <GlobalContext.Provider
      value={{
        overlay: {
          object: null,
          show: true,
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
          config: buildConditionalConfig(dashboardCondition),
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
          <DashboardConditionModal rowIndex={0} columnIndex={0} entryIndex={0} />
        </DashboardDispatchContext.Provider>
      </DashboardContext.Provider>
    </GlobalContext.Provider>
  )

  return { dispatch }
}

describe('DashboardConditionModal', () => {
  it('shows component-specific condition type tooltip copy and delayed field guidance', () => {
    renderModal()

    expect(screen.getByRole('combobox', { name: /Condition Type/i })).toBeInTheDocument()
    expect(screen.getByText(/Choose whether this component should appear/)).toBeInTheDocument()

    fireEvent.change(screen.getByRole('combobox', { name: /Condition Type/i }), {
      target: { value: 'columnHasAnyValue' }
    })

    expect(screen.queryByText(/Select the dataset column to inspect for this condition/)).not.toBeInTheDocument()
    expect(screen.queryByText(/Choose one or more matching values from the selected column/)).not.toBeInTheDocument()
    expect(screen.queryByText('Column Values')).not.toBeInTheDocument()

    fireEvent.change(screen.getAllByRole('combobox')[1], {
      target: { value: 'condition-data' }
    })

    expect(screen.getByText(/Select the dataset column to inspect for this condition/)).toBeInTheDocument()
    expect(screen.queryByText(/Choose one or more matching values from the selected column/)).not.toBeInTheDocument()

    fireEvent.change(screen.getAllByRole('combobox')[2], { target: { value: 'region' } })

    expect(screen.getByText('Column Values')).toBeInTheDocument()
    expect(screen.getByText(/Choose one or more matching values from the selected column/)).toBeInTheDocument()
  })

  it('shows row-specific condition type tooltip copy for row editing', () => {
    renderRowModal()

    expect(screen.getByText(/Choose whether this row should appear/)).toBeInTheDocument()
    expect(screen.queryByText(/Choose whether this component should appear/)).not.toBeInTheDocument()
  })

  it('saves a hasData condition', () => {
    const { dispatch, toggleOverlay } = renderModal()

    fireEvent.change(screen.getByRole('combobox', { name: /Condition Type/i }), { target: { value: 'hasData' } })
    fireEvent.change(screen.getAllByRole('combobox')[1], {
      target: { value: 'condition-data' }
    })
    fireEvent.click(screen.getByRole('button', { name: 'Save' }))

    expect(dispatch).toHaveBeenCalledWith({
      type: 'UPDATE_ROW',
      payload: {
        rowIndex: 0,
        rowData: {
          columns: [
            expect.objectContaining({
              conditionalWidgets: [
                expect.objectContaining({
                  widget: 'markup-1',
                  dashboardCondition: expect.objectContaining({
                    datasetKey: 'condition-data',
                    operator: 'hasData'
                  })
                })
              ]
            })
          ]
        }
      }
    })
    expect(toggleOverlay).toHaveBeenCalledWith(false)
  })

  it('converts a simple column into conditional mode only after save', () => {
    const { dispatch } = renderModal()

    fireEvent.change(screen.getByRole('combobox', { name: /Condition Type/i }), { target: { value: 'hasData' } })
    fireEvent.change(screen.getAllByRole('combobox')[1], {
      target: { value: 'condition-data' }
    })

    expect(dispatch).not.toHaveBeenCalled()

    fireEvent.click(screen.getByRole('button', { name: 'Save' }))

    expect(dispatch).toHaveBeenCalledWith({
      type: 'UPDATE_ROW',
      payload: {
        rowIndex: 0,
        rowData: {
          columns: [
            expect.objectContaining({
              widget: undefined,
              conditionalWidgets: [
                expect.objectContaining({
                  widget: 'markup-1',
                  dashboardCondition: expect.objectContaining({
                    datasetKey: 'condition-data',
                    operator: 'hasData'
                  })
                })
              ]
            })
          ]
        }
      }
    })
  })

  it('collapses a one-entry conditional column back to simple mode when its condition is removed', () => {
    const { dispatch } = renderConditionalEntryModal({
      id: 'existing-condition',
      datasetKey: 'condition-data',
      operator: 'hasData'
    })

    fireEvent.change(screen.getByRole('combobox', { name: /Condition Type/i }), { target: { value: '' } })
    fireEvent.click(screen.getByRole('button', { name: 'Save' }))

    expect(dispatch).toHaveBeenCalledWith({
      type: 'UPDATE_ROW',
      payload: {
        rowIndex: 0,
        rowData: {
          columns: [
            expect.objectContaining({
              widget: 'markup-1',
              conditionalWidgets: undefined
            })
          ]
        }
      }
    })
  })

  it('collapses conditional mode back to simple mode when the last condition is removed', () => {
    const { dispatch } = renderConditionalEntryModal({
      id: 'existing-condition',
      datasetKey: 'condition-data',
      operator: 'hasData'
    })

    fireEvent.change(screen.getByRole('combobox', { name: /Condition Type/i }), { target: { value: '' } })
    fireEvent.click(screen.getByRole('button', { name: 'Save' }))

    expect(dispatch).toHaveBeenCalledWith({
      type: 'UPDATE_ROW',
      payload: {
        rowIndex: 0,
        rowData: {
          columns: [expect.objectContaining({ widget: 'markup-1', conditionalWidgets: undefined })]
        }
      }
    })
  })

  it('requires dataset, column, and values for Column Has Any Value', () => {
    renderModal()

    fireEvent.change(screen.getByRole('combobox', { name: /Condition Type/i }), {
      target: { value: 'columnHasAnyValue' }
    })

    const saveButton = screen.getByRole('button', { name: 'Save' })
    expect(saveButton).toBeDisabled()

    fireEvent.change(screen.getAllByRole('combobox')[1], {
      target: { value: 'condition-data' }
    })
    expect(saveButton).toBeDisabled()

    fireEvent.change(screen.getAllByRole('combobox')[2], { target: { value: 'region' } })
    expect(saveButton).toBeDisabled()

    fireEvent.click(screen.getByLabelText('Expand'))
    fireEvent.click(screen.getByText('North'))

    expect(saveButton).not.toBeDisabled()
  })
})
