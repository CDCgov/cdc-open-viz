import { describe, expect, it } from 'vitest'
import { isCountyGeographyIncluded, isCountyShapeSupported } from '../countyGeography'
import type { MapConfig } from '../../types/MapConfig'

const config = (type = 'data', showNeighboringStates = false) =>
  ({ general: { type, showNeighboringStates } } as MapConfig)

describe('county geography selection', () => {
  it('keeps state outlines and focused counties while excluding hidden neighbors', () => {
    expect(isCountyGeographyIncluded(config(), '01', '01')).toBe(true)
    expect(isCountyGeographyIncluded(config(), '06', '01')).toBe(true)
    expect(isCountyGeographyIncluded(config(), '01001', '01')).toBe(true)
    expect(isCountyGeographyIncluded(config(), '06001', '01')).toBe(false)
    expect(isCountyGeographyIncluded(config('data', true), '06001', '01')).toBe(true)
  })

  it('excludes counties only in the unfocused geocode overview', () => {
    expect(isCountyGeographyIncluded(config('us-geocode'), '01')).toBe(true)
    expect(isCountyGeographyIncluded(config('us-geocode'), '01001')).toBe(false)
    expect(isCountyGeographyIncluded(config('us-geocode'), '01001', '01')).toBe(true)
    expect(isCountyGeographyIncluded(config(), '01001')).toBe(true)
  })

  it('leaves broken shapes and territory selection to topology preparation', () => {
    expect(isCountyGeographyIncluded(config(), '51620')).toBe(true)
    expect(isCountyGeographyIncluded(config(), '72001')).toBe(true)
    expect(isCountyShapeSupported('51620')).toBe(false)
    expect(isCountyShapeSupported('51001')).toBe(true)
  })
})
