import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import CdcDashboardComponent from '../CdcDashboardComponent'
import type { InitialState } from '../types/InitialState'
import Header from '../components/Header'
import { DashboardContext, DashboardDispatchContext } from '../DashboardContext'

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

vi.stubGlobal('ResizeObserver', ResizeObserverMock)

vi.mock('@cdc/core/components/ui/Icon', () => ({
  default: props => <span data-testid='mock-icon' {...props} />
}))

vi.mock('@cdc/core/components/AdvancedEditor', () => ({
  default: () => <div data-testid='advanced-editor' />
}))

// Mounting the dashboard triggers an async data reload. Mock it to resolve
// deterministically so tests do not hit real dataset URLs.
vi.mock('@cdc/core/helpers/fetchRemoteData', () => ({
  default: vi.fn(() => Promise.resolve({ data: [{ State: 'CA', Value: 1 }], dataMetadata: {} }))
}))

afterEach(() => {
  vi.clearAllMocks()
})

const datasetA = [{ State: 'CA', Value: 1 }]

const makeTableVisualization = ({ table, ...overrides }: Record<string, any> = {}) => ({
  type: 'table',
  visualizationType: 'table',
  dataKey: 'datasetA',
  dataDescription: { horizontal: false, series: false },
  filters: [],
  table: {
    label: 'datasetA',
    show: true,
    expanded: true,
    collapsible: false,
    anchorId: 'data-table-datasetA',
    showDownloadLinkBelow: true,
    ...table
  },
  columns: {
    State: { name: 'State', dataTable: true },
    Value: { name: 'Value', dataTable: true }
  },
  ...overrides
})

const makeMarkupVisualization = (text = 'Dashboard visual content') => ({
  type: 'markup-include',
  visualizationType: 'markup-include',
  filters: [],
  contentEditor: {
    inlineHTML: `<p>${text}</p>`,
    showHeader: true,
    srcUrl: '',
    title: '',
    useInlineHTML: true
  }
})

const makeDashboardPreviewState = (configOverrides: Record<string, any> = {}) =>
  ({
    config: {
      type: 'dashboard',
      dashboard: {
        title: 'Dashboard Title',
        titleStyle: 'small',
        theme: 'theme-blue',
        downloads: {
          downloadImageButton: true
        },
        sharedFilters: [],
        ...configOverrides.dashboard
      },
      visualizations: {},
      rows: [],
      datasets: {
        datasetA: { data: datasetA }
      },
      table: {},
      ...configOverrides
    },
    data: {
      datasetA
    },
    loading: false,
    filteredData: {},
    preview: false,
    tabSelected: 'Dashboard Preview',
    filtersApplied: true
  } as InitialState)

