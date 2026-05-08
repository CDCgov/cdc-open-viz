import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { DashboardContext, DashboardDispatchContext, initialState } from '../../DashboardContext'
import { DashboardCopyPasteContext } from '../../DashboardCopyPasteContext'
import { GlobalContext } from '@cdc/core/components/GlobalContext'
import Widget from './Widget'

vi.mock('@cdc/core/components/ui/Icon', () => ({
  default: props => <span data-testid='mock-icon' {...props} />
}))

let latestDragSpec: any

vi.mock('react-dnd', () => ({
  useDrag: spec => {
    latestDragSpec = spec
    return [{ isDragging: false }, () => {}]
  }
}))

const renderWidget = (
  options: {
    copiedWidget?: any
    copyWidget?: any
    clearCopiedWidget?: any
    dispatch?: any
    type?: string
    title?: string
    widgetConfig?: any
  } = {}
) => {
  const openOverlay = vi.fn()
  const copyWidget = options.copyWidget || vi.fn()
  const clearCopiedWidget = options.clearCopiedWidget || vi.fn()
  const dispatch = options.dispatch || vi.fn()
  const type = options.type || 'markup-include'
  const title = options.title ?? 'Example'
  const widgetConfig = options.widgetConfig || {
    uid: 'markup-1',
    rowIdx: 0,
    colIdx: 0,
    entryIdx: 0,
    type: 'markup-include',
    visualizationType: 'markup-include',
    contentEditor: { title: 'Example' }
  }

  const renderResult = render(
    <GlobalContext.Provider
      value={{
        overlay: {
          object: null,
          show: false,
          disableBgClose: false,
          actions: {
            openOverlay,
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
            activeDashboard: 0,
            dashboard: { sharedFilters: [] },
            datasets: {},
            rows: [
              {
                columns: [
                  {
                    width: 12,
                    conditionalWidgets: [
                      {
                        widget: 'markup-1',
                        dashboardCondition: {
                          id: 'column-condition-1',
                          datasetKey: 'condition-data',
                          operator: 'hasData'
                        }
                      }
                    ]
                  }
                ],
                expandCollapseAllButtons: false
              }
            ],
            visualizations: {
              'markup-1': {
                uid: 'markup-1',
                type: 'markup-include',
                visualizationType: 'markup-include',
                contentEditor: { title: 'Example' }
              }
            }
          } as any,
          outerContainerRef: vi.fn(),
          setParentConfig: vi.fn(),
          isDebug: false,
          isEditor: true,
          reloadURLData: vi.fn(),
          loadAPIFilters: vi.fn(),
          setAPIFilterDropdowns: vi.fn(),
          setAPILoading: vi.fn(),
          data: {}
        }}
      >
        <DashboardDispatchContext.Provider value={dispatch}>
          <DashboardCopyPasteContext.Provider
            value={{ copiedWidget: options.copiedWidget, copyWidget, clearCopiedWidget }}
          >
            <Widget title={title} toggleRow={false} type={type} widgetConfig={widgetConfig} widgetInRow />
          </DashboardCopyPasteContext.Provider>
        </DashboardDispatchContext.Provider>
      </DashboardContext.Provider>
    </GlobalContext.Provider>
  )

  return { ...renderResult, openOverlay, copyWidget, clearCopiedWidget, dispatch }
}

describe('Widget', () => {
  it('shows the active widget condition button and summary strip when a column condition exists', () => {
    renderWidget()

    expect(screen.getByTitle('Configure Dashboard Condition')).toHaveClass('is-active')
    expect(screen.getByRole('button', { name: "Configure Dashboard Condition: Show when there's data" })).toHaveClass(
      'dashboard-condition-summary'
    )
  })

  it('opens the condition modal from the widget condition button or summary strip', () => {
    const { openOverlay } = renderWidget()

    fireEvent.click(screen.getByTitle('Configure Dashboard Condition'))
    fireEvent.click(screen.getByRole('button', { name: "Configure Dashboard Condition: Show when there's data" }))

    expect(openOverlay).toHaveBeenCalledTimes(2)
  })

  it('shows a copy button for populated widgets and stores the copied widget label', () => {
    const { copyWidget } = renderWidget()

    fireEvent.click(screen.getByTitle('Copy Component'))

    expect(copyWidget).toHaveBeenCalledWith({ sourceWidgetKey: 'markup-1', label: 'Example' })
  })

  it('uses a delete button for removing widgets', () => {
    const { dispatch } = renderWidget()

    fireEvent.click(screen.getByRole('button', { name: 'Delete Component' }))

    expect(dispatch).toHaveBeenCalledWith({
      type: 'DELETE_WIDGET',
      payload: { uid: 'markup-1' }
    })
  })

  it('shows labels for waffle and gauge visualization type aliases', () => {
    renderWidget({
      type: 'TP5 Waffle',
      title: '',
      widgetConfig: {
        uid: 'waffle-1',
        rowIdx: 0,
        colIdx: 0,
        type: 'waffle-chart',
        visualizationType: 'TP5 Waffle'
      }
    })

    expect(screen.getByText('Waffle Chart')).toBeInTheDocument()
  })

  it('marks the copied widget and lets the active copy button cancel copy mode', () => {
    const clearCopiedWidget = vi.fn()
    const { container, copyWidget } = renderWidget({
      copiedWidget: { sourceWidgetKey: 'markup-1', label: 'Example' },
      clearCopiedWidget
    })

    expect(container.querySelector('.widget')).toHaveClass('widget--copied-source')
    expect(screen.getByTitle('Copy Component')).toHaveClass('is-active')
    expect(screen.getByRole('button', { name: 'Clear copied component' })).toHaveTextContent('Copied')

    fireEvent.click(screen.getByRole('button', { name: 'Clear copied component' }))

    expect(clearCopiedWidget).toHaveBeenCalledTimes(1)

    fireEvent.click(screen.getByTitle('Copy Component'))

    expect(clearCopiedWidget).toHaveBeenCalledTimes(2)
    expect(copyWidget).not.toHaveBeenCalled()
  })

  it('clears copy mode after a successful widget move', () => {
    const clearCopiedWidget = vi.fn()
    const dispatch = vi.fn()
    renderWidget({ clearCopiedWidget, dispatch })

    latestDragSpec.end(null, { getDropResult: () => ({ rowIdx: 0, colIdx: 0 }) })

    expect(dispatch).toHaveBeenCalledWith({
      type: 'MOVE_VISUALIZATION',
      payload: {
        rowIdx: 0,
        colIdx: 0,
        entryIdx: undefined,
        widget: expect.objectContaining({ uid: 'markup-1' })
      }
    })
    expect(clearCopiedWidget).toHaveBeenCalled()
  })
})
