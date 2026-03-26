import { describe, expect, it } from 'vitest'
import { displayGeoName } from '../displayGeoName'

describe('displayGeoName', () => {
  it('prefers the full Micronesia label for the freely associated state code', () => {
    expect(displayGeoName('US-FM')).toBe('Federated States of Micronesia')
  })

  it('still honors an explicit display override', () => {
    expect(displayGeoName('US-FM', 'Micronesia')).toBe('Micronesia')
  })
})
