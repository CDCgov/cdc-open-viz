import { describe, expect, it } from 'vitest'
import { shouldAutoResetSingleStateZoom } from '../shouldAutoResetSingleStateZoom'

describe('shouldAutoResetSingleStateZoom', () => {
  it('returns false on the first runtime data load', () => {
    expect(
      shouldAutoResetSingleStateZoom({
        isDashboard: true,
        previousRuntimeDataHash: null,
        nextRuntimeDataHash: 123,
        hasDashboardFilters: true
      })
    ).toBe(false)
  })

  it('returns true when filtered dashboard runtime data changes after initial load', () => {
    expect(
      shouldAutoResetSingleStateZoom({
        isDashboard: true,
        previousRuntimeDataHash: 123,
        nextRuntimeDataHash: 456,
        hasDashboardFilters: true
      })
    ).toBe(true)
  })

  it('returns false when the runtime data hash is unchanged', () => {
    expect(
      shouldAutoResetSingleStateZoom({
        isDashboard: true,
        previousRuntimeDataHash: 123,
        nextRuntimeDataHash: 123,
        hasDashboardFilters: true
      })
    ).toBe(false)
  })

  it('returns false outside dashboards', () => {
    expect(
      shouldAutoResetSingleStateZoom({
        isDashboard: false,
        previousRuntimeDataHash: 123,
        nextRuntimeDataHash: 456,
        hasDashboardFilters: true
      })
    ).toBe(false)
  })

  it('returns false when map zoom is disabled', () => {
    expect(
      shouldAutoResetSingleStateZoom({
        isDashboard: true,
        previousRuntimeDataHash: 123,
        nextRuntimeDataHash: 456,
        hasDashboardFilters: true,
        allowMapZoom: false
      })
    ).toBe(false)
  })

  it('returns false when dashboard filters are not present on the visualization', () => {
    expect(
      shouldAutoResetSingleStateZoom({
        isDashboard: true,
        previousRuntimeDataHash: 123,
        nextRuntimeDataHash: 456,
        hasDashboardFilters: false
      })
    ).toBe(false)
  })
})
