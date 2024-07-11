import { generateRuntimeLegendHash } from '../generateRuntimeLegendHash'
import usaExample from './../../../examples/default-usa.json'

describe('generateRuntimeLegendHash', () => {
  it('should return a hash value for a given state and runtime filters', () => {
    const runtimeFilters = []
    const expectedHash = 1253406922
    const result = generateRuntimeLegendHash(usaExample, runtimeFilters)
    expect(result).toBe(expectedHash)
  })
})
