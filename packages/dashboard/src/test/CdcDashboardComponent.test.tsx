import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import CdcDashboardComponent from '../CdcDashboardComponent'
import type { InitialState } from '../types/InitialState'

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
                widget: 'markup-hidden-column',
                dashboardCondition: {
                  id: 'column-condition-1',
                  datasetKey: 'column-condition-data',
                  operator: 'columnHasAnyValue',
                  columnName: 'flag',
                  values: ['show']
                }
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
      filteredData: {},
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
})
