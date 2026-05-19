import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { DashboardContext, initialState } from '../DashboardContext'
import VisualizationRow from './VisualizationRow'

vi.mock('@cdc/markup-include/src/CdcMarkupInclude', () => ({
  default: ({ config }) => <div>{config.contentEditor?.title}</div>
}))

vi.mock('@cdc/filtered-text/src/CdcFilteredText', () => ({
  default: ({ config }) => <div>{config.title}</div>
}))

vi.mock('./Toggle', () => ({
  default: ({ row }) => <div>{row.columns.filter(column => column.widget).length} toggle options</div>
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

  it('still renders existing legacy filtered-text dashboard widgets during phase one', () => {
    const legacyRow = {
      columns: [{ width: 12, widget: 'legacy-filtered-text' }],
      expandCollapseAllButtons: false
    } as any

    const contextValue = {
      ...initialState,
      config: {
        type: 'dashboard',
        dashboard: { sharedFilters: [] },
        datasets: {},
        rows: [legacyRow],
        visualizations: {
          'legacy-filtered-text': {
            uid: 'legacy-filtered-text',
            type: 'filtered-text',
            visualizationType: 'filtered-text',
            title: 'Legacy filtered text'
          }
        }
      } as any,
      filteredData: {},
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

    render(
      <DashboardContext.Provider value={contextValue}>
        <VisualizationRow
          allExpanded
          groupName=''
          row={legacyRow}
          rowIndex={0}
          inNoDataState={false}
          setSharedFilter={vi.fn()}
          updateChildConfig={vi.fn()}
          apiFilterDropdowns={{}}
          currentViewport={{} as any}
          isLastRow={true}
          interactionLabel='dashboard-test'
        />
      </DashboardContext.Provider>
    )

    expect(screen.getByText('Legacy filtered text')).toBeInTheDocument()
  })

  it('skips truly empty runtime columns in toggle rows', () => {
    const toggleRow = {
      toggle: true,
      columns: [{ width: 12, widget: 'markup-visible' }, { width: 12 }],
      expandCollapseAllButtons: false
    } as any

    const contextValue = {
      ...initialState,
      config: {
        type: 'dashboard',
        dashboard: { sharedFilters: [] },
        datasets: {},
        rows: [toggleRow],
        visualizations: {
          'markup-visible': {
            uid: 'markup-visible',
            type: 'markup-include',
            visualizationType: 'markup-include',
            contentEditor: { title: 'Visible toggle content' }
          }
        }
      } as any,
      filteredData: {},
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
        <VisualizationRow
          allExpanded
          groupName=''
          row={toggleRow}
          rowIndex={0}
          inNoDataState={false}
          setSharedFilter={vi.fn()}
          updateChildConfig={vi.fn()}
          apiFilterDropdowns={{}}
          currentViewport={{} as any}
          isLastRow={true}
          interactionLabel='dashboard-test'
        />
      </DashboardContext.Provider>
    )

    expect(screen.getByText('Visible toggle content')).toBeInTheDocument()
    expect(screen.getByText('1 toggle options')).toBeInTheDocument()

    const row = container.querySelector('[data-row-index="0"]')
    expect(row?.querySelectorAll('[data-dashboard-condition-hidden="true"]').length).toBe(0)
    expect(row?.querySelectorAll('.col-md-12').length).toBe(1)
  })

  it('does not render a row that only contains dashboard filters with no visible referenced filters', () => {
    const filterRow = {
      columns: [{ width: 12, widget: 'dashboard-filters-hidden' }],
      expandCollapseAllButtons: false
    } as any

    const contextValue = {
      ...initialState,
      config: {
        type: 'dashboard',
        dashboard: {
          sharedFilters: [
            {
              key: 'Hidden year',
              type: 'datafilter',
              filterStyle: 'dropdown',
              showDropdown: false,
              values: ['2024'],
              active: '2024',
              columnName: 'year',
              parents: []
            }
          ]
        },
        datasets: {},
        rows: [filterRow],
        visualizations: {
          'dashboard-filters-hidden': {
            uid: 'dashboard-filters-hidden',
            type: 'dashboardFilters',
            visualizationType: 'dashboardFilters',
            filterBehavior: 'Filter Change',
            sharedFilterIndexes: [0]
          }
        }
      } as any,
      filteredData: {},
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
        <VisualizationRow
          allExpanded
          groupName=''
          row={filterRow}
          rowIndex={0}
          inNoDataState={false}
          setSharedFilter={vi.fn()}
          updateChildConfig={vi.fn()}
          apiFilterDropdowns={{}}
          currentViewport={{} as any}
          isLastRow={true}
          interactionLabel='dashboard-test'
        />
      </DashboardContext.Provider>
    )

    expect(container.querySelector('[data-row-index]')).not.toBeInTheDocument()
  })

  it('does not render a row that only contains a dashboard filter widget with empty sharedFilterIndexes', () => {
    const filterRow = {
      columns: [{ width: 12, widget: 'dashboard-filters-empty' }],
      expandCollapseAllButtons: false
    } as any

    const contextValue = {
      ...initialState,
      config: {
        type: 'dashboard',
        dashboard: { sharedFilters: [] },
        datasets: {},
        rows: [filterRow],
        visualizations: {
          'dashboard-filters-empty': {
            uid: 'dashboard-filters-empty',
            type: 'dashboardFilters',
            visualizationType: 'dashboardFilters',
            filterBehavior: 'Filter Change',
            sharedFilterIndexes: []
          }
        }
      } as any,
      filteredData: {},
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
        <VisualizationRow
          allExpanded
          groupName=''
          row={filterRow}
          rowIndex={0}
          inNoDataState={false}
          setSharedFilter={vi.fn()}
          updateChildConfig={vi.fn()}
          apiFilterDropdowns={{}}
          currentViewport={{} as any}
          isLastRow={true}
          interactionLabel='dashboard-test'
        />
      </DashboardContext.Provider>
    )

    expect(container.querySelector('[data-row-index]')).not.toBeInTheDocument()
  })
})