const expectElementBefore = (first: Element | null, second: Element | null) => {
  expect(first).toBeInTheDocument()
  expect(second).toBeInTheDocument()
  expect(first!.compareDocumentPosition(second!) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
}

describe('CdcDashboardComponent', () => {
  it('renders dashboard markup through the shared visualization shell', () => {
    const initialState = {
      config: {
        type: 'dashboard',
        dashboard: {
          title: 'Dashboard Title',
          titleStyle: 'small',
          theme: 'theme-blue',
          downloads: {},
          sharedFilters: []
        },
        visualizations: {},
        rows: [],
        datasets: {},
        table: {}
      },
      data: {},
      loading: false,
      filteredData: {},
      preview: false,
      tabSelected: 'Dashboard Preview',
      filtersApplied: true
    } as InitialState

    const { container } = render(
      <CdcDashboardComponent initialState={initialState} interactionLabel='dashboard-test' isEditor={false} />
    )

    const shell = container.querySelector('.cove-visualization')

    expect(shell).toHaveClass('type-dashboard')
    expect(shell).toHaveAttribute('data-download-id')
    expect(shell?.querySelector('.cove-visualization__outer')).toBeInTheDocument()
  })

  it('keeps the dashboard root out of the shared editor grid layout', () => {
    const initialState = {
      config: {
        type: 'dashboard',
        dashboard: {
          title: 'Dashboard Title',
          titleStyle: 'small',
          theme: 'theme-blue',
          sharedFilters: []
        },
        visualizations: {},
        rows: [],
        datasets: {},
        table: {}
      },
      data: {},
      loading: false,
      filteredData: {},
      preview: false,
      tabSelected: 'Dashboard Preview',
      filtersApplied: true
    } as InitialState

    const { container } = render(
      <CdcDashboardComponent initialState={initialState} interactionLabel='dashboard-test' isEditor={true} />
    )

    const shell = container.querySelector('.cove-visualization')

    expect(shell).toHaveClass('type-dashboard', 'is-dashboard-editor')
    expect(shell).not.toHaveClass('is-editor')
  })

  it('renders the edit mode header above the left palette and workspace grid', () => {
    const initialState = {
      config: {
        type: 'dashboard',
        dashboard: {
          title: 'Dashboard Title',
          titleStyle: 'small',
          theme: 'theme-blue',
          sharedFilters: []
        },
        visualizations: {},
        rows: [],
        datasets: {},
        table: {}
      },
      data: {},
      loading: false,
      filteredData: {},
      preview: false,
      tabSelected: 'Dashboard Settings',
      filtersApplied: true
    } as InitialState

    const { container } = render(
      <CdcDashboardComponent initialState={initialState} interactionLabel='dashboard-test' isEditor={true} />
    )

    const editorLayout = container.querySelector('.dashboard-editor-layout')
    const leftPalette = container.querySelector('.header-container')
    const workspace = container.querySelector('.dashboard-editor-workspace')
    const tabsHeader = container.querySelector('.editor-heading--tabs-only')
    const settingsHeader = container.querySelector('.editor-heading--body-only')
    const workspaceGrid = workspace?.querySelector('.layout-container')

    expect(tabsHeader).toBeInTheDocument()
    expect(editorLayout).toBeInTheDocument()
    expect(leftPalette?.querySelector('.visualizations-panel')).toBeInTheDocument()
    expect(leftPalette?.querySelector('.editor-heading')).not.toBeInTheDocument()
    expect(workspace?.querySelector('.editor-heading--body-only')).not.toBeInTheDocument()
    expect(settingsHeader).toBeInTheDocument()
    expect(workspaceGrid).toBeInTheDocument()
    expectElementBefore(tabsHeader!, editorLayout!)
    expectElementBefore(tabsHeader!, settingsHeader!)
    expectElementBefore(settingsHeader!, editorLayout!)
  })

  it('uses the compact preview header in editor preview mode without settings controls', () => {
    const initialState = makeDashboardPreviewState({
      visualizations: {
        markupA: makeMarkupVisualization('Preview dashboard content')
      },
      rows: [{ columns: [{ width: 12, widget: 'markupA' }] }]
    })

    const { container } = render(
      <CdcDashboardComponent initialState={initialState} interactionLabel='dashboard-test' isEditor={true} />
    )

    expect(screen.getByText('Dashboard Preview')).toBeInTheDocument()
    expect(screen.getByText('Preview dashboard content')).toBeInTheDocument()
    expect(screen.queryByLabelText('Dashboard title')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('Dashboard description')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('Download image display')).not.toBeInTheDocument()
    expect(container.querySelector('.visualizations-panel')).not.toBeInTheDocument()
  })

  it('only renders the dashboard download button section when a download button is enabled', () => {
    const baseInitialState = {
      config: {
        type: 'dashboard',
        dashboard: {
          title: 'Dashboard Title',
          titleStyle: 'small',
          theme: 'theme-blue',
          sharedFilters: []
        },
        visualizations: {},
        rows: [],
        datasets: {},
        table: {}
      },
      data: {},
      loading: false,
      filteredData: {},
      preview: false,
      tabSelected: 'Dashboard Preview',
      filtersApplied: true
    } as InitialState

    const disabledRender = render(
      <CdcDashboardComponent initialState={baseInitialState} interactionLabel='dashboard-test' isEditor={false} />
    )

    expect(disabledRender.container.querySelector('.download-buttons')).not.toBeInTheDocument()
    disabledRender.unmount()

    const enabledRender = render(
      <CdcDashboardComponent
        initialState={{
          ...baseInitialState,
          config: {
            ...baseInitialState.config,
            dashboard: {
              ...baseInitialState.config.dashboard,
              downloads: {
                downloadImageButton: true
              }
            }
          }
        }}
        interactionLabel='dashboard-test'
        isEditor={false}
      />
    )

    expect(enabledRender.container.querySelector('.download-buttons')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Download Image' })).toBeInTheDocument()
  })

  it('renders dashboard download controls before migrated table-only rows', () => {
    const initialState = makeDashboardPreviewState({
      visualizations: {
        markupA: makeMarkupVisualization('Dashboard visual content'),
        'dashboard-table-datasetA': makeTableVisualization({
          migrations: {
            generatedFromDashboardTable: true
          }
        })
      },
      rows: [
        { columns: [{ width: 12, widget: 'markupA' }] },
        { columns: [{ width: 12, widget: 'dashboard-table-datasetA' }] }
      ]
    })

    const { container } = render(
      <CdcDashboardComponent initialState={initialState} interactionLabel='dashboard-test' isEditor={false} />
    )

    expectElementBefore(screen.getByText('Dashboard visual content'), container.querySelector('.download-buttons'))
    expectElementBefore(container.querySelector('.download-buttons'), container.querySelector('#data-table-datasetA'))
  })

  it('renders dashboard download controls before bottom authored table-only rows', () => {
    const initialState = makeDashboardPreviewState({
      visualizations: {
        markupA: makeMarkupVisualization('Dashboard visual content'),
        tableA: makeTableVisualization()
      },
      rows: [{ columns: [{ width: 12, widget: 'markupA' }] }, { columns: [{ width: 12, widget: 'tableA' }] }]
    })

    const { container } = render(
      <CdcDashboardComponent initialState={initialState} interactionLabel='dashboard-test' isEditor={false} />
    )

    expectElementBefore(container.querySelector('.download-buttons'), container.querySelector('#data-table-datasetA'))
  })

  it('keeps authored table-only rows in place when they are not at the bottom', () => {
    const initialState = makeDashboardPreviewState({
      visualizations: {
        markupA: makeMarkupVisualization('Dashboard visual content'),
        tableA: makeTableVisualization(),
        markupB: makeMarkupVisualization('Content after table')
      },
      rows: [
        { columns: [{ width: 12, widget: 'markupA' }] },
        { columns: [{ width: 12, widget: 'tableA' }] },
        { columns: [{ width: 12, widget: 'markupB' }] }
      ]
    })

    const { container } = render(
      <CdcDashboardComponent initialState={initialState} interactionLabel='dashboard-test' isEditor={false} />
    )

    expectElementBefore(container.querySelector('#data-table-datasetA'), screen.getByText('Content after table'))
    expectElementBefore(screen.getByText('Content after table'), container.querySelector('.download-buttons'))
  })

  it('keeps mixed rows with table widgets before dashboard download controls', () => {
    const initialState = makeDashboardPreviewState({
      visualizations: {
        markupA: makeMarkupVisualization('Dashboard visual content'),
        tableA: makeTableVisualization()
      },
      rows: [
        {
          columns: [
            { width: 6, widget: 'markupA' },
            { width: 6, widget: 'tableA' }
          ]
        }
      ]
    })

    const { container } = render(
      <CdcDashboardComponent initialState={initialState} interactionLabel='dashboard-test' isEditor={false} />
    )

    expectElementBefore(container.querySelector('#data-table-datasetA'), container.querySelector('.download-buttons'))
  })

  it('renders migrated standalone dashboard tables once at their preserved anchor', () => {
    const initialState = {
      config: {
        type: 'dashboard',
        dashboard: {
          title: 'Dashboard Title',
          titleStyle: 'small',
          theme: 'theme-blue',
          sharedFilters: []
        },
        visualizations: {
          'dashboard-table-datasetA': {
            type: 'table',
            visualizationType: 'table',
            dataKey: 'datasetA',
            dataDescription: {},
            filters: [],
            table: {
              label: 'datasetA',
              show: true,
              expanded: true,
              collapsible: false,
              anchorId: 'data-table-datasetA',
              showDownloadLinkBelow: true
            },
            columns: {
              State: { name: 'State', dataTable: true },
              Value: { name: 'Value', dataTable: true }
            },
            migrations: {
              generatedFromDashboardTable: true
            }
          }
        },
        rows: [{ columns: [{ width: 12, widget: 'dashboard-table-datasetA' }], expandCollapseAllButtons: false }],
        datasets: {
          datasetA: { data: [{ State: 'CA', Value: 1 }] }
        },
        table: {
          show: true,
          expanded: true
        }
      },
      data: {
        datasetA: [{ State: 'CA', Value: 1 }]
      },
      loading: false,
      filteredData: {},
      preview: false,
      tabSelected: 'Dashboard Preview',
      filtersApplied: true
    } as InitialState

    const { container } = render(
      <CdcDashboardComponent initialState={initialState} interactionLabel='dashboard-test' isEditor={false} />
    )

    expect(container.querySelectorAll('#data-table-datasetA')).toHaveLength(1)
    expect(container.querySelector('#data-table-datasetA .data-table-container')).toBeInTheDocument()
  })

  it('renders dataset links for dashboard standalone tables backed by dataset URLs', async () => {
    const initialState = makeDashboardPreviewState({
      visualizations: {
        tableA: makeTableVisualization({
          table: {
            showDatasetLink: true
          }
        })
      },
      rows: [{ columns: [{ width: 12, widget: 'tableA' }] }],
      datasets: {
        datasetA: {
          data: datasetA,
          dataUrl: '/wcms/vizdata/dataset-a.json'
        }
      }
    })

    render(<CdcDashboardComponent initialState={initialState} interactionLabel='dashboard-test' isEditor={false} />)

    expect(screen.getByRole('link', { name: 'Link to Dataset' })).toHaveAttribute(
      'href',
      '/wcms/vizdata/dataset-a.json'
    )
    await waitFor(() =>
      expect(fetchRemoteData).toHaveBeenCalledWith(expect.stringContaining('/wcms/vizdata/dataset-a.json'))
    )
  })

  it('does not render dashboard standalone table dataset links from showDownloadUrl alone', async () => {
    const initialState = makeDashboardPreviewState({
      visualizations: {
        tableA: makeTableVisualization({
          table: {
            showDownloadUrl: true
          }
        })
      },
      rows: [{ columns: [{ width: 12, widget: 'tableA' }] }],
      datasets: {
        datasetA: {
          data: datasetA,
          dataUrl: '/wcms/vizdata/dataset-a.json'
        }
      }
    })

    render(<CdcDashboardComponent initialState={initialState} interactionLabel='dashboard-test' isEditor={false} />)

    expect(screen.queryByRole('link', { name: 'Link to Dataset' })).not.toBeInTheDocument()
    await waitFor(() =>
      expect(fetchRemoteData).toHaveBeenCalledWith(expect.stringContaining('/wcms/vizdata/dataset-a.json'))
    )
  })

  it('does not render dashboard standalone table dataset links when dataset metadata has no dataUrl', () => {
    const initialState = makeDashboardPreviewState({
      visualizations: {
        tableA: makeTableVisualization({
          table: {
            showDatasetLink: true
          }
        })
      },
      rows: [{ columns: [{ width: 12, widget: 'tableA' }] }],
      datasets: {
        datasetA: {
          data: datasetA
        }
      }
    })

    render(<CdcDashboardComponent initialState={initialState} interactionLabel='dashboard-test' isEditor={false} />)

    expect(screen.queryByRole('link', { name: 'Link to Dataset' })).not.toBeInTheDocument()
  })

  it('shows dashboard image controls in Dashboard Settings and hides legacy root table controls', () => {
    const state = {
      config: {
        type: 'dashboard',
        dashboard: {
          title: 'Dashboard Title',
          titleStyle: 'small',
          theme: 'theme-blue',
          downloads: {
            downloadImageButton: true,
            downloadImageButtonStyle: 'button'
          },
          sharedFilters: []
        },
        visualizations: {},
        rows: [],
        datasets: {},
        table: {
          show: true,
          expanded: true,
          download: true
        }
      },
      data: {},
      loading: false,
      filteredData: {},
      preview: false,
      tabSelected: 'Dashboard Settings',
      filtersApplied: true
    } as InitialState

    render(
      <DashboardContext.Provider
        value={{
          ...state,
          isDebug: false,
          isEditor: true,
          outerContainerRef: () => {},
          setParentConfig: () => {},
          reloadURLData: () => {},
          loadAPIFilters: () => Promise.resolve([]),
          setAPIFilterDropdowns: () => {},
          setAPILoading: () => {}
        }}
      >
        <DashboardDispatchContext.Provider value={vi.fn()}>
          <Header />
        </DashboardDispatchContext.Provider>
      </DashboardContext.Provider>
    )

    expect(screen.getByText('Dashboard Settings')).toBeInTheDocument()
    expect(screen.getByLabelText('Dashboard title')).toHaveValue('Dashboard Title')
    expect(screen.getByLabelText('Title style')).toHaveValue('small')
    expect(screen.getByLabelText('Download image display')).toBeInTheDocument()
    expect(screen.getByLabelText('Download image display')).toHaveValue('button')
    expect(screen.queryByLabelText('Show PDF Download')).not.toBeInTheDocument()
    expect(screen.queryByText('Show Data Table(s)')).not.toBeInTheDocument()
    expect(screen.queryByText('Show Download CSV Link')).not.toBeInTheDocument()
  })

  it('keeps existing dashboard PDF download button rendering behavior', () => {
    const initialState = makeDashboardPreviewState({
      dashboard: {
        title: 'Dashboard Title',
        titleStyle: 'small',
        theme: 'theme-blue',
        sharedFilters: [],
        downloads: {
          downloadPdfButton: true
        }
      }
    })

    render(<CdcDashboardComponent initialState={initialState} interactionLabel='dashboard-test' isEditor={false} />)

    expect(screen.getByRole('button', { name: 'Download PDF' })).toBeInTheDocument()
  })

  it('suppresses rows when row conditions fail and preserves width for condition-hidden components', () => {
    const initialState = {
      config: {
        type: 'dashboard',
        dashboard: {
          title: 'Dashboard Title',
          titleStyle: 'small',
          theme: 'theme-blue',
          sharedFilters: []
        },
        visualizations: {
          'markup-hidden-row': {
            type: 'markup-include',
            contentEditor: {
              inlineHTML: '<p>Hidden row content</p>',
              showHeader: true,
              srcUrl: '',
              title: 'Hidden Row',
              useInlineHTML: true
            }
          },
          'markup-hidden-column': {
            type: 'markup-include',
            contentEditor: {
              inlineHTML: '<p>Hidden column content</p>',
              showHeader: true,
              srcUrl: '',
              title: 'Hidden Column',
              useInlineHTML: true
            }
          },
          'markup-visible-column': {
            type: 'markup-include',
            contentEditor: {
              inlineHTML: '<p>Visible widget content</p>',
              showHeader: true,
              srcUrl: '',
              title: 'Visible Column',
              useInlineHTML: true
            }
          }
        },
        rows: [
          {
            columns: [{ width: 12, widget: 'markup-hidden-row' }],
            dashboardCondition: {
              id: 'row-condition-1',
              datasetKey: 'row-condition-data',
              operator: 'hasData'
            },
            expandCollapseAllButtons: false
          },
          {
            columns: [
              {
                width: 6,
                conditionalWidgets: [
                  {
                    widget: 'markup-hidden-column',
                    dashboardCondition: {
                      id: 'column-condition-1',
                      datasetKey: 'column-condition-data',
                      operator: 'columnHasAnyValue',
                      columnName: 'flag',
                      values: ['show']
                    }
                  }
                ]
              },
              {
                width: 6,
                widget: 'markup-visible-column'
              }
            ],
            expandCollapseAllButtons: false
          }
        ],
        datasets: {
          'row-condition-data': { data: [] },
          'column-condition-data': { data: [{ flag: 'hide' }] }
        },
        table: {}
      },
      data: {
        'row-condition-data': [],
        'column-condition-data': [{ flag: 'hide' }]
      },
      loading: false,
      filteredData: {
        'column-condition-1': [{ flag: 'hide' }]
      },
      preview: false,
      tabSelected: 'Dashboard Preview',
      filtersApplied: true
    } as InitialState

    const { container } = render(
      <CdcDashboardComponent initialState={initialState} interactionLabel='dashboard-test' isEditor={false} />
    )

    expect(screen.queryByText('Hidden row content')).not.toBeInTheDocument()
    expect(screen.queryByText('Hidden column content')).not.toBeInTheDocument()
    expect(screen.getByText('Visible widget content')).toBeInTheDocument()

    const hiddenConditionColumn = container.querySelector('[data-dashboard-condition-hidden="true"]')
    expect(hiddenConditionColumn).toHaveClass('col-md-6')
  })

  it('skips truly empty runtime columns in multi-visualization rows', () => {
    const initialState = {
      config: {
        type: 'dashboard',
        dashboard: {
          title: 'Dashboard Title',
          titleStyle: 'small',
          theme: 'theme-blue',
          sharedFilters: []
        },
        visualizations: {
          'markup-visible-column': {
            type: 'markup-include',
            contentEditor: {
              inlineHTML: '<p>Visible widget content</p>',
              showHeader: true,
              srcUrl: '',
              title: 'Visible Column',
              useInlineHTML: true
            }
          }
        },
        rows: [
          {
            multiVizColumn: 'group',
            columns: [{ width: 4 }, { width: 8, widget: 'markup-visible-column' }],
            expandCollapseAllButtons: false
          }
        ],
        datasets: {
          'column-condition-data': { data: [{ group: 'A' }] }
        },
        table: {}
      },
      data: {
        'column-condition-data': [{ group: 'A' }]
      },
      loading: false,
      filteredData: {
        0: [{ group: 'A' }]
      },
      preview: false,
      tabSelected: 'Dashboard Preview',
      filtersApplied: true
    } as InitialState

    const { container } = render(
      <CdcDashboardComponent initialState={initialState} interactionLabel='dashboard-test' isEditor={false} />
    )

    expect(screen.getByText('Visible widget content')).toBeInTheDocument()

    const row = container.querySelector('[data-row-index="0"]')
    expect(row?.querySelectorAll('[data-dashboard-condition-hidden="true"]').length).toBe(0)
    expect(row?.querySelectorAll('.col-md-4').length).toBe(0)
    expect(row?.querySelectorAll('.col-md-8').length).toBe(1)
  })

  it('preserves truly empty runtime columns in ordinary rows', () => {
    const initialState = {
      config: {
        type: 'dashboard',
        dashboard: {
          title: 'Dashboard Title',
          titleStyle: 'small',
          theme: 'theme-blue',
          sharedFilters: []
        },
        visualizations: {
          'markup-visible-column': {
            type: 'markup-include',
            contentEditor: {
              inlineHTML: '<p>Visible widget content</p>',
              showHeader: true,
              srcUrl: '',
              title: 'Visible Column',
              useInlineHTML: true
            }
          }
        },
        rows: [
          {
            columns: [{ width: 4 }, { width: 8, widget: 'markup-visible-column' }],
            expandCollapseAllButtons: false
          }
        ],
        datasets: {},
        table: {}
      },
      data: {},
      loading: false,
      filteredData: {},
      preview: false,
      tabSelected: 'Dashboard Preview',
      filtersApplied: true
    } as InitialState

    const { container } = render(
      <CdcDashboardComponent initialState={initialState} interactionLabel='dashboard-test' isEditor={false} />
    )

    expect(screen.getByText('Visible widget content')).toBeInTheDocument()

    const row = container.querySelector('[data-row-index="0"]')
    expect(row?.querySelectorAll('[data-dashboard-condition-hidden="true"]').length).toBe(0)
    expect(row?.querySelectorAll('.col-md-4').length).toBe(1)
    expect(row?.querySelectorAll('.col-md-8').length).toBe(1)
  })

  it('uses the resolved conditional widget when excluding filter rows from equal height', () => {
    const initialState = {
      config: {
        type: 'dashboard',
        dashboard: {
          title: 'Dashboard Title',
          titleStyle: 'small',
          theme: 'theme-blue',
          sharedFilters: []
        },
        visualizations: {
          'dashboard-filters-hidden': {
            type: 'dashboardFilters',
            visualizationType: 'dashboardFilters',
            sharedFilterIndexes: []
          },
          'markup-visible': {
            type: 'markup-include',
            contentEditor: {
              inlineHTML: '<p>Resolved markup content</p>',
              showHeader: true,
              srcUrl: '',
              title: 'Resolved',
              useInlineHTML: true
            }
          }
        },
        rows: [
          {
            equalHeight: true,
            columns: [
              {
                width: 12,
                conditionalWidgets: [
                  {
                    widget: 'dashboard-filters-hidden',
                    dashboardCondition: {
                      id: 'filters-condition',
                      datasetKey: 'condition-data',
                      operator: 'hasData'
                    }
                  },
                  {
                    widget: 'markup-visible',
                    dashboardCondition: {
                      id: 'markup-condition',
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
        datasets: {
          'condition-data': { data: [{ value: 'show' }] }
        },
        table: {}
      },
      data: {
        'condition-data': [{ value: 'show' }]
      },
      loading: false,
      filteredData: {
        'filters-condition': [],
        'markup-condition': [{ value: 'show' }]
      },
      preview: false,
      tabSelected: 'Dashboard Preview',
      filtersApplied: true
    } as InitialState

    const { container } = render(
      <CdcDashboardComponent initialState={initialState} interactionLabel='dashboard-test' isEditor={false} />
    )

    expect(screen.getByText('Resolved markup content')).toBeInTheDocument()
    expect(container.querySelector('[data-row-index="0"]')).toHaveClass('equal-height')
  })

  it('counts resolved conditional TP5 widgets for automatic equal height', () => {
    const initialState = {
      config: {
        type: 'dashboard',
        dashboard: {
          title: 'Dashboard Title',
          titleStyle: 'small',
          theme: 'theme-blue',
          sharedFilters: []
        },
        visualizations: {
          'markup-plain-hidden': {
            type: 'markup-include',
            contentEditor: {
              inlineHTML: '<p>Plain hidden content</p>',
              showHeader: true,
              srcUrl: '',
              title: 'Plain Hidden',
              useInlineHTML: true
            }
          },
          'markup-tp5-resolved': {
            type: 'markup-include',
            contentEditor: {
              inlineHTML: '<p>Resolved TP5 content</p>',
              showHeader: true,
              srcUrl: '',
              style: 'tp5',
              title: 'Resolved TP5',
              useInlineHTML: true
            }
          },
          'markup-tp5-static': {
            type: 'markup-include',
            contentEditor: {
              inlineHTML: '<p>Static TP5 content</p>',
              showHeader: true,
              srcUrl: '',
              style: 'tp5',
              title: 'Static TP5',
              useInlineHTML: true
            }
          }
        },
        rows: [
          {
            columns: [
              {
                width: 6,
                conditionalWidgets: [
                  {
                    widget: 'markup-plain-hidden',
                    dashboardCondition: {
                      id: 'plain-condition',
                      datasetKey: 'condition-data',
                      operator: 'hasData'
                    }
                  },
                  {
                    widget: 'markup-tp5-resolved',
                    dashboardCondition: {
                      id: 'tp5-condition',
                      datasetKey: 'condition-data',
                      operator: 'hasData'
                    }
                  }
                ]
              },
              {
                width: 6,
                widget: 'markup-tp5-static'
              }
            ],
            expandCollapseAllButtons: false
          }
        ],
        datasets: {
          'condition-data': { data: [{ value: 'show' }] }
        },
        table: {}
      },
      data: {
        'condition-data': [{ value: 'show' }]
      },
      loading: false,
      filteredData: {
        'plain-condition': [],
        'tp5-condition': [{ value: 'show' }]
      },
      preview: false,
      tabSelected: 'Dashboard Preview',
      filtersApplied: true
    } as InitialState

    const { container } = render(
      <CdcDashboardComponent initialState={initialState} interactionLabel='dashboard-test' isEditor={false} />
    )

    expect(screen.getByText('Resolved TP5 content')).toBeInTheDocument()
    expect(screen.getByText('Static TP5 content')).toBeInTheDocument()
    expect(container.querySelector('[data-row-index="0"]')).toHaveClass('equal-height')
  })

  it('keeps the legacy incomplete-filter message when no filtersIncomplete condition exists', () => {
    const initialState = {
      config: {
        type: 'dashboard',
        dashboard: {
          title: 'Dashboard Title',
          titleStyle: 'small',
          theme: 'theme-blue',
          sharedFilters: [
            {
              key: 'Region',
              type: 'datafilter',
              columnName: 'region',
              showDropdown: true,
              active: '',
              usedBy: []
            }
          ]
        },
        visualizations: {
          'markup-default': {
            type: 'markup-include',
            contentEditor: {
              inlineHTML: '<p>Default content</p>',
              showHeader: true,
              srcUrl: '',
              title: 'Default',
              useInlineHTML: true
            }
          }
        },
        rows: [{ columns: [{ width: 12, widget: 'markup-default' }], expandCollapseAllButtons: false }],
        datasets: {},
        table: {}
      },
      data: {},
      loading: false,
      filteredData: {},
      preview: false,
      tabSelected: 'Dashboard Preview',
      filtersApplied: true
    } as InitialState

    render(<CdcDashboardComponent initialState={initialState} interactionLabel='dashboard-test' isEditor={false} />)

    expect(screen.getByText('Please complete your selection to continue.')).toBeInTheDocument()
  })

  it('renders authored incomplete-filter content and suppresses the legacy message when opted in', () => {
    const initialState = {
      config: {
        type: 'dashboard',
        dashboard: {
          title: 'Dashboard Title',
          titleStyle: 'small',
          theme: 'theme-blue',
          sharedFilters: [
            {
              key: 'Region',
              type: 'datafilter',
              columnName: 'region',
              showDropdown: true,
              active: '',
              usedBy: ['markup-incomplete']
            }
          ]
        },
        visualizations: {
          'markup-incomplete': {
            type: 'markup-include',
            contentEditor: {
              inlineHTML: '<p>Select filters authored content</p>',
              showHeader: true,
              srcUrl: '',
              title: 'Incomplete',
              useInlineHTML: true
            }
          }
        },
        rows: [
          {
            columns: [
              {
                width: 12,
                conditionalWidgets: [
                  {
                    widget: 'markup-incomplete',
                    dashboardCondition: {
                      id: 'filters-incomplete-condition',
                      operator: 'filtersIncomplete'
                    }
                  }
                ]
              }
            ],
            expandCollapseAllButtons: false
          }
        ],
        datasets: {},
        table: {}
      },
      data: {},
      loading: false,
      filteredData: {
        'filters-incomplete-condition': [{}]
      },
      preview: false,
      tabSelected: 'Dashboard Preview',
      filtersApplied: true
    } as InitialState

    render(<CdcDashboardComponent initialState={initialState} interactionLabel='dashboard-test' isEditor={false} />)

    expect(screen.getByText('Select filters authored content')).toBeInTheDocument()
    expect(screen.queryByText('Please complete your selection to continue.')).not.toBeInTheDocument()
  })

  it('keeps ordinary data modules hidden while authored incomplete-filter content renders', () => {
    const initialState = {
      config: {
        type: 'dashboard',
        dashboard: {
          title: 'Dashboard Title',
          titleStyle: 'small',
          theme: 'theme-blue',
          sharedFilters: [
            {
              key: 'Region',
              type: 'datafilter',
              columnName: 'region',
              showDropdown: true,
              active: '',
              usedBy: ['markup-incomplete']
            }
          ]
        },
        visualizations: {
          'markup-incomplete': {
            type: 'markup-include',
            contentEditor: {
              inlineHTML: '<p>Select filters authored content</p>',
              showHeader: true,
              srcUrl: '',
              title: 'Incomplete',
              useInlineHTML: true
            }
          },
          'markup-results': {
            type: 'markup-include',
            dataKey: 'results-data',
            contentEditor: {
              inlineHTML: '<p>Filtered results content</p>',
              showHeader: true,
              srcUrl: '',
              title: 'Results',
              useInlineHTML: true
            }
          }
        },
        rows: [
          {
            columns: [
              {
                width: 12,
                conditionalWidgets: [
                  {
                    widget: 'markup-incomplete',
                    dashboardCondition: {
                      id: 'filters-incomplete-condition',
                      operator: 'filtersIncomplete'
                    }
                  }
                ]
              }
            ],
            expandCollapseAllButtons: false
          },
          {
            columns: [{ width: 12, widget: 'markup-results' }],
            expandCollapseAllButtons: false
          }
        ],
        datasets: {
          'results-data': { data: [{ region: 'North' }] }
        },
        table: {}
      },
      data: {
        'results-data': [{ region: 'North' }]
      },
      loading: false,
      filteredData: {
        'filters-incomplete-condition': [{}]
      },
      preview: false,
      tabSelected: 'Dashboard Preview',
      filtersApplied: true
    } as InitialState

    render(<CdcDashboardComponent initialState={initialState} interactionLabel='dashboard-test' isEditor={false} />)

    expect(screen.getByText('Select filters authored content')).toBeInTheDocument()
    expect(screen.queryByText('Filtered results content')).not.toBeInTheDocument()
    expect(screen.queryByText('Please complete your selection to continue.')).not.toBeInTheDocument()
  })

  it('does not let dashboard filter widgets or condition-only datasets force the legacy message', () => {
    const initialState = {
      config: {
        type: 'dashboard',
        dashboard: {
          title: 'Dashboard Title',
          titleStyle: 'small',
          theme: 'theme-blue',
          sharedFilters: [
            {
              key: 'Region',
              type: 'datafilter',
              columnName: 'region',
              showDropdown: true,
              active: '',
              usedBy: ['markup-incomplete']
            }
          ]
        },
        visualizations: {
          'dashboard-filters': {
            type: 'dashboardFilters',
            visualizationType: 'dashboardFilters',
            sharedFilterIndexes: [0]
          },
          'markup-incomplete': {
            type: 'markup-include',
            contentEditor: {
              inlineHTML: '<p>Select filters authored content</p>',
              showHeader: true,
              srcUrl: '',
              title: 'Incomplete',
              useInlineHTML: true
            }
          }
        },
        rows: [
          { columns: [{ width: 12, widget: 'dashboard-filters' }], expandCollapseAllButtons: false },
          {
            columns: [
              {
                width: 12,
                conditionalWidgets: [
                  {
                    widget: 'markup-incomplete',
                    dashboardCondition: {
                      id: 'filters-incomplete-condition',
                      operator: 'filtersIncomplete'
                    }
                  }
                ]
              }
            ],
            dashboardCondition: {
              id: 'condition-only-data',
              datasetKey: 'condition-data',
              operator: 'hasData'
            },
            expandCollapseAllButtons: false
          }
        ],
        datasets: {
          'condition-data': { data: [{ region: 'North' }] }
        },
        table: {}
      },
      data: {
        'condition-data': [{ region: 'North' }]
      },
      loading: false,
      filteredData: {
        'filters-incomplete-condition': [{}],
        'condition-only-data': [{ region: 'North' }]
      },
      preview: false,
      tabSelected: 'Dashboard Preview',
      filtersApplied: true
    } as InitialState

    render(<CdcDashboardComponent initialState={initialState} interactionLabel='dashboard-test' isEditor={false} />)

    expect(screen.getByText('Select filters authored content')).toBeInTheDocument()
    expect(screen.queryByText('Please complete your selection to continue.')).not.toBeInTheDocument()
  })

  it('does not show the legacy message while condition-only data is loading', () => {
    const initialState = {
      config: {
        type: 'dashboard',
        dashboard: {
          title: 'Dashboard Title',
          titleStyle: 'small',
          theme: 'theme-blue',
          sharedFilters: [
            {
              key: 'Region',
              type: 'datafilter',
              columnName: 'region',
              showDropdown: true,
              active: '',
              usedBy: ['markup-incomplete', 1]
            }
          ]
        },
        visualizations: {
          'markup-incomplete': {
            type: 'markup-include',
            contentEditor: {
              inlineHTML: '<p>Select filters authored content</p>',
              showHeader: true,
              srcUrl: '',
              title: 'Incomplete',
              useInlineHTML: true
            }
          },
          'markup-results': {
            type: 'markup-include',
            contentEditor: {
              inlineHTML: '<p>Filtered results content</p>',
              showHeader: true,
              srcUrl: '',
              title: 'Results',
              useInlineHTML: true
            }
          }
        },
        rows: [
          {
            columns: [
              {
                width: 12,
                conditionalWidgets: [
                  {
                    widget: 'markup-incomplete',
                    dashboardCondition: {
                      id: 'filters-incomplete-condition',
                      operator: 'filtersIncomplete'
                    }
                  }
                ]
              }
            ],
            expandCollapseAllButtons: false
          },
          {
            columns: [{ width: 12, widget: 'markup-results' }],
            dashboardCondition: {
              id: 'condition-only-data',
              datasetKey: 'condition-data',
              operator: 'hasData'
            },
            expandCollapseAllButtons: false
          }
        ],
        datasets: {
          'condition-data': { data: [{ region: 'North' }] }
        },
        table: {}
      },
      data: {},
      loading: false,
      filteredData: {
        'filters-incomplete-condition': [{}]
      },
      preview: false,
      tabSelected: 'Dashboard Preview',
      filtersApplied: true
    } as InitialState

    render(<CdcDashboardComponent initialState={initialState} interactionLabel='dashboard-test' isEditor={false} />)

    expect(screen.getByText('Select filters authored content')).toBeInTheDocument()
    expect(screen.queryByText('Please complete your selection to continue.')).not.toBeInTheDocument()
  })

  it('renders normal conditioned content after filters become complete', () => {
    const initialState = {
      config: {
        type: 'dashboard',
        dashboard: {
          title: 'Dashboard Title',
          titleStyle: 'small',
          theme: 'theme-blue',
          sharedFilters: [
            {
              key: 'Region',
              type: 'datafilter',
              columnName: 'region',
              showDropdown: true,
              active: 'North',
              usedBy: ['markup-incomplete', 'markup-results']
            }
          ]
        },
        visualizations: {
          'markup-incomplete': {
            type: 'markup-include',
            contentEditor: {
              inlineHTML: '<p>Select filters authored content</p>',
              showHeader: true,
              srcUrl: '',
              title: 'Incomplete',
              useInlineHTML: true
            }
          },
          'markup-results': {
            type: 'markup-include',
            contentEditor: {
              inlineHTML: '<p>Filtered results content</p>',
              showHeader: true,
              srcUrl: '',
              title: 'Results',
              useInlineHTML: true
            }
          }
        },
        rows: [
          {
            columns: [
              {
                width: 12,
                conditionalWidgets: [
                  {
                    widget: 'markup-incomplete',
                    dashboardCondition: {
                      id: 'filters-incomplete-condition',
                      operator: 'filtersIncomplete'
                    }
                  },
                  {
                    widget: 'markup-results',
                    dashboardCondition: {
                      id: 'has-data-condition',
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
        datasets: {
          'condition-data': { data: [{ region: 'North' }] }
        },
        table: {}
      },
      data: {
        'condition-data': [{ region: 'North' }]
      },
      loading: false,
      filteredData: {
        'filters-incomplete-condition': [],
        'has-data-condition': [{ region: 'North' }]
      },
      preview: false,
      tabSelected: 'Dashboard Preview',
      filtersApplied: true
    } as InitialState

    render(<CdcDashboardComponent initialState={initialState} interactionLabel='dashboard-test' isEditor={false} />)

    expect(screen.queryByText('Select filters authored content')).not.toBeInTheDocument()
    expect(screen.getByText('Filtered results content')).toBeInTheDocument()
  })
})
