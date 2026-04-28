import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { DashboardContext, initialState } from '../DashboardContext'
import VisualizationRow from './VisualizationRow'

vi.mock('@cdc/markup-include/src/CdcMarkupInclude', () => ({
  default: ({ config }) => <div>{config.contentEditor?.title}</div>
}))

describe('VisualizationRow', () => {
  it('renders the first matching conditional entry and hides rows with no resolved widgets', () => {
    const matchingRow = {
      columns: [
        {
          width: 12,
          conditionalWidgets: [
            {
              widget: 'markup-primary',
              dashboardCondition: {
                id: 'conditional-primary',
                datasetKey: 'conditional-data',
                operator: 'columnHasAnyValue',
                columnName: 'flag',
                values: ['show-primary']
              }
            },
            {
              widget: 'markup-fallback',
              dashboardCondition: {
                id: 'conditional-fallback',
                datasetKey: 'conditional-data',
                operator: 'columnHasAnyValue',
                columnName: 'flag',
                values: ['show-fallback']
              }
            }
          ]
        }
      ],
      expandCollapseAllButtons: false
    } as any

    const hiddenRow = {
      columns: [
        {
          width: 12,
          conditionalWidgets: [
            {
              widget: 'markup-hidden',
              dashboardCondition: {
                id: 'conditional-hidden',
                datasetKey: 'conditional-data',
                operator: 'columnHasAnyValue',
                columnName: 'flag',
                values: ['never']
              }
            }
          ]
        }
      ],
      expandCollapseAllButtons: false
    } as any

    const contextValue = {
      ...initialState,
      config: {
        type: 'dashboard',
        dashboard: { sharedFilters: [] },
        datasets: {},
        rows: [matchingRow, hiddenRow],
        visualizations: {
          'markup-primary': {
            uid: 'markup-primary',
            type: 'markup-include',
            visualizationType: 'markup-include',
            contentEditor: { title: 'Primary conditional content' }
          },
          'markup-fallback': {
            uid: 'markup-fallback',
            type: 'markup-include',
            visualizationType: 'markup-include',
            contentEditor: { title: 'Fallback conditional content' }
          },
          'markup-hidden': {
            uid: 'markup-hidden',
            type: 'markup-include',
            visualizationType: 'markup-include',
            contentEditor: { title: 'Should not render' }
          }
        }
      } as any,
      filteredData: {
        'conditional-primary': [{ flag: 'show-fallback' }],
        'conditional-fallback': [{ flag: 'show-fallback' }],
        'conditional-hidden': [{ flag: 'show-fallback' }]
      },
      data: {},
      outerContainerRef: vi.fn(),
      setParentConfig: vi.fn(),
      isDebug: false,
      isEditor: false,
      reloadURLData: vi.fn(),
      loadAPIFilters: vi.fn(),
      setAPIFilterDropdowns: vi.fn(),
      setAPILoading: vi.fn()
    }

    const { container } = render(
      <DashboardContext.Provider value={contextValue}>
        <>
          <VisualizationRow
            allExpanded
            groupName=''
            row={matchingRow}
            rowIndex={0}
            inNoDataState={false}
            setSharedFilter={vi.fn()}
            updateChildConfig={vi.fn()}
            apiFilterDropdowns={{}}
            currentViewport={{} as any}
            isLastRow={false}
            interactionLabel='dashboard-test'
          />
          <VisualizationRow
            allExpanded
            groupName=''
            row={hiddenRow}
            rowIndex={1}
            inNoDataState={false}
            setSharedFilter={vi.fn()}
            updateChildConfig={vi.fn()}
            apiFilterDropdowns={{}}
            currentViewport={{} as any}
            isLastRow={true}
            interactionLabel='dashboard-test'
          />
        </>
      </DashboardContext.Provider>
    )

    expect(screen.queryByText('Primary conditional content')).not.toBeInTheDocument()
    expect(screen.getByText('Fallback conditional content')).toBeInTheDocument()
    expect(screen.queryByText('Should not render')).not.toBeInTheDocument()
    expect(container.querySelectorAll('[data-row-index]').length).toBe(1)
  })
})
