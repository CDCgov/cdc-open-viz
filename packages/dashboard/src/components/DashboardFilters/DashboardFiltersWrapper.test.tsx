import React from 'react'
import { render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { DashboardContext, DashboardDispatchContext, initialState } from '../../DashboardContext'
import DashboardFiltersWrapper from './DashboardFiltersWrapper'

vi.mock('@cdc/core/components/ui/Icon', () => ({
  default: props => <span data-testid='mock-icon' {...props} />
}))

const sharedFilters = [
  {
    key: 'Year',
    type: 'datafilter',
    filterStyle: 'dropdown',
    showDropdown: true,
    values: ['2023', '2024'],
    active: '2023',
    columnName: 'year',
    parents: []
  }
] as any

const renderWrapper = (grayBackground?: boolean) => {
  const visualizationConfig = {
    uid: 'dashboardFilters1',
    type: 'dashboardFilters',
    visualizationType: 'dashboardFilters',
    filterBehavior: 'Filter Change',
    sharedFilterIndexes: [0],
    visual: grayBackground === undefined ? undefined : { grayBackground }
  } as any

  return render(
    <DashboardContext.Provider
      value={{
        ...initialState,
        config: {
          type: 'dashboard',
          dashboard: { sharedFilters },
          datasets: {},
          rows: [],
          visualizations: {
            dashboardFilters1: visualizationConfig
          }
        } as any,
        data: {},
        outerContainerRef: vi.fn(),
        setParentConfig: vi.fn(),
        isDebug: false,
        isEditor: false,
        reloadURLData: vi.fn(),
        loadAPIFilters: vi.fn(),
        setAPIFilterDropdowns: vi.fn(),
        setAPILoading: vi.fn()
      }}
    >
      <DashboardDispatchContext.Provider value={vi.fn()}>
        <DashboardFiltersWrapper
          apiFilterDropdowns={{}}
          visualizationConfig={visualizationConfig}
          setConfig={vi.fn()}
          currentViewport={'lg' as any}
          interactionLabel='dashboard-test'
        />
      </DashboardDispatchContext.Provider>
    </DashboardContext.Provider>
  )
}

describe('DashboardFiltersWrapper visual styles', () => {
  it('wraps filters in the dashboard filters callout when grey background is enabled', () => {
    const { container } = renderWrapper(true)

    expect(container.querySelector('.cdc-callout.cdc-callout--dashboard-filters')).toBeInTheDocument()
  })

  it.each([false, undefined])('keeps the existing unwrapped layout when grayBackground is %s', value => {
    const { container } = renderWrapper(value)

    expect(container.querySelector('.cdc-callout.cdc-callout--dashboard-filters')).not.toBeInTheDocument()
  })
})
