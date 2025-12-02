import { standardizeStateName } from '../standardizeState'

describe('standardizeStateName', () => {
  it('should return non-string values unchanged', () => {
    expect(standardizeStateName(123)).toBe(123)
    expect(standardizeStateName(null)).toBe(null)
    expect(standardizeStateName(undefined)).toBe(undefined)
    expect(standardizeStateName(true)).toBe(true)
  })

  it('should return numeric strings unchanged', () => {
    expect(standardizeStateName('123')).toBe('123')
    expect(standardizeStateName('456.78')).toBe('456.78')
  })

  it('should convert state abbreviations to full names', () => {
    expect(standardizeStateName('DC')).toBe('District of Columbia')
    expect(standardizeStateName('dc')).toBe('District of Columbia')
    expect(standardizeStateName('CA')).toBe('California')
    expect(standardizeStateName('ca')).toBe('California')
    expect(standardizeStateName('FM')).toBe('Federated States of Micronesia')
    expect(standardizeStateName('fm')).toBe('Federated States of Micronesia')
  })

  it('should handle Virgin Islands variations', () => {
    expect(standardizeStateName('VI')).toBe('U.S. VIRGIN ISLANDS')
    expect(standardizeStateName('vi')).toBe('U.S. VIRGIN ISLANDS')
    expect(standardizeStateName('Virgin Islands')).toBe('U.S. VIRGIN ISLANDS')
    expect(standardizeStateName('VIRGIN ISLANDS')).toBe('U.S. VIRGIN ISLANDS')
    expect(standardizeStateName('U.S. Virgin Islands')).toBe('U.S. VIRGIN ISLANDS')
    expect(standardizeStateName('US VIRGIN ISLANDS')).toBe('U.S. VIRGIN ISLANDS')
  })

  it('should verify "of" is lowercase in state names', () => {
    const dcName = standardizeStateName('DC')
    expect(dcName).toContain('of')
    expect(dcName).not.toContain('Of')

    const fmName = standardizeStateName('FM')
    expect(fmName).toContain('of')
    expect(fmName).not.toContain('Of')
  })

  it('should return original value for unknown state codes', () => {
    expect(standardizeStateName('ZZ')).toBe('ZZ')
    expect(standardizeStateName('Unknown State')).toBe('Unknown State')
  })

  it('should handle mixed case state names', () => {
    expect(standardizeStateName('California')).toBe('California')
    expect(standardizeStateName('CALIFORNIA')).toBe('CALIFORNIA')
    expect(standardizeStateName('cAlIfOrNiA')).toBe('cAlIfOrNiA')
  })
})
