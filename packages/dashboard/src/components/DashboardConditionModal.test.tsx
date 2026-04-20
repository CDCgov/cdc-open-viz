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

const buildConfig = (dashboardCondition = undefined) =>
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
        columns: [{ width: 12, widget: 'markup-1', dashboardCondition }],
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

const renderModal = (dashboardCondition = undefined) => {
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
          config: buildConfig(dashboardCondition),
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
          config: buildConfig(dashboardCondition),
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
              dashboardCondition: expect.objectContaining({
                datasetKey: 'condition-data',
                operator: 'hasData'
              })
            })
          ]
        }
      }
    })
    expect(toggleOverlay).toHaveBeenCalledWith(false)
  })

  it('clears the condition when No Condition is selected', () => {
    const { dispatch } = renderModal({
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
          columns: [expect.objectContaining({ dashboardCondition: undefined })]
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
