import { addIdsToVisFilters } from '../4.24.9'
import { coveUpdateWorker } from '../../coveUpdateWorker'
import { expect, describe, it } from 'vitest'

describe('addIdsToVisFilters', () => {
  it('adds ids to vis filters on dashboards', () => {
    const mockConfig = { type: 'dashboard', visualizations: { a: { filters: [{}] } } } as any
    addIdsToVisFilters(mockConfig)
    expect(mockConfig.visualizations.a.filters[0].id).toBeDefined()
  })
  it('adds ids to vis filters on non dashboards', () => {
    const mockConfig = { filters: [{}] } as any
    addIdsToVisFilters(mockConfig)
    expect(mockConfig.filters[0].id).toBeDefined()
  })
  it('adds ids to nested multi-dashboards', () => {
    const mockConfig = { type: 'dashboard', rows: [], visualizations: { a: { filters: [{}] } }, multiDashboards: [{ rows: [], visualizations: { a: { filters: [{}] } } }] }
    const convertedConfig = coveUpdateWorker(mockConfig)
    expect(convertedConfig.visualizations.a.filters[0].id).toBeDefined()
    expect(convertedConfig.multiDashboards[0].visualizations.a.filters[0].id).toBeDefined()
  })
})
