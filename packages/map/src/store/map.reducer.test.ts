import { describe, expect, it } from 'vitest'
import initialState from './../data/initial-state'
import { getInitialState } from './map.reducer'

describe('getInitialState', () => {
  it('preserves missing legacy equalNumberOptIn values after default merging', () => {
    const state = getInitialState({
      type: 'map',
      general: {
        type: 'data'
      }
    } as any)

    expect(state.config.general.equalNumberOptIn).toBeUndefined()
  })

  it('keeps equalNumberOptIn enabled for new maps from initial state', () => {
    const state = getInitialState(initialState)

    expect(state.config.general.equalNumberOptIn).toBe(true)
  })
})
