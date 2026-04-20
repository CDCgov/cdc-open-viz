import { describe, expect, it } from 'vitest'
import {
  getVisibleCountyTerritoryIds,
  getVisibleCountyTerritoryPrefixes,
  hasCountyTerritoryData,
  shouldShowCountyTerritories
} from '../countyTerritories'

describe('countyTerritories', () => {
  it('detects county territory rows from runtime data', () => {
    const runtimeData = {
      '06001': { uid: '06001', value: 1 },
      '72001': { uid: '72001', value: 2 }
    }

    expect(hasCountyTerritoryData(runtimeData)).toBe(true)
  })

  it('returns the visible territory prefixes from runtime data', () => {
    const runtimeData = {
      '72001': { uid: '72001', value: 1 },
      '72003': { uid: '72003', value: 2 },
      '78010': { uid: '78010', value: 3 },
      '06001': { uid: '06001', value: 4 }
    }

    expect(Array.from(getVisibleCountyTerritoryPrefixes(runtimeData))).toEqual(['72', '78'])
  })

  it('returns the visible territory county ids from runtime data', () => {
    const runtimeData = {
      '72001': { uid: '72001', value: 1 },
      '78010': { uid: '78010', value: 2 },
      '06001': { uid: '06001', value: 3 }
    }

    expect(Array.from(getVisibleCountyTerritoryIds(runtimeData))).toEqual(['72001', '78010'])
  })

  it('ignores non-territory county rows', () => {
    const runtimeData = {
      '06001': { uid: '06001', value: 1 },
      '12001': { uid: '12001', value: 2 }
    }

    expect(hasCountyTerritoryData(runtimeData)).toBe(false)
  })

  it('shows county territories when the config flag is enabled', () => {
    expect(shouldShowCountyTerritories(true, {})).toBe(false)
  })

  it('shows county territories when territory county data exists', () => {
    const runtimeData = {
      '78010': { uid: '78010', value: 2 }
    }

    expect(shouldShowCountyTerritories(true, runtimeData)).toBe(true)
  })

  it('hides county territories when the config flag is disabled even if territory data exists', () => {
    const runtimeData = {
      '72001': { uid: '72001', value: 1 }
    }

    expect(shouldShowCountyTerritories(false, runtimeData)).toBe(false)
  })

  it('hides county territories when the config flag is enabled but no territory data exists', () => {
    const runtimeData = {
      '06001': { uid: '06001', value: 1 }
    }

    expect(shouldShowCountyTerritories(true, runtimeData)).toBe(false)
  })
})
