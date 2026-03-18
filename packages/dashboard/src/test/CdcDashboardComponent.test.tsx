import React from 'react'
import { render } from '@testing-library/react'
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
})
