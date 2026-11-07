import { describe, expect, it } from 'vitest'
import initialState from './../data/initial-state'
import { getInitialState, mapReducer } from './map.reducer'
import { generateRuntimeFilters } from '../helpers/generateRuntimeFilters'
import { rowMatchesRuntimeFilters } from '../helpers/generateRuntimeData'
import { addValuesToFilters } from '@cdc/core/helpers/addValuesToFilters'

const savedConfig = (filter = {}) => ({
  ...initialState,
  data: [{ State: 'Ohio' }, { State: 'Georgia' }],
  filters: [{ columnName: 'State', values: ['Ohio', 'Georgia'], active: 'Georgia', defaultValue: 'Ohio', ...filter }]
})

describe('getInitialState', () => {
  it('keeps equalNumberOptIn enabled for new maps from initial state', () => {
    const state = getInitialState(initialState)

    expect(state.config.general.equalNumberOptIn).toBe(true)
  })

  it('loads the configured default instead of the saved selection without mutating the input', () => {
    const config = savedConfig()
    const state = getInitialState(config)

    expect(generateRuntimeFilters(state.config, 1, [])[0].active).toBe('Ohio')
    expect(config.filters[0].active).toBe('Georgia')
  })

  it('preserves the saved selection when no default is configured', () => {
    const state = getInitialState(savedConfig({ defaultValue: undefined }))

    expect(generateRuntimeFilters(state.config, 1, [])[0].active).toBe('Georgia')
  })

  it('falls back to the first sorted value when neither a default nor a saved selection exists', () => {
    const state = getInitialState(savedConfig({ defaultValue: undefined, active: undefined }))

    expect(generateRuntimeFilters(state.config, 1, [])[0].active).toBe('Georgia')
  })

  it.each(['', undefined, null])('treats %s defaults as unset', defaultValue => {
    const state = getInitialState(savedConfig({ defaultValue }))
    expect(generateRuntimeFilters(state.config, 1, [])[0].active).toBe('Georgia')
  })

  it('falls back to the first option when the default placeholder and saved selection are unset', () => {
    const state = getInitialState(savedConfig({ defaultValue: '', active: undefined }))
    expect(generateRuntimeFilters(state.config, 1, [])[0].active).toBe('Georgia')
  })

  it.each(['Fulton', 'Franklin'])(
    'reconciles the nested selection %s against the default parent without mutation',
    child => {
      const config = {
        ...savedConfig(),
        data: [
          { State: 'Ohio', County: 'Franklin' },
          { State: 'Georgia', County: 'Fulton' }
        ],
        filters: [
          {
            ...savedConfig().filters[0],
            filterStyle: 'nested-dropdown',
            subGrouping: {
              columnName: 'County',
              active: child,
              valuesLookup: {
                Ohio: { values: ['Franklin'] },
                Georgia: { values: ['Fulton'] }
              }
            }
          }
        ]
      }
      const original = JSON.parse(JSON.stringify(config))
      const [filter] = generateRuntimeFilters(getInitialState(config).config, 1, [])
      expect(filter).toMatchObject({ active: 'Ohio', subGrouping: { active: 'Franklin' } })
      expect(rowMatchesRuntimeFilters(config.data[0], [filter])).toBe(true)
      expect(config).toEqual(original)
    }
  )

  it('reconciles the child after resolving a parent URL override', () => {
    const originalUrl = window.location.href
    window.history.replaceState(null, '', '?map-state=Georgia&map-county=DeKalb')
    try {
      const config = savedConfig({
        filterStyle: 'nested-dropdown',
        setByQueryParameter: 'map-state',
        subGrouping: {
          columnName: 'County',
          active: 'Franklin',
          setByQueryParameter: 'map-county',
          valuesLookup: {
            Ohio: { values: ['Franklin'] },
            Georgia: { values: ['Fulton', 'DeKalb'] }
          }
        }
      })
      config.data = [
        { State: 'Ohio', County: 'Franklin' },
        { State: 'Georgia', County: 'Fulton' },
        { State: 'Georgia', County: 'DeKalb' }
      ]
      const [filter] = generateRuntimeFilters(getInitialState(config).config, 1, [])
      expect(filter).toMatchObject({ active: 'Georgia', subGrouping: { active: 'DeKalb' } })
      expect(config.filters[0].subGrouping.active).toBe('Franklin')
    } finally {
      window.history.replaceState(null, '', originalUrl)
    }
  })

  it('rebuilds missing nested lookup options from current data', () => {
    const config = {
      ...savedConfig({
        filterStyle: 'nested-dropdown',
        subGrouping: {
          columnName: 'County',
          active: 'Fulton',
          valuesLookup: {}
        }
      }),
      data: [
        { State: 'Ohio', County: 'Franklin' },
        { State: 'Georgia', County: 'Fulton' }
      ]
    }
    const [filter] = generateRuntimeFilters(getInitialState(config).config, 1, [])
    expect(filter.subGrouping).toMatchObject({
      active: 'Franklin',
      valuesLookup: {
        Ohio: { values: ['Franklin'] },
        Georgia: { values: ['Fulton'] }
      }
    })
    expect(config.filters[0].subGrouping.valuesLookup).toEqual({})
  })

  it.each([
    ['asc', ['Franklin', 'Hamilton']],
    ['desc', ['Hamilton', 'Franklin']],
    ['data', ['Hamilton', 'Franklin']]
  ])('preserves subgroup %s ordering when rebuilding options', (order, expected) => {
    const config = {
      ...savedConfig({
        filterStyle: 'nested-dropdown',
        subGrouping: { columnName: 'County', active: 'Fulton', order, valuesLookup: {} }
      }),
      data: [
        { State: 'Ohio', County: 'Hamilton' },
        { State: 'Ohio', County: 'Franklin' }
      ]
    }
    const [filter] = generateRuntimeFilters(getInitialState(config).config, 1, [])
    expect(filter.subGrouping.valuesLookup.Ohio.values).toEqual(expected)
    expect(filter.subGrouping.active).toBe(expected[0])
  })

  it('handles nested filters with no options for the resolved parent', () => {
    const config = savedConfig({
      filterStyle: 'nested-dropdown',
      subGrouping: {
        columnName: 'County',
        active: 'Fulton',
        valuesLookup: {}
      }
    })
    config.data = []
    const [filter] = generateRuntimeFilters(getInitialState(config).config, 1, [])
    expect(filter.subGrouping.active).toBeUndefined()
  })

  it('keeps a later selection and its default through config updates, then restores the default on reload', () => {
    const state = getInitialState(savedConfig())
    const runtimeFilters = generateRuntimeFilters(state.config, 1, [])
    runtimeFilters[0].active = 'Georgia'
    const filters = addValuesToFilters(runtimeFilters, [])
    const updatedConfig = { ...state.config, filters }

    expect(filters[0]).toMatchObject({ active: 'Georgia', defaultValue: 'Ohio' })
    expect(generateRuntimeFilters(updatedConfig, 2, runtimeFilters)[0].active).toBe('Georgia')
    const reloaded = getInitialState(JSON.parse(JSON.stringify(updatedConfig)))
    expect(generateRuntimeFilters(reloaded.config, 3, [])[0].active).toBe('Ohio')
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
