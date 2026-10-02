import { displayGeoName } from '../displayGeoName'

describe('displayGeoName', () => {
  it('resolves lowercase world iso codes to country names', () => {
    expect(displayGeoName('ssd')).toBe('South Sudan')
    expect(displayGeoName('usa')).toBe('United States of America')
  })

  it('formats the District of Columbia state key as a display label', () => {
    expect(displayGeoName('US-DC')).toBe('District of Columbia')
  })

  it.each([
    ['US-AS', 'American Samoa'],
    ['US-VI', 'U.S. Virgin Islands'],
    ['US-MP', 'Northern Mariana Islands'],
    ['US-FM', 'Micronesia'],
    ['US-PW', 'Palau'],
    ['US-MH', 'Marshall Islands']
  ])('formats geography key %s as %s', (geographyKey, expectedName) => {
    expect(displayGeoName(geographyKey)).toBe(expectedName)
  })

  it('prefers the provided display override', () => {
    expect(displayGeoName('ssd', 'Custom South Sudan')).toBe('Custom South Sudan')
  })

  it('ignores display overrides that only restate the raw code with different casing', () => {
    expect(displayGeoName('ssd', 'Ssd')).toBe('South Sudan')
    expect(displayGeoName('SSD', 'ssd')).toBe('South Sudan')
  })
})
