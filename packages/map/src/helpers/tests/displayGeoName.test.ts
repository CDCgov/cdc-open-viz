import { displayGeoName } from '../displayGeoName'

describe('displayGeoName', () => {
  it('resolves lowercase world iso codes to country names', () => {
    expect(displayGeoName('ssd')).toBe('South Sudan')
    expect(displayGeoName('usa')).toBe('United States of America')
  })

  it('prefers the provided display override', () => {
    expect(displayGeoName('ssd', 'Custom South Sudan')).toBe('Custom South Sudan')
  })

  it('ignores display overrides that only restate the raw code with different casing', () => {
    expect(displayGeoName('ssd', 'Ssd')).toBe('South Sudan')
    expect(displayGeoName('SSD', 'ssd')).toBe('South Sudan')
  })
})
