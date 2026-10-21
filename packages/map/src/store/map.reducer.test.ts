import { describe, expect, it } from 'vitest'
import initialState from './../data/initial-state'
import { getInitialState } from './map.reducer'
import { generateRuntimeFilters } from '../helpers/generateRuntimeFilters'
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
