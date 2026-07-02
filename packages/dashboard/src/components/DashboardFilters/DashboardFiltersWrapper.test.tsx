import React from 'react'
import { render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { DashboardContext, DashboardDispatchContext, initialState } from '../../DashboardContext'
import DashboardFiltersWrapper from './DashboardFiltersWrapper'

vi.mock('@cdc/core/components/ui/Icon', () => ({
  default: props => <span data-testid='mock-icon' {...props} />
}))

const createSharedFilter = (overrides = {}) =>
  ({
    key: 'Year',
    type: 'datafilter',
    filterStyle: 'dropdown',
    showDropdown: true,
    values: ['2023', '2024'],
    active: '2023',
    columnName: 'year',
    parents: [],
    ...overrides
  } as any)

const renderWrapper = ({
  grayBackground,
  sharedFilters = [createSharedFilter()],
  sharedFilterIndexes = [0],
  isEditor = false
}: {
  grayBackground?: boolean
  sharedFilters?: any[]
  sharedFilterIndexes?: any[]
  isEditor?: boolean
} = {}) => {
  const visualizationConfig = {
    uid: 'dashboardFilters1',
    type: 'dashboardFilters',
    visualizationType: 'dashboardFilters',
    filterBehavior: 'Filter Change',
    filterSectionTitle: 'Filter by year',
    filterIntro: 'Choose a <strong>year</strong> to update the dashboard.',
    sharedFilterIndexes,
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
          isEditor={isEditor}
          interactionLabel='dashboard-test'
        />
      </DashboardDispatchContext.Provider>
    </DashboardContext.Provider>
  )
}

describe('DashboardFiltersWrapper visual styles', () => {
  it('wraps filters in the dashboard filters callout when grey background is enabled', () => {
    const { container } = renderWrapper({ grayBackground: true })

    const callout = container.querySelector('.cdc-callout.cdc-callout--dashboard-filters')
    const sectionTitle = container.querySelector('.dashboard-filters__section-title')

    expect(callout).toBeInTheDocument()
    expect(sectionTitle).toHaveTextContent('Filter by year')
    expect(callout).toContainElement(sectionTitle as Element)
  })

  it.each([false, undefined])('keeps the existing unwrapped layout when grayBackground is %s', value => {
    const { container } = renderWrapper({ grayBackground: value })

    expect(container.querySelector('.cdc-callout.cdc-callout--dashboard-filters')).not.toBeInTheDocument()
  })

  it('renders filter intro text above dashboard filter controls', () => {
    const { container } = renderWrapper()
    const sectionTitle = container.querySelector('.dashboard-filters__section-title')
    const intro = container.querySelector('.filters-section__intro-text')

    expect(sectionTitle).toBeInTheDocument()
    expect(sectionTitle).toHaveTextContent('Filter by year')
    expect(intro).toBeInTheDocument()
    expect(intro).toHaveTextContent('Choose a year to update the dashboard.')
    expect(intro?.querySelector('strong')).toHaveTextContent('year')
  })

  it('renders no dashboard filters container when every referenced filter is hidden', () => {
    const { container } = renderWrapper({ sharedFilters: [createSharedFilter({ showDropdown: false })] })

    expect(container.querySelector('.cove-dashboard-filters-container')).not.toBeInTheDocument()
  })

  it('renders no dashboard filters container when sharedFilterIndexes is empty', () => {
    const { container } = renderWrapper({ sharedFilterIndexes: [] })

    expect(container.querySelector('.cove-dashboard-filters-container')).not.toBeInTheDocument()
  })

  it('renders no dashboard filters container when sharedFilterIndexes only references missing filters', () => {
    const { container } = renderWrapper({ sharedFilterIndexes: [4] })

    expect(container.querySelector('.cove-dashboard-filters-container')).not.toBeInTheDocument()
  })

  it('keeps the editor sidebar available without rendering an empty runtime filters container', () => {
    const { container, getByText } = renderWrapper({
      sharedFilters: [createSharedFilter({ showDropdown: false })],
      isEditor: true
    })

    expect(getByText('Configure Dashboard Filters')).toBeInTheDocument()
    expect(container.querySelector('.cove-dashboard-filters-container')).not.toBeInTheDocument()
  })

  it.each([
    ['urlfilter', createSharedFilter({ type: 'urlfilter', showDropdown: false })],
    ['nestedDropdown', createSharedFilter({ filterStyle: 'nested-dropdown', showDropdown: false })],
    ['tabSimple', createSharedFilter({ filterStyle: 'tab-simple', showDropdown: false })]
  ])('keeps %s dashboard filters visible under dashboard-specific rules', (_label, filter) => {
    const { container } = renderWrapper({ sharedFilters: [filter] })

    expect(container.querySelector('.cove-dashboard-filters-container')).toBeInTheDocument()
  })
})
