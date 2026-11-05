import { describe, expect, it } from 'vitest'
import initialState from './../data/initial-state'
import { getInitialState, mapReducer } from './map.reducer'

describe('getInitialState', () => {
  it('keeps equalNumberOptIn enabled for new maps from initial state', () => {
    const state = getInitialState(initialState)

    expect(state.config.general.equalNumberOptIn).toBe(true)
  })
})

it('clears isolation when its category is removed and does not revive it after adding another', () => {
  const config = {
    ...initialState,
    dotDensity: {
      enabled: true,
      series: [
        { id: 'a', column: 'A', label: 'A' },
        { id: 'b', column: 'B', label: 'B' }
      ]
    }
  } as any
  const state = { ...getInitialState(config), hiddenDensitySeries: ['b'] }
  const remaining = { ...config, dotDensity: { ...config.dotDensity, series: [config.dotDensity.series[1]] } }
  const next = mapReducer(state, { type: 'SET_CONFIG', payload: remaining })
  expect(next.hiddenDensitySeries).toEqual([])
  const withAdded = mapReducer(next, { type: 'SET_CONFIG', payload: config })
  expect(withAdded.hiddenDensitySeries).toEqual([])
})

it.each([null, 'invalid', [null, { id: 'bad', column: 42 }]])(
  'accepts malformed imported density series %j without throwing',
  series => {
    const config = { ...initialState, dotDensity: { enabled: true, series } } as any
    expect(() => mapReducer(getInitialState(initialState), { type: 'SET_CONFIG', payload: config })).not.toThrow()
  }
)

it.each(['new series', 'mapped draft'])('keeps the isolated category selected after adding a %s', mode => {
  const a = { id: 'a', column: 'A', label: 'A' }
  const b = { id: 'b', column: 'B', label: 'B' }
  const c = { id: 'c', column: 'C', label: 'C' }
  const before = {
    ...initialState,
    dotDensity: { enabled: true, series: [a, b, ...(mode === 'mapped draft' ? [{ ...c, column: '' }] : [])] }
  } as any
  const state = { ...getInitialState(before), hiddenDensitySeries: ['b'] }
  const config = { ...before, dotDensity: { ...before.dotDensity, series: [a, b, c] } }
  const next = mapReducer(state, { type: 'SET_CONFIG', payload: config })
  expect(next.hiddenDensitySeries).toEqual(['b', 'c'])
})

it('does not infer isolation from an all-visible single-series map', () => {
  const a = { id: 'a', column: 'A', label: 'A' }
  const before = { ...initialState, dotDensity: { enabled: true, series: [a] } } as any
  const config = { ...before, dotDensity: { ...before.dotDensity, series: [a, { id: 'b', column: 'B', label: 'B' }] } }
  const next = mapReducer(getInitialState(before), { type: 'SET_CONFIG', payload: config })
  expect(next.hiddenDensitySeries).toEqual([])
})
