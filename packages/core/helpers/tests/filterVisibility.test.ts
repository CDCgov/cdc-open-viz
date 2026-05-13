import { describe, expect, it } from 'vitest'
import { hasVisibleVizFilters, isVisibleVizFilter } from '../filterVisibility'

describe('filterVisibility', () => {
  it('treats missing, empty, and all-hidden visualization filters as not visible', () => {
    expect(hasVisibleVizFilters()).toBe(false)
    expect(hasVisibleVizFilters([])).toBe(false)
    expect(hasVisibleVizFilters([{ showDropdown: false }])).toBe(false)
    expect(isVisibleVizFilter(undefined)).toBe(false)
  })

  it('treats filters as visible unless showDropdown is explicitly false', () => {
    expect(hasVisibleVizFilters([{ showDropdown: false }, {}])).toBe(true)
    expect(hasVisibleVizFilters([{ showDropdown: true }])).toBe(true)
  })
})
