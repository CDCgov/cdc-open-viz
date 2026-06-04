import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { DashboardContext, DashboardDispatchContext, initialState } from '../DashboardContext'
import { DashboardCopyPasteContext } from '../DashboardCopyPasteContext'
import Column from './Column'

vi.mock('react-dnd', () => ({
  useDrop: () => [{ isOver: false, canDrop: false }, vi.fn()]
}))

vi.mock('./Widget/Widget', () => ({
  default: ({ title }) => <div>{title}</div>
}))

const renderColumn = ({
  data,
  copiedWidget = undefined,
  sharedFilters = [],
  visualizations = {}
}: {
  data: any
  copiedWidget?: any
  sharedFilters?: any[]
  visualizations?: any
}) => {
  const dispatch = vi.fn()
  const clearCopiedWidget = vi.fn()

  render(
    <DashboardContext.Provider
      value={
        {
          ...initialState,
          config: {
            type: 'dashboard',
            activeDashboard: 0,
            dashboard: { sharedFilters },
            datasets: {},
            rows: [{ columns: [data], expandCollapseAllButtons: false }],
            visualizations: {
              'existing-widget': {
                uid: 'existing-widget',
                type: 'markup-include',
                visualizationType: 'markup-include',
                contentEditor: { title: 'Existing' }
              },
              ...visualizations
            }
          },
          outerContainerRef: vi.fn(),
          setParentConfig: vi.fn(),
          isDebug: false,
          isEditor: true,
          reloadURLData: vi.fn(),
          loadAPIFilters: vi.fn(),
          setAPIFilterDropdowns: vi.fn(),
          setAPILoading: vi.fn(),
          data: {}
        } as any
      }
    >
      <DashboardDispatchContext.Provider value={dispatch}>
        <DashboardCopyPasteContext.Provider value={{ copiedWidget, copyWidget: vi.fn(), clearCopiedWidget }}>
          <Column data={data} rowIdx={0} colIdx={0} toggleRow={false} />
        </DashboardCopyPasteContext.Provider>
      </DashboardDispatchContext.Provider>
    </DashboardContext.Provider>
  )

  return { dispatch, clearCopiedWidget }
}

describe('Column copy paste slots', () => {
  it('shows paste-ready text in an empty simple column and dispatches clone on click', () => {
    const copiedWidget = { sourceWidgetKey: 'source-widget', label: 'Source' }
    const { dispatch, clearCopiedWidget } = renderColumn({ data: { width: 12 }, copiedWidget })

    fireEvent.click(
      screen.getByRole('button', { name: 'Click here to paste copied component or drag and drop a new visualization' })
    )

    expect(dispatch).toHaveBeenCalledWith({
      type: 'CLONE_VISUALIZATION',
      payload: { sourceWidgetKey: 'source-widget', rowIdx: 0, colIdx: 0 }
    })
    expect(clearCopiedWidget).toHaveBeenCalled()
  })

  it('shows paste-ready text in the empty conditional slot and dispatches with entry index', () => {
    const copiedWidget = { sourceWidgetKey: 'source-widget', label: 'Source' }
    const { dispatch } = renderColumn({
      data: { width: 12, conditionalWidgets: [{ widget: 'existing-widget' }] },
      copiedWidget
    })

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Click here to paste copied alternate visualization or drag and drop a new alternate'
      })
    )

    expect(dispatch).toHaveBeenCalledWith({
      type: 'CLONE_VISUALIZATION',
      payload: { sourceWidgetKey: 'source-widget', rowIdx: 0, colIdx: 0, entryIdx: 1 }
    })
  })

  it('labels empty conditional slots as first-match alternates', () => {
    renderColumn({
      data: { width: 12, conditionalWidgets: [{ widget: 'existing-widget' }] }
    })

    expect(screen.getByText('Drag and drop an alternate visualization.')).toBeInTheDocument()
    expect(
      screen.getByText('If multiple conditions match, only the first match in this column is shown.')
    ).toBeInTheDocument()
  })
})

describe('Column widget summaries', () => {
  it('shows dashboard filter labels from user-entered keys when they are configured', () => {
    renderColumn({
      data: { width: 12, widget: 'dashboard-filters' },
      sharedFilters: [
        { key: 'State', columnName: 'state' },
        { key: 'Year', columnName: 'year' },
        { key: 'Topic', columnName: 'topic' },
        { key: 'Response', columnName: 'response' }
      ],
      visualizations: {
        'dashboard-filters': {
          uid: 'dashboard-filters',
          type: 'dashboardFilters',
          visualizationType: 'dashboardFilters',
          sharedFilterIndexes: [0, 1, 2, 3]
        }
      }
    })

    expect(screen.getByText('State, Year, Topic, Response')).toBeInTheDocument()
  })

  it('falls back to dashboard filter columns when labels are not configured', () => {
    renderColumn({
      data: { width: 12, widget: 'dashboard-filters' },
      sharedFilters: [{ key: '', columnName: 'state' }, { columnName: 'year' }],
      visualizations: {
        'dashboard-filters': {
          uid: 'dashboard-filters',
          type: 'dashboardFilters',
          visualizationType: 'dashboardFilters',
          sharedFilterIndexes: [0, 1]
        }
      }
    })

    expect(screen.getByText('state, year')).toBeInTheDocument()
  })

  it('uses the table label for table summaries', () => {
    renderColumn({
      data: { width: 12, widget: 'table-widget' },
      visualizations: {
        'table-widget': {
          uid: 'table-widget',
          type: 'table',
          visualizationType: 'table',
          table: { label: 'Custom Table' }
        }
      }
    })

    expect(screen.getByText('Custom Table')).toBeInTheDocument()
  })
})
