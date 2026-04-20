import { describe, expect, it } from 'vitest'
import { getCountyTerritoryVisibility } from '../countyTerritories'

describe('countyTerritories', () => {
  it('collects visible territory prefixes and county ids from runtime data', () => {
    const runtimeData = {
      '06001': { uid: '06001', value: 1 },
      '72001': { uid: '72001', value: 2 }
    }

    const visibility = getCountyTerritoryVisibility(true, runtimeData)

    expect(visibility.showTerritories).toBe(true)
    expect(Array.from(visibility.statePrefixes).sort()).toEqual(['72'])
    expect(Array.from(visibility.countyIds).sort()).toEqual(['72001'])
    expect(visibility.key).toBe('true:72')
  })

  it('collects multiple territory prefixes and ignores non-territory counties', () => {
    const runtimeData = {
      '72001': { uid: '72001', value: 1 },
      '72003': { uid: '72003', value: 2 },
      '78010': { uid: '78010', value: 3 },
      '06001': { uid: '06001', value: 4 }
    }

    const visibility = getCountyTerritoryVisibility(true, runtimeData)

    expect(Array.from(visibility.statePrefixes).sort()).toEqual(['72', '78'])
    expect(Array.from(visibility.countyIds).sort()).toEqual(['72001', '72003', '78010'])
    expect(visibility.key).toBe('true:72,78')
  })

  it('hides county territories when the config flag is disabled even if territory data exists', () => {
    const runtimeData = {
      '72001': { uid: '72001', value: 1 }
    }

    const visibility = getCountyTerritoryVisibility(false, runtimeData)

    expect(visibility.showTerritories).toBe(false)
    expect(Array.from(visibility.statePrefixes).sort()).toEqual(['72'])
    expect(Array.from(visibility.countyIds).sort()).toEqual(['72001'])
    expect(visibility.key).toBe('false:72')
  })

  it('hides county territories when the config flag is enabled but no territory data exists', () => {
    const runtimeData = {
      '06001': { uid: '06001', value: 1 }
    }

    const visibility = getCountyTerritoryVisibility(true, runtimeData)

    expect(visibility.showTerritories).toBe(false)
    expect(Array.from(visibility.statePrefixes).sort()).toEqual([])
    expect(Array.from(visibility.countyIds).sort()).toEqual([])
    expect(visibility.key).toBe('false:')
  })
})
