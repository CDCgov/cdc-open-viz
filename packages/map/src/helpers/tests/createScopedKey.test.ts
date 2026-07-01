import { createScopedKey } from '../createScopedKey'

describe('createScopedKey', () => {
  it('joins a scope and semantic key parts with a consistent delimiter', () => {
    expect(createScopedKey(':r1:', 'county', 'US-13')).toBe(':r1:--county--US-13')
  })

  it('uses a fallback scope when a map id is unavailable', () => {
    expect(createScopedKey(undefined, 'territory', 'PR')).toBe('map--territory--PR')
  })

  it('preserves empty edited values in the key parts', () => {
    expect(createScopedKey('map-1', 'shape-condition', 0, 1, '', '=', '')).toBe(
      'map-1--shape-condition--0--1----=--'
    )
  })
})
