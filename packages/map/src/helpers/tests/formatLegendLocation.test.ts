import { describe, it, expect } from 'vitest'
import { formatLegendLocation } from '../formatLegendLocation'
import { stateFipsToTwoDigit, supportedCounties } from '../../data/supported-geos'
import { titleCase } from '../titleCase'

describe('formatLegendLocation', () => {
  it('should format state name correctly', () => {
    const key = '12'
    const runtimeLookup = ''
    const stateName = stateFipsToTwoDigit[key.substring(0, 2)]
    const result = formatLegendLocation(key, runtimeLookup)
    expect(result).toBe(stateName)
  })

  it('should format state and county name correctly', () => {
    const key = '12001'
    const runtimeLookup = ''
    const stateName = stateFipsToTwoDigit[key.substring(0, 2)]
    const countyName = titleCase(supportedCounties[key])
    const result = formatLegendLocation(key, runtimeLookup)
    expect(result).toBe(`${stateName}, ${countyName}`)
  })

  it('should use runtimeLookup if state name is not found', () => {
    const key = '99'
    const runtimeLookup = 'Unknown State'
    const result = formatLegendLocation(key, runtimeLookup)
    expect(result).toBe(runtimeLookup)
  })

  it('should return empty string if state name and runtimeLookup are not found', () => {
    const key = '99'
    const runtimeLookup = ''
    const result = formatLegendLocation(key, runtimeLookup)
    expect(result).toBe('')
  })
})
