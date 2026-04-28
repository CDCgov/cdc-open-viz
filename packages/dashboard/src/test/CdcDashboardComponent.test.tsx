import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import CdcDashboardComponent from '../CdcDashboardComponent'
import type { InitialState } from '../types/InitialState'

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

vi.stubGlobal('ResizeObserver', ResizeObserverMock)

describe('CdcDashboardComponent', () => {
  it('renders dashboard markup through the shared visualization shell', () => {
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
              usedBy: ['filters-incomplete-condition']
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
              usedBy: ['filters-incomplete-condition']
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
              usedBy: ['filters-incomplete-condition']
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
              usedBy: ['filters-incomplete-condition', 'condition-only-data']
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
              usedBy: ['filters-incomplete-condition', 'has-data-condition']
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
