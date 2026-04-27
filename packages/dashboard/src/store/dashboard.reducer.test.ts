import { describe, it, expect } from 'vitest'
import reducer, { DashboardState } from './dashboard.reducer'
import { initialState } from '../DashboardContext'

const makeState = (overrides: Partial<DashboardState['config']> = {}): DashboardState => ({
  ...initialState,
  config: {
    type: 'dashboard',
    label: 'Tab A',
    activeDashboard: 0,
    datasets: {},
    visualizations: {},
    rows: [],
    dashboard: { sharedFilters: [] },
    multiDashboards: [
      { label: 'Tab A', dashboard: { sharedFilters: [] }, visualizations: {}, rows: [] },
      { label: 'Tab B', dashboard: { sharedFilters: [] }, visualizations: {}, rows: [] }
    ],
    ...overrides
  } as any
})

describe('RENAME_DASHBOARD_TAB', () => {
  it('updates config.label for the active tab', () => {
    const state = makeState()
    const next = reducer(state, { type: 'RENAME_DASHBOARD_TAB', payload: { current: 'Tab A', new: 'Renamed' } })
    expect(next.config.label).toBe('Renamed')
  })

  it('updates the matching entry in multiDashboards', () => {
    const state = makeState()
    const next = reducer(state, { type: 'RENAME_DASHBOARD_TAB', payload: { current: 'Tab A', new: 'Renamed' } })
    expect(next.config.multiDashboards[0].label).toBe('Renamed')
  })

  it('does not rename non-matching tabs', () => {
    const state = makeState()
    const next = reducer(state, { type: 'RENAME_DASHBOARD_TAB', payload: { current: 'Tab A', new: 'Renamed' } })
    expect(next.config.multiDashboards[1].label).toBe('Tab B')
  })
})
